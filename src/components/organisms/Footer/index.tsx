import { MDBFooter } from 'mdb-react-ui-kit'

// import React from 'react'

import './index.scss'

interface Props {
  copyrightText: string
  copyrightUrl: string
}

const Footer = ({ copyrightText, copyrightUrl }: Props) => {
  return (
    <MDBFooter className="page-footer font-small">
      <div className="footer-copyright text-center py-2">
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className="text-white" href={copyrightUrl}>
          {copyrightText}
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
