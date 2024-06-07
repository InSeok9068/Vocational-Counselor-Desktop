import { ref } from 'vue';
import { useRouter } from 'vue-router';
import pb from '../api/pocketbase';
import { UiSigninArgs, UiSignupArgs } from './../ui/sign.ui';
import { useGlobalMessage } from './globalMessage';

export const useSign = () => {
  const router = useRouter();
  const { dialog, updateDialog } = useGlobalMessage();

  const signupArgs = ref<UiSignupArgs>({} as UiSignupArgs);
  const signinArgs = ref<UiSigninArgs>({} as UiSigninArgs);

  const signup = async () => {
    await pb.collection('users').create({
      username: signupArgs.value.id,
      password: signupArgs.value.password,
      passwordConfirm: signupArgs.value.passwordConfirm,
      email: signupArgs.value.email,
      emailVisibility: true,
      name: signupArgs.value.name,
    });

    updateDialog({
      ...dialog.value,
      show: true,
      message: '회원가입이 완료되었습니다.',
    });

    router.push('/signin');
  };

  const signin = async () => {
    await pb.collection('users').authWithPassword(signinArgs.value.id, signinArgs.value.password);

    updateDialog({
      ...dialog.value,
      show: true,
      message: '로그인이 완료되었습니다.',
    });

    router.push('/');
  };

  return {
    signupArgs,
    signinArgs,
    signup,
    signin,
  };
};
