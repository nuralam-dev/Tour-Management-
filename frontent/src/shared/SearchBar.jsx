import React, { useRef } from "react";
import "./search-bar.css";
import { Col, FormGroup } from "reactstrap";

const SearchBar = () => {
  const locationRef = useRef(null);
  const distanceRef = useRef(null);
  const maxGroupSizeRef = useRef(null);

  const searchHandler = (event) => {
    event.preventDefault();
    
    if (!locationRef.current || !distanceRef.current || !maxGroupSizeRef.current) {
      return alert('An error occurred. Please try again.');
    }

    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location.trim().length === 0 || distance <= 0 || maxGroupSize <= 0) {
      return alert('All fields are required');
    }
    
    console.log(location, distance, maxGroupSize);
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <form className="d-flex align-items-center gap-4" onSubmit={searchHandler}>
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
                aria-label="Location input"
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance (K/m)"
                ref={distanceRef}
                aria-label="Distance input"
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input
                type="number"
                placeholder="0"
                ref={maxGroupSizeRef}
                aria-label="Max group size input"
              />
            </div>
          </FormGroup>

          <span className="search_icon" type="submit">
            <i className="ri-search-line"></i>
          </span>
        </form>
      </div>
    </Col>
  );
};

export default SearchBar;
