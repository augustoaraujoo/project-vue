module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Posts.create({
    name: "true",
    year: 23,
    title: "abx",
  });
  return Posts;
};
