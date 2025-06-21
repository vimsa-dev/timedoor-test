<template>
  <div class="pizza-builder__section">
    <div class="pizza-builder__title"><h2>Custom Pizza</h2></div>

    <div class="pizza-builder__section-wrapper">
      <h3>Size</h3>
      <div class="pizza-builder__options--size">
        <RadioButton
          v-for="size in sizes"
          :key="size.id"
          :value="size.id"
          :name="'size'"
          v-model="selectedSizeId"
        >
          <span>
            {{ size.name }}
            <span v-if="size.extra_price > 0">(+{{ size.extra_price }}$)</span>
          </span>
        </RadioButton>
      </div>
    </div>

    <div class="pizza-builder__section-wrapper">
      <h3>Toppings</h3>
      <div class="pizza-builder__options--topping">
        <CheckPill
          v-for="t in toppings"
          :key="t.id"
          :value="t.id"
          v-model="selectedToppingIds"
          :disabled="!allowedIds.includes(t.id)"
        >
          <div>{{ t.name }}</div>
        </CheckPill>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import RadioButton from '@/components/ui/RadioButton.vue'
import CheckPill from '@/components/ui/CheckPill.vue'

import type { Pizza, Size, Topping } from '@/types'

const props = defineProps<{
  sizes: Size[]
  toppings: Topping[]
  selectedPizza: Pizza | undefined
  selectedSizeId: number | null
  selectedToppingIds: number[]
}>()

const emit = defineEmits(['update:selectedSizeId', 'update:selectedToppingIds'])

const selectedSizeId = computed({
  get: () => props.selectedSizeId,
  set: (val) => emit('update:selectedSizeId', val),
})

const selectedToppingIds = computed({
  get: () => props.selectedToppingIds,
  set: (val) => emit('update:selectedToppingIds', val),
})

const allowedIds = computed(() => props.selectedPizza?.toppings ?? [])
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.pizza-builder__options {
  &--size {
    display: flex;
    column-gap: 2.5rem;
  }

  &--topping {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 3rem;
  }
}

.pizza-builder__section-wrapper {
  margin-bottom: 5rem;
}
</style>
