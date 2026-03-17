import { ErrorName } from "../common/enums/common.enums.error-names.js";
import getErrorConstructor from "../common/helpers/helpers.get-error-constructor.js";

function assertWithTypeguard<T, V>(
  value: V,
  typeguard: (value: unknown) => value is T,
  errorMessage: string,
  errorName: ErrorName,
) {
  if (!typeguard(value)) {
    throw new (getErrorConstructor(errorName))(errorMessage);
  }

  return value;
}

export { assertWithTypeguard };
