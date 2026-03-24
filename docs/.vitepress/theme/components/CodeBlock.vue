<template>
  <div class="custom-code-card">
    <div v-if="description" class="card-desc" v-html="description"></div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps(['description'])
</script>

<style scoped>
.custom-code-card {
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--vp-code-block-bg);
}

/* 2. Style the description to look like your reference image */
.card-desc {
  padding: 14px 16px;
  font-size: 0.95em;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  line-height: 1.6;
}

/* 3. Handle the Code Group specifically */
:deep(.vp-code-group) {
  margin: 0 !important;
  display: flex;
  flex-direction: column;
}

/* 4. Ensure Tabs are always at the top of the internal group */
:deep(.tabs) {
  order: -1 !important; 
  background-color: var(--vp-code-tab-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

/* 5. Clean up the code blocks */
:deep(div[class*='language-']) {
  margin: 0 !important;
  border-radius: 0 !important;
}

/* This adds the 'inline-code' pill look from your image */
:deep(.card-desc code) {
  background-color: var(--vp-c-bg-mute);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.85em;
}
</style>
