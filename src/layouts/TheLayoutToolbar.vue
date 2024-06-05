<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-plus" class="mr-2" severity="secondary" />
      <Button icon="pi pi-print" class="mr-2" severity="secondary" />
      <Button icon="pi pi-upload" severity="secondary" />
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
      <SplitButton label="Save" :model="items" />
    </template>
  </Toolbar>
</template>
