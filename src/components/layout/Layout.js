import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Container, CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Layout = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        GWL Overlap
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" sx={{ mt: 4, mb: 4 }}>
                <Header />
                <main data-testid="main">{children}</main>
                <Footer />
            </Container>
        </>
    );
};

export default Layout;
