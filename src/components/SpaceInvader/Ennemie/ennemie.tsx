import * as React from "react";
import ennemies from "../../../assets/ennemies.png";


export type Props = {
    readonly positionX: number;
    readonly isShooting: boolean;
};


export const Ennemie: React.FunctionComponent<Props> = (props) => {
    return (
        <image id="ennemies" href={ennemies} width={50} height={50} x={50} y={50} style={{ position: "absolute" }} />
    );
};
