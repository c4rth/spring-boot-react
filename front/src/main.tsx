import React from 'react';
import App from './App';

import {createRoot} from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import {GlobalLoadingProvider} from './components/GlobalLoading';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalLoadingProvider>
                <CssBaseline/>
                    <App/>
            </GlobalLoadingProvider>
        </ThemeProvider>
    </React.StrictMode>
);
