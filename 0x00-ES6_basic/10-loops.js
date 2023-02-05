export default function appendToEachArrayValue(array, appendString) {
  const holder = [];
  for (const value of array) {
    holder.push(appendString + value);
  }

  return holder;
}
