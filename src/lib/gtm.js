export const GTM_ID = 'G-7LLQWRH1RL'

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
