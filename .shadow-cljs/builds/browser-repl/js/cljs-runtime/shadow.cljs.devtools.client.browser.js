goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26252 = arguments.length;
var i__5770__auto___26253 = (0);
while(true){
if((i__5770__auto___26253 < len__5769__auto___26252)){
args__5775__auto__.push((arguments[i__5770__auto___26253]));

var G__26254 = (i__5770__auto___26253 + (1));
i__5770__auto___26253 = G__26254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq25961){
var G__25962 = cljs.core.first(seq25961);
var seq25961__$1 = cljs.core.next(seq25961);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25962,seq25961__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__25966 = cljs.core.seq(sources);
var chunk__25967 = null;
var count__25968 = (0);
var i__25969 = (0);
while(true){
if((i__25969 < count__25968)){
var map__25975 = chunk__25967.cljs$core$IIndexed$_nth$arity$2(null,i__25969);
var map__25975__$1 = cljs.core.__destructure_map(map__25975);
var src = map__25975__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25978){var e_26255 = e25978;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26255);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26255.message)].join('')));
}

var G__26256 = seq__25966;
var G__26257 = chunk__25967;
var G__26258 = count__25968;
var G__26259 = (i__25969 + (1));
seq__25966 = G__26256;
chunk__25967 = G__26257;
count__25968 = G__26258;
i__25969 = G__26259;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25966);
if(temp__5804__auto__){
var seq__25966__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25966__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25966__$1);
var G__26260 = cljs.core.chunk_rest(seq__25966__$1);
var G__26261 = c__5568__auto__;
var G__26262 = cljs.core.count(c__5568__auto__);
var G__26263 = (0);
seq__25966 = G__26260;
chunk__25967 = G__26261;
count__25968 = G__26262;
i__25969 = G__26263;
continue;
} else {
var map__25979 = cljs.core.first(seq__25966__$1);
var map__25979__$1 = cljs.core.__destructure_map(map__25979);
var src = map__25979__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25979__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25979__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25979__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25979__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25980){var e_26264 = e25980;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_26264);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_26264.message)].join('')));
}

var G__26265 = cljs.core.next(seq__25966__$1);
var G__26266 = null;
var G__26267 = (0);
var G__26268 = (0);
seq__25966 = G__26265;
chunk__25967 = G__26266;
count__25968 = G__26267;
i__25969 = G__26268;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__25982 = cljs.core.seq(js_requires);
var chunk__25983 = null;
var count__25984 = (0);
var i__25985 = (0);
while(true){
if((i__25985 < count__25984)){
var js_ns = chunk__25983.cljs$core$IIndexed$_nth$arity$2(null,i__25985);
var require_str_26269 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26269);


var G__26270 = seq__25982;
var G__26271 = chunk__25983;
var G__26272 = count__25984;
var G__26273 = (i__25985 + (1));
seq__25982 = G__26270;
chunk__25983 = G__26271;
count__25984 = G__26272;
i__25985 = G__26273;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25982);
if(temp__5804__auto__){
var seq__25982__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25982__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25982__$1);
var G__26274 = cljs.core.chunk_rest(seq__25982__$1);
var G__26275 = c__5568__auto__;
var G__26276 = cljs.core.count(c__5568__auto__);
var G__26277 = (0);
seq__25982 = G__26274;
chunk__25983 = G__26275;
count__25984 = G__26276;
i__25985 = G__26277;
continue;
} else {
var js_ns = cljs.core.first(seq__25982__$1);
var require_str_26278 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_26278);


