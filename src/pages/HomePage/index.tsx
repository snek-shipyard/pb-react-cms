// import RichTextField from '@components/atoms/editable/RichTextField'
// import TextField from '@components/atoms/editable/TextField'
// import SidebarEditor from '@components/molecules/Editor'
// import {DropAPI} from '@API'
// import {MDBBtn} from 'mdb-react-ui-kit'
//
import {useEffect} from 'react'

import {CMSRichTextField} from '@cms/containers/CMSRichTextField'
import {CMSTextField} from '@cms/containers/CMSTextField'

import {Navbar} from '@components/organisms'
import Footer from '@components/organisms/Footer'

import {RootState} from '@store/store'

//

interface Props {
  loadPage: (id: string) => void
  id: string
  name: string
  pages: RootState['cms']['pages']
}

const HomePage = ({pages, id, name, loadPage}: Props): JSX.Element => {
  useEffect(() => {
    console.log('reload')
    loadPage(id)
  }, [])
  const CMSPageId = `${id}_${name}`
  const pageContent = pages[CMSPageId]?.serverContent

  return (
    <>
      <Navbar />
      <div style={{margin: 100}}>
        {/* <TextField
          bifrostOptions={{
            pageName: 'StudiePage',
            fieldName: 'veryCoolTestField'
          }}
        /> */}
        {/* <RichTextField
          bifrostOptions={{
            pageName: 'HomePage',
            fieldName: 'body',
            blockTypeName: 'subheading'
          }}
        /> */}
        <CMSRichTextField
          content={pageContent?.body[0].value}
          bifrostOptions={{
            pageId: id,
            pageName: name,
            fieldName: 'body',
            blockId: 1,
            blockPosition: 0,
            blockType: 'subheading'
          }}
        />
        <CMSTextField
          content={pageContent?.body[1].value}
          bifrostOptions={{
            pageId: id,
            pageName: name,
            fieldName: 'body',
            blockId: 1,
            blockPosition: 1,
            blockType: 'heading'
          }}
        />
        <CMSTextField
          content={pageContent?.body[2].value}
          bifrostOptions={{
            pageId: id,
            pageName: name,
            fieldName: 'body',
            blockId: 2,
            blockPosition: 2,
            blockType: 'heading'
          }}
        />
        {/* <CMSTextField
          bifrostOptions={{
            pageId: '3',
            pageName: 'HomePage',
            fieldName: 'someotherfield'
          }}
        /> */}
      </div>

      {/* <button
        type="button"
        className="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top">
        <i className="fas fa-arrow-up"></i>
      </button> */}

      <Footer copyrightText={'snek'} copyrightUrl={'https://snek.at'} />
    </>
  )
}

export default HomePage
