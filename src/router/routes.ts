const routes = [
  {
    path: '/',
    desc: '메인',
    component: () => import('../views/MainView.vue'),
  },
  {
    path: '/signin',
    desc: '로그인',
    component: () => import('../views/sign/SigninView.vue'),
  },
  {
    path: '/signup',
    desc: '회원가입',
    component: () => import('../views/sign/SignupView.vue'),
  },
];

export default routes;
