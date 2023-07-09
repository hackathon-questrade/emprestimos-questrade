import React from 'react'
import Title from '../Atoms/Title'
import { Box, Flex } from '@chakra-ui/react'
import SubTitle from '../Atoms/Subtitle'
import Form from './Form'
import theme from '@/app/theme/theme'

export default function HeroContent() {
  return (
    <Flex
      flexWrap={{ base: "wrap", md: "nowrap" }}
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems="center"
      width="100%"
      maxW="1200px"
      mx="auto"
      gap={{ base: 5 }}
      px={{ base: 2, md: 6 }}
      py={12}
    >
      <Flex alignItems="flex-start" direction='column' gap={5}>
        <Title color={theme.colors.text[100]}>
          Empréstimo rápido, fácil e transparente.
        </Title>
        <SubTitle >
          Faça uma simulação e descubra quanto de crédito liberado você tem à disposição.
          <br />
          <br />
          O processo inteiro dura menos de 5 minutos e a resposta de aprovação é instantânea para solicitações abaixo de R$ 50.000,00.
        </SubTitle>
      </Flex>
      <Box width={{ base: 'full', md: '400px' }} p={4} rounded='md' bgColor='rgba(38, 45, 51, 0.80)'>
        <Form />
      </Box>
    </Flex>
  )
}
