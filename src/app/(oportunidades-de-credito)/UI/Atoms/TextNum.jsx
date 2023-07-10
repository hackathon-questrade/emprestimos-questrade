import { Text } from '@chakra-ui/react'
import React from 'react'

export default function TextNum({ children }) {
  return (
    <Text
      w="100%"
      color='text.100'
      fontSize={{ base: 'md', md: 'xl', xl: '3xl' }}
    >
      {children}
    </Text>
  )
}
