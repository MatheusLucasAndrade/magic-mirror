function snakeToCamelCase(input: any): any {
  if (input === null || typeof input !== "object") {
    return input;
  }

  if (Array.isArray(input)) {
    return input.map((item) => snakeToCamelCase(item));
  }

  if (typeof input === "object") {
    const camelCaseObj: any = {};

    for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) =>
          letter.toUpperCase()
        );
        camelCaseObj[camelCaseKey] = snakeToCamelCase(input[key]);
      }
    }

    return camelCaseObj;
  }

  return input;
}

export default snakeToCamelCase;
