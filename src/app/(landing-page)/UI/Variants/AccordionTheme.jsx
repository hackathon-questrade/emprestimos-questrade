import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  icon: {
    color: 'gray.200',
  },
  button: {
    color: 'text.200',
    _expanded: {
      bgColor: 'green.200',
      color: 'text.100',
    },
  },
  panel: {
    color: 'text.200'
  },
  container: {
    borderColor: 'gray.200',
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
