import theme from '@/app/theme/theme'
import { FormLabel } from '@chakra-ui/react'
import React from 'react'

export default function ThemedLabel({ children }) {
  return (
    <FormLabel
      color={theme.colors.text[100]}
      fontWeight='bold'
    >
      {children}
    </FormLabel>
  )
}
