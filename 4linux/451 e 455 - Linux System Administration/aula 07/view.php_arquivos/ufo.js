var UFO={req:["movie","width","height","majorversion","build"],opt:["play","loop","menu","quality","scale","salign","wmode","bgcolor","base","flashvars","devicefont","allowscriptaccess","seamlesstabbing","allowfullscreen","allownetworking"],optAtt:["id","name","align"],optExc:["swliveconnect"],ximovie:"ufo.swf",xiwidth:"215",xiheight:"138",ua:navigator.userAgent.toLowerCase(),pluginType:"",fv:[0,0],foList:[],create:function(A,B){if(!UFO.uaHas("w3cdom")||UFO.uaHas("ieMac")){return }UFO.getFlashVersion();UFO.foList[B]=UFO.updateFO(A);UFO.createCSS("#"+B,"visibility:hidden;");UFO.domLoad(B)},updateFO:function(A){if(typeof A.xi!="undefined"&&A.xi=="true"){if(typeof A.ximovie=="undefined"){A.ximovie=UFO.ximovie}if(typeof A.xiwidth=="undefined"){A.xiwidth=UFO.xiwidth}if(typeof A.xiheight=="undefined"){A.xiheight=UFO.xiheight}}A.mainCalled=false;return A},domLoad:function(B){var A=setInterval(function(){if((document.getElementsByTagName("body")[0]!=null||document.body!=null)&&document.getElementById(B)!=null){UFO.main(B);clearInterval(A)}},250);if(typeof document.addEventListener!="undefined"){document.addEventListener("DOMContentLoaded",function(){UFO.main(B);clearInterval(A)},null)}},main:function(B){var A=UFO.foList[B];if(A.mainCalled){return }UFO.foList[B].mainCalled=true;document.getElementById(B).style.visibility="hidden";if(UFO.hasRequired(B)){if(UFO.hasFlashVersion(parseInt(A.majorversion,10),parseInt(A.build,10))){if(typeof A.setcontainercss!="undefined"&&A.setcontainercss=="true"){UFO.setContainerCSS(B)}UFO.writeSWF(B)}else{if(A.xi=="true"&&UFO.hasFlashVersion(6,65)){UFO.createDialog(B)}}}document.getElementById(B).style.visibility="visible"},createCSS:function(A,E){var D=document.getElementsByTagName("head")[0];var C=UFO.createElement("style");if(!UFO.uaHas("ieWin")){C.appendChild(document.createTextNode(A+" {"+E+"}"))}C.setAttribute("type","text/css");C.setAttribute("media","screen");D.appendChild(C);if(UFO.uaHas("ieWin")&&document.styleSheets&&document.styleSheets.length>0){var B=document.styleSheets[document.styleSheets.length-1];if(typeof B.addRule=="object"){B.addRule(A,E)}}},setContainerCSS:function(D){var C=UFO.foList[D];var A=/%/.test(C.width)?"":"px";var B=/%/.test(C.height)?"":"px";UFO.createCSS("#"+D,"width:"+C.width+A+"; height:"+C.height+B+";");if(C.width=="100%"){UFO.createCSS("body","margin-left:0; margin-right:0; padding-left:0; padding-right:0;")}if(C.height=="100%"){UFO.createCSS("html","height:100%; overflow:hidden;");UFO.createCSS("body","margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0; height:100%;")}},createElement:function(A){return(UFO.uaHas("xml")&&typeof document.createElementNS!="undefined")?document.createElementNS("http://www.w3.org/1999/xhtml",A):document.createElement(A)},createObjParam:function(B,D,C){var A=UFO.createElement("param");A.setAttribute("name",D);A.setAttribute("value",C);B.appendChild(A)},uaHas:function(E){var D=UFO.ua;switch(E){case"w3cdom":return(typeof document.getElementById!="undefined"&&typeof document.getElementsByTagName!="undefined"&&(typeof document.createElement!="undefined"||typeof document.createElementNS!="undefined"));case"xml":var A=document.getElementsByTagName("meta");var C=A.length;for(var B=0;B<C;B++){if(/content-type/i.test(A[B].getAttribute("http-equiv"))&&/xml/i.test(A[B].getAttribute("content"))){return true}}return false;case"ieMac":return/msie/.test(D)&&!/opera/.test(D)&&/mac/.test(D);case"ieWin":return/msie/.test(D)&&!/opera/.test(D)&&/win/.test(D);case"gecko":return/gecko/.test(D)&&!/applewebkit/.test(D);case"opera":return/opera/.test(D);case"safari":return/applewebkit/.test(D);default:return false}},getFlashVersion:function(){if(UFO.fv[0]!=0){return }if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){UFO.pluginType="npapi";var A=navigator.plugins["Shockwave Flash"].description;if(typeof A!="undefined"){A=A.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var B=parseInt(A.replace(/^(.*)\..*$/,"$1"),10);var E=/r/.test(A)?parseInt(A.replace(/^.*r(.*)$/,"$1"),10):0;UFO.fv=[B,E]}}else{if(window.ActiveXObject){UFO.pluginType="ax";try{var C=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(D){try{var C=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");UFO.fv=[6,0];C.AllowScriptAccess="always"}catch(D){if(UFO.fv[0]==6){return }}try{var C=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(D){}}if(typeof C=="object"){var A=C.GetVariable("$version");if(typeof A!="undefined"){A=A.replace(/^\S+\s+(.*)$/,"$1").split(",");UFO.fv=[parseInt(A[0],10),parseInt(A[2],10)]}}}}},hasRequired:function(C){var B=UFO.req.length;for(var A=0;A<B;A++){if(typeof UFO.foList[C][UFO.req[A]]=="undefined"){return false}}return true},hasFlashVersion:function(B,A){return(UFO.fv[0]>B||(UFO.fv[0]==B&&UFO.fv[1]>=A))?true:false},writeSWF:function(D){var G=UFO.foList[D];var I=document.getElementById(D);if(UFO.pluginType=="npapi"){if(UFO.uaHas("gecko")||UFO.uaHas("xml")){while(I.hasChildNodes()){I.removeChild(I.firstChild)}var J=UFO.createElement("object");J.setAttribute("type","application/x-shockwave-flash");J.setAttribute("data",G.movie);J.setAttribute("width",G.width);J.setAttribute("height",G.height);var F=UFO.optAtt.length;for(var H=0;H<F;H++){if(typeof G[UFO.optAtt[H]]!="undefined"){J.setAttribute(UFO.optAtt[H],G[UFO.optAtt[H]])}}var E=UFO.opt.concat(UFO.optExc);var F=E.length;for(var H=0;H<F;H++){if(typeof G[E[H]]!="undefined"){UFO.createObjParam(J,E[H],G[E[H]])}}I.appendChild(J)}else{var K="";var E=UFO.opt.concat(UFO.optAtt).concat(UFO.optExc);var F=E.length;for(var H=0;H<F;H++){if(typeof G[E[H]]!="undefined"){K+=" "+E[H]+'="'+G[E[H]]+'"'}}I.innerHTML='<embed type="application/x-shockwave-flash" src="'+G.movie+'" width="'+G.width+'" height="'+G.height+'" pluginspage="http://www.macromedia.com/go/getflashplayer"'+K+"></embed>"}}else{if(UFO.pluginType=="ax"){var C="";var F=UFO.optAtt.length;for(var H=0;H<F;H++){if(typeof G[UFO.optAtt[H]]!="undefined"){C+=" "+UFO.optAtt[H]+'="'+G[UFO.optAtt[H]]+'"'}}var A="";var F=UFO.opt.length;for(var H=0;H<F;H++){if(typeof G[UFO.opt[H]]!="undefined"){A+='<param name="'+UFO.opt[H]+'" value="'+G[UFO.opt[H]]+'" />'}}var B=window.location.protocol=="https:"?"https:":"http:";I.innerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+C+' width="'+G.width+'" height="'+G.height+'" codebase="'+B+"//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+G.majorversion+",0,"+G.build+',0"><param name="movie" value="'+G.movie+'" />'+A+"</object>"}}},createDialog:function(A){var C=UFO.foList[A];UFO.createCSS("html","height:100%; overflow:hidden;");UFO.createCSS("body","height:100%; overflow:hidden;");UFO.createCSS("#xi-con","position:absolute; left:0; top:0; z-index:1000; width:100%; height:100%; background-color:#fff; filter:alpha(opacity:75); opacity:0.75;");UFO.createCSS("#xi-dia","position:absolute; left:50%; top:50%; margin-left: -"+Math.round(parseInt(C.xiwidth,10)/2)+"px; margin-top: -"+Math.round(parseInt(C.xiheight,10)/2)+"px; width:"+C.xiwidth+"px; height:"+C.xiheight+"px;");var I=document.getElementsByTagName("body")[0];var G=UFO.createElement("div");G.setAttribute("id","xi-con");var E=UFO.createElement("div");E.setAttribute("id","xi-dia");G.appendChild(E);I.appendChild(G);var J=window.location;if(UFO.uaHas("xml")&&UFO.uaHas("safari")){var H=document.getElementsByTagName("title")[0].firstChild.nodeValue=document.getElementsByTagName("title")[0].firstChild.nodeValue.slice(0,47)+" - Flash Player Installation"}else{var H=document.title=document.title.slice(0,47)+" - Flash Player Installation"}var B=UFO.pluginType=="ax"?"ActiveX":"PlugIn";var F=typeof C.xiurlcancel!="undefined"?"&xiUrlCancel="+C.xiurlcancel:"";var D=typeof C.xiurlfailed!="undefined"?"&xiUrlFailed="+C.xiurlfailed:"";UFO.foList["xi-dia"]={movie:C.ximovie,width:C.xiwidth,height:C.xiheight,majorversion:"6",build:"65",flashvars:"MMredirectURL="+J+"&MMplayerType="+B+"&MMdoctitle="+H+F+D};UFO.writeSWF("xi-dia")},expressInstallCallback:function(){var B=document.getElementsByTagName("body")[0];var A=document.getElementById("xi-con");B.removeChild(A);UFO.createCSS("body","height:auto; overflow:auto;");UFO.createCSS("html","height:auto; overflow:auto;")},cleanupIELeaks:function(){var B=document.getElementsByTagName("object");var E=B.length;for(var D=0;D<E;D++){B[D].style.display="none";var C=0;for(var A in B[D]){C++;if(typeof B[D][A]=="function"){B[D][A]=null}if(C>1000){break}}}}};if(typeof window.attachEvent!="undefined"&&UFO.uaHas("ieWin")){window.attachEvent("onunload",UFO.cleanupIELeaks)};