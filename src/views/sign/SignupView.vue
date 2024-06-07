<template>
  <Card class="mx-auto">
    <template #title>회원가입</template>
    <template #content>
      <div class="flex flex-col gap-2">
        <label for="id">아이디</label>
        <InputText id="id" v-model="signupArgs.id" />

        <label for="password">비밀번호</label>
        <Password id="password" v-model="signupArgs.password" />

        <label for="password">비밀번호 확인</label>
        <Password id="passwordConfirm" v-model="signupArgs.passwordConfirm" />

        <hr />

        <label for="name">이름</label>
        <InputText id="name" v-model="signupArgs.name" />

        <label for="email">이메일</label>
        <InputText id="email" v-model="signupArgs.email" />

        <Button label="회원가입" class="mt-2" @click="signup" @keydown.stop.prevent.enter="signup" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { useSign } from '../../composables/sign';

const { signupArgs, signup } = useSign();
</script>
