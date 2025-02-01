
import { ClientOnly, HStack, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu"

const ThemeToggleBtn = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  
  return (
    <HStack>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="ghost" size="md" bg="brand.600">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
    </HStack>
  )
}

export default ThemeToggleBtn
