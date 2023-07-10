import Icon from '@/app/(landing-page)/UI/Atoms/Icon'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Outlined from '../Atoms/Outlined'
import TextNum from '../Atoms/TextNum'
import { Link } from '@chakra-ui/next-js'

export default function Card({ src, alt, h, w, prazo, amount, totalAmount, payments, totalPayments, tax, totalTax }) {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      rounded='md'
      color='text.100'
      bgColor="gray.200"
      py={8}
      px={{ base: 8 }}
      mx={{ base: 2, md: 5 }}
      gap={10}
    >
      <Flex gap={5}>
        <Icon src={src} alt={alt} h={h} w={w} />
        <Text>{prazo}</Text>
      </Flex>

      <Flex textAlign='left' gap={10} direction='column'>
        <Box>
          <Heading>{amount}</Heading>
          <TextNum>{totalAmount}</TextNum>
        </Box>

        <Box>
          <Heading>{payments}</Heading>
          <TextNum>{totalPayments}</TextNum>
        </Box>

        <Box>
          <Heading>{tax}</Heading>
          <TextNum>{totalTax}</TextNum>
        </Box>
      </Flex>

      <Link href="/envie-seus-dados">
        <Outlined>
          Selecionar
        </Outlined>
      </Link>
    </Flex>
  )
}
