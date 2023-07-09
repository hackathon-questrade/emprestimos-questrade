import { Button } from '@chakra-ui/react'
import React from 'react'

export default function DrawerButton({ children, onClick }) {
  return (
    <Button
      display={{ base: 'flex', lg: 'none' }}
      background='linear-gradient(135deg, #3DA542 0%, #328636 100%)'
      color='white'
      onClick={onClick}
      _hover={{
        transform: 'scale(1.2)',
      }}>
      {children}
    </Button>
  )
}
