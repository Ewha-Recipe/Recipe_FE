import { Link } from 'react-router-dom';

export const SignUpForm = () => {
  return (
    <>
      <div className="container">
        <img className="logo" src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" />
        <h1 className="title">회원가입</h1>
        <div className="signup-form">
          <div className="input-box">
            <span className="icon">
              <img src={`${process.env.PUBLIC_URL}/assets/login-icon.png`} alt="로그인 아이콘" />
            </span>
            <input type="text" id="account" placeholder="아이디" required="" />
          </div>
          <div className="input-box">
            <span className="icon">
              <img src={`${process.env.PUBLIC_URL}/assets/password.png`} alt="패스워드 아이콘" />
            </span>
            <input type="password" id="password" placeholder="비밀번호" required="" />
          </div>
          <div className="input-box">
            <span className="icon">
              <img src={`${process.env.PUBLIC_URL}/assets/password.png`} alt="패스워드 아이콘" />
            </span>
            <input type="password" id="password-confirm" placeholder="비밀번호 확인" required="" />
          </div>
          <div className="input-box">
            <span className="icon">
              <img src={`${process.env.PUBLIC_URL}/assets/nickname-icon.png`} alt="닉네임 아이콘" />
            </span>
            <input type="text" placeholder="닉네임" />
          </div>
        </div>
        <div className="buttons">
          <Link to="./">
            <button type="button" className="move-button" id="cancel-button">
              취소
            </button>
          </Link>
          <Link to="./signup">
            <button type="button" className="move-button" id="next-button">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
