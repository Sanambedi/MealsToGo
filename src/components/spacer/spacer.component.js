import { View } from "react-native";
import styled, { useTheme } from "styled-components";
import React from "react";

const sizeVarient = {
  small: 1,
  medium: 2,
  large: 3,
};
const positionVarient = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVarient = (position, size, theme) => {
  const sizeIndex = sizeVarient[size];
  const property = positionVarient[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const SpacerView = styled(View)`
  ${({ varient }) => varient};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const varient = getVarient(position, size, theme);
  return <SpacerView varient={varient}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
