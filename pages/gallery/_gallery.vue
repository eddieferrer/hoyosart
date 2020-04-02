<template>
  <div class="wrapper">
    <div class="section padding-y-30">
      <div class="container">
        <article>
          Gallery
          {{ getHomeArtwork }}
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import FancyQuote from '~/components/FancyQuote.vue'

export default {
  components: {
    // FancyQuote
  },
  computed: {
    ...mapGetters(['getHomeArtwork'])
  }
}
</script>

<style></style>
