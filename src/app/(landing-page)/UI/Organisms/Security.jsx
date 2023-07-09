import theme from '@/app/theme/theme'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import Icon from '../Atoms/Icon'
import H2 from '../Atoms/H2'
import H3 from '../Atoms/H3'
import Description from '../Atoms/Description'

export default function Security() {
  return (
    <Flex
      width='full'
      height='auto'
      textAlign='center'
      justifyContent="center"
      alignItems="center"
      direction='column'
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      bgColor={theme.colors.gray[200]}
      gap={{ base: 5, md: 10 }}
      px={10}
      py={20}
    >
      <Icon src='/security.svg' alt='Segurança' />
      <H2 color={theme.colors.text[100]}>
        Protegemos as suas informações pessoais
      </H2>
      <Description color={theme.colors.text[100]}>
        Você pode ficar tranquilo(a) sabendo que protegeremos a confidencialidade e a segurança das informações pessoais e financeiras que você compartilha conosco. Nós nunca vendemos, trocamos ou compartilhamos suas informações com ninguém.
      </Description>
    </Flex>
  )
}
