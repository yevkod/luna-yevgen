import React from 'react';
import { Pagination } from 'semantic-ui-react';
import { onChangeSearch } from '@/redux/MoviesSlice';
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {RootState} from "@/redux";

export const PaginationMovie = () => {
    const { totalResults, searchString, activePage } = useTypedSelector((state:RootState) => state.movies.movies);
    const dispatch = useAppDispatch();

    const handlePaginationChange = (e:any, { activePage }: {activePage: any}) => {
        dispatch(onChangeSearch(searchString, activePage));
    };



    return (

        <>
            <Pagination
                activePage={activePage}
                // @ts-ignore
                onPageChange={handlePaginationChange}
                totalPages={Math.ceil(totalResults / 20)}
                ellipsisItem={null}
                disabled={totalResults <= 20}
            />
        </>
    );
};

