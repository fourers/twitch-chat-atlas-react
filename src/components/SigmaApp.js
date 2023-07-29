import '@react-sigma/core/lib/react-sigma.min.css';

import { SigmaContainer } from '@react-sigma/core';
import Graph from 'graphology';
import React from 'react';

import graphData from '../lesmis.json';

const getHexCode = (rgbStr) => {
    const hex = rgbStr
        .replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map(Number)
        .map((x) => {
            const code = x.toString(16);
            return code.length === 1 ? `0${code}` : code;
        })
        .join('');
    return `#${hex}`;
};

const generateGraph = (data) => {
    const graph = new Graph();
    data.nodes.forEach((node) => {
        graph.addNode(node.id, {
            x: node.x,
            y: node.y,
            label: node.label,
            size: node.size,
            color: getHexCode(node.color),
        });
    });
    data.edges.forEach((edge) => {
        graph.addEdge(edge.source, edge.target, {
            color: getHexCode(edge.color),
            weight: edge.size,
        });
    });
    return graph;
};

export default function SigmaApp() {
    const graph = generateGraph(graphData);
    return <SigmaContainer style={{ height: '98vh' }} graph={graph} />;
}
