export enum ErrorCodes {
  UNDOCUMENTED_ERROR = 0,

  INVALID_YAML_DATA = 10001,
  INVALID_MAX_STRING_LENGTH = 10002,
  INVALID_MIN_STRING_LENGTH = 10003,
  INVALID_MAX_ARRAY_LENGTH = 10004,
  INVALID_MIN_ARRAY_LENGTH = 10005,
  INVALID_VALUE_TYPE = 10006,
  INVALID_MAX_NUMBER_VALUE = 10007,
  INVALID_MIN_NUMBER_VALUE = 10008,
  INVALID_STRING_REGEX = 10009,

  UNKNOWN_GLOBAL_PROPERTY = 20001,
  UNKNOWN_GLOBAL_FUNCTION = 20002,
}
