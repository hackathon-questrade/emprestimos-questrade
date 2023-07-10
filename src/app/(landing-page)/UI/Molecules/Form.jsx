import theme from "@/app/theme/theme";
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import BasicButton from "../Atoms/BasicButton";
import ThemedLabel from "../Atoms/ThemedLabel";

const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [valorDesejado, setValorDesejado] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode fazer o que desejar com os dados do formulário
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("CPF:", cpf);
    console.log("Valor Desejado:", valorDesejado);

    // Limpa os campos após o envio do formulário
    setNome("");
    setEmail("");
    setCpf("");
    setValorDesejado("");
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit} id="emprestimo">
        <Flex color={theme.colors.gray[200]} gap={10} direction='column'>
          <Flex align="start" gap={10} direction='column'>
            <FormControl>
              <ThemedLabel>Nome</ThemedLabel>
              <Input
                variant="basic"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                placeholder="Digite seu nome"
                color="text.100"
              />
            </FormControl>

            <FormControl>
              <ThemedLabel>E-mail</ThemedLabel>
              <Input
                variant="basic"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Digite seu e-mail"
                color="text.100"
              />
            </FormControl>

            <FormControl>
              <ThemedLabel>CPF</ThemedLabel>
              <Input
                variant="basic"
                type="text"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                placeholder="Digite seu CPF"
                color="text.100"
              />
            </FormControl>

            <FormControl>
              <ThemedLabel>Valor Desejado (R$)</ThemedLabel>
              <Input
                variant="basic"
                type="number"
                value={valorDesejado}
                onChange={(event) => setValorDesejado(event.target.value)}
                placeholder="Digite o valor desejado"
                color="text.100"
              />
            </FormControl>
          </Flex>
          <Flex w='full' justify='center'>
            <BasicButton href="/oportunidades-de-credito" type="submit">
              Fazer simulação
            </BasicButton>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
};

export default Form;