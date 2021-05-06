export type CMSComponentProps = {
  content?: string
  editableOptions: {
    pageId: string
    pageName: string
    fieldName: string
    block?: {
      id: number
      position: number
      type: string
    }
  }
}
