import theme from '@/app/theme/theme'
import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Description({ children, color, maxW }) {
  return (
    <Text
      w="100%"
      maxW={maxW}
      p={5}
      color={color}
      fontSize={{ base: 'md', md: 'xl', xl: '3xl' }}
    >
      {children}
    </Text>
  )
}
