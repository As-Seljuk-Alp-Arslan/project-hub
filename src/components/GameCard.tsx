

import { CardBody, CardRoot, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot borderRadius={0} overflow="hidden">
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize="2xl">{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
    </CardRoot>
  )
}

export default GameCard