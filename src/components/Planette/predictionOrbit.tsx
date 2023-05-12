import * as React from "react";
import * as v2 from "./vector2";

export type Props = {
    readonly orbitList: ReadonlyArray<v2.Vector2>;
};

export type StartToEnd = {
    start: v2.Vector2;
    end: v2.Vector2;
};

export const PredictionOrbit: React.FunctionComponent<Props> = (props) => {
    return (
        <g>
            {orbitListToStartToEndList(props.orbitList).map((orbit, index) => (
                <line
                    key={index}
                    x1={orbit.start.x}
                    y1={orbit.start.y}
                    x2={orbit.end.x}
                    y2={orbit.end.y}
                    stroke={`rgba(255, 255, 255, ${1 - (index / props.orbitList.length + 1) / 2
                        })`}
                ></line>
            ))}
        </g>
    );
};

const orbitListToStartToEndList = (
    list: ReadonlyArray<v2.Vector2>
): ReadonlyArray<StartToEnd> => {
    const result: Array<StartToEnd> = [];
    for (let i = 0; i < list.length - 1; i += 1) {
        const start = list[i] as v2.Vector2;
        const end = list[i + 1] as v2.Vector2;
        result.push({ start, end });
    }
    return result;
};
