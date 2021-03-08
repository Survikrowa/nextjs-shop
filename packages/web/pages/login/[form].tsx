import Link from 'next/link';
import { useRouter } from 'next/router';
import { LoginForm } from 'components/LoginPage/Forms/Login/LoginForm';
import { RegisterForm } from 'components/LoginPage/Forms/Register/RegisterForm';
import { FORMS } from '../../constants/constants';

const Login = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <main className="bg-blue-600 h-screen">
      <Link href="/">
        <a>Powrot do strony glownej</a>
      </Link>
      {type === FORMS.LOGIN ? <LoginForm /> : <RegisterForm />}
    </main>
  );
};

export default Login;
