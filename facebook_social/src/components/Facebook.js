import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
export class facebook extends Component {
    state={
        isLoggedIn:false,
        userID:'',
        name:'',
        email:'',
        picture:'',
      }
      responseFacebook= response =>{
        console.log(response)
      }
      componentClicked=()=>console.log("component clicked")
  render() {
    let fbContent;
    if(this.state.isLoggedIn){
        fbContent=null;
    }else{
        fbContent=( <FacebookLogin
            appId="1421019962142741"    
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />)
    }
    return (
       <div>{fbContent}</div>
    )
  }
}

export default facebook