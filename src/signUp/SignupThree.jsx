import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

export const SignUpThree = () => {
  const navigate = useNavigate();

  const handleMyPage = () => {
    navigate('/mypage');
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <img className="logo" src={logo} alt="logo" />
      <div className="progress-indicator">
        <div className="indicator">아이디/비밀번호 설정</div>
        <div className="line" />
        <div className="indicator">프로필 설정</div>
        <div className="line" />
        <div className="indicator active">회원가입 완료</div>
      </div>
      <div className="completion-message">
        <p>회원가입이 성공적으로 완료되었습니다!</p>
      </div>
      <div className="buttons">
        <button type="button" className="move-button" id="mypage-button" onClick={handleMyPage}>
          마이페이지로 이동
        </button>
        <button type="button" className="move-button" id="cancel-button" onClick={handleExit}>
          홈으로 이동
        </button>
      </div>
    </div>
  );
};
