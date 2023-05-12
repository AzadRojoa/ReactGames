import * as React from "react";

export type Props = {
    readonly frame: number;
    readonly clearTime: number | undefined;
};

const worldRecord = 1254;

const timeText = (props: Props): ReadonlyArray<string> => {
    if (typeof props.clearTime === "number") {
        if (props.clearTime < worldRecord) {
            return [
                "OUI",
                `${props.clearTime}`,
                "ナルミンチョにスクリーンショット",
                "を送れば記録を更新するよ"
            ];
        }
        return [
            `TEST: ${props.clearTime}`,
            `(世界1位は Kish. の ${worldRecord})`
        ];
    }
    return [`タイム: ${props.frame}`];
};

export const Time: React.FunctionComponent<Props> = (props) => {
    return (
        <g>
            {timeText(props).map((line, index) => (
                <text
                    x={0}
                    y={16 * (1 + index)}
                    fill="#fff"
                    style={{ userSelect: "none" }}
                >
                    {line}
                </text>
            ))}
        </g>
    );
};
