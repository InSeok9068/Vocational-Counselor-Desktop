<template>
  <div class="flex flex-col gap-3">
    <div class="flex justify-end">
      <Button
        label="등록"
        @click="
          () => {
            dialogType = 'insert';
            openDialog = true;
          }
        "
      />
    </div>

    <span>상담사 리스트</span>

    <DataTable
      :value="counselors"
      showGridlines
      selectionMode="single"
      @rowSelect="
        () => {
          dialogType = 'update';
          openDialog = true;
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
      <input type="hidden" />

      <label for="name">이름</label>
      <InputText id="name" />

      <label for="email">이메일</label>
      <InputText id="email" />

      <label for="sort">순서</label>
      <InputText id="sort" />

      <label for="del">삭제</label>
      <InputText id="del" />

      <Button :label="`${dialogType === 'insert' ? '등록' : '수정'}`" class="mt-2" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type DialogType = 'insert' | 'update';

const dialogType = ref<DialogType>('insert');
const openDialog = ref(false);
const counselors = ref([
  {
    id: '123',
    name: '이인석',
    email: 'dlstjr9068@gmail.com',
    sort: 1,
    del: false,
  },
]);
</script>
