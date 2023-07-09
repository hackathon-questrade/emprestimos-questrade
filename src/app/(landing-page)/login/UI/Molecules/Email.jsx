import { Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import SubmitButton from '../Atoms/SubmitButton'
import Icon from '../Atoms/Icon';
import H2 from '../Atoms/H2';

export default function Email({ email, onChange, onSubmit, bgGradient }) {
  return (
    <form onSubmit={onSubmit}>
      <Flex gap={4} direction='column'>
        <H2 color='gray.200'>
          Insira seu e-mail para receber a senha de acesso
        </H2>
        <FormControl>
          <FormLabel color='gray.200'>Email:</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon src="/form-email.svg" />
            </InputLeftElement>
            <Input
              variant='basic'
              color='text.200'
              type="email"
              value={email}
              onChange={onChange}
              placeholder="Digite seu email"
            />
          </InputGroup>
        </FormControl>
        <SubmitButton
          bgGradient={bgGradient}
          type="submit">Verificar Email</SubmitButton>
      </Flex>
    </form>
  )
}
