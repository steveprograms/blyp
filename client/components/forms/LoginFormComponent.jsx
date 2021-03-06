import React, { Component } from 'react'
import { Link } from 'react-router';
import userPNG from '../../assets/images/user.png'
import lockPNG from '../../assets/images/lock.png'
import index from '../../assets/styles/index.css';
import Radium from 'radium';

let RadiumLink = Radium(Link);

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fields: {username, password}, handleSubmit, login} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(login)}>
          <div className={index.login+" "+index.loginHeight}>
            <div className={index.login_title}>
            </div>
            <div className={index.login_fields}>
              <div className={index.login_fields__user}>
                <div className={index.icon}>
                  <img src={userPNG} />
                </div>
                <input placeholder='Username' type='text' {...username} />
                <div className={index.login_fields__password}>
                  <div className={index.icon}>
                    <img src={lockPNG} /></div>
                    <input placeholder='Password' type='password' {...password} />
                </div>
                <div className={index.login_fields__submit}>
                  <input type='submit' value='Log In' />
                </div>
              </div>
              <div className={index.disclaimer}>
                <p>BLYP 2016 ALL RIGHTS RESERVED</p>
              </div>
            </div>
          </div>
        </form>
        <div>
        <div className={index.signupcontainer}>
          <span><p>Don't have an account? </p></span><span className={index.plink}><Link to='/signup'>Sign Up!</Link></span>
        </div>
        </div>
      </div>
    );
  }
}