var G__26279 = cljs.core.next(seq__25982__$1);
var G__26280 = null;
var G__26281 = (0);
var G__26282 = (0);
seq__25982 = G__26279;
chunk__25983 = G__26280;
count__25984 = G__26281;
i__25985 = G__26282;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__25988){
var map__25989 = p__25988;
var map__25989__$1 = cljs.core.__destructure_map(map__25989);
var msg = map__25989__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25990(s__25991){
return (new cljs.core.LazySeq(null,(function (){
var s__25991__$1 = s__25991;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25991__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__25996 = cljs.core.first(xs__6360__auto__);
var map__25996__$1 = cljs.core.__destructure_map(map__25996);
var src = map__25996__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25996__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25996__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__25991__$1,map__25996,map__25996__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25989,map__25989__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25990_$_iter__25992(s__25993){
return (new cljs.core.LazySeq(null,((function (s__25991__$1,map__25996,map__25996__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25989,map__25989__$1,msg,info,reload_info){
return (function (){
var s__25993__$1 = s__25993;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__25993__$1);
if(temp__5804__auto____$1){
var s__25993__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25993__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25993__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25995 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25994 = (0);
while(true){
if((i__25994 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__25994);
cljs.core.chunk_append(b__25995,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__26283 = (i__25994 + (1));
i__25994 = G__26283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25995),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25990_$_iter__25992(cljs.core.chunk_rest(s__25993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25995),null);
}
} else {
var warning = cljs.core.first(s__25993__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25990_$_iter__25992(cljs.core.rest(s__25993__$2)));
}
} else {
return null;
}
break;
}
});})(s__25991__$1,map__25996,map__25996__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25989,map__25989__$1,msg,info,reload_info))
,null,null));
});})(s__25991__$1,map__25996,map__25996__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25989,map__25989__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25990(cljs.core.rest(s__25991__$1)));
} else {
var G__26284 = cljs.core.rest(s__25991__$1);
s__25991__$1 = G__26284;
continue;
}
} else {
var G__26285 = cljs.core.rest(s__25991__$1);
s__25991__$1 = G__26285;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__25999_26286 = cljs.core.seq(warnings);
var chunk__26000_26287 = null;
var count__26001_26288 = (0);
var i__26002_26289 = (0);
while(true){
if((i__26002_26289 < count__26001_26288)){
var map__26005_26290 = chunk__26000_26287.cljs$core$IIndexed$_nth$arity$2(null,i__26002_26289);
var map__26005_26291__$1 = cljs.core.__destructure_map(map__26005_26290);
var w_26292 = map__26005_26291__$1;
var msg_26293__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26005_26291__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26005_26291__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26005_26291__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26005_26291__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26296)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26294),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26295),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26293__$1)].join(''));


var G__26297 = seq__25999_26286;
var G__26298 = chunk__26000_26287;
var G__26299 = count__26001_26288;
var G__26300 = (i__26002_26289 + (1));
seq__25999_26286 = G__26297;
chunk__26000_26287 = G__26298;
count__26001_26288 = G__26299;
i__26002_26289 = G__26300;
continue;
} else {
var temp__5804__auto___26301 = cljs.core.seq(seq__25999_26286);
if(temp__5804__auto___26301){
var seq__25999_26302__$1 = temp__5804__auto___26301;
if(cljs.core.chunked_seq_QMARK_(seq__25999_26302__$1)){
var c__5568__auto___26303 = cljs.core.chunk_first(seq__25999_26302__$1);
var G__26304 = cljs.core.chunk_rest(seq__25999_26302__$1);
var G__26305 = c__5568__auto___26303;
var G__26306 = cljs.core.count(c__5568__auto___26303);
var G__26307 = (0);
seq__25999_26286 = G__26304;
chunk__26000_26287 = G__26305;
count__26001_26288 = G__26306;
i__26002_26289 = G__26307;
continue;
} else {
var map__26006_26308 = cljs.core.first(seq__25999_26302__$1);
var map__26006_26309__$1 = cljs.core.__destructure_map(map__26006_26308);
var w_26310 = map__26006_26309__$1;
var msg_26311__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006_26309__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_26312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006_26309__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006_26309__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_26314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006_26309__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_26314)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_26312),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_26313),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_26311__$1)].join(''));


