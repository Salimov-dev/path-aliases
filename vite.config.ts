import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filePath = fileURLToPath(import.meta.url); // /Users/user/path-aliases/vite.config.ts
const __dirname = dirname(__filePath); // /Users/user/path-aliases

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@UI": path.resolve(__dirname, "./src/components/UI"), // /Users/user/path-aliases/src/components/UI
      "@common": path.resolve(__dirname, "./src/components/common"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets")
    }
  }
});
