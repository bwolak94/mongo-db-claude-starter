import { useTranslation } from 'react-i18next';
import { LoginForm } from '../components/LoginForm';
import { useLogin } from '../hooks/useLogin';

export function LoginPage() {
  const { t } = useTranslation();
  const loginMutation = useLogin();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600">AI CRM</h1>
          <p className="mt-2 text-gray-600">{t('auth.login')}</p>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-md">
          <LoginForm
            onSubmit={(data) => loginMutation.mutate(data)}
            loading={loginMutation.isPending}
            error={loginMutation.error?.message}
          />
        </div>
      </div>
    </div>
  );
}
