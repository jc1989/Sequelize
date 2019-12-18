const models = require('./models');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let new_album = [];

readline.question(`Album name?`, (name) => {
  console.log(`album name is: ${name}`)
  new_album['name'] = name;

  readline.question(`Album name?`, (year) => {
    console.log(`album name is: ${year}`)
    new_album['name'] = year;

    readline.question(`Artist ID?`, (artist_ID) => {
      console.log(`album name is: ${artist_ID}`)
      new_album['name'] = artist_ID;

      models.album.create({ name: new_album['name'], year: new_album['year'], artist_ID: new_album[artist_ID] })
        .then(function (album) {
          console.log(album)
        });
    readline.close();
    })
  })
})
