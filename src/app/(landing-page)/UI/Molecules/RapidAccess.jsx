import { Flex } from '@chakra-ui/react'
import React from 'react'
import Icon from '../Atoms/Icon'
import { Link } from '@chakra-ui/next-js'
import H2 from '../Atoms/H2'
import { agile } from '../Atoms/Data/Access'
import styled from '@emotion/styled'
import { SocialItems } from '../Atoms/Data/Social'

export default function RapidAccess() {
  return (
    <Flex gap={5} direction='column'>
      <H2>Acessos Rápidos</H2>
      {agile.map((rapid) => (
        <Flex key={rapid.id} gap={5} direction='column'>
          <Flex gap={2}>
            <Icon src="/arrow.svg" alt="Seta" w="24px" h="24px" />
            <Link href={rapid.href}>{rapid.title}</Link>
          </Flex>
        </Flex>
      ))}
      <Flex gap={5}>
        <Social>
          {SocialItems.map((social) => (
            <Link key={social.id} href={social.href} target='_blank'>
              <Icon src={social.icon} alt={social.alt} />
            </Link>
          ))}
        </Social>
      </Flex>
    </Flex>
  )
}

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`