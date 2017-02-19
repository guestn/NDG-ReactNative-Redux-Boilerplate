import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight
} from 'react-native';
import S from '../styles/Styles';

import { connect } from 'react-redux';

class Home extends Component {
	 constructor(props) {
    super(props)
    this.state = { 
	    searching: false, 
	    textInput: '' 
	  }
  }
	
	searchPressed() {
		this.setState({
			searching: true
		})
		this.props.fetchItems(this.state.textInput).then( (res) => {
      this.setState({searching: false })
    });
		
	}
	
	getArrayFromObject() {
		//magic ES6 to get array from obj.
		let obj = Object.keys(this.props.searchedItems).map( key => this.props.searchedItems[key]);
		return obj	
	}

	render() {
		console.log(this.props.searchedItems)
		return (
			<View style={S.container}>

				<View style={S.searchContainer}>
					<TextInput 
						style={S.textInput} 
						value={this.state.textInput} 
						placeholder="Enter a movie or TV programme"
						onChangeText={(textInput) => this.setState({textInput})} 
					/>
					<TouchableHighlight style={S.button} onPress={() => this.searchPressed()}>
						<Text>Search</Text>
					</TouchableHighlight>
				</View>

				<ScrollView style={S.scrollView}>
					{!this.state.searching && this.getArrayFromObject().map((item) => {
            return <TouchableHighlight key={item.imdbID}  style={S.listItem} onPress={ () => this.props.navigate({ key: 'Detail', id: item.imdbID}) }>
            <View>
              <Image source={{ uri: item.Poster }} style={{width:50, height: 50}} />
              <Text style={{}} >{item.Title}</Text>
            </View>
          </TouchableHighlight>
          })}
          {this.state.searching ? <Text>Searching...</Text> : null }

				</ScrollView>

			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		searchedItems: state.searchedItems
	}
}

export default connect(mapStateToProps)(Home)