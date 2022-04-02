import React from 'react'
import Button from "@material-ui/core/Button";
const RaisedButton = () => {
    const { classes } = props;
    return (
      <Button variant="contained" onClick={props.click}>
        Default
      </Button>
    );
  }

export default RaisedButton
