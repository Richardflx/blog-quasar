<template>
  <q-page padding>
    <div v-html="text" style="max-width: 80%"></div>
  </q-page>
</template>

<script>
export default {
  name: 'Details',
  props: {
    text: {
      type: String
    }
  }
}
</script>
