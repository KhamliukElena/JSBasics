// Телефонная книга
var phoneBook = {};

/**

* @param {String} command

* @returns {*}

*/
function add(name, phones) {
    var arrayPhone = phones.split(',');
    if (phoneBook.hasOwnProperty(name)) {
        var numbersPhone = phoneBook[name].concat(arrayPhone);
        phoneBook[name] = numbersPhone;
    } 
    else {
    phoneBook[name] = arrayPhone;
    }
}
    
function remove(nameRemove) {
    for (var key in phoneBook) {
        if (phoneBook[key].includes(nameRemove)) {
            if (phoneBook[key].length > 1) {
                phoneBook[key].splice((phoneBook[key].indexOf(nameRemove)),1);
            } else {
                delete phoneBook[key];
            }
            return true;
        }
    }
    return false;
}
    
function show() {
    var stringArray = [];
    var keys = Object.keys(phoneBook);
    keys.sort();
    if (keys.length > 0) {
        for (var i = 0; i < keys.length; i++) {
            resultString = keys[i] + ': ' + phoneBook[keys[i]].join(', ');
            stringArray.push(resultString);
        }
        return stringArray;
    }
    else return stringArray;
}

module.exports = function (command) {

    var word = command.split(' ')[0];
    switch(word){
        case 'ADD': var name = command.split(' ')[1], phones = command.split(' ')[2]; return add(name,phones);
        case 'SHOW': return show();
        case 'REMOVE_PHONE': var nameRemove = command.split(' ')[1]; return remove(nameRemove);
    }
};
