<template>
  <div>
    <SidebarMenu />
    <SidebarMobileMenu />
    <div class="wrapper">
      <!-- Portfolio section -->
      <div class="section padding-y-30">
        <div class="container">
          <div
            class="gallery portfolio-masonry portfolio-title-outside hover-style-3 column-3 spacing-30"
          >
            <template v-for="(artwork, index) in getHomeArtwork">
              <template v-if="index == 1">
                <div :key="index" class="portfolio-item">
                  <FancyQuote
                    quote="Hoyos' art is visceral. It comes from within. It explores her whole strength."
                    author-title="Artist & Art Curator"
                    author="Sandra María Monsalve"
                  />
                </div>
              </template>
              <template v-if="index == 6">
                <div :key="index" class="portfolio-item">
                  <FancyQuote
                    quote="Hoyos’ has a keen eye, unquenchable curiosity and the desire to create works of incremental, seemingly endless possibilities."
                    author-title="Artist & Art Critic"
                    author="Carlos Zuares Dejesus"
                  />
                </div>
              </template>
              <div :key="index" class="portfolio-item">
                <div class="portfolio-img">
                  <a :href="artwork.image" :data-gallery-title="artwork.title">
                    <img :src="artwork.image" alt="" />
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarMenu from '~/components/SidebarMenu.vue'
import SidebarMobileMenu from '~/components/SidebarMobileMenu.vue'
import FancyQuote from '~/components/FancyQuote.vue'

export default {
  components: {
    SidebarMenu,
    SidebarMobileMenu,
    FancyQuote
  },
  computed: {
    ...mapGetters(['getHomeArtwork'])
  },
  mounted() {
    this.$nextTick(() => {
      require('@/static/arty/js/functions.js')
    })
  },

  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        {
          src: '/arty/plugins/jquery.min.js',
          body: true
        },
        {
          src: '/arty/plugins/plugins.js',
          body: true
        }
      ]
    }
  }
}
</script>
