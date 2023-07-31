import './ErrorPage.css';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function Loading({ graphError }) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="98vh"
        >
            <Stack alignItems="center">
                <Typography variant="h3" gutterBottom>
                    Loading Error :(
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {graphError.message}
                </Typography>
            </Stack>
        </Box>
    );
}
