<template>
  <section class="pizza-builder">
    <div class="pizza-builder__container">
      <PizzaSelector :pizzas="pizzas" v-model:selectedPizzaId="selectedPizzaId" />
      <PizzaCustomizer
        :sizes="sizes"
        :toppings="toppings"
        :selectedPizza="selectedPizza"
        v-model:selectedSizeId="selectedSizeId"
        v-model:selectedToppingIds="selectedToppingIds"
      />
    </div>
    <PizzaSummary
      :selectedPizza="selectedPizza"
      :selectedSize="selectedSize"
      :selectedToppings="selectedToppings"
      :totalPrice="totalPrice"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import type { Pizza, Size, Topping } from '@/types'
import { fetchJson } from '@/utils/fetchJson'

import PizzaSelector from '@/components/pizza/PizzaSelector.vue'
import PizzaCustomizer from '@/components/pizza/PizzaCustomizer.vue'
import PizzaSummary from '@/components/pizza/PizzaSummary.vue'

const pizzas = ref<Pizza[]>([])
const sizes = ref<Size[]>([])
const toppings = ref<Topping[]>([])

const selectedPizzaId = ref<number | null>(null)
const selectedSizeId = ref<number | null>(null)
const selectedToppingIds = ref<number[]>([])

onMounted(async () => {
  const [pizzaRes, sizeRes, toppingRes] = await Promise.all([
    fetchJson<{ data: Pizza[] }>('/json/pizza-list.json'),
    fetchJson<{ data: Size[] }>('/json/size-list.json'),
    fetchJson<{ data: Topping[] }>('/json/topping-list.json'),
  ])
  pizzas.value = pizzaRes.data
  sizes.value = sizeRes.data
  toppings.value = toppingRes.data

  selectedPizzaId.value = pizzas.value[0]?.id ?? null
  selectedSizeId.value = sizes.value[0]?.id ?? null
})

const selectedPizza = computed(() => pizzas.value.find((p) => p.id === selectedPizzaId.value))

const selectedSize = computed(() => sizes.value.find((s) => s.id === selectedSizeId.value))

const allowedToppingIds = computed(() => selectedPizza.value?.toppings ?? [])

watch(selectedPizzaId, () => {
  selectedToppingIds.value = selectedToppingIds.value.filter((id) =>
    allowedToppingIds.value.includes(id),
  )
})

const selectedToppings = computed(() =>
  toppings.value.filter((t) => selectedToppingIds.value.includes(t.id)),
)

const totalPrice = computed(() => {
  if (!selectedPizza.value || !selectedSize.value) return 0
  const basePrice = selectedPizza.value.discount.is_active
    ? selectedPizza.value.discount.final_price
    : selectedPizza.value.price
  const sizePrice = selectedSize.value.extra_price
  const toppingPrice = selectedToppings.value.reduce((sum, t) => sum + t.price, 0)
  return (basePrice + sizePrice + toppingPrice).toFixed(2)
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.pizza-builder {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;

  padding: 15rem 10rem 5rem;

  &__container {
    grid-column: 1/4;
  }

  &__aside {
    grid-column: 4/4;
  }
}

:deep(.pizza-builder__section) {
  & h2 {
    font-size: 3.2rem;
    font-weight: 600;
    color: v.$c-accent;

    margin-bottom: 4rem;
  }

  & h3 {
    font-size: 2.4rem;
    font-weight: 600;

    margin-bottom: 3rem;
  }
}
</style>
