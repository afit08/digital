import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _roles from  "./roles.js";
import _user_roles from  "./user_roles.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const roles = _roles.init(sequelize, DataTypes);
  const user_roles = _user_roles.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  user_roles.belongsTo(roles, { as: "usro_role", foreignKey: "usro_role_id"});
  roles.hasMany(user_roles, { as: "user_roles", foreignKey: "usro_role_id"});
  user_roles.belongsTo(users, { as: "usro_user", foreignKey: "usro_user_id"});
  users.hasMany(user_roles, { as: "user_roles", foreignKey: "usro_user_id"});

  return {
    roles,
    user_roles,
    users,
  };
}
