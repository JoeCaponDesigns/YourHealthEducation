import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← THIS IS THE MISSING PIECE
  ],
  base: "/YourHealthEducation/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})