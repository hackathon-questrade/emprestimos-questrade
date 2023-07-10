'use client'
import { Flex, Heading } from "@chakra-ui/react";
import CreditsTable from "../UI/Molecules/CreditsTable";
import Card from "../UI/Atoms/Card";
import HorizontalBanner from "../UI/Molecules/HorizontalBanner";
import PaymentTable from "../UI/Molecules/PaymentTable";

export default function Dashboard() {
  return (
    <Flex color='gray.200' textAlign='center' direction='column' justify='center' align='center'>
      <Heading color='gray.200' fontSize='4xl' alignSelf='flex-start' ml={10} mt={10} mb={10}>
        Dashboard
      </Heading>
      <Flex gap={4} align='center'>
        <Card />
        <HorizontalBanner />
      </Flex>
      <Flex gap={1}>
        <CreditsTable />
        <PaymentTable />
      </Flex>

    </Flex>
  )
}
