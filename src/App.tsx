import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"



function App() {
  

  return (
    
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show  when={{ base: false,sm: false, md: false, lg: true }}>
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
