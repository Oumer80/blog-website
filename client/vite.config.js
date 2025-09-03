   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
 import * as process from 'process'
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     define: {
       __APP_ENV__: JSON.stringify(process.env.VITE_BACKEND_URL),
     },
   });