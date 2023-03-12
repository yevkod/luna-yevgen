import React from 'react';
import {Grid, Header} from 'semantic-ui-react';
import Image from 'next/image';
import {TableDetails} from './TableDetails';



export const DetailsMovie = ({details} : {details: any}) => {
    return (

        <>
            <Grid centered stackable celled="internally">
                <Grid.Row>
                    <Grid.Column textAlign="center" width={5} verticalAlign="middle">
                        <div className="detail-image">
                            <Header>{details?.Title}</Header>
                            <Image
                                src={details?.Poster === 'N/A' ? '/no-poster.jpg' : details.Poster}
                                width={514}
                                alt="Poster"
                                height={800}
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={11}><TableDetails details={details}/></Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
};


