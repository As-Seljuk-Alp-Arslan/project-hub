
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#defffe" },
          100: { value: "#b3fff8" },
          200: { value: "#86fef4" },
          300: { value: "#5bfef0" },
          400: { value: "#3dfeeb" },
          500: { value: "#31e5d2" },
          600: { value: "#22b2a3" },
          700: { value: "#137f74" },
          800: { value: "#004d46" },
          900: { value: "#001b17" },
          950: { value: "#001a17" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)