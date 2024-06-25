const Favorite = require("./Favorite");
const Post = require("./Post");
const User = require("./User");

User.hasMany(Post)
Post.belongsTo(User)

User.belongsToMany(Post, { through: Favorite, foreignKey: 'userId' })
Post.belongsToMany(User, { through: Favorite, foreignKey: 'postId' })