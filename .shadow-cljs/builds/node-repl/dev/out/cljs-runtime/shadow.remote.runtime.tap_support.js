goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19377,p__19378){
var map__19379 = p__19377;
var map__19379__$1 = cljs.core.__destructure_map(map__19379);
var svc = map__19379__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19379__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19380 = p__19378;
var map__19380__$1 = cljs.core.__destructure_map(map__19380);
var msg = map__19380__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19380__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19380__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19380__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19380__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__19382,p__19383){
var map__19384 = p__19382;
var map__19384__$1 = cljs.core.__destructure_map(map__19384);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19384__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__19385 = p__19383;
var map__19385__$1 = cljs.core.__destructure_map(map__19385);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19385__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__19386,p__19387){
var map__19388 = p__19386;
var map__19388__$1 = cljs.core.__destructure_map(map__19388);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19388__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19388__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19389 = p__19387;
var map__19389__$1 = cljs.core.__destructure_map(map__19389);
var msg = map__19389__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19389__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__19396,tid){
var map__19397 = p__19396;
var map__19397__$1 = cljs.core.__destructure_map(map__19397);
var svc = map__19397__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19397__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__19404 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__19405 = null;
var count__19406 = (0);
var i__19407 = (0);
while(true){
if((i__19407 < count__19406)){
var vec__19414 = chunk__19405.cljs$core$IIndexed$_nth$arity$2(null,i__19407);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19414,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19414,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19425 = seq__19404;
var G__19426 = chunk__19405;
var G__19427 = count__19406;
var G__19428 = (i__19407 + (1));
seq__19404 = G__19425;
chunk__19405 = G__19426;
count__19406 = G__19427;
i__19407 = G__19428;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19404);
if(temp__5804__auto__){
var seq__19404__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19404__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19404__$1);
var G__19429 = cljs.core.chunk_rest(seq__19404__$1);
var G__19430 = c__5568__auto__;
var G__19431 = cljs.core.count(c__5568__auto__);
var G__19432 = (0);
seq__19404 = G__19429;
chunk__19405 = G__19430;
count__19406 = G__19431;
i__19407 = G__19432;
continue;
} else {
var vec__19417 = cljs.core.first(seq__19404__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19417,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19417,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19433 = cljs.core.next(seq__19404__$1);
var G__19434 = null;
var G__19435 = (0);
var G__19436 = (0);
seq__19404 = G__19433;
chunk__19405 = G__19434;
count__19406 = G__19435;
i__19407 = G__19436;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__19400_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__19400_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__19401_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__19401_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__19402_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__19402_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__19403_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__19403_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__19420){
var map__19421 = p__19420;
var map__19421__$1 = cljs.core.__destructure_map(map__19421);
var svc = map__19421__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19421__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19421__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
