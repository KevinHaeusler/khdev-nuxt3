// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/content','@nuxthq/ui'],
    content: {
      documentDriven: true
    },
    colorMode: {    
    preference: 'system', // default value of $colorMode.preference    
    fallback: 'light', // fallback value if not system preference found    
    hid: 'nuxt-color-mode-script',    
    globalName: '__NUXT_COLOR_MODE__',    
    componentName: 'ColorScheme',    
    classPrefix: '',    
    classSuffix: '',    
    storageKey: 'nuxt-color-mode'  }

  })