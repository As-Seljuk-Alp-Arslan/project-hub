import useGenres, { Genre } from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/image-url';
import { Button, HStack, Image, ListItem, ListRoot, Spinner,  } from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props ) => {
    const { data, isLoading, error} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner /> 

  return (
    <ListRoot>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image 
              height="75px"
              width="75px"
              borderRadius={0} 
              src={getCroppedImageUrl(genre.image_background)} 
              />
              <Button fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)} fontSize="sm" variant="surface">{genre.name}</Button>
            </HStack>
            </ListItem>
        ))}
    </ListRoot>
  )
}

export default GenreList