<template>
  <section class="hero-banner">
    <h1 class="hero-banner__title">Pizza Order</h1>
    <div class="hero-banner__background">
      <img src="/img/hero.png" alt="Pizza Order - Background" fetchpriority="high" />
    </div>
  </section>
</template>

<script lang="ts">
export default {}
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.hero-banner {
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    position: relative;
    z-index: 1;

    font-size: 9.6rem;
    color: v.$c-accent;
    font-weight: 600;
  }

  &__background {
    position: absolute;
    inset: 0;
    pointer-events: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
