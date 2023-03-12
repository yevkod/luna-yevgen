import React from 'react';
import {Container, Segment} from 'semantic-ui-react';
import {Footer} from './Footer';
import {Navbar} from "@/components/NavBar";


export const Layout = ({children, loading, placeholder} : {children?:React.ReactNode, loading?: any, placeholder: any}) => {

    return (
        <>
            <Navbar visibility={placeholder}/>
            <Container fluid textAlign="center" className="main-container">
                <Segment placeholder={placeholder} color="blue" className="main-segment" loading={loading}>
                    {children}
                </Segment>
            </Container>
            <Footer visibility={placeholder}/>
        </>
    )
};

