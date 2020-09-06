/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function (date) {
    dateObj = {time: new Date(date)} 

    Object.defineProperty(dateObj, "value", {
        get: function() {
            function digits (num) {
                return num < 10 ? '0'+num : num;
            }
            return this.time.getFullYear() + '-' + digits(this.time.getMonth()+1)  + '-' + digits(this.time.getDate()) + ' ' + digits(this.time.getHours()) + ':' + digits(this.time.getMinutes());
        }
    });

    Object.defineProperty(dateObj, "add", {
        value: function(delta, unit) {
            if (delta < 0)
                throw new TypeError('Incorrect Params');
            switch (unit) {
                case "years": this.time = new Date(this.time.getFullYear() + delta, this.time.getMonth(), this.time.getDate(), this.time.getHours(), this.time.getMinutes()); break;
                case "months": this.time = new Date(this.time.getFullYear(), this.time.getMonth() + delta, this.time.getDate(), this.time.getHours(), this.time.getMinutes()); break;
                case "days": this.time = new Date(this.time.getFullYear(), this.time.getMonth(), this.time.getDate() + delta, this.time.getHours(), this.time.getMinutes()); break;
                case "hours": this.time = new Date(this.time.getFullYear(), this.time.getMonth(), this.time.getDate(), this.time.getHours() + delta, this.time.getMinutes()); break;
                case "minutes": this.time = new Date(this.time.getFullYear(), this.time.getMonth(), this.time.getDate(), this.time.getHours(), this.time.getMinutes() + delta); break;
                default: throw new TypeError('Incorrect Params');
            }
            return this;
        }
    });

    Object.defineProperty(dateObj, "subtract", {
        value: function(delta, unit) {
            if (delta<0)
                throw new TypeError('Incorrect Params');
            switch (unit) {
                case "years": this.time = new Date(this.time.getFullYear() - delta, this.time.getMonth(), this.time.getDate(), this.time.getHours(), this.time.getMinutes()); break;
                case "months": this.time = new Date(this.time.getFullYear(), this.time.getMonth() - delta, this.time.getDate(), this.time.getHours(), this.time.getMinutes()); break;
                case "days": this.time = new Date(this.time.getFullYear(), this.time.getMonth(), this.time.getDate() - delta, this.time.getHours(), this.time.getMinutes()); break;
                case "hours": this.time = new Date(this.time.getFullYear(), this.time.getMonth(), this.time.getDate(), this.time.getHours() - delta, this.time.getMinutes()); break;
                case "minutes": this.time = new Date(this.time.getFullYear(), this.time.getMonth(), this.time.getDate(), this.time.getHours(), this.time.getMinutes() - delta); break;
                default: throw new TypeError('Incorrect Params');
            }
            return this;
        }
    });

    return dateObj;
};
