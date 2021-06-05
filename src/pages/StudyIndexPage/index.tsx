// import RichTextField from '@components/atoms/editable/RichTextField'
// import TextField from '@components/atoms/editable/TextField'
// import SidebarEditor from '@components/molecules/Editor'
// import {DropAPI} from '@API'
// import {MDBBtn} from 'mdb-react-ui-kit'
//
import {useEffect, useState} from 'react'

import {CMSRichTextField} from 'jaen-cms/lib/editable'

import {RootState} from '@store/store'

import "./index.scss"

import { MDBIcon, MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCardHeader, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
//


interface Props {
  loadPage: (id: string) => void
  id: string
  name: string
  pages: RootState['cms']['pages']
}

const StudyIndexPage = ({pages, id, name, loadPage}: Props): JSX.Element => {
  useEffect(() => {
    console.log('reload')
    loadPage(id)
  }, [])
  const CMSPageId = `${id}_${name}`
  const pageContent = pages[CMSPageId]?.serverContent
  
  const [showShow, setShowShow] = useState('collapse0');
  const studies = pageContent?.studies.reduce((s:any, t:any) => {
    s[t.study.studyType] = [...s[t.study.studyType] || [], t]
    return s
  }, {})

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <MDBContainer fluid>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem active>
              <a href='#'>Gruppen</a>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBContainer>
      </nav>
      <MDBContainer className="pt-5">
        <MDBContainer>
          <CMSRichTextField
            content={pageContent?.body[0].value}
            editableOptions={{
              pageId: id,
              pageName: name,
              fieldName: 'body',
              block: {
                id: 1,
                position: 0,
                type: 'subheading'
              }
            }}
          />
        </MDBContainer>
      </MDBContainer>
      <MDBContainer>
        <MDBContainer className='accordion mt-5'>
        {studies 
          ? Object.keys(studies).map((studytype:any, index:number) =>
            <>
              <MDBCard className='accordion-item mt-3'>
                <MDBCardHeader
                    className='accordion-header d-flex justify-content-between'
                    onClick={() => showShow === 'collapse'+index ? setShowShow('collapse') : setShowShow('collapse'+index)}
                >
                  {studytype}
                  <MDBIcon
                    icon={showShow === 'collapse'+index ? 'angle-up' : 'angle-down'}
                  />
                </MDBCardHeader>
                <MDBCollapse show={showShow === 'collapse'+index}>
                  <MDBCardBody className='accordion-body'>
                    {studies[studytype].map((studypage:any) =>
                      <>
                        <a href={window.location.href +"/"+studypage.id}>{studypage.study.studyName}</a>
                      </>
                    )}
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </>
          ) 
          : <></>
        }
        </MDBContainer>
      </MDBContainer>
    </>
  )
}

export default StudyIndexPage
