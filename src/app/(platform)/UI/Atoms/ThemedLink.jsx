import { Link } from '@chakra-ui/next-js'
import React from 'react'

export default function ThemedLink({ children, href }) {
  return (
    <Link
      href={href}
      fontSize={{ lg: '2xl' }}
      color='text.100'

      _hover={{
        transition: 'all 0.3s',
        textDecoration: 'none',
        transform: 'scale(1.2)',
      }}

      _active={{
        transition: 'all 0.3s',
        transform: 'scale(0.9)',
      }}
    >
      {children}
    </Link>
  )
}
