import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import H2 from '../Atoms/H2'
import H3 from '../Atoms/H3'
import theme from '@/app/theme/theme'
import Questions from '../Molecules/Questions'

export default function FAQ() {
  return (
    <Flex gap={{ base: 5, md: 2 }} textAlign='center' direction='column' justify='center' align='center' m={10}>
      <H2 color={theme.colors.text[200]}>
        Ficou alguma dúvida?
      </H2>
      <H3 color={theme.colors.text[200]}>
        Aqui você tem a resposta para as principais perguntas feitas pelos nossos clientes
      </H3>
      <Box width='full' mx={{ xs: 4, sm: 5, md: 6, lg: 8, xl: 10, xxl: 16 }} my={20}>
        <Questions />
      </Box>
    </Flex>
  )
}
