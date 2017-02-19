import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/items';
import Home from './Home';


class AppContainer extends Component {
	
	addItem() {
		this.props.addItem(); // the connect functionality adds the action fns to props via mapDispatchToProps fn.
	}
	
	render() {
		return (
			<Home {...this.props}/>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { 
	return {
		itemsCount: state.itemsCount
	} 
}, mapDispatchToProps)(AppContainer);