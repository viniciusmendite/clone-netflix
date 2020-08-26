import React, { useEffect, useState } from 'react';

import './styles.css';
import Tmdb from '../../services/Tmdb';

import MovieRow from '../../components/MovieRow';

export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
