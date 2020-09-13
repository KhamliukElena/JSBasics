/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    if(arguments.length == 1) return collection.slice();
    var col = collection.slice();  
    var operations = Array.from(arguments).slice(1);   
    var res = operations.sort().reduce(function(accum, curVal) {
      return  curVal(accum);    
    },col); 
    return res;
}

/**
 * @params {String[]}
 */
function select() {
    var args = Array.from(arguments); 
    return function select(collection) {
      var res = collection.reduce(function (accum, curVal) {  
        var selectedFields = {};
        args.forEach(function(prop) {
          if(curVal.hasOwnProperty(prop)) {  
            selectedFields[prop] = curVal[prop]        
          }     
        })
        accum.push(selectedFields) 
        return accum;
      }, [])  
      return res;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filterIn(collection) {
        var filteredCollection = [];    
        collection.forEach(function(item) {        
          if(item.hasOwnProperty(property)) {
            if(values.includes(item[property])) {
              filteredCollection.push(item)        
            }
          }
        })      
        return filteredCollection;
    }  
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};