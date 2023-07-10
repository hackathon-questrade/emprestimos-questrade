import { Link } from '@chakra-ui/next-js'
import { Image } from '@chakra-ui/react'
import React from 'react'

export default function HorizontalBanner() {
  return (
    <Link href="/emprestimos">
      <Image src="/banner.png" alt='ad' />
    </Link>
  )
}
