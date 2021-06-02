import {connect} from 'react-redux'

import {loadPageContent} from 'jaen-cms/lib/store/cmsActions'

import {AppDispatch, RootState} from '@store/store'

import GroupsPageComponent from '../pages/GroupsPage'

const mapStateToProps = ({cms}: RootState) => ({
  pages: cms.pages
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadPage: (id: string) => dispatch(loadPageContent({id}))
})

export const GroupsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsPageComponent)
