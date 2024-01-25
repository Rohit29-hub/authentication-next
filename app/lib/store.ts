import { configureStore } from '@reduxjs/toolkit'
import token from './features/auth/tokenSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        tokenSlice : token.reducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']