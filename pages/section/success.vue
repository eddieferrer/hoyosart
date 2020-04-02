<template>
  <div class="wrapper">
    <div class="section-lg padding-bottom-20">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row col-spacing-50">
              <div class="col-12 col-lg-12 text-lg-left">
                <h1 class="margin-0">
                  Thank you
                </h1>
              </div>
              <div class="col-12 col-lg-7">
                <p class="font-large font-weight-light">
                  Thank you for contacting me. I wil get back to you as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end container -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { section: payload }
    else
      return {
        section: await require(`~/assets/content/section/about-me.json`)
      }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
}
</style>
