
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={8} overflow="hidden" padding={2}>
        {children}
    </Box>
  )
}

export default GameCardContainer