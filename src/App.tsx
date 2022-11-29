import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AudioPodcastPalyerContainer from "./Containers/AudioPodcastPalyerContainer";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AudioPodcastPalyerContainer />
    </ThemeProvider>
  );
}

export default App;
