import React from "react";
import { Button as OriginButton } from "antd";

export default function Button({ size }: { size: "small" | "large" }) {
  return <OriginButton size={size} />
}