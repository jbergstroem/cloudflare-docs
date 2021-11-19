const productIconKey = "email-routing";

module.exports = {
  product: "Email Routing",
  pathPrefix: "/email-routing",
  productIconKey,
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M42.0375 10.5675H6.03748L4.53748 12.0675V35.9325L6.03748 37.4325H42.0375L43.5375 35.9325V12.0675L42.0375 10.5675ZM24.0375 25.965L10.005 13.5675H38.0775L24.0375 25.965ZM17.2875 24L7.53748 32.61V15.36L17.2875 24ZM19.5375 26.0025L23.0325 29.085H25.02L28.5 26.0025L38.0775 34.4325H10.005L19.5375 26.0025ZM30.7875 24L40.5375 15.39V32.64L30.7875 24Z"/></svg>',
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/email-routing",
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com"
    }
  ],
  search: {
    indexName: "",
    apiKey: "",
    algoliaOptions: { facetFilters: '' },
  },
  siteMetadata: {
    title: "Cloudflare Email Routing docs",
    description: "Simplify the way you create and manage email addresses. With Email Routing, you can create any number of custom email addresses that you can use in situations where you do not want to share your real email address.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/firewall",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  }
}