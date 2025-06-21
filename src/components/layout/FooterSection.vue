<template>
  <footer class="footer">
    <div class="footer__container">
      <div>
        <div class="footer__logo">
          <span>Food</span>
          <span>now</span>
        </div>
        <div class="footer__list footer__social-media">
          <span>Find Us:</span>
          <ul>
            <li>
              <SocialButton id="facebook" />
            </li>
            <li>
              <SocialButton id="instagram" />
            </li>
            <li>
              <SocialButton id="youtube" />
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__list footer__navigation">
        <span>Navigation</span>
        <ul>
          <li>
            <BaseButton to="#" variant="link">Home</BaseButton>
          </li>
          <li>
            <BaseButton to="#" variant="link">Order</BaseButton>
          </li>
          <li>
            <BaseButton to="#" variant="link">About</BaseButton>
          </li>
          <li>
            <BaseButton to="#" variant="link">Blog</BaseButton>
          </li>
          <li>
            <BaseButton to="#" variant="link">Contact</BaseButton>
          </li>
          <li>
            <BaseButton to="#" variant="link">Login</BaseButton>
          </li>
          <li>
            <BaseButton to="#" variant="link">Register</BaseButton>
          </li>
        </ul>
      </div>
      <div class="footer__list footer__contact">
        <span>Contact</span>
        <ul>
          <li>
            <img src="/img/icons/mail.svg" alt="Email" />
            <span>Food.now@gmail.com</span>
          </li>
          <li>
            <img src="/img/icons/phone.svg" alt="Email" />
            <span>+62848477102943</span>
          </li>
          <li>
            <img src="/img/icons/whatsapp.svg" alt="Email" />
            <span>+62717493494</span>
          </li>
        </ul>
      </div>
      <div class="footer__list footer__location">
        <span>Location</span>
        <ul>
          <li>
            <img src="/img/icons/location.svg" alt="Email" />
            <p>
              <strong>Kerobokan</strong>
              Jl. Raya Keroboan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten
              Badung, Bali 80361
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__copyright">
      <p>
        Copyright © 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. |
        <a href="#">Privacy Policy</a>
      </p>
      <p>
        This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and
        <a href="#">Terms of Service</a> apply.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Components
import SocialButton from '@/components/ui/SocialButton.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

.footer {
  position: relative;
  width: 100%;
  z-index: f.z('footer');

  padding: 3.5rem 10rem;
  background-color: v.$c-background;

  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    padding: 5rem 0;
    border-top: 0.1rem solid rgba(v.$c-text-dark, 0.2);
    border-bottom: 0.1rem solid rgba(v.$c-text-dark, 0.2);
  }

  &__logo {
    margin-bottom: 3rem;

    span {
      font-size: 5rem;
      font-weight: 600;

      &:first-child {
        color: v.$c-accent;
      }
    }
  }

  &__social-media {
    ul {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }
  }

  &__social-media,
  &__list {
    & > span {
      display: block;
      font-size: 2.4rem;
      font-weight: 600;
      color: v.$c-accent;

      margin-bottom: 1.5rem;
    }

    &:not(.footer__footer__list) {
      & > span {
        margin-bottom: 2.5rem;
      }
    }

    ul {
      li,
      :deep(a) {
        font-size: 1.8rem;
        font-weight: 400;
      }

      li {
        line-height: 1.5;

        strong {
          font-weight: 600;
          display: block;
        }
      }
    }
  }

  &__navigation {
    ul {
      columns: 2;
      max-width: 50%;

      :deep(.btn) {
        margin-bottom: 1.5rem;
        font-weight: 400;
      }
    }
  }

  &__contact,
  &__location {
    ul {
      li {
        display: flex;
        align-items: flex-start;

        column-gap: 1rem;
        margin-bottom: 1.5rem;

        img {
          height: 1lh;
        }
      }
    }
  }

  &__contact ul li {
    align-items: center;
  }
}

.footer__copyright {
  position: relative;

  padding: 3rem 0 0;
  text-align: center;

  font-size: 1.8rem;

  & > p {
    a:hover {
      color: v.$c-accent !important;
    }
  }

  & > p:last-child {
    margin-top: 1rem;
    font-size: 1.6rem;
  }
}
</style>
