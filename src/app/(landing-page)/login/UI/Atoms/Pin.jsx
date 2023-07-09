import { Flex, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import React from 'react'
import SubmitButton from './SubmitButton'
import { Link } from '@chakra-ui/next-js'


export default function Pin({ bgGradient, onChange, href, value }) {

  return (
    <Flex direction='column' justify='center' align='center' gap={10}>
      <HStack>
        <PinInput value={value} onChange={onChange}>
          <PinInputField color='gray.200' />
          <PinInputField color='gray.200' />
          <PinInputField color='gray.200' />
          <PinInputField color='gray.200' />
        </PinInput>
      </HStack>
      <Link href={href}>
        <SubmitButton bgGradient={bgGradient}>
          Enviar código
        </SubmitButton>
      </Link>
    </Flex>
  )
}
