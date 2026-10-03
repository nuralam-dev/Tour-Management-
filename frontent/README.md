# 🌍 Tour Management System (MERN Stack)

A full-featured, responsive, and modern Travel & Tour Booking web application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to explore various travel packages, view tour details, and search for destinations seamlessly.

---

## 🔗 Live Links

* **Live Demo:** [https://tour-management-eight-iota.vercel.app](https://tour-management-eight-iota.vercel.app/home)
* **GitHub Repository:** [https://github.com/nuralam-dev/Tour-Management-](https://github.com/nuralam-dev/Tour-Management-)

---

## 📌 Project Overview

The **Tour Management System** is designed to provide travelers with an intuitive and visually appealing interface to discover their next dream destination. Key features of the application include:

* **Interactive Home Page:** Eye-catching banner, featured tour destinations, and experience highlights.
* **Tour Showcase & Search:** Users can filter and search for tour packages based on location, distance, and group size.
* **Tour Details Page:** In-depth information for individual tours, including pricing, reviews, and interactive photo galleries.
* **Responsive Design:** Optimized for seamless performance across desktops, tablets, and mobile devices.
* **Fast Navigation:** Built as a Single Page Application (SPA) using React Router for smooth client-side routing.

---

## 🛠️ Tech Stack & Technologies Used

### **Frontend**
* **React.js** - UI Library
* **React Router DOM** - Client-side routing
* **Reactstrap & Bootstrap 5** - Responsive layout and UI components
* **Remixicon** - Icon library
* **Slick Carousel** - Interactive image sliders and card carousels
* **CSS3** - Custom styling

### **Backend**
* **Node.js** - JavaScript runtime environment
* **Express.js** - Backend web framework
* **MongoDB & Mongoose** - Database and object data modeling

### **Deployment & Hosting**
* **Vercel** - Deployment platform for frontend and serverless API endpoints

---

## 📁 Project Structure

```text
Tour-Management/
├── backend/            # Express.js API & MongoDB Server
│   ├── models/         # Database Schema models
│   ├── index.js        # Server Entry Point
│   └── vercel.json     # Vercel deployment configuration
│
└── frontent/           # React Frontend Application
    ├── public/         # Public static assets & Vercel rewrite rules
    └── src/
        ├── assets/     # Images & media resources
        ├── components/ # Reusable UI components (Header, Footer, etc.)
        ├── pages/      # Route pages (Home, Tour, TourDetails, About)
        ├── router/     # React Router routing setup
        ├── styles/     # Custom CSS styles
        └── utils/      # Helper utilities & calculations