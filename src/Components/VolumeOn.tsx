import React, {ReactElement, useState} from "react";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

type Props = {
    changeVolume: (event: any) => void;
    volume: number;
    mute: () => void;
};

const SliderGrid = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center'
}));

const CustomizeSlider = styled(Slider)(() => ({
    padding: 0,
    color: 'white'
}));

const VolumeOn = ({changeVolume, volume, mute}: Props) => {
    const [displayVolume, setDisplayVolume] = useState(false);
    return (
        <Grid container 
            onMouseEnter={() => setDisplayVolume(true)} 
            onMouseLeave={() => setDisplayVolume(false)}
        >
            <Grid item>
                <IconButton onClick={mute}>
                    <VolumeUpIcon fontSize={'large'}/>
                </IconButton>
            </Grid>
        
            <SliderGrid item xs={6} lg={6} md={6}>
                {displayVolume && 
                    <CustomizeSlider 
                        max={1}
                        min={0}
                        step={.1}
                        value={volume}
                        onChange={changeVolume}
                    />
                }
            </SliderGrid>
        </Grid>
    );
}

export default VolumeOn;