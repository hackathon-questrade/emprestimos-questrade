import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Company({ children }) {
  return (
    <Text
      as="h2"
      fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
      textAlign={{ base: 'center', md: 'left' }}
      maxW={{ base: '100%', md: '50%' }}
      margin={{ base: 8, md: 0 }}
    >
      {children}
    </Text>
  )
}
