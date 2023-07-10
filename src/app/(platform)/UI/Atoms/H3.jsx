import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function H3({ children, color }) {
  return (
    <Heading
      as='h3'
      fontSize={{ base: 'md', sm: 'lg', md: '2xl' }}
      textAlign='center'
      fontWeight='normal'
      color={color}
    >
      {children}
    </Heading>
  )
}
