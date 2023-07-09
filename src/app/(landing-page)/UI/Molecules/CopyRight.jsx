import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled';
import React from 'react'

export default function CopyRight() {
  return <Copy fontSize={{ base: "12px", md: "24px", lg: "32px" }}>© 2023 QUESTRADE. Todos os direitos reservados.</Copy>
}

const Copy = styled(Text)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
`;