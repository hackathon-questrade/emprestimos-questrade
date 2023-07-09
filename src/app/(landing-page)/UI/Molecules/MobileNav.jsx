import React, { useRef } from 'react'
import styled from "@emotion/styled";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { SocialItems } from '../Atoms/Data/Social';
import DrawerButton from '../Atoms/DrawerButton';
import LogoWhite from '../Atoms/LogoWhite';
import CopyRight from './CopyRight';
import { Items } from '../Atoms/Data/Items';
import theme from '@/app/theme/theme';
import { Link } from '@chakra-ui/next-js';
import Icon from '../Atoms/Icon';

export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <DrawerButton
        onClick={onOpen}
      >
        Menu
      </DrawerButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerStyled>
          <DrawerCloseButton
            border='1px'
            borderRadius='full'
            mt='5'
          />
          <DrawerHeader>Bem-vindo!</DrawerHeader>

          <DrawerBody>
            <UnorderedList>
              {Items.map((item, index) => (
                <DrawerList key={index}>
                  <InteractionButton href={item.href}>
                    {item.label}
                  </InteractionButton>
                </DrawerList>
              ))}
            </UnorderedList>
          </DrawerBody>

          <DrawerFooter
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={10}
          >
            <LogoWhite />
            <Social>
              <Social>
                {SocialItems.map((social) => (
                  <Link key={social.id} href={social.href} target='_blank'>
                    <Icon src={social.icon} alt={social.alt} />
                  </Link>
                ))}
              </Social>
            </Social>
            <CopyRight />
          </DrawerFooter>
        </DrawerStyled>
      </Drawer>
    </>
  )
}

const DrawerStyled = styled(DrawerContent)`
    background-color: #000000;
    color: ${theme.colors.text[100]};
    padding: 3rem 1rem;
    z-index: 900;
    height: 100%;
    width: 280px;
`;
const UnorderedList = styled.ul`
    counter-reset: ctr;
    list-style: none;
`;
const DrawerList = styled.li`
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    line-height: 3rem;
    counter-increment: ctr;
`;
const InteractionButton = styled.a`
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    color: ${theme.colors.text[100]};
    cursor: pointer;
    
    &:before {
        content: counter(ctr, decimal-leading-zero) ".";
        color: ${theme.colors.green[100]};
        font-size: 1rem;
        margin-right: 10px;
    }

    &:hover:before {
        color: ${theme.colors.green[100]};
        transition: ease 0.3s;
        font-weight: 600;
     }
`
const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`