goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18938){
var map__18939 = p__18938;
var map__18939__$1 = cljs.core.__destructure_map(map__18939);
var m = map__18939__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18939__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18939__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18944_19152 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18945_19153 = null;
var count__18946_19154 = (0);
var i__18947_19155 = (0);
while(true){
if((i__18947_19155 < count__18946_19154)){
var f_19156 = chunk__18945_19153.cljs$core$IIndexed$_nth$arity$2(null,i__18947_19155);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19156], 0));


var G__19163 = seq__18944_19152;
var G__19164 = chunk__18945_19153;
var G__19165 = count__18946_19154;
var G__19166 = (i__18947_19155 + (1));
seq__18944_19152 = G__19163;
chunk__18945_19153 = G__19164;
count__18946_19154 = G__19165;
i__18947_19155 = G__19166;
continue;
} else {
var temp__5804__auto___19167 = cljs.core.seq(seq__18944_19152);
if(temp__5804__auto___19167){
var seq__18944_19168__$1 = temp__5804__auto___19167;
if(cljs.core.chunked_seq_QMARK_(seq__18944_19168__$1)){
var c__5568__auto___19169 = cljs.core.chunk_first(seq__18944_19168__$1);
var G__19170 = cljs.core.chunk_rest(seq__18944_19168__$1);
var G__19171 = c__5568__auto___19169;
var G__19172 = cljs.core.count(c__5568__auto___19169);
var G__19173 = (0);
seq__18944_19152 = G__19170;
chunk__18945_19153 = G__19171;
count__18946_19154 = G__19172;
i__18947_19155 = G__19173;
continue;
} else {
var f_19174 = cljs.core.first(seq__18944_19168__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19174], 0));


var G__19175 = cljs.core.next(seq__18944_19168__$1);
var G__19176 = null;
var G__19177 = (0);
var G__19178 = (0);
seq__18944_19152 = G__19175;
chunk__18945_19153 = G__19176;
count__18946_19154 = G__19177;
i__18947_19155 = G__19178;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19179 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19179], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19179)))?cljs.core.second(arglists_19179):arglists_19179)], 0));
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
var seq__18951_19180 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18952_19181 = null;
var count__18953_19182 = (0);
var i__18954_19183 = (0);
while(true){
if((i__18954_19183 < count__18953_19182)){
var vec__18966_19184 = chunk__18952_19181.cljs$core$IIndexed$_nth$arity$2(null,i__18954_19183);
var name_19185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18966_19184,(0),null);
var map__18969_19186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18966_19184,(1),null);
var map__18969_19187__$1 = cljs.core.__destructure_map(map__18969_19186);
var doc_19188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18969_19187__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18969_19187__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19185], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19189], 0));

if(cljs.core.truth_(doc_19188)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19188], 0));
} else {
}


var G__19190 = seq__18951_19180;
var G__19191 = chunk__18952_19181;
var G__19192 = count__18953_19182;
var G__19193 = (i__18954_19183 + (1));
seq__18951_19180 = G__19190;
chunk__18952_19181 = G__19191;
count__18953_19182 = G__19192;
i__18954_19183 = G__19193;
continue;
} else {
var temp__5804__auto___19194 = cljs.core.seq(seq__18951_19180);
if(temp__5804__auto___19194){
var seq__18951_19195__$1 = temp__5804__auto___19194;
if(cljs.core.chunked_seq_QMARK_(seq__18951_19195__$1)){
var c__5568__auto___19196 = cljs.core.chunk_first(seq__18951_19195__$1);
var G__19197 = cljs.core.chunk_rest(seq__18951_19195__$1);
var G__19198 = c__5568__auto___19196;
var G__19199 = cljs.core.count(c__5568__auto___19196);
var G__19200 = (0);
seq__18951_19180 = G__19197;
chunk__18952_19181 = G__19198;
count__18953_19182 = G__19199;
i__18954_19183 = G__19200;
continue;
} else {
var vec__18970_19201 = cljs.core.first(seq__18951_19195__$1);
var name_19202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970_19201,(0),null);
var map__18973_19203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970_19201,(1),null);
var map__18973_19204__$1 = cljs.core.__destructure_map(map__18973_19203);
var doc_19205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18973_19204__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18973_19204__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19202], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19206], 0));

if(cljs.core.truth_(doc_19205)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19205], 0));
} else {
}


var G__19211 = cljs.core.next(seq__18951_19195__$1);
var G__19212 = null;
var G__19213 = (0);
var G__19214 = (0);
seq__18951_19180 = G__19211;
chunk__18952_19181 = G__19212;
count__18953_19182 = G__19213;
i__18954_19183 = G__19214;
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

var seq__18976 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18977 = null;
var count__18978 = (0);
var i__18979 = (0);
while(true){
if((i__18979 < count__18978)){
var role = chunk__18977.cljs$core$IIndexed$_nth$arity$2(null,i__18979);
var temp__5804__auto___19215__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19215__$1)){
var spec_19216 = temp__5804__auto___19215__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19216)], 0));
} else {
}


