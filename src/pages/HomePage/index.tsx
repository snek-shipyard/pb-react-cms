import {useEffect} from 'react'

import {CMSRichTextField, CMSTextField} from '@cms/editable'

import {Navbar, Footer} from '@components/organisms'

import {RootState} from '@store/store'

interface Props {
  loadPage: (id: string) => void
  id: string
  name: string
  pages: RootState['cms']['pages']
}

const HomePage = ({pages, id, name, loadPage}: Props): JSX.Element => {
  useEffect(() => {
    loadPage(id)
  }, [])
  const CMSPageId = `${id}_${name}`
  const pageContent = pages[CMSPageId]?.serverContent

  return (
    <>
      <Navbar />

      <div className="container pt-5">
        <CMSRichTextField
          className="text-center pt-4"
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
        <CMSTextField
          className="text-center pt-5"
          content={pageContent?.body[1].value}
          editableOptions={{
            pageId: id,
            pageName: name,
            fieldName: 'body',
            block: {
              id: 1,
              position: 1,
              type: 'heading'
            }
          }}
        />
        {/* <CMSTextField
          content={pageContent?.body[2].value}
          editableOptions={{
            pageId: id,
            pageName: name,
            fieldName: 'body',
            block: {
              id: 2,
              position: 2,
              type: 'heading'
            }
          }}
        /> */}
      </div>

      <Footer
        copyrightText={'CC'}
        copyrightUrl={'mailto:admin@tuwien.club'}
      />
    </>
  )
}

export default HomePage
