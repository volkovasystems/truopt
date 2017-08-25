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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"truly": "truly"
              		}
              	@end-include
              */var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var doubt = require("doubt");
var falze = require("falze");
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

	if ((typeof option === "undefined" ? "undefined" : (0, _typeof3.default)(option)) != "object") {
		throw new Error("invalid option");
	}

	return (0, _keys2.default)(option).reduce(function (object, property) {
		object[property] = truly(option[property]);

		return object;
	}, {});
};

module.exports = truopt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRydW9wdC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImZhbHplIiwidHJ1bHkiLCJ0cnVvcHQiLCJvcHRpb24iLCJBUlJBWSIsInJlZHVjZSIsInByb3BlcnR5IiwiRXJyb3IiLCJvYmplY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUcsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2Qzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJSCxNQUFPRyxNQUFQLENBQUosRUFBcUI7QUFDcEIsU0FBTyxFQUFQO0FBQ0E7O0FBRUQsS0FBSUwsTUFBT0ssTUFBUCxFQUFlQyxLQUFmLENBQUosRUFBNEI7QUFDM0IsU0FBT0QsT0FBT0UsTUFBUCxDQUFlLFVBQUVGLE1BQUYsRUFBVUcsUUFBVixFQUF3QjtBQUM3Q0gsVUFBUUcsUUFBUixJQUFxQixJQUFyQjs7QUFFQSxVQUFPSCxNQUFQO0FBQ0EsR0FKTSxFQUlKLEVBSkksQ0FBUDtBQUtBOztBQUVELEtBQUksUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QixRQUFNLElBQUlJLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBTyxvQkFBYUosTUFBYixFQUFzQkUsTUFBdEIsQ0FBOEIsVUFBRUcsTUFBRixFQUFVRixRQUFWLEVBQXdCO0FBQzVERSxTQUFRRixRQUFSLElBQXFCTCxNQUFPRSxPQUFRRyxRQUFSLENBQVAsQ0FBckI7O0FBRUEsU0FBT0UsTUFBUDtBQUNBLEVBSk0sRUFJSixFQUpJLENBQVA7QUFLQSxDQWpDRDs7QUFtQ0FDLE9BQU9DLE9BQVAsR0FBaUJSLE1BQWpCIiwiZmlsZSI6InRydW9wdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ0cnVvcHRcIixcblx0XHRcdFwicGF0aFwiOiBcInRydW9wdC90cnVvcHQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRydW9wdC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0cnVvcHRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3RydW9wdC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInRydW9wdC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENyZWF0ZSBib29sZWFuIGJhc2VkIGtleS12YWx1ZSBvcHRpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuXG5jb25zdCB0cnVvcHQgPSBmdW5jdGlvbiB0cnVvcHQoIG9wdGlvbiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm9wdGlvbjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0QXJyYXksXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsemUoIG9wdGlvbiApICl7XG5cdFx0cmV0dXJuIHsgfTtcblx0fVxuXG5cdGlmKCBkb3VidCggb3B0aW9uLCBBUlJBWSApICl7XG5cdFx0cmV0dXJuIG9wdGlvbi5yZWR1Y2UoICggb3B0aW9uLCBwcm9wZXJ0eSApID0+IHtcblx0XHRcdG9wdGlvblsgcHJvcGVydHkgXSA9IHRydWU7XG5cblx0XHRcdHJldHVybiBvcHRpb247XG5cdFx0fSwgeyB9ICk7XG5cdH1cblxuXHRpZiggdHlwZW9mIG9wdGlvbiAhPSBcIm9iamVjdFwiICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgb3B0aW9uXCIgKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3Qua2V5cyggb3B0aW9uICkucmVkdWNlKCAoIG9iamVjdCwgcHJvcGVydHkgKSA9PiB7XG5cdFx0b2JqZWN0WyBwcm9wZXJ0eSBdID0gdHJ1bHkoIG9wdGlvblsgcHJvcGVydHkgXSApO1xuXG5cdFx0cmV0dXJuIG9iamVjdDtcblx0fSwgeyB9ICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRydW9wdDtcbiJdfQ==
//# sourceMappingURL=truopt.support.js.map
