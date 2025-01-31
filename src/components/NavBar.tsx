import { HStack, Image} from '@chakra-ui/react'
import ProjectLogo from "../assets/LogoEbay-modified.png"
import ThemeToggleBtn from './ThemeToggleBtn'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding="10px">
        <Image src={ProjectLogo} boxSize="80px" />
        <SearchInput />
        <ThemeToggleBtn />
    </HStack>
  )
}

export default NavBar