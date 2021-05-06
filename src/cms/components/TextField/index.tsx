import React from 'react'

import SidebarEditor from '@cms/components/Editor'
import {CMSBlock, CMSField} from '@cms/store/types'

import {EditableProps} from '../types'

type SubelementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
interface Props extends SubelementProps, EditableProps {
  updateContent: (element: CMSField | CMSBlock) => void
  content?: string
  editable?: boolean
}

const EditableTextField = ({updateContent, ...props}: Props) => {
  const {bifrostOptions, content, editable, ...subProps} = props

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
    } else {
      updateContent({
        type: 'FIELD',
        pageId,
        pageName,
        fieldName,
        content
      })
    }
  }

  return (
    <div {...subProps}>
      <SidebarEditor
        onChange={onUpdateContent}
        text={content}
        editable={editable}
      />
    </div>
  )
}

export default EditableTextField
