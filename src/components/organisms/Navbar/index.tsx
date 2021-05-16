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

interface Props {
  logoUrl?: string
  logoAlt?: string
  showMenu?: boolean
}

const Navbar = ({
  logoUrl = 'https://www.tuwien.club/images/logo.png',
  logoAlt = 'tuwien club'
}: Props) => {

  const [showNavbar, setShowNavbar] = useState(false);
  
  return (
    <>  
      <MDBNavbar className='navbar-main' expand='lg' dark>
        <MDBContainer>
          <MDBNavbarBrand href="#">
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

              <MDBNavbarItem className='ml-3 font-weight-bold text-uppercase'>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ml-3 font-weight-bold text-uppercase'>
                <MDBNavbarLink href="groups.html">Groups</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ml-3 font-weight-bold text-uppercase'>
                <MDBNavbarLink href="faq.html">FAQ</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ml-3 font-weight-bold text-uppercase'>
                <MDBNavbarLink href="rules.html">Regeln</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ml-3 font-weight-bold text-uppercase'>
                <MDBNavbarLink href="contact.html">Kontakt</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className='ml-3 font-weight-bold text-uppercase'>
                <MDBNavbarLink href="howto.html">How-To</MDBNavbarLink>
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
