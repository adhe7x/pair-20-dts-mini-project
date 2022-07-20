import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    return (
            <Box sx={{bgcolor: "black", color: "white"}}>
                <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="#" underline="none">Home</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">Register</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                        <Box>
                            <Link href="#" underline="none">About</Link>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Box>      
    )
}

export default Footer;