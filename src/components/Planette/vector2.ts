export type Vector2 = {
  readonly x: number;
  readonly y: number;
};

export const getAToB = (a: Vector2, b: Vector2): Vector2 => {
  return {
    x: -a.x + b.x,
    y: -a.y + b.y
  };
};

export const sub = (a: Vector2, b: Vector2): Vector2 => {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
};

export const add = (a: Vector2, b: Vector2): Vector2 => {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
};

export const minus = (vector2: Vector2): Vector2 => {
  return {
    x: -vector2.x,
    y: -vector2.y
  };
};

export const multipleNumber = (vector2: Vector2, num: number): Vector2 => {
  return {
    x: vector2.x * num,
    y: vector2.y * num
  };
};

export const getDistance = (a: Vector2, b: Vector2): number => {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
};

export const getLength = (vector2: Vector2): number => {
  return Math.hypot(vector2.x, vector2.y);
};

/** 向きはそのままで, 長さを変更する (lengthがマイナスの場合は非対応) */
export const setLength = (vector2: Vector2, length: number): Vector2 => {
  const oldLength = getLength(vector2);
  return {
    x: (vector2.x * length) / oldLength,
    y: (vector2.y * length) / oldLength
  };
};

/** ベクトルの長さが指定した長さより大きかった場合は, 大きさを指定した長さに制限する */
export const setMaxLength = (vector2: Vector2, maxLength: number): Vector2 => {
  const length = getLength(vector2);
  if (maxLength < length) {
    return setLength(vector2, maxLength);
  }
  return vector2;
};

export const clamp = (
  vector2: Vector2,
  min: Vector2,
  max: Vector2
): Vector2 => {
  return {
    x: numberClamp(vector2.x, min.x, max.x),
    y: numberClamp(vector2.y, min.y, max.y)
  };
};

export const numberClamp = (x: number, min: number, max: number): number => {
  if (x < min) {
    return min;
  }
  if (x > max) {
    return max;
  }
  return x;
};
