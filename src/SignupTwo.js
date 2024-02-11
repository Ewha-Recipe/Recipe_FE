import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from './logo.png';
import nicknameIcon from './nickname-icon.png';
import emailIcon from './email-icon.png';
import preferenceIcon from './preference-icon.png';
import uploadIcon from './upload-icon.png';

const SignupStepTwo = () => {
  const history = useHistory();

  const [profileImage, setProfileImage] = useState(null);

  const handleBefore = () => {
    history.push('/signup');
  }

  const handleNext = () => {
    history.push('/signup-complete');
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  }

  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo" />
      <div className="progress-indicator">
        <div className="indicator">아이디/비밀번호 설정</div>
        <div className="line" />
        <div className="indicator active">프로필 설정</div>
        <div className="line" />
        <div className="indicator">회원가입 완료</div>
      </div>
      <div className="signup-content">
      <label className="profile-upload">
          <input type="file" className="hidden-file-input" onChange={handleImageChange} />
          <div className="upload-area">
            <img src={uploadIcon} alt="Upload" />
            <p>프로필 사진</p>
          </div>
        </label>
      <div className="signup-form">
        <div className="input-box">
          <span className="icon">
            <img src={nicknameIcon} alt="닉네임 아이콘" />
          </span>
          <input type="text" placeholder="닉네임" />
        </div>
        <div className="input-box">
          <span className="icon">
            <img src={emailIcon} alt="이메일 아이콘" />
          </span>
          <input type="email" placeholder="이메일" />
        </div>
        <div className="input-box">
          <span className="icon">
            <img src={preferenceIcon} alt="선택 아이콘" />
          </span>
          <select>
            <option>한식</option>
            <option>일식</option>
            <option>중식</option>
            <option>양식</option>
            <option>분식</option>
            <option>디저트</option>
          </select>
        </div>
      </div>
      <div className="buttons">
        <button 
        type="button" 
        className="move-button" 
        id="before-button" 
        onClick={handleBefore}>
          이전
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
    </div>
  );
};

export default SignupStepTwo;
