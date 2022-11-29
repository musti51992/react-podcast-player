import React from "react";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Replay10Icon from '@mui/icons-material/Replay10';
import Forward30Icon from '@mui/icons-material/Forward30';
import { styled } from '@mui/material/styles';

type Props = {
    skipForward: () => void;
    skipBackward: () => void;
}

const IconButtonStyled = styled(IconButton)(() => ({
    padding: 0
}));

const AudioSkipControl = ({skipForward, skipBackward}: Props) => {
    return (
        <Grid container spacing={.5}>
            <IconButtonStyled onClick={skipBackward}>
                <Replay10Icon fontSize={'large'} />
            </IconButtonStyled>
            <IconButtonStyled onClick={skipForward}>
                <Forward30Icon fontSize={'large'} />
            </IconButtonStyled>
        </Grid>
    );
}

export default AudioSkipControl;