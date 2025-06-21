<template>
  <a href="#" class="btn-social">
    <img :src="`/img/icons/${props.id.toLowerCase()}.svg`" />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

a {
  padding: 1rem;
  border-radius: 100%;
  border: 0.15rem solid v.$c-accent;

  &:hover {
    background-color: rgba($color: v.$c-accent, $alpha: 0.2);
  }

  display: flex;

  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  & * {
    pointer-events: none;
  }
}
</style>
