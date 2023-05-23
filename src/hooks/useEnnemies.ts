import React from 'react';
import { PLAYER } from './usePlayer';

export type ENNEMIES = {
  pos: {
    x: number;
    y: number;
  };
};

export const useEnnemies = (player: PLAYER) => {
  const [ennemies, setEnnemies] = React.useState(Array<Array<ENNEMIES>>);
 
  const updateEnnemiesPosY = React.useCallback(({ x, y }: { x: number; y: number; }, ennemies: ENNEMIES): void => {
    //TODO
    // setEnnemies(prev => ({
    //   ...prev,
    //   map((...prev) => {...prev})
  },[]);
  
  const updateEnnemiesPosX = React.useCallback(({ x, y }: { x: number; y: number; }, ennemies:ENNEMIES): void => {
  },[]);

  const resetEnnemies = React.useCallback(
    (player: PLAYER): void => {
    },[]
  );

  const moveEnnemiesY = (ennemies: ENNEMIES, dir: number) => {
    updateEnnemiesPosY({ x: 0, y: dir }, ennemies);
  };

  const moveEnnemiesX = (ennemies: ENNEMIES, dir: number) => {
    updateEnnemiesPosX({ x: dir, y: 0 }, ennemies);
  };

  return { ennemies, resetEnnemies, moveEnnemiesX , moveEnnemiesY};
};
