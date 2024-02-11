import React, { useState } from "react";

const styles = {
  screenTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
  wrapper: {
    margin: "10px 30px",
    padding: 8,
    width: 360,
    height: 70,
    display: "flex",
    alignItems: "center",
    border: "1.8px solid grey",
    borderRadius: 8,
  },
  image: {
    width: 55,
    height: 55,
  },
  inputText: {
    fontSize: 28,
    marginLeft: 10,
    padding: 8,
    border: "none",
    width: "100%",
  },
  button: {
    fontSize: 24,
    color: "white",
    width: 360,
    height: 70,
    border: "none",
    borderRadius: 70,
    backgroundColor: "#00664F",
    margin: "30px 0",
  },
  label: {
    fontSize: 24,
    color: "grey",
  },
};

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const loginResult = () => {
    // 실제 로그인 처리 로직
    if (id === "1234" && password === "abcd") {
      setLoginSuccess(true);
      alert("로그인 성공!");
    } else {
      alert(
        "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요"
      );
    }
  };

  if (loginSuccess) {
    return (
      <div>
        <h2>로그인 되었습니다.</h2>
      </div>
    );
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={styles.screenTitle}>로그인</h1>

      <div style={styles.wrapper}>
        <img src="/id.png" alt="아이디 이미지" style={styles.image} />
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={styles.inputText}
          placeholder="아이디"
        />
      </div>

      <div style={styles.wrapper}>
        <img src="/password.png" alt="비밀번호 이미지" style={styles.image} />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.inputText}
          placeholder="비밀번호"
        />
      </div>

      <button onClick={loginResult} style={styles.button}>
        로그인
      </button>

      <div>
        <label style={styles.label}>회원가입 →</label>
      </div>
    </div>
  );
}

export default Login;
