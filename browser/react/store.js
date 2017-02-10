import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import { setLyrics } from './action-creators/lyrics';

let logger = createLogger();
let appliedMiddleware = applyMiddleware(logger, thunkMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
	}), /* preloadedState, */ composeEnhancers(
	appliedMiddleware
));
export default store;
