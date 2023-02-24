import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';

const initialState: UserSchema = {
};

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

export const { actions: userActions } = user;
export const { reducer: userReducer } = user;
