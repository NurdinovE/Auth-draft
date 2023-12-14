import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import store from '../store';
import {MantineProvider, createTheme} from '@mantine/core';
import '@mantine/core/styles.css';
import AppRouter from "./router/app-router.tsx";
import {BrowserRouter} from "react-router-dom";
import "./styles/global.css"
import {ModalsProvider} from "@mantine/modals";


const theme = createTheme({
    fontFamily: "sans-serif",
    fontSizes: {md: '12'}
});

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <MantineProvider theme={theme}>
                <ModalsProvider>
                    <AppRouter/>
                </ModalsProvider>
            </MantineProvider>
        </Provider>
    </BrowserRouter>
    ,
);
