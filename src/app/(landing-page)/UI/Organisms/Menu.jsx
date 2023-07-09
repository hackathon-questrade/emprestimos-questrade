'use client'

import React from 'react'
import { Flex } from '@chakra-ui/react'
import MobileNav from '../Molecules/MobileNav';
import DesktopNav from '../Molecules/DesktopNav';
import styled from '@emotion/styled';
import LogoBlack from '../Atoms/LogoBlack';

export default function Menu() {
  return (
    <Header>
      <Wrapper>
        <LogoBlack />
        <DesktopNav />
        <MobileNav />
      </Wrapper>
    </Header>
  )
};

const Header = styled.header`
  background: transparent;
`;

const Wrapper = styled(Flex)`
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;
