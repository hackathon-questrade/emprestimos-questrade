import { Flex } from '@chakra-ui/react'
import React from 'react'
import Description from '../Atoms/Description'

export default function Footer() {
  return (
    <Flex
      textAlign='center'
      bgColor='gray.200'
      w='full'
    >
      <Description>
        Você sabia que a Questrade nasceu no canadá?
      </Description>
    </Flex>
  )
}