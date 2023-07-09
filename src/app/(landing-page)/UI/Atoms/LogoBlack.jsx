import { Link } from '@chakra-ui/next-js'
import { Image } from '@chakra-ui/react';
import React from 'react'

export default function LogoBlack() {
  return (
    <Link href="/">
      <Image src="/logo-black.svg" alt="Logo Questrade" width={{ base: '120px', md: '140px' }} height={{ base: '100px', md: '120px' }} />
    </Link>
  )
}
