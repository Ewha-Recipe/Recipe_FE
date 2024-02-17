import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const loginResult = () => {
    // 실제 로그인 처리 로직
    if (id === '1234' && password === 'abcd') {
      setLoginSuccess(true);
      alert('로그인 성공!');
    } else {
      alert('아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.');
    }
  };

  if (loginSuccess) {
    return <Redirect to="./" />;
  }

  return (
    <>
      <div className="container">
        <img className="logo" src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" />
        <h1 className="title">로그인</h1>
        <div className="signup-form">
          <div className="input-box">
            <span className="icon">
              <img src={`${process.env.PUBLIC_URL}/assets/login-icon.png`} alt="로그인 아이콘" />
            </span>
            <input
              type="text"
              id="account"
              value={id}
              onChange={e => setId(e.target.value)}
              placeholder="아이디"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="icon">
              <img src={`${process.env.PUBLIC_URL}/assets/password.png`} alt="패스워드 아이콘" />
            </span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="비밀번호"
              required=""
            />
          </div>
        </div>
        <div className="login-buttons">
          <button type="button" className="move-button" onClick={loginResult}>
            로그인
          </button>
          <Link to="./signup">
            <button type="button" id="signup-button">
              회원가입 →
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default LoginForm;