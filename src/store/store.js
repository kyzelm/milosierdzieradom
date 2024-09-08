import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice'
import dataReducer from './dataSlice'

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        data: dataReducer,
    },
})