YUI.add("button-ol",function(t){"use strict";var e=t.Lang,o=t.Base.create("ol",t.Plugin.Base,[t.ButtonBase],{TPL_CONTENT:'<i class="alloy-editor-icon-numbered-list"></i>',_onClick:function(){var t=this.get("host").get("editor");t.execCommand("numberedlist")},updateUI:function(){var t,e;t=this.get("host").get("editor"),e=t.elementPath(),this._button.set("pressed",e.contains("ol"))}},{NAME:"ol",NS:"ol",ATTRS:{strings:{validator:e.isObject,value:{label:"Numbered List"}}}});t.ButtonOl=o},"",{requires:["button-base"]});