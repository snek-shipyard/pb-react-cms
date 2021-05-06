import React from 'react'

import SidebarEditor from '@cms/components/Editor'
import {CMSBlock} from '@cms/store/types'

import {EditableProps} from '../types'

type SubelementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
interface Props extends SubelementProps, EditableProps {
  updateContent: (element: CMSBlock) => void
  content?: string
  editable?: boolean
}

const EditableRichTextField = ({updateContent, ...props}: Props) => {
  const {bifrostOptions, content, editable, ...subProps} = props

  console.log('edititalble rich text', subProps)

  const onUpdateContent = (content: string) => {
    // const block = JSON.stringify([
    //   {type: bifrostOptions.blockTypeName, value: content}
    // ])

    const {
      pageId,
      pageName,
      fieldName,
      blockId,
      blockPosition,
      blockType
    } = bifrostOptions

    if (blockPosition !== undefined && blockType && blockId) {
      updateContent({
        type: 'BLOCK',
        pageId,
        pageName,
        fieldName,
        blockType,
        blockPosition,
        blockId,
        content
      })
    }
  }

  return (
    <div {...subProps}>
      <SidebarEditor
        onChange={onUpdateContent}
        text={content}
        buttonOptions={{
          bold: true,
          italic: true,
          underline: true,
          code: true,
          headlineOne: true,
          headlineTwo: true,
          headlineThree: true,
          unorderedList: true,
          orderedList: true,
          blockquote: true,
          codeBlock: true
        }}
        editable={editable}
      />
    </div>
  )
}

export default EditableRichTextField
