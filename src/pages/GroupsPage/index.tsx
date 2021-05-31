// import RichTextField from '@components/atoms/editable/RichTextField'
// import TextField from '@components/atoms/editable/TextField'
// import SidebarEditor from '@components/molecules/Editor'
// import {DropAPI} from '@API'
// import {MDBBtn} from 'mdb-react-ui-kit'
//
import {useEffect, useState} from 'react'

import {CMSRichTextField} from '@cms/editable'

import {Navbar} from '@components/organisms'
import Footer from '@components/organisms/Footer'

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

const GroupsPage = ({pages, id, name, loadPage}: Props): JSX.Element => {
  useEffect(() => {
    console.log('reload')
    loadPage(id)
  }, [])
  const CMSPageId = `${id}_${name}`
  const pageContent = pages[CMSPageId]?.serverContent
  console.log("fakfak",pageContent.studies[0].study)
  const [showShow, setShowShow] = useState('collapse1');

  const studies = pageContent.studies
  const studietypes = studies.reduce((acc:Array<number> , curVal:any) => acc.concat([curVal.studyType, curVal.studyType]),[]);
  //const studiess = [[1, 2], [3, 4], [5, 6]].reduce((acc, curVal) => acc.concat(curVal), []);
  console.log("fakfak",studietypes)
  return (
    <>
      <Navbar />
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
        {studies.map((item:any, index:number) =>
          <>
            <MDBCard className='accordion-item mt-3'>
              <MDBCardHeader
                  className='accordion-header d-flex justify-content-between'
                  onClick={() => showShow === 'collapse'+index ? setShowShow('collapse') : setShowShow('collapse'+index)}
              >
                {item.study.studyType}
                <MDBIcon
                  icon={showShow === 'collapse'+index ? 'angle-up' : 'angle-down'}
                />
              </MDBCardHeader>
              <MDBCollapse show={showShow === 'collapse'+index}>
                <MDBCardBody className='accordion-body'>
                  <a href={window.location.href +"/"+item.study.studyName}>{item.study.studyName}</a>
                </MDBCardBody>
              </MDBCollapse>
            </MDBCard>
          </>
        )}
        </MDBContainer>
      </MDBContainer>
      <Footer
        copyrightText={'CC'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </>
  )
}

export default GroupsPage
