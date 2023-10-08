import { CssBaseline, ThemeProvider } from '@mui/material';

import CreateAdventure from './pages/create-adventure'

import theme from './config/theme';




function App() {
    return (

            <ThemeProvider theme={theme}>
                <CssBaseline/>

           <CreateAdventure/>
            </ThemeProvider>
    );
}

export default App;
