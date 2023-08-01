import FlareIcon from '@mui/icons-material/Flare';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import IconButton from '@mui/material/IconButton';
import {
    ControlsContainer,
    SearchControl,
    useFullScreen,
} from '@react-sigma/core';
import React from 'react';

import SigmaInfoControl from './SigmaInfoControl';

export default function SigmaGraphControl({ graph }) {
    const { isFullScreen, toggle } = useFullScreen();

    return (
        <>
            <ControlsContainer position="top-left">
                <SearchControl style={{ width: '150px' }} />
            </ControlsContainer>
            <ControlsContainer position="bottom-right">
                <div className="react-sigma-control">
                    <IconButton>
                        <FlareIcon style={{ marginTop: '2px' }} />
                    </IconButton>
                </div>
                <div className="react-sigma-control">
                    <IconButton onClick={toggle}>
                        {isFullScreen ? (
                            <FullscreenExitIcon style={{ marginTop: '2px' }} />
                        ) : (
                            <FullscreenIcon style={{ marginTop: '2px' }} />
                        )}
                    </IconButton>
                </div>
            </ControlsContainer>
            {isFullScreen ? null : (
                <ControlsContainer position="top-left">
                    <SearchControl style={{ width: '150px' }} />
                </ControlsContainer>
            )}
            <ControlsContainer position="top-right">
                <SigmaInfoControl graph={graph} />
            </ControlsContainer>
        </>
    );
}
