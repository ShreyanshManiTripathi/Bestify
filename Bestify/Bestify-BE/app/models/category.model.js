module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("categories", {
    categoryId: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1,
    },
    categoryName: {
      type: Sequelize.STRING,
    },
  });

  return Category;
};
