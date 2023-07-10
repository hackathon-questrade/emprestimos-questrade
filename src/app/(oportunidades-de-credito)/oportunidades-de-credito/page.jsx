'use client'
import { Flex } from "@chakra-ui/react";
import Credits from "../UI/Organisms/Credits";

export default function Home() {
  return (
    <Flex h='full' color='gray.200' textAlign='center' direction='column' justify='center' align='center'>
      <Credits />
    </Flex>
  )
}
