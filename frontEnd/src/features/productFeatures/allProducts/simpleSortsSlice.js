import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const simpleSort = {
    view : "grid",
}

const simpleSortSlice = createSlice({
    name : 'simpleSort',
    initialState:simpleSort,
    reducers: {
        changeView : (simpleSort,{payload}) => {
            simpleSort.view = payload;
        }
    }
})

export default simpleSortSlice.reducer;

export const {changeView} = simpleSortSlice.actions;