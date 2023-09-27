import { CssBaseline, ThemeProvider } from '@mui/material';

import CreateAdventure from './pages/create-adventure'
import Topbar from './components/topbar'

import theme from './config/theme';




function App() {
    return (

            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Topbar/>

           <CreateAdventure/>
            </ThemeProvider>

    );
}
export default App;
