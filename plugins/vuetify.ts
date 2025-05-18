// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'light',
    }
  })
  app.vueApp.use(vuetify)
})

// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// export default defineNuxtPlugin(nuxtApp => {
//   const vuetify = createVuetify({
//     components,
//     directives,
//     theme: {
//       defaultTheme: 'light',
//     },
//   })

//   nuxtApp.vueApp.use(vuetify)
// })
