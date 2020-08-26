import React, { useEffect } from 'react';

import Tmdb from '../../services/Tmdb';

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
    };

    loadAll();
  }, []);
  return <h1>hello</h1>;
};
