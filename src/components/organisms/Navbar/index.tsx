import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  // MDBBtn,
  // MDBDropdown,
  // MDBDropdownToggle,
  // MDBDropdownMenu,
  // MDBDropdownItem,
  // MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

import {useState} from 'react'

import './index.scss'

import Logo from '@common/logo.svg';

interface Props {
  logoUrl?: string
  logoAlt?: string
  showMenu?: boolean
}

const Navbar = ({
  logoUrl = Logo,
  logoAlt = 'tuwien club'
}: Props) => {

  const [showNavbar, setShowNavbar] = useState(false);
  const activePath = window.location.pathname
  
  return (
    <>  
      <MDBNavbar className='navbar-main' expand='lg' dark>
        <MDBContainer>
          <MDBNavbarBrand href="/">
            <img className="nav-logo" src={logoUrl} alt={logoAlt} loading="lazy" />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showNavbar}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

              <MDBNavbarItem className='ms-2 font-weight-bold text-uppercase'>
                <MDBNavbarLink active={activePath === '/'} aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ms-2 font-weight-bold text-uppercase'>
                <MDBNavbarLink active={activePath === '/groups'} href="groups">Gruppen</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ms-2 font-weight-bold text-uppercase'>
                <MDBNavbarLink active={activePath === '/faq'} href="faq">FAQ</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ms-2 font-weight-bold text-uppercase'>
                <MDBNavbarLink active={activePath === '/rules'} href="rules">Regeln</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ms-2 font-weight-bold text-uppercase'>
                <MDBNavbarLink active={activePath === '/contact'} href="contact">Kontakt</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ms-2 font-weight-bold text-uppercase'>
                <MDBNavbarLink active={activePath === '/howto'} href="howto">How-To</MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
            {/* <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form> */}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar
