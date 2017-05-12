"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "truopt",
              			"path": "truopt/truopt.js",
              			"file": "truopt.js",
              			"module": "truopt",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/truopt.git",
              			"test": "truopt-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Create boolean based key-value option.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"falze": "falze",
              			"protype": "protype",
              			"truly": "truly"
              		}
              	@end-include
              */var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var doubt = require("doubt");
var falze = require("falze");
var protype = require("protype");
var truly = require("truly");

var truopt = function truopt(option) {
	/*;
                                      	@meta-configuration:
                                      		{
                                      			"option:required": [
                                      				Array,
                                      				"object"
                                      			]
                                      		}
                                      	@end-meta-configuration
                                      */

	if (falze(option)) {
		return {};
	}

	if (doubt(option, ARRAY)) {
		return option.reduce(function (option, property) {
			option[property] = true;

			return option;
		}, {});
	}

	if (!protype(option, OBJECT)) {
		throw new Error("invalid option");
	}

	return (0, _keys2.default)(option).reduce(function (object, property) {
		object[property] = truly(option[property]);

		return object;
	}, {});
};

module.exports = truopt;

//# sourceMappingURL=truopt.support.js.map