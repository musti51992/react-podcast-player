import React from "react";
import IconButton from '@mui/material/IconButton';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

type Props = {
    unMute: () => void
}

const VolumeOff = ({unMute}: Props) => {
    return (
        <IconButton onClick={unMute}>
            <VolumeOffIcon fontSize={'large'}/>
        </IconButton>
    );
}

export default VolumeOff;