<template>
  <q-page class="container">
    <div class="row q-pa-sm q-col-gutter-sm">
      <div class="col-md-3 col-sm-4" v-for="(post, index) in posts" :key="index">
        <q-card class="my-card" style="min-height: 23rem">
          <img :src="post.jetpack_featured_media_url" style="max-height: 200px">

        <q-card-section>
          <div class="text-h6">{{ post.title.rendered }}</div>
        </q-card-section>

        <div class="absolute-bottom">
          <q-btn color="secondary" class="full-width" @click="details(post.content.rendered)">Detalhar</q-btn>
        </div>
      </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Index',
  mounted () {
    this.setPosts()
  },
  computed: {
    ...mapState('Posts', ['posts'])
  },
  methods: {
    ...mapActions('Posts', ['setPosts']),
    details (blogcontent) {
      this.$router.push({ name: 'details', params: { text: blogcontent } })
    }
  }
}
</script>
