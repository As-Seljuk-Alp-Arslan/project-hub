
import { CardBody, CardRoot, Skeleton } from '@chakra-ui/react'
import { SkeletonText } from './ui/skeleton'

const GameCardSkeleton = () => {
  return (
    <CardRoot width="280px" borderRadius={0} overflow="hidden">
        <Skeleton height="200px" variant="shine" colorPalette="teal"/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </CardRoot>
  )
}

export default GameCardSkeleton