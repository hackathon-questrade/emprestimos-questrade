import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Icon from '../Atoms/Icon'

export default function CreditsTable() {
  return (
    <TableContainer
      bgColor='gray.200'
      color='text.100'
      p={5}
      rounded='xl'
    >
      <Table variant='simple'>
        <TableCaption color='text.100'>Empréstimos</TableCaption>
        <Thead >
          <Tr>
            <Th color='text.100'>Valor solicitado</Th>
            <Th color='text.100'>Data de solicitação</Th>
            <Th color='text.100'>Data de vencimento</Th>
            <Th color='text.100'>Situação</Th>
            <Th color='text.100'>Parcelas</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td color='text.100'>R$ 24.000,00</Td>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>Dia 25</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
            <Td color='text.100'>48x</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>R$ 24.000,00</Td>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>Dia 25</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
            <Td color='text.100'>48x</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>R$ 24.000,00</Td>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>Dia 25</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
            <Td color='text.100'>48x</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>R$ 24.000,00</Td>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>Dia 25</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
            <Td color='text.100'>48x</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>R$ 24.000,00</Td>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>Dia 25</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
            <Td color='text.100'>48x</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>R$ 24.000,00</Td>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>Dia 25</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
            <Td color='text.100'>48x</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>R$ 24.000,00</Td>
            <Td color='text.100'>08/07/2023</Td>
            <Td color='text.100'>Dia 25</Td>
            <Td color='text.100'><Icon src='/received.svg' /></Td>
            <Td color='text.100'>48x</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
