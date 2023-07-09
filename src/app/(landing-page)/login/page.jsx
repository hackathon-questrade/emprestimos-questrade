'use client'
import { Flex } from "@chakra-ui/react";
import EmailLogin from "./UI/Organisms/EmailLogin";


export default function Login() {
  return (
    <Flex h='full' justify='center' align='center'>
      <EmailLogin />
    </Flex>
  )
}
