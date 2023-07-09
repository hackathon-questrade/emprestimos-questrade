import theme from '@/app/theme/theme'
import { Text } from '@chakra-ui/react'
import React from 'react'

export default function SubTitle({ children }) {
  return (
    <Text
      as='p'
      maxW={{ base: '320px', sm: 'sm', md: 'xl' }}
      fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl', xl: '2xl' }}
      mt={{ base: 2, md: 5 }}
      mr={{ base: 2 }}
      color={theme.colors.text[100]}
    >
      {children}
    </Text>
  )
}
