export type Animal = {
  name: string;
}

export type ColorRGB = string;
export type Color = {
  rgb?: ColorRGB;
}

export type Cat = Animal & {
  color: string | number | ColorRGB | Color;
  dog?: Dog;
  siblings?: Animal[];
}

export type Dog = Animal & {
  height: number;
  color: Color;
}
