import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function H2({ children, color }) {
  return (
    <Heading
      as='h2'
      fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
      fontWeight='bold'
      color={color}
    >
      {children}
    </Heading>
  )
}
