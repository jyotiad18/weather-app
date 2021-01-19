import { createSlice } from '@reduxjs/toolkit';

export const componentSlice = createSlice({
	name: 'component',
	initialState: {
		isSearchShow: false		
	},
	reducers: {
		toggleclose: (state) => {            
			state.isSearchShow = !state.isSearchShow
   	   }   
  },
});

export const { toggleclose} = componentSlice.actions;

export const selectComponent = state => state.component;

export default componentSlice.reducer;