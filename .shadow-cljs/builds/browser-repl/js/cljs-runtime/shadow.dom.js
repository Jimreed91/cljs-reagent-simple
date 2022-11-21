goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_23360 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_23360(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_23362 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_23362(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__22666 = coll;
var G__22667 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__22666,G__22667) : shadow.dom.lazy_native_coll_seq.call(null,G__22666,G__22667));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__22697 = arguments.length;
switch (G__22697) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__22709 = arguments.length;
switch (G__22709) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__22716 = arguments.length;
switch (G__22716) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__22728 = arguments.length;
switch (G__22728) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__22741 = arguments.length;
switch (G__22741) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__22760 = arguments.length;
switch (G__22760) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e22767){if((e22767 instanceof Object)){
var e = e22767;
return console.log("didnt support attachEvent",el,e);
} else {
throw e22767;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__22775 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__22776 = null;
var count__22777 = (0);
var i__22778 = (0);
while(true){
if((i__22778 < count__22777)){
var el = chunk__22776.cljs$core$IIndexed$_nth$arity$2(null,i__22778);
var handler_23369__$1 = ((function (seq__22775,chunk__22776,count__22777,i__22778,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__22775,chunk__22776,count__22777,i__22778,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_23369__$1);


var G__23370 = seq__22775;
var G__23371 = chunk__22776;
var G__23372 = count__22777;
var G__23373 = (i__22778 + (1));
seq__22775 = G__23370;
chunk__22776 = G__23371;
count__22777 = G__23372;
i__22778 = G__23373;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22775);
if(temp__5804__auto__){
var seq__22775__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22775__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22775__$1);
var G__23374 = cljs.core.chunk_rest(seq__22775__$1);
var G__23375 = c__5568__auto__;
var G__23376 = cljs.core.count(c__5568__auto__);
var G__23377 = (0);
seq__22775 = G__23374;
chunk__22776 = G__23375;
count__22777 = G__23376;
i__22778 = G__23377;
continue;
} else {
var el = cljs.core.first(seq__22775__$1);
var handler_23378__$1 = ((function (seq__22775,chunk__22776,count__22777,i__22778,el,seq__22775__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__22775,chunk__22776,count__22777,i__22778,el,seq__22775__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_23378__$1);


var G__23379 = cljs.core.next(seq__22775__$1);
var G__23380 = null;
var G__23381 = (0);
var G__23382 = (0);
seq__22775 = G__23379;
chunk__22776 = G__23380;
count__22777 = G__23381;
i__22778 = G__23382;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__22796 = arguments.length;
switch (G__22796) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__22804 = cljs.core.seq(events);
var chunk__22806 = null;
var count__22807 = (0);
var i__22808 = (0);
while(true){
if((i__22808 < count__22807)){
var vec__22819 = chunk__22806.cljs$core$IIndexed$_nth$arity$2(null,i__22808);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__23384 = seq__22804;
var G__23385 = chunk__22806;
var G__23386 = count__22807;
var G__23387 = (i__22808 + (1));
seq__22804 = G__23384;
chunk__22806 = G__23385;
count__22807 = G__23386;
i__22808 = G__23387;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22804);
if(temp__5804__auto__){
var seq__22804__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22804__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22804__$1);
var G__23388 = cljs.core.chunk_rest(seq__22804__$1);
var G__23389 = c__5568__auto__;
var G__23390 = cljs.core.count(c__5568__auto__);
var G__23391 = (0);
seq__22804 = G__23388;
chunk__22806 = G__23389;
count__22807 = G__23390;
i__22808 = G__23391;
continue;
} else {
var vec__22824 = cljs.core.first(seq__22804__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22824,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__23392 = cljs.core.next(seq__22804__$1);
var G__23393 = null;
var G__23394 = (0);
var G__23395 = (0);
seq__22804 = G__23392;
chunk__22806 = G__23393;
count__22807 = G__23394;
i__22808 = G__23395;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__22830 = cljs.core.seq(styles);
var chunk__22831 = null;
var count__22832 = (0);
var i__22833 = (0);
while(true){
if((i__22833 < count__22832)){
var vec__22850 = chunk__22831.cljs$core$IIndexed$_nth$arity$2(null,i__22833);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22850,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__23396 = seq__22830;
var G__23397 = chunk__22831;
var G__23398 = count__22832;
var G__23399 = (i__22833 + (1));
seq__22830 = G__23396;
chunk__22831 = G__23397;
count__22832 = G__23398;
i__22833 = G__23399;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22830);
if(temp__5804__auto__){
var seq__22830__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22830__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22830__$1);
var G__23400 = cljs.core.chunk_rest(seq__22830__$1);
var G__23401 = c__5568__auto__;
var G__23402 = cljs.core.count(c__5568__auto__);
var G__23403 = (0);
seq__22830 = G__23400;
chunk__22831 = G__23401;
count__22832 = G__23402;
i__22833 = G__23403;
continue;
} else {
var vec__22856 = cljs.core.first(seq__22830__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22856,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__23404 = cljs.core.next(seq__22830__$1);
var G__23405 = null;
var G__23406 = (0);
var G__23407 = (0);
seq__22830 = G__23404;
chunk__22831 = G__23405;
count__22832 = G__23406;
i__22833 = G__23407;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__22861_23408 = key;
var G__22861_23409__$1 = (((G__22861_23408 instanceof cljs.core.Keyword))?G__22861_23408.fqn:null);
switch (G__22861_23409__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_23411 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_23411,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_23411,"aria-");
}
})())){
el.setAttribute(ks_23411,value);
} else {
(el[ks_23411] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__22872){
var map__22873 = p__22872;
var map__22873__$1 = cljs.core.__destructure_map(map__22873);
var props = map__22873__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22873__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__22875 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__22879 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__22879,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__22879;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__22883 = arguments.length;
switch (G__22883) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__22892){
var vec__22894 = p__22892;
var seq__22895 = cljs.core.seq(vec__22894);
var first__22896 = cljs.core.first(seq__22895);
var seq__22895__$1 = cljs.core.next(seq__22895);
var nn = first__22896;
var first__22896__$1 = cljs.core.first(seq__22895__$1);
var seq__22895__$2 = cljs.core.next(seq__22895__$1);
var np = first__22896__$1;
var nc = seq__22895__$2;
var node = vec__22894;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22897 = nn;
var G__22898 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22897,G__22898) : create_fn.call(null,G__22897,G__22898));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22899 = nn;
var G__22900 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__22899,G__22900) : create_fn.call(null,G__22899,G__22900));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__22902 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902,(1),null);
var seq__22906_23413 = cljs.core.seq(node_children);
var chunk__22907_23414 = null;
var count__22908_23415 = (0);
var i__22909_23416 = (0);
while(true){
if((i__22909_23416 < count__22908_23415)){
var child_struct_23417 = chunk__22907_23414.cljs$core$IIndexed$_nth$arity$2(null,i__22909_23416);
var children_23418 = shadow.dom.dom_node(child_struct_23417);
if(cljs.core.seq_QMARK_(children_23418)){
var seq__22936_23419 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_23418));
var chunk__22938_23420 = null;
var count__22939_23421 = (0);
var i__22940_23422 = (0);
while(true){
if((i__22940_23422 < count__22939_23421)){
var child_23423 = chunk__22938_23420.cljs$core$IIndexed$_nth$arity$2(null,i__22940_23422);
if(cljs.core.truth_(child_23423)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23423);


var G__23424 = seq__22936_23419;
var G__23425 = chunk__22938_23420;
var G__23426 = count__22939_23421;
var G__23427 = (i__22940_23422 + (1));
seq__22936_23419 = G__23424;
chunk__22938_23420 = G__23425;
count__22939_23421 = G__23426;
i__22940_23422 = G__23427;
continue;
} else {
var G__23428 = seq__22936_23419;
var G__23429 = chunk__22938_23420;
var G__23430 = count__22939_23421;
var G__23431 = (i__22940_23422 + (1));
seq__22936_23419 = G__23428;
chunk__22938_23420 = G__23429;
count__22939_23421 = G__23430;
i__22940_23422 = G__23431;
continue;
}
} else {
var temp__5804__auto___23432 = cljs.core.seq(seq__22936_23419);
if(temp__5804__auto___23432){
var seq__22936_23433__$1 = temp__5804__auto___23432;
if(cljs.core.chunked_seq_QMARK_(seq__22936_23433__$1)){
var c__5568__auto___23434 = cljs.core.chunk_first(seq__22936_23433__$1);
var G__23435 = cljs.core.chunk_rest(seq__22936_23433__$1);
var G__23436 = c__5568__auto___23434;
var G__23437 = cljs.core.count(c__5568__auto___23434);
var G__23438 = (0);
seq__22936_23419 = G__23435;
chunk__22938_23420 = G__23436;
count__22939_23421 = G__23437;
i__22940_23422 = G__23438;
continue;
} else {
var child_23439 = cljs.core.first(seq__22936_23433__$1);
if(cljs.core.truth_(child_23439)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23439);


var G__23440 = cljs.core.next(seq__22936_23433__$1);
var G__23441 = null;
var G__23442 = (0);
var G__23443 = (0);
seq__22936_23419 = G__23440;
chunk__22938_23420 = G__23441;
count__22939_23421 = G__23442;
i__22940_23422 = G__23443;
continue;
} else {
var G__23444 = cljs.core.next(seq__22936_23433__$1);
var G__23445 = null;
var G__23446 = (0);
var G__23447 = (0);
seq__22936_23419 = G__23444;
chunk__22938_23420 = G__23445;
count__22939_23421 = G__23446;
i__22940_23422 = G__23447;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_23418);
}


var G__23448 = seq__22906_23413;
var G__23449 = chunk__22907_23414;
var G__23450 = count__22908_23415;
var G__23451 = (i__22909_23416 + (1));
seq__22906_23413 = G__23448;
chunk__22907_23414 = G__23449;
count__22908_23415 = G__23450;
i__22909_23416 = G__23451;
continue;
} else {
var temp__5804__auto___23452 = cljs.core.seq(seq__22906_23413);
if(temp__5804__auto___23452){
var seq__22906_23453__$1 = temp__5804__auto___23452;
if(cljs.core.chunked_seq_QMARK_(seq__22906_23453__$1)){
var c__5568__auto___23454 = cljs.core.chunk_first(seq__22906_23453__$1);
var G__23455 = cljs.core.chunk_rest(seq__22906_23453__$1);
var G__23456 = c__5568__auto___23454;
var G__23457 = cljs.core.count(c__5568__auto___23454);
var G__23458 = (0);
seq__22906_23413 = G__23455;
chunk__22907_23414 = G__23456;
count__22908_23415 = G__23457;
i__22909_23416 = G__23458;
continue;
} else {
var child_struct_23459 = cljs.core.first(seq__22906_23453__$1);
var children_23460 = shadow.dom.dom_node(child_struct_23459);
if(cljs.core.seq_QMARK_(children_23460)){
var seq__22954_23461 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_23460));
var chunk__22956_23462 = null;
var count__22957_23463 = (0);
var i__22958_23464 = (0);
while(true){
if((i__22958_23464 < count__22957_23463)){
var child_23465 = chunk__22956_23462.cljs$core$IIndexed$_nth$arity$2(null,i__22958_23464);
if(cljs.core.truth_(child_23465)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23465);


var G__23466 = seq__22954_23461;
var G__23467 = chunk__22956_23462;
var G__23468 = count__22957_23463;
var G__23469 = (i__22958_23464 + (1));
seq__22954_23461 = G__23466;
chunk__22956_23462 = G__23467;
count__22957_23463 = G__23468;
i__22958_23464 = G__23469;
continue;
} else {
var G__23470 = seq__22954_23461;
var G__23471 = chunk__22956_23462;
var G__23472 = count__22957_23463;
var G__23473 = (i__22958_23464 + (1));
seq__22954_23461 = G__23470;
chunk__22956_23462 = G__23471;
count__22957_23463 = G__23472;
i__22958_23464 = G__23473;
continue;
}
} else {
var temp__5804__auto___23474__$1 = cljs.core.seq(seq__22954_23461);
if(temp__5804__auto___23474__$1){
var seq__22954_23475__$1 = temp__5804__auto___23474__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22954_23475__$1)){
var c__5568__auto___23476 = cljs.core.chunk_first(seq__22954_23475__$1);
var G__23477 = cljs.core.chunk_rest(seq__22954_23475__$1);
var G__23478 = c__5568__auto___23476;
var G__23479 = cljs.core.count(c__5568__auto___23476);
var G__23480 = (0);
seq__22954_23461 = G__23477;
chunk__22956_23462 = G__23478;
count__22957_23463 = G__23479;
i__22958_23464 = G__23480;
continue;
} else {
var child_23481 = cljs.core.first(seq__22954_23475__$1);
if(cljs.core.truth_(child_23481)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_23481);


var G__23482 = cljs.core.next(seq__22954_23475__$1);
var G__23483 = null;
var G__23484 = (0);
var G__23485 = (0);
seq__22954_23461 = G__23482;
chunk__22956_23462 = G__23483;
count__22957_23463 = G__23484;
i__22958_23464 = G__23485;
continue;
} else {
var G__23486 = cljs.core.next(seq__22954_23475__$1);
var G__23487 = null;
var G__23488 = (0);
var G__23489 = (0);
seq__22954_23461 = G__23486;
chunk__22956_23462 = G__23487;
count__22957_23463 = G__23488;
i__22958_23464 = G__23489;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_23460);
}


var G__23490 = cljs.core.next(seq__22906_23453__$1);
var G__23491 = null;
var G__23492 = (0);
var G__23493 = (0);
seq__22906_23413 = G__23490;
chunk__22907_23414 = G__23491;
count__22908_23415 = G__23492;
i__22909_23416 = G__23493;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__22974 = cljs.core.seq(node);
var chunk__22975 = null;
var count__22976 = (0);
var i__22977 = (0);
while(true){
if((i__22977 < count__22976)){
var n = chunk__22975.cljs$core$IIndexed$_nth$arity$2(null,i__22977);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__23494 = seq__22974;
var G__23495 = chunk__22975;
var G__23496 = count__22976;
var G__23497 = (i__22977 + (1));
seq__22974 = G__23494;
chunk__22975 = G__23495;
count__22976 = G__23496;
i__22977 = G__23497;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22974);
if(temp__5804__auto__){
var seq__22974__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22974__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22974__$1);
var G__23498 = cljs.core.chunk_rest(seq__22974__$1);
var G__23499 = c__5568__auto__;
var G__23500 = cljs.core.count(c__5568__auto__);
var G__23501 = (0);
seq__22974 = G__23498;
chunk__22975 = G__23499;
count__22976 = G__23500;
i__22977 = G__23501;
continue;
} else {
var n = cljs.core.first(seq__22974__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__23502 = cljs.core.next(seq__22974__$1);
var G__23503 = null;
var G__23504 = (0);
var G__23505 = (0);
seq__22974 = G__23502;
chunk__22975 = G__23503;
count__22976 = G__23504;
i__22977 = G__23505;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__22985 = arguments.length;
switch (G__22985) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__22990 = arguments.length;
switch (G__22990) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__22992 = arguments.length;
switch (G__22992) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23509 = arguments.length;
var i__5770__auto___23510 = (0);
while(true){
if((i__5770__auto___23510 < len__5769__auto___23509)){
args__5775__auto__.push((arguments[i__5770__auto___23510]));

var G__23511 = (i__5770__auto___23510 + (1));
i__5770__auto___23510 = G__23511;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__23005_23512 = cljs.core.seq(nodes);
var chunk__23006_23513 = null;
var count__23007_23514 = (0);
var i__23008_23515 = (0);
while(true){
if((i__23008_23515 < count__23007_23514)){
var node_23516 = chunk__23006_23513.cljs$core$IIndexed$_nth$arity$2(null,i__23008_23515);
fragment.appendChild(shadow.dom._to_dom(node_23516));


var G__23517 = seq__23005_23512;
var G__23518 = chunk__23006_23513;
var G__23519 = count__23007_23514;
var G__23520 = (i__23008_23515 + (1));
seq__23005_23512 = G__23517;
chunk__23006_23513 = G__23518;
count__23007_23514 = G__23519;
i__23008_23515 = G__23520;
continue;
} else {
var temp__5804__auto___23521 = cljs.core.seq(seq__23005_23512);
if(temp__5804__auto___23521){
var seq__23005_23522__$1 = temp__5804__auto___23521;
if(cljs.core.chunked_seq_QMARK_(seq__23005_23522__$1)){
var c__5568__auto___23523 = cljs.core.chunk_first(seq__23005_23522__$1);
var G__23524 = cljs.core.chunk_rest(seq__23005_23522__$1);
var G__23525 = c__5568__auto___23523;
var G__23526 = cljs.core.count(c__5568__auto___23523);
var G__23527 = (0);
seq__23005_23512 = G__23524;
chunk__23006_23513 = G__23525;
count__23007_23514 = G__23526;
i__23008_23515 = G__23527;
continue;
} else {
var node_23528 = cljs.core.first(seq__23005_23522__$1);
fragment.appendChild(shadow.dom._to_dom(node_23528));


var G__23529 = cljs.core.next(seq__23005_23522__$1);
var G__23530 = null;
var G__23531 = (0);
var G__23532 = (0);
seq__23005_23512 = G__23529;
chunk__23006_23513 = G__23530;
count__23007_23514 = G__23531;
i__23008_23515 = G__23532;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq22998){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22998));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__23017_23533 = cljs.core.seq(scripts);
var chunk__23018_23534 = null;
var count__23019_23535 = (0);
var i__23020_23536 = (0);
while(true){
if((i__23020_23536 < count__23019_23535)){
var vec__23035_23537 = chunk__23018_23534.cljs$core$IIndexed$_nth$arity$2(null,i__23020_23536);
var script_tag_23538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035_23537,(0),null);
var script_body_23539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035_23537,(1),null);
eval(script_body_23539);


var G__23540 = seq__23017_23533;
var G__23541 = chunk__23018_23534;
var G__23542 = count__23019_23535;
var G__23543 = (i__23020_23536 + (1));
seq__23017_23533 = G__23540;
chunk__23018_23534 = G__23541;
count__23019_23535 = G__23542;
i__23020_23536 = G__23543;
continue;
} else {
var temp__5804__auto___23544 = cljs.core.seq(seq__23017_23533);
if(temp__5804__auto___23544){
var seq__23017_23545__$1 = temp__5804__auto___23544;
if(cljs.core.chunked_seq_QMARK_(seq__23017_23545__$1)){
var c__5568__auto___23546 = cljs.core.chunk_first(seq__23017_23545__$1);
var G__23547 = cljs.core.chunk_rest(seq__23017_23545__$1);
var G__23548 = c__5568__auto___23546;
var G__23549 = cljs.core.count(c__5568__auto___23546);
var G__23550 = (0);
seq__23017_23533 = G__23547;
chunk__23018_23534 = G__23548;
count__23019_23535 = G__23549;
i__23020_23536 = G__23550;
continue;
} else {
var vec__23042_23551 = cljs.core.first(seq__23017_23545__$1);
var script_tag_23552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23042_23551,(0),null);
var script_body_23553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23042_23551,(1),null);
eval(script_body_23553);


var G__23554 = cljs.core.next(seq__23017_23545__$1);
var G__23555 = null;
var G__23556 = (0);
var G__23557 = (0);
seq__23017_23533 = G__23554;
chunk__23018_23534 = G__23555;
count__23019_23535 = G__23556;
i__23020_23536 = G__23557;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__23047){
var vec__23049 = p__23047;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23049,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23049,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__23055 = arguments.length;
switch (G__23055) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__23060 = cljs.core.seq(style_keys);
var chunk__23061 = null;
var count__23062 = (0);
var i__23063 = (0);
while(true){
if((i__23063 < count__23062)){
var it = chunk__23061.cljs$core$IIndexed$_nth$arity$2(null,i__23063);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23561 = seq__23060;
var G__23562 = chunk__23061;
var G__23563 = count__23062;
var G__23564 = (i__23063 + (1));
seq__23060 = G__23561;
chunk__23061 = G__23562;
count__23062 = G__23563;
i__23063 = G__23564;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23060);
if(temp__5804__auto__){
var seq__23060__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23060__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23060__$1);
var G__23565 = cljs.core.chunk_rest(seq__23060__$1);
var G__23566 = c__5568__auto__;
var G__23567 = cljs.core.count(c__5568__auto__);
var G__23568 = (0);
seq__23060 = G__23565;
chunk__23061 = G__23566;
count__23062 = G__23567;
i__23063 = G__23568;
continue;
} else {
var it = cljs.core.first(seq__23060__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__23569 = cljs.core.next(seq__23060__$1);
var G__23570 = null;
var G__23571 = (0);
var G__23572 = (0);
seq__23060 = G__23569;
chunk__23061 = G__23570;
count__23062 = G__23571;
i__23063 = G__23572;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k23065,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__23078 = k23065;
var G__23078__$1 = (((G__23078 instanceof cljs.core.Keyword))?G__23078.fqn:null);
switch (G__23078__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23065,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__23083){
var vec__23085 = p__23083;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23085,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23085,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23064){
var self__ = this;
var G__23064__$1 = this;
return (new cljs.core.RecordIter((0),G__23064__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23066,other23067){
var self__ = this;
var this23066__$1 = this;
return (((!((other23067 == null)))) && ((((this23066__$1.constructor === other23067.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23066__$1.x,other23067.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23066__$1.y,other23067.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23066__$1.__extmap,other23067.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k23065){
var self__ = this;
var this__5350__auto____$1 = this;
var G__23103 = k23065;
var G__23103__$1 = (((G__23103 instanceof cljs.core.Keyword))?G__23103.fqn:null);
switch (G__23103__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23065);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__23064){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__23105 = cljs.core.keyword_identical_QMARK_;
var expr__23106 = k__5352__auto__;
if(cljs.core.truth_((pred__23105.cljs$core$IFn$_invoke$arity$2 ? pred__23105.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__23106) : pred__23105.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__23106)))){
return (new shadow.dom.Coordinate(G__23064,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23105.cljs$core$IFn$_invoke$arity$2 ? pred__23105.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__23106) : pred__23105.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__23106)))){
return (new shadow.dom.Coordinate(self__.x,G__23064,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__23064),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__23064){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__23064,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__23070){
var extmap__5385__auto__ = (function (){var G__23113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23070,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__23070)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23113);
} else {
return G__23113;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__23070),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__23070),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k23124,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__23132 = k23124;
var G__23132__$1 = (((G__23132 instanceof cljs.core.Keyword))?G__23132.fqn:null);
switch (G__23132__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23124,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__23136){
var vec__23137 = p__23136;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23123){
var self__ = this;
var G__23123__$1 = this;
return (new cljs.core.RecordIter((0),G__23123__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23125,other23126){
var self__ = this;
var this23125__$1 = this;
return (((!((other23126 == null)))) && ((((this23125__$1.constructor === other23126.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23125__$1.w,other23126.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23125__$1.h,other23126.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23125__$1.__extmap,other23126.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k23124){
var self__ = this;
var this__5350__auto____$1 = this;
var G__23155 = k23124;
var G__23155__$1 = (((G__23155 instanceof cljs.core.Keyword))?G__23155.fqn:null);
switch (G__23155__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k23124);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__23123){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__23157 = cljs.core.keyword_identical_QMARK_;
var expr__23158 = k__5352__auto__;
if(cljs.core.truth_((pred__23157.cljs$core$IFn$_invoke$arity$2 ? pred__23157.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__23158) : pred__23157.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__23158)))){
return (new shadow.dom.Size(G__23123,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__23157.cljs$core$IFn$_invoke$arity$2 ? pred__23157.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__23158) : pred__23157.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__23158)))){
return (new shadow.dom.Size(self__.w,G__23123,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__23123),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__23123){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__23123,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__23129){
var extmap__5385__auto__ = (function (){var G__23169 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23129,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__23129)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23169);
} else {
return G__23169;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__23129),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__23129),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__23584 = (i + (1));
var G__23585 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__23584;
ret = G__23585;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23184){
var vec__23185 = p__23184;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23185,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23185,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__23189 = arguments.length;
switch (G__23189) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__23587 = ps;
var G__23588 = (i + (1));
el__$1 = G__23587;
i = G__23588;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__23205 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23205,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__23209_23591 = cljs.core.seq(props);
var chunk__23210_23592 = null;
var count__23211_23593 = (0);
var i__23212_23594 = (0);
while(true){
if((i__23212_23594 < count__23211_23593)){
var vec__23224_23595 = chunk__23210_23592.cljs$core$IIndexed$_nth$arity$2(null,i__23212_23594);
var k_23596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224_23595,(0),null);
var v_23597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23224_23595,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_23596);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23596),v_23597);


var G__23598 = seq__23209_23591;
var G__23599 = chunk__23210_23592;
var G__23600 = count__23211_23593;
var G__23601 = (i__23212_23594 + (1));
seq__23209_23591 = G__23598;
chunk__23210_23592 = G__23599;
count__23211_23593 = G__23600;
i__23212_23594 = G__23601;
continue;
} else {
var temp__5804__auto___23602 = cljs.core.seq(seq__23209_23591);
if(temp__5804__auto___23602){
var seq__23209_23603__$1 = temp__5804__auto___23602;
if(cljs.core.chunked_seq_QMARK_(seq__23209_23603__$1)){
var c__5568__auto___23604 = cljs.core.chunk_first(seq__23209_23603__$1);
var G__23605 = cljs.core.chunk_rest(seq__23209_23603__$1);
var G__23606 = c__5568__auto___23604;
var G__23607 = cljs.core.count(c__5568__auto___23604);
var G__23608 = (0);
seq__23209_23591 = G__23605;
chunk__23210_23592 = G__23606;
count__23211_23593 = G__23607;
i__23212_23594 = G__23608;
continue;
} else {
var vec__23229_23609 = cljs.core.first(seq__23209_23603__$1);
var k_23610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23229_23609,(0),null);
var v_23611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23229_23609,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_23610);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23610),v_23611);


var G__23613 = cljs.core.next(seq__23209_23603__$1);
var G__23614 = null;
var G__23615 = (0);
var G__23616 = (0);
seq__23209_23591 = G__23613;
chunk__23210_23592 = G__23614;
count__23211_23593 = G__23615;
i__23212_23594 = G__23616;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__23238 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23238,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23238,(1),null);
var seq__23242_23619 = cljs.core.seq(node_children);
var chunk__23244_23620 = null;
var count__23245_23621 = (0);
var i__23246_23622 = (0);
while(true){
if((i__23246_23622 < count__23245_23621)){
var child_struct_23623 = chunk__23244_23620.cljs$core$IIndexed$_nth$arity$2(null,i__23246_23622);
if((!((child_struct_23623 == null)))){
if(typeof child_struct_23623 === 'string'){
var text_23624 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23624),child_struct_23623].join(''));
} else {
var children_23625 = shadow.dom.svg_node(child_struct_23623);
if(cljs.core.seq_QMARK_(children_23625)){
var seq__23280_23626 = cljs.core.seq(children_23625);
var chunk__23282_23627 = null;
var count__23283_23628 = (0);
var i__23284_23629 = (0);
while(true){
if((i__23284_23629 < count__23283_23628)){
var child_23630 = chunk__23282_23627.cljs$core$IIndexed$_nth$arity$2(null,i__23284_23629);
if(cljs.core.truth_(child_23630)){
node.appendChild(child_23630);


var G__23631 = seq__23280_23626;
var G__23632 = chunk__23282_23627;
var G__23633 = count__23283_23628;
var G__23634 = (i__23284_23629 + (1));
seq__23280_23626 = G__23631;
chunk__23282_23627 = G__23632;
count__23283_23628 = G__23633;
i__23284_23629 = G__23634;
continue;
} else {
var G__23635 = seq__23280_23626;
var G__23636 = chunk__23282_23627;
var G__23637 = count__23283_23628;
var G__23638 = (i__23284_23629 + (1));
seq__23280_23626 = G__23635;
chunk__23282_23627 = G__23636;
count__23283_23628 = G__23637;
i__23284_23629 = G__23638;
continue;
}
} else {
var temp__5804__auto___23639 = cljs.core.seq(seq__23280_23626);
if(temp__5804__auto___23639){
var seq__23280_23640__$1 = temp__5804__auto___23639;
if(cljs.core.chunked_seq_QMARK_(seq__23280_23640__$1)){
var c__5568__auto___23641 = cljs.core.chunk_first(seq__23280_23640__$1);
var G__23642 = cljs.core.chunk_rest(seq__23280_23640__$1);
var G__23643 = c__5568__auto___23641;
var G__23644 = cljs.core.count(c__5568__auto___23641);
var G__23645 = (0);
seq__23280_23626 = G__23642;
chunk__23282_23627 = G__23643;
count__23283_23628 = G__23644;
i__23284_23629 = G__23645;
continue;
} else {
var child_23646 = cljs.core.first(seq__23280_23640__$1);
if(cljs.core.truth_(child_23646)){
node.appendChild(child_23646);


var G__23647 = cljs.core.next(seq__23280_23640__$1);
var G__23648 = null;
var G__23649 = (0);
var G__23650 = (0);
seq__23280_23626 = G__23647;
chunk__23282_23627 = G__23648;
count__23283_23628 = G__23649;
i__23284_23629 = G__23650;
continue;
} else {
var G__23651 = cljs.core.next(seq__23280_23640__$1);
var G__23652 = null;
var G__23653 = (0);
var G__23654 = (0);
seq__23280_23626 = G__23651;
chunk__23282_23627 = G__23652;
count__23283_23628 = G__23653;
i__23284_23629 = G__23654;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23625);
}
}


var G__23655 = seq__23242_23619;
var G__23656 = chunk__23244_23620;
var G__23657 = count__23245_23621;
var G__23658 = (i__23246_23622 + (1));
seq__23242_23619 = G__23655;
chunk__23244_23620 = G__23656;
count__23245_23621 = G__23657;
i__23246_23622 = G__23658;
continue;
} else {
var G__23659 = seq__23242_23619;
var G__23660 = chunk__23244_23620;
var G__23661 = count__23245_23621;
var G__23662 = (i__23246_23622 + (1));
seq__23242_23619 = G__23659;
chunk__23244_23620 = G__23660;
count__23245_23621 = G__23661;
i__23246_23622 = G__23662;
continue;
}
} else {
var temp__5804__auto___23663 = cljs.core.seq(seq__23242_23619);
if(temp__5804__auto___23663){
var seq__23242_23664__$1 = temp__5804__auto___23663;
if(cljs.core.chunked_seq_QMARK_(seq__23242_23664__$1)){
var c__5568__auto___23665 = cljs.core.chunk_first(seq__23242_23664__$1);
var G__23666 = cljs.core.chunk_rest(seq__23242_23664__$1);
var G__23667 = c__5568__auto___23665;
var G__23668 = cljs.core.count(c__5568__auto___23665);
var G__23669 = (0);
seq__23242_23619 = G__23666;
chunk__23244_23620 = G__23667;
count__23245_23621 = G__23668;
i__23246_23622 = G__23669;
continue;
} else {
var child_struct_23670 = cljs.core.first(seq__23242_23664__$1);
if((!((child_struct_23670 == null)))){
if(typeof child_struct_23670 === 'string'){
var text_23671 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23671),child_struct_23670].join(''));
} else {
var children_23672 = shadow.dom.svg_node(child_struct_23670);
if(cljs.core.seq_QMARK_(children_23672)){
var seq__23296_23673 = cljs.core.seq(children_23672);
var chunk__23298_23674 = null;
var count__23299_23675 = (0);
var i__23300_23676 = (0);
while(true){
if((i__23300_23676 < count__23299_23675)){
var child_23677 = chunk__23298_23674.cljs$core$IIndexed$_nth$arity$2(null,i__23300_23676);
if(cljs.core.truth_(child_23677)){
node.appendChild(child_23677);


var G__23678 = seq__23296_23673;
var G__23679 = chunk__23298_23674;
var G__23680 = count__23299_23675;
var G__23681 = (i__23300_23676 + (1));
seq__23296_23673 = G__23678;
chunk__23298_23674 = G__23679;
count__23299_23675 = G__23680;
i__23300_23676 = G__23681;
continue;
} else {
var G__23682 = seq__23296_23673;
var G__23683 = chunk__23298_23674;
var G__23684 = count__23299_23675;
var G__23685 = (i__23300_23676 + (1));
seq__23296_23673 = G__23682;
chunk__23298_23674 = G__23683;
count__23299_23675 = G__23684;
i__23300_23676 = G__23685;
continue;
}
} else {
var temp__5804__auto___23686__$1 = cljs.core.seq(seq__23296_23673);
if(temp__5804__auto___23686__$1){
var seq__23296_23687__$1 = temp__5804__auto___23686__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23296_23687__$1)){
var c__5568__auto___23688 = cljs.core.chunk_first(seq__23296_23687__$1);
var G__23689 = cljs.core.chunk_rest(seq__23296_23687__$1);
var G__23690 = c__5568__auto___23688;
var G__23691 = cljs.core.count(c__5568__auto___23688);
var G__23692 = (0);
seq__23296_23673 = G__23689;
chunk__23298_23674 = G__23690;
count__23299_23675 = G__23691;
i__23300_23676 = G__23692;
continue;
} else {
var child_23693 = cljs.core.first(seq__23296_23687__$1);
if(cljs.core.truth_(child_23693)){
node.appendChild(child_23693);


var G__23694 = cljs.core.next(seq__23296_23687__$1);
var G__23695 = null;
var G__23696 = (0);
var G__23697 = (0);
seq__23296_23673 = G__23694;
chunk__23298_23674 = G__23695;
count__23299_23675 = G__23696;
i__23300_23676 = G__23697;
continue;
} else {
var G__23698 = cljs.core.next(seq__23296_23687__$1);
var G__23699 = null;
var G__23700 = (0);
var G__23701 = (0);
seq__23296_23673 = G__23698;
chunk__23298_23674 = G__23699;
count__23299_23675 = G__23700;
i__23300_23676 = G__23701;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23672);
}
}


var G__23702 = cljs.core.next(seq__23242_23664__$1);
var G__23703 = null;
var G__23704 = (0);
var G__23705 = (0);
seq__23242_23619 = G__23702;
chunk__23244_23620 = G__23703;
count__23245_23621 = G__23704;
i__23246_23622 = G__23705;
continue;
} else {
var G__23706 = cljs.core.next(seq__23242_23664__$1);
var G__23707 = null;
var G__23708 = (0);
var G__23709 = (0);
seq__23242_23619 = G__23706;
chunk__23244_23620 = G__23707;
count__23245_23621 = G__23708;
i__23246_23622 = G__23709;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23710 = arguments.length;
var i__5770__auto___23711 = (0);
while(true){
if((i__5770__auto___23711 < len__5769__auto___23710)){
args__5775__auto__.push((arguments[i__5770__auto___23711]));

var G__23712 = (i__5770__auto___23711 + (1));
i__5770__auto___23711 = G__23712;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq23314){
var G__23315 = cljs.core.first(seq23314);
var seq23314__$1 = cljs.core.next(seq23314);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23315,seq23314__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__23323 = arguments.length;
switch (G__23323) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__21074__auto___23714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_23337){
var state_val_23338 = (state_23337[(1)]);
if((state_val_23338 === (1))){
var state_23337__$1 = state_23337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23337__$1,(2),once_or_cleanup);
} else {
if((state_val_23338 === (2))){
var inst_23333 = (state_23337[(2)]);
var inst_23335 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_23337__$1 = (function (){var statearr_23341 = state_23337;
(statearr_23341[(7)] = inst_23333);

return statearr_23341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23337__$1,inst_23335);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__21019__auto__ = null;
var shadow$dom$state_machine__21019__auto____0 = (function (){
var statearr_23343 = [null,null,null,null,null,null,null,null];
(statearr_23343[(0)] = shadow$dom$state_machine__21019__auto__);

(statearr_23343[(1)] = (1));

return statearr_23343;
});
var shadow$dom$state_machine__21019__auto____1 = (function (state_23337){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_23337);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e23344){var ex__21022__auto__ = e23344;
var statearr_23345_23715 = state_23337;
(statearr_23345_23715[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_23337[(4)]))){
var statearr_23346_23716 = state_23337;
(statearr_23346_23716[(1)] = cljs.core.first((state_23337[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23717 = state_23337;
state_23337 = G__23717;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
shadow$dom$state_machine__21019__auto__ = function(state_23337){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__21019__auto____0.call(this);
case 1:
return shadow$dom$state_machine__21019__auto____1.call(this,state_23337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__21019__auto____0;
shadow$dom$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__21019__auto____1;
return shadow$dom$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_23349 = f__21075__auto__();
(statearr_23349[(6)] = c__21074__auto___23714);

return statearr_23349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
