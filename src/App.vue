<script setup>
import { computed, ref } from 'vue'
import DonationMap from './components/DonationMap.vue'
import EntryScreen from './components/EntryScreen.vue'
import ModalPanel from './components/ModalPanel.vue'
import { CATEGORY_METADATA, ITEM_CATEGORIES, ORGANIZATION_METADATA, donationItems, organizations } from './data/mockData'
import logoCircula from '../logo.png'

const organizationMarkerId = 'organization'
const markerTypeOptions = [
  {
    id: organizationMarkerId,
    label: ORGANIZATION_METADATA.label,
    icon: ORGANIZATION_METADATA.icon,
    type: 'organization'
  },
  ...ITEM_CATEGORIES.map((category) => ({
    id: `category:${category}`,
    label: CATEGORY_METADATA[category].label,
    icon: CATEGORY_METADATA[category].icon,
    type: 'category',
    category
  }))
]
const allMarkerTypeIds = markerTypeOptions.map((option) => option.id)

const defaultNewItem = () => ({
  category: 'Alimentos',
  name: '',
  description: '',
  condition: '',
  reason: '',
  locationText: '',
  photoLabel: ''
})

const entered = ref(false)
const selectedMarkerTypeIds = ref([...allMarkerTypeIds])
const selectedItem = ref(null)
const selectedOrganization = ref(null)
const activePanel = ref(null)
const temporaryItems = ref([])
const newItemForm = ref(defaultNewItem())
const pickedCoordinates = ref(null)
const placementMode = ref(false)

const allItems = computed(() => [...donationItems, ...temporaryItems.value])

const selectedMarkerTypeSet = computed(() => new Set(selectedMarkerTypeIds.value))

const mapItems = computed(() => allItems.value.filter((item) => selectedMarkerTypeSet.value.has(`category:${item.category}`)))
const visibleOrganizations = computed(() => (selectedMarkerTypeSet.value.has(organizationMarkerId) ? organizations : []))

const toggleMarkerType = (id) => {
  if (selectedMarkerTypeSet.value.has(id)) {
    selectedMarkerTypeIds.value = selectedMarkerTypeIds.value.filter((selectedId) => selectedId !== id)
    return
  }

  selectedMarkerTypeIds.value = [...selectedMarkerTypeIds.value, id]
}

const enableAllMarkerTypes = () => {
  selectedMarkerTypeIds.value = [...allMarkerTypeIds]
}

const removeAllMarkerTypes = () => {
  selectedMarkerTypeIds.value = []
}

const closeModals = () => {
  selectedItem.value = null
  selectedOrganization.value = null
  activePanel.value = null
  placementMode.value = false
}

const openItem = (item) => {
  closeModals()
  selectedItem.value = item
}

const openOrganization = (organization) => {
  closeModals()
  selectedOrganization.value = organization
}

const openPanel = (panel) => {
  closeModals()
  activePanel.value = panel
}

const openNewItem = () => {
  closeModals()
  newItemForm.value = defaultNewItem()
  pickedCoordinates.value = null
  activePanel.value = 'newItem'
}

const beginPlacement = () => {
  placementMode.value = true
  activePanel.value = null
}

const handleLocationPick = (coordinates) => {
  pickedCoordinates.value = coordinates
  placementMode.value = false
  activePanel.value = 'newItem'
}

const addTemporaryItem = () => {
  const form = newItemForm.value
  const hasAddress = form.locationText.trim().length > 0
  if (!form.name.trim() || !form.description.trim() || !form.condition.trim() || (!pickedCoordinates.value && !hasAddress)) return

  const coordinates = pickedCoordinates.value || [-27.5949, -48.5482]
  const item = {
    id: `temporary-${Date.now()}`,
    name: form.name.trim(),
    category: form.category,
    description: form.description.trim(),
    condition: form.condition.trim(),
    reason: form.reason.trim() || 'Item adicionado no mock pelo visitante.',
    imageLabel: form.photoLabel.trim() || 'Item temporário',
    locationName: pickedCoordinates.value
      ? `Ponto selecionado no mapa (${coordinates[0]}, ${coordinates[1]})`
      : `${form.locationText.trim()} (endereço informado, posição aproximada no mapa)`,
    coordinates,
    donorName: 'Visitante Circula',
    contact: 'Contato fictício do visitante',
    temporary: true
  }
  temporaryItems.value = [...temporaryItems.value, item]
  newItemForm.value = defaultNewItem()
  pickedCoordinates.value = null
  closeModals()
  selectedItem.value = item
}
</script>

