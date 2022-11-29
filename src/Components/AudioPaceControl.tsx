import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { styled } from '@mui/material/styles';

type Props = {
    pace: number;
    increasePace: () => void;
    decreasePace: () => void;
}
const PaceBackward = styled(RemoveIcon)(() => ({
    borderColor: 'white',
    border: '1px solid',
    borderRadius: 3
}));

const PaceFarward = styled(AddIcon)(() => ({
    borderColor: 'white',
    border: '1px solid',
    borderRadius: 3
}));

const IconButtonStyled = styled(IconButton)(() => ({
    padding: 0
}));


const AudioPaceControl = ({pace, increasePace, decreasePace}: Props) => {

    return (
        <Grid container spacing={1}>
            <Grid item xs={1.5} lg={2} style={{padding: '4px 0'}}>
                <Typography 
                    fontSize={{xs: 12, lg: 24, sm: 24, md: 24}} 
                    fontWeight={500}>{`${pace}x`}</Typography>
            </Grid>
            <Grid item>
                <IconButtonStyled onClick={decreasePace}>
                    <PaceBackward/>
                </IconButtonStyled>
            </Grid>
            <Grid item>
                <IconButtonStyled onClick={increasePace}>
                    <PaceFarward/>
                </IconButtonStyled>
            </Grid>    
        </Grid>
    )
}

export default AudioPaceControl;