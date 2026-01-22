<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const source = 'research'

const { data: page } = await useAsyncData(source + '-' + locale.value, async () => {
  const collection = (`content_${locale.value}`) as keyof Collections
  const content = await queryCollection(collection).path('/' + source).first()

  if (!content && locale.value !== 'es') {
    return await queryCollection('content_es').path('/' + source).first()
  }

  return content
}, {
  watch: [locale]
})

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <div v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <MDC
          :value="page.title"
          unwrap="p"
        />
      </template>

    </UPageHero>
  </div>
</template>
