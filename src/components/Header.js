import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Logo from '../assets/logo__1_-removebg-preview.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className='navbarBrandDiv d-none d-lg-block'>
        <NavbarBrand className='navbarBrand' href='/'>
          <img src={Logo} width='144' className='float-start' />
          <div className='navbarBrandText'>
            <h1>Kardia Classical</h1>
            <h1>School</h1>
          </div>
        </NavbarBrand>
      </div>

      <Navbar light sticky='top' expand='lg'>
        <a href='/' className='smallNavbarBrand'>
          <img src={Logo} className='me-lg-5 d-lg-none smallNavbarBrandLogo' />
          <div className='smallNavbarBrandText'>
            <h1 className='d-lg-none'>Kardia Classical</h1>
            <h1 className='d-lg-none'>School</h1>            
          </div>
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/Beginning'>
                      Our Beginning
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/faculty-staff'>
                      Faculty, Staff and School Board
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/contact'>
                      Contact
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/employment'>
                      Employment
                    </NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Admissions
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/programs'>
                      Program Options
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/whatispp'>
                      What is a <em>Parent Partnership</em>?
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/enrollment'>
                      Enrollment
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/tuition'>
                      Tuition and Fees
                    </NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Fundraising
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/auction'>
                      Annual Auction
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/fundraising'>
                      Fundraising Opportunities
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/donations'>
                      Donations
                    </NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Current Families
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/sycamore'>
                      Sycamore Login
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/uniforms'>
                      Uniforms
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href='/calendar'>
                      Calendar
                    </NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Blog
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                  <NavItem>
                    <NavLink className='navlink-blog' href='/blog' >
                      <strong>Our Blog </strong>
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavItem>
                    <NavLink className='navlink-blog' href='/july2023'>
                      AI in Education
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink className='navlink-blog' href='/july2022'>
                      Martial Arts 
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink className='navlink-blog'  href='/june2022'>
                      Retaining Learning
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink className='navlink-blog'  href='/june2022siblings'>
                    Keep Younger Siblings Busy!
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink className='navlink-blog'  href='/july2021'>
                      Music
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink className='navlink-blog'  href='/june2021'>
                      "Parent Partnership"
                    </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink className='navlink-blog'  href='/may2021'>
                    Classical?
                    </NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <a href='/'>
              <img width='50' src={Logo} className='ms-md-5 d-none d-lg-inline' />
            </a>

          </Nav>
        </Collapse>
      </Navbar>
    </>

  );
}

export default Header;