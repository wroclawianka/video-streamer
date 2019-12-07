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

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        switch (this.state.isSignedIn) {
            case true:
                return (
                    <button
                        className='ui red google button'
                        onClick={this.onSignOutClick}
                    >
                        <i className='google icon'/>
                        Sign Out
                    </button>
                );
            case false:
                return (
                    <button
                        className='ui red google button'
                        onClick={this.onSignInClick}
                    >
                        <i className='google icon'/>
                        Sign In
                    </button>
                );
            default:
                return null;
        }
    }

    render() {
        return this.renderAuthButton()
    }
}

export default GoogleAuth;