module.exports = (sequelize, DataTypes) => {
  const Coworking = sequelize.define('Coworking', {
    coworkingName: DataTypes.STRING,
    city: DataTypes.STRING,
    location: DataTypes.STRING,
    pdf: DataTypes.STRING,
    multipleImages: DataTypes.JSON, // Store JSON array as JSON (instead of TEXT)
    slug: { type: DataTypes.STRING, unique: true },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    keywords: DataTypes.STRING,
  });

  return Coworking;
};
