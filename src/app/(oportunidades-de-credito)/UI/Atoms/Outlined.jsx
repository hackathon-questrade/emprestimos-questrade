import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Outlined({ children }) {
  return (
    <Button
      fontSize={{ base: '12px', sm: '16px', md: '18px', lg: '20px' }}
      fontWeight='bold'
      bg='transparent'
      border="2px"
      borderColor='green.100'
      textColor='text.100'
      rounded='full'
      transition="all 0.3s"
      padding="24px 64px"

      _hover={{
        bgColor: 'green.100',
        transform: 'scale(1.1)',
      }}

      _active={{
        bgColor: 'green.100',
        transform: 'scale(0.9)'
      }}
    >
      {children}
    </Button>
  )
}
