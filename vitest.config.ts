import { defineConfig } from "vitest/config";

export default defineConfig({
   test: {
      coverage: {
         provider: "v8",
         reporter: [["lcov", { projectRoot: "./src" }], ["json", { file: "coverage.json" }], ["text"]],
      },
   },
});
