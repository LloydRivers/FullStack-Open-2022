type Family<T> = {
  parents: [T, T];
  mate: T;
  children: T[];
};

const logFamily = (obj: Family<any>): void => {
  console.log(obj.parents);
};

const familyObject: Family<string> = {
  parents: ["Billy", "Milly"],
  mate: "Bobby",
  children: ["Timmy, Tommy"],
};
