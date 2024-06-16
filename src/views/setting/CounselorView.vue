<template>
  <div class="flex flex-col gap-3">
    <div class="flex justify-end">
      <Button
        label="등록"
        @click="
          () => {
            dialogType = 'insert';
            openDialog = true;
            counselor = {} as CounselorsResponse;
          }
        "
      />
    </div>

    <span>상담사 리스트</span>

    <DataTable
      :value="counselors"
      showGridlines
      selectionMode="single"
      @row-select="
        (event) => {
          dialogType = 'update';
          openDialog = true;
          selectCounselor(event.data.id);
        }
      "
    >
      <Column field="id" header="id" :hidden="true" />
      <Column field="name" header="이름" />
      <Column field="email" header="이메일" />
      <Column field="sort" header="순서" />
    </DataTable>
  </div>

  <Dialog v-model:visible="openDialog" :header="`상담사 ${dialogType === 'insert' ? '등록' : '수정'}`">
    <div class="flex flex-col gap-2">
      <input v-model="counselor.id" type="hidden" />

      <label for="name">이름</label>
      <InputText id="name" v-model="counselor.name" />

      <label for="email">이메일</label>
      <InputText id="email" v-model="counselor.email" />

      <label for="sort">순서</label>
      <InputNumber id="sort" v-model="counselor.sort" />

      <label for="del">삭제</label>
      <InputSwitch id="del" v-model="counselor.del" />

      <Button :label="`${dialogType === 'insert' ? '등록' : '수정'}`" class="mt-2" @click="onClickSave" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { CounselorsResponse } from '../../api/pocketbase-types';
import { useCounselor } from '../../composables/setting/counselor';

type DialogType = 'insert' | 'update';

const { counselor, counselors, selectCounselorFullList, selectCounselor, createCounselor, updateCounselor } =
  useCounselor();
const dialogType = ref<DialogType>('insert');
const openDialog = ref(false);

onMounted(() => {
  selectCounselorFullList();
});

const onClickSave = async () => {
  if (dialogType.value === 'insert') {
    await createCounselor(counselor.value);
  } else {
    await updateCounselor(counselor.value);
  }

  openDialog.value = false;

  await selectCounselorFullList();
};
</script>
