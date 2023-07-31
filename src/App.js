import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SigmaApp from './components/SigmaApp';
import forceAtlas from './data-force-atlas.json';
import yifanHu from './data-yifan-hu.json';

export default function App() {
    return (
        <Routes>
            <Route path="yifan" element={<SigmaApp graphData={yifanHu} />} />
            <Route path="*" element={<SigmaApp graphData={forceAtlas} />} />
        </Routes>
    );
}
