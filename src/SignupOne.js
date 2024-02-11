import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from './logo.png';
import loginIcon from './login-icon.png';
import passwordIcon from './password.png';

const SignupStepOne = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push('/signup-two');
  };

  const handleExit = () => {
    history.push('/');
  }

  return (
    <>
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <div className="progress-indicator">
          <div className="indicator active">아이디/비밀번호 설정</div>
          <div className="line" />
          <div className="indicator">프로필 설정</div>
          <div className="line" />
          <div className="indicator">회원가입 완료</div>
        </div>
        <div className="signup-form">
          <div className="input-box">
            <span className="icon">
              <img src={loginIcon} alt="로그인 아이콘" />
            </span>
            <input type="text" id="account" placeholder="아이디" required="" />
          </div>
          <div className="input-box">
            <span className="icon">
              <img src={passwordIcon} alt="패스워드 아이콘" />
            </span>
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              required=""
            />
          </div>
          <div className="input-box">
            <span className="icon">
              <img src={passwordIcon} alt="패스워드 아이콘" />
            </span>
            <input
              type="password"
              id="password-confirm"
              placeholder="비밀번호 확인"
              required=""
            />
          </div>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="move-button"
            id="cancel-button"
            onClick={handleExit}
          >
            취소
          </button>
          <button
            type="button"
            className="move-button"
            id="next-button"
            onClick={handleNext}
          >
            다음
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupStepOne;
