<template>
  <div class="wrapper">
    <!-- Portfolio section -->
    <div class="section padding-y-30">
      <div class="container">
        <div
          class="
            gallery
            portfolio-masonry portfolio-title-outside
            hover-style-3
            column-3
            spacing-30
          "
        >
          <template v-for="(artwork, index) in activeArtwork">
            <div :key="index" class="portfolio-item">
              <div class="portfolio-img">
                <a
                  :href="
                    'https://res.cloudinary.com/hoyosartimagecloud/image/upload/c_fit,h_600,w_600/v1585526865/' +
                    artwork.imageFilename
                  "
                  :data-gallery-title="artwork.title"
                >
                  <img
                    :src="
                      'https://res.cloudinary.com/hoyosartimagecloud/image/upload/c_fit,h_600,w_600/v1585526865/' +
                      artwork.imageFilename
                    "
                    alt=""
                  />
                </a>
              </div>
              <div class="portfolio-title">
                <h4 class="font-weight-medium title">
                  {{ artwork.title }}
                </h4>
                <span class="d-block margin-bottom-10"
                  >{{ artwork.medium }} - {{ artwork.height }}x{{
                    artwork.width
                  }}
                  <span v-if="artwork.numberOfFrames != 1"
                    >({{ artwork.numberOfFrames }})</span
                  ></span
                >
              </div>
            </div>
          </template>
        </div>
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
    ...mapGetters([
      'getHomeArtwork',
      'getImpressionistArtwork',
      'getFigurativeAbstractArtwork',
      'getAbstractsArtwork',
      'getContemporaryArtwork',
      'getSurrealArtwork',
    ]),
    activeRoute() {
      return this.$route.params
    },
    activeArtwork() {
      if (this.activeRoute.gallery === 'figurative-abstracts') {
        return this.getFigurativeAbstractArtwork
      }
      if (this.activeRoute.gallery === 'impressionist') {
        return this.getImpressionistArtwork
      }
      if (this.activeRoute.gallery === 'abstracts') {
        return this.getAbstractsArtwork
      }
      if (this.activeRoute.gallery === 'contemporary') {
        return this.getContemporaryArtwork
      }
      if (this.activeRoute.gallery === 'surreal') {
        return this.getSurrealArtwork
      }
      return this.getHomeArtwork
    },
  },
}
</script>

<style></style>
