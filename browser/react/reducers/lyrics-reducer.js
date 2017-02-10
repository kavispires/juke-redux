import { SET_LYRICS } from '../constants';

const initialState = {
	text: ''
};

export default function (prevState = initialState, action) {
  switch (action.type) {
  	case SET_LYRICS:
  		return Object.assign({}, prevState, { text: action.lyric });
  	default:
  		return prevState;
  }
}
