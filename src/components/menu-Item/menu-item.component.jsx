import React from "react";
import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate(); // Use the useNavigate hook to access the navigation function

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(linkUrl)} // Use navigate to change routes
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
