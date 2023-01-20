export const getInputFieldType = (type: string) => {
  switch (type) {
    case "u64":
    case "u32":
    case "u8":
    case "u128":
    case "u16":
    case "u256":
    case "i8":
    case "i16":
    case "i64":
    case "i128":
    case "1256":
      return "number";
    case "publicKey":
    case "string":
      return "string";
  }
};
