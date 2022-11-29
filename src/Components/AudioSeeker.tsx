import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

type Props = {
    length: number;
    progress: number;
};

const CustomizeSlider = styled(Slider)(() => ({
    paddingTop: 30,
    paddingBottom: 0,
    color: 'gray',
    '& .MuiSlider-rail': {
        height: '-webkit-fill-available'
    },
    '& .MuiSlider-track' : {
        height: '-webkit-fill-available'
    }
}));

const AudioSeeker = ({length, progress}: Props) => {
    return (
        <CustomizeSlider
            key={`slider-${progress}`}
            defaultValue={progress}
            min={0}
            step={1}
            max={length}
            disabled={true}
        />
    );
}

export default AudioSeeker;