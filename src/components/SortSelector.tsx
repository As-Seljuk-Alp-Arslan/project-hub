import { Button, HStack, MenuContent, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import { MenuItemGroup } from './ui/menu';

const SortSelector = () => {
  return (
      <MenuRoot>
          <MenuTrigger>
          <Button variant="outline" size="sm"  bgColor="blue.600">
            Order: By relevance
          </Button>
          </MenuTrigger>
          <MenuContent>
              <HStack spaceX={1}>
                  <MenuItemGroup><Button bgColor="teal.500">Relevance</Button></MenuItemGroup>
                  <MenuItemGroup><Button bgColor="teal.500">Date added</Button></MenuItemGroup>
                  <MenuItemGroup><Button bgColor="teal.500">Name</Button></MenuItemGroup>
                  <MenuItemGroup><Button bgColor="teal.500">Release date</Button></MenuItemGroup>
                  <MenuItemGroup><Button bgColor="teal.500">Popularity</Button></MenuItemGroup>
                  <MenuItemGroup><Button bgColor="teal.500">Average rating</Button></MenuItemGroup>
              </HStack>
          </MenuContent>
      </MenuRoot>
    )
}

export default SortSelector