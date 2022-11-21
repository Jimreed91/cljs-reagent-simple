goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25287){
var map__25288 = p__25287;
var map__25288__$1 = cljs.core.__destructure_map(map__25288);
var m = map__25288__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25288__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25289_25500 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25290_25501 = null;
var count__25291_25502 = (0);
var i__25292_25503 = (0);
while(true){
if((i__25292_25503 < count__25291_25502)){
var f_25504 = chunk__25290_25501.cljs$core$IIndexed$_nth$arity$2(null,i__25292_25503);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25504], 0));


var G__25505 = seq__25289_25500;
var G__25506 = chunk__25290_25501;
var G__25507 = count__25291_25502;
var G__25508 = (i__25292_25503 + (1));
seq__25289_25500 = G__25505;
chunk__25290_25501 = G__25506;
count__25291_25502 = G__25507;
i__25292_25503 = G__25508;
continue;
} else {
var temp__5804__auto___25509 = cljs.core.seq(seq__25289_25500);
if(temp__5804__auto___25509){
var seq__25289_25510__$1 = temp__5804__auto___25509;
if(cljs.core.chunked_seq_QMARK_(seq__25289_25510__$1)){
var c__5568__auto___25511 = cljs.core.chunk_first(seq__25289_25510__$1);
var G__25512 = cljs.core.chunk_rest(seq__25289_25510__$1);
var G__25513 = c__5568__auto___25511;
var G__25514 = cljs.core.count(c__5568__auto___25511);
var G__25515 = (0);
seq__25289_25500 = G__25512;
chunk__25290_25501 = G__25513;
count__25291_25502 = G__25514;
i__25292_25503 = G__25515;
continue;
} else {
var f_25516 = cljs.core.first(seq__25289_25510__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_25516], 0));


var G__25517 = cljs.core.next(seq__25289_25510__$1);
var G__25518 = null;
var G__25519 = (0);
var G__25520 = (0);
seq__25289_25500 = G__25517;
chunk__25290_25501 = G__25518;
count__25291_25502 = G__25519;
i__25292_25503 = G__25520;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25521 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_25521], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_25521)))?cljs.core.second(arglists_25521):arglists_25521)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25299_25522 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25300_25523 = null;
var count__25301_25524 = (0);
var i__25302_25525 = (0);
while(true){
if((i__25302_25525 < count__25301_25524)){
var vec__25315_25526 = chunk__25300_25523.cljs$core$IIndexed$_nth$arity$2(null,i__25302_25525);
var name_25527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25315_25526,(0),null);
var map__25318_25528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25315_25526,(1),null);
var map__25318_25529__$1 = cljs.core.__destructure_map(map__25318_25528);
var doc_25530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25318_25529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25318_25529__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25527], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25531], 0));

if(cljs.core.truth_(doc_25530)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25530], 0));
} else {
}


var G__25532 = seq__25299_25522;
var G__25533 = chunk__25300_25523;
var G__25534 = count__25301_25524;
var G__25535 = (i__25302_25525 + (1));
seq__25299_25522 = G__25532;
chunk__25300_25523 = G__25533;
count__25301_25524 = G__25534;
i__25302_25525 = G__25535;
continue;
} else {
var temp__5804__auto___25536 = cljs.core.seq(seq__25299_25522);
if(temp__5804__auto___25536){
var seq__25299_25539__$1 = temp__5804__auto___25536;
if(cljs.core.chunked_seq_QMARK_(seq__25299_25539__$1)){
var c__5568__auto___25542 = cljs.core.chunk_first(seq__25299_25539__$1);
var G__25543 = cljs.core.chunk_rest(seq__25299_25539__$1);
var G__25544 = c__5568__auto___25542;
var G__25545 = cljs.core.count(c__5568__auto___25542);
var G__25546 = (0);
seq__25299_25522 = G__25543;
chunk__25300_25523 = G__25544;
count__25301_25524 = G__25545;
i__25302_25525 = G__25546;
continue;
} else {
var vec__25319_25547 = cljs.core.first(seq__25299_25539__$1);
var name_25548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25319_25547,(0),null);
var map__25322_25549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25319_25547,(1),null);
var map__25322_25550__$1 = cljs.core.__destructure_map(map__25322_25549);
var doc_25551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25322_25550__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25322_25550__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_25548], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_25552], 0));

if(cljs.core.truth_(doc_25551)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_25551], 0));
} else {
}


var G__25555 = cljs.core.next(seq__25299_25539__$1);
var G__25556 = null;
var G__25557 = (0);
var G__25558 = (0);
seq__25299_25522 = G__25555;
chunk__25300_25523 = G__25556;
count__25301_25524 = G__25557;
i__25302_25525 = G__25558;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__25325 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25326 = null;
var count__25327 = (0);
var i__25328 = (0);
while(true){
if((i__25328 < count__25327)){
var role = chunk__25326.cljs$core$IIndexed$_nth$arity$2(null,i__25328);
var temp__5804__auto___25559__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___25559__$1)){
var spec_25560 = temp__5804__auto___25559__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25560)], 0));
} else {
}


var G__25561 = seq__25325;
var G__25562 = chunk__25326;
var G__25563 = count__25327;
var G__25564 = (i__25328 + (1));
seq__25325 = G__25561;
chunk__25326 = G__25562;
count__25327 = G__25563;
i__25328 = G__25564;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__25325);
if(temp__5804__auto____$1){
var seq__25325__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__25325__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25325__$1);
var G__25565 = cljs.core.chunk_rest(seq__25325__$1);
var G__25566 = c__5568__auto__;
var G__25567 = cljs.core.count(c__5568__auto__);
var G__25568 = (0);
seq__25325 = G__25565;
chunk__25326 = G__25566;
count__25327 = G__25567;
i__25328 = G__25568;
continue;
} else {
var role = cljs.core.first(seq__25325__$1);
var temp__5804__auto___25569__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___25569__$2)){
var spec_25570 = temp__5804__auto___25569__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_25570)], 0));
} else {
}


