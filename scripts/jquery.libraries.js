/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/**
 * The Class class
 *
 * Copyright (c) 2008, Digg, Inc.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without 
 * modification, are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice, 
 *   this list of conditions and the following disclaimer.
 * - Redistributions in binary form must reproduce the above copyright notice, 
 *   this list of conditions and the following disclaimer in the documentation 
 *   and/or other materials provided with the distribution.
 * - Neither the name of the Digg, Inc. nor the names of its contributors 
 *   may be used to endorse or promote products derived from this software 
 *   without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE 
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * @module Class
 * @author Micah Snyder <micah@digg.com>
 * @description Class creation and management for use with jQuery
 * @link http://code.google.com/p/digg
 *
 * @requires Array.indexOf -- If you support older browsers, make sure you prototype this in
 */
[].indexOf||(Array.prototype.indexOf=function(B,D){D=(D==null)?0:D;var A=this.length;for(var C=D;C<A;
C++){if(this[C]==B){return C}}return -1});(function(A){Class={dontEnum:["dontEnum","create","namespace","ns","supers","sup","init","each"],create:function(){var F=this;
var C=(arguments.length>0&&arguments[arguments.length-1].constructor==Boolean)?arguments[arguments.length-1]:false;
var E=C?{}:function(){this.init.apply(this,arguments)};var B={dontEnum:this.dontEnum,ns:[],supers:{},init:function(){},namespace:function(I){if(!I){return null
}var K=this;if(I.constructor==Array){A.each(I,function(){K.namespace.apply(K,[this])});return }else{if(I.constructor==Object){for(var H in I){if([Object,Function].indexOf(I[H].constructor)>-1){if(!this.ns){this.ns=[]
}this.ns[H]=I[H];this.namespace.apply(this,[H])}}return }}var J=I.split(".");var G=this.prototype?this.prototype:this;
A.each(J,function(){G[this]=K.ns[this]||G[this]||window[this]||Class.create(true);delete K.ns[this];G=G[this]
});return G},create:function(){var I=Array.prototype.slice.call(arguments);var H=I.shift();var G=Class.create.apply(Class,I);
var J={};J[H]=G;this.namespace(J)},each:function(G){if(!A.isFunction(G)){throw new Error("Class.each must be called with a function as its first argument.")
}var H=this;A.each(this,function(I){if(H.dontEnum.indexOf(I)!=-1){return }G.apply(this,[I,this])})},sup:function(){try{var G=this.sup.caller.name;
this.supers[G].apply(this,arguments)}catch(H){return false}}};C?delete B.init:null;A.extend(E,B);if(!C){A.extend(E.prototype,B)
}var D=C?E:E.prototype;A.each(arguments,function(){if(this.constructor==Object||typeof this.init!=undefined){for(i in this){if(A.isFunction(D[i])&&F.dontEnum.indexOf(i)==-1){this[i].name=D[i].name=i;
D.supers[i]=D[i]}D[i]=this[i]}}});return E}}})(jQuery);

/*
(function($){Class={create:function(){var s=(arguments.length>0&&arguments[arguments.length-1].constructor==Boolean)?arguments[arguments.length-1]:false;var c=s?{}:function(){this.init.apply(this,arguments);}
var methods={ns:[],supers:{},init:function(){},namespace:function(ns){if(!ns)return null;var _this=this;if(ns.constructor==Array){$.each(ns,function(){_this.namespace.apply(_this,[this]);});return;}else if(ns.constructor==Object){for(var key in ns){if([Object,Function].indexOf(ns[key].constructor)>-1){if(!this.ns)this.ns=[];this.ns[key]=ns[key];this.namespace.apply(this,[key]);}}
return;}
var levels=ns.split(".");var nsobj=this.prototype?this.prototype:this;$.each(levels,function(){nsobj[this]=_this.ns[this]||nsobj[this]||window[this]||Class.create(true);delete _this.ns[this];nsobj=nsobj[this];});return nsobj;},create:function(){var args=Array.prototype.slice.call(arguments);var name=args.shift();var temp=Class.create.apply(Class,args);var ns={};ns[name]=temp;this.namespace(ns);},sup:function(){try{var caller=this.sup.caller.name;this.supers[caller].apply(this,arguments);}catch(noSuper){return false;}}}
s?delete methods.init:null;$.extend(c,methods);if(!s)$.extend(c.prototype,methods);var extendee=s?c:c.prototype;$.each(arguments,function(){if(this.constructor==Object||typeof this.init!=undefined){for(i in this){if(extendee[i]&&extendee[i].constructor==Function&&['namespace','create','sup'].indexOf(i)==-1){this[i].name=extendee[i].name=i;extendee.supers[i]=extendee[i];}
extendee[i]=this[i];}}});return c;}};})(jQuery);
*/

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};


