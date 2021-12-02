const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    //if the page or the link is not found
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];
    //if breed is  not found
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(null, `${breedName} not found!`);
    }

  });
};

module.exports = { fetchBreedDescription };

































/* const data = JSON.parse(body);
//console.log(data.description);
console.log('error:', error) //print out the error if occured
//console.log('body: ', body.description)
//console.log('typeOfBody: ',typeof body) */