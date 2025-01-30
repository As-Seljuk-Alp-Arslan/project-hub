
import { Button, MenuTrigger} from '@chakra-ui/react';
import {
  MenuContent,
  MenuItemGroup,
  MenuRoot,
} from "@/components/ui/menu"
import usePlatforms from "@/hooks/usePlatforms"
import { Platform } from '../hooks/useGames';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const {data, error} = usePlatforms(); 

    if (error) return null;

  return (
    <MenuRoot>
        <MenuTrigger>
        <Button variant="outline" size="sm" >
          {selectedPlatform?.name || "Platforms"}
        </Button>
        </MenuTrigger>
        <MenuContent>
            {data.map(platform => <MenuItemGroup onClick={() => onSelectPlatform(platform)} key={platform.id}><Button>{platform.name}</Button></MenuItemGroup>)}
        </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector