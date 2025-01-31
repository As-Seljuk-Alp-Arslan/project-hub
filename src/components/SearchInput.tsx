
import { Input, InputElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (

    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value);
    }}>
      <InputElement children={<BsSearch />}/>
      <Input
      borderRadius={10}
      placeholder="Search games..."
      variant="outline"
      color="cyan.400"
      _placeholder={{ color: "inherit" }}
      ref={ref}
      />
    </form>
    
  )
}

export default SearchInput