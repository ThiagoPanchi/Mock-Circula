import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/Mock-Circula/' : '/'),
  plugins: [vue()]
})
