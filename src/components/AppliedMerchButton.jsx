import React from 'react'
import Button from "@material-ui/core/Button";

const AppliedMerchButton = (props) => {
    const { classes } = props;
    return (
        <Button variant="contained" onClick={props.click} style={{"color": "#fff","margin": "1px", "padding": "5px", "backgroundColor": "#8b0000"}} >
      Default
    </Button>
    )
}

export default AppliedMerchButton
