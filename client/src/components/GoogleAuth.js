import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '218132036971-ebu44gm2d7dfkn4pflgoqjbofo52jvri.apps.googleusercontent.com',
        scope: 'email'
      })  
    });
  }
  render() {
    return (
      <div>Google Auth</div>
    )
  }
}

export default GoogleAuth;