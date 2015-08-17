"use strict";

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/_dfs_postorder.js */

		var _dfs_postorder = regeneratorRuntime.mark(function _dfs_postorder(G, seen) {
			var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v;

			return regeneratorRuntime.wrap(function _dfs_postorder$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						context$3$0.prev = 3;
						_iterator = G.vitr()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							context$3$0.next = 13;
							break;
						}

						v = _step.value;

						if (!seen.has(v)) {
							context$3$0.next = 9;
							break;
						}

						return context$3$0.abrupt("continue", 10);

					case 9:
						return context$3$0.delegateYield(_dfs_postorder_from_source(G, v, seen), "t0", 10);

					case 10:
						_iteratorNormalCompletion = true;
						context$3$0.next = 5;
						break;

					case 13:
						context$3$0.next = 19;
						break;

					case 15:
						context$3$0.prev = 15;
						context$3$0.t1 = context$3$0["catch"](3);
						_didIteratorError = true;
						_iteratorError = context$3$0.t1;

					case 19:
						context$3$0.prev = 19;
						context$3$0.prev = 20;

						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}

					case 22:
						context$3$0.prev = 22;

						if (!_didIteratorError) {
							context$3$0.next = 25;
							break;
						}

						throw _iteratorError;

					case 25:
						return context$3$0.finish(22);

					case 26:
						return context$3$0.finish(19);

					case 27:
					case "end":
						return context$3$0.stop();
				}
			}, _dfs_postorder, this, [[3, 15, 19, 27], [20,, 22, 26]]);
		});

		exports._dfs_postorder = _dfs_postorder;

		/* js/src/_dfs_postorder_from_source.js */

		var _dfs_postorder_from_source = regeneratorRuntime.mark(function _dfs_postorder_from_source(G, source, seen) {
			var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, v;

			return regeneratorRuntime.wrap(function _dfs_postorder_from_source$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:

						seen.add(source);

						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						context$3$0.prev = 4;
						_iterator2 = G.dsitr(source)[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							context$3$0.next = 14;
							break;
						}

						v = _step2.value;

						if (!seen.has(v)) {
							context$3$0.next = 10;
							break;
						}

						return context$3$0.abrupt("continue", 11);

					case 10:
						return context$3$0.delegateYield(_dfs_postorder_from_source(G, v, seen), "t0", 11);

					case 11:
						_iteratorNormalCompletion2 = true;
						context$3$0.next = 6;
						break;

					case 14:
						context$3$0.next = 20;
						break;

					case 16:
						context$3$0.prev = 16;
						context$3$0.t1 = context$3$0["catch"](4);
						_didIteratorError2 = true;
						_iteratorError2 = context$3$0.t1;

					case 20:
						context$3$0.prev = 20;
						context$3$0.prev = 21;

						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}

					case 23:
						context$3$0.prev = 23;

						if (!_didIteratorError2) {
							context$3$0.next = 26;
							break;
						}

						throw _iteratorError2;

					case 26:
						return context$3$0.finish(23);

					case 27:
						return context$3$0.finish(20);

					case 28:
						context$3$0.next = 30;
						return source;

					case 30:
					case "end":
						return context$3$0.stop();
				}
			}, _dfs_postorder_from_source, this, [[4, 16, 20, 28], [21,, 23, 27]]);
		});

		exports._dfs_postorder_from_source = _dfs_postorder_from_source;

		/* js/src/_dfs_preorder.js */

		var _dfs_preorder = regeneratorRuntime.mark(function _dfs_preorder(G, seen) {
			var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, v;

			return regeneratorRuntime.wrap(function _dfs_preorder$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						context$3$0.prev = 3;
						_iterator3 = G.vitr()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							context$3$0.next = 13;
							break;
						}

						v = _step3.value;

						if (!seen.has(v)) {
							context$3$0.next = 9;
							break;
						}

						return context$3$0.abrupt("continue", 10);

					case 9:
						return context$3$0.delegateYield(_dfs_preorder_from_source(G, v, seen), "t0", 10);

					case 10:
						_iteratorNormalCompletion3 = true;
						context$3$0.next = 5;
						break;

					case 13:
						context$3$0.next = 19;
						break;

					case 15:
						context$3$0.prev = 15;
						context$3$0.t1 = context$3$0["catch"](3);
						_didIteratorError3 = true;
						_iteratorError3 = context$3$0.t1;

					case 19:
						context$3$0.prev = 19;
						context$3$0.prev = 20;

						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}

					case 22:
						context$3$0.prev = 22;

						if (!_didIteratorError3) {
							context$3$0.next = 25;
							break;
						}

						throw _iteratorError3;

					case 25:
						return context$3$0.finish(22);

					case 26:
						return context$3$0.finish(19);

					case 27:
					case "end":
						return context$3$0.stop();
				}
			}, _dfs_preorder, this, [[3, 15, 19, 27], [20,, 22, 26]]);
		});

		exports._dfs_preorder = _dfs_preorder;

		/* js/src/_dfs_preorder_from_source.js */

		var _dfs_preorder_from_source = regeneratorRuntime.mark(function _dfs_preorder_from_source(G, source, seen) {
			var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, v;

			return regeneratorRuntime.wrap(function _dfs_preorder_from_source$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:

						seen.add(source);

						context$3$0.next = 3;
						return source;

					case 3:
						_iteratorNormalCompletion4 = true;
						_didIteratorError4 = false;
						_iteratorError4 = undefined;
						context$3$0.prev = 6;
						_iterator4 = G.dsitr(source)[Symbol.iterator]();

					case 8:
						if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
							context$3$0.next = 16;
							break;
						}

						v = _step4.value;

						if (!seen.has(v)) {
							context$3$0.next = 12;
							break;
						}

						return context$3$0.abrupt("continue", 13);

					case 12:
						return context$3$0.delegateYield(_dfs_preorder_from_source(G, v, seen), "t0", 13);

					case 13:
						_iteratorNormalCompletion4 = true;
						context$3$0.next = 8;
						break;

					case 16:
						context$3$0.next = 22;
						break;

					case 18:
						context$3$0.prev = 18;
						context$3$0.t1 = context$3$0["catch"](6);
						_didIteratorError4 = true;
						_iteratorError4 = context$3$0.t1;

					case 22:
						context$3$0.prev = 22;
						context$3$0.prev = 23;

						if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
							_iterator4["return"]();
						}

					case 25:
						context$3$0.prev = 25;

						if (!_didIteratorError4) {
							context$3$0.next = 28;
							break;
						}

						throw _iteratorError4;

					case 28:
						return context$3$0.finish(25);

					case 29:
						return context$3$0.finish(22);

					case 30:
					case "end":
						return context$3$0.stop();
				}
			}, _dfs_preorder_from_source, this, [[6, 18, 22, 30], [23,, 25, 29]]);
		});

		exports._dfs_preorder_from_source = _dfs_preorder_from_source;

		/* js/src/dfs_postorder.js */

		var dfs_postorder = function dfs_postorder(G) {

			return _dfs_postorder(G, new Set());
		};

		exports.dfs_postorder = dfs_postorder;

		/* js/src/dfs_postorder_from_source.js */

		var dfs_postorder_from_source = function dfs_postorder_from_source(G, source) {

			return _dfs_postorder_from_source(G, source, new Set());
		};

		exports.dfs_postorder_from_source = dfs_postorder_from_source;

		/* js/src/dfs_preorder.js */

		var dfs_preorder = function dfs_preorder(G) {

			return _dfs_preorder(G, new Set());
		};

		exports.dfs_preorder = dfs_preorder;

		/* js/src/dfs_preorder_from_source.js */

		var dfs_preorder_from_source = function dfs_preorder_from_source(G, source) {

			return _dfs_preorder_from_source(G, source, new Set());
		};

		exports.dfs_preorder_from_source = dfs_preorder_from_source;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-graph-traversal", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["graphtraversal"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-graph-traversal");
})();