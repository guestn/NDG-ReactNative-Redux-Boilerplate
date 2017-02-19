# NDG-ReactNative-Redux-Boilerplate
Simple boilerplate for RN with Redux / plus API functionality

Setup currently to fetch from [http://www.omdbapi.com/](http://www.omdbapi.com/) as example of movie.

```
IndexIOS (no react-native dependencies):
	<Provider store={store}>
		<AppContainer/>
	</Provider>
```
```
AppContainer returns homepage (also no react-native dependencies):
	<Home {...this.props}/>
```

