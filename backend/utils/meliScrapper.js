const axios = require('axios');
const cheerio = require('cheerio');

const meliScrapper = (category, query) => {
  const categoryUrl = {
    'refrigerator': `https://lista.mercadolivre.com.br/eletrodomesticos/refrigeracao/geladeiras/${query}_NoIndex_True#D[A:${query},on]`,
    'tv': `https://lista.mercadolivre.com.br/eletronicos-audio-video/televisores/${query}_NoIndex_True#D[A:${query},on]`,
    'mobile': `https://lista.mercadolivre.com.br/celulares-telefones/celulares-smartphones/${query}_NoIndex_True#D[A:${query},on]`,
  };

  return axios.get(categoryUrl[category])
  .then((response) => {
    const $ = cheerio.load(response.data); 
    const products = [];
    $('.ui-recommendations-card').each((i, el) => {
      const product = {
        'title': $(el).find('.ui-recommendations-card__title').text(),
        'link': $(el).find('.ui-recommendations-card__link').attr('href'),
        'price': $(el).find('.andes-money-amount__fraction').text(),
        'image': $(el).find('.ui-recommendations-card__image').attr('src'),
      };
      products.push(product);
    });
    return products;
  })
  .catch((error) => {
    throw error;
  });
}

module.exports = meliScrapper;
