import '@react-sigma/core/lib/react-sigma.min.css';

import {
    ControlsContainer,
    FullScreenControl,
    SigmaContainer,
    ZoomControl,
} from '@react-sigma/core';
import Graph from 'graphology';
import React from 'react';

import SigmaInfoControl from './SigmaInfoControl';
import SigmaSearchBox from './SigmaSearchBox';

const shadeColour = (hexCode, magnitude) => {
    const hexColour = hexCode.replace(`#`, ``);
    const decimalColor = parseInt(hexColour, 16);
    let r = (decimalColor >> 16) + magnitude;
    r = Math.min(Math.max(r, 0), 255);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g = Math.min(Math.max(g, 0), 255);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b = Math.min(Math.max(b, 0), 255);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
};

const blendColors = (colorA, colorB, amount = 0.5) => {
    const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
    const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
    const r = Math.round(rA + (rB - rA) * amount)
        .toString(16)
        .padStart(2, '0');
    const g = Math.round(gA + (gB - gA) * amount)
        .toString(16)
        .padStart(2, '0');
    const b = Math.round(bA + (bB - bA) * amount)
        .toString(16)
        .padStart(2, '0');
    return `#${r}${g}${b}`;
};

const generateGraph = (data) => {
    const graph = new Graph();
    graph.import(data);
    graph.forEachEdge(
        (
            edge,
            _attributes,
            _source,
            _target,
            sourceAttributes,
            targetAttributes,
        ) => {
            const mixedColour = blendColors(
                sourceAttributes.color,
                targetAttributes.color,
            );
            const shadedColour = shadeColour(mixedColour, 50);
            graph.updateEdgeAttribute(edge, 'color', () => shadedColour);
        },
    );
    return graph;
};

export default function SigmaGraph({ graphData }) {
    const graph = generateGraph(graphData);

    return (
        <SigmaContainer
            style={{ height: '98vh' }}
            graph={graph}
            settings={{ labelRenderedSizeThreshold: 1 }}
        >
            <ControlsContainer position="bottom-right">
                <ZoomControl />
                <FullScreenControl />
            </ControlsContainer>
            <SigmaSearchBox />
            <ControlsContainer position="top-right">
                <SigmaInfoControl graph={graph} />
            </ControlsContainer>
        </SigmaContainer>
    );
}
