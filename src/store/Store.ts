import { configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { colorReducer } from './ColorSlice';

export const store = configureStore({
	reducer: {
		color: colorReducer,
	},
});

export type StoreStateType = ReturnType<typeof store.getState>;
export type StoreDispactchType = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<StoreDispactchType>();
export const useTypedSelector: TypedUseSelectorHook<StoreStateType> = useSelector;
