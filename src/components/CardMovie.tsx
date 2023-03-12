import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {Card, Icon} from 'semantic-ui-react';


export const CardMovie = ({movie} : {movie: any}) => {

    return (
        <>
            <NextLink href={`/movie/${movie.imdbID}`}>
                <Card centered>
                    <Image
                        src={movie?.Poster === 'N/A' ? '/no-poster.jpg' : movie.Poster}
                        width={300}
                        height={400}
                        alt="poster"
                        loading="lazy"
                    />
                    <Card.Content>
                        <Card.Header>{movie.Title}</Card.Header>
                        <Card.Meta>
                            <span className="movie-title">{movie.Type}</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon color="black" name="calendar alternate outline" circular fitted/>
                        <div>{movie.Year}</div>
                    </Card.Content>
                </Card>
            </NextLink>
        </>
    )
};
