import React from 'react';
import IconButton from '@mui/material/IconButton';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

type Props = {
    pause: () => void
}

const PauseButton = ({pause}: Props) => {
    return (
        <IconButton onClick={pause}>
            <PauseCircleIcon style={{width: 50, height: 50}}/>
        </IconButton>
    );
}

export default PauseButton;