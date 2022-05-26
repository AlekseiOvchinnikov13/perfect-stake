// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {COINS_DATA} from '../../data/coins';
import axios from 'axios';

export const getCoinsMarkets = () => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COINS_DATA.map(data => data.id)}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  return axios.get(url)
    .then(res => res.data)
    .catch(() => []);
};