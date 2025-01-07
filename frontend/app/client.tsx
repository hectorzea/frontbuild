import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '.';

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }

    const { worker } = await import('./mocks/browser');

    return worker.start({ onUnhandledRequest: 'bypass' })
}

if (typeof window !== 'undefined') {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        enableMocking().then(() => {
            const root = createRoot(rootElement);
            root.render(<App />);
        });
    } else {
        console.error('Failed to find the root element');
    }
}