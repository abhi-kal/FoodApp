import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchBar = (props) => {
    return (
        <div className='search-block'>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-sx-12'>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => props.onSearch(e.target.value)}
                        value={props.value}
                        placeholder="Search by food id..."
                    />
                    {/* <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='' variant="outline-secondary" id="button-addon2"
                        onClick={(e) => props.onSearch(e.target.value)}>
                            Button
                        </Button>
                    </InputGroup> */}
                </div>
            </div>
        </div>
        // <input
        //   type="text"
        //   onChange={(e) => props.onSearch(e.target.value)}
        //   value={props.value}
        // />
    );
}

export default SearchBar;