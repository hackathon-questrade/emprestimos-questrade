import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled';
import React from 'react'

export default function CopyRight() {
  return <Copy fontSize={{ base: "sm", md: "md", lg: "lg" }}>© 2023 QUESTRADE. Todos os direitos reservados.</Copy>
}

const Copy = styled(Text)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px 32px;
`;