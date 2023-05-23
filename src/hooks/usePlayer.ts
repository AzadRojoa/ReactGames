import React from 'react';

export type PLAYER = {
  pos: {
    x: number;
    y: number;
  };
};

export const usePlayer = () => {
  const [player, setPlayer] = React.useState({
    pos: { x: 400 / 2 - 2, y: 0 },
  });
 
  const updatePlayerPos = ({ x, y }: { x: number; y: number; }): void => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: ((prev.pos.x < -5 && x < 0) || (prev.pos.x > 437 && x > 0) ? prev.pos.x  : prev.pos.x += x), y: (prev.pos.y += y) },
    }));
  };

  const resetPlayer = React.useCallback(
    (): void =>
      setPlayer({
        pos: { x: 400 / 2 - 2, y: 0 }
      }),
    []
  );

  const movePlayer = (player: PLAYER, dir: number) => {
    updatePlayerPos({ x: dir, y: 0 });
  };
  
  return { player, resetPlayer, movePlayer };
};
