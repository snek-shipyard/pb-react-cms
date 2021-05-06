import {connect} from 'react-redux'

import EditableRichTextField from '@cms/components/RichTextField'
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
)(EditableRichTextField)
