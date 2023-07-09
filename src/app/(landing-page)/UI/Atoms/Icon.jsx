import { Image } from '@chakra-ui/react'
import React from 'react'

export default function Icon({ src, alt, w, h }) {
  return (
    <Image src={src} alt={alt} w={w} h={h} />
  )
}
