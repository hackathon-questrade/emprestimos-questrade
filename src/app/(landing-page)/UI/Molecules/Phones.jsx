import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import H2 from '../Atoms/H2'
import Icon from '../Atoms/Icon'
import Number from '../Atoms/Number'
import { Contact } from '../Atoms/Data/Contacts'

export default function Phones() {
  return (
    <Flex gap={5} direction='column' align={{ base: 'flex-start' }}>
      {Contact.map((phone) => (
        <Box key={phone.id}>
          <H2>{phone.setor}</H2>
          <Flex gap={2}>
            <Icon src='/phone.svg' alt='phone' w="24px" h="24px" />
            <Number>{phone.digits}</Number>
          </Flex>
        </Box>
      ))}
    </Flex>
  )
}
