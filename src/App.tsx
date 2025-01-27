import { Grid, GridItem, Show } from "@chakra-ui/react"



function App() {
  

  return (
    
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="cyan.500">
        Nav
      </GridItem>
      <Show  when={{ base: false,sm: false, md: false, lg: true }}> // Changed code here
      <GridItem area="aside" bg="skyblue">
        Aside
      </GridItem>
      </Show>
      <GridItem area="main" bg="crimson">
        Main
      </GridItem>
    </Grid>
    
  )
}

export default App
