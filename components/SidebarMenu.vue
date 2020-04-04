<template>
  <!-- Sidebar Menu -->
  <div class="sm-wrapper sm-left dark">
    <div class="top logo">
      <h3 class="uppercase letter-spacing-2 d-none d-lg-inline d-xl-inline">
        Ana Maria
      </h3>
      <h1 class="uppercase letter-spacing-2 d-none d-lg-inline d-xl-inline">
        Hoyos
      </h1>
    </div>
    <div class="middle">
      <ul class="sm">
        <li class="sm-item">
          <a class="sm-link" :class="{ active: !activeRoute }" href="/">Home</a>
        </li>
        <li class="sm-item">
          <a
            class="sm-link"
            :class="{ active: activeRoute.path.includes('about-me') }"
            href="/section/about-me"
            >About Me</a
          >
        </li>
        <li class="sm-item">
          <a class="sm-link" href="#">Galleries</a>
          <ul class="sm-dropdown show">
            <li class="sm-dropdown-item">
              <a
                class="sm-dropdown-link"
                :class="{
                  active: activeRoute.params.gallery == 'figurative-abstracts'
                }"
                href="/gallery/figurative-abstracts"
                >Figurative Abstracts</a
              >
            </li>
            <li class="sm-dropdown-item">
              <a
                class="sm-dropdown-link"
                :class="{ active: activeRoute.params.gallery == 'abstracts' }"
                href="/gallery/abstracts"
                >Abstracts</a
              >
            </li>
            <li class="sm-dropdown-item">
              <a
                class="sm-dropdown-link"
                :class="{
                  active: activeRoute.params.gallery == 'contemporary'
                }"
                href="/gallery/contemporary"
                >Contemporary</a
              >
            </li>
            <li class="sm-dropdown-item">
              <a
                class="sm-dropdown-link"
                :class="{ active: activeRoute.params.gallery == 'surreal' }"
                href="/gallery/surreal"
                >Surreal</a
              >
            </li>
          </ul>
        </li>
        <li class="sm-item">
          <a
            class="sm-link"
            :class="{ active: activeRoute.path.includes('artist-biography') }"
            href="/section/artist-biography"
            >Artist Biography</a
          >
        </li>
        <li class="sm-item">
          <a
            class="sm-link"
            :class="{ active: activeRoute.path.includes('press') }"
            href="/section/press"
            >Press</a
          >
        </li>
        <li class="sm-item">
          <a
            class="sm-link"
            :class="{ active: activeRoute.path.includes('contact-me') }"
            href="/section/contact-me"
            >Contact</a
          >
        </li>
      </ul>
      <ul class="list-inline margin-bottom-10">
        <li>
          <a href="https://www.facebook.com/ana.m.hoyos.5"
            ><font-awesome-icon :icon="['fab', 'facebook-f']"
          /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/amhoyos1955/"
            ><font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
        </li>
      </ul>
    </div>
    <div class="bottom"></div>
    <!-- Close Button -->
    <button class="sm-close">
      <span></span>
    </button>
  </div>
</template>
<script>
export default {
  computed: {
    activeRoute() {
      return this.$route
    }
  }
}
</script>
<style lang="scss" scoped>
h3,
h1 {
  color: #cb0e0e !important;
}
h1 {
  line-height: 1.75rem;
}
.sm-item {
  border-bottom: 1px solid #242627;
  padding-bottom: 6px;
  margin-bottom: 8px;
}
</style>
