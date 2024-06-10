import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '메인',
    meta: { type: 'index' },
    component: () => import('../views/MainView.vue'),
  },

  // Sign
  {
    path: '/signin',
    name: '로그인',
    meta: { type: 'sign' },
    component: () => import('../views/sign/SigninView.vue'),
  },
  {
    path: '/signup',
    name: '회원가입',
    meta: { type: 'sign' },
    component: () => import('../views/sign/SignupView.vue'),
  },

  // Dev
  {
    path: '/dev-pages',
    name: '개발자 도구(페이지)',
    meta: { type: 'dev' },
    component: () => import('../views/dev/DevPagesView.vue'),
  },
  {
    path: '/dev-actions',
    name: '개발자 도구(액션)',
    meta: { type: 'dev' },
    component: () => import('../views/dev/DevActionsView.vue'),
  },

  // Page
  {
    path: '/upload-excel',
    name: '실적 업로드 (엑셀)',
    meta: { type: 'page' },
    component: () => import('../views/page/UploadExcelView.vue'),
  },

  // Setting
  {
    path: '/counselors',
    name: '상담사 관리',
    meta: { type: 'setting' },
    component: () => import('../views/setting/CounselorView.vue'),
  },

  // Dashboard
  {
    path: '/dashboard-1',
    name: '대시보드 (1)',
    meta: { type: 'dashboard' },
    component: () => import('../views/dashboard/Dashboard-1View.vue'),
  },
  {
    path: '/dashboard-2',
    name: '대시보드 (2)',
    meta: { type: 'dashboard' },
    component: () => import('../views/dashboard/Dashboard-2View.vue'),
  },
  {
    path: '/dashboard-3',
    name: '대시보드 (3)',
    meta: { type: 'dashboard' },
    component: () => import('../views/dashboard/Dashboard-3View.vue'),
  },
];

export default routes;
