function Signup() {
  return (
    <div>
      <main className="auth-container">
        <a
          href="index.html"
          className="logo-home-link"
          aria-label="홈으로 이동"
        >
          <img
            src="images/logo/logo.svg"
            alt="판다마켓 로고"
          />
        </a>

        {/* <!-- 로그인 form과 동일한 스크립트 코드를 사용하고 있기 때문에, 구분을 위해 ID 추가 --> */}
        <form
          id="signupForm"
          method="post"
        >
          <div className="input-item">
            <label htmlFor="email">이메일</label>
            {/* <!-- form 관련 태그에 `required` 속성을 사용하면 해당 필드를 필수 입력 항목으로 지정해 폼 제출 전 클라이언트 측에서 간단한 유효성 검사를 할 수 있어요. --> */}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해 주세요"
              required
            />
            {/* <!-- 
            오류 메세지 처리
            - 사용자 입력값이 유효성 검사 기준을 충족하지 않을 때 표시될 메시지
            - <span> 태그와 고유 ID를 사용하여 각 오류 메시지를 특정하고, 자바스크립트를 통해 메세지의 표시 여부를 제어
            - 'error-message' class로 오류 메시지의 스타일을 지정
          --> */}
            <span
              id="emailEmptyError"
              className="error-message"
            >
              이메일을 입력해 주세요
            </span>
            <span
              id="emailInvalidError"
              className="error-message"
            >
              잘못된 이메일 형식입니다
            </span>
          </div>

          <div className="input-item">
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              required
            />
            <span
              id="nicknameEmptyError"
              className="error-message"
            >
              닉네임을 입력해 주세요
            </span>
          </div>

          <div className="input-item">
            <label htmlFor="password">비밀번호</label>
            <div className="input-wrapper">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                required
              />
              <button
                type="button"
                className="password-toggle-button"
                aria-label="비밀번호 보기"
              >
                <img
                  className="password-toggle-icon"
                  src="images/icons/eye-invisible.svg"
                  alt="비밀번호 숨김 상태 아이콘"
                />
              </button>
            </div>
            <span
              id="passwordEmptyError"
              className="error-message"
            >
              비밀번호를 입력해 주세요
            </span>
            <span
              id="passwordInvalidError"
              className="error-message"
            >
              비밀번호를 8자 이상 입력해 주세요
            </span>
          </div>

          <div className="input-item">
            <label htmlFor="passwordConfirmation">비밀번호 확인</label>
            <div className="input-wrapper">
              <input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
                required
              />
              <button
                type="button"
                className="password-toggle-button"
                aria-label="비밀번호 보기"
              >
                <img
                  className="password-toggle-icon"
                  src="images/icons/eye-invisible.svg"
                  alt="비밀번호 숨김 상태 아이콘"
                />
              </button>
            </div>
            <span
              id="passwordConfirmationInitError"
              className="error-message"
            >
              먼저 조건에 맞는 비밀번호를 입력해 주세요
            </span>
            <span
              id="passwordConfirmationError"
              className="error-message"
            >
              비밀번호가 일치하지 않습니다
            </span>
          </div>

          {/* <!-- <button> 태그에 직접 disabled 속성을 넣어 기본적으로 비활성화 상태를 만들어줄 수도 되지만, 우리는 자바스크립트 코드 내에서 submit button 요소를 선택한 뒤 속성을 제어할 거예요. --> */}
          <button
            type="submit"
            className="button pill-button full-width"
          >
            회원가입
          </button>
        </form>

        <div className="social-login-container">
          <h3>간편 로그인하기</h3>
          <div className="social-login-links-container">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="구글 로그인"
            >
              <img
                src="images/social/google-logo.png"
                alt="구글 로그인"
                width="42"
              />
            </a>
            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 로그인"
            >
              <img
                src="images/social/kakao-logo.png"
                alt="카카오톡 로그인"
                width="42"
              />
            </a>
          </div>
        </div>

        <div className="auth-switch">
          이미 회원이신가요? <a href="login.html">로그인</a>
        </div>
      </main>

      <script src="scripts/auth.js"></script>
    </div>
  );
}

export default Signup;
