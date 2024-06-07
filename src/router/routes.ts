const routes = [
  {
    path: '/',
    name: '메인',
    component: () => import('../views/MainView.vue'),
  },
  {
    path: '/signin',
    name: '로그인',
    component: () => import('../views/sign/SigninView.vue'),
  },
  {
    path: '/signup',
    name: '회원가입',
    component: () => import('../views/sign/SignupView.vue'),
  },
  {
    path: '/dev-pages',
    name: '개발자 도구(페이지)',
    component: () => import('../views/dev/DevPagesView.vue'),
  },
];

export default routes;
