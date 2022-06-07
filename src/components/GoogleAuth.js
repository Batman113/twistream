import React  from "react";
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions/index';
class GoogleAuth extends React.Component {
    // state = {isSignedIn : null};

    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId:'114088941970-g1mq7kfn0n3ecbi74gbotn8d97tbajmr.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({isSignedIn:this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignedIn) => {
        // this.setState({ isSignedIn : this.auth.isSignedIn.get() });
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }    
    onSignInClick = () => {
        this.auth.signIn();
        // this.onAuthChange(true);
    }
    onSignOutClick = () => {
        this.auth.signOut();
        // this.onAuthChange(false);
    }
    renderAuth(){
        // console.log('hello');
        if(this.props.signState === null){
            return null;
        }else if(this.props.signState === true){
            return(
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"/>Sign Out
                </button>
            )
        }
        else{
            return (
                <button onClick={this.onSignInClick} className="ui yellow google button">
                    <i className="google icon"/> Sign In
                </button>
            )
        }
    }
    render(){
        return (
            <div>{this.renderAuth()}</div>
            // {console.log(this.props.signState)}
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        signState : state.signState.isSignedIn,
        userId:state.signState.userId
    }
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);