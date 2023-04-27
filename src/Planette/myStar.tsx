import * as React from "react";
import * as v2 from "./vector2";

export type Props = {
    readonly position: v2.Vector2;
    readonly radius: number;
    readonly frame: number;
    readonly isVacuum: boolean;
};

const layerNum = 5;
const loopLimit = 100;

const getColor = (isVacuum: boolean, layerWithFrame: number): string => {
    return `rgba(${isVacuum ? "51, 170, 255" : "255, 51, 51"}, ${1 - layerWithFrame
        })`;
};

export const MyStar: React.FunctionComponent<Props> = (props) => {
    /** 0～1 */
    const frame = (props.frame % loopLimit) / loopLimit;
    /**
     * 0～1 吸い込むなら1→0.5→0→1, そとにでるなら 0→0.5→1→0
     */
    const framePercent = props.isVacuum ? 1 - frame : frame;
    return (
        <g>
            {Array.from({ length: layerNum }, (_, layer) => {
                /** 0 ～ 1.x */
                const layerWithFrame = (layer + framePercent) / layerNum;
                return (
                    <circle
                        key={layer}
                        cx={props.position.x}
                        cy={props.position.y}
                        r={props.radius * (0.5 + 4 * layerWithFrame)}
                        stroke={getColor(props.isVacuum, layerWithFrame)}
                        fill="none"
                    ></circle>
                );
            })}
            <circle
                cx={props.position.x}
                cy={props.position.y}
                r={props.radius}
                fill={getColor(props.isVacuum, 0)}
            ></circle>
        </g>
    );
};
