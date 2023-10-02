export type ShadowProps = {
  inset: boolean
  offsetX: number
  offsetY: number
  blurRadius: number
  spreadRadius: number
  color: `rgba(${number},${number},${number},${number})`
};

export type RbgaColor = `rgba(${number},${number},${number},${number})`;

export interface GradientStop {
  color: string;
  percentage: number;
}

export interface GradientMiddleStop extends GradientStop {
  enabled: boolean;
}

export interface GradientProps {
  fromColorStop: GradientStop;
  toColorStop: GradientStop;
  viaColorStop: GradientMiddleStop;
  orientation: number;
}
