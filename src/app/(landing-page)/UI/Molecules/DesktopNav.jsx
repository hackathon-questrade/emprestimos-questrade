import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import styled from '@emotion/styled'
import { Items } from '../Atoms/Data/Items'
import theme from '@/app/theme/theme'
import BasicButton from '../Atoms/BasicButton'

export default function DesktopNav() {
  return (
    <Wrapper
      display={{ base: 'none', lg: 'flex' }}
      mr={{ lg: 4, xl: 5 }}
      gap={10}
    >
      {Items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          fontSize={{ lg: '2xl' }}
          color={theme.colors.gray[200]}

          _hover={{
            transition: 'all 0.3s',
            textDecoration: 'none',
            transform: 'scale(1.2)',
            color: theme.colors.green[100],
          }}

          _active={{
            transition: 'all 0.3s',
            transform: 'scale(0.9)',
          }}
        >
          {item.label}
        </Link>
      ))}
      <BasicButton id="login" href='/login'>
        Sou cliente
      </BasicButton>
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  align-items: center;
  justify-content: center;
`;
