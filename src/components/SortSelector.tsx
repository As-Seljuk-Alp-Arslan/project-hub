
import { Button, MenuContent, MenuRoot, MenuTrigger, Stack } from '@chakra-ui/react'
import { MenuItemGroup } from './ui/menu';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders= [
    { value: "" , label: "Relevance" },
    { value: "-added" , label: "Date added" },
    { value: "name" , label: "Name" },
    { value: "-released" , label: "Release date" },
    { value: "-metacritic" , label: "Popularity" },
    { value: "-rating" , label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

  return (
      <MenuRoot>
          <MenuTrigger>
          <Button variant="outline" size="sm"  bgColor="blue.600">
            Order: {currentSortOrder?.label || "Relevance"}
          </Button>
          </MenuTrigger>
          <MenuContent>
              <Stack spaceY={1}>
                  {sortOrders.map((order) => ( 
                  <MenuItemGroup onClick={() => onSelectSortOrder(order.value)} key={order.value}><Button bgColor="teal.500">{order.label}</Button></MenuItemGroup>
                  ))}
              </Stack>
          </MenuContent>
      </MenuRoot>
    )
}

export default SortSelector