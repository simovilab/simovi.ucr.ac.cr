<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const route = useRoute()
const { locale, setLocale } = useI18n()

const items = computed(() => [{
  label: 'Research',
  to: '/research'
}, {
  label: 'Development',
  to: '/development'
}, {
  label: 'Services',
  to: '/services'
}, {
  label: 'Teaching',
  to: '/teaching'
}, {
  label: 'Team',
  to: '/team'
}, {
  label: 'Partners',
  to: '/partners'
}, {
  label: 'News',
  to: '/news'
}, {
  label: 'About',
  to: '/about'
}, {
  label: 'Contact',
  to: '/contact'
}])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>

      <ULocaleSelect
        :model-value="locale"
        :locales="[locales.en, locales.es]"
        @update:model-value="setLocale($event as 'es' | 'en')"
      />

      <UColorModeButton />

    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="Sign in"
        color="neutral"
        variant="subtle"
        to="/login"
        block
        class="mb-3"
      />
      <UButton
        label="Sign up"
        color="neutral"
        to="/signup"
        block
      />
    </template>
  </UHeader>
</template>
