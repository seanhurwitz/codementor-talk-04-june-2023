import { Model, ModelAttributeColumnOptions } from "sequelize";
declare const sequelizeIntegerOptional: <T extends Model<any, any>>(primaryKey?: boolean, autoIncrement?: boolean) => ModelAttributeColumnOptions<T>;
declare const sequelizeIntegerRequired: <T extends Model<any, any>>(primaryKey?: boolean, autoIncrement?: boolean) => ModelAttributeColumnOptions<T>;
declare const sequelizeStringOptional: <T extends Model<any, any>>() => ModelAttributeColumnOptions<T>;
declare const sequelizeStringRequired: <T extends Model<any, any>>() => ModelAttributeColumnOptions<T>;
export { sequelizeIntegerOptional, sequelizeIntegerRequired, sequelizeStringOptional, sequelizeStringRequired, };
//# sourceMappingURL=utils.d.ts.map