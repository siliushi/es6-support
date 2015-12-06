// 各语法浏览器支持情况
var sup = [{
	id: 1,
	title: 'Optimisation',
	message: 'proper tail calls (tail call optimisation)',
	sub: [{
		title: 'direct recursion',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'mutual recursion',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 1,
	title: 'Syntax',
	message: 'default function parameters',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'explicit undefined defers to the default',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'defaults can refer to previous params',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'temporal dead zone',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'separate scope',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'new Function() support',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 2,
	title: 'Syntax',
	message: 'reset parameters',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "function 'length' property",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'arguments object interaction',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "can't be used in setters",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'new Function() support',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 2,
	title: 'Syntax',
	message: 'spread (...) operator',
	sub: [{
		title: 'with arrays, in function calls',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'with arrays, in array literals',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'with strings, in function calls',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with strings, in array literals',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with astral plane strings, in function calls',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with astral plane strings, in array literals',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with generator instances, in calls',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with generator instances, in arrays',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with generic iterables, in calls',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with generic iterables, in arrays',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with instances of iterables, in calls',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with instances of iterables, in arrays',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 4,
	title: 'Syntax',
	message: 'object literal extensions',
	sub: [{
		title: 'computed properties',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'shorthand properties',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'shorthand methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'string-keyed shorthand methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'computed shorthand methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'computed accessors',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 5,
	title: 'Syntax',
	message: 'for..of loops',
	sub: [{
		title: 'with arrays',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'with strings',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with astral plane strings',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with generator instances',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with generic iterables',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with instances of generic iterables',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'iterator closing, break',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'iterator closing, throw',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 6,
	title: 'Syntax',
	message: 'octal and binary literals',
	sub: [{
		title: 'octal literals',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'binary literals',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'octal supported by Number()',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'binary supported by Number()',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 7,
	title: 'Syntax',
	message: 'template strings',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'tagged template strings',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'line break normalisation',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 8,
	title: 'Syntax',
	message: 'RegExp "y" and "u" flags',
	sub: [{
		title: '"y" flag',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"u" flag',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 9,
	title: 'Syntax',
	message: 'destructuring',
	sub: [{
		title: 'with arrays',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'with strings',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'with astral plane strings',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with generator instances',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with generic iterables',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with instances of generic iterables',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'iterator closing',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'iterator closing',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'iterable destructuring expression',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'chained iterable destructuring',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'trailing commas in iterable patterns',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'with objects',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'object destructuring with primitives',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'trailing commas in object patterns',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}	
	}, {
		title: 'object destructuring expression',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'parenthesised left-hand-side is a syntax error',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'chained object destructuring',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'throws on null and undefined',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'computed properties',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'multiples in a single var statement',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'nested',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'in parameters',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'in parameters, new Function() support',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: "in parameters, function 'length' property",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: "in for-in loop heads",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: "in for-of loop heads",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: "rest",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "nested rest",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "defaults",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "defaults in parameters",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "defaults, let temporal dead zone",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "defaults in parameters, separate scope",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "defaults in parameters, new Function() support",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 10,
	title: 'Syntax',
	message: 'Unicode code point escapes',
	sub: [{
		title: 'in strings',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'in identifiers',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 11,
	title: 'Syntax',
	message: 'new.target',
	sub: [{
		title: 'in constructors',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "can't be assigned to",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 12,
	title: 'Bindings',
	message: 'const',
	sub: [{
		title: 'basic support',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'is block-scoped',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'redefining a const is an error',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'temporal dead zone',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'basic support (strict mode)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'is block-scoped (strict mode)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'redefining a const (strict mode)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'temporal dead zone (strict mode)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 13,
	title: 'Bindings',
	message: 'let',
	sub: [{
		title: 'basic support',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'is block-scoped',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'for-loop statement scope',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'temporal dead zone',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'for-loop iteration scope',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'basic support (strict mode)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'is block-scoped (strict mode)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'for-loop statement scope (strict mode)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'temporal dead zone (strict mode)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'for-loop iteration scope (strict mode)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 14,
	title: 'Functions',
	message: 'arrow functions',
	sub: [{
		title: '0 parameters',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '1 parameter, no brackets',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'multiple parameters',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'lexical "this" binding',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"this" unchanged by call or apply',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "can't be bound, can be curried",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'lexical "arguments" binding',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'no line break between params and =>',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'no "prototype" property',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'lexical "super" binding',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'lexical "new.target" binding',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 15,
	title: 'Functions',
	message: 'class',
	sub: [{
		title: 'class statement',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'is block-scoped',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'class expression',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'anonymous class',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'prototype methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'string-keyed methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'computed prototype methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'static methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'computed static methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'accessor properties',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'computed accessor properties',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'static accessor properties',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'computed static accessor properties',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'class name is lexically scoped',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'computed names, temporal dead zone',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "methods aren't enumerable",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'implicit strict mode',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor requires new',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'extends',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'extends expressions',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'extends null',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'new.target',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 16,
	title: 'Functions',
	message: 'super',
	sub: [{
		title: 'statement in constructors',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'expression in constructors',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'in methods, property access',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'in methods, method calls',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'method calls use correct "this" binding',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor calls use correct "new.target" binding',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'is statically bound',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 17,
	title: 'Functions',
	message: 'generators',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'generator function expressions',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'correct "this" binding',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: "can't use 'this' with new",
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'sending',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%GeneratorPrototype%',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%GeneratorPrototype%.throw',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%GeneratorPrototype%.return',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'yield operator precedence',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'yield *, arrays',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'yield *, strings',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'yield *, astral plane strings',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'yield *, generator instances',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'yield *, generic iterables',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'yield *, instances of iterables',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'yield *, iterator closing',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'yield *, iterator closing via throw()',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'shorthand generator methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'string-keyed shorthand generator methods',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'computed shorthand generators',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'shorthand generator methods, classes',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'computed shorthand generators, classes',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 18,
	title: 'Built-ins',
	message: 'typed arrays',
	sub: [{
		title: 'Int8Array',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Uint8Array',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Uint8ClampedArray',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Int16Array',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Uint16Array',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Int32Array',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Uint32Array',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Float32Array',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Float64Array',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'DataView (Int8)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'DataView (Uint8)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'DataView (Int16)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'DataView (Uint16)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'DataView (Int32)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'DataView (Uint32)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'DataView (Float32)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'DataView (Float64)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: true
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'ArrayBuffer[Symbol.species]',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructors require new',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.from',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.of',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.subarray',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: true
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: true
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: '%TypedArray%.prototype.join',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.indexOf',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.lastIndexOf',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.slice',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.every',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.filter',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.forEach',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.map',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.reduce',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.reduceRight',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.reverse',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.some',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.sort',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.copyWithin',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.find',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.findIndex',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.fill',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.keys',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.values',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype.entries',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%.prototype[Symbol.iterator]',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '%TypedArray%[Symbol.species]',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 19,
	title: 'Built-ins',
	message: 'Map',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'constructor arguments',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor requires new',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor accepts null',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'constructor invokes set',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'iterator closing',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Map.prototype.set returns this',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: '-0 key converts to +0',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Map.prototype.size',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Map.prototype.delete',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Map.prototype.clear',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Map.prototype.forEach',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Map.prototype.keys',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Map.prototype.values',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Map.prototype.entries',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Map.prototype[Symbol.iterator]',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Map iterator prototype chain',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Map[Symbol.species]',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 20,
	title: 'Built-ins',
	message: 'Set',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'constructor arguments',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor requires new',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor accepts null',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'constructor invokes add',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'iterator closing',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Set.prototype.set returns this',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: '-0 key converts to +0',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Set.prototype.size',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Set.prototype.delete',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Set.prototype.clear',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Set.prototype.forEach',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Set.prototype.keys',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Set.prototype.values',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Set.prototype.entries',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Set.prototype[Symbol.iterator]',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Set iterator prototype chain',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Set[Symbol.species]',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 21,
	title: 'Built-ins',
	message: 'WeakMap',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'constructor arguments',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor requires new',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor accepts null',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'constructor invokes set',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'frozen objects as keys',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'iterator closing',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'WeakMap.prototype.set returns this',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'WeakMap.prototype.delete',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: true
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'no WeakMap.prototype.clear method',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}]
}, {
	id: 22,
	title: 'Built-ins',
	message: 'WeakSet',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor arguments',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport:  false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport:  false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor requires new',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport:  false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor accepts null',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'constructor invokes add',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport:  false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport:  false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'iterator closing',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport:  false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport:  false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'WeakMapSet.prototype.set returns this',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport:  false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport:  false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'WeakSet.prototype.delete',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'no WeakSet.prototype.clear method',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport:  false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport:  false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 23,
	title: 'Built-ins',
	message: 'Proxy',
	sub: [{
		title: 'constructor requires new',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"get" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"get" handler, instances of proxies',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"set" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"set" handler, instances of proxies',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"has" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"has" handler, instances of proxies',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"deleteProperty" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"getOwnPropertyDescriptor" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"defineProperty" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"getPrototypeOf" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"setPrototypeOf" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"isExtensible" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"preventExtensions" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"enumerate" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"ownKeys" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"apply" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: '"construct" handler',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Proxy.revocable',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Array.isArray support',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'JSON.stringify support',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 24,
	title: 'Built-ins',
	message: 'Reflect',
	sub: [{
		title: 'Reflect.get',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.set',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.has',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.deleteProperty',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.getOwnPropertyDescriptor',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.defineProperty',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.getPrototypeOf',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.setPrototypeOf',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.isExtensible',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.preventExtensions',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.enumerate',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.ownKeys',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.ownKeys, symbol order',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.apply',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.construct',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Reflect.construct, new.target',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 25,
	title: 'Built-ins',
	message: 'Promise',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'constructor requires new',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Promise.all',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Promise.all, generic iterables',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Promise.race',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: true
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: true
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: true
			}]
		}
	}, {
		title: 'Promise.race, generic iterables',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Promise[Symbol.species]',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 26,
	title: 'Built-ins',
	message: 'Symbol',
	sub: [{
		title: 'basic functionality',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'typeof support',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'symbol keys are hidden to pre-ES6 code',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Object.defineProperty support',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'cannot coerce to string or number',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'can convert with String()',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'new Symbol() throws',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Object(symbol)',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'global symbol registry',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 27,
	title: 'Built-ins',
	message: 'well-known symbols',
	sub: [{
		title: 'Symbol.hasInstance',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.isConcatSpreadable',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.iterator, existence',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: true
			}, {
				version: 'FireFox40',
				isSupport: true
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.iterator, arguments object',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.species, existence',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: true
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.species, Array.prototype.concat',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.species, Array.prototype.filter',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.species, Array.prototype.map',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.species, Array.prototype.slice',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.species, Array.prototype.splice',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.species, RegExp.prototype[Symbol.split]',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.toPrimitive',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.toStringTag',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.toStringTag, misc. built-ins',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: false
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: false
			}, {
				version: 'Chrome44',
				isSupport: false
			}, {
				version: 'Chrome45',
				isSupport: false
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: false
			}, {
				version: 'Opera31',
				isSupport: false
			}, {
				version: 'Opera32',
				isSupport: false
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}, {
		title: 'Symbol.unscopables',
		envirment: {
			IE: [{
				version: 'IE9',
				isSupport: false
			}, {
				version: 'IE10',
				isSupport: false
			}, {
				version: 'IE11',
				isSupport: false
			}, {
				version: 'Edge',
				isSupport: true
			}],
			Chrome: [{
				version: 'Chrome43',
				isSupport: true
			}, {
				version: 'Chrome44',
				isSupport: true
			}, {
				version: 'Chrome45',
				isSupport: true
			}],
			FireFox: [{
				version: 'FireFox31',
				isSupport: false
			}, {
				version: 'FireFox39',
				isSupport: false
			}, {
				version: 'FireFox40',
				isSupport: false
			}, {
				version: 'FireFox41',
				isSupport: false
			}],
			Safair: [{
				version: 'Safair6.1-7',
				isSupport: false
			}, {
				version: 'Safair7.1-8',
				isSupport: false
			}],
			Opera: [{
				version: 'Opera30',
				isSupport: true
			}, {
				version: 'Opera31',
				isSupport: true
			}, {
				version: 'Opera32',
				isSupport: true
			}],
			IOS: [{
				version: 'IOS7',
				isSupport: false
			}, {
				version: 'IOS8',
				isSupport: false
			}]
		}
	}]
}, {
	id: 28,
	title: 'Built-in extensions',
	message: 'Object static methods',
	sub: [{}]
}, {
	id: 29,
	title: 'Built-in extensions',
	message: 'function "name" property',
	sub: [{}]
}, {
	id: 30,
	title: 'Built-in extensions',
	message: 'String static methods',
	sub: [{}]
}, {
	id: 31,
	title: 'Built-in extensions',
	message: 'String.prototype methods',
	sub: [{}]
}, {
	id: 32,
	title: 'Built-in extensions',
	message: 'RegExp.prototype properties',
	sub: [{}]
}, {
	id: 33,
	title: 'Built-in extensions',
	message: 'Array static methods',
	sub: [{}]
}, {
	id: 34,
	title: 'Built-in extensions',
	message: 'Array.prototype methods',
	sub: [{}]
}, {
	id: 35,
	title: 'Built-in extensions',
	message: 'Number properties',
	sub: [{}]
}, {
	id: 36,
	title: 'Built-in extensions',
	message: 'Math methods',
	sub: [{}]
}]