<template>
  <EntryScreen v-if="!entered" @enter="entered = true" @register="openPanel('register')" />

  <main v-else class="app-shell">
    <section class="map-stage">
      <DonationMap
        :items="mapItems"
        :organizations="visibleOrganizations"
        :placement-mode="placementMode"
        @select-item="openItem"
        @select-organization="openOrganization"
        @pick-location="handleLocationPick"
      />
      <div v-if="placementMode" class="placement-banner">
        <strong>Clique no mapa para posicionar o novo item.</strong>
        <button type="button" class="ghost-button compact" @click="placementMode = false; activePanel = 'newItem'">Cancelar</button>
      </div>
      <div class="top-bar">
        <div class="brand-block">
          <div class="brand-lockup" aria-label="Circula">
            <img class="brand-logo" :src="logoCircula" alt="" />
            <span class="brand-name">Circula</span>
          </div>
          <small>Dados fictícios para demonstração</small>
        </div>
        <div class="action-row">
          <button type="button" class="secondary-button" @click="openPanel('profile')">Perfil</button>
          <button type="button" class="primary-button compact" @click="openNewItem">Novo item</button>
        </div>
      </div>
      <aside class="side-panel" aria-label="Filtro e legenda do mapa">
        <section class="marker-selector" aria-label="Selecionar ícones visíveis no mapa">
          <div class="selector-header">
            <div>
              <span>Filtro e legenda</span>
              <small>Escolha os ícones visíveis no mapa.</small>
            </div>
            <strong>{{ selectedMarkerTypeIds.length }}/{{ markerTypeOptions.length }}</strong>
          </div>
          <div class="selector-actions" aria-label="Ações do filtro">
            <button type="button" class="secondary-button compact" @click="enableAllMarkerTypes">Habilitar todos</button>
            <button type="button" class="ghost-button compact" @click="removeAllMarkerTypes">Remover todos</button>
          </div>
          <div class="marker-option-list">
            <button
              v-for="option in markerTypeOptions"
              :key="option.id"
              type="button"
              :class="['marker-option', { active: selectedMarkerTypeSet.has(option.id) }]"
              :aria-pressed="selectedMarkerTypeSet.has(option.id)"
              @click="toggleMarkerType(option.id)"
            >
              <img :src="option.icon" :alt="option.label" />
              <span>{{ option.label }}</span>
            </button>
          </div>
        </section>
      </aside>
    </section>
  </main>

  <ModalPanel v-if="activePanel === 'register'" title="Cadastro simulado" @close="closeModals">
    <p class="modal-note">Este cadastro é apenas visual. Nenhum dado será salvo ou validado.</p>
    <form class="mock-form" @submit.prevent>
      <label>Nome<input value="Visitante Circula" readonly /></label>
      <label>CPF<input value="000.000.000-00 (fictício)" readonly /></label>
      <label>Endereço<input value="Grande Florianópolis, localização aproximada" readonly /></label>
      <label>Telefone<input value="(48) 90000-0000 fictício" readonly /></label>
      <label>Email<input value="visitante@exemplo.local" readonly /></label>
      <button class="primary-button" type="submit">Simular cadastro</button>
    </form>
  </ModalPanel>

  <ModalPanel v-if="activePanel === 'profile'" title="Perfil visitante" @close="closeModals">
    <p class="modal-note">Perfil demonstrativo. As edições não são persistidas.</p>
    <dl class="detail-list">
      <div><dt>Nome</dt><dd>Visitante Circula</dd></div>
      <div><dt>Interesse</dt><dd>Encontrar doações e organizações próximas</dd></div>
      <div><dt>Localização</dt><dd>Grande Florianópolis, área aproximada</dd></div>
    </dl>
  </ModalPanel>

  <ModalPanel v-if="activePanel === 'newItem'" title="Novo item simulado" @close="closeModals">
    <p class="modal-note">O item será adicionado apenas nesta sessão. Ao atualizar a página, ele desaparece.</p>
    <form class="mock-form" @submit.prevent="addTemporaryItem">
      <label>Categoria<select v-model="newItemForm.category"><option v-for="category in ITEM_CATEGORIES" :key="category">{{ category }}</option></select></label>
      <label>Nome do item<input v-model="newItemForm.name" placeholder="Ex.: Mesa de estudos" required /></label>
      <label>Descrição<textarea v-model="newItemForm.description" placeholder="Descreva o item ou serviço" required></textarea></label>
      <label>Estado/qualidade<input v-model="newItemForm.condition" placeholder="Bom estado" required /></label>
      <label>Motivo da doação<input v-model="newItemForm.reason" placeholder="Mudança, campanha, reuso..." /></label>
      <label>Foto/placeholder<input v-model="newItemForm.photoLabel" placeholder="Ex.: Foto do item" /></label>
      <label>Endereço ou referência<input v-model="newItemForm.locationText" placeholder="Ex.: Trindade, Florianópolis" /></label>
      <div class="pickup-tools">
        <button class="secondary-button" type="button" @click="beginPlacement">Adicionar clicando no mapa</button>
        <p v-if="pickedCoordinates">Ponto selecionado: {{ pickedCoordinates[0] }}, {{ pickedCoordinates[1] }}</p>
        <p v-else>Use um endereço/referência ou clique no mapa para definir a posição aproximada.</p>
      </div>
      <button class="primary-button" type="submit">Simular envio</button>
    </form>
  </ModalPanel>

  <ModalPanel v-if="selectedItem" :title="selectedItem.name" @close="closeModals">
    <div class="placeholder-image">{{ selectedItem.imageLabel }}</div>
    <dl class="detail-list">
      <div><dt>Categoria</dt><dd>{{ selectedItem.category }}</dd></div>
      <div><dt>Descrição</dt><dd>{{ selectedItem.description }}</dd></div>
      <div><dt>Estado</dt><dd>{{ selectedItem.condition }}</dd></div>
      <div><dt>Motivo</dt><dd>{{ selectedItem.reason }}</dd></div>
      <div><dt>Retirada</dt><dd>{{ selectedItem.locationName }}</dd></div>
      <div><dt>Doador</dt><dd>{{ selectedItem.donorName }}</dd></div>
      <div><dt>Contato fictício</dt><dd>{{ selectedItem.contact }}</dd></div>
      <div v-if="selectedItem.temporary"><dt>Status</dt><dd>Item temporário desta sessão, sem persistência.</dd></div>
    </dl>
  </ModalPanel>

  <ModalPanel v-if="selectedOrganization" :title="selectedOrganization.name" @close="closeModals">
    <dl class="detail-list">
      <div><dt>Quem são</dt><dd>{{ selectedOrganization.description }}</dd></div>
      <div><dt>Público atendido</dt><dd>{{ selectedOrganization.audience }}</dd></div>
      <div><dt>Localização</dt><dd>{{ selectedOrganization.locationName }}</dd></div>
      <div><dt>Página</dt><dd><a :href="selectedOrganization.page" target="_blank" rel="noreferrer">{{ selectedOrganization.page }}</a></dd></div>
      <div><dt>Contato fictício</dt><dd>{{ selectedOrganization.contact }}</dd></div>
      <div><dt>Recebe</dt><dd>{{ selectedOrganization.acceptedDonations.join(', ') }}</dd></div>
    </dl>
  </ModalPanel>
</template>
