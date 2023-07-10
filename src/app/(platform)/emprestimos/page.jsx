'use client'
import { Flex, Heading } from "@chakra-ui/react";
import BasicButton from "../UI/Atoms/BasicButton";
import VerticalBanner from "../UI/Molecules/VerticalBanner";
import CreditsOverview from "../UI/Molecules/CreditsOverview";

export default function Emprestimos() {
  return (
    <Flex color='gray.200' textAlign='center' direction='column' justify='center' align='center'>
      <Flex justify='center' align='center' alignSelf='flex-start' px={5} gap={10}>
        <Heading color='gray.200' fontSize='4xl' mt={10} mb={10}>
          Empréstimos
        </Heading>
        <BasicButton href="/novo-emprestimo">
          Solicitar novo empréstimo
        </BasicButton>
      </Flex>
      <Flex w='full' px={5} py={5} justify='space-between'>
        <CreditsOverview />
        <VerticalBanner src="/banner-vertical.png" />
      </Flex>
    </Flex>
  )
}
