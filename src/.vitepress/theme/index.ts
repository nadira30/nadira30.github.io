// // https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
// import { VPBTheme } from '@jcamp/vitepress-blog-theme'
// import DefaultTheme from 'vitepress/theme'
// // Removed DefaultTheme import as it is not exported
// import './style.css'
// import './math.css'
// import CustomBlogHeader from './CustomBlogHeader.vue'
// import OrganizationsList from './OrganizationsList.vue'
// export default {
//   ...VPBTheme,
//   DefaultTheme,
//   // Removed DefaultTheme as it is not exported
//   Layout: () => {
//     return h(VPBTheme.Layout, null, {
//       // https://vitepress.dev/guide/extending-default-theme#layout-slots
//     })
//   },
//   enhanceApp({ app, router, siteData }) {
//     VPBTheme.enhanceApp({ app, router, siteData })
//     app.component('CustomBlogHeader', CustomBlogHeader)
//     DefaultTheme.enhanceApp({ app, router, siteData })
//     app.component('OrganizationsList', OrganizationsList)
//   },
// }

// // if you're not using custom components, this file can be as simple as
// /*
// import { VPBTheme } from '@jcamp/vitepress-blog-theme'
// import './style.css'
// export default VBPTheme
// */

// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { VPBTheme } from '@jcamp/vitepress-blog-theme'
import './style.css'
import './math.css'
import CustomBlogHeader from './CustomBlogHeader.vue'
import OrganizationsList from './OrganizationsList.vue'

export default {
  ...VPBTheme,
  Layout: () => {
    return h(VPBTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register the blog theme
    VPBTheme.enhanceApp({ app, router, siteData })
    
    // Register your custom components
    app.component('CustomBlogHeader', CustomBlogHeader)
    app.component('OrganizationsList', OrganizationsList)
  }
}