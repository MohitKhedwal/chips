import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or other plugins based on your framework
import pluginRewriteAll from "vite-plugin-rewrite-all"

export default defineConfig({
  plugins: [react(),pluginRewriteAll()],
  // You can add more configurations here
});
