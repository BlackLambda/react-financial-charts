import React, { Component } from "react";

import { AreaOnlySeries } from "./AreaOnlySeries";
import { LineSeries } from "./LineSeries";
import { strokeDashTypes } from "../utils";

interface AreaSeriesProps {
    readonly baseAt?: number | ((yScale: any, d: [number, number], moreProps: any) => number);
    readonly canvasClip?: any; // func
    readonly canvasGradient?: any; // func
    readonly className?: string;
    readonly fill?: string;
    readonly interpolation?: any; // func
    readonly opacity?: number;
    /**
     * Stroke color
     */
    readonly stroke?: string;
    readonly strokeDasharray?: strokeDashTypes;
    readonly strokeOpacity?: number;
    readonly strokeWidth?: number;
    readonly style?: React.CSSProperties;
    readonly yAccessor: (data: any) => number;
    readonly areaConnectNull?: (data: any) => boolean;
    readonly lineConnectNull?: boolean;
}

/**
 * `AreaSeries` component
 */
export class AreaSeries extends Component<AreaSeriesProps> {

    public static defaultProps = {
        className: "react-financial-charts-area",
        fill: "#2196f3",
        opacity: 0.1,
        stroke: "#2196f3",
        strokeWidth: 3,
        strokeOpacity: 1,
        strokeDasharray: "Solid",
    };

    public render() {
        const {
            baseAt,
            className,
            opacity,
            stroke,
            strokeWidth,
            strokeOpacity,
            strokeDasharray,
            canvasGradient,
            fill,
            interpolation,
            style,
            canvasClip,
            yAccessor,
            areaConnectNull,
            lineConnectNull
        } = this.props;

        return (
            <g className={className}>
                <AreaOnlySeries
                    yAccessor={yAccessor}
                    interpolation={interpolation}
                    base={baseAt}
                    canvasGradient={canvasGradient}
                    fill={fill}
                    opacity={opacity}
                    style={style}
                    canvasClip={canvasClip}
                    stroke="none"
                    connectNull={areaConnectNull}
                />
                <LineSeries
                    yAccessor={yAccessor}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeOpacity={strokeOpacity}
                    strokeDasharray={strokeDasharray}
                    interpolation={interpolation}
                    style={style}
                    connectNulls = {lineConnectNull}
                    canvasClip={canvasClip}
                    fill="none"
                    highlightOnHover={false}
                />
            </g>
        );
    }
}
