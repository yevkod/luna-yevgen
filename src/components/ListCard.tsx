import React from 'react';
import { Card, Header} from 'semantic-ui-react';
import films from '../assets/films.jpg';
import {CardMovie} from './CardMovie';
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {RootState} from "@/redux";
import Image from "next/image";


export const ListCard = () => {
    const { movies, error } = useTypedSelector((state:RootState) => state.movies);
    return (
        <>
            {!movies?.length
                ? (
                    <Header as="h2" icon>
                        <Image src={films}
                               alt='films'
                        />
                        {error || 'Please write your movies in a search bar'}
                    </Header>
                )
                : (
                    <Card.Group centered doubling>
                        {movies?.map((movie:any, index:any) => <CardMovie key={index} movie={movie} />)}
                    </Card.Group>
                )}
        </>
    );
};


