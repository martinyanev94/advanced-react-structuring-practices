function extendObjects(destination, source) {
  for (const prop in source) {
    if (source[prop] && typeof source[prop] === "object") {
      destination[prop] = destination[prop] || {};
      extendObjects(destination[prop], source[prop]);
    } else {
      destination[prop] = source[prop];
    }
  }
}

const myAppNamespace = {};
extendObjects(myAppNamespace, {
  utils: {
    math: {
      add(a, b) {
        return a + b;
      },
    },
  },
});
