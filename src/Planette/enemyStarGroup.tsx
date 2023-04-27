import * as React from "react";
import * as lib from "./lib";
import * as v2 from "./vector2";

export type Props = {
    enemyStarGroupStatus: ReadonlyArray<boolean>;
    spaceSize: lib.Size;
};

export type EnemyGroupState = ReadonlyArray<boolean>;

const positionList: ReadonlyArray<v2.Vector2> = Array.from(
    { length: 100 },
    (_, i): v2.Vector2 => ({
        x: 0.1 + ((i % 10) / 10 + i / 1000) * 0.8,
        y: 0.1 + (i / 100) * 0.8
    })
);

export const initStatusList = Array(positionList.length).fill(true);

export const updateStatus = (
    statusList: ReadonlyArray<boolean>,
    moveStarPosition: v2.Vector2,
    spaceSize: lib.Size
): ReadonlyArray<boolean> => {
    return positionList.map((position, i) => {
        const isLive = statusList[i] as boolean;
        if (!isLive) {
            return false;
        }
        return !isCollision(
            { x: position.x * spaceSize.width, y: position.y * spaceSize.height },
            moveStarPosition
        );
    });
};

export const isClear = (statusList: ReadonlyArray<boolean>): boolean => {
    return statusList.every((status) => status === false);
};

export const EnemyStarGroup: React.FunctionComponent<Props> = (props) => {
    return (
        <g>
            {positionList.map((position, index) => {
                if (props.enemyStarGroupStatus[index]) {
                    return (
                        <circle
                            key={index}
                            r={4}
                            cx={position.x * props.spaceSize.width}
                            cy={position.y * props.spaceSize.height}
                            fill="yellow"
                        ></circle>
                    );
                }
            })}
        </g>
    );
};

/** 動く星と, 敵が衝突したかどうか調べる */
export const isCollision = (
    enemyStarPosition: v2.Vector2,
    moveStarPosition: v2.Vector2
): boolean => {
    return v2.getDistance(enemyStarPosition, moveStarPosition) < 10;
};
