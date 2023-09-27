

import  { ReactNode } from 'react';
import Topbar from '../../components/topbar/topbar';
import { Container } from '@mui/material';

type MainLayoutProps={
    children: ReactNode;
}


const MainLayout=({children}:MainLayoutProps)=>{


    return(
        <>
        
        <Topbar/>
        <Container maxWidth='xl'>
            {children}
        </Container>
        </>
    )
}


export default MainLayout