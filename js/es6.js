$(function() {
	"use strict";
	var m = {
		init: function() {

			// 首页列表
			m.list = [{
				title: 'Optimisation',
				sub: [
					'proper tail calls (tail call optimisation)'
				]
			}, {
				title: 'Syntax',
				sub: ['default function parameters',
					'rest parameters', 'spread (...) operator',
					'object literal extensions',
					'for..of loops',
					'octal and binary literals',
					'template strings',
					'RegExp "y" and "u" flags',
					'destructuring',
					'Unicode code point escapes',
					'new.target'
				]
			}, {
				title: 'Bindings',
				sub: [
					'const',
					'let',
					'block-level function declaration'
				]
			}, {
				title: 'Functions',
				sub: [
					'arrow functions',
					'class',
					'super',
					'generators'
				]
			}, {
				title: 'Built-ins',
				sub: [
					'typed arrays',
					'Map',
					'Set',
					'WeakMap',
					'WeakSet',
					'Proxy',
					'Reflect',
					'Promise',
					'Symbol',
					'well-known-symbols',
					'',
				]
			}];
		},
		initUI: function() {
			var me = this;
			me.init();
			var html = '<ul>';
			for(var i = 0, _l = m.list.length; i < _l; i++) {
				var item = m.list[i];
				html += '<li><h2>'+ item.title +'</h2><ul>';
				for(var j = 0, _k = item.sub.length; j < _k; j++) {
					html += '<li><a href="javascript:;" class="subtitle" data-title="'+ item.sub[j] +'">'+ item.sub[j] +'</a></li>';
				}
				html += '</ul></li>';
			}
			html += '</ul>';
			$('#contain').html(html);

			$('.subtitle').on('click', function() {
				m.search($(this).data('title'));
			});
			$('.q').keydown(function(event) {
				if(event.keyCode === 13 && this.value) {
					// console.log(this.value);
					me.search(this.value);
				}
			})
			// me.search();
			return this;
		},
		search: function(q) {
			var data = [];
			for(var i = 0, _ = sup.length; i < _; i++) {
				if(sup[i].message.indexOf(q) > -1) data.push(sup[i]);
			}
			var html = '';
			if(data.length > 0) {
				for(var i = 0, _l = data.length; i < _l; i++) {
					var item = data[i];
					html += '<h2 class="clr">'+ item.title +'</h2><div>'+ item.message +'</div><br>';
					for(var j = 0, _k = item.sub.length; j < _k; j++) {
						var subitem = item.sub[j];
						html += '<div class="clr">#'+ subitem.title +'</div>';
						for(var key in subitem.envirment) {
							var subSubItem = subitem.envirment[key];
							html += '<ul class="version">' + new Array(5-subSubItem.length).join('<li class="unknow"></li>');
							for(var m = 0, _n = subSubItem.length; m < _n; m++) {
								subSubItem[m].isSupport ? (html += '<li class="support">'+ subSubItem[m].version +'</li>') : (html += '<li class="unsupport">'+ subSubItem[m].version +'</li>');
							}
							html += '</ul>';
						}
					}
				}
			} else {
				html += '暂未查找到相关内容。。。'
			}
			
			$('#contain').html(html);
		},
		main: function() {
			m.initUI();
		}
	}

	m.main();
});