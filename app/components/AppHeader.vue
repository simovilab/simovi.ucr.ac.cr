<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const route = useRoute()
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const items = computed(() => [{
  label: $t('research'),
  to: localePath('research')
}, {
  label: $t('development'),
  to: localePath('development')
}, {
  label: $t('services'),
  to: localePath('services')
}, {
  label: $t('teaching'),
  to: localePath('teaching')
}, {
  label: $t('team'),
  to: localePath('team')
}, {
  label: $t('partners'),
  to: localePath('partners')
}, {
  label: $t('news'),
  to: localePath('news')
}, {
  label: $t('about'),
  to: localePath('about')
}, {
  label: $t('contact'),
  to: localePath('contact')
}])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink :to="localePath('index')">
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
        :to="localePath('login')"
        block
        class="mb-3"
      />
      <UButton
        label="Sign up"
        color="neutral"
        :to="localePath('signup')"
        block
      />
    </template>
  </UHeader>
</template>
