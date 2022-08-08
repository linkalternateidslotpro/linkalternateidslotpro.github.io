/**
 * Gian MR Theme Custom Javascript
 *
 * @package salespro
 */

/*! sidr - v3.0.0 - 2017-12-08
  http://www.berriart.com/sidr/
  * Copyright (c) 2013-2017 Alberto Varela; Licensed MIT */
!function(){"use strict";function e(e){return"status"===e?h:m[e]?m[e].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof e&&"string"!=typeof e&&e?void console.error("Method "+e+" does not exist on sidr"):m.toggle.apply(this,arguments)}for(var t={name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,timing:"ease",method:"toggle",bind:"click",onOpen:function(){},onClose:function(){},onOpenEnd:function(){},onCloseEnd:function(){}},n={},i={add:function(e,t){n[e]=t},get:function(e){return n[e]}},s=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},o=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},a=function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&t(n.responseText)},n.open("GET",e,!0),n.send()},r={id:function(e){return document.getElementById(e)},qs:function(e){return document.querySelector(e)},qsa:function(e){return document.querySelectorAll(e)},bind:function(e,t,n){e.addEventListener(t,n,!1)},unbind:function(e,t,n){e.removeEventListener(t,n,!1)},createMenu:function(e){var t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},replaceHTML:function(e,t){return e.innerHTML=t,e},getHTMLContent:function(e){for(var t="",n=this.qsa(e),i=0;i<n.length;i++)t+='<div class="sidr-inner">'+n[i].innerHTML+"</div>";return t},addPrefixes:function(e){var t=document.createElement("div");t.innerHTML=e;for(var n=t.querySelectorAll("*"),i=0;i<n.length;i++)this.addPrefix(n[i],"id"),this.addPrefix(n[i],"class"),n[i].removeAttribute("style");return t.innerHTML},addPrefix:function(e,t){var n=e.getAttribute(t);"string"==typeof n&&""!==n&&"sidr-inner"!==n&&e.setAttribute(t,n.replace(/([A-Za-z0-9_.-]+)/g,"sidr-"+t+"-$1"))},transitions:function(){var e=(document.body||document.documentElement).style,t=!1,n="transition",i="transition",s="transitionend";if(n in e)t=!0;else{var o=["moz","webkit","o","ms"],a=void 0,r=void 0;n=n.charAt(0).toUpperCase()+n.substr(1),i=(t=function(){for(r=0;r<o.length;r++)if((a=o[r])+n in e)return!0;return!1}())?a+n:null,n=t?"-"+a+"-"+n.toLowerCase():null,"webkit"===a?s="webkitTransitionEnd":"0"===a&&(s="oTransitionEnd")}return{cssProperty:i,supported:t,property:n,event:s}}()},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u="sidr-animating",d=function(){function e(t,n){l(this,e),this.name=t.name,this.item=r.qs(t.body),this.side=t.side,this.speed=t.speed,this.timing=t.timing,this.displace=t.displace,this.menuWidth=n}return c(e,[{key:"prepare",value:function(e){var t="open"===e?"hidden":"";if("BODY"===this.item.tagName){var n=r.qs("html"),i=n.scrollTop;n.style.overflowX=t,n.scrollTop=i}}},{key:"unprepare",value:function(){if("BODY"===this.item.tagName){r.qs("html").style.overflowX=""}}},{key:"move",value:function(e){this.item.classList.add(u),"open"===e?this.open():this.close()}},{key:"open",value:function(){if(this.displace){var e=r.transitions,t=this.item;t.style[e.cssProperty]=this.side+" "+this.speed/1e3+"s "+this.timing,t.style[this.side]=0,t.style.width=t.offsetWidth+"px",t.style.position="absolute",t.style[this.side]=this.menuWidth+"px"}}},{key:"onClose",value:function(){var e=r.transitions,t=this.item;t.style[e.cssProperty]="",t.style.right="",t.style.left="",t.style.width="",t.style.position="",r.unbind(t,e.event,this.temporalCallback)}},{key:"close",value:function(){if(this.displace){var e=r.transitions,t=this.item;t.style[this.side]=0;var n=this;this.temporalCallback=function(){n.onClose()},r.bind(t,e.event,this.temporalCallback)}}},{key:"removeAnimationClass",value:function(){this.item.classList.remove(u)}},{key:"removeOpenClass",value:function(){this.item.classList.remove("sidr-open"),"sidr"!==this.name&&this.item.classList.remove(this.name+"-open")}},{key:"addOpenClass",value:function(){this.item.classList.add("sidr-open"),"sidr"!==this.name&&this.item.classList.add(this.name+"-open")}}]),e}(),h={moving:!1,opened:!1},p=function(){function e(t){l(this,e),this.name=t.name,this.speed=t.speed,this.side=t.side,this.displace=t.displace,this.source=t.source,this.timing=t.timing,this.method=t.method,this.renaming=t.renaming,this.onOpenCallback=t.onOpen,this.onCloseCallback=t.onClose,this.onOpenEndCallback=t.onOpenEnd,this.onCloseEndCallback=t.onCloseEnd,this.init(t)}return c(e,[{key:"init",value:function(e){var t=this.name,n=r.id(t);n||(n=r.createMenu(t)),n.style[r.transitions.cssProperty]=this.side+" "+this.speed/1e3+"s "+this.timing,n.classList.add("sidr"),n.classList.add("sidr-"+this.side),this.item=n,this.fillWithContent(),this.body=new d(e,this.item.offsetWidth)}},{key:"fillWithContent",value:function(){var e=this;if("function"==typeof this.source){var t=this.source(name);r.replaceHTML(this.item,t)}else if("string"==typeof this.source&&s(this.source))a(this.source,function(t){r.replaceHTML(e.item,t)});else if("string"==typeof this.source){var n=r.getHTMLContent(this.source);this.renaming&&(n=r.addPrefixes(n)),r.replaceHTML(this.item,n)}else null!==this.source&&console.error("Invalid Sidr Source")}},{key:"move",value:function(e,t){h.moving=!0,this.body.prepare(e),this.body.move(e),this.moveMenu(e,t)}},{key:"open",value:function(e){var t=this;if(h.opened!==this.name&&!h.moving)if(!1===h.opened)this.move("open",e),this.onOpenCallback();else{i.get(h.opened).close(function(){t.open(e)})}}},{key:"close",value:function(e){h.opened!==this.name||h.moving||(this.move("close",e),this.onCloseCallback())}},{key:"toggle",value:function(e){h.opened===this.name?this.close(e):this.open(e)}},{key:"onOpenMenu",value:function(e){var t=this.name;h.moving=!1,h.opened=t,r.unbind(this.item,r.transitions.event,this.temporalOpenMenuCallback),this.body.removeAnimationClass(),this.body.addOpenClass(),this.onOpenEndCallback(),"function"==typeof e&&e(t)}},{key:"openMenu",value:function(e){var t=this.item;t.style[this.side]=0;var n=this;this.temporalOpenMenuCallback=function(){n.onOpenMenu(e)},r.bind(t,r.transitions.event,this.temporalOpenMenuCallback)}},{key:"onCloseMenu",value:function(e){var t=this.item;r.unbind(t,r.transitions.event,this.temporalCloseMenuCallback),t.style.left="",t.style.right="",this.body.unprepare(),h.moving=!1,h.opened=!1,this.body.removeAnimationClass(),this.body.removeOpenClass(),this.onCloseEndCallback(),"function"==typeof e&&e(name)}},{key:"closeMenu",value:function(e){var t=this.item;t.style[this.side]="";var n=this;this.temporalCloseMenuCallback=function(){n.onCloseMenu(e)},r.bind(t,r.transitions.event,this.temporalCloseMenuCallback)}},{key:"moveMenu",value:function(e,t){"open"===e?this.openMenu(t):this.closeMenu(t)}}]),e}(),f=function(e){return function(t,n){"function"==typeof t?(n=t,t="sidr"):t||(t="sidr"),function(e,t,n){var s=i.get(t);switch(e){case"open":s.open(n);break;case"close":s.close(n);break;case"toggle":s.toggle(n);break;default:console.error("Method "+e+" does not exist on sidr")}}(e,t,n)}},m={},v=["open","close","toggle"],y=0;y<v.length;y++){var g=v[y];m[g]=f(g)}var b={init:function(e,t){for(var n=r.qsa(e),i=0;i<n.length;i++)this.addEvent(n[i],t)},addEvent:function(t,n){if(!t.getAttribute("data-sidr")){var i=n.name,s=n.bind,o=n.method;t.setAttribute("data-sidr",i),r.bind(t,s,function(t){t.preventDefault(),e(o,i)})}}},C={new:function(e,n){var s=o(t,n);i.add(s.name,new p(s)),b.init(e,s)},status:function(){return e.apply(void 0,["status"].concat(Array.prototype.slice.call(arguments)))},close:function(){return e.apply(void 0,["close"].concat(Array.prototype.slice.call(arguments)))},open:function(){return e.apply(void 0,["open"].concat(Array.prototype.slice.call(arguments)))},toggle:function(){return e.apply(void 0,["toggle"].concat(Array.prototype.slice.call(arguments)))}};window.sidr=C}();

