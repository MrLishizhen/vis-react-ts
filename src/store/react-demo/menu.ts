import {createSlice} from '@reduxjs/toolkit'
import {RootState} from "@/store/store";
import {Welcome} from "@/router/com_store";

//menu
export const menuSlice = createSlice({
    name:'menu',
    initialState:{
        menu:[{
            path:'welcome',
            element:'welcome'
        }]
    },
    reducers:{

    }
})

export const menu_data = (state:RootState) => state.menuSlice.menu

export default menuSlice.reducer
