const request = require("request");
const { argv } = require("process");

const breedName = argv.slice(2)[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  //if the page or the link is not found
  if (error) {
    console.log('Page not found!', error);
    return;
  }
  const data = JSON.parse(body);
  const breed = data[0];
  //if breed is  not found

  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`${breedName} not found!`);
  }

});


































/* const data = JSON.parse(body);
//console.log(data.description);
console.log('error:', error) //print out the error if occured
//console.log('body: ', body.description)
//console.log('typeOfBody: ',typeof body) */
