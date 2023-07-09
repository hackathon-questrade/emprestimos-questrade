import theme from '@/app/theme/theme'
import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Description({ children, color }) {
  return (
    <Text
      w="100%"
      p={5}
      color={color}
      fontSize={{ base: 'md', md: 'xl', xl: '2xl' }}
    >
      {children}
    </Text>
  )
}
