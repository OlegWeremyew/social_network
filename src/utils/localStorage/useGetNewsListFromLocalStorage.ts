import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {getNewsSelector} from "../../selectors";
import {NewsType} from "../../redux/NewsReducer/types";
import {NewsActions} from "../../redux/NewsReducer";

export const useGetHistoryList = (): NewsType[] => {
    const dispatch = useDispatch();

    const currentItemList = useSelector(getNewsSelector);

    useEffect(() => {
        const currentItemListAsString = localStorage.getItem('currentItemList');
        currentItemListAsString &&
        dispatch(
            NewsActions.setHistoryFromSessionStorage(
                JSON.parse(currentItemListAsString),
            ),
        );
    }, []);

    useEffect(() => {
        localStorage.setItem('currentItemList', JSON.stringify(currentItemList));
    }, [currentItemList]);
    return currentItemList;
};