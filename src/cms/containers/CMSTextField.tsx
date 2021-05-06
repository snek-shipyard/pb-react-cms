import {connect} from 'react-redux'

import EditableTextField from '@cms/components/TextField'
import {updatePageContent} from '@cms/store/cmsActions'
import {CMSBlock, CMSField} from '@cms/store/types'

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
)(EditableTextField)
