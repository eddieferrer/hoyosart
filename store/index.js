export const state = () => ({
  artwork: [],
})

export const mutations = {
  setArtwork(state, list) {
    const sortByDate = function (a, b) {
      a = new Date(a.date)
      b = new Date(b.date)
      return a > b ? -1 : a < b ? 1 : 0
    }
    const sortByOrder = function (a, b) {
      return a.galleryOrder - b.galleryOrder
    }
    state.artwork = list.sort((a, b) => {
      if (a.galleryOrder === b.galleryOrder) {
        return sortByDate(a, b)
      }
      return sortByOrder(a, b)
    })
  },
}

export const getters = {
  getHomeArtwork(state) {
    return state.artwork.filter((artwork) => artwork.gallery.includes('Home'))
  },
  getImpressionistArtwork(state) {
    return state.artwork.filter((artwork) =>
      artwork.gallery.includes('Impressionist')
    )
  },
  getFigurativeAbstractArtwork(state) {
    return state.artwork.filter((artwork) =>
      artwork.gallery.includes('Figurative Abstract')
    )
  },
  getAbstractsArtwork(state) {
    return state.artwork.filter((artwork) =>
      artwork.gallery.includes('Abstracts')
    )
  },
  getContemporaryArtwork(state) {
    return state.artwork.filter((artwork) =>
      artwork.gallery.includes('Contemporary')
    )
  },
  getSurrealArtwork(state) {
    return state.artwork.filter((artwork) =>
      artwork.gallery.includes('Surreal')
    )
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
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
    // add image url only and then commit
    await commit(
      'setArtwork',
      artwork.map((element) => {
        element.imageFilename = element.image.split('/').pop()
        return element
      })
    )
  },
}
