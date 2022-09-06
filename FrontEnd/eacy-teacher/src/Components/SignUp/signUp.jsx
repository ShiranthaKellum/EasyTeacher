import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import DarkTheme from '../DarkTheme/darkTheme';

const SignUp = () => {
    return (
        <CssVarsProvider>
           {/* <ModeToggle /> */}
           <DarkTheme/>
          <Sheet 
            sx={{
              maxWidth: 400,
              mx: 'auto', // margin left & right
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderRadius: 'sm',
              boxShadow: 'md',
            }}>
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body2">Sign up to start</Typography>
              </div>
              <TextField
                // html input attribute
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                // pass down to FormLabel as children
                label="Email"
              />
              <TextField
                name="password"
                type="password"
                placeholder="password"
                label="Password"
              />
              <TextField
                name="confirmPassword"
                type="confirmPassword"
                placeholder="confirmPassword"
                label="Confirm Password"
              />
              <Button
                sx={{
                  mt: 1, // margin top
                }}
              >
                Sign Up
              </Button>
              <Typography
                endDecorator={<Link href="/sign-up">Log in</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
              >
                Already have an account?
              </Typography>
            </Sheet>
        </CssVarsProvider>
      );
}
export default SignUp