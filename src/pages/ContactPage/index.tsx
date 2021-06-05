// import RichTextField from '@components/atoms/editable/RichTextField'
// import TextField from '@components/atoms/editable/TextField'
// import SidebarEditor from '@components/molecules/Editor'
// import {DropAPI} from '@API'
// import {MDBBtn} from 'mdb-react-ui-kit'
//
import {useEffect} from 'react'

import {CMSRichTextField} from 'jaen-cms/lib/editable'

import {RootState} from '@store/store'

import "./index.scss"
//

interface Props {
  loadPage: (id: string) => void
  id: string
  name: string
  pages: RootState['cms']['pages']
}

const ContactPage = ({pages, id, name, loadPage}: Props): JSX.Element => {
  useEffect(() => {
    console.log('reload')
    loadPage(id)
  }, [])
  const CMSPageId = `${id}_${name}`
  const pageContent = pages[CMSPageId]?.serverContent

  return (
    <>
      <div className="container pt-5">
        {/* <h1 className="container">
          <CMSTextField
            content={pageContent?.body[1].value}
            editableOptions={{
              pageId: id,
              pageName: name,
              fieldName: 'body',
              block: {
                id: 1,
                position: 0,
                type: 'heading'
              }
            }}
          />
        </h1> */}
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
    </>
  )
}

export default ContactPage
