/**
 * @license
 * Copyright Nico Schett. All Rights Reserved.
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {connect} from 'react-redux'

import {TextField} from 'jaen-cms/lib/components'
import {updatePageContent} from 'jaen-cms/lib/store/cmsActions'
import {CMSBlock, CMSField} from 'jaen-cms/lib/store/types'

import {AppDispatch, RootState} from '@store/store'

const mapStateToProps = ({cms}: RootState) => ({
  editable: cms.editingMode
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateContent: (element: CMSField | CMSBlock) =>
    dispatch(updatePageContent({element}))
})

export const CMSTextField = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextField)
