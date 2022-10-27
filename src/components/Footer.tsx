import { Text, chakra } from '@chakra-ui/react'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <Text textAlign={"center"} my={"3em"}>
    Created with 🧡 by{" "}
    <chakra.span as="a" href='https://github.com/Owoade' target={"_blank"} color="black" fontWeight={"extrabold"}>
      Owoade
    </chakra.span>{" "}
  </Text>
  )
}

export default Footer