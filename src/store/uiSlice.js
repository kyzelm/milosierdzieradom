import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    showModal: false,
    modalContent: {
        text: '',
    },
    showUpArrow: false,
    useMobileNav: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setModalState(state, action) {
            state.showModal = action.payload;
        },
        setModalContent(state, action) {
            state.modalContent = action.payload;
        },
        setUpArrowState(state, action) {
            state.showUpArrow = action.payload;
        },
        setMobileNavState(state, action) {
            state.useMobileNav = action.payload;
        },
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;