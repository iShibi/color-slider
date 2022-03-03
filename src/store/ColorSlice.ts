import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ColorStateType {
	red: number;
	green: number;
	blue: number;
}

const initialState: ColorStateType = {
	red: 0,
	green: 0,
	blue: 0,
};

export const colorSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		changeColorValue: (state, action: PayloadAction<{ colorName: string; colorValue: number }>) => {
			const { colorName, colorValue } = action.payload;
			switch (colorName) {
				case 'red':
					state.red = colorValue;
					break;
				case 'green':
					state.green = colorValue;
					break;
				case 'blue':
					state.blue = colorValue;
					break;
				default:
					break;
			}
		},
	},
});

export const { changeColorValue } = colorSlice.actions;
export const colorReducer = colorSlice.reducer;
