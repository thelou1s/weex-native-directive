// { "framework": "Vue" }

var listData = [
  { type: 'A', title: 'Tom' },
  { type: 'A', title: 'Jerry' }
]

var Banner = {
  props: ['title'],
  render (h) {
    return h('text', [
      '[------- ' + this.title + ' -------]'
    ])
  },
  '@render' (h) {
    return h('text', {
      attrs: {
        '@isComponentRoot': true,
        '@componentProps': {
          title: this.title
        },
        value: ['[------- ', { '@binding': 'title' }, ' -------]']
      }
    })
  }
}

new Vue({
  el: 'body',
  components: { banner: Banner },
  data () {
    return {
      listData: listData
    }
  },
  render (h) {
    return h('recycle-list', { appendAsTree: true, attrs: { append: "tree", listData: this.listData, templateKey: 'type', alias: 'item' } }, [
      h('cell-slot', { attrs: { templateType: 'A' } }, [

        // using the banner component
        h('banner', { attrs: { title: { '@binding': 'item.title' } } })
      ])
    ])
  }
})
