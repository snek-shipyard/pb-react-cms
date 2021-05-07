/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {connect} from 'react-redux'

import {RichTextField} from '@cms/components'
import {updatePageContent} from '@cms/store/cmsActions'
import {CMSBlock} from '@cms/store/types'

import {AppDispatch, RootState} from '@store/store'

const mapStateToProps = ({cms}: RootState) => ({
  editable: cms.editingMode
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateContent: (element: CMSBlock) => dispatch(updatePageContent({element}))
})

export const CMSRichTextField = connect(
  mapStateToProps,
  mapDispatchToProps
)(RichTextField)