(function(sidr) {
	"use strict"

	sidr.new('#gmr-responsive-menu', {
		name: 'menus',
		source: '.gmr-logowrap, .close-topnavmenu-wrap, .gmr-mainmenu',
		displace: false,
		onOpen   : function( name ) {
			// Re-name font Icons to correct classnames and support menu icon plugins.
			var elems = document.querySelectorAll( "#menus [class*='sidr-class-icon_'], #menus [class*='sidr-class-_mi']" ), i;
			for ( i = 0; i < elems.length; i++ ) {
				var elm = elems[i];
				if ( elm.className ) {
					elm.className = elm.className.replace(/sidr-class-/g,'');
				}
			}
		}
	});

	window.onresize = function() {
		sidr.close('menus');
	};

	var closemenu = document.querySelector( '#sidr-id-close-topnavmenu-button' );
	if ( closemenu !== null ) {
		closemenu.addEventListener(
			'click',
			function( e ) {
				e.preventDefault();
				sidr.close('menus');
			}
		);
	}
	
	/* $( '.sidr-inner li' ).each( */
	var elmTag = document.querySelectorAll( '.sidr-inner li' ), i;
	
	for ( i = 0; i < elmTag.length; i++ ) {
		if ( elmTag[i].querySelectorAll( 'ul' ).length > 0 ) {
			var elm = elmTag[i].querySelectorAll( 'a' );
			if ( elm !== null ) {
				elm[0].innerHTML += '<span class="sub-toggle"><span class="gmr-icon-down"></span></span>';
			}
		}
	}
	
	/* $( '.sidr-inner .sub-toggle' ).click( */
	var elmTag = document.querySelectorAll( '.sidr-inner .sub-toggle' ), i;
	
	for ( i = 0; i < elmTag.length; i++ ) {
		elmTag[i].addEventListener(
			'click',
			function( e ) {
				e.preventDefault();
				var t = this;
				t.classList.toggle( 'is-open' );
				if ( t.classList.contains( 'is-open' ) ) {
					var txt = '<span class="gmr-icon-up"></span>';
				} else {
					var txt = '<span class="gmr-icon-down"></span>';
				}
				t.innerHTML = txt;
				/* console.log (t.parentNode.parentNode.querySelectorAll( 'a' )[0].nextElementSibling); */
				var container = t.parentNode.parentNode.querySelectorAll( 'a' )[0].nextElementSibling;
				if ( !container.classList.contains( 'active' ) ) {
					container.classList.add('active');
				} else {
					container.classList.remove('active');
				}
			}
		);
	}

})( window.sidr );

