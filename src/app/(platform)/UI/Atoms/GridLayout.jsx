'use client'
import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import SideNav from '../Organisms/SideNav';

export default function GridLayout({ children }) {
  return (
    <Grid
      templateAreas={`
        "sidenav main"
      `}
      templateColumns="2fr 8fr"
      height="100vh"
    >
      <GridItem area="sidenav">
        <SideNav />
      </GridItem>
      <GridItem area="main">
        {children}
      </GridItem>
    </Grid>
  );
}