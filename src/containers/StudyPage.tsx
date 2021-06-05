import {connect} from 'react-redux'

import {loadPageContent} from 'jaen-cms/lib/store/cmsActions'

import {AppDispatch, RootState} from '@store/store'

import StudyPageComponent from '../pages/StudyPage'

const mapStateToProps = ({cms}: RootState) => ({
  pages: cms.pages
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadPage: (id: string) => dispatch(loadPageContent({id}))
})

export const StudyPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyPageComponent)
