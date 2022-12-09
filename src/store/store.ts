//引入切片工具
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './react-demo/counterReducer'
import menuSlice from "./react-demo/menu";
const store = configureStore({
    reducer: {
        counterSlice,
        menuSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
