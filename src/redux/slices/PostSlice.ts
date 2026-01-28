import type {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../servises/api.servise.ts";

type PostSliceType = {
    posts:IPost[];
}
const initPostSliceState:PostSliceType =  {posts:[]};

const loadPosts = createAsyncThunk('loadPost', async (_, thunkAPI)=>{
    const posts = await getAll<IPost[]>('/posts');
    console.log(posts);
    return thunkAPI.fulfillWithValue(posts);
})
export const postSlice = createSlice({
    name:'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled,(state, action: PayloadAction<IPost[]>) => {
    state.posts = action.payload;
    }),
});

export const postactions = {...postSlice.actions, loadPosts};