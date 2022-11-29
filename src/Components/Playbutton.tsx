import React from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

type Props = {
    playAudio: () => void
}

const PlayButton = ({playAudio}: Props) => {
    return (
        <IconButton onClick={playAudio}>
            <PlayCircleIcon style={{width: 50, height: 50}}/>
        </IconButton>
    );
}

export default PlayButton;