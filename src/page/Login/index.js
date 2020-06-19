import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import {ActionCreators} from './store'
import { Redirect } from "react-router-dom";
class Login extends PureComponent {
  render() {
    const { loginData, login } = this.props;
    if(!loginData){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={(input) => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={(input) => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => {
                login(this.account, this.password);
              }}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    }else {
      return <Redirect to="/"></Redirect>
    }
  }
}
const mapState = (state) => ({
  loginData: state.getIn(["login", "login"]),
});
const mapDispatch = (dispatch) => ({
  login(accountEl,passwordEl) {
  
    const account = accountEl.value;
    const password = passwordEl.value;
    dispatch(ActionCreators.login(account,password))
  },
});
export default connect(mapState, mapDispatch)(Login);
