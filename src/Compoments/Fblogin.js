import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FbLogin extends Component {

    state = {
        isLogginedIn: false,
        userId: '',
        name: '',
        email: ''
    }

    responseFacebook = response => {
        this.setState ({
            isLogginedIn: true,
            userId: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    componentClicked(){
        //console.log("hii");
    }

    render() {

        let fbContent;

        if (this.state.isLogginedIn) {
            fbContent = (
                <div className="fb-wrapper">
                    <center>
                        <img src={this.state.picture}/>
                    </center>
                    <h3>Hi you are loggned as {this.state.name}</h3>
                    <p>Your email id is {this.state.email}</p>
                </div>
            );

        } else {
            fbContent = (
                <FacebookLogin
                    appId="534935060261855"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            )
        }

        return (
            <div>
                {fbContent}
            </div>
        );
    }
}