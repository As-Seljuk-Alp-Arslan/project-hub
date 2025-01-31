
import { Button, MenuTrigger, Stack} from '@chakra-ui/react';
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
        <Button variant="outline" size="sm" bgColor="blue.600">
          {selectedPlatform?.name || "Platforms"}
        </Button>
        </MenuTrigger>
        <MenuContent>
            <Stack spaceY={1}>
              {data.map(platform =>
              <MenuItemGroup onClick={() => onSelectPlatform(platform)} key={platform.id}><Button bgColor="teal.500">{platform.name}</Button></MenuItemGroup>)}
            </Stack>
        </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector