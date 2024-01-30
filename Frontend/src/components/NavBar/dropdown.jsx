import React from 'react'
import Profile from './../Profile/Profile';

const dropdown = () => {
  return (
    <div>
        Profile
        <div className="profile_side" onClick={handleProfileSideClick} ref={dropdownRef}>
          <Dropdown show={clicked} onClose={() => setClicked(false)} drop="end">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="button_profile">
              <img src={profileLogo} alt="Profile" className="profile_img" />
              <span className="profile_name">Hi, Judes!</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <FaRegUserCircle /> <span className="dropdown-text">Profile</span>
              </Dropdown.Item>
              <Dropdown.Item
                as={NavLink}
                to="/certificate"
                onClick={closeMobileNavbar}
              >
                <BsCardChecklist /> <span className="dropdown-text">My Certificate</span>
              </Dropdown.Item>
              <Dropdown.Item
                as={NavLink}
                to="/landing"
                onClick={closeMobileNavbar}
              >
                <FiLogOut /> <span className="dropdown-text">Log Out</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    </div>
  )
}

export default dropdown;