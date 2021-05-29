import {connect} from 'react-redux'

import {loadPageContent} from '@cms/store/cmsActions'

import {AppDispatch, RootState} from '@store/store'

import HowtoPageComponent from '../pages/HowtoPage'

const mapStateToProps = ({cms}: RootState) => ({
  pages: cms.pages
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadPage: (id: string) => dispatch(loadPageContent({id}))
})

export const HowtoPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HowtoPageComponent)
