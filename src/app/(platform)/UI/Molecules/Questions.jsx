import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'
import { Question } from '../Atoms/Data/Faq'

export default function Questions() {
  return (
    <Accordion allowMultiple>
      {Question.map((quest) => (
        <AccordionItem variant='basic' key={quest.id}>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontSize={{ base: 'xl', sm: '2xl' }}>
                {quest.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}>
            {quest.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
