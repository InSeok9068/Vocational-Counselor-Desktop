<template>
  <Card class="mx-auto p-3">
    <template #title>로그인</template>
    <template #content>
      <div class="flex flex-col gap-2">
        <label for="id">아이디</label>
        <InputText id="id" v-model="signinArgs.id" />

        <label for="password">비밀번호</label>
        <Password id="password" v-model="signinArgs.password" @keydown.stop.prevent.enter="signin" />

        <Button label="로그인" class="mt-2" @click="signin" />

        <hr />
        <Button label="회원가입 하러가기" class="mt-2" @click="$router.push('signup')" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { useSign } from '../../composables/sign';

const { signinArgs, signin } = useSign();
</script>
