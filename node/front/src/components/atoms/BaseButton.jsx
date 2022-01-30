import { Button } from "@material-ui/core";
import React from "react";

export const BaseButton = (props) => {
  const {children} = props;
  const onClick = props.onClick;
  return (
    <Button
      onClick={onClick}
    >
      {children}
    </Button>
  )
}