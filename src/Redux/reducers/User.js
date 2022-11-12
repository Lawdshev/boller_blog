import { createSlice } from '@reduxjs/toolkit';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios'


 const userSlice = createSlice({
    name:'blogs',
    initialState : {value : []},
    reducers: {
        addBlog: (state, action) => {
            axios.post('', {
              title:action.payload.title,
              author: action.payload.author,
              body: action.payload.body 
            })
        },
        
        editBlog: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                  user.username = action.payload.username;
                }
              })
        },

        deleteBlog: (state, action) => {
          state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
        setInitialState: (state, action) => {
            state.value = action.payload
        }
    }
 })

 export const {addUser, editUser, deleteUser, setInitialState} = userSlice.actions;
 export default userSlice.reducer;
 




