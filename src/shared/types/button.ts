import React from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

type IconComponent = React.ComponentType<SvgIconProps>;

export type ButtonP = {
  text: string;
  startIcon?: IconComponent;
  endIcon?: IconComponent;
  styles?: React.CSSProperties;
  onClick?: () => void;
};
