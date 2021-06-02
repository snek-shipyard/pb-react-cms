/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import React from 'react'

import SidebarEditor from 'jaen-cms/lib/components/Editor'
import {CMSBlock, CMSField} from 'jaen-cms/lib/store/types'

import {CMSComponentProps} from '../types'

type SubelementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
interface Props extends SubelementProps, CMSComponentProps {
  updateContent: (element: CMSField | CMSBlock) => void
}

const EditableTextField = ({updateContent, ...props}: Props) => {
  const {editableOptions, content, editable, ...subProps} = props

  const onUpdateContent = (content: string) => {
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
