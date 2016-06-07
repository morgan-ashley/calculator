var eventUtility = {
	addEvent: (function(){
		if(typeof addEventListener === "function") {
			return function(obj, evt, fn) {
				obj.addEventListener(evt, fn, false);
			};
		} else {
			return function(obj, evt, fn) {
				obj.attachEvent("on" + evt, fn);
			};
		}
	}()),

	removeEvent: (function(){
		if(typeof removeEventListener === "function") {
			return function(obj, evt, fn) {
				obj.removeEventListener(evt, fn, false);
			};
		} else {
			return function(obj, evt, fn) {
				obj.detachEvent("on" + evt, fn);
			};
		}
	}()),

//determines whether to use standards-based code of IE's proprietary code 
	getTarget: (function() {
		if(typeof addEventListener !== "undefined") {
			return function(event) {
				return event.target
			}
		} else {
			return function(event) {
				return event.srcElement;
			}
		}
	}()),

	preventDefault: (function() {
		if(typeof addEventListener !== "undefined") {
			return function(event){
				event.preventDefault();
			}
		} else {
			return function(event) {
				event.returnValue = false;
			}
		}

	}())
} ;