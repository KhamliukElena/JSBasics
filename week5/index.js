module.exports = {
    subList: {},
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) { //подписка пользователя на событие
		if (subscriber != undefined) {  
			if(!this.subList.hasOwnProperty(event)) {
				this.subList[event] = [];
			}
			this.subList[event].push({
				subscriber: subscriber,
				handler: handler.bind(subscriber)
			});
        }
        return this;
	},

	/**
	 * @param {String} event
	 * @param {Object} subscriber
	 */
	off: function (event, subscriber) {
		if (this.subList[event] != undefined) {
            if (this.subList.hasOwnProperty(event) && subscriber === undefined) {
			    this.subList[event].splice(0, this.subList[event].length);
		    } else {
                if (this.subList.hasOwnProperty(event)) {
                    for (var i = this.subList[event].length - 1; i >= 0; --i) {
                        if(this.subList[event][i].subscriber === subscriber) {
                            this.subList[event].splice(i, 1);
                        }
                    }
                }
            }
        }
        return this;
	},

	/**
	 * @param {String} event
	 */
	emit: function (event) {
		if (this.subList[event] != undefined && this.subList[event].length > 0) {
			for(var i = 0; i < this.subList[event].length; i++){
				this.subList[event][i].handler();
			}
		}
	 	return this;
	}
};
