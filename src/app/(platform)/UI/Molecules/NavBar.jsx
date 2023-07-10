import { Link } from '@chakra-ui/next-js';
import { Flex } from '@chakra-ui/react';
import React from 'react'
import { Items } from '../Atoms/Data/Items';
import Icon from '../Atoms/Icon';

export default function NavBar() {
  return (
    <Flex
      align='left'
      direction='column'
      mt={10}
      gap={10}
    >
      {Items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          fontSize={{ lg: '2xl' }}
          color='text.100'

          _hover={{
            transition: 'all 0.3s',
            textDecoration: 'none',
            transform: 'scale(1.2)',
          }}

          _focus={{
            color: "green.100",
            transition: 'all 0.3s',
          }}
        >
          <Flex gap={3}>
            <Icon src={item.icon} />
            {item.label}
          </Flex>
        </Link>
      ))}
    </Flex>
  )
}