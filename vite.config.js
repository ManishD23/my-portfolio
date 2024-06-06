import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src", "index.html"),
        about: resolve(__dirname, "src", "about.html"),
        contact: resolve(__dirname, "src", "contact-us.html"),
        project: resolve(__dirname, "src", "projects.html"),
      },
    },
    outDir: "../dist",
  },
  server: {
    port: 8000,
  },
};
