<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})

defineEmits(['close'])
</script>

<template>
  <div class="modal-backdrop" role="presentation" @click.self="$emit('close')">
    <section class="modal-card" role="dialog" aria-modal="true" :aria-label="title">
      <header class="modal-header">
        <h2>{{ title }}</h2>
        <button class="icon-button" type="button" aria-label="Fechar" @click="$emit('close')">×</button>
      </header>
      <slot />
    </section>
  </div>
</template>
