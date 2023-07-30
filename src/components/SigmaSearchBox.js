import {
    ControlsContainer,
    SearchControl,
    useFullScreen,
} from '@react-sigma/core';
import React from 'react';

export default function SigmaSearchBox() {
    const { isFullScreen } = useFullScreen();
    return !isFullScreen ? (
        <ControlsContainer position="top-left">
            <SearchControl style={{ width: '150px' }} />
        </ControlsContainer>
    ) : null;
}
