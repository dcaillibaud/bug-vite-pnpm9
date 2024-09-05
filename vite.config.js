import { resolve } from 'path'
import { defineConfig /*, splitVendorChunkPlugin */ } from 'vite'

export default defineConfig({
  resolve: {
    // solving the pb https://github.com/vitejs/vite/issues/17805
    // with this solution https://github.com/vitejs/vite/issues/17459#issuecomment-2325989246
    preserveSymlinks: true
  }
})
