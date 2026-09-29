<script setup>
import { onBeforeUnmount, onMounted, watch, ref } from 'vue'
import L from 'leaflet'
import 'leaflet.markercluster'
import { CATEGORY_METADATA, ORGANIZATION_METADATA } from '../data/mockData'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  organizations: {
    type: Array,
    required: true
  },
  placementMode: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['select-item', 'select-organization', 'pick-location'])
const mapElement = ref(null)
let map
let itemLayers = new Map()
let organizationLayer

const CLUSTER_SIZE = 54

const makeIcon = (className, icon, label) => L.divIcon({
  className: `circula-marker ${className}`,
  html: `<img src="${icon}" alt="${label}" />`,
  iconSize: [56, 56],
  iconAnchor: [28, 28]
})

const makeClusterIcon = (metadata) => (cluster) => L.divIcon({
  className: `circula-cluster cluster-${metadata.className}`,
  html: `<div><img src="${metadata.icon}" alt="${metadata.label}" /><strong>${cluster.getChildCount()}</strong></div>`,
  iconSize: [CLUSTER_SIZE, CLUSTER_SIZE],
  iconAnchor: [CLUSTER_SIZE / 2, CLUSTER_SIZE / 2]
})

const makeClusterGroup = (metadata) => L.markerClusterGroup({
  showCoverageOnHover: false,
  maxClusterRadius: 52,
  spiderfyOnMaxZoom: true,
  iconCreateFunction: makeClusterIcon(metadata)
})

const ensureItemLayer = (category) => {
  const metadata = CATEGORY_METADATA[category] || CATEGORY_METADATA.Outros
  if (!itemLayers.has(category)) {
    const layer = makeClusterGroup(metadata)
    itemLayers.set(category, layer)
    layer.addTo(map)
  }
  return itemLayers.get(category)
}

const renderItems = () => {
  if (!map) return
  itemLayers.forEach((layer) => layer.clearLayers())
  props.items.forEach((item) => {
    const metadata = CATEGORY_METADATA[item.category] || CATEGORY_METADATA.Outros
    L.marker(item.coordinates, { icon: makeIcon('item-marker', metadata.icon, metadata.label) })
      .addTo(ensureItemLayer(item.category))
      .on('click', () => emit('select-item', item))
  })
}

const renderOrganizations = () => {
  if (!organizationLayer) return
  organizationLayer.clearLayers()
  props.organizations.forEach((organization) => {
    L.marker(organization.coordinates, { icon: makeIcon('org-marker', ORGANIZATION_METADATA.icon, ORGANIZATION_METADATA.label) })
      .addTo(organizationLayer)
      .on('click', () => emit('select-organization', organization))
  })
}

const handleMapClick = (event) => {
  if (!props.placementMode) return
  emit('pick-location', [Number(event.latlng.lat.toFixed(5)), Number(event.latlng.lng.toFixed(5))])
}

onMounted(() => {
  map = L.map(mapElement.value, { zoomControl: false }).setView([-27.5949, -48.5482], 10)
  L.control.zoom({ position: 'bottomright' }).addTo(map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)
  map.on('click', handleMapClick)
  organizationLayer = makeClusterGroup(ORGANIZATION_METADATA).addTo(map)
  renderItems()
  renderOrganizations()
})

watch(() => props.items, renderItems, { deep: true })
watch(() => props.organizations, renderOrganizations, { deep: true })

onBeforeUnmount(() => {
  if (map) {
    map.off('click', handleMapClick)
    map.remove()
    map = undefined
    itemLayers = new Map()
    organizationLayer = undefined
  }
})
</script>

<template>
  <div ref="mapElement" class="map-canvas" aria-label="Mapa de doações da Grande Florianópolis"></div>
</template>
