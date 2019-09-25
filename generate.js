import { resolve } from 'path'
import posthtml from 'posthtml'
import postcss from 'posthtml-postcss'
import removeAttributes from 'posthtml-remove-attributes'
import mqPacker from 'css-mqpacker'
import mergeLonghand from 'postcss-merge-longhand'
import mergeRules from 'postcss-merge-rules'
import cssnano from 'cssnano'

const attrsToRemove = [
  'data-server-rendered',
  'data-vue-ssr-id',
  'data-n-head-ssr',
  'data-n-head'
]

export default {
  async page (page) {
    let plugins = [
      removeAttributes(attrsToRemove),
      postcss([
        mergeLonghand(),
        mergeRules(),
        mqPacker(),
        cssnano({
          preset: 'default',
          discardComments: {
            removeAll: true,
          },
          zIndex: false
        })
      ], { from: undefined })
    ]

    let { html } = await posthtml(plugins).process(page.html)

    page.html = html
  }
}
