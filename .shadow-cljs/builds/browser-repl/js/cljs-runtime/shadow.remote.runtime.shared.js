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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__24435,res){
var map__24436 = p__24435;
var map__24436__$1 = cljs.core.__destructure_map(map__24436);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24436__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24436__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__24437 = res;
var G__24437__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24437,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__24437);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24437__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__24437__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__24439 = arguments.length;
switch (G__24439) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__24440,msg,handlers,timeout_after_ms){
var map__24441 = p__24440;
var map__24441__$1 = cljs.core.__destructure_map(map__24441);
var runtime = map__24441__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24441__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24503 = arguments.length;
var i__5770__auto___24504 = (0);
while(true){
if((i__5770__auto___24504 < len__5769__auto___24503)){
args__5775__auto__.push((arguments[i__5770__auto___24504]));

var G__24506 = (i__5770__auto___24504 + (1));
i__5770__auto___24504 = G__24506;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__24445,ev,args){
var map__24446 = p__24445;
var map__24446__$1 = cljs.core.__destructure_map(map__24446);
var runtime = map__24446__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24446__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__24447 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__24450 = null;
var count__24451 = (0);
var i__24452 = (0);
while(true){
if((i__24452 < count__24451)){
var ext = chunk__24450.cljs$core$IIndexed$_nth$arity$2(null,i__24452);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__24507 = seq__24447;
var G__24508 = chunk__24450;
var G__24509 = count__24451;
var G__24510 = (i__24452 + (1));
seq__24447 = G__24507;
chunk__24450 = G__24508;
count__24451 = G__24509;
i__24452 = G__24510;
continue;
} else {
var G__24511 = seq__24447;
var G__24512 = chunk__24450;
var G__24513 = count__24451;
var G__24514 = (i__24452 + (1));
seq__24447 = G__24511;
chunk__24450 = G__24512;
count__24451 = G__24513;
i__24452 = G__24514;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24447);
if(temp__5804__auto__){
var seq__24447__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24447__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24447__$1);
var G__24515 = cljs.core.chunk_rest(seq__24447__$1);
var G__24516 = c__5568__auto__;
var G__24517 = cljs.core.count(c__5568__auto__);
var G__24518 = (0);
seq__24447 = G__24515;
chunk__24450 = G__24516;
count__24451 = G__24517;
i__24452 = G__24518;
continue;
} else {
var ext = cljs.core.first(seq__24447__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__24519 = cljs.core.next(seq__24447__$1);
var G__24520 = null;
var G__24521 = (0);
var G__24522 = (0);
seq__24447 = G__24519;
chunk__24450 = G__24520;
count__24451 = G__24521;
i__24452 = G__24522;
continue;
} else {
var G__24523 = cljs.core.next(seq__24447__$1);
var G__24524 = null;
var G__24525 = (0);
var G__24526 = (0);
seq__24447 = G__24523;
chunk__24450 = G__24524;
count__24451 = G__24525;
i__24452 = G__24526;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq24442){
var G__24443 = cljs.core.first(seq24442);
var seq24442__$1 = cljs.core.next(seq24442);
var G__24444 = cljs.core.first(seq24442__$1);
var seq24442__$2 = cljs.core.next(seq24442__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24443,G__24444,seq24442__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__24455,p__24456){
var map__24457 = p__24455;
var map__24457__$1 = cljs.core.__destructure_map(map__24457);
var runtime = map__24457__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24457__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__24458 = p__24456;
var map__24458__$1 = cljs.core.__destructure_map(map__24458);
var msg = map__24458__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24458__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__24459 = cljs.core.deref(state_ref);
var map__24459__$1 = cljs.core.__destructure_map(map__24459);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24459__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24459__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__24461){
var map__24462 = p__24461;
var map__24462__$1 = cljs.core.__destructure_map(map__24462);
var runtime = map__24462__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24462__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__24463,msg){
var map__24464 = p__24463;
var map__24464__$1 = cljs.core.__destructure_map(map__24464);
var runtime = map__24464__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24464__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__24466,key,p__24467){
var map__24468 = p__24466;
var map__24468__$1 = cljs.core.__destructure_map(map__24468);
var state = map__24468__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24468__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__24469 = p__24467;
var map__24469__$1 = cljs.core.__destructure_map(map__24469);
var spec = map__24469__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24469__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__24471,key,spec){
var map__24472 = p__24471;
var map__24472__$1 = cljs.core.__destructure_map(map__24472);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24472__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__24473_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__24473_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__24474_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__24474_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__24475_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__24475_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__24476_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__24476_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__24477_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__24477_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__24479,key){
var map__24480 = p__24479;
var map__24480__$1 = cljs.core.__destructure_map(map__24480);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24480__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__24483,msg){
var map__24484 = p__24483;
var map__24484__$1 = cljs.core.__destructure_map(map__24484);
var runtime = map__24484__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24484__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__24486,p__24487){
var map__24488 = p__24486;
var map__24488__$1 = cljs.core.__destructure_map(map__24488);
var runtime = map__24488__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24488__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__24489 = p__24487;
var map__24489__$1 = cljs.core.__destructure_map(map__24489);
var msg = map__24489__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24489__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24489__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__24491 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__24493 = null;
var count__24494 = (0);
var i__24495 = (0);
while(true){
if((i__24495 < count__24494)){
var map__24499 = chunk__24493.cljs$core$IIndexed$_nth$arity$2(null,i__24495);
var map__24499__$1 = cljs.core.__destructure_map(map__24499);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24499__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__24529 = seq__24491;
var G__24530 = chunk__24493;
var G__24531 = count__24494;
var G__24532 = (i__24495 + (1));
seq__24491 = G__24529;
chunk__24493 = G__24530;
count__24494 = G__24531;
i__24495 = G__24532;
continue;
} else {
var G__24533 = seq__24491;
var G__24534 = chunk__24493;
var G__24535 = count__24494;
var G__24536 = (i__24495 + (1));
seq__24491 = G__24533;
chunk__24493 = G__24534;
count__24494 = G__24535;
i__24495 = G__24536;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24491);
if(temp__5804__auto__){
var seq__24491__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24491__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24491__$1);
var G__24537 = cljs.core.chunk_rest(seq__24491__$1);
var G__24538 = c__5568__auto__;
var G__24539 = cljs.core.count(c__5568__auto__);
var G__24540 = (0);
seq__24491 = G__24537;
chunk__24493 = G__24538;
count__24494 = G__24539;
i__24495 = G__24540;
continue;
} else {
var map__24501 = cljs.core.first(seq__24491__$1);
var map__24501__$1 = cljs.core.__destructure_map(map__24501);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24501__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__24541 = cljs.core.next(seq__24491__$1);
var G__24542 = null;
var G__24543 = (0);
var G__24544 = (0);
seq__24491 = G__24541;
chunk__24493 = G__24542;
count__24494 = G__24543;
i__24495 = G__24544;
continue;
} else {
var G__24545 = cljs.core.next(seq__24491__$1);
var G__24546 = null;
var G__24547 = (0);
var G__24548 = (0);
seq__24491 = G__24545;
chunk__24493 = G__24546;
count__24494 = G__24547;
i__24495 = G__24548;
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
