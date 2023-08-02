import AttractionsIcon from '@mui/icons-material/Attractions';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import FlareIcon from '@mui/icons-material/Flare';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import IconButton from '@mui/material/IconButton';
import {
    ControlsContainer,
    SearchControl,
    useCamera,
    useFullScreen,
} from '@react-sigma/core';
import React from 'react';
import { useHref } from 'react-router-dom';

import SigmaInfoControl from './SigmaInfoControl';

export default function SigmaGraphControl({ graph }) {
    const { isFullScreen, toggle } = useFullScreen();
    const { reset } = useCamera();
    const href = useHref();

    const redirectAtlas = () => {
        window.location.hash = '/';
    };
    const redirectYifan = () => {
        if (href !== '#/yifan') {
            window.location.hash = '/yifan';
        }
    };
    const redirectReingold = () => {
        if (href !== '#/reingold') {
            window.location.hash = '/reingold';
        }
    };

    return (
        <>
            {isFullScreen ? null : (
                <ControlsContainer position="top-left">
                    <SearchControl style={{ width: '150px' }} />
                </ControlsContainer>
            )}
            <ControlsContainer position="top-right">
                <SigmaInfoControl graph={graph} />
            </ControlsContainer>
            <ControlsContainer position="bottom-right">
                <div className="react-sigma-control">
                    <IconButton onClick={redirectAtlas}>
                        <AttractionsIcon style={{ marginTop: '2px' }} />
                    </IconButton>
                </div>
                <div className="react-sigma-control">
                    <IconButton onClick={redirectYifan}>
                        <FlareIcon style={{ marginTop: '2px' }} />
                    </IconButton>
                </div>
                <div className="react-sigma-control">
                    <IconButton onClick={redirectReingold}>
                        <CoronavirusIcon style={{ marginTop: '2px' }} />
                    </IconButton>
                </div>
                <div className="react-sigma-control" />
                <div className="react-sigma-control" aria-label="reset">
                    <IconButton onClick={reset}>
                        <CenterFocusStrongIcon style={{ marginTop: '2px' }} />
                    </IconButton>
                </div>
                <div className="react-sigma-control">
                    <IconButton onClick={toggle} aria-label="full-screen">
                        {isFullScreen ? (
                            <FullscreenExitIcon style={{ marginTop: '2px' }} />
                        ) : (
                            <FullscreenIcon style={{ marginTop: '2px' }} />
                        )}
                    </IconButton>
                </div>
            </ControlsContainer>
        </>
    );
}