var G__26315 = cljs.core.next(seq__25999_26302__$1);
var G__26316 = null;
var G__26317 = (0);
var G__26318 = (0);
seq__25999_26286 = G__26315;
chunk__26000_26287 = G__26316;
count__26001_26288 = G__26317;
i__26002_26289 = G__26318;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__25987_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__25987_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__26007){
var map__26008 = p__26007;
var map__26008__$1 = cljs.core.__destructure_map(map__26008);
var msg = map__26008__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26008__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26008__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__26009 = cljs.core.seq(updates);
var chunk__26011 = null;
var count__26012 = (0);
var i__26013 = (0);
while(true){
if((i__26013 < count__26012)){
var path = chunk__26011.cljs$core$IIndexed$_nth$arity$2(null,i__26013);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26124_26319 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26128_26320 = null;
var count__26129_26321 = (0);
var i__26130_26322 = (0);
while(true){
if((i__26130_26322 < count__26129_26321)){
var node_26323 = chunk__26128_26320.cljs$core$IIndexed$_nth$arity$2(null,i__26130_26322);
if(cljs.core.not(node_26323.shadow$old)){
var path_match_26324 = shadow.cljs.devtools.client.browser.match_paths(node_26323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26324)){
var new_link_26325 = (function (){var G__26156 = node_26323.cloneNode(true);
G__26156.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26324),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26156;
})();
(node_26323.shadow$old = true);

(new_link_26325.onload = ((function (seq__26124_26319,chunk__26128_26320,count__26129_26321,i__26130_26322,seq__26009,chunk__26011,count__26012,i__26013,new_link_26325,path_match_26324,node_26323,path,map__26008,map__26008__$1,msg,updates,reload_info){
return (function (e){
var seq__26157_26326 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26159_26327 = null;
var count__26160_26328 = (0);
var i__26161_26329 = (0);
while(true){
if((i__26161_26329 < count__26160_26328)){
var map__26165_26330 = chunk__26159_26327.cljs$core$IIndexed$_nth$arity$2(null,i__26161_26329);
var map__26165_26331__$1 = cljs.core.__destructure_map(map__26165_26330);
var task_26332 = map__26165_26331__$1;
var fn_str_26333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165_26331__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165_26331__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26335 = goog.getObjectByName(fn_str_26333,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26334)].join(''));

(fn_obj_26335.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26335.cljs$core$IFn$_invoke$arity$2(path,new_link_26325) : fn_obj_26335.call(null,path,new_link_26325));


var G__26336 = seq__26157_26326;
var G__26337 = chunk__26159_26327;
var G__26338 = count__26160_26328;
var G__26339 = (i__26161_26329 + (1));
seq__26157_26326 = G__26336;
chunk__26159_26327 = G__26337;
count__26160_26328 = G__26338;
i__26161_26329 = G__26339;
continue;
} else {
var temp__5804__auto___26340 = cljs.core.seq(seq__26157_26326);
if(temp__5804__auto___26340){
var seq__26157_26341__$1 = temp__5804__auto___26340;
if(cljs.core.chunked_seq_QMARK_(seq__26157_26341__$1)){
var c__5568__auto___26342 = cljs.core.chunk_first(seq__26157_26341__$1);
var G__26343 = cljs.core.chunk_rest(seq__26157_26341__$1);
var G__26344 = c__5568__auto___26342;
var G__26345 = cljs.core.count(c__5568__auto___26342);
var G__26346 = (0);
seq__26157_26326 = G__26343;
chunk__26159_26327 = G__26344;
count__26160_26328 = G__26345;
i__26161_26329 = G__26346;
continue;
} else {
var map__26166_26347 = cljs.core.first(seq__26157_26341__$1);
var map__26166_26348__$1 = cljs.core.__destructure_map(map__26166_26347);
var task_26349 = map__26166_26348__$1;
var fn_str_26350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26166_26348__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26166_26348__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26352 = goog.getObjectByName(fn_str_26350,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26351)].join(''));

(fn_obj_26352.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26352.cljs$core$IFn$_invoke$arity$2(path,new_link_26325) : fn_obj_26352.call(null,path,new_link_26325));


var G__26353 = cljs.core.next(seq__26157_26341__$1);
var G__26354 = null;
var G__26355 = (0);
var G__26356 = (0);
seq__26157_26326 = G__26353;
chunk__26159_26327 = G__26354;
count__26160_26328 = G__26355;
i__26161_26329 = G__26356;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26323);
});})(seq__26124_26319,chunk__26128_26320,count__26129_26321,i__26130_26322,seq__26009,chunk__26011,count__26012,i__26013,new_link_26325,path_match_26324,node_26323,path,map__26008,map__26008__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26324], 0));

goog.dom.insertSiblingAfter(new_link_26325,node_26323);


var G__26357 = seq__26124_26319;
var G__26358 = chunk__26128_26320;
var G__26359 = count__26129_26321;
var G__26360 = (i__26130_26322 + (1));
seq__26124_26319 = G__26357;
chunk__26128_26320 = G__26358;
count__26129_26321 = G__26359;
i__26130_26322 = G__26360;
continue;
} else {
var G__26361 = seq__26124_26319;
var G__26362 = chunk__26128_26320;
var G__26363 = count__26129_26321;
var G__26364 = (i__26130_26322 + (1));
seq__26124_26319 = G__26361;
chunk__26128_26320 = G__26362;
count__26129_26321 = G__26363;
i__26130_26322 = G__26364;
continue;
}
} else {
var G__26365 = seq__26124_26319;
var G__26366 = chunk__26128_26320;
var G__26367 = count__26129_26321;
var G__26368 = (i__26130_26322 + (1));
seq__26124_26319 = G__26365;
chunk__26128_26320 = G__26366;
count__26129_26321 = G__26367;
i__26130_26322 = G__26368;
continue;
}
} else {
var temp__5804__auto___26369 = cljs.core.seq(seq__26124_26319);
if(temp__5804__auto___26369){
var seq__26124_26370__$1 = temp__5804__auto___26369;
if(cljs.core.chunked_seq_QMARK_(seq__26124_26370__$1)){
var c__5568__auto___26371 = cljs.core.chunk_first(seq__26124_26370__$1);
var G__26372 = cljs.core.chunk_rest(seq__26124_26370__$1);
var G__26373 = c__5568__auto___26371;
var G__26374 = cljs.core.count(c__5568__auto___26371);
var G__26375 = (0);
seq__26124_26319 = G__26372;
chunk__26128_26320 = G__26373;
count__26129_26321 = G__26374;
i__26130_26322 = G__26375;
continue;
} else {
var node_26376 = cljs.core.first(seq__26124_26370__$1);
if(cljs.core.not(node_26376.shadow$old)){
var path_match_26377 = shadow.cljs.devtools.client.browser.match_paths(node_26376.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26377)){
var new_link_26378 = (function (){var G__26167 = node_26376.cloneNode(true);
G__26167.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26377),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26167;
})();
(node_26376.shadow$old = true);

(new_link_26378.onload = ((function (seq__26124_26319,chunk__26128_26320,count__26129_26321,i__26130_26322,seq__26009,chunk__26011,count__26012,i__26013,new_link_26378,path_match_26377,node_26376,seq__26124_26370__$1,temp__5804__auto___26369,path,map__26008,map__26008__$1,msg,updates,reload_info){
return (function (e){
var seq__26168_26379 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26170_26380 = null;
var count__26171_26381 = (0);
var i__26172_26382 = (0);
while(true){
if((i__26172_26382 < count__26171_26381)){
var map__26176_26383 = chunk__26170_26380.cljs$core$IIndexed$_nth$arity$2(null,i__26172_26382);
var map__26176_26384__$1 = cljs.core.__destructure_map(map__26176_26383);
var task_26385 = map__26176_26384__$1;
var fn_str_26386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26176_26384__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26176_26384__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26388 = goog.getObjectByName(fn_str_26386,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26387)].join(''));

(fn_obj_26388.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26388.cljs$core$IFn$_invoke$arity$2(path,new_link_26378) : fn_obj_26388.call(null,path,new_link_26378));


var G__26389 = seq__26168_26379;
var G__26390 = chunk__26170_26380;
var G__26391 = count__26171_26381;
var G__26392 = (i__26172_26382 + (1));
seq__26168_26379 = G__26389;
chunk__26170_26380 = G__26390;
count__26171_26381 = G__26391;
i__26172_26382 = G__26392;
continue;
} else {
var temp__5804__auto___26393__$1 = cljs.core.seq(seq__26168_26379);
if(temp__5804__auto___26393__$1){
var seq__26168_26394__$1 = temp__5804__auto___26393__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26168_26394__$1)){
var c__5568__auto___26395 = cljs.core.chunk_first(seq__26168_26394__$1);
var G__26396 = cljs.core.chunk_rest(seq__26168_26394__$1);
var G__26397 = c__5568__auto___26395;
var G__26398 = cljs.core.count(c__5568__auto___26395);
var G__26399 = (0);
seq__26168_26379 = G__26396;
chunk__26170_26380 = G__26397;
count__26171_26381 = G__26398;
i__26172_26382 = G__26399;
continue;
} else {
var map__26177_26400 = cljs.core.first(seq__26168_26394__$1);
var map__26177_26401__$1 = cljs.core.__destructure_map(map__26177_26400);
var task_26402 = map__26177_26401__$1;
var fn_str_26403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26177_26401__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26177_26401__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26405 = goog.getObjectByName(fn_str_26403,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26404)].join(''));

(fn_obj_26405.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26405.cljs$core$IFn$_invoke$arity$2(path,new_link_26378) : fn_obj_26405.call(null,path,new_link_26378));


var G__26406 = cljs.core.next(seq__26168_26394__$1);
var G__26407 = null;
var G__26408 = (0);
var G__26409 = (0);
seq__26168_26379 = G__26406;
chunk__26170_26380 = G__26407;
count__26171_26381 = G__26408;
i__26172_26382 = G__26409;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26376);
});})(seq__26124_26319,chunk__26128_26320,count__26129_26321,i__26130_26322,seq__26009,chunk__26011,count__26012,i__26013,new_link_26378,path_match_26377,node_26376,seq__26124_26370__$1,temp__5804__auto___26369,path,map__26008,map__26008__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26377], 0));

goog.dom.insertSiblingAfter(new_link_26378,node_26376);


var G__26410 = cljs.core.next(seq__26124_26370__$1);
var G__26411 = null;
var G__26412 = (0);
var G__26413 = (0);
seq__26124_26319 = G__26410;
chunk__26128_26320 = G__26411;
count__26129_26321 = G__26412;
i__26130_26322 = G__26413;
continue;
} else {
var G__26414 = cljs.core.next(seq__26124_26370__$1);
var G__26415 = null;
var G__26416 = (0);
var G__26417 = (0);
seq__26124_26319 = G__26414;
chunk__26128_26320 = G__26415;
count__26129_26321 = G__26416;
i__26130_26322 = G__26417;
continue;
}
} else {
var G__26418 = cljs.core.next(seq__26124_26370__$1);
var G__26419 = null;
var G__26420 = (0);
var G__26421 = (0);
seq__26124_26319 = G__26418;
chunk__26128_26320 = G__26419;
count__26129_26321 = G__26420;
i__26130_26322 = G__26421;
continue;
}
}
} else {
}
}
break;
}


