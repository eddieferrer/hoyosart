<template>
  <div>
    <SidebarMenu />
    <SidebarMobileMenu />
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarMenu from '~/components/SidebarMenu.vue'
import SidebarMobileMenu from '~/components/SidebarMobileMenu.vue'

export default {
  components: {
    SidebarMenu,
    SidebarMobileMenu
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

<style></style>
