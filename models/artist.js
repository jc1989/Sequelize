'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER,
    year: DataTypes.INTEGER
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
  };
  return artist;
};