
import { Input } from '@chakra-ui/react'

const SearchInput = () => {
  return (

    <Input 
    borderRadius={10} 
    placeholder="Search games..." 
    variant="outline" 
    color="cyan.400" 
    _placeholder={{ color: "inherit" }}
    />
    
  )
}

export default SearchInput