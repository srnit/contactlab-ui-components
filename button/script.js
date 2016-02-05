"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonClab = (function () {
	function ButtonClab() {
		_classCallCheck(this, ButtonClab);
	}

	_createClass(ButtonClab, [{
		key: "beforeRegister",
		value: function beforeRegister() {
			this.is = 'button-clab';
			this.properties = {
				/**
         * `type` additional class for the type of btn
         */
				type: {
					type: String,
					value: ""
				},
				/**
         * `appearance` additional class for the type
         */
				appearance: {
					type: String,
					value: ""
				},
				/**
         * `size` additional class for the size
         */
				size: {
					type: String,
					value: ""
				},
				/**
         * `type` insert a valid icon class to add an icon
         */
				icon: {
					type: String,
					value: ""
				},
				/**
         * Whether is disabled or not
         */
				disabled: {
					type: Boolean,
					value: false
				}
			};
		}
	}, {
		key: "_click",
		value: function _click(evt) {
			this.fire('btnclick');
		}

		/**
  * Computes the class of the button joining the values of 'type', 'appearence' and 'size'
  */

	}, {
		key: "_computeClass",
		value: function _computeClass(type, appearance, size) {
			this.updateStyles();
			return ['btn', type, appearance, size].join(' ');
		}

		/**
  * Computes the class of the icon if 'icon' has a value
  */

	}, {
		key: "_computeIconClass",
		value: function _computeIconClass(icon) {
			return ['icon', icon].join(' ');
		}
	}]);

	return ButtonClab;
})();

Polymer(ButtonClab);