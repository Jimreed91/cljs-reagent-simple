goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__19540){
var map__19541 = p__19540;
var map__19541__$1 = cljs.core.__destructure_map(map__19541);
var msg = map__19541__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19541__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19541__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__19547){
var map__19548 = p__19547;
var map__19548__$1 = cljs.core.__destructure_map(map__19548);
var msg = map__19548__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19548__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19548__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__19558 = info;
var map__19558__$1 = cljs.core.__destructure_map(map__19558);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19558__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19558__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19558__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19559){
var map__19560 = p__19559;
var map__19560__$1 = cljs.core.__destructure_map(map__19560);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19560__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19560__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__19561){
var map__19562 = p__19561;
var map__19562__$1 = cljs.core.__destructure_map(map__19562);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19562__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__19563 = cljs.core.seq(files_to_require);
var chunk__19564 = null;
var count__19565 = (0);
var i__19566 = (0);
while(true){
if((i__19566 < count__19565)){
var src = chunk__19564.cljs$core$IIndexed$_nth$arity$2(null,i__19566);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__19605 = seq__19563;
var G__19606 = chunk__19564;
var G__19607 = count__19565;
var G__19608 = (i__19566 + (1));
seq__19563 = G__19605;
chunk__19564 = G__19606;
count__19565 = G__19607;
i__19566 = G__19608;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19563);
if(temp__5804__auto__){
var seq__19563__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19563__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19563__$1);
var G__19609 = cljs.core.chunk_rest(seq__19563__$1);
var G__19610 = c__5568__auto__;
var G__19611 = cljs.core.count(c__5568__auto__);
var G__19612 = (0);
seq__19563 = G__19609;
chunk__19564 = G__19610;
count__19565 = G__19611;
i__19566 = G__19612;
continue;
} else {
var src = cljs.core.first(seq__19563__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__19613 = cljs.core.next(seq__19563__$1);
var G__19614 = null;
var G__19615 = (0);
var G__19616 = (0);
seq__19563 = G__19613;
chunk__19564 = G__19614;
count__19565 = G__19615;
i__19566 = G__19616;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__19570,msg){
var map__19572 = p__19570;
var map__19572__$1 = cljs.core.__destructure_map(map__19572);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19572__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__19573){
var map__19574 = p__19573;
var map__19574__$1 = cljs.core.__destructure_map(map__19574);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19574__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19574__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__19575,done,error){
var map__19576 = p__19575;
var map__19576__$1 = cljs.core.__destructure_map(map__19576);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19576__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__19578_19617 = cljs.core.seq(repl_sources);
var chunk__19580_19618 = null;
var count__19581_19619 = (0);
var i__19582_19620 = (0);
while(true){
if((i__19582_19620 < count__19581_19619)){
var map__19586_19621 = chunk__19580_19618.cljs$core$IIndexed$_nth$arity$2(null,i__19582_19620);
var map__19586_19622__$1 = cljs.core.__destructure_map(map__19586_19621);
var src_19623 = map__19586_19622__$1;
var output_name_19624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19586_19622__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_19624)))){
shadow.cljs.devtools.client.node.closure_import(output_name_19624);


var G__19625 = seq__19578_19617;
var G__19626 = chunk__19580_19618;
var G__19627 = count__19581_19619;
var G__19628 = (i__19582_19620 + (1));
seq__19578_19617 = G__19625;
chunk__19580_19618 = G__19626;
count__19581_19619 = G__19627;
i__19582_19620 = G__19628;
continue;
} else {
var G__19629 = seq__19578_19617;
var G__19630 = chunk__19580_19618;
var G__19631 = count__19581_19619;
var G__19632 = (i__19582_19620 + (1));
seq__19578_19617 = G__19629;
chunk__19580_19618 = G__19630;
count__19581_19619 = G__19631;
i__19582_19620 = G__19632;
continue;
}
} else {
var temp__5804__auto___19633 = cljs.core.seq(seq__19578_19617);
if(temp__5804__auto___19633){
var seq__19578_19634__$1 = temp__5804__auto___19633;
if(cljs.core.chunked_seq_QMARK_(seq__19578_19634__$1)){
var c__5568__auto___19635 = cljs.core.chunk_first(seq__19578_19634__$1);
var G__19636 = cljs.core.chunk_rest(seq__19578_19634__$1);
var G__19637 = c__5568__auto___19635;
var G__19638 = cljs.core.count(c__5568__auto___19635);
var G__19639 = (0);
seq__19578_19617 = G__19636;
chunk__19580_19618 = G__19637;
count__19581_19619 = G__19638;
i__19582_19620 = G__19639;
continue;
} else {
var map__19587_19640 = cljs.core.first(seq__19578_19634__$1);
var map__19587_19641__$1 = cljs.core.__destructure_map(map__19587_19640);
var src_19642 = map__19587_19641__$1;
var output_name_19643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19587_19641__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_19643)))){
shadow.cljs.devtools.client.node.closure_import(output_name_19643);


var G__19644 = cljs.core.next(seq__19578_19634__$1);
var G__19645 = null;
var G__19646 = (0);
var G__19647 = (0);
seq__19578_19617 = G__19644;
chunk__19580_19618 = G__19645;
count__19581_19619 = G__19646;
i__19582_19620 = G__19647;
continue;
} else {
var G__19648 = cljs.core.next(seq__19578_19634__$1);
var G__19649 = null;
var G__19650 = (0);
var G__19651 = (0);
seq__19578_19617 = G__19648;
chunk__19580_19618 = G__19649;
count__19581_19619 = G__19650;
i__19582_19620 = G__19651;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e19577){var e = e19577;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__19588,done,error){
var map__19589 = p__19588;
var map__19589__$1 = cljs.core.__destructure_map(map__19589);
var msg = map__19589__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19589__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19589__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__19591_19652 = cljs.core.seq(sources);
var chunk__19592_19653 = null;
var count__19593_19654 = (0);
var i__19594_19655 = (0);
while(true){
if((i__19594_19655 < count__19593_19654)){
var map__19597_19656 = chunk__19592_19653.cljs$core$IIndexed$_nth$arity$2(null,i__19594_19655);
var map__19597_19657__$1 = cljs.core.__destructure_map(map__19597_19656);
var src_19658 = map__19597_19657__$1;
var provides_19659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19597_19657__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_19660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19597_19657__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5045__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_19660)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_19659);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_19660);
} else {
}