var G__26422 = seq__26009;
var G__26423 = chunk__26011;
var G__26424 = count__26012;
var G__26425 = (i__26013 + (1));
seq__26009 = G__26422;
chunk__26011 = G__26423;
count__26012 = G__26424;
i__26013 = G__26425;
continue;
} else {
var G__26426 = seq__26009;
var G__26427 = chunk__26011;
var G__26428 = count__26012;
var G__26429 = (i__26013 + (1));
seq__26009 = G__26426;
chunk__26011 = G__26427;
count__26012 = G__26428;
i__26013 = G__26429;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26009);
if(temp__5804__auto__){
var seq__26009__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26009__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26009__$1);
var G__26430 = cljs.core.chunk_rest(seq__26009__$1);
var G__26431 = c__5568__auto__;
var G__26432 = cljs.core.count(c__5568__auto__);
var G__26433 = (0);
seq__26009 = G__26430;
chunk__26011 = G__26431;
count__26012 = G__26432;
i__26013 = G__26433;
continue;
} else {
var path = cljs.core.first(seq__26009__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26178_26434 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26182_26435 = null;
var count__26183_26436 = (0);
var i__26184_26437 = (0);
while(true){
if((i__26184_26437 < count__26183_26436)){
var node_26438 = chunk__26182_26435.cljs$core$IIndexed$_nth$arity$2(null,i__26184_26437);
if(cljs.core.not(node_26438.shadow$old)){
var path_match_26439 = shadow.cljs.devtools.client.browser.match_paths(node_26438.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26439)){
var new_link_26440 = (function (){var G__26210 = node_26438.cloneNode(true);
G__26210.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26439),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26210;
})();
(node_26438.shadow$old = true);

(new_link_26440.onload = ((function (seq__26178_26434,chunk__26182_26435,count__26183_26436,i__26184_26437,seq__26009,chunk__26011,count__26012,i__26013,new_link_26440,path_match_26439,node_26438,path,seq__26009__$1,temp__5804__auto__,map__26008,map__26008__$1,msg,updates,reload_info){
return (function (e){
var seq__26211_26441 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26213_26442 = null;
var count__26214_26443 = (0);
var i__26215_26444 = (0);
while(true){
if((i__26215_26444 < count__26214_26443)){
var map__26219_26445 = chunk__26213_26442.cljs$core$IIndexed$_nth$arity$2(null,i__26215_26444);
var map__26219_26446__$1 = cljs.core.__destructure_map(map__26219_26445);
var task_26447 = map__26219_26446__$1;
var fn_str_26448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26219_26446__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26219_26446__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26450 = goog.getObjectByName(fn_str_26448,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26449)].join(''));

(fn_obj_26450.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26450.cljs$core$IFn$_invoke$arity$2(path,new_link_26440) : fn_obj_26450.call(null,path,new_link_26440));


var G__26451 = seq__26211_26441;
var G__26452 = chunk__26213_26442;
var G__26453 = count__26214_26443;
var G__26454 = (i__26215_26444 + (1));
seq__26211_26441 = G__26451;
chunk__26213_26442 = G__26452;
count__26214_26443 = G__26453;
i__26215_26444 = G__26454;
continue;
} else {
var temp__5804__auto___26455__$1 = cljs.core.seq(seq__26211_26441);
if(temp__5804__auto___26455__$1){
var seq__26211_26456__$1 = temp__5804__auto___26455__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26211_26456__$1)){
var c__5568__auto___26457 = cljs.core.chunk_first(seq__26211_26456__$1);
var G__26458 = cljs.core.chunk_rest(seq__26211_26456__$1);
var G__26459 = c__5568__auto___26457;
var G__26460 = cljs.core.count(c__5568__auto___26457);
var G__26461 = (0);
seq__26211_26441 = G__26458;
chunk__26213_26442 = G__26459;
count__26214_26443 = G__26460;
i__26215_26444 = G__26461;
continue;
} else {
var map__26220_26462 = cljs.core.first(seq__26211_26456__$1);
var map__26220_26463__$1 = cljs.core.__destructure_map(map__26220_26462);
var task_26464 = map__26220_26463__$1;
var fn_str_26465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26220_26463__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26220_26463__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26467 = goog.getObjectByName(fn_str_26465,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26466)].join(''));

(fn_obj_26467.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26467.cljs$core$IFn$_invoke$arity$2(path,new_link_26440) : fn_obj_26467.call(null,path,new_link_26440));


var G__26468 = cljs.core.next(seq__26211_26456__$1);
var G__26469 = null;
var G__26470 = (0);
var G__26471 = (0);
seq__26211_26441 = G__26468;
chunk__26213_26442 = G__26469;
count__26214_26443 = G__26470;
i__26215_26444 = G__26471;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26438);
});})(seq__26178_26434,chunk__26182_26435,count__26183_26436,i__26184_26437,seq__26009,chunk__26011,count__26012,i__26013,new_link_26440,path_match_26439,node_26438,path,seq__26009__$1,temp__5804__auto__,map__26008,map__26008__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26439], 0));

goog.dom.insertSiblingAfter(new_link_26440,node_26438);


var G__26472 = seq__26178_26434;
var G__26473 = chunk__26182_26435;
var G__26474 = count__26183_26436;
var G__26475 = (i__26184_26437 + (1));
seq__26178_26434 = G__26472;
chunk__26182_26435 = G__26473;
count__26183_26436 = G__26474;
i__26184_26437 = G__26475;
continue;
} else {
var G__26476 = seq__26178_26434;
var G__26477 = chunk__26182_26435;
var G__26478 = count__26183_26436;
var G__26479 = (i__26184_26437 + (1));
seq__26178_26434 = G__26476;
chunk__26182_26435 = G__26477;
count__26183_26436 = G__26478;
i__26184_26437 = G__26479;
continue;
}
} else {
var G__26480 = seq__26178_26434;
var G__26481 = chunk__26182_26435;
var G__26482 = count__26183_26436;
var G__26483 = (i__26184_26437 + (1));
seq__26178_26434 = G__26480;
chunk__26182_26435 = G__26481;
count__26183_26436 = G__26482;
i__26184_26437 = G__26483;
continue;
}
} else {
var temp__5804__auto___26484__$1 = cljs.core.seq(seq__26178_26434);
if(temp__5804__auto___26484__$1){
var seq__26178_26485__$1 = temp__5804__auto___26484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26178_26485__$1)){
var c__5568__auto___26486 = cljs.core.chunk_first(seq__26178_26485__$1);
var G__26487 = cljs.core.chunk_rest(seq__26178_26485__$1);
var G__26488 = c__5568__auto___26486;
var G__26489 = cljs.core.count(c__5568__auto___26486);
var G__26490 = (0);
seq__26178_26434 = G__26487;
chunk__26182_26435 = G__26488;
count__26183_26436 = G__26489;
i__26184_26437 = G__26490;
continue;
} else {
var node_26491 = cljs.core.first(seq__26178_26485__$1);
if(cljs.core.not(node_26491.shadow$old)){
var path_match_26492 = shadow.cljs.devtools.client.browser.match_paths(node_26491.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26492)){
var new_link_26493 = (function (){var G__26221 = node_26491.cloneNode(true);
G__26221.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26492),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26221;
})();
(node_26491.shadow$old = true);

(new_link_26493.onload = ((function (seq__26178_26434,chunk__26182_26435,count__26183_26436,i__26184_26437,seq__26009,chunk__26011,count__26012,i__26013,new_link_26493,path_match_26492,node_26491,seq__26178_26485__$1,temp__5804__auto___26484__$1,path,seq__26009__$1,temp__5804__auto__,map__26008,map__26008__$1,msg,updates,reload_info){
return (function (e){
var seq__26222_26494 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26224_26495 = null;
var count__26225_26496 = (0);
var i__26226_26497 = (0);
while(true){
if((i__26226_26497 < count__26225_26496)){
var map__26230_26498 = chunk__26224_26495.cljs$core$IIndexed$_nth$arity$2(null,i__26226_26497);
var map__26230_26499__$1 = cljs.core.__destructure_map(map__26230_26498);
var task_26500 = map__26230_26499__$1;
var fn_str_26501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26230_26499__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26230_26499__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26503 = goog.getObjectByName(fn_str_26501,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26502)].join(''));

(fn_obj_26503.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26503.cljs$core$IFn$_invoke$arity$2(path,new_link_26493) : fn_obj_26503.call(null,path,new_link_26493));


var G__26504 = seq__26222_26494;
var G__26505 = chunk__26224_26495;
var G__26506 = count__26225_26496;
var G__26507 = (i__26226_26497 + (1));
seq__26222_26494 = G__26504;
chunk__26224_26495 = G__26505;
count__26225_26496 = G__26506;
i__26226_26497 = G__26507;
continue;
} else {
var temp__5804__auto___26508__$2 = cljs.core.seq(seq__26222_26494);
if(temp__5804__auto___26508__$2){
var seq__26222_26509__$1 = temp__5804__auto___26508__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26222_26509__$1)){
var c__5568__auto___26510 = cljs.core.chunk_first(seq__26222_26509__$1);
var G__26511 = cljs.core.chunk_rest(seq__26222_26509__$1);
var G__26512 = c__5568__auto___26510;
var G__26513 = cljs.core.count(c__5568__auto___26510);
var G__26514 = (0);
seq__26222_26494 = G__26511;
chunk__26224_26495 = G__26512;
count__26225_26496 = G__26513;
i__26226_26497 = G__26514;
continue;
} else {
var map__26231_26515 = cljs.core.first(seq__26222_26509__$1);
var map__26231_26516__$1 = cljs.core.__destructure_map(map__26231_26515);
var task_26517 = map__26231_26516__$1;
var fn_str_26518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26231_26516__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26231_26516__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26520 = goog.getObjectByName(fn_str_26518,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26519)].join(''));

(fn_obj_26520.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26520.cljs$core$IFn$_invoke$arity$2(path,new_link_26493) : fn_obj_26520.call(null,path,new_link_26493));


var G__26521 = cljs.core.next(seq__26222_26509__$1);
var G__26522 = null;
var G__26523 = (0);
var G__26524 = (0);
seq__26222_26494 = G__26521;
chunk__26224_26495 = G__26522;
count__26225_26496 = G__26523;
i__26226_26497 = G__26524;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26491);
});})(seq__26178_26434,chunk__26182_26435,count__26183_26436,i__26184_26437,seq__26009,chunk__26011,count__26012,i__26013,new_link_26493,path_match_26492,node_26491,seq__26178_26485__$1,temp__5804__auto___26484__$1,path,seq__26009__$1,temp__5804__auto__,map__26008,map__26008__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26492], 0));

