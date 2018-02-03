class Api {

  constructor() {}

  callApi(method, options) {
    let completeUrl = '/api/json' + options.uri,
      headers = {
        'Content-Type': options && options.contentType
          ? options.contentType
          : 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors';
    if (options.contentType === false) {
      delete headers['Content-Type'];
    }

    let config = {
      method: method,
      headers: headers,
      mode: mode
    };

    if (options.data) {
      if (method !== 'get') {
        if (options.raw || (options.contentType && options.contentType !== 'application/json')) {
          config.body = options.data
        } else {
          config.body = JSON.stringify(options.data)
        }
      } else {
        let urlParams = new URLSearchParams(Object.entries(options.data));
        completeUrl += '?' + urlParams;
      }
    }

    return new Promise((resolve, reject) => {
      fetch(completeUrl, config).then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          if (response.status === 401) {
            window.localStorage.clear();
            window.location = '/';
          }
          throw new Error(response.statusText);
        }
      }).catch((error) => {
        reject(error)
      });
    })
  }
}

export default new Api()
