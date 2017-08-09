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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRydW9wdC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImZhbHplIiwidHJ1bHkiLCJ0cnVvcHQiLCJvcHRpb24iLCJBUlJBWSIsInJlZHVjZSIsInByb3BlcnR5IiwiRXJyb3IiLCJvYmplY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUcsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2Qzs7Ozs7Ozs7Ozs7QUFXQSxLQUFJSCxNQUFPRyxNQUFQLENBQUosRUFBcUI7QUFDcEIsU0FBTyxFQUFQO0FBQ0E7O0FBRUQsS0FBSUwsTUFBT0ssTUFBUCxFQUFlQyxLQUFmLENBQUosRUFBNEI7QUFDM0IsU0FBT0QsT0FBT0UsTUFBUCxDQUFlLFVBQUVGLE1BQUYsRUFBVUcsUUFBVixFQUF3QjtBQUM3Q0gsVUFBUUcsUUFBUixJQUFxQixJQUFyQjs7QUFFQSxVQUFPSCxNQUFQO0FBQ0EsR0FKTSxFQUlKLEVBSkksQ0FBUDtBQUtBOztBQUVELEtBQUksUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QixRQUFNLElBQUlJLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBTyxvQkFBYUosTUFBYixFQUFzQkUsTUFBdEIsQ0FBOEIsVUFBRUcsTUFBRixFQUFVRixRQUFWLEVBQXdCO0FBQzVERSxTQUFRRixRQUFSLElBQXFCTCxNQUFPRSxPQUFRRyxRQUFSLENBQVAsQ0FBckI7O0FBRUEsU0FBT0UsTUFBUDtBQUNBLEVBSk0sRUFJSixFQUpJLENBQVA7QUFLQSxDQWpDRDs7QUFtQ0FDLE9BQU9DLE9BQVAsR0FBaUJSLE1BQWpCIiwiZmlsZSI6InRydW9wdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInRydW9wdFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ0cnVvcHQvdHJ1b3B0LmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRydW9wdC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRydW9wdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy90cnVvcHQuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcInRydW9wdC10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdENyZWF0ZSBib29sZWFuIGJhc2VkIGtleS12YWx1ZSBvcHRpb24uXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXHJcblx0XHRcdFwiZmFsemVcIjogXCJmYWx6ZVwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcclxuY29uc3QgZmFsemUgPSByZXF1aXJlKCBcImZhbHplXCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuXHJcbmNvbnN0IHRydW9wdCA9IGZ1bmN0aW9uIHRydW9wdCggb3B0aW9uICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJvcHRpb246cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0QXJyYXksXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6ZSggb3B0aW9uICkgKXtcclxuXHRcdHJldHVybiB7IH07XHJcblx0fVxyXG5cclxuXHRpZiggZG91YnQoIG9wdGlvbiwgQVJSQVkgKSApe1xyXG5cdFx0cmV0dXJuIG9wdGlvbi5yZWR1Y2UoICggb3B0aW9uLCBwcm9wZXJ0eSApID0+IHtcclxuXHRcdFx0b3B0aW9uWyBwcm9wZXJ0eSBdID0gdHJ1ZTtcclxuXHJcblx0XHRcdHJldHVybiBvcHRpb247XHJcblx0XHR9LCB7IH0gKTtcclxuXHR9XHJcblxyXG5cdGlmKCB0eXBlb2Ygb3B0aW9uICE9IFwib2JqZWN0XCIgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG9wdGlvblwiICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gT2JqZWN0LmtleXMoIG9wdGlvbiApLnJlZHVjZSggKCBvYmplY3QsIHByb3BlcnR5ICkgPT4ge1xyXG5cdFx0b2JqZWN0WyBwcm9wZXJ0eSBdID0gdHJ1bHkoIG9wdGlvblsgcHJvcGVydHkgXSApO1xyXG5cclxuXHRcdHJldHVybiBvYmplY3Q7XHJcblx0fSwgeyB9ICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRydW9wdDtcclxuIl19
//# sourceMappingURL=truopt.support.js.map
