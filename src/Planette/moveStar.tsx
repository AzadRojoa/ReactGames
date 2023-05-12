import * as React from "react";
import * as v2 from "./vector2";
import sun from "./sun.png";
import Image from "next/image";

export type Props = {
    readonly position: v2.Vector2;
    readonly radius: number;
};


export const MoveStar: React.FunctionComponent<Props> = (props) => {
    return (
        <Image src={sun} x={props.position.x - 5} y={props.position.y - 5} alt='oui' width={100} height={100} />
    );
};
