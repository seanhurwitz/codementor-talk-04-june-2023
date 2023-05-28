import { DataTypes, Model, ModelAttributeColumnOptions } from "sequelize";

const sequelizeIntegerOptional = <T extends Model<any, any>>(
  primaryKey = false,
  autoIncrement = false
): ModelAttributeColumnOptions<T> => ({
  type: DataTypes.INTEGER,
  autoIncrement,
  primaryKey,
});

const sequelizeIntegerRequired = <T extends Model<any, any>>(
  primaryKey = false,
  autoIncrement = false
): ModelAttributeColumnOptions<T> => ({
  ...sequelizeIntegerOptional(primaryKey, autoIncrement),
  allowNull: false,
});

const sequelizeStringOptional = <
  T extends Model<any, any>
>(): ModelAttributeColumnOptions<T> => ({
  type: DataTypes.STRING,
});

const sequelizeStringRequired = <
  T extends Model<any, any>
>(): ModelAttributeColumnOptions<T> => ({
  type: DataTypes.STRING,
  allowNull: false,
});

export {
  sequelizeIntegerOptional,
  sequelizeIntegerRequired,
  sequelizeStringOptional,
  sequelizeStringRequired,
};
