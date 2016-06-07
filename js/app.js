var calculator = {
	resultField : document.getElementById("results"),
	reset: function() {
		this.resultField.innerHTML = "";
	},
	calculate: function() {
		this.resultField.innerHTML = eval(this.resultField.innerHTML);
	},
	addDigit: function(digit) {
		this.resultField.innerHTML += digit
	}
};
	
eventUtility.addEvent(document, "click", function(event){
	var target = eventUtility.getTarget(event);

	if(target.tagName.toUpperCase() === "A") {
		var innerHTML = target.innerHTML;

		switch (innerHTML) {
			case "Clear":
				calculator.reset();
				break;

			case "=":
				calculator.calculate();
				break;

			default:
				calculator.addDigit(innerHTML);	
		}

		eventUtility.preventDefault(event);
	}
});