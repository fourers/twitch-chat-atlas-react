import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

export default function Loading() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="98vh"
        >
            <CircularProgress color="warning" />
        </Box>
    );
}
