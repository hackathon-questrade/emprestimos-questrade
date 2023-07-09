import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Email from "../Molecules/Email";
import H2 from "../Atoms/H2";
import Pin from "../Atoms/Pin";
import { useRouter } from "next/router";

const useEmailVerification = () => {
  const [email, setEmail] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [pin, setPin] = useState("");
  const [pinValidated, setPinValidated] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();

    // Simulação da busca do email no banco de dados
    const isEmailFound = searchEmail(email); // Implemente a função searchEmail para realizar a busca no banco de dados

    if (isEmailFound) {
      setEmailVerified(true);
      setPin(generateRandomPin()); // Gere um PIN aleatório
    }
  };

  const handlePinChange = (value) => {
    setPin(value);
  };

  // Função simulada para buscar o email no banco de dados
  const searchEmail = (email) => {
    // Simulação: lista de emails válidos no banco de dados
    const validEmails = ["email1@example.com", "email2@example.com", "email3@example.com"];

    // Verifica se o email está na lista de emails válidos
    return validEmails.includes(email);
  };

  // Função simulada para gerar um PIN aleatório
  const generateRandomPin = () => {
    // Lógica para gerar um PIN aleatório
    // ...
    return "1234"; // Exemplo de um PIN aleatório
  };

  /*   const validatePin = (pin) => {
      // Simulação: PIN recebido pelo e-mail verificado
      const verifiedPin = "1234";
  
      // Verifique se o PIN inserido corresponde ao PIN recebido pelo e-mail verificado
      return pin === verifiedPin;
    }; */

  return {
    email,
    emailVerified,
    pin,
    pinValidated,
    handleEmailChange,
    handleEmailSubmit,
    handlePinChange,
    /* handlePinSubmit, */
  };
};


export default function EmailLogin() {
  const {
    email,
    emailVerified,
    pin,
    pinValidated,
    handleEmailChange,
    handleEmailSubmit,
    handlePinChange,
    /* handlePinSubmit, */
  } = useEmailVerification();

  const bgGradient = emailVerified
    ? "linear(to-r, rgba(61, 165, 66, 1) 0%, rgba(50, 134, 54, 1) 100%)"
    : "linear(to-r, rgba(61, 165, 66, 0.5) 0%, rgba(50, 134, 54, 0.5) 100%)";

  return (
    <Box p={4}>
      {!emailVerified ? (
        <Email
          onSubmit={handleEmailSubmit}
          value={email}
          onChange={handleEmailChange}
          bgGradient={bgGradient}
        />
      ) : (
        <Flex align='center' justify='center' direction='column' gap={5} mt={4}>
          <H2 color='gray.200'>Insira o código:</H2>
          <Pin
            value={pin}
            onChange={handlePinChange}
            bgGradient={bgGradient}
            href='/dashboard' />
        </Flex>
      )}
    </Box>
  );
};

