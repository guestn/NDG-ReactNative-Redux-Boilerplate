import * as types from './types';
import Api from '../lib/api';

export function fetchItems(searchStr) {
	return (dispatch, getState) => { //give access to entire state;
		console.log(getState());
		const params = [
			`s=${encodeURIComponent(searchStr)}`,
			'plot=full',
			'tomatoes=true'
		].join('&');
		return Api.get(`?${params}`)
		.then((res) => {
			console.log('res',res);
			dispatch(setSearchedItems({items:res.Search}))
		}).catch((err) => {
			console.log(err);
		})
	}
}

export function setSearchedItems({items}) {
	return {
		type: types.SET_SEARCHED_ITEMS,
		items: items
	}
}

export function addRecipe() {
	return {
		type: types.ADD_ITEMS,
	}
}
