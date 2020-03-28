<template>
  <div>
    <SidebarMenu />
    <SidebarMobileMenu />

    <div class="wrapper">
      <div class="justified-gallery">
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2-tall.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2-square.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2-square.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2-square.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2-square.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2-tall.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2-square.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
        <a href="/assets/arty/images/col-2.jpg">
          <img
            src="@/assets/arty/images/col-2-square.jpg"
            data-gallery-title="Gallery Item"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '~/components/SidebarMenu.vue'
import SidebarMobileMenu from '~/components/SidebarMobileMenu.vue'

export default {
  components: {
    SidebarMenu,
    SidebarMobileMenu
  },
  mounted() {
    require('@/static/arty/js/functions.js')
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
