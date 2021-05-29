import {connect} from 'react-redux'

import {loadPageContent} from '@cms/store/cmsActions'

import {AppDispatch, RootState} from '@store/store'

import RulesPageComponent from '../pages/RulesPage'

const mapStateToProps = ({cms}: RootState) => ({
  pages: cms.pages
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadPage: (id: string) => dispatch(loadPageContent({id}))
})

export const RulesPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RulesPageComponent)
