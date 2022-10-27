import { Box } from '@chakra-ui/react'
import React from 'react'

interface IWrapper {
    children: React.ReactNode
}

function Wrapper({ children }: IWrapper) {
  return (
    <Box width={{lg:"900px", base: "95%"}} margin="0 auto">
        { children }
    </Box>
  )
}

export default Wrapper