import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import monitorReducersEnhancer from '../enhancers/monitorReducer.js'
import loggerMiddleware from '../middleware/logger.js'

import weatherReducer from '../reducers/weatherSlice';
import componentReducer from '../reducers/componentSlice';

export default function configureAppStore(preloadedState) {
  const store = configureStore({
      reducer: {
        weather: weatherReducer,
        component: componentReducer
      },
      middleware: [loggerMiddleware, ...getDefaultMiddleware()],
      preloadedState,
      enhancers: [monitorReducersEnhancer]
  })
 
  return store
}


