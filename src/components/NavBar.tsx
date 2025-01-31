import { HStack, Image} from '@chakra-ui/react'
import ProjectLogo from "../assets/LogoEbay-modified.png"
import ThemeToggleBtn from './ThemeToggleBtn'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
        <Image src={ProjectLogo} boxSize="80px" />
        <SearchInput onSearch={onSearch}/>
        <ThemeToggleBtn />
    </HStack>
  )
}

export default NavBar