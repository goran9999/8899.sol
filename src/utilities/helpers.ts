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

export const parseEventData = (event: any) => {
  const parsedEvent: any = {};
  Object.keys(event).forEach((key) => {
    switch (typeof event[key]) {
      case "bigint":
        parsedEvent[key] = event[key].toNumber();
        break;
      case "object":
        parsedEvent[key] = event[key].toString();
        break;
      default:
        parsedEvent[key] = event[key];
    }
  });
  return JSON.stringify(parsedEvent);
};

export const decodeKeypair = (value: string) => {
  const keypairArray: number[] = [];
  const splitValue = value.replaceAll("[", "").replaceAll("]", "").split(",");
  splitValue.forEach((v) => keypairArray.push(+v));
  return keypairArray;
};
