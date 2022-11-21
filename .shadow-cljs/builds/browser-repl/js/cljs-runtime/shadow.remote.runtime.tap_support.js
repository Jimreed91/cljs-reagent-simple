goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__25733,p__25734){
var map__25737 = p__25733;
var map__25737__$1 = cljs.core.__destructure_map(map__25737);
var svc = map__25737__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25737__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25737__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25737__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25738 = p__25734;
var map__25738__$1 = cljs.core.__destructure_map(map__25738);
var msg = map__25738__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25738__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25738__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25738__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25738__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__25740,p__25741){
var map__25742 = p__25740;
var map__25742__$1 = cljs.core.__destructure_map(map__25742);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25742__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__25743 = p__25741;
var map__25743__$1 = cljs.core.__destructure_map(map__25743);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25743__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__25748,p__25749){
var map__25750 = p__25748;
var map__25750__$1 = cljs.core.__destructure_map(map__25750);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25750__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25750__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__25751 = p__25749;
var map__25751__$1 = cljs.core.__destructure_map(map__25751);
var msg = map__25751__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25751__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__25763,tid){
var map__25764 = p__25763;
var map__25764__$1 = cljs.core.__destructure_map(map__25764);
var svc = map__25764__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25764__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__25772 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__25773 = null;
var count__25774 = (0);
var i__25775 = (0);
while(true){
if((i__25775 < count__25774)){
var vec__25786 = chunk__25773.cljs$core$IIndexed$_nth$arity$2(null,i__25775);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25786,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25786,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25800 = seq__25772;
var G__25801 = chunk__25773;
var G__25802 = count__25774;
var G__25803 = (i__25775 + (1));
seq__25772 = G__25800;
chunk__25773 = G__25801;
count__25774 = G__25802;
i__25775 = G__25803;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25772);
if(temp__5804__auto__){
var seq__25772__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25772__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25772__$1);
var G__25804 = cljs.core.chunk_rest(seq__25772__$1);
var G__25805 = c__5568__auto__;
var G__25806 = cljs.core.count(c__5568__auto__);
var G__25807 = (0);
seq__25772 = G__25804;
chunk__25773 = G__25805;
count__25774 = G__25806;
i__25775 = G__25807;
continue;
} else {
var vec__25790 = cljs.core.first(seq__25772__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25790,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25790,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__25808 = cljs.core.next(seq__25772__$1);
var G__25809 = null;
var G__25810 = (0);
var G__25811 = (0);
seq__25772 = G__25808;
chunk__25773 = G__25809;
count__25774 = G__25810;
i__25775 = G__25811;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__25768_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__25768_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__25769_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__25769_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__25770_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__25770_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__25771_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__25771_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__25797){
var map__25798 = p__25797;
var map__25798__$1 = cljs.core.__destructure_map(map__25798);
var svc = map__25798__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25798__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25798__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
