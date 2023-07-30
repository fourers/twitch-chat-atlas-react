import './SigmaInfoControl.css';

import { useRegisterEvents } from '@react-sigma/core';
import React, { useEffect, useState } from 'react';

export default function SigmaInfoControl({ graph }) {
    const [currentNode, setCurrentNode] = useState(null);
    const registerEvents = useRegisterEvents();
    useEffect(() => {
        registerEvents({
            clickNode: (event) => setCurrentNode(event.node),
            enterNode: (event) => setCurrentNode(event.node),
            leaveNode: () => setCurrentNode(null),
            clickStage: () => setCurrentNode(null),
        });
    }, [registerEvents]);
    return currentNode === null ? (
        <div className="info">
            <h4>Twitch Chat Atlas <br></br> 22-28 July 2023</h4>
            <p>{graph.nodes().length} total chatters</p>
        </div>
    ) : (
        <div className="info">
            <h4>{graph.getNodeAttribute(currentNode, 'label')}</h4>
            <p>{graph.getNodeAttribute(currentNode, 0)} total messages</p>
        </div>
    );
}
