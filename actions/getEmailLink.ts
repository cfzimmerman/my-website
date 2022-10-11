const baseArr = [
  111, 99, 107, 110, 118, 113, 60, 101, 104, 124, 107, 111, 111, 103, 116, 111,
  99, 112, 66, 101, 113, 110, 110, 103, 105, 103, 48, 106, 99, 116, 120, 99,
  116, 102, 48, 103, 102, 119,
];

// Lol this should give the email scrapers a headache

const getEmailLink = (): string => {
  var output = "";
  baseArr.forEach((item) => {
    output += String.fromCharCode(item - 2);
  });

  return output;
};

export default getEmailLink;