var G__25571 = cljs.core.next(seq__25325__$1);
var G__25572 = null;
var G__25573 = (0);
var G__25574 = (0);
seq__25325 = G__25571;
chunk__25326 = G__25572;
count__25327 = G__25573;
i__25328 = G__25574;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__25575 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__25576 = cljs.core.ex_cause(t);
via = G__25575;
t = G__25576;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__25422 = datafied_throwable;
var map__25422__$1 = cljs.core.__destructure_map(map__25422);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25422__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25422__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25422__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25423 = cljs.core.last(via);
var map__25423__$1 = cljs.core.__destructure_map(map__25423);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25423__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25423__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25424 = data;
var map__25424__$1 = cljs.core.__destructure_map(map__25424);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25424__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25424__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25424__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25425 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__25425__$1 = cljs.core.__destructure_map(map__25425);
var top_data = map__25425__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__25430 = phase;
var G__25430__$1 = (((G__25430 instanceof cljs.core.Keyword))?G__25430.fqn:null);
switch (G__25430__$1) {
case "read-source":
var map__25431 = data;
var map__25431__$1 = cljs.core.__destructure_map(map__25431);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25431__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25431__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25432 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__25432__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25432,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25432);
var G__25432__$2 = (cljs.core.truth_((function (){var fexpr__25434 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25434.cljs$core$IFn$_invoke$arity$1 ? fexpr__25434.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25434.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25432__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25432__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25432__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25432__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25435 = top_data;
var G__25435__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25435,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25435);
var G__25435__$2 = (cljs.core.truth_((function (){var fexpr__25436 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25436.cljs$core$IFn$_invoke$arity$1 ? fexpr__25436.cljs$core$IFn$_invoke$arity$1(source) : fexpr__25436.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25435__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25435__$1);
var G__25435__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25435__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25435__$2);
var G__25435__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25435__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25435__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25435__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25435__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25438 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25438,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25438,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25438,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25438,(3),null);
var G__25441 = top_data;
var G__25441__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25441,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25441);
var G__25441__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25441__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25441__$1);
var G__25441__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25441__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25441__$2);
var G__25441__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25441__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25441__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25441__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25441__$4;
}

break;
case "execution":
var vec__25443 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25443,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25443,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25443,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25443,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25413_SHARP_){
var or__5045__auto__ = (p1__25413_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__25446 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__25446.cljs$core$IFn$_invoke$arity$1 ? fexpr__25446.cljs$core$IFn$_invoke$arity$1(p1__25413_SHARP_) : fexpr__25446.call(null,p1__25413_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__25447 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25447__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25447,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25447);
var G__25447__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25447__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25447__$1);
var G__25447__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25447__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25447__$2);
var G__25447__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25447__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25447__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25447__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25447__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25430__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25452){
var map__25454 = p__25452;
var map__25454__$1 = cljs.core.__destructure_map(map__25454);
var triage_data = map__25454__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25454__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25454__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25454__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25454__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25454__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25454__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25454__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25454__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__25455 = phase;
var G__25455__$1 = (((G__25455 instanceof cljs.core.Keyword))?G__25455.fqn:null);
switch (G__25455__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__25456 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__25457 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25458 = loc;
var G__25459 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25460_25586 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25461_25587 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25462_25588 = true;
var _STAR_print_fn_STAR__temp_val__25463_25589 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25462_25588);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25463_25589);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25450_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25450_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25461_25587);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25460_25586);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25456,G__25457,G__25458,G__25459) : format.call(null,G__25456,G__25457,G__25458,G__25459));

break;
case "macroexpansion":
var G__25464 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__25465 = cause_type;
var G__25466 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25467 = loc;
var G__25468 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25464,G__25465,G__25466,G__25467,G__25468) : format.call(null,G__25464,G__25465,G__25466,G__25467,G__25468));

break;
case "compile-syntax-check":
var G__25469 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__25470 = cause_type;
var G__25471 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25472 = loc;
var G__25473 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25469,G__25470,G__25471,G__25472,G__25473) : format.call(null,G__25469,G__25470,G__25471,G__25472,G__25473));

break;
case "compilation":
var G__25478 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__25479 = cause_type;
var G__25480 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25481 = loc;
var G__25482 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25478,G__25479,G__25480,G__25481,G__25482) : format.call(null,G__25478,G__25479,G__25480,G__25481,G__25482));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__25483 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__25484 = symbol;
var G__25485 = loc;
var G__25486 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25487_25592 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25488_25593 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25489_25594 = true;
var _STAR_print_fn_STAR__temp_val__25490_25595 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25489_25594);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25490_25595);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25451_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__25451_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25488_25593);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25487_25592);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__25483,G__25484,G__25485,G__25486) : format.call(null,G__25483,G__25484,G__25485,G__25486));
} else {
var G__25495 = "Execution error%s at %s(%s).\n%s\n";
var G__25496 = cause_type;
var G__25497 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__25498 = loc;
var G__25499 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__25495,G__25496,G__25497,G__25498,G__25499) : format.call(null,G__25495,G__25496,G__25497,G__25498,G__25499));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25455__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
