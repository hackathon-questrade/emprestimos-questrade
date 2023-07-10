import { Flex } from '@chakra-ui/react'
import React from 'react'
import { steps } from '../Atoms/Data/Steps'
import Icon from '../Atoms/Icon'
import Description from '../Atoms/Description'
import theme from '@/app/theme/theme'
import FileInput from '../Atoms/FileInput'

export default function PersonalData() {
  return (
    <Flex direction='row' flexWrap={{ base: 'wrap', md: 'nowrap' }} gap={{ base: 10, md: 2 }}>
      {steps.map((step) => (
        <Flex direction='column' flex={1} align='center' justify='center' gap={5} key={step.id}>
          <Icon
            src={step.src}
            alt={step.alt}
            w={100}
            h={100}
          />
          <Description color={theme.colors.text[200]}>
            {step.description}
          </Description>
          <FileInput />
        </Flex>
      ))}
    </Flex>
  )
}