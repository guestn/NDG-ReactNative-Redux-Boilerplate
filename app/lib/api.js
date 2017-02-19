class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
	  console.log(route)
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb) {
    const host = 'http://www.omdbapi.com/'
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()
    console.log('url',url)
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {throw err});
    }).then(json => json );
  }
}
export default Api;
/*
fetch('/submit', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
				      'Accept': 'application/json',
				      'Connection': 'Keep-Alive',
							'Keep-Alive':'timeout=120, max=100'
			}),
			body: JSON.stringify({ name: this.state.username, duration: this.state.duration})
		})
*/