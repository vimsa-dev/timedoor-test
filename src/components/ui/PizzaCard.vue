<template>
  <label class="pizza-card" :class="{ 'pizza-card--checked': modelValue === value }">
    <input
      type="radio"
      class="pizza-card__input"
      :value="value"
      :name="name"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    <div class="pizza-card__content">
      <div class="pizza-card__badge">
        <slot name="badge" />
      </div>
      <div class="pizza-card__image">
        <slot name="image" />
      </div>
      <div>
        <div class="pizza-card__content__title">
          <slot name="title" />
        </div>
        <div class="pizza-card__content__price">
          <slot name="price" />
        </div>
      </div>
    </div>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  value: string | number
  modelValue: string | number | null
}>()

defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.pizza-card {
  position: relative;
  display: flex;
  justify-content: center;

  input {
    appearance: none;
  }

  &__content {
    position: relative;
    width: 100%;
    padding: 3.5rem;

    display: flex;
    align-items: center;
    column-gap: 3rem;

    border-radius: 2rem;
    border: 0.1rem solid rgba($color: #000000, $alpha: 0.1);

    box-sizing: border-box;

    img {
      width: 50%;
      object-fit: contain;
    }

    .pizza-card__badge {
      position: absolute;
      top: 0;
      right: 0;
    }

    &__title {
      font-size: 1.8rem;
      font-weight: 600;
    }

    &__price {
      width: 100%;
      display: flex;
      column-gap: 0.5rem;

      margin-top: 0.5rem;

      font-size: 1.8rem;

      span,
      s {
        display: inline-block;
      }
    }
  }

  &__image {
    width: 13.5rem;
    aspect-ratio: 1;
  }

  &:hover &__content {
    background-color: rgba($color: v.$c-accent, $alpha: 0.25);
  }

  input:checked ~ .pizza-card__content {
    background-color: v.$c-accent;
    color: v.$c-text-light;
  }
}
</style>
