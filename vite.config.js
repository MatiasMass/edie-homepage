import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// export default defineConfig({
//   // omit
// })
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
