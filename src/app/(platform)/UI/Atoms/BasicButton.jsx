import { Link } from '@chakra-ui/next-js'
import { Button } from '@chakra-ui/react'
import React from 'react'

export default function BasicButton({ children, href }) {
  return (
    <Link href={href}>
      <Button
        width='full'
        fontSize={{ base: '12px', sm: '16px', md: '18px', lg: '20px' }}
        fontWeight='bold'
        bgGradient='linear(to-r, #3DA542 0%, #328636 100%)'
        textColor='text.100'
        rounded='full'
        transition="all 0.3s"
        padding="24px 64px"

        _hover={{
          background: 'linear(to-r, #3DA542 0%, #328636 100%)',
          transform: 'scale(1.1)',
        }}

        _active={{
          background: 'linear(to-r, #3DA542 0%, #328636 100%)',
          transform: 'scale(0.9)'
        }}
      >
        {children}
      </Button>
    </Link>
  )
}
