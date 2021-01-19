import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		weather: null,
		locations: [{
						"title": "London",
						"location_type": "City",
						"woeid": 44418,
						"latt_long": "51.506321,-0.12714"
					},
					{
						"title": "Nice",
						"location_type": "City",
						"woeid": 614274,
						"latt_long": "43.701530,7.278240"
						},
						{
						"title": "Venice",
						"location_type": "City",
						"woeid": 725746,
						"latt_long": "45.437012,12.33711"
					}],
		woeid: 44418,
		isCelcis: true
	},
	reducers: {	
		changetocelcis: (state) => {
			state.isCelcis = !state.isCelcis;
		},
		setweather: (state, action) => {						
			state.weather = action.payload.data;			
		},
		setwoeid: (state, action) => {			
			state.woeid = action.payload.woeid;
		},
		searchcity: (state, action) => {								 
				if (action.payload.city) {
					const filteredCity = state.locations.filter(x => x === action.payload.city);
					const newLoc = state.locations || [];
					state.locations = filteredCity;
					state['newLoc'] = newLoc;				
				} else {				
					state.locations = state.newLoc;
			}
		},       	
  },
});

export const { searchcity, setweather, changetocelcis, setwoeid} = weatherSlice.actions;
export const selectWeather = state => state.weather;
export default weatherSlice.reducer;