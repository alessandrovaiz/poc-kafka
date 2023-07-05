function split(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [arg] = args;
    const argSplitted = arg.split("");
    originalMethod.apply(this, [argSplitted]);
  };
}

function reverse(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const [arg] = args;
    const argReversed = arg.reverse();
    originalMethod.apply(this, [argReversed]);
  };
}
function join(char = "") {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const [arg] = args;
      const argJoined = arg.join(char);
      originalMethod.apply(this, [argJoined]);
    };
  };
}

class test {
  @split
  @reverse
  @join("_")
  print(str: string) {
    console.log(str);
  }
}

const testClass = new test();
testClass.print("hello!");

/** study function composition */
