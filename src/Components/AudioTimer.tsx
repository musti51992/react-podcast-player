import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
type Props = {
    currentTime: number;
    duration: number;
}

const AduioTimer = ({currentTime, duration}: Props) => {

    const secondsToHms = (d: number) => {
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? (h < 10 ? `0${h}` : h) : "00";
        var mDisplay = m > 0 ? (m < 10 ? `0${m}` : m) : "00";
        var sDisplay = s > 0 ? (s < 10 ? `0${s}` : s) : "00";
        return `${hDisplay}:${mDisplay}:${sDisplay}`; 
    }

    return (
        <Grid container spacing={1}>
            <Grid item style={{padding: '4px 0'}}>
                <Typography 
                    fontSize={{xs: 12, lg: 24, sm: 24, md: 24}} 
                    fontWeight={500}
                >{`${secondsToHms(currentTime)}/${secondsToHms(duration)}`}</Typography>
            </Grid>
        </Grid>
    )
}

export default AduioTimer;