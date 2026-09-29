<script setup>
import logoCircula from '../../logo-circula.png'

defineEmits(['enter', 'register'])
</script>

<template>
  <main class="entry-shell">
    <section class="hero-card">
      <img class="entry-logo" :src="logoCircula" alt="Circula" />
      <p class="eyebrow">Mock WebGIS solidário</p>
      <p class="hero-copy">Unindo doações com quem precisa na Grande Florianópolis.</p>
      <p class="mock-note">Experiência demonstrativa com dados fictícios, sem login real ou persistência.</p>

      <div class="login-panel" aria-label="Login simulado">
        <label>
          Email
          <input type="email" value="visitante@circula.demo" readonly />
        </label>
        <label>
          Senha
          <input type="password" value="demonstracao" readonly />
        </label>
      </div>

      <div class="entry-actions">
        <button class="primary-button" type="button" @click="$emit('enter')">Entrar como visitante</button>
        <button class="ghost-button" type="button" @click="$emit('register')">Registrar</button>
      </div>
    </section>
  </main>
</template>
