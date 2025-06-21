<template>
  <label class="radio-btn" :class="{ 'radio-btn--checked': modelValue === value }">
    <input
      type="radio"
      class="radio-btn__input"
      :value="value"
      :name="name"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  value: string | number
  modelValue: string | number
}>()
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.radio-btn {
  display: grid;
  align-items: center;
  grid-template-columns: 2rem auto;
  column-gap: 0.8rem;

  input[type='radio'] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15rem solid rgba($color: #000000, $alpha: 0.5);
    border-radius: 50%;

    display: grid;
    place-content: center;

    &::before {
      content: '';
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
      transition: 300ms transform ease;
      box-shadow: inset 0.1rem 0.1rem var(--form-control-color);
    }
  }

  input[type='radio']:checked {
    background-color: v.$c-accent;
    border-color: v.$c-accent;
  }
}
</style>
