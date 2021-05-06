import {connect} from 'react-redux'

import CMSMenu from '@cms/components/Menu'
import {
  loadIndex,
  publishPageContent,
  setEditingMode,
  toggleMenu
} from '@cms/store/cmsActions'

import {AppDispatch, RootState} from '@store/store'

const mapStateToProps = ({cms}: RootState) => ({
  showMenu: cms.showMenu,
  editingMode: cms.editingMode,
  index: cms.menu.index
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadIndex: (checksum?: string) => dispatch(loadIndex({checksum})),
  toggleMenu: (state: boolean) => dispatch(toggleMenu(state)),
  setEditingMode: (state: boolean) => dispatch(setEditingMode(state)),
  publish: () => dispatch(publishPageContent({}))
  // loadPage: (id: string) => dispatch(loadPageContent({id}))
})

export const CMSMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CMSMenu)
