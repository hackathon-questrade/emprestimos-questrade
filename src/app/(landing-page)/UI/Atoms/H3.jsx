import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function H3({ children, color }) {
  return (
    <Heading
      as='h3'
      fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
      textAlign='center'
      maxW={{ base: '100%', md: '50%' }}
      fontWeight='normal'
      color={color}
    >
      {children}
    </Heading>
  )
}
