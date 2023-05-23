import React from 'react';
import { PLAYER } from './usePlayer';

export type MISSILE = {
  pos: {
    x: number;
    y: number;
  };
};

export const useMissile = (player: PLAYER) => {
  const [missile, setMissile] = React.useState({
    pos: { x: player.pos.x +20, y: 450 },
  });
 
  const updateMissilePosY = React.useCallback(({ x, y }: { x: number; y: number; }, missile:MISSILE): void => {
    setMissile(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: ( prev.pos.y > 10? prev.pos.y+= y: 500000) },
    }));
  }, []);
  
  const updateMissilePosX = React.useCallback(({ x, y }: { x: number; y: number; }, missile:MISSILE): void => {
    setMissile(prev => ({
      ...prev,
      pos: { x: ((prev.pos.x < -5 && x < 0) || (prev.pos.x > 437 && x > 0) ? prev.pos.x  : prev.pos.x += x), y: ( missile.pos.y += y) },
    }));
  },[]);

  const resetMissile = React.useCallback(
    (player: PLAYER): void =>
      setMissile({
        pos: { x: player.pos.x +20, y: 450 },
      }),
    []
  );

  const moveMissileY = (missile: MISSILE, dir: number) => {
    updateMissilePosY({ x: 0, y: dir }, missile);
  };

  const moveMissileX = (missile: MISSILE, dir: number) => {
    updateMissilePosX({ x: dir, y: 0 }, missile);
  };

  return { missile, resetMissile, moveMissileX , moveMissileY};
};
