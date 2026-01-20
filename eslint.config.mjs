// @ts-check
import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    vue: {
      overrides: {
        'vue/block-order': [
          'error',
          {
            order: ['template', 'script', 'style'],
          },
        ],
      },
    },
  }),
  ...tailwind.configs['flat/recommended'],
)
