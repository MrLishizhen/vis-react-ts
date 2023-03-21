import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {RootState} from "@/store/store";
import {Welcome} from "@/router/com_store";
import {getMenu} from "@/api/reacr-demo";

//menu
export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: []
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(thunk_get_menu.fulfilled, (state, action) => {
            const {code, result: data} = action.payload;
            if (code === 200) {
                state.menu = data;
            } else {
                state.menu = []
            }
        })
    }
})

export const menu_data = (state: RootState) => state.menuSlice.menu

// _ 传递回来的参数
// data
// abort: ƒ abort(reason)
// dispatch: ƒ dispatch()
// extra: undefined
// fulfillWithValue: ƒ (value, meta)
// getState: ƒ i()
// rejectWithValue: ƒ (value, meta)
// requestId: "Qhwwi_5LujDaX8ijuukCS"
// signal: AbortSignal {aborted: false, reason: undefined, onabort: null}
export const thunk_get_menu = createAsyncThunk('menu/getmenus', async (data: { userName: string }) => {
    const menu = await getMenu({userName: data.userName});
    return menu;
})

export default menuSlice.reducer
