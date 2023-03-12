import React from 'react';
import {Container, Menu} from 'semantic-ui-react';
import {PaginationMovie} from './PaginationMovie';


export const Footer = ({visibility} : {visibility: any}) => {
    return (
        <>
            <Menu fixed="bottom" compact style={!visibility ? {visibility: 'hidden'} : null}>
                <Container>
                    <Menu.Item position="right" fitted="horizontally">
                        <PaginationMovie/>
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    )
};



