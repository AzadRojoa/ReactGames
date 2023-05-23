import React, { useRef, useState } from 'react';
import { Player } from "./Player/player";
import StartButton from './PlayButton/playButton';
import { usePlayer } from '../../hooks/usePlayer';
import { useMissile } from '../../hooks/useMissile';
import { Missile } from './Missile/missile';
import { Ennemie } from './Ennemie/ennemie';

interface Props {
    readonly spaceSize: { width: number, height: number; };
}
const SpaceInvader: React.FC<Props> = ({ spaceSize }) => {
    const intervalPlayer = useRef();
    const intervalMissile = useRef();
    const { player, resetPlayer, movePlayer } = usePlayer();
    const { missile, resetMissile, moveMissileY, moveMissileX } = useMissile(player);
    const [isShooting, setIsShooting] = useState(false);

    const initateGame = () => {
        clearInterval(intervalPlayer.current);
        clearInterval(intervalMissile.current);
        setIsShooting(false);
        resetPlayer();
        resetMissile(player);
    };

    const setmove = ({ keyCode, repeat }: { keyCode: number; repeat: boolean; }): void => {
        if (!repeat) {
            switch (keyCode) {
                case 37:
                    clearInterval(intervalPlayer.current);
                    //@ts-ignore
                    intervalPlayer.current = setInterval(() => movePlayer(player, -1), 20);
                    if (!isShooting) {
                        //@ts-ignore
                        intervalMissile.current = setInterval(() => moveMissileX(missile, -1), 20);
                    }
                    break;
                case 39:
                    clearInterval(intervalPlayer.current);
                    //@ts-ignore
                    intervalPlayer.current = setInterval(() => movePlayer(player, +1), 20);
                    if (!isShooting) {
                        //@ts-ignore
                        intervalMissile.current = setInterval(() => moveMissileX(missile, +1), 20);
                    }
                    break;
                case 38:
                    if (!isShooting) {
                        setIsShooting(true);
                        //@ts-ignore
                        intervalMissile.current = setInterval(() => moveMissileY(missile, -1), 10);
                    }
                    if (missile.pos.y >= 500) {
                        setIsShooting(false);
                        clearInterval(intervalMissile.current);
                        resetMissile(player);
                    }
                    break;
                default:
                    break;
            }
        }
    };

    const stop = ({ keyCode, repeat }: { keyCode: number; repeat: boolean; }): void => {
        if (!repeat && keyCode !== 38 && !isShooting) {
            clearInterval(intervalPlayer.current);
            clearInterval(intervalMissile.current);
        } else if (!repeat && keyCode !== 38) {
            clearInterval(intervalPlayer.current);
        }
    };


    return (
        <div onKeyDown={setmove} tabIndex={0} onKeyUp={stop} style={{ border: "none" }}>
            <StartButton callback={initateGame}></StartButton>
            <svg
                style={{
                    width: spaceSize.width,
                    height: spaceSize.height,
                    display: "block",
                    transformOrigin: "top left",
                }}
                viewBox={`0 0 ${spaceSize.width} ${spaceSize.height}`}
            >
                <rect
                    x={0}
                    y={0}
                    width={spaceSize.width}
                    height={spaceSize.height}
                    stroke="#333"
                    fill="gray"
                    strokeWidth={spaceSize.width / 100}
                ></rect>
                <Player positionX={player.pos.x ? player.pos.x : 0}
                    isShooting={isShooting} />
                <Missile
                    positionY={missile.pos.y ? missile.pos.y : 6000}
                    positionX={missile.pos.x ? missile.pos.x : 6000}
                    isShooting={isShooting}
                ></Missile>
                <Ennemie positionX={0} isShooting={false}></Ennemie>
            </svg>
        </div>

    );
};
export default SpaceInvader;