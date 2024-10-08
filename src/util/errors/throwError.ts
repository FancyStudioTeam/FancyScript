import type { ResultErrorType } from "@types";
import { YAMLCordError } from "./Errors.js";

export const throwError = (error: ResultErrorType) => {
  throw new YAMLCordError(error[0], ...error.slice(1));
};
