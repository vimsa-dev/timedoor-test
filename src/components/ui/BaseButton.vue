<template>
  <a
    :href="to"
    class="btn"
    :class="{
      btn__link: variant === 'link',
      btn__cta: variant === 'btn',
    }"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  variant?: 'link' | 'btn'
}>()
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.btn {
  display: inline-block;

  font-size: 1.6rem;
  font-weight: 600;

  &__link {
    transition: color 300ms;

    &:hover {
      color: v.$c-accent;
    }
  }

  &__cta {
    padding: 2rem 6.5rem;
    background-color: v.$c-accent;
    color: v.$c-text-light;

    border-radius: 10rem;
    transition: background-color 300ms;

    box-sizing: border-box;

    &:hover {
      background-color: #ba6e2b;
    }
  }
}
</style>
