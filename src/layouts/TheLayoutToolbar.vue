<template>
  <Toolbar>
    <template #start>
      <a href="#" class="text-xl font-bold" @click.stop.prevent="$router.push('/')">직업 상담사 실적관리 도구</a>
    </template>

    <template #center>
      <IconField iconPosition="left">
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Search" />
      </IconField>
    </template>

    <template #end>
      <SplitButton label="Save" icon="pi pi-check" menuButtonIcon="pi pi-cog" />
    </template>
  </Toolbar>
</template>

<script setup lang="ts"></script>
