import React, {useState} from 'react';
import {Dropdown} from "react-bootstrap";

const MobileNav = ({handleClick}) => {

    const [selectedItem, setSelectedItem] = useState('Dropdown Button'); // 초기 값은 Dropdown Button 입니다.

    const handleDropdownSelect = (eventKey, event) => {
        setSelectedItem(event.target.innerHTML); // Dropdown item의 텍스트를 가져와서 Dropdown Toggle의 텍스트로 설정합니다.
    };

    return (
        <Dropdown onSelect={handleDropdownSelect} className="position-sticky mb-3 px-0" style={{top:"64px", zIndex:"1"}}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 py-2" style={{borderRadius:"0", }}>
                {selectedItem}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100" style={{borderRadius:"0", transform:"translate(0px 0px)!important" }}>
                <Dropdown.Item href="#item-1" onClick={handleClick}>Item 1</Dropdown.Item>
                <Dropdown.Item href="#item-2" onClick={handleClick}>Item 2</Dropdown.Item>
                <Dropdown.Item href="#item-3" onClick={handleClick}>Item 3</Dropdown.Item>
                <Dropdown.Item href="#item-4" onClick={handleClick}>Item 4</Dropdown.Item>
                <Dropdown.Item href="#item-5" onClick={handleClick}>Item 5</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default MobileNav;
