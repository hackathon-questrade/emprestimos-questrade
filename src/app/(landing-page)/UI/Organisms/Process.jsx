import { Flex } from '@chakra-ui/react'
import React from 'react'
import theme from '@/app/theme/theme'
import ProcessItem from '../Molecules/ProcessItem'
import BasicButton from '../Atoms/BasicButton'
import H2 from '../Atoms/H2'

export default function Process() {
  return (
    <Flex
      py={20}
      px={10}
      gap={{ base: 5, lg: 12 }}
      direction='column'
      justify='center'
      align='center'
      textAlign='center'
    >
      <H2 color={theme.colors.text[200]}>
        Como funciona?
      </H2>
      <Flex justify='center' align='center' flexWrap={{ base: 'wrap', lg: 'nowrap' }}>
        <ProcessItem />
      </Flex>
      <BasicButton href="#emprestimo">
        Fazer simulação
      </BasicButton>
    </Flex>
  )
}
