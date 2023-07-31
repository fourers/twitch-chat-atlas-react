import React, { useEffect, useState } from 'react';

import Loading from './Loading';
import SigmaGraph from './SigmaGraph';

export default function SigmaApp({ graphPath }) {
    const [graphData, setGraphData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(graphPath)
            .then((response) => response.json())
            .then((response) => {
                setGraphData(response);
                setIsLoading(false);
            });
    }, [graphPath]);

    return isLoading ? <Loading /> : <SigmaGraph graphData={graphData} />;
}