var G__19217 = seq__18976;
var G__19218 = chunk__18977;
var G__19219 = count__18978;
var G__19220 = (i__18979 + (1));
seq__18976 = G__19217;
chunk__18977 = G__19218;
count__18978 = G__19219;
i__18979 = G__19220;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18976);
if(temp__5804__auto____$1){
var seq__18976__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18976__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18976__$1);
var G__19221 = cljs.core.chunk_rest(seq__18976__$1);
var G__19222 = c__5568__auto__;
var G__19223 = cljs.core.count(c__5568__auto__);
var G__19224 = (0);
seq__18976 = G__19221;
chunk__18977 = G__19222;
count__18978 = G__19223;
i__18979 = G__19224;
continue;
} else {
var role = cljs.core.first(seq__18976__$1);
var temp__5804__auto___19225__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19225__$2)){
var spec_19226 = temp__5804__auto___19225__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19226)], 0));
} else {
}


var G__19228 = cljs.core.next(seq__18976__$1);
var G__19229 = null;
var G__19230 = (0);
var G__19231 = (0);
seq__18976 = G__19228;
chunk__18977 = G__19229;
count__18978 = G__19230;
i__18979 = G__19231;
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
var G__19232 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19233 = cljs.core.ex_cause(t);
via = G__19232;
t = G__19233;
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
var map__19073 = datafied_throwable;
var map__19073__$1 = cljs.core.__destructure_map(map__19073);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19073__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19073__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19073__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19074 = cljs.core.last(via);
var map__19074__$1 = cljs.core.__destructure_map(map__19074);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19074__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19074__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19074__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19075 = data;
var map__19075__$1 = cljs.core.__destructure_map(map__19075);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19075__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19075__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19075__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19076 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19076__$1 = cljs.core.__destructure_map(map__19076);
var top_data = map__19076__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19076__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19081 = phase;
var G__19081__$1 = (((G__19081 instanceof cljs.core.Keyword))?G__19081.fqn:null);
switch (G__19081__$1) {
case "read-source":
var map__19082 = data;
var map__19082__$1 = cljs.core.__destructure_map(map__19082);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19082__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19082__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19084 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19084__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19084,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19084);
var G__19084__$2 = (cljs.core.truth_((function (){var fexpr__19085 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19085.cljs$core$IFn$_invoke$arity$1 ? fexpr__19085.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19085.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19084__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19084__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19084__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19084__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19087 = top_data;
var G__19087__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19087,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19087);
var G__19087__$2 = (cljs.core.truth_((function (){var fexpr__19088 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19088.cljs$core$IFn$_invoke$arity$1 ? fexpr__19088.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19088.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19087__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19087__$1);
var G__19087__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19087__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19087__$2);
var G__19087__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19087__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19087__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19087__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19087__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19089 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19089,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19089,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19089,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19089,(3),null);
var G__19092 = top_data;
var G__19092__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19092,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19092);
var G__19092__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19092__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19092__$1);
var G__19092__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19092__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19092__$2);
var G__19092__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19092__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19092__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19092__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19092__$4;
}

break;
case "execution":
var vec__19094 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19094,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19094,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19094,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19094,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19064_SHARP_){
var or__5045__auto__ = (p1__19064_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19098 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19098.cljs$core$IFn$_invoke$arity$1 ? fexpr__19098.cljs$core$IFn$_invoke$arity$1(p1__19064_SHARP_) : fexpr__19098.call(null,p1__19064_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19100 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19100__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19100,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19100);
var G__19100__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19100__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19100__$1);
var G__19100__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19100__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19100__$2);
var G__19100__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19100__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19100__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19100__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19100__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19081__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19104){
var map__19105 = p__19104;
var map__19105__$1 = cljs.core.__destructure_map(map__19105);
var triage_data = map__19105__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19105__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19106 = phase;
var G__19106__$1 = (((G__19106 instanceof cljs.core.Keyword))?G__19106.fqn:null);
switch (G__19106__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19107 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19108 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19109 = loc;
var G__19110 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19111_19237 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19112_19238 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19113_19239 = true;
var _STAR_print_fn_STAR__temp_val__19114_19240 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19113_19239);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19114_19240);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19102_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19102_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19112_19238);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19111_19237);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19107,G__19108,G__19109,G__19110) : format.call(null,G__19107,G__19108,G__19109,G__19110));

break;
case "macroexpansion":
var G__19119 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19120 = cause_type;
var G__19121 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19122 = loc;
var G__19123 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19119,G__19120,G__19121,G__19122,G__19123) : format.call(null,G__19119,G__19120,G__19121,G__19122,G__19123));

break;
case "compile-syntax-check":
var G__19128 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19129 = cause_type;
var G__19130 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19131 = loc;
var G__19132 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19128,G__19129,G__19130,G__19131,G__19132) : format.call(null,G__19128,G__19129,G__19130,G__19131,G__19132));

break;
case "compilation":
var G__19133 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19134 = cause_type;
var G__19135 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19136 = loc;
var G__19137 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19133,G__19134,G__19135,G__19136,G__19137) : format.call(null,G__19133,G__19134,G__19135,G__19136,G__19137));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19138 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19139 = symbol;
var G__19140 = loc;
var G__19141 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19142_19241 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19143_19242 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19144_19243 = true;
var _STAR_print_fn_STAR__temp_val__19145_19244 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19144_19243);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19145_19244);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19103_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19103_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19143_19242);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19142_19241);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19138,G__19139,G__19140,G__19141) : format.call(null,G__19138,G__19139,G__19140,G__19141));
} else {
var G__19146 = "Execution error%s at %s(%s).\n%s\n";
var G__19147 = cause_type;
var G__19148 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19149 = loc;
var G__19150 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19146,G__19147,G__19148,G__19149,G__19150) : format.call(null,G__19146,G__19147,G__19148,G__19149,G__19150));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19106__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
