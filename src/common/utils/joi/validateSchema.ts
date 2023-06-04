import { ObjectSchema } from "joi";

const validateSchema = <T>(input: T, schema: ObjectSchema<T>) => {
  const { error, value } = schema.validate(input);
  if (error) throw new Error(error.message);
  return value;
};

export default validateSchema;
