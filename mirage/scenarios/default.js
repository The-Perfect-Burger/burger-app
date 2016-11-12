import { faker } from 'ember-cli-mirage';

export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  var users = server.createList('user', 50);
  var places = server.createList('place', 30);

  var items = server.createList('item', 50, {
    place: () => faker.random.arrayElement(places)
  });

  var reviews = server.createList('review', 50, {
    item: () => faker.random.arrayElement(items),
    author: () => faker.random.arrayElement(users)
  });

  var result = [];
  items.forEach(item => {
    var reviewsByItem = reviews.filter(review => {
      return review.item.id === item.id;
    });
    result.push(reviewsByItem);
  });

  result.filter(reviewsByItem => reviewsByItem.length !== 0).forEach(reviewsByItem => {
    server.create('post', {
      item: items.findBy('id', reviewsByItem[0].itemId),
      placeId: items.findBy('id', reviewsByItem[0].itemId).placeId,
      reviews: reviewsByItem
    });
  });

}
