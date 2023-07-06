import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateProps } from "./types"

const initialState: InitialStateProps = {
    messages: undefined
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        _setMessages : (state,action:PayloadAction<InitialStateProps['messages']>) => {
            state.messages = action.payload;
        },
    }
});

export const {
    _setMessages,
} = messageSlice.actions;

export default messageSlice.reducer;