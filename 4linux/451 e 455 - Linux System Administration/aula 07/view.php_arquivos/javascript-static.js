function popupchecker(B){var A=window.open("itestwin.html","","width=1,height=1,left=0,top=0,scrollbars=no");if(A==null){alert(B)}else{A.close()}}function checkall(){var B=document.getElementsByTagName("input");for(var A=0;A<B.length;A++){if(B[A].type=="checkbox"){B[A].checked=true}}}function checknone(){var B=document.getElementsByTagName("input");for(var A=0;A<B.length;A++){if(B[A].type=="checkbox"){B[A].checked=false}}}function lockoptions(formid,master,subitems){var form=document.forms[formid];if(eval("form."+master+".checked")){for(i=0;i<subitems.length;i++){unlockoption(form,subitems[i])}}else{for(i=0;i<subitems.length;i++){lockoption(form,subitems[i])}}return(true)}function lockoption(form,item){eval("form."+item+".disabled=true");if(form.elements["h"+item]){eval("form.h"+item+".value=1")}}function unlockoption(form,item){eval("form."+item+".disabled=false");if(form.elements["h"+item]){eval("form.h"+item+".value=0")}}function lockoptionsall(formid){var form=document.forms[formid];var dependons=eval(formid+"items");var tolock=Array();for(var dependon in dependons){if(!dependons.propertyIsEnumerable(dependon)){continue}var master=form[dependon];if(master===undefined){continue}for(var condition in dependons[dependon]){for(var value in dependons[dependon][condition]){var lock;switch(condition){case"notchecked":lock=!master.checked;break;case"checked":lock=master.checked;break;case"noitemselected":lock=master.selectedIndex==-1;break;case"eq":lock=master.value==value;break;default:lock=master.value!=value;break}for(var ei in dependons[dependon][condition][value]){if(!window.webkit&&(!dependons[dependon][condition][value].propertyIsEnumerable(ei))){continue}var eltolock=dependons[dependon][condition][value][ei];if(tolock[eltolock]!=null){tolock[eltolock]=lock||tolock[eltolock]}else{tolock[eltolock]=lock}}}}}for(var el in tolock){if(!tolock.propertyIsEnumerable(el)){continue}var formelement=form[el];if((formelement===undefined)||(formelement.disabled===undefined)){continue}formelement.disabled=tolock[el]}return true}function lockoptionsallsetup(formid){var form=document.forms[formid];var dependons=eval(formid+"items");for(var dependon in dependons){if(!dependons.propertyIsEnumerable(dependon)){continue}var master=form[dependon];if(master===undefined){continue}master.formid=formid;master.onclick=function(){return lockoptionsall(this.formid)};master.onblur=function(){return lockoptionsall(this.formid)};master.onchange=function(){return lockoptionsall(this.formid)}}for(var i=0;i<form.elements.length;i++){var formelement=form.elements[i];if(formelement.type=="reset"){formelement.formid=formid;formelement.onclick=function(){this.form.reset();return lockoptionsall(this.formid)};formelement.onblur=function(){this.form.reset();return lockoptionsall(this.formid)};formelement.onchange=function(){this.form.reset();return lockoptionsall(this.formid)}}}return lockoptionsall(formid)}function submitFormById(B){var A=document.getElementById(B);if(!A){return false}if(A.tagName.toLowerCase()!="form"){return false}if(!A.onsubmit||A.onsubmit()){return A.submit()}}function select_all_in(B,E,C){var A=document.getElementsByTagName("input");A=filterByParent(A,function(F){return findParentNode(F,B,E,C)});for(var D=0;D<A.length;++D){if(A[D].type=="checkbox"||A[D].type=="radio"){A[D].checked="checked"}}}function deselect_all_in(B,E,C){var A=document.getElementsByTagName("INPUT");A=filterByParent(A,function(F){return findParentNode(F,B,E,C)});for(var D=0;D<A.length;++D){if(A[D].type=="checkbox"||A[D].type=="radio"){A[D].checked=""}}}function confirm_if(B,A){if(!B){return true}return confirm(A)}function findParentNode(B,D,C,A){while(B.nodeName.toUpperCase()!="BODY"){if((!D||B.nodeName.toUpperCase()==D)&&(!C||B.className.indexOf(C)!=-1)&&(!A||B.id==A)){break}B=B.parentNode}return B}function findChildNodes(A,F,J,I,K){var E=new Array();for(var G=0;G<A.childNodes.length;G++){var H=false;var D=A.childNodes[G];if((D.nodeType==1)&&(J&&(typeof (D.className)=="string"))){var C=D.className.split(/\s+/);for(var B in C){if(C[B]==J){H=true;break}}}if(D.nodeType==1){if((!F||D.nodeName==F)&&(!J||H)&&(!I||D.id==I)&&(!K||D.name==K)){E=E.concat(D)}else{E=E.concat(findChildNodes(D,F,J,I,K))}}}return E}function elementShowAdvanced(C,A){for(var B in C){element=C[B];element.className=element.className.replace(new RegExp(" ?hide"),"");if(!A){element.className+=" hide"}}}function showAdvancedOnClick(C,D,F){var E=findChildNodes(C.form,null,"advanced");var G="";if(C.form.elements.mform_showadvanced_last.value=="0"||C.form.elements.mform_showadvanced_last.value==""){elementShowAdvanced(E,true);G=D;C.form.elements.mform_showadvanced_last.value="1"}else{elementShowAdvanced(E,false);G=F;C.form.elements.mform_showadvanced_last.value="0"}var A=C.form.elements;for(var B=0;B<A.length;B++){if(A[B]&&A[B].name&&(A[B].name=="mform_showadvanced")){A[B].value=G}}return false}function unmaskPassword(E){var A=document.getElementById(E);var D=document.getElementById(E+"unmask");try{if(D.checked){var B=document.createElement('<input type="text" name="'+A.name+'">')}else{var B=document.createElement('<input type="password" name="'+A.name+'">')}B.attributes["class"].nodeValue=A.attributes["class"].nodeValue}catch(C){var B=document.createElement("input");B.setAttribute("name",A.name);if(D.checked){B.setAttribute("type","text")}else{B.setAttribute("type","password")}B.setAttribute("class",A.getAttribute("class"))}B.id=A.id;B.size=A.size;B.onblur=A.onblur;B.onchange=A.onchange;B.value=A.value;A.parentNode.replaceChild(B,A)}function elementToggleHide(D,A,B,C,F){if(!B){var G=D;D=document.getElementById("togglehide_"+G.id)}else{var G=B(D)}if(G.className.indexOf("hidden")==-1){G.className+=" hidden";if(D.src){D.src=D.src.replace("switch_minus","switch_plus");D.alt=C;D.title=C}var E=0}else{G.className=G.className.replace(new RegExp(" ?hidden"),"");if(D.src){D.src=D.src.replace("switch_plus","switch_minus");D.alt=F;D.title=F}var E=1}if(A==true){new cookie("hide:"+G.id,1,(E?-1:356),"/").set()}}function elementCookieHide(E,B,C){var D=document.getElementById(E);var A=new cookie("hide:"+E).read();if(A!=null){elementToggleHide(D,false,null,B,C)}}function filterByParent(E,A){var D=[];for(var C=0;C<E.length;++C){var B=A(E[C]);if(B.nodeName!="BODY"){D.push(E[C])}}return D}function fix_column_widths(){var A=navigator.userAgent.toLowerCase();if((A.indexOf("msie")!=-1)&&(A.indexOf("opera")==-1)){fix_column_width("left-column");fix_column_width("right-column")}}function fix_column_width(C){if(column=document.getElementById(C)){if(!column.offsetWidth){setTimeout("fix_column_width('"+C+"')",20);return }var B=0;var A=column.childNodes;for(i=0;i<A.length;++i){if(A[i].className.indexOf("sideblock")!=-1){if(B<A[i].offsetWidth){B=A[i].offsetWidth}}}for(i=0;i<A.length;++i){if(A[i].className.indexOf("sideblock")!=-1){A[i].style.width=B+"px"}}}}function insertAtCursor(D,C){if(document.selection){D.focus();sel=document.selection.createRange();sel.text=C}else{if(D.selectionStart||D.selectionStart=="0"){var B=D.selectionStart;var A=D.selectionEnd;D.value=D.value.substring(0,B)+C+D.value.substring(A,D.value.length)}else{D.value+=C}}}function addonload(A){var B=window.onload;window.onload=function(){if(B){B()}A()}};