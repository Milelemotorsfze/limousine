!function(o){"use strict";o.fn.emulateTransitionEnd=function(t){var e=!1,i=this;o(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||o(i).trigger(o.support.transition.end)},t),this},o(function(){o.support.transition=function(){var t,e=document.createElement("bootstrap"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in i)if(void 0!==e.style[t])return{end:i[t]};return!1}(),o.support.transition&&(o.event.special.bsTransitionEnd={bindType:o.support.transition.end,delegateType:o.support.transition.end,handle:function(t){if(o(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(n){"use strict";function a(t,e){this.options=e,this.$body=n(document.body),this.$element=n(t),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,n.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}function s(o,s){return this.each(function(){var t=n(this),e=t.data("bs.modal"),i=n.extend({},a.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new a(this,i)),"string"==typeof o?e[o](s):i.show&&e.show(s)})}a.VERSION="3.3.1",a.TRANSITION_DURATION=300,a.BACKDROP_TRANSITION_DURATION=150,a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},a.prototype.show=function(i){var o=this,t=n.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',n.proxy(this.hide,this)),this.backdrop(function(){var t=n.support.transition&&o.$element.hasClass("fade"),e=(o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.options.backdrop&&o.adjustBackdrop(),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus(),n.Event("shown.bs.modal",{relatedTarget:i}));t?o.$element.find(".modal-dialog").one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(a.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},a.prototype.hide=function(t){t&&t.preventDefault(),t=n.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),n(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),n.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",n.proxy(this.hideModal,this)).emulateTransitionEnd(a.TRANSITION_DURATION):this.hideModal())},a.prototype.enforceFocus=function(){n(document).off("focusin.bs.modal").on("focusin.bs.modal",n.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",n.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},a.prototype.resize=function(){this.isShown?n(window).on("resize.bs.modal",n.proxy(this.handleUpdate,this)):n(window).off("resize.bs.modal")},a.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},a.prototype.backdrop=function(t){var e,i=this,o=this.$element.hasClass("fade")?"fade":"";this.isShown&&this.options.backdrop?(e=n.support.transition&&o,this.$backdrop=n('<div class="modal-backdrop '+o+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",n.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),t&&(e?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):t())):!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),o=function(){i.removeBackdrop(),t&&t()},n.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):o()):t&&t()},a.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},a.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},a.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},a.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},a.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},a.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},a.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},a.prototype.measureScrollbar=function(){var t=document.createElement("div"),e=(t.className="modal-scrollbar-measure",this.$body.append(t),t.offsetWidth-t.clientWidth);return this.$body[0].removeChild(t),e};var t=n.fn.modal;n.fn.modal=s,n.fn.modal.Constructor=a,n.fn.modal.noConflict=function(){return n.fn.modal=t,this},n(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=n(this),i=e.attr("href"),o=n(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),i=o.data("bs.modal")?"toggle":n.extend({remote:!/#/.test(i)&&i},o.data(),e.data());e.is("a")&&t.preventDefault(),o.one("show.bs.modal",function(t){t.isDefaultPrevented()||o.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),s.call(o,i,this)})}(jQuery),function(a){"use strict";function r(t){this.element=a(t)}function e(i){return this.each(function(){var t=a(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new r(this)),"string"==typeof i&&e[i]()})}r.VERSION="3.3.1",r.TRANSITION_DURATION=150,r.prototype.show=function(){var t,e,i,o=this.element,s=o.closest("ul:not(.dropdown-menu)"),n=(n=o.data("target"))||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]*$)/,"");o.parent("li").hasClass("active")||(t=s.find(".active:last a"),e=a.Event("hide.bs.tab",{relatedTarget:o[0]}),i=a.Event("show.bs.tab",{relatedTarget:t[0]}),t.trigger(e),o.trigger(i),i.isDefaultPrevented())||e.isDefaultPrevented()||(i=a(n),this.activate(o.closest("li"),s),this.activate(i,i.parent(),function(){t.trigger({type:"hidden.bs.tab",relatedTarget:o[0]}),o.trigger({type:"shown.bs.tab",relatedTarget:t[0]})}))},r.prototype.activate=function(t,e,i){var o=e.find("> .active"),s=i&&a.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function n(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&s?o.one("bsTransitionEnd",n).emulateTransitionEnd(r.TRANSITION_DURATION):n(),o.removeClass("in")};function t(t){t.preventDefault(),e.call(a(this),"show")}var i=a.fn.tab;a.fn.tab=e,a.fn.tab.Constructor=r,a.fn.tab.noConflict=function(){return a.fn.tab=i,this};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',t).on("click.bs.tab.data-api",'[data-toggle="pill"]',t)}(jQuery),function(l){"use strict";function h(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)}h.VERSION="3.3.1",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(t,e,i){this.enabled=!0,this.type=t,this.$element=l(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&l(this.options.viewport.selector||this.options.viewport);for(var o=this.options.trigger.split(" "),s=o.length;s--;){var n,a=o[s];"click"==a?this.$element.on("click."+this.type,this.options.selector,l.proxy(this.toggle,this)):"manual"!=a&&(n="hover"==a?"mouseleave":"focusout",this.$element.on(("hover"==a?"mouseenter":"focusin")+"."+this.type,this.options.selector,l.proxy(this.enter,this)),this.$element.on(n+"."+this.type,this.options.selector,l.proxy(this.leave,this)))}this.options.selector?this._options=l.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},h.prototype.getDefaults=function(){return h.DEFAULTS},h.prototype.getOptions=function(t){return(t=l.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},h.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&l.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},h.prototype.enter=function(t){var e=t instanceof this.constructor?t:l(t.currentTarget).data("bs."+this.type);if(e&&e.$tip&&e.$tip.is(":visible"))e.hoverState="in";else{if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),l(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},h.prototype.leave=function(t){var e=t instanceof this.constructor?t:l(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),l(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)},h.prototype.show=function(){var e,t,i,o,s,n,a,r=l.Event("show.bs."+this.type);this.hasContent()&&this.enabled&&(this.$element.trigger(r),s=l.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]),!r.isDefaultPrevented())&&s&&(r=(e=this).tip(),s=this.getUID(this.type),this.setContent(),r.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&r.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,(a=(t=/\s?auto?\s?/i).test(s))&&(s=s.replace(t,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),t=this.getPosition(),i=r[0].offsetWidth,o=r[0].offsetHeight,a&&(a=s,n=this.options.container?l(this.options.container):this.$element.parent(),n=this.getPosition(n),s="bottom"==s&&t.bottom+o>n.bottom?"top":"top"==s&&t.top-o<n.top?"bottom":"right"==s&&t.right+i>n.width?"left":"left"==s&&t.left-i<n.left?"right":s,r.removeClass(a).addClass(s)),n=this.getCalculatedOffset(s,t,i,o),this.applyPlacement(n,s),a=function(){var t=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==t&&e.leave(e)},l.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a())},h.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,s=i[0].offsetHeight,n=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10),n=(isNaN(n)&&(n=0),isNaN(a)&&(a=0),t.top=t.top+n,t.left=t.left+a,l.offset.setOffset(i[0],l.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in"),i[0].offsetWidth),a=i[0].offsetHeight,r=("top"==e&&a!=s&&(t.top=t.top+s-a),this.getViewportAdjustedDelta(e,t,n,a)),e=(r.left?t.left+=r.left:t.top+=r.top,/top|bottom/.test(e)),o=e?2*r.left-o+n:2*r.top-s+a,n=e?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(o,i[0][n],e)},h.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},h.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},h.prototype.hide=function(t){var e=this,i=this.tip(),o=l.Event("hide.bs."+this.type);function s(){"in"!=e.hoverState&&i.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),l.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",s).emulateTransitionEnd(h.TRANSITION_DURATION):s(),this.hoverState=null,this},h.prototype.fixTitle=function(){var t=this.$element;!t.attr("title")&&"string"==typeof t.attr("data-original-title")||t.attr("data-original-title",t.attr("title")||"").attr("title","")},h.prototype.hasContent=function(){return this.getTitle()},h.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,e=e.getBoundingClientRect(),o=(null==e.width&&(e=l.extend({},e,{width:e.right-e.left,height:e.bottom-e.top})),i?{top:0,left:0}:t.offset()),t={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},i=i?{width:l(window).width(),height:l(window).height()}:null;return l.extend({},e,t,i,o)},h.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},h.prototype.getViewportAdjustedDelta=function(t,e,i,o){var s,n,a={top:0,left:0};return this.$viewport&&(s=this.options.viewport&&this.options.viewport.padding||0,n=this.getPosition(this.$viewport),/right|left/.test(t)?(t=e.top-s-n.scroll,o=e.top+s-n.scroll+o,t<n.top?a.top=n.top-t:o>n.top+n.height&&(a.top=n.top+n.height-o)):(t=e.left-s,o=e.left+s+i,t<n.left?a.left=n.left-t:o>n.width&&(a.left=n.left+n.width-o))),a},h.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},h.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},h.prototype.tip=function(){return this.$tip=this.$tip||l(this.options.template)},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},h.prototype.enable=function(){this.enabled=!0},h.prototype.disable=function(){this.enabled=!1},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled},h.prototype.toggle=function(t){var e=this;t&&!(e=l(t.currentTarget).data("bs."+this.type))&&(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),l(t.currentTarget).data("bs."+this.type,e)),e.tip().hasClass("in")?e.leave(e):e.enter(e)},h.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var t=l.fn.tooltip;l.fn.tooltip=function(s){return this.each(function(){var t=l(this),e=t.data("bs.tooltip"),i="object"==typeof s&&s,o=i&&i.selector;!e&&"destroy"==s||(o?(e||t.data("bs.tooltip",e={}),e[o]||(e[o]=new h(this,i))):e||t.data("bs.tooltip",e=new h(this,i)),"string"!=typeof s)||e[s]()})},l.fn.tooltip.Constructor=h,l.fn.tooltip.noConflict=function(){return l.fn.tooltip=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.$trigger=s(this.options.trigger).filter('[href="#'+t.id+'"], [data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()}function i(t){t=t.attr("data-target")||(t=t.attr("href"))&&t.replace(/.*(?=#[^\s]+$)/,"");return s(t)}function a(o){return this.each(function(){var t=s(this),e=t.data("bs.collapse"),i=s.extend({},n.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&"show"==o&&(i.toggle=!1),e||t.data("bs.collapse",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.3.1",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},n.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(t&&t.length&&(o=t.data("bs.collapse"))&&o.transitioning)){var e=s.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){t&&t.length&&(a.call(t,"hide"),o||t.data("bs.collapse",null));var i=this.dimension(),e=(this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1,function(){this.$element.removeClass("collapsing").addClass("collapse in")[i](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")});if(!s.support.transition)return e.call(this);var o=s.camelCase(["scroll",i].join("-"));this.$element.one("bsTransitionEnd",s.proxy(e,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[i](this.$element[0][o])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=s.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var t=this.dimension(),e=(this.$element[t](this.$element[t]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1,function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")});if(!s.support.transition)return e.call(this);this.$element[t](0).one("bsTransitionEnd",s.proxy(e,this)).emulateTransitionEnd(n.TRANSITION_DURATION)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return s(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(s.proxy(function(t,e){e=s(e);this.addAriaAndCollapsedClass(i(e),e)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=s.fn.collapse;s.fn.collapse=a,s.fn.collapse.Constructor=n,s.fn.collapse.noConflict=function(){return s.fn.collapse=t,this},s(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=s(this),t=(e.attr("data-target")||t.preventDefault(),i(e)),e=t.data("bs.collapse")?"toggle":s.extend({},e.data(),{trigger:this});a.call(t,e)})}(jQuery);