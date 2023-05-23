import * as React from "react";
import missile from "../../../assets/shoot.png";
import { StyledMissile } from "./missile.style";


export type Props = {
    readonly positionY: number;
    readonly positionX: number;
    readonly isShooting: boolean;
};


export const Missile: React.FunctionComponent<Props> = (props) => {
    return (
        <StyledMissile id="missile" href={missile} width={30} height={30} x={props.positionX} y={props.positionY} isShooting={props.isShooting} />
    );
};
