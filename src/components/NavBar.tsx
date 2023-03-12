import React from 'react';
import {
    Button, Container, Icon, Input, Menu,
} from 'semantic-ui-react';
import logo from '../assets/film-logo.png';
import NextImg from 'next/image';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { onChangeSearch } from '@/redux/MoviesSlice';
import {useAppDispatch} from "@/hooks/useAppDispatch";
import NextLink from "next/link";


export const Navbar = ({ visibility } : {visibility: any}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleChange = ({ target }: {target: any}) => {
        const { value } = target;
        if (value) {
            // @ts-ignore
            dispatch(onChangeSearch(value));
        }
    };

    return (
        <>
        <Menu fixed="top" inverted stackable>
            <Container>
                <NextLink href="/" passHref>
                    <Menu.Item header>
                        <NextImg src={logo} width={35} height={35}  alt="photo"/>
                        <span style={{ marginLeft: '1.1em' }}>Movies</span>
                    </Menu.Item>
                </NextLink>
                <Menu.Item position="right">
                    {visibility
                        ? (
                            <>
                                <Input
                                    icon="search"
                                    placeholder="Search"
                                    onChange={_.debounce(handleChange, 300)}
                                />
                            </>
                        )
                        : (
                            <>
                                <Button onClick={() => router.push('/')}>
                                    <Icon name="arrow alternate circle left outline" />
                                    Back
                                </Button>
                            </>
                        )}
                </Menu.Item>
            </Container>
        </Menu>
        </>
    );
};

