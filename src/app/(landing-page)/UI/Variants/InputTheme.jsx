import theme from '@/app/theme/theme'
import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const basic = definePartsStyle({
  field: {
    color: 'text.200', // change the input text color
    borderBottom: '2px',
    borderStyle: 'solid',
    borderColor: 'green.100',
    bg: 'transparent',

  },
})

export const inputTheme = defineMultiStyleConfig({
  variants: { basic },
})