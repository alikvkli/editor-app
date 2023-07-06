import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "./types"

const initialState: InitialStateProps = {
    user: undefined,
    auth: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        _doLogin : (state,action:PayloadAction<InitialStateProps['user']>) => {
            state.user = action.payload;
            state.auth = true;
        },
        _doLogout : (state) => {
            state.auth = false;
            state.user = undefined;
        }
    }
});

export const {
    _doLogin,
    _doLogout
} = authSlice.actions;

export default authSlice.reducer;