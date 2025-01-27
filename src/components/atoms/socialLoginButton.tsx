import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SocialLoginButtonProps {
  name: 'kakao' | 'google';
  size?: 'medium' | 'large';
}

function SocialLoginButton({ name, size = 'medium' }: SocialLoginButtonProps) {
  const { t } = useTranslation();
  const currentLocation = useLocation();

  const onClickHandleSocialLogin = (socialType: string) => {
    localStorage.setItem('previouseUrl', currentLocation.pathname);
    window.location.href = `http://43.201.187.182:8080/oauth2/authorization/${socialType}`;
  };

  if (name === 'kakao') {
    return (
      <button
        type="button"
        onClick={() => { onClickHandleSocialLogin('kakao'); }}
        className={`mb-2 flex h-[40px] items-center justify-center rounded-xl bg-white shadow-md ${size === 'medium' ? 'px-16' : 'px-[6.5rem]'}`}
      >
        <img src="/img/social-login/kakao-ballon.png" alt={t('loginModal.kakaoLogo')} className="w-6" />
        <span className="text-md ml-4">{t('loginModal.loginKakao')}</span>
      </button>
    );
  }
  if (name === 'google') {
    return (
      <button
        type="button"
        onClick={() => { onClickHandleSocialLogin('google'); }}
        className={`mb-2 flex h-[40px] items-center justify-center rounded-xl bg-white shadow-md ${size === 'medium' ? 'px-6' : 'px-16'}`}
      >
        <img src="/img/social-login/google-logo.png" alt={t('loginModal.googleLogo')} className="w-6" />
        <span className="text-md ml-4 font-roboto">{t('loginModal.loginGoogle')}</span>
      </button>
    );
  }
  return (<div>해당하는 소셜 로그인 버튼이 없습니다.</div>);
}

export default SocialLoginButton;
