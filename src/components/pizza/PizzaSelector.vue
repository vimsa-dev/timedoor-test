<template>
  <div class="pizza-builder__section">
    <div class="pizza-builder__title">
      <h2>Choose your pizza</h2>
    </div>
    <div class="pizza-builder__options pizza-builder__options--pizza">
      <PizzaCard
        v-for="pizza in pizzas"
        :key="pizza.id"
        :name="'pizza'"
        :value="pizza.id"
        v-model="selectedId"
      >
        <template #badge>
          <svg v-if="pizza.discount.is_active" width="141" height="125" viewBox="0 0 141 125">
            <g clip-path="url(#clip0_2_63)">
              <path
                d="M192.688 101.553L20.5615 -51L1.77026e-05 -27.8003L172.127 124.753L192.688 101.553Z"
                fill="#333333"
              />
              <path
                d="M86.7067 29.3268C86.1958 29.9031 85.6587 30.3649 85.0953 30.712C84.5349 31.0557 83.9569 31.2681 83.3613 31.3492C82.7692 31.4333 82.1681 31.3695 81.5581 31.1577C80.9511 30.9425 80.3423 30.5643 79.7318 30.0233C79.1214 29.4822 78.6728 28.9233 78.3862 28.3466C78.1027 27.7664 77.9654 27.1758 77.9743 26.5748C77.9867 25.9768 78.1314 25.3773 78.4083 24.7763C78.6852 24.1753 79.0806 23.5849 79.5944 23.0051C80.2806 22.2309 81.0038 21.6691 81.764 21.3198C82.5306 20.9701 83.3188 20.871 84.1286 21.0223C84.9383 21.1736 85.7508 21.6105 86.5659 22.333C87.3776 23.0524 87.9038 23.8019 88.1445 24.5816C88.3886 25.3643 88.3815 26.1556 88.123 26.9557C87.868 27.7588 87.3958 28.5491 86.7067 29.3268ZM81.248 24.4889C80.7856 25.0107 80.4514 25.5183 80.2454 26.0118C80.0459 26.5048 79.9954 26.9776 80.0937 27.4301C80.195 27.8792 80.4673 28.3002 80.9107 28.6931C81.3609 29.0921 81.815 29.315 82.273 29.3616C82.734 29.4048 83.1939 29.2948 83.6526 29.0315C84.1177 28.7678 84.5815 28.375 85.044 27.8532C85.7392 27.0687 86.1397 26.3214 86.2454 25.6113C86.3511 24.9011 86.068 24.2483 85.3961 23.6529C84.9493 23.2569 84.4937 23.0358 84.0293 22.9895C83.5712 22.9429 83.108 23.0499 82.6394 23.3106C82.1773 23.5709 81.7135 23.9636 81.248 24.4889ZM86.4936 35.8334L84.9333 34.4505L91.5621 26.9711L95.8492 30.7707L94.6975 32.0701L91.9708 29.6534L90.2614 31.5821L92.7989 33.831L91.6518 35.1254L89.1143 32.8764L86.4936 35.8334ZM92.2438 40.9297L90.6835 39.5468L97.3123 32.0674L101.599 35.867L100.448 37.1664L97.721 34.7498L96.0117 36.6785L98.5491 38.9274L97.402 40.2217L94.8645 37.9728L92.2438 40.9297ZM100.741 48.4609L96.4337 44.6432L103.063 37.1638L107.37 40.9815L106.218 42.2809L103.497 39.8688L102.041 41.511L104.574 43.7553L103.422 45.0548L100.89 42.8104L99.1804 44.7391L101.902 47.1512L100.741 48.4609ZM111.115 44.3004C111.794 44.902 112.28 45.4795 112.575 46.0332C112.874 46.5898 112.984 47.1288 112.905 47.6501C112.827 48.1713 112.564 48.6843 112.117 49.1891C111.814 49.5301 111.485 49.7711 111.129 49.9121C110.772 50.053 110.41 50.1184 110.041 50.1084C109.673 50.0983 109.316 50.0407 108.97 49.9357L108.282 55.1441L106.522 53.5844L107.28 49.132L106.436 48.3839L103.893 51.2539L102.307 49.8483L108.936 42.3689L111.115 44.3004ZM109.851 45.5001L109.37 45.0739L107.579 47.0947L108.09 47.5481C108.616 48.0136 109.068 48.2591 109.447 48.2847C109.833 48.3098 110.177 48.1519 110.479 47.8108C110.793 47.4561 110.894 47.0949 110.782 46.7272C110.673 46.3626 110.362 45.9535 109.851 45.5001Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_63">
                <rect width="141" height="125" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </template>
        <template #image>
          <img :src="assetUrl(`img/pizza/${pizza.name}.png`)" />
        </template>
        <template #title>{{ pizza.name }}</template>
        <template #price>
          <span
            >${{
              (pizza.discount.is_active ? pizza.discount.final_price : pizza.price).toFixed(2)
            }}</span
          >
          <s v-if="pizza.discount.is_active" style="opacity: 0.5">${{ pizza.price.toFixed(2) }}</s>
        </template>
      </PizzaCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PizzaCard from '@/components/ui/PizzaCard.vue'

import { assetUrl } from '@/utils/assetUrl'

import type { Pizza } from '@/types'

const props = defineProps<{
  pizzas: Pizza[]
  selectedPizzaId: number | null
}>()

const emit = defineEmits(['update:selectedPizzaId'])

const selectedId = computed({
  get: () => props.selectedPizzaId,
  set: (val: number | null) => emit('update:selectedPizzaId', val),
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.pizza-builder__options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;

  margin-bottom: 8.4rem;
}

:deep(.pizza-card) {
  img {
    width: 100%;
    height: auto;
  }

  svg {
    width: 14.1rem;
    height: 12.5rem;
  }
}

:deep(.radio-btn) {
  font-size: 1.8rem;

  & span span {
    opacity: 0.5;
  }
}
</style>
