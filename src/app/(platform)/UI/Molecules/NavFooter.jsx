import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Icon from '../Atoms/Icon'
import ThemedLink from '../Atoms/ThemedLink'

export default function NavFooter() {
  return (
    <Flex gap={10} mb={10} direction='column'>
      <ThemedLink href="/configuracoes">
        <Flex gap={3}>
          <Icon src="/settings.svg" />
          Configurações
        </Flex>
      </ThemedLink>
      <ThemedLink href="/">
        <Flex gap={3}>
          <Icon src="/log-out.svg" />
          Logout
        </Flex>
      </ThemedLink>
    </Flex>
  )
}
