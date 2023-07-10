import { Button } from '@chakra-ui/react'
import React from 'react'

export default function SentButton({ children }) {
  return (
    <Button
      fontSize={{ base: '12px', sm: '16px', md: '18px', lg: '20px' }}
      fontWeight='bold'
      bg='transparent'
      border="2px"
      borderColor='green.100'
      textColor='green.100'
      rounded='full'
      transition="all 0.3s"
      padding="24px 64px"
      boxShadow='sm'
    >
      {children}
    </Button>
  )
}
