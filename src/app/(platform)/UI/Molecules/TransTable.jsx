import { Input, InputGroup, InputLeftElement, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Icon from '../Atoms/Icon'

export default function TransTable() {
  return (
    <TableContainer
      w='full'
      mr={10}
      bgColor='gray.200'
      color='text.100'
      rounded='xl'
      p={5}
    >
      <InputGroup mb={5}>
        <InputLeftElement>
          <Icon src="search-white.svg" alt="Pesquisar" />
        </InputLeftElement>
        <Input type="search" placeholder='Pesquisar por transação' id="site-search" name="" />
      </InputGroup>
      <Table variant='simple'>
        <TableCaption color='text.100'>Transações</TableCaption>
        <Thead >
          <Tr>
            <Th color='text.100'>Data de transferência</Th>
            <Th color='text.100'>Valor transferido</Th>
            <Th color='text.100'>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>R$ 4.000,00</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
          </Tr>
          <Tr>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>R$ 1.000,00</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
          </Tr>
          <Tr>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>R$ 2.000,00</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
          </Tr>
          <Tr>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>R$ 5.000,00</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
          </Tr>
          <Tr>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>R$ 9.000,00</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
          </Tr>


        </Tbody>
      </Table>
    </TableContainer>
  )
}
