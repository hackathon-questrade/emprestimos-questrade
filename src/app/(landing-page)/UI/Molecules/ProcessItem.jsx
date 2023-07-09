import { Flex } from '@chakra-ui/react'
import React from 'react'
import { steps } from '../Atoms/Data/Steps'
import Icon from '../Atoms/Icon'
import Description from '../Atoms/Description'
import theme from '@/app/theme/theme'

export default function ProcessItem() {
  return (
    <React.Fragment>
      {steps.map((step) => (
        <Flex direction='column' align='center' justify='center' p={10} gap={5} key={step.id}>
          <Icon
            src={step.src}
            alt={step.alt}
            w={100}
            h={100}
          />
          <Description color={theme.colors.text[200]}>
            {step.description}
          </Description>
        </Flex>
      ))}
    </React.Fragment>
  )
}