goog.dom.insertSiblingAfter(new_link_26493,node_26491);


var G__26525 = cljs.core.next(seq__26178_26485__$1);
var G__26526 = null;
var G__26527 = (0);
var G__26528 = (0);
seq__26178_26434 = G__26525;
chunk__26182_26435 = G__26526;
count__26183_26436 = G__26527;
i__26184_26437 = G__26528;
continue;
} else {
var G__26529 = cljs.core.next(seq__26178_26485__$1);
var G__26530 = null;
var G__26531 = (0);
var G__26532 = (0);
seq__26178_26434 = G__26529;
chunk__26182_26435 = G__26530;
count__26183_26436 = G__26531;
i__26184_26437 = G__26532;
continue;
}
} else {
var G__26533 = cljs.core.next(seq__26178_26485__$1);
var G__26534 = null;
var G__26535 = (0);
var G__26536 = (0);
seq__26178_26434 = G__26533;
chunk__26182_26435 = G__26534;
count__26183_26436 = G__26535;
i__26184_26437 = G__26536;
continue;
}
}
} else {
}
}
break;
}


var G__26537 = cljs.core.next(seq__26009__$1);
var G__26538 = null;
var G__26539 = (0);
var G__26540 = (0);
seq__26009 = G__26537;
chunk__26011 = G__26538;
count__26012 = G__26539;
i__26013 = G__26540;
continue;
} else {
var G__26541 = cljs.core.next(seq__26009__$1);
var G__26542 = null;
var G__26543 = (0);
var G__26544 = (0);
seq__26009 = G__26541;
chunk__26011 = G__26542;
count__26012 = G__26543;
i__26013 = G__26544;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__26232){
var map__26233 = p__26232;
var map__26233__$1 = cljs.core.__destructure_map(map__26233);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26233__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__26234){
var map__26235 = p__26234;
var map__26235__$1 = cljs.core.__destructure_map(map__26235);
var _ = map__26235__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26235__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__26236,done,error){
var map__26237 = p__26236;
var map__26237__$1 = cljs.core.__destructure_map(map__26237);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26237__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__26238,done,error){
var map__26239 = p__26238;
var map__26239__$1 = cljs.core.__destructure_map(map__26239);
var msg = map__26239__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26239__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26239__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26239__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26240){
var map__26241 = p__26240;
var map__26241__$1 = cljs.core.__destructure_map(map__26241);
var src = map__26241__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26241__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__26242 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26242) : done.call(null,G__26242));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__26243){
var map__26244 = p__26243;
var map__26244__$1 = cljs.core.__destructure_map(map__26244);
var msg__$1 = map__26244__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26244__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e26245){var ex = e26245;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__26246){
var map__26247 = p__26246;
var map__26247__$1 = cljs.core.__destructure_map(map__26247);
var env = map__26247__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26247__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__26248){
var map__26249 = p__26248;
var map__26249__$1 = cljs.core.__destructure_map(map__26249);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26249__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26249__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__26250){
var map__26251 = p__26250;
var map__26251__$1 = cljs.core.__destructure_map(map__26251);
var svc = map__26251__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26251__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
