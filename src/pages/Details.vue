<template>
  <q-page padding>
    <div class="container q-pb-sm">
      <q-btn color="primary" @click="homePage()">Voltar</q-btn>
    </div>
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
  },
  methods: {
    homePage () {
      this.$router.push({ name: 'homePage' })
    }
  }
}
</script>
