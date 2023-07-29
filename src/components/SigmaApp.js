import React from 'react';
import Graph from 'graphology';
import { SigmaContainer } from '@react-sigma/core';
import graphData from '../lesmis.json';
import '@react-sigma/core/lib/react-sigma.min.css';

const generateGraph = (data) => {
    const graph = new Graph();
    data.nodes.forEach((node) => {
        graph.addNode(node.id, {
            x: node.x,
            y: node.y,
            label: node.label,
            size: node.size,
        });
    });
    data.edges.forEach((edge) => {
        graph.addEdge(edge.source, edge.target, { weight: edge.size });
    });
    return graph;
};

export default function SigmaApp() {
    const graph = generateGraph(graphData);
    return <SigmaContainer style={{ height: '98vh' }} graph={graph} />;
}
