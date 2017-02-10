import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';

import { setLyrics, fetchLyrics } from '../action-creators/lyrics';
import axios from 'axios';


export default class extends React.Component {
	constructor () {
		super();
		this.state = Object.assign({
			artistQuery: '',
			songQuery: ''
		}, store.getState());

		this.setArtist = this.setArtist.bind(this);
		this.setSong = this.setSong.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
    	this.unsubscribe = store.subscribe(() => {
    		this.setState(store.getState());
    	});
  	}

	componentWillUnmount () {
		this.unsubscribe();
	}

	setArtist (artist) {
		this.setState({artistQuery: artist});
	}

	setSong (song) {
		this.setState({songQuery: song});
	}

	handleSubmit (evt) {
		evt.preventDefault();
		// console.log('here');
		const artistName = this.state.artistQuery;
		const songName = this.state.songQuery;
		if (artistName && songName) {
			store.dispatch(fetchLyrics(artistName, songName));
		}
	}

	render () {

		return (
				<Lyrics
					text={this.state.lyrics.text}
					setArtist={this.setArtist}
					artistQuery={this.state.artistQuery}
					setSong={this.setSong}
					songQuery={this.state.songQuery}
					handleSubmit={this.handleSubmit}
				/>
		);
	}

}
