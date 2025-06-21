<template>
  <aside class="pizza-builder__aside">
    <div class="pizza-builder__aside__container">
      <span>Payment Summary</span>
      <ul class="summary">
        <li v-if="selectedPizza">
          <span>{{ selectedPizza.name }}</span>
          <span>{{ displayPrice(pizzaPrice) }}$</span>
        </li>
        <li v-if="selectedSize">
          <span>Size - {{ selectedSize.name }}</span>
          <span>{{ displayPrice(selectedSize.extra_price) }}$</span>
        </li>
        <li v-for="t in selectedToppings" :key="t.id">
          <span>{{ t.name }}</span>
          <span>{{ displayPrice(t.price) }}$</span>
        </li>
      </ul>

      <div class="pizza-builder__aside__total">
        <div>
          <span>Total Price</span>
          <span>${{ totalPrice }}</span>
        </div>
        <BaseButton to="#" variant="btn">Order Now</BaseButton>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const props = defineProps<{
  selectedPizza: Pizza | undefined
  selectedSize: Size | undefined
  selectedToppings: Topping[]
  totalPrice: string | number
}>()

const pizzaPrice = computed(() =>
  props.selectedPizza?.discount.is_active
    ? props.selectedPizza.discount.final_price
    : (props.selectedPizza?.price ?? 0),
)

function displayPrice(n: number) {
  return n % 1 === 0 ? n : n.toFixed(1)
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.pizza-builder__aside {
  &__container {
    padding: 3rem;
    background-color: #fff;
    color: v.$c-text-dark;

    border-radius: 2rem;
    box-shadow: 0 1rem 4rem rgba($color: #000000, $alpha: 0.08);

    margin-bottom: 3rem;

    & > span {
      display: block;

      font-size: 2.4rem;
      font-weight: 600;
      color: v.$c-accent;

      padding-bottom: 3rem;
    }
  }

  & .summary {
    padding-bottom: 3rem;
    &,
    & ul {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1.8rem;
    }

    li {
      display: flex;
      justify-content: space-between;
      font-size: 1.8rem;

      & span {
        font-weight: 500;
      }

      & span:first-child {
        opacity: 0.6;
      }
    }
  }

  &__total {
    padding-top: 3rem;

    border-top: 0.1rem solid rgba(v.$c-text-dark, 0.2);

    & > div:first-child {
      padding-bottom: 3rem;
      display: flex;
      justify-content: space-between;

      & span:first-child {
        font-weight: 400;
      }

      & span:last-child {
        font-weight: 600;
        color: v.$c-accent;
      }

      & span {
        font-size: 2.4rem;
      }
    }

    :deep(.btn__cta) {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
