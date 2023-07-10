import { Spinner } from '@chakra-ui/react'
import React from 'react'

export default function QSpinn() {
  return (
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='green.100'
      size='xl'
    />
  )
}
