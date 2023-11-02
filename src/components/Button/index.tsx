import React from "react";
import { Button as OriginButton, ButtonProps } from "antd";

export default function Button({ size }: Partial<ButtonProps>) {
  return <OriginButton size={size} />
}