import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { TableConfigProvider } from './context/TableConfigContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TableConfigProvider>
            <App />
        </TableConfigProvider>
    </StrictMode>,
);
