import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "./api";


export const getCategorias = createAsyncThunk('categorias/getCategorias', 
async(page,{ rejectWithValue})=>{
    try{
        const {data} = await api.get('/api/categorias');
        return data;
    } catch(error){
        return rejectWithValue(error.message)
    }

})