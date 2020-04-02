<template>
  <div class="wrapper">
    <div class="section-lg padding-bottom-20">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row col-spacing-50">
              <div class="col-12 col-lg-4 text-lg-right">
                <h1 class="margin-0">
                  {{ section.title }}
                </h1>
              </div>
              <div class="col-12 col-lg-8">
                <p class="font-large font-weight-light">
                  It seems as though I have been painting my whole life. Being
                  creative is a "need" for me. I am specially drawn to the
                  freedom of having no boundaries of representation through my
                  art. I play with my imagination and leave the brush free to
                  explore the canvas without worrying about the end result.
                  Influenced by feelings and passion, my own techniques have
                  developed.
                </p>
                <p class="font-large font-weight-light">
                  I dont look for results, I dont plan my abstractions, I just
                  find it and give it a soul, they are analogies, simply that. I
                  enter into a totally different world where I lose all fear,
                  replaced with imagination and passion. The acrylic and
                  graphite have given me strength and I have found myself.
                </p>
                <p class="font-large font-weight-light">
                  Ana Maria Hoyos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end container -->
    </div>

    <div class="section-xs bg-light-gray">
      <div class="container text-center"></div>
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
        section: await require(`~/assets/content/section/${params.section}.json`)
      }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
}
</style>
