import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '681827451413-8fk1tgq9h9kmjrs842tr5qhkr429vio9.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    };

    renderAuthButton() {
        switch (this.state.isSignedIn) {
            case null:
                return null;
            case false:
                return (
                    <button>Login</button>
                );
            case true:
                return (
                    <button>Logout</button>
                );

        }
    }

    render() {
        return this.renderAuthButton()
    }
}

export default GoogleAuth;