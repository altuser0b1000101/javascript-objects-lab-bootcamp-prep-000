function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign ({}, object, {[key] : value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
const object = { key: '3' };
 
function deleteFromObjectByKey(object, key){
  object = (obj, key) => {
  newObject = Object.assign({}, key)
  delete object[key]
  return newObject;
}

}
function destructivelyDeleteFromObjectByKey(object, key){
delete object[key];
return object;
}