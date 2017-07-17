export default function omit(obj, params) {
    let result = Object.assign({}, obj);
    for (let path of params) {
        if (obj.hasOwnProperty(path)) delete result[path];
    }
    return result;
}