import { Link } from '@chakra-ui/next-js'
import { Image } from '@chakra-ui/react';
import React from 'react'

export default function LogoWhite() {
  return (
    <Link href="/">
      <Image src="/logo-white.svg" alt="Logo Questrade" width={{ base: '240px' }} height={{ base: '140px' }} p={{ base: 5, md: 2 }} />
    </Link>
  )
}