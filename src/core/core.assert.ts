import { ErrorName } from "../common/index.js";
import getErrorConstructor from "../common/helpers/helpers.get-error-constructor.js";

function assert<T>(value: T, errorMessage: string, errorName: ErrorName) {
  if (value === null || value === undefined || value === false) {
    throw new (getErrorConstructor(errorName))(errorMessage);
  }

  return value as NonNullable<T>;
}

export { assert };
