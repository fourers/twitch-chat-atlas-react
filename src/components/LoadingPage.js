import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function LoadingPage() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <Stack alignItems="center">
                <Typography variant="h3" gutterBottom>
                    Loading
                </Typography>
                <CircularProgress color="warning" />
            </Stack>
        </Box>
    );
}
