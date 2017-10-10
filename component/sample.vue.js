// { "framework": "Vue" }

var listData = [
  { type: 'A', title: 'Tom' },
  { type: 'A', title: 'Jerry' }
]

/*
Compiled from:

  <text>[------- {{title}} -------]</text>
*/
var Banner = {
  props: ['title'],
  render (h) {
    return h('text', [
      '[------- ' + this.title + ' -------]'
    ])
  },
  '@render' (h, attrs) {
    return h('text', {
      attrs: {
        '@isComponentRoot': true,
        '@componentProps': {
          title: attrs.title
        },
        value: ['[------- ', { '@binding': 'title' }, ' -------]']
      }
    })
  }
}

/*
Compiled from:

<recycle-list :list-data="listData" template-key="type">
  <cell-slot template-type="A">
    <banner title="item.title"></banner>
  </cell-slot>
</recycle-list>
*/
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
        h('banner', { attrs: {
          '@isInRecycleList': true,
          title: { '@binding': 'item.title' }
        }})
      ])
    ])
  }
})
