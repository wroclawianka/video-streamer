import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '681827451413-8fk1tgq9h9kmjrs842tr5qhkr429vio9.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        switch (this.props.isSignedIn) {
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
                return <div className="button-placeholder"></div>
        }
    }

    render() {
        return this.renderAuthButton()
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(
    mapStateToProps,
    {signIn, signOut}
)(GoogleAuth);