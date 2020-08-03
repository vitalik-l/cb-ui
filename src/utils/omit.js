export default function omit(obj, params) {
  const result = { ...obj };
  params.map((p) => delete result[p]);
  return result;
}
