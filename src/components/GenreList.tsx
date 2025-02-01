import useGenres, { Genre } from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/image-url';
import { Button, Heading, HStack, Image, ListItem, ListRoot, Spinner,  } from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props ) => {
    const { data, isLoading, error} = useGenres();

    if (error) return null;
    
    if (isLoading) return <Spinner /> 

  return (
    <>
    <Heading fontSize="4xl" color="cyan.400">Genres</Heading>
    <ListRoot>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image 
              height="65px"
              width="65px"
              borderRadius={8} 
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)} 
              />
              <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)} fontSize="sm" variant="surface">{genre.name}</Button>
            </HStack>
            </ListItem>
        ))}
    </ListRoot>
    </>
  )
}

export default GenreList