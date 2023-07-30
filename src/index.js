import React from 'react';
import { createRoot } from 'react-dom/client';

import SigmaApp from './components/SigmaApp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SigmaApp />);
