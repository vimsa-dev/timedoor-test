<template>
  <label class="check-pill" :class="{ 'check-pill--checked': isChecked }" :disabled="disabled">
    <input
      type="checkbox"
      class="check-pill__input"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      @change="onChange"
    />
    <div class="check-pill__content">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: string | number
  modelValue: (string | number)[]
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: (string | number)[]): void
}>()

const isChecked = computed(() => props.modelValue.includes(props.value))

function onChange(e: Event) {
  const checked = (e.target as HTMLInputElement).checked
  const next = checked
    ? [...props.modelValue, props.value]
    : props.modelValue.filter((v) => v !== props.value)

  emit('update:modelValue', next)
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.check-pill {
  border: 1px solid transparent;
  border-radius: 9999px;
  padding: 2rem 0;
  border: 0.2rem solid v.$c-text-dark;
  text-align: center;

  cursor: pointer;

  & input {
    display: none;
    appearance: none;
  }

  &--checked[disabled='false'] {
    border-color: v.$c-accent;
    background-color: rgba($color: v.$c-accent, $alpha: 0.3);
    color: v.$c-accent;
  }

  &[disabled='true'] {
    background-color: rgba($color: #000, $alpha: 0.3) !important;
    border-color: rgba($color: #000, $alpha: 0.3) !important;

    opacity: 0.35 !important;

    cursor: not-allowed !important;
  }
}
</style>
