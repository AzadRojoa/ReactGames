import * as React from "react";
import player from "../../../assets/player.png";


export type Props = {
    readonly positionX: number;
    readonly isShooting: boolean;
};


export const Player: React.FunctionComponent<Props> = (props) => {
    return (
        <image id="player" href={player} width={70} height={70} x={props.positionX ? props.positionX : 463 / 2} y={450} style={{ position: "absolute" }} />
    );
};