var G__19661 = seq__19591_19652;
var G__19662 = chunk__19592_19653;
var G__19663 = count__19593_19654;
var G__19664 = (i__19594_19655 + (1));
seq__19591_19652 = G__19661;
chunk__19592_19653 = G__19662;
count__19593_19654 = G__19663;
i__19594_19655 = G__19664;
continue;
} else {
var temp__5804__auto___19665 = cljs.core.seq(seq__19591_19652);
if(temp__5804__auto___19665){
var seq__19591_19666__$1 = temp__5804__auto___19665;
if(cljs.core.chunked_seq_QMARK_(seq__19591_19666__$1)){
var c__5568__auto___19667 = cljs.core.chunk_first(seq__19591_19666__$1);
var G__19668 = cljs.core.chunk_rest(seq__19591_19666__$1);
var G__19669 = c__5568__auto___19667;
var G__19670 = cljs.core.count(c__5568__auto___19667);
var G__19671 = (0);
seq__19591_19652 = G__19668;
chunk__19592_19653 = G__19669;
count__19593_19654 = G__19670;
i__19594_19655 = G__19671;
continue;
} else {
var map__19598_19672 = cljs.core.first(seq__19591_19666__$1);
var map__19598_19673__$1 = cljs.core.__destructure_map(map__19598_19672);
var src_19674 = map__19598_19673__$1;
var provides_19675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19598_19673__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_19676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19598_19673__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5045__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_19676)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_19675);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_19676);
} else {
}


var G__19677 = cljs.core.next(seq__19591_19666__$1);
var G__19678 = null;
var G__19679 = (0);
var G__19680 = (0);
seq__19591_19652 = G__19677;
chunk__19592_19653 = G__19678;
count__19593_19654 = G__19679;
i__19594_19655 = G__19680;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e19590){var e = e19590;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__19599){
var map__19600 = p__19599;
var map__19600__$1 = cljs.core.__destructure_map(map__19600);
var env = map__19600__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19600__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__19601){
var map__19602 = p__19601;
var map__19602__$1 = cljs.core.__destructure_map(map__19602);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19602__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19602__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__19603){
var map__19604 = p__19603;
var map__19604__$1 = cljs.core.__destructure_map(map__19604);
var svc = map__19604__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19604__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
