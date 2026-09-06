<script setup lang="ts">
const { locale } = useI18n()
const source = 'research'

const { data: page } = await useAsyncData(source + '-' + locale.value, async () => {
  const content = locale.value === 'en'
    ? await queryCollection('content_en').path('/' + source).first()
    : locale.value === 'pt'
      ? await queryCollection('content_pt').path('/' + source).first()
      : await queryCollection('content_es').path('/' + source).first()

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
    />
    <UContainer v-if="page.alert">
      <UAlert :title="page.alert.title" :description="page.alert.description" />
    </UContainer>
  </div>
</template>
