import { defineConfig } from 'vite';

export default {
  esbuild: {
    // Enable support for importing ES modules
    // and specify the entry point for the build
    include: /src\/(.*\.js|.*\.jsx|.*\.ts|.*\.tsx)$/
  },
  server: {
    port: 3000,       // Порт сервера
    host: '0.0.0.0',
  },
}

