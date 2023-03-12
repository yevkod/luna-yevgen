import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Head from 'next/head';
import {Header} from 'semantic-ui-react';
import {Layout} from '@/components/Layout';
import {BASE_URL} from '@/utils/constants';
import {DetailsMovie} from '@/components/DetailsMovie';
import {initializeStore} from "@/redux";


const MovieDetailsPage = ({details, error} : {details: any, error: any}) => {
    return (
        <>
            <Layout placeholder={false}>
                <Head>
                    <title>
                        {details?.Title}
                        {' '}
                        (
                        {details?.Year}
                        )
                    </title>
                </Head>
                {!_?.isEmpty(details) ? <DetailsMovie details={details}/> : <Header>{error}</Header>}
            </Layout>
        </>
    )
};

export async function getServerSideProps({params}: { params: any }) {
    // @ts-ignore
    const reduxStore = initializeStore();
    let error;
    let data;
    try {
        const response = await axios.get(BASE_URL, {params: {i: params.id}});
        data = response?.data;
    } catch (e: any) {
        error = e.message;
    }
    return {
        props: {
            details: data,
            initialReduxState: reduxStore?.getState(),
            error: error ?? null,
        },
    };
}

export default MovieDetailsPage;

