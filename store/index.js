export const state = () => ({
  sections: [],
  artwork: []
})

export const mutations = {
  setSections(state, list) {
    state.sections = list
  },
  setArtwork(state, list) {
    state.artwork = list.sort(function(a, b) {
      a = new Date(a.date)
      b = new Date(b.date)
      return a > b ? -1 : a < b ? 1 : 0
    })
  }
}

export const getters = {
  getHomeArtwork(state) {
    return state.artwork.filter((artwork) => artwork.gallery.includes('Home'))
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const files = await require.context(
      '~/assets/content/section/',
      false,
      /\.json$/
    )
    const sections = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setSections', sections)

    const images = await require.context(
      '~/assets/content/artwork/',
      false,
      /\.json$/
    )
    const artwork = images.keys().map((key) => {
      const res = images(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setArtwork', artwork)
  }
}
