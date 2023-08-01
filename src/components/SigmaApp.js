import React, { useEffect, useState } from 'react';

import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
import SigmaGraph from './SigmaGraph';

export default function SigmaApp({ graphPath }) {
    const [graphData, setGraphData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [graphError, setGraphError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(graphPath)
            .then((response) => response.json())
            .then((response) => {
                setGraphData(response);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log('Error loading graph:', error);
                setGraphError(error);
            });
    }, [graphPath]);

    if (graphError !== null) {
        return <ErrorPage graphError={graphError} />;
    }
    if (isLoading) {
        return <LoadingPage />;
    }
    return <SigmaGraph graphData={graphData} />;
}
