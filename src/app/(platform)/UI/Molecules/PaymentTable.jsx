import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export default function PaymentTable() {
  return (
    <TableContainer
      bgColor='gray.200'
      color='text.100'
      p={5}
      rounded='xl'
    >
      <Table variant='simple'>
        <TableCaption color='text.100'>Relatório de pagamentos</TableCaption>
        <Thead >
          <Tr>
            <Th color='text.100'>Data de vencimento</Th>
            <Th color='text.100'>Pago?</Th>
            <Th color='text.100'>Parcela</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td color='text.100'>25/09/2023</Td>
            <Td color='text.100'>Pago</Td>
            <Td color='text.100'>2 / 48</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>25/09/2023</Td>
            <Td color='text.100'>Pago</Td>
            <Td color='text.100'>2 / 48</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>25/09/2023</Td>
            <Td color='text.100'>Pago</Td>
            <Td color='text.100'>2 / 48</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>25/09/2023</Td>
            <Td color='text.100'>Pago</Td>
            <Td color='text.100'>2 / 48</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>25/09/2023</Td>
            <Td color='text.100'>Pago</Td>
            <Td color='text.100'>2 / 48</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>25/09/2023</Td>
            <Td color='text.100'>Pago</Td>
            <Td color='text.100'>2 / 48</Td>
          </Tr>
          <Tr>
            <Td color='text.100'>25/09/2023</Td>
            <Td color='text.100'>Pago</Td>
            <Td color='text.100'>2 / 48</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
