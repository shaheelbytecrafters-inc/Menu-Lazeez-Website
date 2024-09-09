import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const BreadcrumbLink = styled(Link)(({ theme }) => ({
  fontSize: '12px',
  color: 'gray',
  textDecoration: 'none',
  fontFamily: 'Poppins, sans-serif',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const BreadcrumbCurrent = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  color: 'lightgray',
}));

function BreadcrumbNavigation() {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{my: '7px', display:{sm: "block", xs: 'none'}}}>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BreadcrumbLink href="/india">India</BreadcrumbLink>
      <BreadcrumbLink href="/delhi-ncr">Delhi NCR</BreadcrumbLink>
      <BreadcrumbLink href="/south-delhi">South Delhi</BreadcrumbLink>
      <BreadcrumbLink href="/saket">Saket</BreadcrumbLink>
      <BreadcrumbLink href="/dlf-avenue-saket">DLF Avenue, Saket</BreadcrumbLink>
      <BreadcrumbCurrent>You Mee</BreadcrumbCurrent>
    </Breadcrumbs>
  );
}

export default BreadcrumbNavigation;
