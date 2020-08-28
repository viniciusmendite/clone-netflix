import React from 'react';

import './styles.css';

import NavigationBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigationNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left">
        <NavigationBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right">
        <NavigationNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, index) => (
              <div key={index} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
