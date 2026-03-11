module.exports = {

  tags: "hochzeit-landingpage",

  // Pagination über alle Paare
  pagination: {
    data: "paare",
    size: 1,
    alias: "paar"
  },

  // Permalink-Struktur
  permalink: data => `/hochzeiten/${data.paar.slug}/index.html`,

  // Meta-Daten für Social Sharing
  eleventyComputed: {
    title: data => `${data.paar.brautVorname} & ${data.paar.braeutigamVorname} | LUDOVIKA`,
    description: data => `Hochzeitsfotografie für ${data.paar.brautVorname} & ${data.paar.braeutigamVorname} von LUDOVIKA – Tom Kästenbauer`,
    ogImage: data => `/assets/images/ludovika/hochzeiten/paare/${data.paar.slug}/hero.jpg`
  }

};