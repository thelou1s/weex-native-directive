{
  type: 'recycle-list',
  attr: {
    append: 'tree',
    templateKey: 'type',
    alias: 'item'
  },
  children: [{
    type: 'cell-slot',
    attr: { templateType: 'A' },
    children: [{
      type: 'text',
      attr: {
        '@isComponentRoot': true,
        '@componentProps': {
          title: { '@binding': 'item.title' }
        },
        value: ['[------- ', { '@binding': 'title' }, ' -------]']
      }
    }]
  }]
}
