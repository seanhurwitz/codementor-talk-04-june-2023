import {
  BareObject,
  PaginationData,
  PaginationInput,
} from "common/interfaces/common";
import { Model, ModelDefined } from "sequelize";

interface MysqlRowSearchSchema<
  A extends BareObject,
  CA extends BareObject,
  W extends BareObject
> {
  model: ModelDefined<A, CA>;
  where: W;
  pagination: PaginationInput;
}

const mysqlSearchRows = async <
  A extends BareObject,
  CA extends BareObject,
  W extends BareObject
>({
  model,
  where,
  pagination,
}: MysqlRowSearchSchema<A, CA, W>): Promise<PaginationData<Model<A, CA>>> => {
  const { rows, count } = await model.findAndCountAll({
    where,
    ...pagination,
  });
  return { data: rows, pagination: { ...pagination, total: count } };
};

export { mysqlSearchRows };
