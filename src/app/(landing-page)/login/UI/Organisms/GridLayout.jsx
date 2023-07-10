'use client'

import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function GridLayout({ children }) {
  return (
    <Grid
      templateAreas={`
        "header"
        "main"
        "footer"
      `}
      templateRows="auto 1fr auto"
      height="100vh"
    >
      <GridItem area="header">
        <Header />
      </GridItem>
      <GridItem area="main">
        {children}
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}