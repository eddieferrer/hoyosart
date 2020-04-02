<template>
  <div class="wrapper">
    <div class="section-lg padding-bottom-20">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row col-spacing-50">
              <div class="col-12 col-lg-3 text-lg-right">
                <h1 class="margin-0">
                  {{ section.title }}
                </h1>
              </div>
              <div class="col-12 col-lg-7">
                <h5 class="font-weight-normal">Essays</h5>
                <p class="font-large font-weight-light">
                  <a
                    class="button-text-1 margin-top-20"
                    href="@/assets/docs/AMHEssay-CarlosZuaresDejesus.pdf"
                    >Uncanny Theater of Work Features Vision of Otherworldly
                    Realms</a
                  >
                  <br />
                  <em>Carlos Zuares Dejesus</em>
                  <br />
                  Artist & Art Critic
                </p>
                <p class="font-large font-weight-light margin-bottom-20">
                  <a
                    class="button-text-1 margin-top-20"
                    href="@/assets/docs/AMHEssay-SandraMariaMonsalve.pdf"
                    >Meet Ana Maria Hoyos</a
                  >
                  <br />
                  <em>Sandra Maria Monsalve</em>
                  <br />
                  &nbsp;Artist &amp; Art Curator
                </p>
                <h5 class="font-weight-normal">Interviews</h5>
                <p class="font-large font-weight-light">
                  Entrevista Acceso Total
                </p>
                <p class="font-large font-weight-light">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/k38Xs4T4OVI"
                    frameborder="0"
                    allowfullscreen=""
                    class="bordered-iframe"
                  ></iframe>
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
        section: await require(`~/assets/content/section/press.json`)
      }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
}
</style>
