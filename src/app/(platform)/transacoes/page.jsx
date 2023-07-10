'use client'
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import BasicButton from "../UI/Atoms/BasicButton";
import TransTable from "../UI/Molecules/TransTable";
import VerticalBanner from "../UI/Molecules/VerticalBanner";

export default function Home() {
  return (
    <Flex color='gray.200' textAlign='center' direction='column' justify='center' align='center'>
      <Heading color='gray.200' fontSize='4xl' ml={3} mt={10} mb={10} alignSelf='flex-start'>
        Transações
      </Heading>
      <Flex w='full' justify='space-between' align='center' px={5} gap={10}>
        <Flex direction='column' textAlign='left'>
          <Text fontSize='3xl'>
            Crédito total disponível
          </Text>
          <Heading color='gray.200'>
            R$ 45.257,00
          </Heading>
        </Flex>
        <Flex gap={5}>
          <BasicButton href="/novo-emprestimo">
            Transferência bancária
          </BasicButton>
          <BasicButton href="/novo-emprestimo">
            Transferência por pix
          </BasicButton>
        </Flex>
      </Flex>
      <Flex w='full' px={5} py={10} justify='space-between'>
        <TransTable />
        <VerticalBanner src="/banner-vertical-two.png" />
      </Flex>
    </Flex>
  )
}
