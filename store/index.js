export const state = () => ({
  sections: []
})

export const mutations = {
  setSections(state, list) {
    state.sections = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const files = await require.context(
      '~/assets/content/sections/',
      false,
      /\.json$/
    )
    const sections = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setSections', sections)
  }
}
