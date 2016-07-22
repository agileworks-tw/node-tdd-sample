'use strict';

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: (models) => {
      }
    }
  });

  return Post;
};
