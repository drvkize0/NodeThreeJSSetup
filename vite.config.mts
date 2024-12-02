import {defineConfig } from 'vite';
import path from 'path';
import ViteRestart from 'vite-plugin-restart';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['cjs'],
            name: 'test-renderer',
            fileName: 'index'
        },
        outDir: 'dist',
        sourcemap: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        ViteRestart({
            restart: ['src/**/*', 'index.css', 'index.html'],
            reload: ['dist/**/*']
        })
    ]
});