import React from 'react'

import SidebarEditor from '@cms/components/Editor'
import {CMSBlock, CMSField} from '@cms/store/types'

import {CMSComponentProps} from '../types'

type SubelementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
interface Props extends SubelementProps, CMSComponentProps {
  updateContent: (element: CMSField | CMSBlock) => void
  editable?: boolean
}

const EditableTextField = ({updateContent, ...props}: Props) => {
  const {editableOptions, content, editable, ...subProps} = props

  const onUpdateContent = (content: string) => {
    // const block = JSON.stringify([
    //   {type: bifrostOptions.blockTypeName, value: content}
    // ])

    const {pageId, pageName, fieldName, block} = editableOptions

    if (block) {
      updateContent({
        type: 'BLOCK',
        pageId,
        pageName,
        fieldName,
        blockType: block.type,
        blockPosition: block.position,
        blockId: block.id,
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
