import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/tours.css";

const tourData = [
  {
    id: "01",
    title: "Westminster Abbey",
    city: "London",
    price: 99,
    maxGroupSize: 10,
    rating: 4.5,
    reviewsCount: 12,
    photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800",
    featured: true,
  },
  {
    id: "02",
    title: "Bali Spring Way",
    city: "Indonesia",
    price: 150,
    maxGroupSize: 8,
    rating: 4.8,
    reviewsCount: 25,
    photo: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains",
    city: "Switzerland",
    price: 220,
    maxGroupSize: 5,
    rating: 4.9,
    reviewsCount: 18,
    photo: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=800",
    featured: false,
  },
  {
    id: "04",
    title: "Beautiful Beach",
    city: "Thailand",
    price: 130,
    maxGroupSize: 12,
    rating: 4.6,
    reviewsCount: 30,
    photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    featured: false,
  },
];

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTours = tourData.filter(
    (tour) =>
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tours__page">
      {/* Hero Banner */}
      <div className="tours__hero">
        <h1>All Destinations</h1>
        <p>Explore top places & discover your next adventure</p>
      </div>

      <div className="tours__container">
        {/* Search Bar */}
        <div className="tours__search-bar">
          <i className="ri-search-line"></i>
          <input
            type="text"
            placeholder="Search by title or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tour Grid */}
        <div className="tours__grid">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <div key={tour.id} className="tour__card">
                <div className="tour__img">
                  <img src={tour.photo} alt={tour.title} />
                  {tour.featured && <span>Featured</span>}
                </div>

                <div className="tour__body">
                  <div className="tour__location-rating">
                    <span className="tour__location">
                      <i className="ri-map-pin-line"></i> {tour.city}
                    </span>
                    <span className="tour__rating">
                      <i className="ri-star-fill"></i> {tour.rating} ({tour.reviewsCount})
                    </span>
                  </div>

                  <h5 className="tour__title">
                    <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
                  </h5>

                  <div className="tour__footer">
                    <h5>
                      ${tour.price} <span>/per person</span>
                    </h5>
                    <Link to={`/tours/${tour.id}`} className="btn__book">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="no__result">No tours found!</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tours;