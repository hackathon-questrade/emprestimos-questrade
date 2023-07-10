import { Link } from '@chakra-ui/next-js'
import { Image } from '@chakra-ui/react'
import React from 'react'

export default function VerticalBanner({ src }) {
  return (
    <Link href="/emprestimos">
      <Image src={src} alt='ad' />
    </Link>
  )
}
