import * as v2 from "./vector2";

export type Size = {
  readonly width: number;
  readonly height: number;
};

export const sizeEqual = (a: Size, b: Size): boolean => {
  return a.width === b.width && a.height === b.height;
};

/**
 * 宇宙内のマウスのX座標を得る
 * @param screenSize ブラウザの表示領域のサイズ
 * @param spaceSize 宇宙のサイズ
 * @param screenMouseX ブラウザの表示領域の座標系のマウスのX座標
 * @returns 宇宙のサイズの座標系でのマウスのX座標
 */
export const getMouseX = (
  screenSize: Size,
  spaceSize: Size,
  screenMouseX: number
): number => {
  // 横幅いっぱいにして宇宙が表示領域内に収まるかどうか
  if (
    (spaceSize.height * screenSize.width) / spaceSize.width <=
    screenSize.height
  ) {
    return (screenMouseX * spaceSize.width) / screenSize.width;
  }
  /**
   * 表示領域いっぱいに表示したときの宇宙の幅
   * 表示領域の単位系
   */
  const realSpaceWidth =
    (spaceSize.width * screenSize.height) / spaceSize.height;
  /**
   * 左右にできる余白の幅
   * 表示領域の単位系
   */
  const margin = (screenSize.width - realSpaceWidth) / 2;
  /**
   * 余白の分をなくしたマウスのX座標
   * 表示領域の単位系
   */
  const offsetMouseX = screenMouseX - margin;
  return (offsetMouseX * spaceSize.height) / screenSize.height;
};

/**
 * 要素を画面いっぱいに表示するための CSSの transformの値を生成する
 */
export const getFullScreenTransform = (
  screenSize: Size,
  spaceSize: Size
): string => {
  /**
   * 横幅いっぱいにしたときの高さ
   * 表示領域の座標系
   */
  const spaceHeightByFillWidthInScreen =
    (spaceSize.height * screenSize.width) / spaceSize.width;
  // 横幅いっぱいにして宇宙が表示領域内に収まるかどうか
  if (spaceHeightByFillWidthInScreen <= screenSize.height) {
    /**
     * 上下にできる余白の高さ
     * 表示領域の座標系
     */
    const marginY = (screenSize.height - spaceHeightByFillWidthInScreen) / 2;

    return `matrix(${screenSize.width / spaceSize.width}, 0, 0, ${
      screenSize.width / spaceSize.width
    }, 0, ${marginY})`;
  }

  /**
   * 表示領域いっぱいに表示したときの宇宙の幅
   * 表示領域の単位系
   */
  const spaceWidthByFillHeightInScreen =
    (spaceSize.width * screenSize.height) / spaceSize.height;
  /**
   * 左右にできる余白の幅
   * 表示領域の単位系
   */
  const marginX = (screenSize.width - spaceWidthByFillHeightInScreen) / 2;

  return `matrix(${screenSize.height / spaceSize.height}, 0, 0, ${
    screenSize.height / spaceSize.height
  }, ${marginX}, 0)`;
};

/** 位置と速度 */
export type PositionAndVelocity = {
  readonly position: v2.Vector2;
  readonly velocity: v2.Vector2;
};
