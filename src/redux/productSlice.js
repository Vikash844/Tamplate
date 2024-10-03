import { createSlice } from "@reduxjs/toolkit";
import { product } from "../data";


const initialState = {
    products: product
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {}
})


export default productSlice.reducer;
