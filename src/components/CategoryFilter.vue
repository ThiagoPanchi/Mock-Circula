<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  selected: {
    type: String,
    required: true
  }
})

defineEmits(['change'])
</script>

<template>
  <div class="filter-card" aria-label="Filtro por categoria">
    <span>Filtrar itens</span>
    <div class="filter-list">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        :class="['filter-pill', { active: selected === category }]"
        @click="$emit('change', category)"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>
