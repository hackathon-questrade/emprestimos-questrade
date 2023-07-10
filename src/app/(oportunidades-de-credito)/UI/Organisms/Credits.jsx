import { Flex } from '@chakra-ui/react'
import React from 'react'
import Card from '../Molecules/Card'
import { Options } from '../Atoms/Data/Credit'

export default function Credits() {
  return (
    <Flex>
      {Options.map((option) => (
        <Card
          key={option.id}
          src={option.src}
          alt={option.alt}
          h={option.h}
          w={option.w}
          prazo={option.prazo}
          amount={option.amount}
          totalAmount={option.totalAmount}
          payments={option.payments}
          totalPayments={option.totalPayments}
          tax={option.tax}
          totalTax={option.totalTax}
        />
      ))}
    </Flex>
  )
}
