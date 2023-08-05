import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SigmaApp from './components/SigmaApp';

export default function App() {
    return (
        <Routes>
            <Route
                path="reingold"
                element={<SigmaApp graphPath="data-reingold.json" />}
            />
            <Route
                path="yifan"
                element={<SigmaApp graphPath="data-yifan-hu.json" />}
            />
            <Route
                path="*"
                element={<SigmaApp graphPath="data-force-atlas.json" />}
            />
        </Routes>
    );
}
