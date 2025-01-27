import { HStack, Image} from '@chakra-ui/react'
import ProjectLogo from "../assets/LogoEbay-modified.png"
import ThemeToggleBtn from './ThemeToggleBtn'

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
        <Image src={ProjectLogo} boxSize="80px" />
        <ThemeToggleBtn />
    </HStack>
  )
}

export default NavBar