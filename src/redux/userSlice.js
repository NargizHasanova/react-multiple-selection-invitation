import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchUsersData = createAsyncThunk("users/fetchUsers",
    async () => {
        const res = await axios.get("https://reqres.in/api/users")
        return res.data.data.map(item => ({ ...item, addBtn: true }))
    }
)

const initialState = {
    data: [],
    filteredUsersData: [],
    pendingGet: false,
    errorGet: false,
    searchingName: '',
    selectedForInvitation: []
}

export const counterSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setSearchingName: (state, { payload }) => {
            state.searchingName = payload
        },
        switchBtn: (state, { payload }) => {
            state.data = state.data.map(item => {
                if (item.id === payload) {
                    item.addBtn = !item.addBtn
                }
                return item
            })
        },
        sendInvitation: (state, { payload }) => {
            state.selectedForInvitation = state.data.filter(item => item.addBtn === false)
            if (state.selectedForInvitation.length === 0) return
            console.log('invitation send');
            state.data = state.data.map(item => {
                item.addBtn = true
                return item
            })
        },
        // addToInvitation: (state, { payload }) => {

        // },
    },
    extraReducers: {
        [fetchUsersData.pending]: (state) => {
            state.pendingGet = true
            state.errorGet = false
        },
        [fetchUsersData.fulfilled]: (state, { payload }) => {
            console.log('fulfilled');
            state.pendingGet = false
            state.data = payload
            state.filteredUsersData = payload

        },
        [fetchUsersData.rejected]: (state, action) => {
            console.log('rejected');
            state.errorGet = action.error.message
            state.pendingGet = false
        },
    }
})

export const { setSearchingName, switchBtn, addToInvitation, sendInvitation, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer