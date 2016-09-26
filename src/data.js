let data = {
  about: {
    restaurant_name: 'Good Burger',
    restaurant_slogan: 'Welcome to Good Burger, Home of the Good Burger',
    restaurant_address: '123 Orange Soda Lane, Los Angeles, CA',
    restaurant_email: 'good_burgers@gmail.com',
    restaurant_phone: '555-555-1234'
  },
  menu: {
    burgers: [{name:'Good Burger', price: 1.99}, {name:'Gooder Burger', price: 2.99}, {name:'Goodest Burger', price: 3.99}],
    drinks: [{name:'Good Shake', price: 1.99}, {name:'Gooder Shake', price: 2.99}, {name:'Goodest Shake', price: 3.99}, {name: 'Orange Soda', price: 3.99}],
    fries: [{name:'Good Fries', price: 1.99}, {name:'Gooder Fries', price: 2.99}, {name:'Goodest Fries', price: 3.99}]
  },
  images: ['http://vignette2.wikia.nocookie.net/nickelodeon/images/6/6c/GoodBurger.png/revision/latest?cb=20130808192730', 'https://i.ytimg.com/vi/rVTw5LK1zsQ/hqdefault.jpg','http://i.giphy.com/Fo4qfhHPPAW0E.gif']
};

data.getMenu = function() {
  return this.menu;
};

data.getAbout = function() {
  return this.about;
};

data.getImages = function() {
  return this.images;
};

export default data;
