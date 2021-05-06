import {createReducer} from '@reduxjs/toolkit'

import {
  setEditingMode,
  loadPageContent,
  publishPageContent,
  updatePageContent,
  loadIndex,
  toggleMenu
} from './cmsActions'
import {CMSMenuState, CMSBlock, CMSField} from './types'

type CMSState = {
  editingMode: boolean
  showMenu: boolean
  menu: CMSMenuState
  pages: {
    [CMSPageId: string]: {
      id: string
      name: string
      serverContent?: any
      page: {
        blocks?: {
          [CMSBlockId: string]: CMSBlock
        }
        fields?: {
          [CMSFieldId: string]: CMSField
        }
      }
    }
  }
}

const initialState: CMSState = {
  editingMode: false,
  showMenu: false,
  menu: {},
  pages: {}
}

export const cmsReducer = createReducer(initialState, {
  [toggleMenu.type]: (state, action) => void (state.showMenu = action.payload),
  [setEditingMode.type]: (state, action) =>
    void (state.editingMode = action.payload),
  [loadIndex.fulfilled.type]: (state, action) => {
    const {checksum, tree} = action.payload

    console.log(JSON.stringify(state))

    state.menu.index = {checksum, tree}
  },
  [loadPageContent.fulfilled.toString()]: (state, action) => {
    const page = action.payload
    const CMSPageId = `${page.id}_${page.__typename}`

    console.log(CMSPageId)

    if (!state.pages[CMSPageId]) {
      state.pages[CMSPageId] = {
        ...state.pages[CMSPageId],
        serverContent: page
      }
    } else {
      state.pages[CMSPageId].serverContent = page
    }
  },
  [updatePageContent.fulfilled.toString()]: (state, action) => {
    console.log(state, action.payload)
    const element = action.payload
    const CMSPageId = `${element.pageId}_${element.pageName}`

    if (element.type === 'FIELD') {
      const CMSId = `${element.pageId}_${element.fieldName}`
      state.pages[CMSPageId] = {
        ...state.pages[CMSPageId],
        id: element.pageId,
        name: element.pageName,
        page: {
          ...state.pages[CMSPageId]?.page,
          fields: {
            ...state.pages[CMSPageId]?.page.fields,
            [CMSId]: element
          }
        }
      }
      // state.fields = {
      //   ...state.fields,
      //   [CMSPageId]: {
      //     // ...state.fields[CMSPageId],
      //     [CMSId]: element
      //   }
      // }
    } else if (element.type === 'BLOCK') {
      const CMSId = `${element.pageId}_${element.fieldName}_${element.blockType}_${element.blockId}`
      state.pages[CMSPageId] = {
        ...state.pages[CMSPageId],
        id: element.pageId,
        name: element.pageName,
        page: {
          ...state.pages[CMSPageId]?.page,
          blocks: {
            ...state.pages[CMSPageId]?.page.blocks,
            [CMSId]: element
          }
        }
      }
    }

    //   state.blocks = {
    //     ...state.blocks,
    //     [CMSPageId]: {
    //       ...state.blocks[CMSPageId],
    //       [CMSId]: element
    //     }
    //   }
    // }

    // switch(action.payload.type){
    //   case "BLOCK":
    //     state.blocks = {}
    // }
    // if(action.payload.type === "BLOCK"){

    // } else if(action.paload)

    // const statePages = state.pages
    // for (const [key, _value] of Object.entries(action.payload)) {
    //   console.log(JSON.stringify(statePages[key]['test']))
    // }
    // state.pages = action.payload
  },
  [publishPageContent.fulfilled.toString()]: (state, action) => {
    console.log(state, action)
  }
})
