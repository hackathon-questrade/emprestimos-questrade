'use client'
import { Box, Flex } from "@chakra-ui/react";
import QSpinn from "../UI/Atoms/QSpinn";

export default function Home() {
  return (
    <Flex w='100%' h='full' gap={10} direction='column' justify='center' align='center' color="gray.200">
      Em construção...
      <QSpinn />
    </Flex>
  )
}
