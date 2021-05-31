// import RichTextField from '@components/atoms/editable/RichTextField'
// import TextField from '@components/atoms/editable/TextField'
// import SidebarEditor from '@components/molecules/Editor'
// import {DropAPI} from '@API'
// import {MDBBtn} from 'mdb-react-ui-kit'
//
import {useEffect} from 'react'

import {CMSRichTextField} from '@cms/editable'

import {Navbar} from '@components/organisms'
import Footer from '@components/organisms/Footer'

import {RootState} from '@store/store'

import "./index.scss"
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
  console.log("fakfak",pages[CMSPageId])

  return (
    <>
      <Navbar />
      <div className="container pt-5">
        <div className="container">
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
        </div>
      </div>
      <Footer
        copyrightText={'CC'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </>
  )
}

export default GroupsPage
