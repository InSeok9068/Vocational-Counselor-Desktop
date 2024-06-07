const routes = [
  {
    path: '/',
    name: '메인',
    component: () => import('../views/MainView.vue'),
  },

  // Sign
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

  // Dev
  {
    path: '/dev-pages',
    name: '개발자 도구(페이지)',
    component: () => import('../views/dev/DevPagesView.vue'),
  },
  {
    path: '/dev-actions',
    name: '개발자 도구(액션)',
    component: () => import('../views/dev/DevActionsView.vue'),
  },

  // Setting
  {
    path: '/counselors',
    name: '상담사 관리',
    meta: 'setting',
    component: () => import('../views/setting/CounselorView.vue'),
  },

  // Dashboard
  {
    path: '/dashboard-1',
    name: '대시보드 (1)',
    meta: 'dashboard',
    component: () => import('../views/dashboard/Dashboard-1View.vue'),
  },
  {
    path: '/dashboard-2',
    name: '대시보드 (2)',
    meta: 'dashboard',
    component: () => import('../views/dashboard/Dashboard-2View.vue'),
  },
  {
    path: '/dashboard-3',
    name: '대시보드 (3)',
    meta: 'dashboard',
    component: () => import('../views/dashboard/Dashboard-3View.vue'),
  },
];

export default routes;
