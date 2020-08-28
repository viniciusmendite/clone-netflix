import React, { useEffect, useState } from 'react';

import './styles.css';
import Tmdb from '../../services/Tmdb';

import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // buscando lista de filmes
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      // buscando filmes em destaque
      const originals = list.filter((item) => item.slug === 'originals');
      const randomChose = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosen = originals[0].items.results[randomChose];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
