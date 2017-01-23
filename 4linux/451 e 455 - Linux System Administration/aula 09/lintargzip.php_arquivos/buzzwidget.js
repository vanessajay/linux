// chama o widget de rt

// buzzvolume.com inspired by all startups in the twitter plataform.
// avoiding document.write() -- ninja style, you will see (and if you can see you can copy)

// TODO: a lot.

(typeof __buzzScriptCounter != 'number') ? __buzzScriptCounter = 0 : ++__buzzScriptCounter;
(function(){
	var src = "http://buzzvolume.com/widget";
		
	// find (this) script node
	var buzzScripts = [];
	var scriptsNodes = document.getElementsByTagName("script");
	for (var i=0; i < scriptsNodes.length; i++) {
		(scriptsNodes[i].getAttribute('src') && scriptsNodes[i].getAttribute('src').match(/buzzwidget\.js/)) ? buzzScripts.push(scriptsNodes[i]) : null;
	}
	var scriptNode = buzzScripts[__buzzScriptCounter];
	
	function html_entity_decode(str) {
	  var ta = document.createElement("textarea");
	  ta.innerHTML=str.replace(/</g,"&lt;").replace(/>/g,"&gt;");
	  toReturn = ta.value;
	  ta = null;
	  return toReturn
	}
	
	// 	create buzzvolume badge
	var url = escape((typeof buzzvolume_url=="string") ? buzzvolume_url : window.location.href);
	var source = (typeof buzzvolume_source=="string") ? escape(buzzvolume_source) : false;
	var style = (typeof buzzvolume_style=="string")? escape(buzzvolume_style) : "normal";
	var alias = (typeof buzzvolume_alias=="string") ? escape(buzzvolume_alias) : false;
    var title = encodeURIComponent((typeof buzzvolume_title=="string") ? html_entity_decode(buzzvolume_title) : document.title);
	
	var params = [["?url", url], ["&source", source], ["&alias", alias], ["&style", style], ["&title", title]];
	for (param in params) {
		var param = params[param];
		if (param[1]) {
			src = [src, param[0], '=', param[1]].join('')	
		}
	}
	var iframe = document.createElement('iframe');
	iframe.setAttribute('src', src);
	iframe.setAttribute('width', (style == "compact") ? 95 : 50);	
	iframe.setAttribute('height', (style == "compact") ? 19 : 57);
	iframe.setAttribute('frameborder', 0);
	iframe.setAttribute('scrolling', 'no');
	
	// ninja huh?
	scriptNode.parentNode.insertBefore(iframe, scriptNode);
	
	buzzvolume_url=null;
	buzzvolume_source=null;
	buzzvolume_style=null;
	buzzvolume_alias=null;
	buzzvolume_title=null;	
})();
