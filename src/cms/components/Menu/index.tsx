import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from 'mdb-react-ui-kit'
import {useEffect} from 'react'

import {CMSMenuState} from '@cms/store/types'

// import {useState} from 'react'
import './cmsmenu.scss'

interface Props extends CMSMenuState {
  showMenu: boolean
  editingMode: boolean
  publish: () => void
  loadIndex: (checksum?: string) => void
  toggleMenu: (state: boolean) => void
  setEditingMode: (
    editing: boolean
  ) => {
    payload: boolean
    type: string
  }
}

const CMSMenu = ({
  showMenu,
  editingMode,
  index,
  publish,
  loadIndex,
  setEditingMode,
  toggleMenu
}: Props) => {
  const toggleShow = () => toggleMenu(!showMenu)

  console.log(editingMode, setEditingMode)

  useEffect(() => {
    setInterval(() => {
      loadIndex(index?.checksum)
    }, 1000 * 60 * 2)
  }, [index?.checksum])

  return (
    <>
      <MDBModal
        show={showMenu}
        size="lg"
        getOpenState={(e: any) => toggleMenu(e)}
        backdrop
        tabIndex="-1">
        <MDBModalDialog centered size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Jaen</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>{JSON.stringify(index)}</MDBModalBody>

            <MDBModalFooter>
              {!editingMode ? (
                <MDBBtn color="info" onClick={() => setEditingMode(true)}>
                  edit
                </MDBBtn>
              ) : (
                <>
                  <MDBBtn color="warning" onClick={() => setEditingMode(false)}>
                    stop
                  </MDBBtn>
                  <MDBBtn color="success" onClick={() => publish()}>
                    publish
                  </MDBBtn>
                </>
              )}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default CMSMenu