/* Click Dropdown Search */
(function(){
	"use strict";

	var btn = document.getElementById( 'search-menu-button' );

	// Close the dropdown menu if the user clicks outside of it
	if ( btn ) {
		btn.addEventListener(
			'click',
			function( e ) {
				e.stopPropagation();
				e.preventDefault();
				var dropdowns = document.querySelector( '.search-dropdown' );
				var closebtn  = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10.657 12.071L5 6.414L6.414 5l5.657 5.657L17.728 5l1.414 1.414l-5.657 5.657l5.657 5.657l-1.414 1.414l-5.657-5.657l-5.657 5.657L5 17.728z" fill="currentColor" fill-rule="evenodd"/></svg>';
				var searchbtn = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"/><path fill="currentColor" d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"/></svg>';
				dropdowns.classList.toggle( 'active' );
				if ( dropdowns.classList.contains( 'active' ) ) {
					btn.innerHTML = closebtn;
				} else {
					btn.innerHTML = searchbtn;
				}
				var getid = document.getElementById( 'search-dropdown-container' );
				document.addEventListener(
					'click',
					function( e ) {
						if ( getid !== e.target && !getid.contains(e.target) ) {
							if ( dropdowns.classList.contains( 'active' ) ) {
								dropdowns.classList.remove( 'active' );
								btn.innerHTML = searchbtn;
							}
						}
					}
				);
			}
		);
	}

})();

// get the sticky element
(function() {
	"use strict";

	var header = document.querySelector( '.site-header' );
	if ( header !== null ) {
		var sticky = header.offsetTop;
		window.onscroll = function() {
			if ( window.pageYOffset > sticky ) {
				header.classList.add( 'sticky-menu' );
			} else {
				header.classList.remove( 'sticky-menu' );
			}
		};
	}
})();
