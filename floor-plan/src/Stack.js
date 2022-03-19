import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box sx={{direction: "column",alignItems: "center", justifyContent: "center"}}>
      <Stack spacing={10} style = {{width: 250, }}>
        <Item>Floor 1</Item>
        <Item>Floor 2</Item>
        <Item>Floor 3</Item>
        <Item>Floor 4</Item>
        <Item>Floor 5</Item>
      </Stack>
    </Box>
  );
}