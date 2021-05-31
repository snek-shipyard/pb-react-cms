import {useEffect} from 'react'

import {CMSRichTextField, CMSTextField} from '@cms/editable'

import {Navbar, Footer} from '@components/organisms'

import {RootState} from '@store/store'

import "./index.scss"

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
        <h1 className="cms-center mt-5">
          <CMSTextField
            content={pageContent?.body[0].value}
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
        </h1>
        <div className="cms-center mt-5">
          <CMSRichTextField
            content={pageContent?.body[1].value}
            editableOptions={{
              pageId: id,
              pageName: name,
              fieldName: 'body',
              block: {
                id: 1,
                position: 1,
                type: 'subheading'
              }
            }}
          />
        </div>

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
