import {useSelector} from 'react-redux';
import Head from 'next/head';
import React from 'react';
import {ListCard} from '@/components/ListCard';
import {Layout} from '@/components/Layout';
import {RootState} from "@/redux";


export default function Home() {
    const {loading} = useSelector((state: RootState) => state.movies.IsLoading);
    return (
        <>
            <Head>
                <title>
                    Movies
                </title>
            </Head>
            <Layout loading={loading} placeholder>
                <ListCard/>
            </Layout>
        </>
    );
}
