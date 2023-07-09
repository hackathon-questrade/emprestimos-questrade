import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import LogoWhite from '../Atoms/LogoWhite'
import Company from '../Atoms/Company'
import theme from '@/app/theme/theme'

export default function About() {
  return (
    <Flex
      bgColor={theme.colors.gray[200]}
      width='100%'
      height='auto'
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      justifyContent="center"
      alignItems="center"
      gap={{ base: 0, md: 10 }}
      px={10}
      py={20}
    >
      <LogoWhite />
      <Company>
        Somos como você: <strong>investidores</strong>, <strong>sonhadores</strong> e <strong>poupadores</strong> - pessoas que estão cansadas do status quo. Então, nos propusemos a dar às pessoas o que elas realmente querem: uma maneira melhor de conseguir <strong>empréstimos de forma rápida e segura</strong>. Transparência e agilidade fazem parte do nosso DNA.
      </Company>
    </Flex>
  )
}