/*
 * PNG FIX
*/
(function(b){b.ifixpng=function(c){b.ifixpng.pixel=c};b.ifixpng.getPixel=function(){return b.ifixpng.pixel||"images/pixel.gif"};var a={ltie7:b.browser.msie&&b.browser.version<7,filter:function(c){return"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=crop,src='"+c+"')"}};b.fn.ifixpng=a.ltie7?function(){return this.each(function(){var c=b(this);var e=b("base").attr("href");if(e){e=e.replace(/\/[^\/]+$/,"/")}if(c.is("img")||c.is("input")){if(c.attr("src")){if(c.attr("src").match(/.*\.png([?].*)?$/i)){var d=(e&&c.attr("src").search(/^(\/|http:)/i))?e+c.attr("src"):c.attr("src");c.css({filter:a.filter(d),width:c.width(),height:c.height()}).attr({src:b.ifixpng.getPixel()}).positionFix()}}}else{var f=c.css("backgroundImage");if(f.match(/^url\(["']?(.*\.png([?].*)?)["']?\)$/i)){f=RegExp.$1;f=(e&&f.substring(0,1)!="/")?e+f:f;c.css({backgroundImage:"none",filter:a.filter(f)}).children().children().positionFix()}}})}:function(){return this};b.fn.iunfixpng=a.ltie7?function(){return this.each(function(){var c=b(this);var d=c.css("filter");if(d.match(/src=["']?(.*\.png([?].*)?)["']?/i)){d=RegExp.$1;if(c.is("img")||c.is("input")){c.attr({src:d}).css({filter:""})}else{c.css({filter:"",background:"url("+d+")"})}}})}:function(){return this};b.fn.positionFix=function(){return this.each(function(){var d=b(this);var c=d.css("position");if(c!="absolute"&&c!="relative"){d.css({position:"relative"})}})}})(jQuery);


/* Copyright (c) 2006-2007 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 2.1
 * 
 * Thanks to 
 * Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 * Tom Leonard for some improvements
 *
 * 
 * Returns get parameters.
 *
 * If the desired param does not exist, null will be returned
 *
 * To get the document params:
 * @example value = $(document).getUrlParam("paramName");
 * 
 * To get the params of a html-attribut (uses src attribute)
 * @example value = $('#imgLink').getUrlParam("paramName");
**/
jQuery.fn.extend({getUrlParam:function(f){f=escape(unescape(f));var e=new Array();var b=null;if($(this).attr("nodeName")=="#document"){if(window.location.search.search(f)>-1){b=window.location.search.substr(1,window.location.search.length).split("&")}}else{if($(this).attr("src")!="undefined"){var d=$(this).attr("src");if(d.indexOf("?")>-1){var a=d.substr(d.indexOf("?")+1);b=a.split("&")}}else{if($(this).attr("href")!="undefined"){var d=$(this).attr("href");if(d.indexOf("?")>-1){var a=d.substr(d.indexOf("?")+1);b=a.split("&")}}else{return null}}}if(b==null){return null}for(var c=0;c<b.length;c++){if(escape(unescape(b[c].split("=")[0]))==f){e.push(b[c].split("=")[1])}}if(e.length==0){return null}else{if(e.length==1){return e[0]}else{return e}}}});


(function($){function toIntegersAtLease(n)
{return n<10?'0'+n:n;}
Date.prototype.toJSON=function(date)
{return this.getUTCFullYear()+'-'+
toIntegersAtLease(this.getUTCMonth())+'-'+
toIntegersAtLease(this.getUTCDate());};var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.quoteString=function(string)
{if(escapeable.test(string))
{return'"'+string.replace(escapeable,function(a)
{var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};$.toJSON=function(o,compact)
{var type=typeof(o);if(type=="undefined")
return"undefined";else if(type=="number"||type=="boolean")
return o+"";else if(o===null)
return"null";if(type=="string")
{return $.quoteString(o);}
if(type=="object"&&typeof o.toJSON=="function")
return o.toJSON(compact);if(type!="function"&&typeof(o.length)=="number")
{var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i],compact));}
if(compact)
return"["+ret.join(",")+"]";else
return"["+ret.join(", ")+"]";}
if(type=="function"){throw new TypeError("Unable to convert object of type 'function' to json.");}
var ret=[];for(var k in o){var name;type=typeof(k);if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;var val=$.toJSON(o[k],compact);if(typeof(val)!="string"){continue;}
if(compact)
ret.push(name+":"+val);else
ret.push(name+": "+val);}
return"{"+ret.join(", ")+"}";};$.compactJSON=function(o)
{return $.toJSON(o,true);};$.evalJSON=function(src)
{return eval("("+src+")");};$.secureEvalJSON=function(src)
{var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};})(jQuery);


function parseDesc($number) {
	var $output = $number.replace(/,/g, '.');
	
	var $parts = $output.split('.');
	var $last = $parts.pop();
	if($parts.length > 0) {
		var $ret = $parts.join('')+'.'+$last;
	} else {
		var $ret = $last;
	}
	
	return $ret;
}

function in_array(needle, haystack, strict) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true
 
    var found = false, key, strict = !!strict;
 
    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found = true;
            break;
        }
    }
 
    return found;
}

function number_format( number, decimals, dec_point, thousands_sep ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // *     example 1: number_format(1234.5678, 2, '.', '');
    // *     returns 1: 1234.57     

    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
    var d = dec_point == undefined ? "." : dec_point;
    var t = thousands_sep == undefined ? "," : thousands_sep, s = n < 0 ? "-" : "";
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}