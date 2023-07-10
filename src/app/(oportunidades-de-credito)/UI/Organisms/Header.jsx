'use client'

import { Flex } from '@chakra-ui/react'
import React from 'react'
import LogoWhite from '../Atoms/LogoWhite'

export default function Header() {
  return (
    <Flex bgColor='gray.200' w='100vw' justify='center' align='center'>
      <LogoWhite />
    </Flex>
  )
}
