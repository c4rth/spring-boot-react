/** @type {import('vite').UserConfig} */
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        react(),
    ],
    optimizeDeps: {
        include: ['@emotion/styled'],
    },
    build: {
        sourcemap: false,
        outDir: "../src/main/resources/static",
        emptyOutDir: true,
    },
    server: {
        port: 3000,
    },
});