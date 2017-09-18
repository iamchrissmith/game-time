/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	const Game = __webpack_require__(5);

	const canvas = document.getElementById('game');
	const startBtn = document.getElementById('start');
	const pauseBtn = document.getElementById('pause');
	const resetBtn = document.getElementById('reset');

	const keys = document.querySelector('.key');

	const leftArrow = document.getElementById('left-arrow');
	const upArrow = document.getElementById('up-arrow');
	const downArrow = document.getElementById('down-arrow');
	const rightArrow = document.getElementById('right-arrow');

	const aKey = document.getElementById('a-key');
	const wKey = document.getElementById('w-key');
	const sKey = document.getElementById('s-key');
	const dKey = document.getElementById('d-key');

	const game = new Game(canvas);

	startBtn.addEventListener('click', e => {
	  e.preventDefault();
	  game.startGame();
	});

	pauseBtn.addEventListener('click', e => {
	  e.preventDefault();
	  game.pauseGame();
	});

	resetBtn.addEventListener('click', e => {
	  e.preventDefault();
	  game.endGame();
	});

	resetBtn.addEventListener('click', e => {
	  e.preventDefault();
	  game.endGame();
	});

	const activateKey = key => {
	  key.className += ' active';
	  setTimeout(function () {
	    key.className = 'key';
	  }, 100);
	};

	const steerBike = (key, bike, direction) => {
	  activateKey(key);
	  game.changeDirection(bike, direction);
	};

	document.addEventListener('keydown', e => {
	  if (!game.gameRunning) {
	    return;
	  }

	  if (e.keyCode === 37) {
	    // left arrow	37
	    steerBike(leftArrow, 0, "left");
	  }

	  if (e.keyCode === 38) {
	    // up arrow	38
	    e.preventDefault();
	    steerBike(upArrow, 0, "up");
	  }

	  if (e.keyCode === 39) {
	    // right arrow	39
	    steerBike(rightArrow, 0, "right");
	  }

	  if (e.keyCode === 40) {
	    // down arrow	40
	    e.preventDefault();
	    steerBike(downArrow, 0, "down");
	  }

	  if (e.keyCode === 65) {
	    // a	65
	    steerBike(aKey, 1, 'left');
	  }

	  if (e.keyCode === 87) {
	    // w	87
	    steerBike(wKey, 1, 'up');
	  }

	  if (e.keyCode === 83) {
	    // s	83
	    steerBike(sKey, 1, 'down');
	  }

	  if (e.keyCode === 68) {
	    // d	68
	    steerBike(dKey, 1, 'right');
	  }
	});

	requestAnimationFrame(function gameLoop() {
	  if (game.gameRunning) {

	    game.drawBikes();
	  }
	  requestAnimationFrame(gameLoop);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./game.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./game.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  background-color: #1a1a1a; }\n\n#board-cont {\n  width: 750px;\n  height: 750px;\n  margin: 25px auto; }\n\ncanvas {\n  position: absolute; }\n\n#game {\n  background: transparent;\n  border-color: #97ffff;\n  box-shadow: 0 0 20px 5px rgba(100, 200, 255, 0.75);\n  display: block;\n  z-index: 1; }\n\n#particle {\n  background-color: black;\n  background-image: linear-gradient(0deg, transparent 0px, #64ffff 2px, transparent 4px), linear-gradient(90deg, transparent 0px, #64ffff 2px, transparent 4px);\n  background-size: 25px 25px;\n  z-index: 0; }\n\n#buttons {\n  list-style: none;\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 0;\n  padding: 0; }\n  #buttons li {\n    display: flex;\n    width: 33%; }\n  #buttons button {\n    width: 100%;\n    border-radius: 25px;\n    line-height: 1.2em;\n    padding: 12px;\n    font-size: 1.3em;\n    background-color: #000;\n    border: 1px solid #000;\n    border-top-color: #262626;\n    border-right-color: #404040;\n    border-bottom-color: #404040;\n    border-left-color: #262626;\n    color: gray; }\n    #buttons button:hover, #buttons button:active {\n      color: #64ffff;\n      border-color: #97ffff;\n      box-shadow: 0 0 20px 0 rgba(100, 200, 255, 0.75); }\n    #buttons button:focus {\n      outline: 0; }\n\n.movement {\n  display: flex;\n  vertical-align: bottom;\n  text-align: right;\n  padding-right: 5px; }\n  .movement > div {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .movement h2, .movement .key {\n    color: gray; }\n\n.key {\n  background-color: #000;\n  border: 1px solid #000;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  padding: 3px 2px;\n  height: 30px;\n  letter-spacing: 0.5px;\n  flex: 1;\n  border-radius: 3px;\n  text-transform: uppercase;\n  font-size: 14px;\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden; }\n  .key::before {\n    display: inline-block;\n    vertical-align: middle;\n    height: 100%;\n    content: ''; }\n\n.key.active {\n  color: #64ffff;\n  border-color: #97ffff;\n  box-shadow: 0 0 20px 0 rgba(100, 200, 255, 0.75); }\n\n.movement .directions {\n  width: 50%;\n  max-width: 300px;\n  display: flex;\n  flex: 4;\n  justify-content: justify;\n  align-items: flex-end;\n  padding-bottom: 4px; }\n  .movement .directions .up-down {\n    flex: 1.2;\n    display: flex;\n    flex-direction: column; }\n    .movement .directions .up-down .key {\n      margin: 0; }\n    .movement .directions .up-down .key + .key {\n      border-top-left-radius: 1px;\n      border-top-right-radius: 1px; }\n  .movement .directions .key {\n    flex: 1;\n    font-size: 10px;\n    height: 27px; }\n\n.movement .letters .directions .key {\n  font-size: 20px; }\n\n.blank {\n  background: transparent;\n  border: none; }\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	const Bike = __webpack_require__(6);

	class Game {
	  constructor(board) {
	    this.board = board;
	    this.context = board.getContext('2d');
	    this.bikes = this.generatePlayers();
	    this.gameRunning = false;
	    this.loser = '';
	    this.winner = '';
	  }

	  generatePlayers() {
	    const playerSize = 10;
	    const player1 = new Bike('Player 1', this.board, 0, 0, playerSize, playerSize, "15, 119, 190", "down");

	    const player2 = new Bike('Player 2', this.board, this.board.width - playerSize, this.board.height - playerSize, playerSize, playerSize, "195, 134, 20", "up");

	    player1.opponent = player2;
	    player2.opponent = player1;

	    player1.draw(this.context);
	    player2.draw(this.context);

	    return [player1, player2];
	  }

	  startGame() {
	    this.gameRunning = true;
	    if (this.bikes.length === 0) {
	      this.bikes = this.generatePlayers();
	    }
	  }

	  otherBike(current) {
	    return this.bikes.filter(bike => bike.name != current.name)[0];
	  }

	  prevent180(bike, direction) {
	    if (bike.direction == "up" && direction == "down") {
	      return true;
	    }

	    if (bike.direction == "down" && direction == "up") {
	      return true;
	    }

	    if (bike.direction == "left" && direction == "right") {
	      return true;
	    }

	    if (bike.direction == "right" && direction == "left") {
	      return true;
	    }
	  }

	  changeDirection(bike_index, direction) {
	    const bike = this.bikes[bike_index];

	    if (this.prevent180(bike, direction)) {
	      console.log(bike.direction, direction);
	      return;
	    }
	    bike.direction = direction;
	  }

	  pauseGame() {
	    this.gameRunning = false;
	  }

	  endGame() {
	    this.context.clearRect(0, 0, this.board.width, this.board.height);
	    this.gameRunning = false;
	    this.bikes = [];
	  }

	  drawBikes() {
	    this.context.clearRect(0, 0, this.board.width, this.board.height);
	    for (let i = 0; i < this.bikes.length; i++) {
	      if (!this.gameRunning) {
	        this.winner = this.bikes[i].name;
	        console.log("winner", this.winner);
	        this.bikes[i].drawHistory(this.context);
	        this.bikes[i].drawBike(this.context);
	        return;
	      }
	      if (this.bikes[i].draw(this.context)) {
	        this.gameRunning = false;
	      }
	    }
	  }
	}

	module.exports = Game;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	const PathPiece = __webpack_require__(7);

	class Bike extends PathPiece {
	  constructor(name, board, x, y, width, height, color, direction) {
	    super(x, y, width, height, color);
	    this.name = name;

	    this.board = board;

	    this.length = width;
	    this.direction = direction;
	    this.history = [];
	    this.isAlive = true;
	    this.opponent = '';
	  }

	  drawBike(context) {
	    const newPathPiece = new PathPiece(this.x, this.y, this.width, this.height / 2);

	    context.fillStyle = this.makeColor(this.color, 1);
	    context.fillRect(newPathPiece.x - 4, newPathPiece.y - 4, newPathPiece.width + 8, newPathPiece.height + 8);
	    return newPathPiece;
	  }

	  draw(context) {
	    const newPathPiece = this.drawBike(context);
	    if (this.direction && this.isAlive) {
	      this.move();
	      this.updateHistory(newPathPiece);
	      this.drawHistory(context);
	      return this.detectCollision();
	    }
	  }

	  detectCollision() {
	    if (this.x < 0 || this.x > this.board.width || this.y < 0 || this.y > this.board.height) {
	      console.log(this.name, "Ran into wall", this.x, this.y);
	      return true;
	    }

	    for (let i = 0; i < this.history.length; i++) {
	      if (this.x == this.history[i].x && this.y == this.history[i].y) {
	        console.log(this.name, "Ran into self", this.x, this.history[i].x, this.y, this.history[i].y);
	        return true;
	      }
	    }

	    for (let i = 0; i < this.opponent.history.length; i++) {
	      if (this.x == this.opponent.history[i].x && this.y == this.opponent.y) {
	        console.log(this.name, "Ran into opponent at", this.x, this.opponent.history[i].x, this.y, this.opponent.y);
	        return true;
	      }
	    }

	    return false;
	  }

	  drawHistory(context) {
	    this.history.forEach(tail => {
	      let percentage = this.history.indexOf(tail) / this.history.length;

	      if (percentage > 0.8) {
	        percentage = 0.8;
	      }

	      if (percentage < 0.6) {
	        percentage = 0.6;
	      }
	      context.fillStyle = tail.makeColor(this.color, percentage);
	      context.fillRect(tail.x, tail.y, tail.width, tail.height);
	    });
	  }

	  updateHistory(pathPiece) {
	    this.history.push(pathPiece);
	    if (this.history.length > 100) {
	      this.history.shift();
	    }
	  }

	  move() {
	    switch (this.direction) {
	      case "down":
	        this.y += this.length / 2;
	        break;
	      case "up":
	        this.y -= this.length / 2;
	        break;
	      case "left":
	        this.x -= this.length / 2;
	        break;
	      case "right":
	        this.x += this.length / 2;
	        break;
	    }

	    return this;
	  }
	}

	module.exports = Bike;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	class PathPiece {
	  constructor(x, y, width, height, color) {
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.color = color;
	  }

	  makeColor(color, opacity) {
	    return 'rgba(' + color + ', ' + opacity + ')';
	  }
	}

	module.exports = PathPiece;

/***/ })
/******/ ]);