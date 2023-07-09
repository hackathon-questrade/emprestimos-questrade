import theme from '@/app/theme/theme'
import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function Title({ children, color }) {
  return (
    <Heading
      as='h1'
      maxW={{ base: '320px', sm: 'sm', md: 'xl' }}
      textColor='white'
      fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
      fontWeight='bold'
      color={color}
    >
      {children}
    </Heading>
  )
}
