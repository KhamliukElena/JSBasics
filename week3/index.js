/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function (date) {
    var time = new Date(date);

    Object.defineProperty(Date, "value", {
        get: function() {
            function digits (num) {
                return num < 10 ? '0'+num : num;
            }
            var month = digits(this.getMonth()+1);
            var data = digits(this.getDate());
            var hours = digits(this.getHours());
            var minutes = digits(this.getMinutes());
            return '"' + this.getFullYear() + '-' + month  + '-' + data + ' ' + hours + ':' + minutes;
        },
        writable: true
    });

    Object.defineProperty(Date, "add", {
        set: function() {
            if (delta < 0 || (unit!="years" && unit!="months" && unit!="days" && unit!="hours" && unit!="minutes"))
                throw new TypeError('Incorrect params');

            return this;
        }
    });

    Object.defineProperty(Date, "subtract", {
        set: function() {
            if (delta < 0 || (unit!="years" && unit!="months" && unit!="days" && unit!="hours" && unit!="minutes"))
                throw new TypeError('Incorrect params');

            return this;
        }
    });

    return time.value;

};
