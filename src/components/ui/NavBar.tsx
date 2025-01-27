import { HStack, Image, Text } from '@chakra-ui/react'
import ProjectLogo from "../../assets/LogoEbay-modified.png"

const NavBar = () => {
  return (
    <HStack>
        <Image src={ProjectLogo} boxSize="80px" />
        <Text>Hola</Text>
    </HStack>
  )
}

export default NavBar