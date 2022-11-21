goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17553,res){
var map__17554 = p__17553;
var map__17554__$1 = cljs.core.__destructure_map(map__17554);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17554__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17554__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17558 = res;
var G__17558__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17558,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17558);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17558__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17558__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17569 = arguments.length;
switch (G__17569) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17574,msg,handlers,timeout_after_ms){
var map__17576 = p__17574;
var map__17576__$1 = cljs.core.__destructure_map(map__17576);
var runtime = map__17576__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17576__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17704 = arguments.length;
var i__5770__auto___17705 = (0);
while(true){
if((i__5770__auto___17705 < len__5769__auto___17704)){
args__5775__auto__.push((arguments[i__5770__auto___17705]));

var G__17706 = (i__5770__auto___17705 + (1));
i__5770__auto___17705 = G__17706;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17586,ev,args){
var map__17587 = p__17586;
var map__17587__$1 = cljs.core.__destructure_map(map__17587);
var runtime = map__17587__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17587__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17588 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17591 = null;
var count__17592 = (0);
var i__17593 = (0);
while(true){
if((i__17593 < count__17592)){
var ext = chunk__17591.cljs$core$IIndexed$_nth$arity$2(null,i__17593);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17707 = seq__17588;
var G__17708 = chunk__17591;
var G__17709 = count__17592;
var G__17710 = (i__17593 + (1));
seq__17588 = G__17707;
chunk__17591 = G__17708;
count__17592 = G__17709;
i__17593 = G__17710;
continue;
} else {
var G__17711 = seq__17588;
var G__17712 = chunk__17591;
var G__17713 = count__17592;
var G__17714 = (i__17593 + (1));
seq__17588 = G__17711;
chunk__17591 = G__17712;
count__17592 = G__17713;
i__17593 = G__17714;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17588);
if(temp__5804__auto__){
var seq__17588__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17588__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17588__$1);
var G__17715 = cljs.core.chunk_rest(seq__17588__$1);
var G__17716 = c__5568__auto__;
var G__17717 = cljs.core.count(c__5568__auto__);
var G__17718 = (0);
seq__17588 = G__17715;
chunk__17591 = G__17716;
count__17592 = G__17717;
i__17593 = G__17718;
continue;
} else {
var ext = cljs.core.first(seq__17588__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17719 = cljs.core.next(seq__17588__$1);
var G__17720 = null;
var G__17721 = (0);
var G__17722 = (0);
seq__17588 = G__17719;
chunk__17591 = G__17720;
count__17592 = G__17721;
i__17593 = G__17722;
continue;
} else {
var G__17723 = cljs.core.next(seq__17588__$1);
var G__17724 = null;
var G__17725 = (0);
var G__17726 = (0);
seq__17588 = G__17723;
chunk__17591 = G__17724;
count__17592 = G__17725;
i__17593 = G__17726;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17583){
var G__17584 = cljs.core.first(seq17583);
var seq17583__$1 = cljs.core.next(seq17583);
var G__17585 = cljs.core.first(seq17583__$1);
var seq17583__$2 = cljs.core.next(seq17583__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17584,G__17585,seq17583__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17605,p__17606){
var map__17608 = p__17605;
var map__17608__$1 = cljs.core.__destructure_map(map__17608);
var runtime = map__17608__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17608__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17609 = p__17606;
var map__17609__$1 = cljs.core.__destructure_map(map__17609);
var msg = map__17609__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17609__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17611 = cljs.core.deref(state_ref);
var map__17611__$1 = cljs.core.__destructure_map(map__17611);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17611__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17611__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17612){
var map__17613 = p__17612;
var map__17613__$1 = cljs.core.__destructure_map(map__17613);
var runtime = map__17613__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17613__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17614,msg){
var map__17615 = p__17614;
var map__17615__$1 = cljs.core.__destructure_map(map__17615);
var runtime = map__17615__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17615__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17617,key,p__17618){
var map__17619 = p__17617;
var map__17619__$1 = cljs.core.__destructure_map(map__17619);
var state = map__17619__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17619__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17620 = p__17618;
var map__17620__$1 = cljs.core.__destructure_map(map__17620);
var spec = map__17620__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17620__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17627,key,spec){
var map__17628 = p__17627;
var map__17628__$1 = cljs.core.__destructure_map(map__17628);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17628__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17629_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17629_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17630_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17630_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17631_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17631_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17632_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17632_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17633_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17633_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17646,key){
var map__17647 = p__17646;
var map__17647__$1 = cljs.core.__destructure_map(map__17647);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17647__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17650,msg){
var map__17651 = p__17650;
var map__17651__$1 = cljs.core.__destructure_map(map__17651);
var runtime = map__17651__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17659,p__17660){
var map__17661 = p__17659;
var map__17661__$1 = cljs.core.__destructure_map(map__17661);
var runtime = map__17661__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17661__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17662 = p__17660;
var map__17662__$1 = cljs.core.__destructure_map(map__17662);
var msg = map__17662__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17662__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17662__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17666 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17668 = null;
var count__17669 = (0);
var i__17670 = (0);
while(true){
if((i__17670 < count__17669)){
var map__17684 = chunk__17668.cljs$core$IIndexed$_nth$arity$2(null,i__17670);
var map__17684__$1 = cljs.core.__destructure_map(map__17684);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17684__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17731 = seq__17666;
var G__17732 = chunk__17668;
var G__17733 = count__17669;
var G__17734 = (i__17670 + (1));
seq__17666 = G__17731;
chunk__17668 = G__17732;
count__17669 = G__17733;
i__17670 = G__17734;
continue;
} else {
var G__17735 = seq__17666;
var G__17736 = chunk__17668;
var G__17737 = count__17669;
var G__17738 = (i__17670 + (1));
seq__17666 = G__17735;
chunk__17668 = G__17736;
count__17669 = G__17737;
i__17670 = G__17738;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17666);
if(temp__5804__auto__){
var seq__17666__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17666__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17666__$1);
var G__17740 = cljs.core.chunk_rest(seq__17666__$1);
var G__17741 = c__5568__auto__;
var G__17742 = cljs.core.count(c__5568__auto__);
var G__17743 = (0);
seq__17666 = G__17740;
chunk__17668 = G__17741;
count__17669 = G__17742;
i__17670 = G__17743;
continue;
} else {
var map__17693 = cljs.core.first(seq__17666__$1);
var map__17693__$1 = cljs.core.__destructure_map(map__17693);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17744 = cljs.core.next(seq__17666__$1);
var G__17745 = null;
var G__17746 = (0);
var G__17747 = (0);
seq__17666 = G__17744;
chunk__17668 = G__17745;
count__17669 = G__17746;
i__17670 = G__17747;
continue;
} else {
var G__17748 = cljs.core.next(seq__17666__$1);
var G__17749 = null;
var G__17750 = (0);
var G__17751 = (0);
seq__17666 = G__17748;
chunk__17668 = G__17749;
count__17669 = G__17750;
i__17670 = G__17751;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
