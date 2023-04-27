import * as React from "react";
import * as v2 from "./vector2";
import sun from "./sun.png";

export type Props = {
    readonly position: v2.Vector2;
    readonly radius: number;
};


export const MoveStar: React.FunctionComponent<Props> = (props) => {
    return (
        <image href={sun} x={props.position.x - 5} y={props.position.y - 5} style={{ width: 10, height: 10, position: "absolute" }} />
    );
};
