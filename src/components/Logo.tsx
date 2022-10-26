import { Text, chakra } from '@chakra-ui/react'
import React from 'react'

function Logo({ size }: { size?: string}) {
  return (
    <Text fontSize={ size ?? "25px" } display="inline-block" fontFamily={"Merienda One"}>
     once<chakra.span color="#7391C8">.</chakra.span>
    </Text>
  )
}

export default Logo