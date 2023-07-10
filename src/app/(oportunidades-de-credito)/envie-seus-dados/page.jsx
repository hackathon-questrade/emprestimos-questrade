'use client'
import { Flex } from "@chakra-ui/react";
import PersonalData from "../UI/Molecules/PersonalData";
import BasicButton from "@/app/(landing-page)/UI/Atoms/BasicButton";

export default function SendData() {
  return (
    <Flex h='full' direction='column' gap={32} p={10} color='gray.200' textAlign='center' justify='center' align='flex-end'>
      <PersonalData />
      <BasicButton href="/dashboard">
        Continuar
      </BasicButton>
    </Flex>
  )
}
