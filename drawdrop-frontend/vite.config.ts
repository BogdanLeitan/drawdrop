import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

const repoRoot = path.resolve(__dirname, "..");

export default defineConfig({
  plugins: [react(), svgrPlugin()],
  publicDir: path.resolve(repoRoot, "public"),
  server: {
    port: 5173,
    open: true,
    watch: {
      awaitWriteFinish: {
        stabilityThreshold: 500,
        pollInterval: 100,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^@excalidraw\/common$/,
        replacement: path.resolve(repoRoot, "packages/common/src/index.ts"),
      },
      {
        find: /^@excalidraw\/common\/(.*)/,
        replacement: path.resolve(repoRoot, "packages/common/src/$1"),
      },
      {
        find: /^@excalidraw\/element$/,
        replacement: path.resolve(repoRoot, "packages/element/src/index.ts"),
      },
      {
        find: /^@excalidraw\/element\/(.*)/,
        replacement: path.resolve(repoRoot, "packages/element/src/$1"),
      },
      {
        find: /^@excalidraw\/excalidraw$/,
        replacement: path.resolve(repoRoot, "packages/excalidraw/index.tsx"),
      },
      {
        find: /^@excalidraw\/excalidraw\/(.*)/,
        replacement: path.resolve(repoRoot, "packages/excalidraw/$1"),
      },
      {
        find: /^@excalidraw\/math$/,
        replacement: path.resolve(repoRoot, "packages/math/src/index.ts"),
      },
      {
        find: /^@excalidraw\/math\/(.*)/,
        replacement: path.resolve(repoRoot, "packages/math/src/$1"),
      },
      {
        find: /^@excalidraw\/utils$/,
        replacement: path.resolve(repoRoot, "packages/utils/src/index.ts"),
      },
      {
        find: /^@excalidraw\/utils\/(.*)/,
        replacement: path.resolve(repoRoot, "packages/utils/src/$1"),
      },
      {
        find: /^@excalidraw\/fractional-indexing$/,
        replacement: path.resolve(
          repoRoot,
          "packages/fractional-indexing/src/index.ts",
        ),
      },
      {
        find: /^@excalidraw\/laser-pointer$/,
        replacement: path.resolve(
          repoRoot,
          "packages/laser-pointer/src/index.ts",
        ),
      },
    ],
  },
});
