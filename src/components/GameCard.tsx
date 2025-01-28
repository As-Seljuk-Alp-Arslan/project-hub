

import { CardBody, CardRoot, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot borderRadius={0} overflow="hidden">
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
    </CardRoot>
  )
}

export default GameCard