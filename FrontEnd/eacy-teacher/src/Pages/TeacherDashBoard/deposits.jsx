import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Arrival</Title>
      <Typography component="p" variant="h4" xs={2}>
        45
      </Typography>
      <Typography color="text.secondary"  xs={2}>
        on 15 March, 2019
      </Typography>
      <Stack direction="row" spacing={1}>
      <Typography component="p" variant="h6" xs={2}>
        Boys
      </Typography>
        <Item>20</Item>
        <Typography component="p" variant="h6" xs={2}>
        Girls
      </Typography>
        <Item>25</Item>
        {/* <Item>Item 3</Item> */}
      </Stack>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}