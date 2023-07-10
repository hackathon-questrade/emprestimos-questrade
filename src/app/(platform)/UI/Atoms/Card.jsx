import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Card() {
  return (
    <Box
      p={4}
      rounded='xl'
      color='text.100'
      bgColor='gray.200'
    >
      <Flex
        gap={4}
        textAlign='left'
        justify='center'
        direction='column'
        minH='220px'
      >
        <Flex
          p={2}
          direction='column'
          justify='center'
        >
          <Text>
            Nome
          </Text>
          <Heading>
            Carlos Henrique R. Pereira
          </Heading>
        </Flex>
        <Flex
          flex={1}
          p={2}
          direction='column'
          justify='center'
        >
          <Text>
            Empréstimo total
          </Text>
          <Heading>
            R$ 45.257,00
          </Heading>
        </Flex>
      </Flex>
    </Box>
  )
}
