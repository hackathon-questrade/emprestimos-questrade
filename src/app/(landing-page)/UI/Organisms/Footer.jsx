import { Flex } from '@chakra-ui/react'
import React from 'react'
import LogoWhite from '../Atoms/LogoWhite'
import H3 from '../Atoms/H3'
import H2 from '../Atoms/H2'
import Icon from '../Atoms/Icon'
import theme from '@/app/theme/theme'
import Phones from '../Molecules/Phones'
import RapidAccess from '../Molecules/RapidAccess'

export default function Footer() {
  return (
    <Flex
      bgColor={theme.colors.gray[200]}
      p={16}
      gap={{ base: 10, lg: 0 }}
      width='100%'
      height='auto'
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems='center'
    >
      <LogoWhite />
      <Phones />
      <RapidAccess />
    </Flex>
  )
}
