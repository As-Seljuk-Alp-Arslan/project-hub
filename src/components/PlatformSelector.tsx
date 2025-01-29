
import { Button, MenuTrigger } from "@chakra-ui/react"
import {
  MenuContent,
  MenuItemGroup,
  MenuRoot,
} from "@/components/ui/menu"
import { HiCog } from "react-icons/hi"
import usePlatforms from "@/hooks/usePlatforms"

const PlatformSelector = () => {
    const {data, error} = usePlatforms();

    if (error) return null;

  return (
    <MenuRoot>
        <MenuTrigger>
        <Button variant="outline" size="sm">
          <HiCog /> Platforms
        </Button>
        </MenuTrigger>
        <MenuContent>
            {data.map(platform => <MenuItemGroup key={platform.id}>{platform.name}</MenuItemGroup>)}
        </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector