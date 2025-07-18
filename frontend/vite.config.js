import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [react() , tailwindcss(),],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
     watch: {
      usePolling: true,   // necesario para hot reload en Docker
    }
  }
})
