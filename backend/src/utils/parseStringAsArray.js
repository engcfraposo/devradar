export default function parseStringAsArray(arraysAsString) {
  return arraysAsString.split(",").map((tech) => tech.trim());
}
