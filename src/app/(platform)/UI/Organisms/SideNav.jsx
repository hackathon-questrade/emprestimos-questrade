import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import LogoWhite from '../Atoms/LogoWhite'
import NavBar from '../Molecules/NavBar'
import NavFooter from '../Molecules/NavFooter'
import CopyRight from '../Atoms/CopyRight'

export default function SideNav() {
  return (
    <Flex
      justify='space-between'
      align='center'
      direction='column'
      height='100%'
      color='text.100'
      bgColor="gray.200"
    >
      <Flex
        height='100%'
        direction='column'
        justify='space-between'
        align='center'
      >
        <Flex
          height='100%'
          gap={5}
          direction='column'
          align='center'
        >
          <LogoWhite />
          <NavBar />
        </Flex>
        <NavFooter />
      </Flex>
      <Flex
        direction='column'
        justify='space-between'
        align='center'
      >
        <CopyRight />
      </Flex>
    </Flex>
  )
}
