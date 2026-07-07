import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/css/index.css'
import App from './App.tsx'
import './i18n';
import { ThemeProvider } from './context/ThemeContext';
import {BrowserRouter} from "react-router-dom";
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App/>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
)
