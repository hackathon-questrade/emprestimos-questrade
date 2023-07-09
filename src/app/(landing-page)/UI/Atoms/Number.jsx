import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function Number({ children, color }) {
  return (
    <Heading
      as='h4'
      fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
      color={color}
    >
      {children}
    </Heading>
  )
}
