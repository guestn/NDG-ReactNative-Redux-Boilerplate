import {
	StyleSheet
} from 'react-native';

const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
	  padding: 10,
	  backgroundColor: 'coral'
  },
  scrollView: {
	  flex: 0.8,
	  borderColor: 'red',
	  borderWidth: 1
  },
  listItem: {
	  borderBottomColor: 'red',
	  borderWidth: 1
  },
  searchContainer: {
	  flexDirection: 'column',
	  backgroundColor: '#ddd'
  },
  textInput: {
		height: 40,	  
	  backgroundColor: '#eee',
  }
});

module.exports = S;
