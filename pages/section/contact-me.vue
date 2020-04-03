<template>
  <div class="wrapper">
    <div class="section-lg padding-bottom-20">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row col-spacing-50">
              <div class="col-12 col-lg-3 text-lg-right">
                <h1 class="margin-0">
                  Contact Me
                </h1>
              </div>
              <div class="col-12 col-lg-7">
                <p class="font-large font-weight-light">
                  You can reach me on
                  <a
                    class="button-text-1"
                    href="https://www.facebook.com/ana.m.hoyos.5"
                    >facebook</a
                  >
                  or
                  <a
                    class="button-text-1"
                    href="https://www.instagram.com/amhoyos1955/"
                    >instagram</a
                  >. You can also fill out the form below and I will get back to
                  you as soon as possible.
                </p>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  class="style-3"
                  data-netlify-honeypot="bot-field"
                  action="/section/success"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div class="form-row">
                    <div class="col-12 col-sm-6">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div class="col-12 col-sm-6">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-Mail"
                        required=""
                      />
                    </div>
                  </div>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <button
                    class="button button-lg button-rounded button-outline-dark"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
                <!-- Submit result -->
                <div class="submit-result">
                  <span id="success"
                    >Thank you! Your Message has been sent.</span
                  >
                  <span id="error"
                    >Something went wrong, Please try again!</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
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
export default {}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 3rem;
}
</style>
