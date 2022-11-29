import React, {useState, useEffect, useRef, ReactElement} from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import AudioSeeker from "../Components/AudioSeeker";
import PlayButton from "../Components/Playbutton";
import PauseButton from "../Components/PauseButton";
import AudioPaceControl from "../Components/AudioPaceControl";
import AudioSkipControl from "../Components/AudioSkipControl";
import VolumeOn from "../Components/VolumeOn";
import VolumeOff from "../Components/VolumeOff";
import AudioTimer from "../Components/AudioTimer";

const MainContainer = styled(Grid)(() => ({
    margin: 20,
}));

const AudioPodcastPlayerContainer = () => {
    const [audioStatus, setAudioStatus] = useState('pause');
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volumeStatus, setVolumeStatus] = useState('unmute');
    const [volume, setVolume] = useState(.5);
    const [pace, setPace] = useState(1);
    const audioRef = useRef(new Audio());
    
    useEffect(() => {
        audioRef.current.src = 'https://content.blubrry.com/takeituneasy/lex_ai_balaji_srinivasan.mp3';
        
        audioRef.current.addEventListener('loadedmetadata', (e) => {
            if(e?.target) {
                //@ts-ignore
                setDuration(e?.target?.duration);
            }
        })

        audioRef.current.addEventListener('timeupdate', (e) => {
            if(e?.target) {
                //@ts-ignore
                setCurrentTime(e?.target?.currentTime);
            }
        })
    }, [])

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume])

    useEffect(() => {
        audioRef.current.playbackRate = pace;
    }, [pace])

    const playAudio = () => {
        setAudioStatus('play');
        audioRef.current.play();
    }

    const pauseAudio = () => {
        setAudioStatus('pause');
        audioRef.current.pause();
    }

    const skipForward = () => {
        audioRef.current.currentTime = audioRef.current.currentTime + 30;
    }

    const skipBackward = () => {
        audioRef.current.currentTime = audioRef.current.currentTime - 10;
    }

    const changeVolume = (value: any) => {
        setVolume(value.target.value);
        if(value.target.value === 0) {
            setVolumeStatus('mute');
        }
    }

    const unMute = () => {
        setVolume(.5);
        setVolumeStatus('unmute')
    }

    const mute = () => {
        setVolumeStatus('mute');
        setVolume(0);
    }

    const increasePace = () => {
        if(pace < 16) {
            setPace(pace + .25)
        }
    }

    const decreasePace = () => {
        if(pace >= .25) {
            setPace(pace - .25)
        }
    }

    return (
        <MainContainer container xs={11} lg={11} md={11}>
            <Grid item xs={1.5} lg={1} md={1}>
                {audioStatus === 'pause' ? 
                    <PlayButton playAudio={playAudio}/> : <PauseButton pause={pauseAudio}/>}
            </Grid>
            <Grid item xs={10.5} lg={11} md={11}>
                <Grid item xs={12}>
                    <AudioSeeker
                        length={duration}
                        progress={currentTime}
                    />
                </Grid>
                <Grid container xs={10} lg={11} md={11} spacing={2}>
                    <Grid item xs={4}>
                        <AudioPaceControl 
                            pace={pace} 
                            increasePace={increasePace} 
                            decreasePace={decreasePace} 
                        />
                    </Grid>
                    <Grid item xs={2.5} spacing={2}>
                        <AudioSkipControl skipForward={skipForward} skipBackward={skipBackward} />
                    </Grid>
                    <Grid item xs={4} spacing={2} style={{paddingTop: 4}}>
                        {volumeStatus === 'unmute' ? 
                            <VolumeOn 
                                changeVolume={changeVolume} 
                                volume={volume} 
                                mute={mute}
                            /> : <VolumeOff unMute={unMute} />}
                    </Grid>
                    <Grid item xs={1.5} spacing={2}>
                        <AudioTimer
                            currentTime={currentTime}
                            duration={duration}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <audio 
                ref={audioRef}
            />
        </MainContainer>
    )
}

export default AudioPodcastPlayerContainer;