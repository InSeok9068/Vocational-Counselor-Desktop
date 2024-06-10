import { ref } from 'vue';
import pb from '../../api/pocketbase';
import { CounselorsResponse } from '../../api/pocketbase-types';

export const useCounselor = () => {
  const counselors = ref<CounselorsResponse[]>([] as CounselorsResponse[]);
  const counselor = ref<CounselorsResponse>({} as CounselorsResponse);

  const selectCounselorFullList = async () => {
    counselors.value = await pb.collection('counselors').getFullList();
  };

  const selectCounselor = async (id: string) => {
    counselor.value = await pb.collection('counselors').getOne(id);
  };

  const createCounselor = async (counselor: CounselorsResponse) => {
    counselor.id = ''; // 삽입 시 제거
    await pb.collection('counselors').create(counselor);
  };

  const updateCounselor = async (counselor: CounselorsResponse) => {
    await pb.collection('counselors').update(counselor.id, counselor);
  };

  return {
    counselors,
    counselor,

    selectCounselorFullList,
    selectCounselor,
    createCounselor,
    updateCounselor,
  };
};
