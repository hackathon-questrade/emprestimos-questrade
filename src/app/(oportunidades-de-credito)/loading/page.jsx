'use client'
import Icon from "@/app/(landing-page)/UI/Atoms/Icon";
import { Flex } from "@chakra-ui/react";
import Description from "../UI/Atoms/Description";
import QSpinn from "../UI/Atoms/QSpinn";

export default function Home() {
  return (
    <Flex h='full' color='gray.200' textAlign='center' direction='column' justify='center' align='center'>
      <QSpinn />
      <Description maxW="800px">
        Estamos avaliando todas as oportunidades disponíveis para você, isso pode demorar alguns minutos...
      </Description>
    </Flex>
  )
}
