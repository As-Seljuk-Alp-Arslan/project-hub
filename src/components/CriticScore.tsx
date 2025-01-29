
import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? "green.500" : score > 60 ? "yellow.400" : "";
  return (
    <Badge color={color} fontSize="20px" scrollPaddingX={3} borderRadius="0">{score}</Badge>
  )
}

export default CriticScore