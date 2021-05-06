export type CMSField = {
  type: 'FIELD'
  pageId: string
  pageName: string
  fieldName: string
  content: string
}

export type CMSBlock = {
  type: 'BLOCK'
  pageId: string
  pageName: string
  fieldName: string
  blockType: string
  blockPosition: number
  blockId: number
  content: string
}

export type CMSMenuIndex = {
  checksum: string
  tree: {
    id: number
    fields: {
      type: string
      slug: string
      title: string
    }
    nodes: CMSMenuIndex['tree'][]
  }
}

export type CMSMenuState = {
  index?: CMSMenuIndex
}
