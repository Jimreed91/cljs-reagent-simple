goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21147 = arguments.length;
switch (G__21147) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21148 = (function (f,blockable,meta21149){
this.f = f;
this.blockable = blockable;
this.meta21149 = meta21149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21150,meta21149__$1){
var self__ = this;
var _21150__$1 = this;
return (new cljs.core.async.t_cljs$core$async21148(self__.f,self__.blockable,meta21149__$1));
}));

(cljs.core.async.t_cljs$core$async21148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21150){
var self__ = this;
var _21150__$1 = this;
return self__.meta21149;
}));

(cljs.core.async.t_cljs$core$async21148.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21148.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async21148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async21148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21149","meta21149",542309324,null)], null);
}));

(cljs.core.async.t_cljs$core$async21148.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21148");

(cljs.core.async.t_cljs$core$async21148.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21148");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21148.
 */
cljs.core.async.__GT_t_cljs$core$async21148 = (function cljs$core$async$__GT_t_cljs$core$async21148(f__$1,blockable__$1,meta21149){
return (new cljs.core.async.t_cljs$core$async21148(f__$1,blockable__$1,meta21149));
});

}

return (new cljs.core.async.t_cljs$core$async21148(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21153 = arguments.length;
switch (G__21153) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21155 = arguments.length;
switch (G__21155) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21157 = arguments.length;
switch (G__21157) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_22659 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22659) : fn1.call(null,val_22659));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22659) : fn1.call(null,val_22659));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21159 = arguments.length;
switch (G__21159) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___22661 = n;
var x_22662 = (0);
while(true){
if((x_22662 < n__5636__auto___22661)){
(a[x_22662] = x_22662);

var G__22663 = (x_22662 + (1));
x_22662 = G__22663;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21160 = (function (flag,meta21161){
this.flag = flag;
this.meta21161 = meta21161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21162,meta21161__$1){
var self__ = this;
var _21162__$1 = this;
return (new cljs.core.async.t_cljs$core$async21160(self__.flag,meta21161__$1));
}));

(cljs.core.async.t_cljs$core$async21160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21162){
var self__ = this;
var _21162__$1 = this;
return self__.meta21161;
}));

(cljs.core.async.t_cljs$core$async21160.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21160.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async21160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21161","meta21161",-1321912609,null)], null);
}));

(cljs.core.async.t_cljs$core$async21160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21160");

(cljs.core.async.t_cljs$core$async21160.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21160.
 */
cljs.core.async.__GT_t_cljs$core$async21160 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21160(flag__$1,meta21161){
return (new cljs.core.async.t_cljs$core$async21160(flag__$1,meta21161));
});

}

return (new cljs.core.async.t_cljs$core$async21160(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21163 = (function (flag,cb,meta21164){
this.flag = flag;
this.cb = cb;
this.meta21164 = meta21164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21165,meta21164__$1){
var self__ = this;
var _21165__$1 = this;
return (new cljs.core.async.t_cljs$core$async21163(self__.flag,self__.cb,meta21164__$1));
}));

(cljs.core.async.t_cljs$core$async21163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21165){
var self__ = this;
var _21165__$1 = this;
return self__.meta21164;
}));

(cljs.core.async.t_cljs$core$async21163.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async21163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async21163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21164","meta21164",-1541029364,null)], null);
}));

(cljs.core.async.t_cljs$core$async21163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21163");

(cljs.core.async.t_cljs$core$async21163.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21163.
 */
cljs.core.async.__GT_t_cljs$core$async21163 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21163(flag__$1,cb__$1,meta21164){
return (new cljs.core.async.t_cljs$core$async21163(flag__$1,cb__$1,meta21164));
});

}

return (new cljs.core.async.t_cljs$core$async21163(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21166_SHARP_){
var G__21174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21166_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21174) : fret.call(null,G__21174));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21167_SHARP_){
var G__21175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21167_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21175) : fret.call(null,G__21175));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22664 = (i + (1));
i = G__22664;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22665 = arguments.length;
var i__5770__auto___22668 = (0);
while(true){
if((i__5770__auto___22668 < len__5769__auto___22665)){
args__5775__auto__.push((arguments[i__5770__auto___22668]));

var G__22669 = (i__5770__auto___22668 + (1));
i__5770__auto___22668 = G__22669;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21190){
var map__21192 = p__21190;
var map__21192__$1 = cljs.core.__destructure_map(map__21192);
var opts = map__21192__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21181){
var G__21182 = cljs.core.first(seq21181);
var seq21181__$1 = cljs.core.next(seq21181);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21182,seq21181__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21208 = arguments.length;
switch (G__21208) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21074__auto___22671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21256){
var state_val_21257 = (state_21256[(1)]);
if((state_val_21257 === (7))){
var inst_21245 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
var statearr_21258_22672 = state_21256__$1;
(statearr_21258_22672[(2)] = inst_21245);

(statearr_21258_22672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (1))){
var state_21256__$1 = state_21256;
var statearr_21259_22673 = state_21256__$1;
(statearr_21259_22673[(2)] = null);

(statearr_21259_22673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (4))){
var inst_21226 = (state_21256[(7)]);
var inst_21226__$1 = (state_21256[(2)]);
var inst_21227 = (inst_21226__$1 == null);
var state_21256__$1 = (function (){var statearr_21260 = state_21256;
(statearr_21260[(7)] = inst_21226__$1);

return statearr_21260;
})();
if(cljs.core.truth_(inst_21227)){
var statearr_21261_22674 = state_21256__$1;
(statearr_21261_22674[(1)] = (5));

} else {
var statearr_21262_22675 = state_21256__$1;
(statearr_21262_22675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (13))){
var state_21256__$1 = state_21256;
var statearr_21263_22676 = state_21256__$1;
(statearr_21263_22676[(2)] = null);

(statearr_21263_22676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (6))){
var inst_21226 = (state_21256[(7)]);
var state_21256__$1 = state_21256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21256__$1,(11),to,inst_21226);
} else {
if((state_val_21257 === (3))){
var inst_21253 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21256__$1,inst_21253);
} else {
if((state_val_21257 === (12))){
var state_21256__$1 = state_21256;
var statearr_21264_22677 = state_21256__$1;
(statearr_21264_22677[(2)] = null);

(statearr_21264_22677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (2))){
var state_21256__$1 = state_21256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21256__$1,(4),from);
} else {
if((state_val_21257 === (11))){
var inst_21236 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
if(cljs.core.truth_(inst_21236)){
var statearr_21265_22678 = state_21256__$1;
(statearr_21265_22678[(1)] = (12));

} else {
var statearr_21266_22679 = state_21256__$1;
(statearr_21266_22679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (9))){
var state_21256__$1 = state_21256;
var statearr_21268_22680 = state_21256__$1;
(statearr_21268_22680[(2)] = null);

(statearr_21268_22680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (5))){
var state_21256__$1 = state_21256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21272_22681 = state_21256__$1;
(statearr_21272_22681[(1)] = (8));

} else {
var statearr_21273_22682 = state_21256__$1;
(statearr_21273_22682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (14))){
var inst_21242 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
var statearr_21275_22683 = state_21256__$1;
(statearr_21275_22683[(2)] = inst_21242);

(statearr_21275_22683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (10))){
var inst_21233 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
var statearr_21276_22684 = state_21256__$1;
(statearr_21276_22684[(2)] = inst_21233);

(statearr_21276_22684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (8))){
var inst_21230 = cljs.core.async.close_BANG_(to);
var state_21256__$1 = state_21256;
var statearr_21278_22685 = state_21256__$1;
(statearr_21278_22685[(2)] = inst_21230);

(statearr_21278_22685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_21280 = [null,null,null,null,null,null,null,null];
(statearr_21280[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_21280[(1)] = (1));

return statearr_21280;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_21256){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21256);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21281){var ex__21022__auto__ = e21281;
var statearr_21282_22686 = state_21256;
(statearr_21282_22686[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21256[(4)]))){
var statearr_21283_22687 = state_21256;
(statearr_21283_22687[(1)] = cljs.core.first((state_21256[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22688 = state_21256;
state_21256 = G__22688;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_21256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_21256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21284 = f__21075__auto__();
(statearr_21284[(6)] = c__21074__auto___22671);

return statearr_21284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__21289){
var vec__21290 = p__21289;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21290,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21290,(1),null);
var job = vec__21290;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21074__auto___22689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21297){
var state_val_21298 = (state_21297[(1)]);
if((state_val_21298 === (1))){
var state_21297__$1 = state_21297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21297__$1,(2),res,v);
} else {
if((state_val_21298 === (2))){
var inst_21294 = (state_21297[(2)]);
var inst_21295 = cljs.core.async.close_BANG_(res);
var state_21297__$1 = (function (){var statearr_21299 = state_21297;
(statearr_21299[(7)] = inst_21294);

return statearr_21299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21297__$1,inst_21295);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0 = (function (){
var statearr_21300 = [null,null,null,null,null,null,null,null];
(statearr_21300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__);

(statearr_21300[(1)] = (1));

return statearr_21300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1 = (function (state_21297){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21297);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21301){var ex__21022__auto__ = e21301;
var statearr_21302_22691 = state_21297;
(statearr_21302_22691[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21297[(4)]))){
var statearr_21303_22692 = state_21297;
(statearr_21303_22692[(1)] = cljs.core.first((state_21297[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22693 = state_21297;
state_21297 = G__22693;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = function(state_21297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1.call(this,state_21297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21304 = f__21075__auto__();
(statearr_21304[(6)] = c__21074__auto___22689);

return statearr_21304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__21305){
var vec__21306 = p__21305;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21306,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21306,(1),null);
var job = vec__21306;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___22695 = n;
var __22696 = (0);
while(true){
if((__22696 < n__5636__auto___22695)){
var G__21309_22698 = type;
var G__21309_22699__$1 = (((G__21309_22698 instanceof cljs.core.Keyword))?G__21309_22698.fqn:null);
switch (G__21309_22699__$1) {
case "compute":
var c__21074__auto___22701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22696,c__21074__auto___22701,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async){
return (function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = ((function (__22696,c__21074__auto___22701,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async){
return (function (state_21322){
var state_val_21323 = (state_21322[(1)]);
if((state_val_21323 === (1))){
var state_21322__$1 = state_21322;
var statearr_21324_22702 = state_21322__$1;
(statearr_21324_22702[(2)] = null);

(statearr_21324_22702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (2))){
var state_21322__$1 = state_21322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21322__$1,(4),jobs);
} else {
if((state_val_21323 === (3))){
var inst_21320 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21322__$1,inst_21320);
} else {
if((state_val_21323 === (4))){
var inst_21312 = (state_21322[(2)]);
var inst_21313 = process__$1(inst_21312);
var state_21322__$1 = state_21322;
if(cljs.core.truth_(inst_21313)){
var statearr_21325_22703 = state_21322__$1;
(statearr_21325_22703[(1)] = (5));

} else {
var statearr_21326_22704 = state_21322__$1;
(statearr_21326_22704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (5))){
var state_21322__$1 = state_21322;
var statearr_21327_22705 = state_21322__$1;
(statearr_21327_22705[(2)] = null);

(statearr_21327_22705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (6))){
var state_21322__$1 = state_21322;
var statearr_21328_22706 = state_21322__$1;
(statearr_21328_22706[(2)] = null);

(statearr_21328_22706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21323 === (7))){
var inst_21318 = (state_21322[(2)]);
var state_21322__$1 = state_21322;
var statearr_21329_22708 = state_21322__$1;
(statearr_21329_22708[(2)] = inst_21318);

(statearr_21329_22708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22696,c__21074__auto___22701,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async))
;
return ((function (__22696,switch__21018__auto__,c__21074__auto___22701,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0 = (function (){
var statearr_21330 = [null,null,null,null,null,null,null];
(statearr_21330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__);

(statearr_21330[(1)] = (1));

return statearr_21330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1 = (function (state_21322){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21322);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21331){var ex__21022__auto__ = e21331;
var statearr_21332_22710 = state_21322;
(statearr_21332_22710[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21322[(4)]))){
var statearr_21333_22711 = state_21322;
(statearr_21333_22711[(1)] = cljs.core.first((state_21322[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22712 = state_21322;
state_21322 = G__22712;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = function(state_21322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1.call(this,state_21322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__;
})()
;})(__22696,switch__21018__auto__,c__21074__auto___22701,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async))
})();
var state__21076__auto__ = (function (){var statearr_21334 = f__21075__auto__();
(statearr_21334[(6)] = c__21074__auto___22701);

return statearr_21334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
});})(__22696,c__21074__auto___22701,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async))
);


break;
case "async":
var c__21074__auto___22713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22696,c__21074__auto___22713,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async){
return (function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = ((function (__22696,c__21074__auto___22713,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async){
return (function (state_21347){
var state_val_21348 = (state_21347[(1)]);
if((state_val_21348 === (1))){
var state_21347__$1 = state_21347;
var statearr_21349_22715 = state_21347__$1;
(statearr_21349_22715[(2)] = null);

(statearr_21349_22715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21348 === (2))){
var state_21347__$1 = state_21347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21347__$1,(4),jobs);
} else {
if((state_val_21348 === (3))){
var inst_21345 = (state_21347[(2)]);
var state_21347__$1 = state_21347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21347__$1,inst_21345);
} else {
if((state_val_21348 === (4))){
var inst_21337 = (state_21347[(2)]);
var inst_21338 = async(inst_21337);
var state_21347__$1 = state_21347;
if(cljs.core.truth_(inst_21338)){
var statearr_21350_22717 = state_21347__$1;
(statearr_21350_22717[(1)] = (5));

} else {
var statearr_21351_22718 = state_21347__$1;
(statearr_21351_22718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21348 === (5))){
var state_21347__$1 = state_21347;
var statearr_21352_22719 = state_21347__$1;
(statearr_21352_22719[(2)] = null);

(statearr_21352_22719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21348 === (6))){
var state_21347__$1 = state_21347;
var statearr_21353_22720 = state_21347__$1;
(statearr_21353_22720[(2)] = null);

(statearr_21353_22720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21348 === (7))){
var inst_21343 = (state_21347[(2)]);
var state_21347__$1 = state_21347;
var statearr_21354_22721 = state_21347__$1;
(statearr_21354_22721[(2)] = inst_21343);

(statearr_21354_22721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22696,c__21074__auto___22713,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async))
;
return ((function (__22696,switch__21018__auto__,c__21074__auto___22713,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0 = (function (){
var statearr_21355 = [null,null,null,null,null,null,null];
(statearr_21355[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__);

(statearr_21355[(1)] = (1));

return statearr_21355;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1 = (function (state_21347){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21347);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21356){var ex__21022__auto__ = e21356;
var statearr_21357_22722 = state_21347;
(statearr_21357_22722[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21347[(4)]))){
var statearr_21358_22723 = state_21347;
(statearr_21358_22723[(1)] = cljs.core.first((state_21347[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22724 = state_21347;
state_21347 = G__22724;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = function(state_21347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1.call(this,state_21347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__;
})()
;})(__22696,switch__21018__auto__,c__21074__auto___22713,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async))
})();
var state__21076__auto__ = (function (){var statearr_21359 = f__21075__auto__();
(statearr_21359[(6)] = c__21074__auto___22713);

return statearr_21359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
});})(__22696,c__21074__auto___22713,G__21309_22698,G__21309_22699__$1,n__5636__auto___22695,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21309_22699__$1)].join('')));

}

var G__22726 = (__22696 + (1));
__22696 = G__22726;
continue;
} else {
}
break;
}

var c__21074__auto___22727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21381){
var state_val_21382 = (state_21381[(1)]);
if((state_val_21382 === (7))){
var inst_21377 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
var statearr_21383_22729 = state_21381__$1;
(statearr_21383_22729[(2)] = inst_21377);

(statearr_21383_22729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (1))){
var state_21381__$1 = state_21381;
var statearr_21384_22730 = state_21381__$1;
(statearr_21384_22730[(2)] = null);

(statearr_21384_22730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (4))){
var inst_21362 = (state_21381[(7)]);
var inst_21362__$1 = (state_21381[(2)]);
var inst_21363 = (inst_21362__$1 == null);
var state_21381__$1 = (function (){var statearr_21385 = state_21381;
(statearr_21385[(7)] = inst_21362__$1);

return statearr_21385;
})();
if(cljs.core.truth_(inst_21363)){
var statearr_21386_22731 = state_21381__$1;
(statearr_21386_22731[(1)] = (5));

} else {
var statearr_21387_22732 = state_21381__$1;
(statearr_21387_22732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (6))){
var inst_21367 = (state_21381[(8)]);
var inst_21362 = (state_21381[(7)]);
var inst_21367__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21369 = [inst_21362,inst_21367__$1];
var inst_21370 = (new cljs.core.PersistentVector(null,2,(5),inst_21368,inst_21369,null));
var state_21381__$1 = (function (){var statearr_21388 = state_21381;
(statearr_21388[(8)] = inst_21367__$1);

return statearr_21388;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21381__$1,(8),jobs,inst_21370);
} else {
if((state_val_21382 === (3))){
var inst_21379 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21381__$1,inst_21379);
} else {
if((state_val_21382 === (2))){
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21381__$1,(4),from);
} else {
if((state_val_21382 === (9))){
var inst_21374 = (state_21381[(2)]);
var state_21381__$1 = (function (){var statearr_21389 = state_21381;
(statearr_21389[(9)] = inst_21374);

return statearr_21389;
})();
var statearr_21390_22733 = state_21381__$1;
(statearr_21390_22733[(2)] = null);

(statearr_21390_22733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (5))){
var inst_21365 = cljs.core.async.close_BANG_(jobs);
var state_21381__$1 = state_21381;
var statearr_21391_22734 = state_21381__$1;
(statearr_21391_22734[(2)] = inst_21365);

(statearr_21391_22734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (8))){
var inst_21367 = (state_21381[(8)]);
var inst_21372 = (state_21381[(2)]);
var state_21381__$1 = (function (){var statearr_21392 = state_21381;
(statearr_21392[(10)] = inst_21372);

return statearr_21392;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21381__$1,(9),results,inst_21367);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0 = (function (){
var statearr_21393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__);

(statearr_21393[(1)] = (1));

return statearr_21393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1 = (function (state_21381){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21381);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21394){var ex__21022__auto__ = e21394;
var statearr_21395_22735 = state_21381;
(statearr_21395_22735[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21381[(4)]))){
var statearr_21396_22736 = state_21381;
(statearr_21396_22736[(1)] = cljs.core.first((state_21381[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22737 = state_21381;
state_21381 = G__22737;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = function(state_21381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1.call(this,state_21381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21397 = f__21075__auto__();
(statearr_21397[(6)] = c__21074__auto___22727);

return statearr_21397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


var c__21074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21435){
var state_val_21436 = (state_21435[(1)]);
if((state_val_21436 === (7))){
var inst_21431 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
var statearr_21437_22739 = state_21435__$1;
(statearr_21437_22739[(2)] = inst_21431);

(statearr_21437_22739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (20))){
var state_21435__$1 = state_21435;
var statearr_21438_22740 = state_21435__$1;
(statearr_21438_22740[(2)] = null);

(statearr_21438_22740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (1))){
var state_21435__$1 = state_21435;
var statearr_21439_22742 = state_21435__$1;
(statearr_21439_22742[(2)] = null);

(statearr_21439_22742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (4))){
var inst_21400 = (state_21435[(7)]);
var inst_21400__$1 = (state_21435[(2)]);
var inst_21401 = (inst_21400__$1 == null);
var state_21435__$1 = (function (){var statearr_21440 = state_21435;
(statearr_21440[(7)] = inst_21400__$1);

return statearr_21440;
})();
if(cljs.core.truth_(inst_21401)){
var statearr_21441_22743 = state_21435__$1;
(statearr_21441_22743[(1)] = (5));

} else {
var statearr_21442_22744 = state_21435__$1;
(statearr_21442_22744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (15))){
var inst_21413 = (state_21435[(8)]);
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21435__$1,(18),to,inst_21413);
} else {
if((state_val_21436 === (21))){
var inst_21426 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
var statearr_21443_22745 = state_21435__$1;
(statearr_21443_22745[(2)] = inst_21426);

(statearr_21443_22745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (13))){
var inst_21428 = (state_21435[(2)]);
var state_21435__$1 = (function (){var statearr_21444 = state_21435;
(statearr_21444[(9)] = inst_21428);

return statearr_21444;
})();
var statearr_21445_22746 = state_21435__$1;
(statearr_21445_22746[(2)] = null);

(statearr_21445_22746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (6))){
var inst_21400 = (state_21435[(7)]);
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21435__$1,(11),inst_21400);
} else {
if((state_val_21436 === (17))){
var inst_21421 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
if(cljs.core.truth_(inst_21421)){
var statearr_21446_22747 = state_21435__$1;
(statearr_21446_22747[(1)] = (19));

} else {
var statearr_21447_22748 = state_21435__$1;
(statearr_21447_22748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (3))){
var inst_21433 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21435__$1,inst_21433);
} else {
if((state_val_21436 === (12))){
var inst_21410 = (state_21435[(10)]);
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21435__$1,(14),inst_21410);
} else {
if((state_val_21436 === (2))){
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21435__$1,(4),results);
} else {
if((state_val_21436 === (19))){
var state_21435__$1 = state_21435;
var statearr_21448_22749 = state_21435__$1;
(statearr_21448_22749[(2)] = null);

(statearr_21448_22749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (11))){
var inst_21410 = (state_21435[(2)]);
var state_21435__$1 = (function (){var statearr_21449 = state_21435;
(statearr_21449[(10)] = inst_21410);

return statearr_21449;
})();
var statearr_21450_22750 = state_21435__$1;
(statearr_21450_22750[(2)] = null);

(statearr_21450_22750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (9))){
var state_21435__$1 = state_21435;
var statearr_21451_22751 = state_21435__$1;
(statearr_21451_22751[(2)] = null);

(statearr_21451_22751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (5))){
var state_21435__$1 = state_21435;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21452_22752 = state_21435__$1;
(statearr_21452_22752[(1)] = (8));

} else {
var statearr_21453_22753 = state_21435__$1;
(statearr_21453_22753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (14))){
var inst_21415 = (state_21435[(11)]);
var inst_21413 = (state_21435[(8)]);
var inst_21413__$1 = (state_21435[(2)]);
var inst_21414 = (inst_21413__$1 == null);
var inst_21415__$1 = cljs.core.not(inst_21414);
var state_21435__$1 = (function (){var statearr_21454 = state_21435;
(statearr_21454[(11)] = inst_21415__$1);

(statearr_21454[(8)] = inst_21413__$1);

return statearr_21454;
})();
if(inst_21415__$1){
var statearr_21455_22754 = state_21435__$1;
(statearr_21455_22754[(1)] = (15));

} else {
var statearr_21456_22755 = state_21435__$1;
(statearr_21456_22755[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (16))){
var inst_21415 = (state_21435[(11)]);
var state_21435__$1 = state_21435;
var statearr_21457_22756 = state_21435__$1;
(statearr_21457_22756[(2)] = inst_21415);

(statearr_21457_22756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (10))){
var inst_21407 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
var statearr_21458_22758 = state_21435__$1;
(statearr_21458_22758[(2)] = inst_21407);

(statearr_21458_22758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (18))){
var inst_21418 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
var statearr_21459_22759 = state_21435__$1;
(statearr_21459_22759[(2)] = inst_21418);

(statearr_21459_22759[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (8))){
var inst_21404 = cljs.core.async.close_BANG_(to);
var state_21435__$1 = state_21435;
var statearr_21460_22761 = state_21435__$1;
(statearr_21460_22761[(2)] = inst_21404);

(statearr_21460_22761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0 = (function (){
var statearr_21461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__);

(statearr_21461[(1)] = (1));

return statearr_21461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1 = (function (state_21435){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21435);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21462){var ex__21022__auto__ = e21462;
var statearr_21463_22762 = state_21435;
(statearr_21463_22762[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21435[(4)]))){
var statearr_21464_22763 = state_21435;
(statearr_21464_22763[(1)] = cljs.core.first((state_21435[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22764 = state_21435;
state_21435 = G__22764;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__ = function(state_21435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1.call(this,state_21435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21465 = f__21075__auto__();
(statearr_21465[(6)] = c__21074__auto__);

return statearr_21465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));

return c__21074__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21467 = arguments.length;
switch (G__21467) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21469 = arguments.length;
switch (G__21469) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21471 = arguments.length;
switch (G__21471) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21074__auto___22769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21497){
var state_val_21498 = (state_21497[(1)]);
if((state_val_21498 === (7))){
var inst_21493 = (state_21497[(2)]);
var state_21497__$1 = state_21497;
var statearr_21499_22770 = state_21497__$1;
(statearr_21499_22770[(2)] = inst_21493);

(statearr_21499_22770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (1))){
var state_21497__$1 = state_21497;
var statearr_21500_22771 = state_21497__$1;
(statearr_21500_22771[(2)] = null);

(statearr_21500_22771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (4))){
var inst_21474 = (state_21497[(7)]);
var inst_21474__$1 = (state_21497[(2)]);
var inst_21475 = (inst_21474__$1 == null);
var state_21497__$1 = (function (){var statearr_21501 = state_21497;
(statearr_21501[(7)] = inst_21474__$1);

return statearr_21501;
})();
if(cljs.core.truth_(inst_21475)){
var statearr_21502_22772 = state_21497__$1;
(statearr_21502_22772[(1)] = (5));

} else {
var statearr_21503_22773 = state_21497__$1;
(statearr_21503_22773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (13))){
var state_21497__$1 = state_21497;
var statearr_21504_22774 = state_21497__$1;
(statearr_21504_22774[(2)] = null);

(statearr_21504_22774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (6))){
var inst_21474 = (state_21497[(7)]);
var inst_21480 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21474) : p.call(null,inst_21474));
var state_21497__$1 = state_21497;
if(cljs.core.truth_(inst_21480)){
var statearr_21505_22779 = state_21497__$1;
(statearr_21505_22779[(1)] = (9));

} else {
var statearr_21506_22780 = state_21497__$1;
(statearr_21506_22780[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (3))){
var inst_21495 = (state_21497[(2)]);
var state_21497__$1 = state_21497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21497__$1,inst_21495);
} else {
if((state_val_21498 === (12))){
var state_21497__$1 = state_21497;
var statearr_21507_22781 = state_21497__$1;
(statearr_21507_22781[(2)] = null);

(statearr_21507_22781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (2))){
var state_21497__$1 = state_21497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21497__$1,(4),ch);
} else {
if((state_val_21498 === (11))){
var inst_21474 = (state_21497[(7)]);
var inst_21484 = (state_21497[(2)]);
var state_21497__$1 = state_21497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21497__$1,(8),inst_21484,inst_21474);
} else {
if((state_val_21498 === (9))){
var state_21497__$1 = state_21497;
var statearr_21508_22782 = state_21497__$1;
(statearr_21508_22782[(2)] = tc);

(statearr_21508_22782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (5))){
var inst_21477 = cljs.core.async.close_BANG_(tc);
var inst_21478 = cljs.core.async.close_BANG_(fc);
var state_21497__$1 = (function (){var statearr_21509 = state_21497;
(statearr_21509[(8)] = inst_21477);

return statearr_21509;
})();
var statearr_21510_22783 = state_21497__$1;
(statearr_21510_22783[(2)] = inst_21478);

(statearr_21510_22783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (14))){
var inst_21491 = (state_21497[(2)]);
var state_21497__$1 = state_21497;
var statearr_21511_22784 = state_21497__$1;
(statearr_21511_22784[(2)] = inst_21491);

(statearr_21511_22784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (10))){
var state_21497__$1 = state_21497;
var statearr_21512_22785 = state_21497__$1;
(statearr_21512_22785[(2)] = fc);

(statearr_21512_22785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (8))){
var inst_21486 = (state_21497[(2)]);
var state_21497__$1 = state_21497;
if(cljs.core.truth_(inst_21486)){
var statearr_21513_22786 = state_21497__$1;
(statearr_21513_22786[(1)] = (12));

} else {
var statearr_21514_22787 = state_21497__$1;
(statearr_21514_22787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_21515 = [null,null,null,null,null,null,null,null,null];
(statearr_21515[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_21515[(1)] = (1));

return statearr_21515;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_21497){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21497);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21516){var ex__21022__auto__ = e21516;
var statearr_21517_22788 = state_21497;
(statearr_21517_22788[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21497[(4)]))){
var statearr_21518_22789 = state_21497;
(statearr_21518_22789[(1)] = cljs.core.first((state_21497[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22790 = state_21497;
state_21497 = G__22790;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_21497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_21497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21519 = f__21075__auto__();
(statearr_21519[(6)] = c__21074__auto___22769);

return statearr_21519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21541){
var state_val_21542 = (state_21541[(1)]);
if((state_val_21542 === (7))){
var inst_21537 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21543_22791 = state_21541__$1;
(statearr_21543_22791[(2)] = inst_21537);

(statearr_21543_22791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (1))){
var inst_21520 = init;
var inst_21521 = inst_21520;
var state_21541__$1 = (function (){var statearr_21544 = state_21541;
(statearr_21544[(7)] = inst_21521);

return statearr_21544;
})();
var statearr_21545_22792 = state_21541__$1;
(statearr_21545_22792[(2)] = null);

(statearr_21545_22792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (4))){
var inst_21524 = (state_21541[(8)]);
var inst_21524__$1 = (state_21541[(2)]);
var inst_21525 = (inst_21524__$1 == null);
var state_21541__$1 = (function (){var statearr_21546 = state_21541;
(statearr_21546[(8)] = inst_21524__$1);

return statearr_21546;
})();
if(cljs.core.truth_(inst_21525)){
var statearr_21547_22793 = state_21541__$1;
(statearr_21547_22793[(1)] = (5));

} else {
var statearr_21548_22794 = state_21541__$1;
(statearr_21548_22794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (6))){
var inst_21524 = (state_21541[(8)]);
var inst_21528 = (state_21541[(9)]);
var inst_21521 = (state_21541[(7)]);
var inst_21528__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21521,inst_21524) : f.call(null,inst_21521,inst_21524));
var inst_21529 = cljs.core.reduced_QMARK_(inst_21528__$1);
var state_21541__$1 = (function (){var statearr_21549 = state_21541;
(statearr_21549[(9)] = inst_21528__$1);

return statearr_21549;
})();
if(inst_21529){
var statearr_21550_22797 = state_21541__$1;
(statearr_21550_22797[(1)] = (8));

} else {
var statearr_21551_22798 = state_21541__$1;
(statearr_21551_22798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (3))){
var inst_21539 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21541__$1,inst_21539);
} else {
if((state_val_21542 === (2))){
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21541__$1,(4),ch);
} else {
if((state_val_21542 === (9))){
var inst_21528 = (state_21541[(9)]);
var inst_21521 = inst_21528;
var state_21541__$1 = (function (){var statearr_21552 = state_21541;
(statearr_21552[(7)] = inst_21521);

return statearr_21552;
})();
var statearr_21553_22799 = state_21541__$1;
(statearr_21553_22799[(2)] = null);

(statearr_21553_22799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (5))){
var inst_21521 = (state_21541[(7)]);
var state_21541__$1 = state_21541;
var statearr_21554_22800 = state_21541__$1;
(statearr_21554_22800[(2)] = inst_21521);

(statearr_21554_22800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (10))){
var inst_21535 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21555_22801 = state_21541__$1;
(statearr_21555_22801[(2)] = inst_21535);

(statearr_21555_22801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (8))){
var inst_21528 = (state_21541[(9)]);
var inst_21531 = cljs.core.deref(inst_21528);
var state_21541__$1 = state_21541;
var statearr_21556_22802 = state_21541__$1;
(statearr_21556_22802[(2)] = inst_21531);

(statearr_21556_22802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__21019__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21019__auto____0 = (function (){
var statearr_21557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21557[(0)] = cljs$core$async$reduce_$_state_machine__21019__auto__);

(statearr_21557[(1)] = (1));

return statearr_21557;
});
var cljs$core$async$reduce_$_state_machine__21019__auto____1 = (function (state_21541){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21541);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21558){var ex__21022__auto__ = e21558;
var statearr_21559_22803 = state_21541;
(statearr_21559_22803[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21541[(4)]))){
var statearr_21560_22805 = state_21541;
(statearr_21560_22805[(1)] = cljs.core.first((state_21541[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22809 = state_21541;
state_21541 = G__22809;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21019__auto__ = function(state_21541){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21019__auto____1.call(this,state_21541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21019__auto____0;
cljs$core$async$reduce_$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21019__auto____1;
return cljs$core$async$reduce_$_state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21561 = f__21075__auto__();
(statearr_21561[(6)] = c__21074__auto__);

return statearr_21561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));

return c__21074__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21567){
var state_val_21568 = (state_21567[(1)]);
if((state_val_21568 === (1))){
var inst_21562 = cljs.core.async.reduce(f__$1,init,ch);
var state_21567__$1 = state_21567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21567__$1,(2),inst_21562);
} else {
if((state_val_21568 === (2))){
var inst_21564 = (state_21567[(2)]);
var inst_21565 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_21564) : f__$1.call(null,inst_21564));
var state_21567__$1 = state_21567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21567__$1,inst_21565);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21019__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21019__auto____0 = (function (){
var statearr_21569 = [null,null,null,null,null,null,null];
(statearr_21569[(0)] = cljs$core$async$transduce_$_state_machine__21019__auto__);

(statearr_21569[(1)] = (1));

return statearr_21569;
});
var cljs$core$async$transduce_$_state_machine__21019__auto____1 = (function (state_21567){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21567);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21570){var ex__21022__auto__ = e21570;
var statearr_21571_22816 = state_21567;
(statearr_21571_22816[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21567[(4)]))){
var statearr_21572_22817 = state_21567;
(statearr_21572_22817[(1)] = cljs.core.first((state_21567[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22818 = state_21567;
state_21567 = G__22818;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21019__auto__ = function(state_21567){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21019__auto____1.call(this,state_21567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21019__auto____0;
cljs$core$async$transduce_$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21019__auto____1;
return cljs$core$async$transduce_$_state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21573 = f__21075__auto__();
(statearr_21573[(6)] = c__21074__auto__);

return statearr_21573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));

return c__21074__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__21575 = arguments.length;
switch (G__21575) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21600){
var state_val_21601 = (state_21600[(1)]);
if((state_val_21601 === (7))){
var inst_21582 = (state_21600[(2)]);
var state_21600__$1 = state_21600;
var statearr_21602_22823 = state_21600__$1;
(statearr_21602_22823[(2)] = inst_21582);

(statearr_21602_22823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (1))){
var inst_21576 = cljs.core.seq(coll);
var inst_21577 = inst_21576;
var state_21600__$1 = (function (){var statearr_21603 = state_21600;
(statearr_21603[(7)] = inst_21577);

return statearr_21603;
})();
var statearr_21604_22827 = state_21600__$1;
(statearr_21604_22827[(2)] = null);

(statearr_21604_22827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (4))){
var inst_21577 = (state_21600[(7)]);
var inst_21580 = cljs.core.first(inst_21577);
var state_21600__$1 = state_21600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21600__$1,(7),ch,inst_21580);
} else {
if((state_val_21601 === (13))){
var inst_21594 = (state_21600[(2)]);
var state_21600__$1 = state_21600;
var statearr_21605_22828 = state_21600__$1;
(statearr_21605_22828[(2)] = inst_21594);

(statearr_21605_22828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (6))){
var inst_21585 = (state_21600[(2)]);
var state_21600__$1 = state_21600;
if(cljs.core.truth_(inst_21585)){
var statearr_21606_22829 = state_21600__$1;
(statearr_21606_22829[(1)] = (8));

} else {
var statearr_21607_22834 = state_21600__$1;
(statearr_21607_22834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (3))){
var inst_21598 = (state_21600[(2)]);
var state_21600__$1 = state_21600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21600__$1,inst_21598);
} else {
if((state_val_21601 === (12))){
var state_21600__$1 = state_21600;
var statearr_21608_22838 = state_21600__$1;
(statearr_21608_22838[(2)] = null);

(statearr_21608_22838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (2))){
var inst_21577 = (state_21600[(7)]);
var state_21600__$1 = state_21600;
if(cljs.core.truth_(inst_21577)){
var statearr_21609_22839 = state_21600__$1;
(statearr_21609_22839[(1)] = (4));

} else {
var statearr_21610_22840 = state_21600__$1;
(statearr_21610_22840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (11))){
var inst_21591 = cljs.core.async.close_BANG_(ch);
var state_21600__$1 = state_21600;
var statearr_21611_22841 = state_21600__$1;
(statearr_21611_22841[(2)] = inst_21591);

(statearr_21611_22841[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (9))){
var state_21600__$1 = state_21600;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21612_22845 = state_21600__$1;
(statearr_21612_22845[(1)] = (11));

} else {
var statearr_21613_22846 = state_21600__$1;
(statearr_21613_22846[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (5))){
var inst_21577 = (state_21600[(7)]);
var state_21600__$1 = state_21600;
var statearr_21614_22847 = state_21600__$1;
(statearr_21614_22847[(2)] = inst_21577);

(statearr_21614_22847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (10))){
var inst_21596 = (state_21600[(2)]);
var state_21600__$1 = state_21600;
var statearr_21615_22848 = state_21600__$1;
(statearr_21615_22848[(2)] = inst_21596);

(statearr_21615_22848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21601 === (8))){
var inst_21577 = (state_21600[(7)]);
var inst_21587 = cljs.core.next(inst_21577);
var inst_21577__$1 = inst_21587;
var state_21600__$1 = (function (){var statearr_21616 = state_21600;
(statearr_21616[(7)] = inst_21577__$1);

return statearr_21616;
})();
var statearr_21617_22849 = state_21600__$1;
(statearr_21617_22849[(2)] = null);

(statearr_21617_22849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_21618 = [null,null,null,null,null,null,null,null];
(statearr_21618[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_21618[(1)] = (1));

return statearr_21618;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_21600){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21600);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21619){var ex__21022__auto__ = e21619;
var statearr_21620_22853 = state_21600;
(statearr_21620_22853[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21600[(4)]))){
var statearr_21621_22854 = state_21600;
(statearr_21621_22854[(1)] = cljs.core.first((state_21600[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22855 = state_21600;
state_21600 = G__22855;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_21600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_21600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21622 = f__21075__auto__();
(statearr_21622[(6)] = c__21074__auto__);

return statearr_21622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));

return c__21074__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__21624 = arguments.length;
switch (G__21624) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_22860 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_22860(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22862 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_22862(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22863 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_22863(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22864 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_22864(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21625 = (function (ch,cs,meta21626){
this.ch = ch;
this.cs = cs;
this.meta21626 = meta21626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21627,meta21626__$1){
var self__ = this;
var _21627__$1 = this;
return (new cljs.core.async.t_cljs$core$async21625(self__.ch,self__.cs,meta21626__$1));
}));

(cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21627){
var self__ = this;
var _21627__$1 = this;
return self__.meta21626;
}));

(cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async21625.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async21625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21626","meta21626",1965325276,null)], null);
}));

(cljs.core.async.t_cljs$core$async21625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21625");

(cljs.core.async.t_cljs$core$async21625.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21625.
 */
cljs.core.async.__GT_t_cljs$core$async21625 = (function cljs$core$async$mult_$___GT_t_cljs$core$async21625(ch__$1,cs__$1,meta21626){
return (new cljs.core.async.t_cljs$core$async21625(ch__$1,cs__$1,meta21626));
});

}

return (new cljs.core.async.t_cljs$core$async21625(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__21074__auto___22865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21760){
var state_val_21761 = (state_21760[(1)]);
if((state_val_21761 === (7))){
var inst_21756 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
var statearr_21762_22866 = state_21760__$1;
(statearr_21762_22866[(2)] = inst_21756);

(statearr_21762_22866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (20))){
var inst_21661 = (state_21760[(7)]);
var inst_21673 = cljs.core.first(inst_21661);
var inst_21674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21673,(0),null);
var inst_21675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21673,(1),null);
var state_21760__$1 = (function (){var statearr_21763 = state_21760;
(statearr_21763[(8)] = inst_21674);

return statearr_21763;
})();
if(cljs.core.truth_(inst_21675)){
var statearr_21764_22867 = state_21760__$1;
(statearr_21764_22867[(1)] = (22));

} else {
var statearr_21765_22868 = state_21760__$1;
(statearr_21765_22868[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (27))){
var inst_21705 = (state_21760[(9)]);
var inst_21630 = (state_21760[(10)]);
var inst_21703 = (state_21760[(11)]);
var inst_21710 = (state_21760[(12)]);
var inst_21710__$1 = cljs.core._nth(inst_21703,inst_21705);
var inst_21711 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21710__$1,inst_21630,done);
var state_21760__$1 = (function (){var statearr_21766 = state_21760;
(statearr_21766[(12)] = inst_21710__$1);

return statearr_21766;
})();
if(cljs.core.truth_(inst_21711)){
var statearr_21767_22869 = state_21760__$1;
(statearr_21767_22869[(1)] = (30));

} else {
var statearr_21768_22870 = state_21760__$1;
(statearr_21768_22870[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (1))){
var state_21760__$1 = state_21760;
var statearr_21769_22871 = state_21760__$1;
(statearr_21769_22871[(2)] = null);

(statearr_21769_22871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (24))){
var inst_21661 = (state_21760[(7)]);
var inst_21680 = (state_21760[(2)]);
var inst_21681 = cljs.core.next(inst_21661);
var inst_21639 = inst_21681;
var inst_21640 = null;
var inst_21641 = (0);
var inst_21642 = (0);
var state_21760__$1 = (function (){var statearr_21770 = state_21760;
(statearr_21770[(13)] = inst_21642);

(statearr_21770[(14)] = inst_21640);

(statearr_21770[(15)] = inst_21639);

(statearr_21770[(16)] = inst_21641);

(statearr_21770[(17)] = inst_21680);

return statearr_21770;
})();
var statearr_21771_22874 = state_21760__$1;
(statearr_21771_22874[(2)] = null);

(statearr_21771_22874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (39))){
var state_21760__$1 = state_21760;
var statearr_21775_22878 = state_21760__$1;
(statearr_21775_22878[(2)] = null);

(statearr_21775_22878[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (4))){
var inst_21630 = (state_21760[(10)]);
var inst_21630__$1 = (state_21760[(2)]);
var inst_21631 = (inst_21630__$1 == null);
var state_21760__$1 = (function (){var statearr_21776 = state_21760;
(statearr_21776[(10)] = inst_21630__$1);

return statearr_21776;
})();
if(cljs.core.truth_(inst_21631)){
var statearr_21777_22880 = state_21760__$1;
(statearr_21777_22880[(1)] = (5));

} else {
var statearr_21778_22881 = state_21760__$1;
(statearr_21778_22881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (15))){
var inst_21642 = (state_21760[(13)]);
var inst_21640 = (state_21760[(14)]);
var inst_21639 = (state_21760[(15)]);
var inst_21641 = (state_21760[(16)]);
var inst_21657 = (state_21760[(2)]);
var inst_21658 = (inst_21642 + (1));
var tmp21772 = inst_21640;
var tmp21773 = inst_21639;
var tmp21774 = inst_21641;
var inst_21639__$1 = tmp21773;
var inst_21640__$1 = tmp21772;
var inst_21641__$1 = tmp21774;
var inst_21642__$1 = inst_21658;
var state_21760__$1 = (function (){var statearr_21779 = state_21760;
(statearr_21779[(18)] = inst_21657);

(statearr_21779[(13)] = inst_21642__$1);

(statearr_21779[(14)] = inst_21640__$1);

(statearr_21779[(15)] = inst_21639__$1);

(statearr_21779[(16)] = inst_21641__$1);

return statearr_21779;
})();
var statearr_21780_22884 = state_21760__$1;
(statearr_21780_22884[(2)] = null);

(statearr_21780_22884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (21))){
var inst_21684 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
var statearr_21784_22885 = state_21760__$1;
(statearr_21784_22885[(2)] = inst_21684);

(statearr_21784_22885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (31))){
var inst_21710 = (state_21760[(12)]);
var inst_21714 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21710);
var state_21760__$1 = state_21760;
var statearr_21785_22886 = state_21760__$1;
(statearr_21785_22886[(2)] = inst_21714);

(statearr_21785_22886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (32))){
var inst_21705 = (state_21760[(9)]);
var inst_21702 = (state_21760[(19)]);
var inst_21703 = (state_21760[(11)]);
var inst_21704 = (state_21760[(20)]);
var inst_21716 = (state_21760[(2)]);
var inst_21717 = (inst_21705 + (1));
var tmp21781 = inst_21702;
var tmp21782 = inst_21703;
var tmp21783 = inst_21704;
var inst_21702__$1 = tmp21781;
var inst_21703__$1 = tmp21782;
var inst_21704__$1 = tmp21783;
var inst_21705__$1 = inst_21717;
var state_21760__$1 = (function (){var statearr_21786 = state_21760;
(statearr_21786[(9)] = inst_21705__$1);

(statearr_21786[(19)] = inst_21702__$1);

(statearr_21786[(21)] = inst_21716);

(statearr_21786[(11)] = inst_21703__$1);

(statearr_21786[(20)] = inst_21704__$1);

return statearr_21786;
})();
var statearr_21787_22887 = state_21760__$1;
(statearr_21787_22887[(2)] = null);

(statearr_21787_22887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (40))){
var inst_21729 = (state_21760[(22)]);
var inst_21733 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21729);
var state_21760__$1 = state_21760;
var statearr_21788_22888 = state_21760__$1;
(statearr_21788_22888[(2)] = inst_21733);

(statearr_21788_22888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (33))){
var inst_21720 = (state_21760[(23)]);
var inst_21722 = cljs.core.chunked_seq_QMARK_(inst_21720);
var state_21760__$1 = state_21760;
if(inst_21722){
var statearr_21789_22889 = state_21760__$1;
(statearr_21789_22889[(1)] = (36));

} else {
var statearr_21790_22890 = state_21760__$1;
(statearr_21790_22890[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (13))){
var inst_21651 = (state_21760[(24)]);
var inst_21654 = cljs.core.async.close_BANG_(inst_21651);
var state_21760__$1 = state_21760;
var statearr_21791_22891 = state_21760__$1;
(statearr_21791_22891[(2)] = inst_21654);

(statearr_21791_22891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (22))){
var inst_21674 = (state_21760[(8)]);
var inst_21677 = cljs.core.async.close_BANG_(inst_21674);
var state_21760__$1 = state_21760;
var statearr_21792_22893 = state_21760__$1;
(statearr_21792_22893[(2)] = inst_21677);

(statearr_21792_22893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (36))){
var inst_21720 = (state_21760[(23)]);
var inst_21724 = cljs.core.chunk_first(inst_21720);
var inst_21725 = cljs.core.chunk_rest(inst_21720);
var inst_21726 = cljs.core.count(inst_21724);
var inst_21702 = inst_21725;
var inst_21703 = inst_21724;
var inst_21704 = inst_21726;
var inst_21705 = (0);
var state_21760__$1 = (function (){var statearr_21793 = state_21760;
(statearr_21793[(9)] = inst_21705);

(statearr_21793[(19)] = inst_21702);

(statearr_21793[(11)] = inst_21703);

(statearr_21793[(20)] = inst_21704);

return statearr_21793;
})();
var statearr_21794_22901 = state_21760__$1;
(statearr_21794_22901[(2)] = null);

(statearr_21794_22901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (41))){
var inst_21720 = (state_21760[(23)]);
var inst_21735 = (state_21760[(2)]);
var inst_21736 = cljs.core.next(inst_21720);
var inst_21702 = inst_21736;
var inst_21703 = null;
var inst_21704 = (0);
var inst_21705 = (0);
var state_21760__$1 = (function (){var statearr_21795 = state_21760;
(statearr_21795[(9)] = inst_21705);

(statearr_21795[(19)] = inst_21702);

(statearr_21795[(11)] = inst_21703);

(statearr_21795[(25)] = inst_21735);

(statearr_21795[(20)] = inst_21704);

return statearr_21795;
})();
var statearr_21796_22905 = state_21760__$1;
(statearr_21796_22905[(2)] = null);

(statearr_21796_22905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (43))){
var state_21760__$1 = state_21760;
var statearr_21797_22910 = state_21760__$1;
(statearr_21797_22910[(2)] = null);

(statearr_21797_22910[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (29))){
var inst_21744 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
var statearr_21798_22917 = state_21760__$1;
(statearr_21798_22917[(2)] = inst_21744);

(statearr_21798_22917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (44))){
var inst_21753 = (state_21760[(2)]);
var state_21760__$1 = (function (){var statearr_21799 = state_21760;
(statearr_21799[(26)] = inst_21753);

return statearr_21799;
})();
var statearr_21800_22918 = state_21760__$1;
(statearr_21800_22918[(2)] = null);

(statearr_21800_22918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (6))){
var inst_21694 = (state_21760[(27)]);
var inst_21693 = cljs.core.deref(cs);
var inst_21694__$1 = cljs.core.keys(inst_21693);
var inst_21695 = cljs.core.count(inst_21694__$1);
var inst_21696 = cljs.core.reset_BANG_(dctr,inst_21695);
var inst_21701 = cljs.core.seq(inst_21694__$1);
var inst_21702 = inst_21701;
var inst_21703 = null;
var inst_21704 = (0);
var inst_21705 = (0);
var state_21760__$1 = (function (){var statearr_21801 = state_21760;
(statearr_21801[(27)] = inst_21694__$1);

(statearr_21801[(9)] = inst_21705);

(statearr_21801[(19)] = inst_21702);

(statearr_21801[(28)] = inst_21696);

(statearr_21801[(11)] = inst_21703);

(statearr_21801[(20)] = inst_21704);

return statearr_21801;
})();
var statearr_21802_22919 = state_21760__$1;
(statearr_21802_22919[(2)] = null);

(statearr_21802_22919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (28))){
var inst_21702 = (state_21760[(19)]);
var inst_21720 = (state_21760[(23)]);
var inst_21720__$1 = cljs.core.seq(inst_21702);
var state_21760__$1 = (function (){var statearr_21803 = state_21760;
(statearr_21803[(23)] = inst_21720__$1);

return statearr_21803;
})();
if(inst_21720__$1){
var statearr_21804_22920 = state_21760__$1;
(statearr_21804_22920[(1)] = (33));

} else {
var statearr_21805_22921 = state_21760__$1;
(statearr_21805_22921[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (25))){
var inst_21705 = (state_21760[(9)]);
var inst_21704 = (state_21760[(20)]);
var inst_21707 = (inst_21705 < inst_21704);
var inst_21708 = inst_21707;
var state_21760__$1 = state_21760;
if(cljs.core.truth_(inst_21708)){
var statearr_21806_22922 = state_21760__$1;
(statearr_21806_22922[(1)] = (27));

} else {
var statearr_21807_22923 = state_21760__$1;
(statearr_21807_22923[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (34))){
var state_21760__$1 = state_21760;
var statearr_21808_22930 = state_21760__$1;
(statearr_21808_22930[(2)] = null);

(statearr_21808_22930[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (17))){
var state_21760__$1 = state_21760;
var statearr_21809_22931 = state_21760__$1;
(statearr_21809_22931[(2)] = null);

(statearr_21809_22931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (3))){
var inst_21758 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21760__$1,inst_21758);
} else {
if((state_val_21761 === (12))){
var inst_21689 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
var statearr_21810_22932 = state_21760__$1;
(statearr_21810_22932[(2)] = inst_21689);

(statearr_21810_22932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (2))){
var state_21760__$1 = state_21760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21760__$1,(4),ch);
} else {
if((state_val_21761 === (23))){
var state_21760__$1 = state_21760;
var statearr_21811_22933 = state_21760__$1;
(statearr_21811_22933[(2)] = null);

(statearr_21811_22933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (35))){
var inst_21742 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
var statearr_21812_22934 = state_21760__$1;
(statearr_21812_22934[(2)] = inst_21742);

(statearr_21812_22934[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (19))){
var inst_21661 = (state_21760[(7)]);
var inst_21665 = cljs.core.chunk_first(inst_21661);
var inst_21666 = cljs.core.chunk_rest(inst_21661);
var inst_21667 = cljs.core.count(inst_21665);
var inst_21639 = inst_21666;
var inst_21640 = inst_21665;
var inst_21641 = inst_21667;
var inst_21642 = (0);
var state_21760__$1 = (function (){var statearr_21813 = state_21760;
(statearr_21813[(13)] = inst_21642);

(statearr_21813[(14)] = inst_21640);

(statearr_21813[(15)] = inst_21639);

(statearr_21813[(16)] = inst_21641);

return statearr_21813;
})();
var statearr_21814_22935 = state_21760__$1;
(statearr_21814_22935[(2)] = null);

(statearr_21814_22935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (11))){
var inst_21639 = (state_21760[(15)]);
var inst_21661 = (state_21760[(7)]);
var inst_21661__$1 = cljs.core.seq(inst_21639);
var state_21760__$1 = (function (){var statearr_21815 = state_21760;
(statearr_21815[(7)] = inst_21661__$1);

return statearr_21815;
})();
if(inst_21661__$1){
var statearr_21816_22942 = state_21760__$1;
(statearr_21816_22942[(1)] = (16));

} else {
var statearr_21817_22943 = state_21760__$1;
(statearr_21817_22943[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (9))){
var inst_21691 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
var statearr_21818_22944 = state_21760__$1;
(statearr_21818_22944[(2)] = inst_21691);

(statearr_21818_22944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (5))){
var inst_21637 = cljs.core.deref(cs);
var inst_21638 = cljs.core.seq(inst_21637);
var inst_21639 = inst_21638;
var inst_21640 = null;
var inst_21641 = (0);
var inst_21642 = (0);
var state_21760__$1 = (function (){var statearr_21819 = state_21760;
(statearr_21819[(13)] = inst_21642);

(statearr_21819[(14)] = inst_21640);

(statearr_21819[(15)] = inst_21639);

(statearr_21819[(16)] = inst_21641);

return statearr_21819;
})();
var statearr_21820_22945 = state_21760__$1;
(statearr_21820_22945[(2)] = null);

(statearr_21820_22945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (14))){
var state_21760__$1 = state_21760;
var statearr_21821_22946 = state_21760__$1;
(statearr_21821_22946[(2)] = null);

(statearr_21821_22946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (45))){
var inst_21750 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
var statearr_21822_22947 = state_21760__$1;
(statearr_21822_22947[(2)] = inst_21750);

(statearr_21822_22947[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (26))){
var inst_21694 = (state_21760[(27)]);
var inst_21746 = (state_21760[(2)]);
var inst_21747 = cljs.core.seq(inst_21694);
var state_21760__$1 = (function (){var statearr_21823 = state_21760;
(statearr_21823[(29)] = inst_21746);

return statearr_21823;
})();
if(inst_21747){
var statearr_21824_22948 = state_21760__$1;
(statearr_21824_22948[(1)] = (42));

} else {
var statearr_21825_22949 = state_21760__$1;
(statearr_21825_22949[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (16))){
var inst_21661 = (state_21760[(7)]);
var inst_21663 = cljs.core.chunked_seq_QMARK_(inst_21661);
var state_21760__$1 = state_21760;
if(inst_21663){
var statearr_21826_22950 = state_21760__$1;
(statearr_21826_22950[(1)] = (19));

} else {
var statearr_21827_22951 = state_21760__$1;
(statearr_21827_22951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (38))){
var inst_21739 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
var statearr_21828_22952 = state_21760__$1;
(statearr_21828_22952[(2)] = inst_21739);

(statearr_21828_22952[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (30))){
var state_21760__$1 = state_21760;
var statearr_21829_22953 = state_21760__$1;
(statearr_21829_22953[(2)] = null);

(statearr_21829_22953[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (10))){
var inst_21642 = (state_21760[(13)]);
var inst_21640 = (state_21760[(14)]);
var inst_21650 = cljs.core._nth(inst_21640,inst_21642);
var inst_21651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21650,(0),null);
var inst_21652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21650,(1),null);
var state_21760__$1 = (function (){var statearr_21830 = state_21760;
(statearr_21830[(24)] = inst_21651);

return statearr_21830;
})();
if(cljs.core.truth_(inst_21652)){
var statearr_21831_22960 = state_21760__$1;
(statearr_21831_22960[(1)] = (13));

} else {
var statearr_21832_22961 = state_21760__$1;
(statearr_21832_22961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (18))){
var inst_21687 = (state_21760[(2)]);
var state_21760__$1 = state_21760;
var statearr_21833_22962 = state_21760__$1;
(statearr_21833_22962[(2)] = inst_21687);

(statearr_21833_22962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (42))){
var state_21760__$1 = state_21760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21760__$1,(45),dchan);
} else {
if((state_val_21761 === (37))){
var inst_21630 = (state_21760[(10)]);
var inst_21729 = (state_21760[(22)]);
var inst_21720 = (state_21760[(23)]);
var inst_21729__$1 = cljs.core.first(inst_21720);
var inst_21730 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21729__$1,inst_21630,done);
var state_21760__$1 = (function (){var statearr_21834 = state_21760;
(statearr_21834[(22)] = inst_21729__$1);

return statearr_21834;
})();
if(cljs.core.truth_(inst_21730)){
var statearr_21835_22963 = state_21760__$1;
(statearr_21835_22963[(1)] = (39));

} else {
var statearr_21836_22964 = state_21760__$1;
(statearr_21836_22964[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21761 === (8))){
var inst_21642 = (state_21760[(13)]);
var inst_21641 = (state_21760[(16)]);
var inst_21644 = (inst_21642 < inst_21641);
var inst_21645 = inst_21644;
var state_21760__$1 = state_21760;
if(cljs.core.truth_(inst_21645)){
var statearr_21837_22965 = state_21760__$1;
(statearr_21837_22965[(1)] = (10));

} else {
var statearr_21838_22966 = state_21760__$1;
(statearr_21838_22966[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__21019__auto__ = null;
var cljs$core$async$mult_$_state_machine__21019__auto____0 = (function (){
var statearr_21839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21839[(0)] = cljs$core$async$mult_$_state_machine__21019__auto__);

(statearr_21839[(1)] = (1));

return statearr_21839;
});
var cljs$core$async$mult_$_state_machine__21019__auto____1 = (function (state_21760){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21760);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21840){var ex__21022__auto__ = e21840;
var statearr_21841_22967 = state_21760;
(statearr_21841_22967[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21760[(4)]))){
var statearr_21842_22968 = state_21760;
(statearr_21842_22968[(1)] = cljs.core.first((state_21760[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22969 = state_21760;
state_21760 = G__22969;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21019__auto__ = function(state_21760){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21019__auto____1.call(this,state_21760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21019__auto____0;
cljs$core$async$mult_$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21019__auto____1;
return cljs$core$async$mult_$_state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21843 = f__21075__auto__();
(statearr_21843[(6)] = c__21074__auto___22865);

return statearr_21843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__21845 = arguments.length;
switch (G__21845) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_22971 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_22971(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22972 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_22972(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22978 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22978(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22979 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_22979(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22980 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22980(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22982 = arguments.length;
var i__5770__auto___22983 = (0);
while(true){
if((i__5770__auto___22983 < len__5769__auto___22982)){
args__5775__auto__.push((arguments[i__5770__auto___22983]));

var G__22984 = (i__5770__auto___22983 + (1));
i__5770__auto___22983 = G__22984;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21850){
var map__21851 = p__21850;
var map__21851__$1 = cljs.core.__destructure_map(map__21851);
var opts = map__21851__$1;
var statearr_21852_22986 = state;
(statearr_21852_22986[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_21853_22987 = state;
(statearr_21853_22987[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_21854_22988 = state;
(statearr_21854_22988[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21846){
var G__21847 = cljs.core.first(seq21846);
var seq21846__$1 = cljs.core.next(seq21846);
var G__21848 = cljs.core.first(seq21846__$1);
var seq21846__$2 = cljs.core.next(seq21846__$1);
var G__21849 = cljs.core.first(seq21846__$2);
var seq21846__$3 = cljs.core.next(seq21846__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21847,G__21848,G__21849,seq21846__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21855 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21856){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21856 = meta21856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21857,meta21856__$1){
var self__ = this;
var _21857__$1 = this;
return (new cljs.core.async.t_cljs$core$async21855(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21856__$1));
}));

(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21857){
var self__ = this;
var _21857__$1 = this;
return self__.meta21856;
}));

(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21855.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21856","meta21856",-1347450080,null)], null);
}));

(cljs.core.async.t_cljs$core$async21855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21855");

(cljs.core.async.t_cljs$core$async21855.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21855.
 */
cljs.core.async.__GT_t_cljs$core$async21855 = (function cljs$core$async$mix_$___GT_t_cljs$core$async21855(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21856){
return (new cljs.core.async.t_cljs$core$async21855(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21856));
});

}

return (new cljs.core.async.t_cljs$core$async21855(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21074__auto___22993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_21925){
var state_val_21926 = (state_21925[(1)]);
if((state_val_21926 === (7))){
var inst_21885 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
if(cljs.core.truth_(inst_21885)){
var statearr_21927_22994 = state_21925__$1;
(statearr_21927_22994[(1)] = (8));

} else {
var statearr_21928_22995 = state_21925__$1;
(statearr_21928_22995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (20))){
var inst_21878 = (state_21925[(7)]);
var state_21925__$1 = state_21925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21925__$1,(23),out,inst_21878);
} else {
if((state_val_21926 === (1))){
var inst_21861 = calc_state();
var inst_21862 = cljs.core.__destructure_map(inst_21861);
var inst_21863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21862,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21862,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21862,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21866 = inst_21861;
var state_21925__$1 = (function (){var statearr_21929 = state_21925;
(statearr_21929[(8)] = inst_21866);

(statearr_21929[(9)] = inst_21863);

(statearr_21929[(10)] = inst_21864);

(statearr_21929[(11)] = inst_21865);

return statearr_21929;
})();
var statearr_21930_22996 = state_21925__$1;
(statearr_21930_22996[(2)] = null);

(statearr_21930_22996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (24))){
var inst_21869 = (state_21925[(12)]);
var inst_21866 = inst_21869;
var state_21925__$1 = (function (){var statearr_21931 = state_21925;
(statearr_21931[(8)] = inst_21866);

return statearr_21931;
})();
var statearr_21932_22997 = state_21925__$1;
(statearr_21932_22997[(2)] = null);

(statearr_21932_22997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (4))){
var inst_21880 = (state_21925[(13)]);
var inst_21878 = (state_21925[(7)]);
var inst_21877 = (state_21925[(2)]);
var inst_21878__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21877,(0),null);
var inst_21879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21877,(1),null);
var inst_21880__$1 = (inst_21878__$1 == null);
var state_21925__$1 = (function (){var statearr_21933 = state_21925;
(statearr_21933[(13)] = inst_21880__$1);

(statearr_21933[(14)] = inst_21879);

(statearr_21933[(7)] = inst_21878__$1);

return statearr_21933;
})();
if(cljs.core.truth_(inst_21880__$1)){
var statearr_21934_22999 = state_21925__$1;
(statearr_21934_22999[(1)] = (5));

} else {
var statearr_21935_23000 = state_21925__$1;
(statearr_21935_23000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (15))){
var inst_21870 = (state_21925[(15)]);
var inst_21899 = (state_21925[(16)]);
var inst_21899__$1 = cljs.core.empty_QMARK_(inst_21870);
var state_21925__$1 = (function (){var statearr_21936 = state_21925;
(statearr_21936[(16)] = inst_21899__$1);

return statearr_21936;
})();
if(inst_21899__$1){
var statearr_21937_23001 = state_21925__$1;
(statearr_21937_23001[(1)] = (17));

} else {
var statearr_21938_23002 = state_21925__$1;
(statearr_21938_23002[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (21))){
var inst_21869 = (state_21925[(12)]);
var inst_21866 = inst_21869;
var state_21925__$1 = (function (){var statearr_21939 = state_21925;
(statearr_21939[(8)] = inst_21866);

return statearr_21939;
})();
var statearr_21940_23003 = state_21925__$1;
(statearr_21940_23003[(2)] = null);

(statearr_21940_23003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (13))){
var inst_21892 = (state_21925[(2)]);
var inst_21893 = calc_state();
var inst_21866 = inst_21893;
var state_21925__$1 = (function (){var statearr_21941 = state_21925;
(statearr_21941[(8)] = inst_21866);

(statearr_21941[(17)] = inst_21892);

return statearr_21941;
})();
var statearr_21942_23004 = state_21925__$1;
(statearr_21942_23004[(2)] = null);

(statearr_21942_23004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (22))){
var inst_21919 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
var statearr_21943_23009 = state_21925__$1;
(statearr_21943_23009[(2)] = inst_21919);

(statearr_21943_23009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (6))){
var inst_21879 = (state_21925[(14)]);
var inst_21883 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21879,change);
var state_21925__$1 = state_21925;
var statearr_21944_23010 = state_21925__$1;
(statearr_21944_23010[(2)] = inst_21883);

(statearr_21944_23010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (25))){
var state_21925__$1 = state_21925;
var statearr_21945_23011 = state_21925__$1;
(statearr_21945_23011[(2)] = null);

(statearr_21945_23011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (17))){
var inst_21871 = (state_21925[(18)]);
var inst_21879 = (state_21925[(14)]);
var inst_21901 = (inst_21871.cljs$core$IFn$_invoke$arity$1 ? inst_21871.cljs$core$IFn$_invoke$arity$1(inst_21879) : inst_21871.call(null,inst_21879));
var inst_21902 = cljs.core.not(inst_21901);
var state_21925__$1 = state_21925;
var statearr_21946_23012 = state_21925__$1;
(statearr_21946_23012[(2)] = inst_21902);

(statearr_21946_23012[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (3))){
var inst_21923 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21925__$1,inst_21923);
} else {
if((state_val_21926 === (12))){
var state_21925__$1 = state_21925;
var statearr_21947_23013 = state_21925__$1;
(statearr_21947_23013[(2)] = null);

(statearr_21947_23013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (2))){
var inst_21866 = (state_21925[(8)]);
var inst_21869 = (state_21925[(12)]);
var inst_21869__$1 = cljs.core.__destructure_map(inst_21866);
var inst_21870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21869__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21869__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21869__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21925__$1 = (function (){var statearr_21948 = state_21925;
(statearr_21948[(12)] = inst_21869__$1);

(statearr_21948[(18)] = inst_21871);

(statearr_21948[(15)] = inst_21870);

return statearr_21948;
})();
return cljs.core.async.ioc_alts_BANG_(state_21925__$1,(4),inst_21872);
} else {
if((state_val_21926 === (23))){
var inst_21910 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
if(cljs.core.truth_(inst_21910)){
var statearr_21949_23014 = state_21925__$1;
(statearr_21949_23014[(1)] = (24));

} else {
var statearr_21950_23015 = state_21925__$1;
(statearr_21950_23015[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (19))){
var inst_21905 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
var statearr_21951_23016 = state_21925__$1;
(statearr_21951_23016[(2)] = inst_21905);

(statearr_21951_23016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (11))){
var inst_21879 = (state_21925[(14)]);
var inst_21889 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21879);
var state_21925__$1 = state_21925;
var statearr_21952_23021 = state_21925__$1;
(statearr_21952_23021[(2)] = inst_21889);

(statearr_21952_23021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (9))){
var inst_21896 = (state_21925[(19)]);
var inst_21879 = (state_21925[(14)]);
var inst_21870 = (state_21925[(15)]);
var inst_21896__$1 = (inst_21870.cljs$core$IFn$_invoke$arity$1 ? inst_21870.cljs$core$IFn$_invoke$arity$1(inst_21879) : inst_21870.call(null,inst_21879));
var state_21925__$1 = (function (){var statearr_21953 = state_21925;
(statearr_21953[(19)] = inst_21896__$1);

return statearr_21953;
})();
if(cljs.core.truth_(inst_21896__$1)){
var statearr_21954_23025 = state_21925__$1;
(statearr_21954_23025[(1)] = (14));

} else {
var statearr_21955_23026 = state_21925__$1;
(statearr_21955_23026[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (5))){
var inst_21880 = (state_21925[(13)]);
var state_21925__$1 = state_21925;
var statearr_21956_23027 = state_21925__$1;
(statearr_21956_23027[(2)] = inst_21880);

(statearr_21956_23027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (14))){
var inst_21896 = (state_21925[(19)]);
var state_21925__$1 = state_21925;
var statearr_21957_23028 = state_21925__$1;
(statearr_21957_23028[(2)] = inst_21896);

(statearr_21957_23028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (26))){
var inst_21915 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
var statearr_21958_23032 = state_21925__$1;
(statearr_21958_23032[(2)] = inst_21915);

(statearr_21958_23032[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (16))){
var inst_21907 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
if(cljs.core.truth_(inst_21907)){
var statearr_21959_23033 = state_21925__$1;
(statearr_21959_23033[(1)] = (20));

} else {
var statearr_21960_23034 = state_21925__$1;
(statearr_21960_23034[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (10))){
var inst_21921 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
var statearr_21961_23038 = state_21925__$1;
(statearr_21961_23038[(2)] = inst_21921);

(statearr_21961_23038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (18))){
var inst_21899 = (state_21925[(16)]);
var state_21925__$1 = state_21925;
var statearr_21962_23039 = state_21925__$1;
(statearr_21962_23039[(2)] = inst_21899);

(statearr_21962_23039[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (8))){
var inst_21878 = (state_21925[(7)]);
var inst_21887 = (inst_21878 == null);
var state_21925__$1 = state_21925;
if(cljs.core.truth_(inst_21887)){
var statearr_21963_23040 = state_21925__$1;
(statearr_21963_23040[(1)] = (11));

} else {
var statearr_21964_23041 = state_21925__$1;
(statearr_21964_23041[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__21019__auto__ = null;
var cljs$core$async$mix_$_state_machine__21019__auto____0 = (function (){
var statearr_21965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21965[(0)] = cljs$core$async$mix_$_state_machine__21019__auto__);

(statearr_21965[(1)] = (1));

return statearr_21965;
});
var cljs$core$async$mix_$_state_machine__21019__auto____1 = (function (state_21925){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_21925);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e21966){var ex__21022__auto__ = e21966;
var statearr_21967_23045 = state_21925;
(statearr_21967_23045[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_21925[(4)]))){
var statearr_21968_23046 = state_21925;
(statearr_21968_23046[(1)] = cljs.core.first((state_21925[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23048 = state_21925;
state_21925 = G__23048;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21019__auto__ = function(state_21925){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21019__auto____1.call(this,state_21925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21019__auto____0;
cljs$core$async$mix_$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21019__auto____1;
return cljs$core$async$mix_$_state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_21969 = f__21075__auto__();
(statearr_21969[(6)] = c__21074__auto___22993);

return statearr_21969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_23052 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_23052(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23053 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_23053(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23056 = (function() {
var G__23057 = null;
var G__23057__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__23057__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__23057 = function(p,v){
switch(arguments.length){
case 1:
return G__23057__1.call(this,p);
case 2:
return G__23057__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23057.cljs$core$IFn$_invoke$arity$1 = G__23057__1;
G__23057.cljs$core$IFn$_invoke$arity$2 = G__23057__2;
return G__23057;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21971 = arguments.length;
switch (G__21971) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23056(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23056(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__21974 = arguments.length;
switch (G__21974) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__21972_SHARP_){
if(cljs.core.truth_((p1__21972_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21972_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21972_SHARP_.call(null,topic)))){
return p1__21972_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21972_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21975 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21976){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21976 = meta21976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21977,meta21976__$1){
var self__ = this;
var _21977__$1 = this;
return (new cljs.core.async.t_cljs$core$async21975(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21976__$1));
}));

(cljs.core.async.t_cljs$core$async21975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21977){
var self__ = this;
var _21977__$1 = this;
return self__.meta21976;
}));

(cljs.core.async.t_cljs$core$async21975.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21975.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21975.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async21975.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async21975.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async21975.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async21975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21976","meta21976",-2020668330,null)], null);
}));

(cljs.core.async.t_cljs$core$async21975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21975");

(cljs.core.async.t_cljs$core$async21975.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21975.
 */
cljs.core.async.__GT_t_cljs$core$async21975 = (function cljs$core$async$__GT_t_cljs$core$async21975(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21976){
return (new cljs.core.async.t_cljs$core$async21975(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21976));
});

}

return (new cljs.core.async.t_cljs$core$async21975(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21074__auto___23068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_22049){
var state_val_22050 = (state_22049[(1)]);
if((state_val_22050 === (7))){
var inst_22045 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22051_23069 = state_22049__$1;
(statearr_22051_23069[(2)] = inst_22045);

(statearr_22051_23069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (20))){
var state_22049__$1 = state_22049;
var statearr_22052_23071 = state_22049__$1;
(statearr_22052_23071[(2)] = null);

(statearr_22052_23071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (1))){
var state_22049__$1 = state_22049;
var statearr_22053_23072 = state_22049__$1;
(statearr_22053_23072[(2)] = null);

(statearr_22053_23072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (24))){
var inst_22028 = (state_22049[(7)]);
var inst_22037 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22028);
var state_22049__$1 = state_22049;
var statearr_22054_23073 = state_22049__$1;
(statearr_22054_23073[(2)] = inst_22037);

(statearr_22054_23073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (4))){
var inst_21980 = (state_22049[(8)]);
var inst_21980__$1 = (state_22049[(2)]);
var inst_21981 = (inst_21980__$1 == null);
var state_22049__$1 = (function (){var statearr_22055 = state_22049;
(statearr_22055[(8)] = inst_21980__$1);

return statearr_22055;
})();
if(cljs.core.truth_(inst_21981)){
var statearr_22056_23074 = state_22049__$1;
(statearr_22056_23074[(1)] = (5));

} else {
var statearr_22057_23075 = state_22049__$1;
(statearr_22057_23075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (15))){
var inst_22022 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22058_23076 = state_22049__$1;
(statearr_22058_23076[(2)] = inst_22022);

(statearr_22058_23076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (21))){
var inst_22042 = (state_22049[(2)]);
var state_22049__$1 = (function (){var statearr_22059 = state_22049;
(statearr_22059[(9)] = inst_22042);

return statearr_22059;
})();
var statearr_22060_23077 = state_22049__$1;
(statearr_22060_23077[(2)] = null);

(statearr_22060_23077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (13))){
var inst_22004 = (state_22049[(10)]);
var inst_22006 = cljs.core.chunked_seq_QMARK_(inst_22004);
var state_22049__$1 = state_22049;
if(inst_22006){
var statearr_22061_23079 = state_22049__$1;
(statearr_22061_23079[(1)] = (16));

} else {
var statearr_22062_23080 = state_22049__$1;
(statearr_22062_23080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (22))){
var inst_22034 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
if(cljs.core.truth_(inst_22034)){
var statearr_22063_23081 = state_22049__$1;
(statearr_22063_23081[(1)] = (23));

} else {
var statearr_22064_23082 = state_22049__$1;
(statearr_22064_23082[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (6))){
var inst_22028 = (state_22049[(7)]);
var inst_22030 = (state_22049[(11)]);
var inst_21980 = (state_22049[(8)]);
var inst_22028__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21980) : topic_fn.call(null,inst_21980));
var inst_22029 = cljs.core.deref(mults);
var inst_22030__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22029,inst_22028__$1);
var state_22049__$1 = (function (){var statearr_22065 = state_22049;
(statearr_22065[(7)] = inst_22028__$1);

(statearr_22065[(11)] = inst_22030__$1);

return statearr_22065;
})();
if(cljs.core.truth_(inst_22030__$1)){
var statearr_22066_23084 = state_22049__$1;
(statearr_22066_23084[(1)] = (19));

} else {
var statearr_22067_23088 = state_22049__$1;
(statearr_22067_23088[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (25))){
var inst_22039 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22068_23089 = state_22049__$1;
(statearr_22068_23089[(2)] = inst_22039);

(statearr_22068_23089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (17))){
var inst_22004 = (state_22049[(10)]);
var inst_22013 = cljs.core.first(inst_22004);
var inst_22014 = cljs.core.async.muxch_STAR_(inst_22013);
var inst_22015 = cljs.core.async.close_BANG_(inst_22014);
var inst_22016 = cljs.core.next(inst_22004);
var inst_21990 = inst_22016;
var inst_21991 = null;
var inst_21992 = (0);
var inst_21993 = (0);
var state_22049__$1 = (function (){var statearr_22069 = state_22049;
(statearr_22069[(12)] = inst_21990);

(statearr_22069[(13)] = inst_21992);

(statearr_22069[(14)] = inst_21991);

(statearr_22069[(15)] = inst_22015);

(statearr_22069[(16)] = inst_21993);

return statearr_22069;
})();
var statearr_22070_23090 = state_22049__$1;
(statearr_22070_23090[(2)] = null);

(statearr_22070_23090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (3))){
var inst_22047 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22049__$1,inst_22047);
} else {
if((state_val_22050 === (12))){
var inst_22024 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22071_23091 = state_22049__$1;
(statearr_22071_23091[(2)] = inst_22024);

(statearr_22071_23091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (2))){
var state_22049__$1 = state_22049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22049__$1,(4),ch);
} else {
if((state_val_22050 === (23))){
var state_22049__$1 = state_22049;
var statearr_22072_23092 = state_22049__$1;
(statearr_22072_23092[(2)] = null);

(statearr_22072_23092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (19))){
var inst_22030 = (state_22049[(11)]);
var inst_21980 = (state_22049[(8)]);
var inst_22032 = cljs.core.async.muxch_STAR_(inst_22030);
var state_22049__$1 = state_22049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22049__$1,(22),inst_22032,inst_21980);
} else {
if((state_val_22050 === (11))){
var inst_21990 = (state_22049[(12)]);
var inst_22004 = (state_22049[(10)]);
var inst_22004__$1 = cljs.core.seq(inst_21990);
var state_22049__$1 = (function (){var statearr_22073 = state_22049;
(statearr_22073[(10)] = inst_22004__$1);

return statearr_22073;
})();
if(inst_22004__$1){
var statearr_22074_23093 = state_22049__$1;
(statearr_22074_23093[(1)] = (13));

} else {
var statearr_22075_23094 = state_22049__$1;
(statearr_22075_23094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (9))){
var inst_22026 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22076_23095 = state_22049__$1;
(statearr_22076_23095[(2)] = inst_22026);

(statearr_22076_23095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (5))){
var inst_21987 = cljs.core.deref(mults);
var inst_21988 = cljs.core.vals(inst_21987);
var inst_21989 = cljs.core.seq(inst_21988);
var inst_21990 = inst_21989;
var inst_21991 = null;
var inst_21992 = (0);
var inst_21993 = (0);
var state_22049__$1 = (function (){var statearr_22077 = state_22049;
(statearr_22077[(12)] = inst_21990);

(statearr_22077[(13)] = inst_21992);

(statearr_22077[(14)] = inst_21991);

(statearr_22077[(16)] = inst_21993);

return statearr_22077;
})();
var statearr_22078_23096 = state_22049__$1;
(statearr_22078_23096[(2)] = null);

(statearr_22078_23096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (14))){
var state_22049__$1 = state_22049;
var statearr_22082_23097 = state_22049__$1;
(statearr_22082_23097[(2)] = null);

(statearr_22082_23097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (16))){
var inst_22004 = (state_22049[(10)]);
var inst_22008 = cljs.core.chunk_first(inst_22004);
var inst_22009 = cljs.core.chunk_rest(inst_22004);
var inst_22010 = cljs.core.count(inst_22008);
var inst_21990 = inst_22009;
var inst_21991 = inst_22008;
var inst_21992 = inst_22010;
var inst_21993 = (0);
var state_22049__$1 = (function (){var statearr_22083 = state_22049;
(statearr_22083[(12)] = inst_21990);

(statearr_22083[(13)] = inst_21992);

(statearr_22083[(14)] = inst_21991);

(statearr_22083[(16)] = inst_21993);

return statearr_22083;
})();
var statearr_22084_23098 = state_22049__$1;
(statearr_22084_23098[(2)] = null);

(statearr_22084_23098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (10))){
var inst_21990 = (state_22049[(12)]);
var inst_21992 = (state_22049[(13)]);
var inst_21991 = (state_22049[(14)]);
var inst_21993 = (state_22049[(16)]);
var inst_21998 = cljs.core._nth(inst_21991,inst_21993);
var inst_21999 = cljs.core.async.muxch_STAR_(inst_21998);
var inst_22000 = cljs.core.async.close_BANG_(inst_21999);
var inst_22001 = (inst_21993 + (1));
var tmp22079 = inst_21990;
var tmp22080 = inst_21992;
var tmp22081 = inst_21991;
var inst_21990__$1 = tmp22079;
var inst_21991__$1 = tmp22081;
var inst_21992__$1 = tmp22080;
var inst_21993__$1 = inst_22001;
var state_22049__$1 = (function (){var statearr_22085 = state_22049;
(statearr_22085[(12)] = inst_21990__$1);

(statearr_22085[(13)] = inst_21992__$1);

(statearr_22085[(17)] = inst_22000);

(statearr_22085[(14)] = inst_21991__$1);

(statearr_22085[(16)] = inst_21993__$1);

return statearr_22085;
})();
var statearr_22086_23099 = state_22049__$1;
(statearr_22086_23099[(2)] = null);

(statearr_22086_23099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (18))){
var inst_22019 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22087_23100 = state_22049__$1;
(statearr_22087_23100[(2)] = inst_22019);

(statearr_22087_23100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (8))){
var inst_21992 = (state_22049[(13)]);
var inst_21993 = (state_22049[(16)]);
var inst_21995 = (inst_21993 < inst_21992);
var inst_21996 = inst_21995;
var state_22049__$1 = state_22049;
if(cljs.core.truth_(inst_21996)){
var statearr_22088_23101 = state_22049__$1;
(statearr_22088_23101[(1)] = (10));

} else {
var statearr_22089_23102 = state_22049__$1;
(statearr_22089_23102[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_22090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22090[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_22090[(1)] = (1));

return statearr_22090;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_22049){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_22049);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e22091){var ex__21022__auto__ = e22091;
var statearr_22092_23104 = state_22049;
(statearr_22092_23104[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_22049[(4)]))){
var statearr_22093_23108 = state_22049;
(statearr_22093_23108[(1)] = cljs.core.first((state_22049[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23109 = state_22049;
state_22049 = G__23109;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_22049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_22049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_22094 = f__21075__auto__();
(statearr_22094[(6)] = c__21074__auto___23068);

return statearr_22094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22096 = arguments.length;
switch (G__22096) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22098 = arguments.length;
switch (G__22098) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22100 = arguments.length;
switch (G__22100) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__21074__auto___23114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_22143){
var state_val_22144 = (state_22143[(1)]);
if((state_val_22144 === (7))){
var state_22143__$1 = state_22143;
var statearr_22145_23115 = state_22143__$1;
(statearr_22145_23115[(2)] = null);

(statearr_22145_23115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (1))){
var state_22143__$1 = state_22143;
var statearr_22146_23116 = state_22143__$1;
(statearr_22146_23116[(2)] = null);

(statearr_22146_23116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (4))){
var inst_22103 = (state_22143[(7)]);
var inst_22104 = (state_22143[(8)]);
var inst_22106 = (inst_22104 < inst_22103);
var state_22143__$1 = state_22143;
if(cljs.core.truth_(inst_22106)){
var statearr_22147_23117 = state_22143__$1;
(statearr_22147_23117[(1)] = (6));

} else {
var statearr_22148_23118 = state_22143__$1;
(statearr_22148_23118[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (15))){
var inst_22129 = (state_22143[(9)]);
var inst_22134 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22129);
var state_22143__$1 = state_22143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22143__$1,(17),out,inst_22134);
} else {
if((state_val_22144 === (13))){
var inst_22129 = (state_22143[(9)]);
var inst_22129__$1 = (state_22143[(2)]);
var inst_22130 = cljs.core.some(cljs.core.nil_QMARK_,inst_22129__$1);
var state_22143__$1 = (function (){var statearr_22149 = state_22143;
(statearr_22149[(9)] = inst_22129__$1);

return statearr_22149;
})();
if(cljs.core.truth_(inst_22130)){
var statearr_22150_23119 = state_22143__$1;
(statearr_22150_23119[(1)] = (14));

} else {
var statearr_22151_23120 = state_22143__$1;
(statearr_22151_23120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (6))){
var state_22143__$1 = state_22143;
var statearr_22152_23121 = state_22143__$1;
(statearr_22152_23121[(2)] = null);

(statearr_22152_23121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (17))){
var inst_22136 = (state_22143[(2)]);
var state_22143__$1 = (function (){var statearr_22154 = state_22143;
(statearr_22154[(10)] = inst_22136);

return statearr_22154;
})();
var statearr_22155_23122 = state_22143__$1;
(statearr_22155_23122[(2)] = null);

(statearr_22155_23122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (3))){
var inst_22141 = (state_22143[(2)]);
var state_22143__$1 = state_22143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22143__$1,inst_22141);
} else {
if((state_val_22144 === (12))){
var _ = (function (){var statearr_22156 = state_22143;
(statearr_22156[(4)] = cljs.core.rest((state_22143[(4)])));

return statearr_22156;
})();
var state_22143__$1 = state_22143;
var ex22153 = (state_22143__$1[(2)]);
var statearr_22157_23127 = state_22143__$1;
(statearr_22157_23127[(5)] = ex22153);


if((ex22153 instanceof Object)){
var statearr_22158_23128 = state_22143__$1;
(statearr_22158_23128[(1)] = (11));

(statearr_22158_23128[(5)] = null);

} else {
throw ex22153;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (2))){
var inst_22102 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22103 = cnt;
var inst_22104 = (0);
var state_22143__$1 = (function (){var statearr_22159 = state_22143;
(statearr_22159[(7)] = inst_22103);

(statearr_22159[(8)] = inst_22104);

(statearr_22159[(11)] = inst_22102);

return statearr_22159;
})();
var statearr_22160_23130 = state_22143__$1;
(statearr_22160_23130[(2)] = null);

(statearr_22160_23130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (11))){
var inst_22108 = (state_22143[(2)]);
var inst_22109 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22143__$1 = (function (){var statearr_22161 = state_22143;
(statearr_22161[(12)] = inst_22108);

return statearr_22161;
})();
var statearr_22162_23131 = state_22143__$1;
(statearr_22162_23131[(2)] = inst_22109);

(statearr_22162_23131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (9))){
var inst_22104 = (state_22143[(8)]);
var _ = (function (){var statearr_22163 = state_22143;
(statearr_22163[(4)] = cljs.core.cons((12),(state_22143[(4)])));

return statearr_22163;
})();
var inst_22115 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22104) : chs__$1.call(null,inst_22104));
var inst_22116 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22104) : done.call(null,inst_22104));
var inst_22117 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22115,inst_22116);
var ___$1 = (function (){var statearr_22164 = state_22143;
(statearr_22164[(4)] = cljs.core.rest((state_22143[(4)])));

return statearr_22164;
})();
var state_22143__$1 = state_22143;
var statearr_22165_23133 = state_22143__$1;
(statearr_22165_23133[(2)] = inst_22117);

(statearr_22165_23133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (5))){
var inst_22127 = (state_22143[(2)]);
var state_22143__$1 = (function (){var statearr_22166 = state_22143;
(statearr_22166[(13)] = inst_22127);

return statearr_22166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22143__$1,(13),dchan);
} else {
if((state_val_22144 === (14))){
var inst_22132 = cljs.core.async.close_BANG_(out);
var state_22143__$1 = state_22143;
var statearr_22167_23134 = state_22143__$1;
(statearr_22167_23134[(2)] = inst_22132);

(statearr_22167_23134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (16))){
var inst_22139 = (state_22143[(2)]);
var state_22143__$1 = state_22143;
var statearr_22168_23135 = state_22143__$1;
(statearr_22168_23135[(2)] = inst_22139);

(statearr_22168_23135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (10))){
var inst_22104 = (state_22143[(8)]);
var inst_22120 = (state_22143[(2)]);
var inst_22121 = (inst_22104 + (1));
var inst_22104__$1 = inst_22121;
var state_22143__$1 = (function (){var statearr_22169 = state_22143;
(statearr_22169[(8)] = inst_22104__$1);

(statearr_22169[(14)] = inst_22120);

return statearr_22169;
})();
var statearr_22170_23140 = state_22143__$1;
(statearr_22170_23140[(2)] = null);

(statearr_22170_23140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22144 === (8))){
var inst_22125 = (state_22143[(2)]);
var state_22143__$1 = state_22143;
var statearr_22171_23141 = state_22143__$1;
(statearr_22171_23141[(2)] = inst_22125);

(statearr_22171_23141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_22172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22172[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_22172[(1)] = (1));

return statearr_22172;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_22143){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_22143);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e22173){var ex__21022__auto__ = e22173;
var statearr_22174_23142 = state_22143;
(statearr_22174_23142[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_22143[(4)]))){
var statearr_22175_23143 = state_22143;
(statearr_22175_23143[(1)] = cljs.core.first((state_22143[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23144 = state_22143;
state_22143 = G__23144;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_22143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_22143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_22176 = f__21075__auto__();
(statearr_22176[(6)] = c__21074__auto___23114);

return statearr_22176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22179 = arguments.length;
switch (G__22179) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21074__auto___23146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_22211){
var state_val_22212 = (state_22211[(1)]);
if((state_val_22212 === (7))){
var inst_22190 = (state_22211[(7)]);
var inst_22191 = (state_22211[(8)]);
var inst_22190__$1 = (state_22211[(2)]);
var inst_22191__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22190__$1,(0),null);
var inst_22192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22190__$1,(1),null);
var inst_22193 = (inst_22191__$1 == null);
var state_22211__$1 = (function (){var statearr_22213 = state_22211;
(statearr_22213[(7)] = inst_22190__$1);

(statearr_22213[(8)] = inst_22191__$1);

(statearr_22213[(9)] = inst_22192);

return statearr_22213;
})();
if(cljs.core.truth_(inst_22193)){
var statearr_22214_23147 = state_22211__$1;
(statearr_22214_23147[(1)] = (8));

} else {
var statearr_22215_23148 = state_22211__$1;
(statearr_22215_23148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22212 === (1))){
var inst_22180 = cljs.core.vec(chs);
var inst_22181 = inst_22180;
var state_22211__$1 = (function (){var statearr_22216 = state_22211;
(statearr_22216[(10)] = inst_22181);

return statearr_22216;
})();
var statearr_22217_23149 = state_22211__$1;
(statearr_22217_23149[(2)] = null);

(statearr_22217_23149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22212 === (4))){
var inst_22181 = (state_22211[(10)]);
var state_22211__$1 = state_22211;
return cljs.core.async.ioc_alts_BANG_(state_22211__$1,(7),inst_22181);
} else {
if((state_val_22212 === (6))){
var inst_22207 = (state_22211[(2)]);
var state_22211__$1 = state_22211;
var statearr_22218_23150 = state_22211__$1;
(statearr_22218_23150[(2)] = inst_22207);

(statearr_22218_23150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22212 === (3))){
var inst_22209 = (state_22211[(2)]);
var state_22211__$1 = state_22211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22211__$1,inst_22209);
} else {
if((state_val_22212 === (2))){
var inst_22181 = (state_22211[(10)]);
var inst_22183 = cljs.core.count(inst_22181);
var inst_22184 = (inst_22183 > (0));
var state_22211__$1 = state_22211;
if(cljs.core.truth_(inst_22184)){
var statearr_22220_23151 = state_22211__$1;
(statearr_22220_23151[(1)] = (4));

} else {
var statearr_22221_23152 = state_22211__$1;
(statearr_22221_23152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22212 === (11))){
var inst_22181 = (state_22211[(10)]);
var inst_22200 = (state_22211[(2)]);
var tmp22219 = inst_22181;
var inst_22181__$1 = tmp22219;
var state_22211__$1 = (function (){var statearr_22222 = state_22211;
(statearr_22222[(10)] = inst_22181__$1);

(statearr_22222[(11)] = inst_22200);

return statearr_22222;
})();
var statearr_22223_23153 = state_22211__$1;
(statearr_22223_23153[(2)] = null);

(statearr_22223_23153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22212 === (9))){
var inst_22191 = (state_22211[(8)]);
var state_22211__$1 = state_22211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22211__$1,(11),out,inst_22191);
} else {
if((state_val_22212 === (5))){
var inst_22205 = cljs.core.async.close_BANG_(out);
var state_22211__$1 = state_22211;
var statearr_22224_23154 = state_22211__$1;
(statearr_22224_23154[(2)] = inst_22205);

(statearr_22224_23154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22212 === (10))){
var inst_22203 = (state_22211[(2)]);
var state_22211__$1 = state_22211;
var statearr_22225_23156 = state_22211__$1;
(statearr_22225_23156[(2)] = inst_22203);

(statearr_22225_23156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22212 === (8))){
var inst_22190 = (state_22211[(7)]);
var inst_22181 = (state_22211[(10)]);
var inst_22191 = (state_22211[(8)]);
var inst_22192 = (state_22211[(9)]);
var inst_22195 = (function (){var cs = inst_22181;
var vec__22186 = inst_22190;
var v = inst_22191;
var c = inst_22192;
return (function (p1__22177_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22177_SHARP_);
});
})();
var inst_22196 = cljs.core.filterv(inst_22195,inst_22181);
var inst_22181__$1 = inst_22196;
var state_22211__$1 = (function (){var statearr_22226 = state_22211;
(statearr_22226[(10)] = inst_22181__$1);

return statearr_22226;
})();
var statearr_22227_23160 = state_22211__$1;
(statearr_22227_23160[(2)] = null);

(statearr_22227_23160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_22228 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22228[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_22228[(1)] = (1));

return statearr_22228;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_22211){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_22211);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e22229){var ex__21022__auto__ = e22229;
var statearr_22230_23161 = state_22211;
(statearr_22230_23161[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_22211[(4)]))){
var statearr_22231_23162 = state_22211;
(statearr_22231_23162[(1)] = cljs.core.first((state_22211[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23163 = state_22211;
state_22211 = G__23163;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_22211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_22211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_22232 = f__21075__auto__();
(statearr_22232[(6)] = c__21074__auto___23146);

return statearr_22232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22234 = arguments.length;
switch (G__22234) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21074__auto___23165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_22258){
var state_val_22259 = (state_22258[(1)]);
if((state_val_22259 === (7))){
var inst_22240 = (state_22258[(7)]);
var inst_22240__$1 = (state_22258[(2)]);
var inst_22241 = (inst_22240__$1 == null);
var inst_22242 = cljs.core.not(inst_22241);
var state_22258__$1 = (function (){var statearr_22260 = state_22258;
(statearr_22260[(7)] = inst_22240__$1);

return statearr_22260;
})();
if(inst_22242){
var statearr_22261_23166 = state_22258__$1;
(statearr_22261_23166[(1)] = (8));

} else {
var statearr_22262_23167 = state_22258__$1;
(statearr_22262_23167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (1))){
var inst_22235 = (0);
var state_22258__$1 = (function (){var statearr_22263 = state_22258;
(statearr_22263[(8)] = inst_22235);

return statearr_22263;
})();
var statearr_22264_23168 = state_22258__$1;
(statearr_22264_23168[(2)] = null);

(statearr_22264_23168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (4))){
var state_22258__$1 = state_22258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22258__$1,(7),ch);
} else {
if((state_val_22259 === (6))){
var inst_22253 = (state_22258[(2)]);
var state_22258__$1 = state_22258;
var statearr_22265_23170 = state_22258__$1;
(statearr_22265_23170[(2)] = inst_22253);

(statearr_22265_23170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (3))){
var inst_22255 = (state_22258[(2)]);
var inst_22256 = cljs.core.async.close_BANG_(out);
var state_22258__$1 = (function (){var statearr_22266 = state_22258;
(statearr_22266[(9)] = inst_22255);

return statearr_22266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22258__$1,inst_22256);
} else {
if((state_val_22259 === (2))){
var inst_22235 = (state_22258[(8)]);
var inst_22237 = (inst_22235 < n);
var state_22258__$1 = state_22258;
if(cljs.core.truth_(inst_22237)){
var statearr_22267_23171 = state_22258__$1;
(statearr_22267_23171[(1)] = (4));

} else {
var statearr_22268_23172 = state_22258__$1;
(statearr_22268_23172[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (11))){
var inst_22235 = (state_22258[(8)]);
var inst_22245 = (state_22258[(2)]);
var inst_22246 = (inst_22235 + (1));
var inst_22235__$1 = inst_22246;
var state_22258__$1 = (function (){var statearr_22269 = state_22258;
(statearr_22269[(10)] = inst_22245);

(statearr_22269[(8)] = inst_22235__$1);

return statearr_22269;
})();
var statearr_22270_23173 = state_22258__$1;
(statearr_22270_23173[(2)] = null);

(statearr_22270_23173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (9))){
var state_22258__$1 = state_22258;
var statearr_22271_23174 = state_22258__$1;
(statearr_22271_23174[(2)] = null);

(statearr_22271_23174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (5))){
var state_22258__$1 = state_22258;
var statearr_22272_23175 = state_22258__$1;
(statearr_22272_23175[(2)] = null);

(statearr_22272_23175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (10))){
var inst_22250 = (state_22258[(2)]);
var state_22258__$1 = state_22258;
var statearr_22273_23176 = state_22258__$1;
(statearr_22273_23176[(2)] = inst_22250);

(statearr_22273_23176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (8))){
var inst_22240 = (state_22258[(7)]);
var state_22258__$1 = state_22258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22258__$1,(11),out,inst_22240);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_22274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22274[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_22274[(1)] = (1));

return statearr_22274;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_22258){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_22258);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e22275){var ex__21022__auto__ = e22275;
var statearr_22276_23177 = state_22258;
(statearr_22276_23177[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_22258[(4)]))){
var statearr_22277_23178 = state_22258;
(statearr_22277_23178[(1)] = cljs.core.first((state_22258[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23179 = state_22258;
state_22258 = G__23179;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_22258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_22258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_22278 = f__21075__auto__();
(statearr_22278[(6)] = c__21074__auto___23165);

return statearr_22278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22280 = (function (f,ch,meta22281){
this.f = f;
this.ch = ch;
this.meta22281 = meta22281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22282,meta22281__$1){
var self__ = this;
var _22282__$1 = this;
return (new cljs.core.async.t_cljs$core$async22280(self__.f,self__.ch,meta22281__$1));
}));

(cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22282){
var self__ = this;
var _22282__$1 = this;
return self__.meta22281;
}));

(cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22283 = (function (f,ch,meta22281,_,fn1,meta22284){
this.f = f;
this.ch = ch;
this.meta22281 = meta22281;
this._ = _;
this.fn1 = fn1;
this.meta22284 = meta22284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22285,meta22284__$1){
var self__ = this;
var _22285__$1 = this;
return (new cljs.core.async.t_cljs$core$async22283(self__.f,self__.ch,self__.meta22281,self__._,self__.fn1,meta22284__$1));
}));

(cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22285){
var self__ = this;
var _22285__$1 = this;
return self__.meta22284;
}));

(cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__22279_SHARP_){
var G__22286 = (((p1__22279_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22279_SHARP_) : self__.f.call(null,p1__22279_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22286) : f1.call(null,G__22286));
});
}));

(cljs.core.async.t_cljs$core$async22283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22281","meta22281",764640351,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22280","cljs.core.async/t_cljs$core$async22280",-819336129,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22284","meta22284",-429482457,null)], null);
}));

(cljs.core.async.t_cljs$core$async22283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22283");

(cljs.core.async.t_cljs$core$async22283.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22283.
 */
cljs.core.async.__GT_t_cljs$core$async22283 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22283(f__$1,ch__$1,meta22281__$1,___$2,fn1__$1,meta22284){
return (new cljs.core.async.t_cljs$core$async22283(f__$1,ch__$1,meta22281__$1,___$2,fn1__$1,meta22284));
});

}

return (new cljs.core.async.t_cljs$core$async22283(self__.f,self__.ch,self__.meta22281,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22287 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22287) : self__.f.call(null,G__22287));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async22280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22281","meta22281",764640351,null)], null);
}));

(cljs.core.async.t_cljs$core$async22280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22280");

(cljs.core.async.t_cljs$core$async22280.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22280.
 */
cljs.core.async.__GT_t_cljs$core$async22280 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22280(f__$1,ch__$1,meta22281){
return (new cljs.core.async.t_cljs$core$async22280(f__$1,ch__$1,meta22281));
});

}

return (new cljs.core.async.t_cljs$core$async22280(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22288 = (function (f,ch,meta22289){
this.f = f;
this.ch = ch;
this.meta22289 = meta22289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22290,meta22289__$1){
var self__ = this;
var _22290__$1 = this;
return (new cljs.core.async.t_cljs$core$async22288(self__.f,self__.ch,meta22289__$1));
}));

(cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22290){
var self__ = this;
var _22290__$1 = this;
return self__.meta22289;
}));

(cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async22288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22289","meta22289",1456143176,null)], null);
}));

(cljs.core.async.t_cljs$core$async22288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22288");

(cljs.core.async.t_cljs$core$async22288.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22288.
 */
cljs.core.async.__GT_t_cljs$core$async22288 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22288(f__$1,ch__$1,meta22289){
return (new cljs.core.async.t_cljs$core$async22288(f__$1,ch__$1,meta22289));
});

}

return (new cljs.core.async.t_cljs$core$async22288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22291 = (function (p,ch,meta22292){
this.p = p;
this.ch = ch;
this.meta22292 = meta22292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22293,meta22292__$1){
var self__ = this;
var _22293__$1 = this;
return (new cljs.core.async.t_cljs$core$async22291(self__.p,self__.ch,meta22292__$1));
}));

(cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22293){
var self__ = this;
var _22293__$1 = this;
return self__.meta22292;
}));

(cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async22291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22292","meta22292",-1619602538,null)], null);
}));

(cljs.core.async.t_cljs$core$async22291.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22291");

(cljs.core.async.t_cljs$core$async22291.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22291");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22291.
 */
cljs.core.async.__GT_t_cljs$core$async22291 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22291(p__$1,ch__$1,meta22292){
return (new cljs.core.async.t_cljs$core$async22291(p__$1,ch__$1,meta22292));
});

}

return (new cljs.core.async.t_cljs$core$async22291(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__22295 = arguments.length;
switch (G__22295) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21074__auto___23191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_22316){
var state_val_22317 = (state_22316[(1)]);
if((state_val_22317 === (7))){
var inst_22312 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
var statearr_22318_23192 = state_22316__$1;
(statearr_22318_23192[(2)] = inst_22312);

(statearr_22318_23192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (1))){
var state_22316__$1 = state_22316;
var statearr_22319_23193 = state_22316__$1;
(statearr_22319_23193[(2)] = null);

(statearr_22319_23193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (4))){
var inst_22298 = (state_22316[(7)]);
var inst_22298__$1 = (state_22316[(2)]);
var inst_22299 = (inst_22298__$1 == null);
var state_22316__$1 = (function (){var statearr_22320 = state_22316;
(statearr_22320[(7)] = inst_22298__$1);

return statearr_22320;
})();
if(cljs.core.truth_(inst_22299)){
var statearr_22321_23194 = state_22316__$1;
(statearr_22321_23194[(1)] = (5));

} else {
var statearr_22322_23195 = state_22316__$1;
(statearr_22322_23195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (6))){
var inst_22298 = (state_22316[(7)]);
var inst_22303 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22298) : p.call(null,inst_22298));
var state_22316__$1 = state_22316;
if(cljs.core.truth_(inst_22303)){
var statearr_22323_23196 = state_22316__$1;
(statearr_22323_23196[(1)] = (8));

} else {
var statearr_22324_23197 = state_22316__$1;
(statearr_22324_23197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (3))){
var inst_22314 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22316__$1,inst_22314);
} else {
if((state_val_22317 === (2))){
var state_22316__$1 = state_22316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22316__$1,(4),ch);
} else {
if((state_val_22317 === (11))){
var inst_22306 = (state_22316[(2)]);
var state_22316__$1 = state_22316;
var statearr_22325_23198 = state_22316__$1;
(statearr_22325_23198[(2)] = inst_22306);

(statearr_22325_23198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (9))){
var state_22316__$1 = state_22316;
var statearr_22326_23199 = state_22316__$1;
(statearr_22326_23199[(2)] = null);

(statearr_22326_23199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (5))){
var inst_22301 = cljs.core.async.close_BANG_(out);
var state_22316__$1 = state_22316;
var statearr_22327_23200 = state_22316__$1;
(statearr_22327_23200[(2)] = inst_22301);

(statearr_22327_23200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (10))){
var inst_22309 = (state_22316[(2)]);
var state_22316__$1 = (function (){var statearr_22328 = state_22316;
(statearr_22328[(8)] = inst_22309);

return statearr_22328;
})();
var statearr_22329_23201 = state_22316__$1;
(statearr_22329_23201[(2)] = null);

(statearr_22329_23201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22317 === (8))){
var inst_22298 = (state_22316[(7)]);
var state_22316__$1 = state_22316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22316__$1,(11),out,inst_22298);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_22330 = [null,null,null,null,null,null,null,null,null];
(statearr_22330[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_22330[(1)] = (1));

return statearr_22330;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_22316){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_22316);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e22331){var ex__21022__auto__ = e22331;
var statearr_22332_23202 = state_22316;
(statearr_22332_23202[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_22316[(4)]))){
var statearr_22333_23203 = state_22316;
(statearr_22333_23203[(1)] = cljs.core.first((state_22316[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23204 = state_22316;
state_22316 = G__23204;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_22316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_22316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_22334 = f__21075__auto__();
(statearr_22334[(6)] = c__21074__auto___23191);

return statearr_22334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22336 = arguments.length;
switch (G__22336) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21074__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_22398){
var state_val_22399 = (state_22398[(1)]);
if((state_val_22399 === (7))){
var inst_22394 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22400_23216 = state_22398__$1;
(statearr_22400_23216[(2)] = inst_22394);

(statearr_22400_23216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (20))){
var inst_22364 = (state_22398[(7)]);
var inst_22375 = (state_22398[(2)]);
var inst_22376 = cljs.core.next(inst_22364);
var inst_22350 = inst_22376;
var inst_22351 = null;
var inst_22352 = (0);
var inst_22353 = (0);
var state_22398__$1 = (function (){var statearr_22401 = state_22398;
(statearr_22401[(8)] = inst_22351);

(statearr_22401[(9)] = inst_22350);

(statearr_22401[(10)] = inst_22375);

(statearr_22401[(11)] = inst_22353);

(statearr_22401[(12)] = inst_22352);

return statearr_22401;
})();
var statearr_22402_23217 = state_22398__$1;
(statearr_22402_23217[(2)] = null);

(statearr_22402_23217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (1))){
var state_22398__$1 = state_22398;
var statearr_22403_23221 = state_22398__$1;
(statearr_22403_23221[(2)] = null);

(statearr_22403_23221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (4))){
var inst_22339 = (state_22398[(13)]);
var inst_22339__$1 = (state_22398[(2)]);
var inst_22340 = (inst_22339__$1 == null);
var state_22398__$1 = (function (){var statearr_22404 = state_22398;
(statearr_22404[(13)] = inst_22339__$1);

return statearr_22404;
})();
if(cljs.core.truth_(inst_22340)){
var statearr_22405_23222 = state_22398__$1;
(statearr_22405_23222[(1)] = (5));

} else {
var statearr_22406_23223 = state_22398__$1;
(statearr_22406_23223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (15))){
var state_22398__$1 = state_22398;
var statearr_22410_23227 = state_22398__$1;
(statearr_22410_23227[(2)] = null);

(statearr_22410_23227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (21))){
var state_22398__$1 = state_22398;
var statearr_22411_23228 = state_22398__$1;
(statearr_22411_23228[(2)] = null);

(statearr_22411_23228[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (13))){
var inst_22351 = (state_22398[(8)]);
var inst_22350 = (state_22398[(9)]);
var inst_22353 = (state_22398[(11)]);
var inst_22352 = (state_22398[(12)]);
var inst_22360 = (state_22398[(2)]);
var inst_22361 = (inst_22353 + (1));
var tmp22407 = inst_22351;
var tmp22408 = inst_22350;
var tmp22409 = inst_22352;
var inst_22350__$1 = tmp22408;
var inst_22351__$1 = tmp22407;
var inst_22352__$1 = tmp22409;
var inst_22353__$1 = inst_22361;
var state_22398__$1 = (function (){var statearr_22412 = state_22398;
(statearr_22412[(8)] = inst_22351__$1);

(statearr_22412[(9)] = inst_22350__$1);

(statearr_22412[(14)] = inst_22360);

(statearr_22412[(11)] = inst_22353__$1);

(statearr_22412[(12)] = inst_22352__$1);

return statearr_22412;
})();
var statearr_22413_23232 = state_22398__$1;
(statearr_22413_23232[(2)] = null);

(statearr_22413_23232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (22))){
var state_22398__$1 = state_22398;
var statearr_22414_23233 = state_22398__$1;
(statearr_22414_23233[(2)] = null);

(statearr_22414_23233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (6))){
var inst_22339 = (state_22398[(13)]);
var inst_22348 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22339) : f.call(null,inst_22339));
var inst_22349 = cljs.core.seq(inst_22348);
var inst_22350 = inst_22349;
var inst_22351 = null;
var inst_22352 = (0);
var inst_22353 = (0);
var state_22398__$1 = (function (){var statearr_22415 = state_22398;
(statearr_22415[(8)] = inst_22351);

(statearr_22415[(9)] = inst_22350);

(statearr_22415[(11)] = inst_22353);

(statearr_22415[(12)] = inst_22352);

return statearr_22415;
})();
var statearr_22416_23234 = state_22398__$1;
(statearr_22416_23234[(2)] = null);

(statearr_22416_23234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (17))){
var inst_22364 = (state_22398[(7)]);
var inst_22368 = cljs.core.chunk_first(inst_22364);
var inst_22369 = cljs.core.chunk_rest(inst_22364);
var inst_22370 = cljs.core.count(inst_22368);
var inst_22350 = inst_22369;
var inst_22351 = inst_22368;
var inst_22352 = inst_22370;
var inst_22353 = (0);
var state_22398__$1 = (function (){var statearr_22417 = state_22398;
(statearr_22417[(8)] = inst_22351);

(statearr_22417[(9)] = inst_22350);

(statearr_22417[(11)] = inst_22353);

(statearr_22417[(12)] = inst_22352);

return statearr_22417;
})();
var statearr_22418_23236 = state_22398__$1;
(statearr_22418_23236[(2)] = null);

(statearr_22418_23236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (3))){
var inst_22396 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22398__$1,inst_22396);
} else {
if((state_val_22399 === (12))){
var inst_22384 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22419_23237 = state_22398__$1;
(statearr_22419_23237[(2)] = inst_22384);

(statearr_22419_23237[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (2))){
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22398__$1,(4),in$);
} else {
if((state_val_22399 === (23))){
var inst_22392 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22420_23241 = state_22398__$1;
(statearr_22420_23241[(2)] = inst_22392);

(statearr_22420_23241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (19))){
var inst_22379 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22421_23248 = state_22398__$1;
(statearr_22421_23248[(2)] = inst_22379);

(statearr_22421_23248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (11))){
var inst_22350 = (state_22398[(9)]);
var inst_22364 = (state_22398[(7)]);
var inst_22364__$1 = cljs.core.seq(inst_22350);
var state_22398__$1 = (function (){var statearr_22422 = state_22398;
(statearr_22422[(7)] = inst_22364__$1);

return statearr_22422;
})();
if(inst_22364__$1){
var statearr_22423_23255 = state_22398__$1;
(statearr_22423_23255[(1)] = (14));

} else {
var statearr_22424_23256 = state_22398__$1;
(statearr_22424_23256[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (9))){
var inst_22386 = (state_22398[(2)]);
var inst_22387 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22398__$1 = (function (){var statearr_22425 = state_22398;
(statearr_22425[(15)] = inst_22386);

return statearr_22425;
})();
if(cljs.core.truth_(inst_22387)){
var statearr_22426_23257 = state_22398__$1;
(statearr_22426_23257[(1)] = (21));

} else {
var statearr_22427_23258 = state_22398__$1;
(statearr_22427_23258[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (5))){
var inst_22342 = cljs.core.async.close_BANG_(out);
var state_22398__$1 = state_22398;
var statearr_22428_23259 = state_22398__$1;
(statearr_22428_23259[(2)] = inst_22342);

(statearr_22428_23259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (14))){
var inst_22364 = (state_22398[(7)]);
var inst_22366 = cljs.core.chunked_seq_QMARK_(inst_22364);
var state_22398__$1 = state_22398;
if(inst_22366){
var statearr_22429_23260 = state_22398__$1;
(statearr_22429_23260[(1)] = (17));

} else {
var statearr_22430_23261 = state_22398__$1;
(statearr_22430_23261[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (16))){
var inst_22382 = (state_22398[(2)]);
var state_22398__$1 = state_22398;
var statearr_22431_23262 = state_22398__$1;
(statearr_22431_23262[(2)] = inst_22382);

(statearr_22431_23262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22399 === (10))){
var inst_22351 = (state_22398[(8)]);
var inst_22353 = (state_22398[(11)]);
var inst_22358 = cljs.core._nth(inst_22351,inst_22353);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22398__$1,(13),out,inst_22358);
} else {
if((state_val_22399 === (18))){
var inst_22364 = (state_22398[(7)]);
var inst_22373 = cljs.core.first(inst_22364);
var state_22398__$1 = state_22398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22398__$1,(20),out,inst_22373);
} else {
if((state_val_22399 === (8))){
var inst_22353 = (state_22398[(11)]);
var inst_22352 = (state_22398[(12)]);
var inst_22355 = (inst_22353 < inst_22352);
var inst_22356 = inst_22355;
var state_22398__$1 = state_22398;
if(cljs.core.truth_(inst_22356)){
var statearr_22432_23263 = state_22398__$1;
(statearr_22432_23263[(1)] = (10));

} else {
var statearr_22433_23264 = state_22398__$1;
(statearr_22433_23264[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21019__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21019__auto____0 = (function (){
var statearr_22434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22434[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21019__auto__);

(statearr_22434[(1)] = (1));

return statearr_22434;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21019__auto____1 = (function (state_22398){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_22398);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e22435){var ex__21022__auto__ = e22435;
var statearr_22436_23265 = state_22398;
(statearr_22436_23265[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_22398[(4)]))){
var statearr_22437_23266 = state_22398;
(statearr_22437_23266[(1)] = cljs.core.first((state_22398[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23267 = state_22398;
state_22398 = G__23267;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21019__auto__ = function(state_22398){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21019__auto____1.call(this,state_22398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21019__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21019__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_22438 = f__21075__auto__();
(statearr_22438[(6)] = c__21074__auto__);

return statearr_22438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));

return c__21074__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22440 = arguments.length;
switch (G__22440) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__22442 = arguments.length;
switch (G__22442) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__22444 = arguments.length;
switch (G__22444) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21074__auto___23277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_22468){
var state_val_22469 = (state_22468[(1)]);
if((state_val_22469 === (7))){
var inst_22463 = (state_22468[(2)]);
var state_22468__$1 = state_22468;
var statearr_22470_23278 = state_22468__$1;
(statearr_22470_23278[(2)] = inst_22463);

(statearr_22470_23278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (1))){
var inst_22445 = null;
var state_22468__$1 = (function (){var statearr_22471 = state_22468;
(statearr_22471[(7)] = inst_22445);

return statearr_22471;
})();
var statearr_22472_23279 = state_22468__$1;
(statearr_22472_23279[(2)] = null);

(statearr_22472_23279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (4))){
var inst_22448 = (state_22468[(8)]);
var inst_22448__$1 = (state_22468[(2)]);
var inst_22449 = (inst_22448__$1 == null);
var inst_22450 = cljs.core.not(inst_22449);
var state_22468__$1 = (function (){var statearr_22473 = state_22468;
(statearr_22473[(8)] = inst_22448__$1);

return statearr_22473;
})();
if(inst_22450){
var statearr_22474_23286 = state_22468__$1;
(statearr_22474_23286[(1)] = (5));

} else {
var statearr_22475_23287 = state_22468__$1;
(statearr_22475_23287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (6))){
var state_22468__$1 = state_22468;
var statearr_22476_23288 = state_22468__$1;
(statearr_22476_23288[(2)] = null);

(statearr_22476_23288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (3))){
var inst_22465 = (state_22468[(2)]);
var inst_22466 = cljs.core.async.close_BANG_(out);
var state_22468__$1 = (function (){var statearr_22477 = state_22468;
(statearr_22477[(9)] = inst_22465);

return statearr_22477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22468__$1,inst_22466);
} else {
if((state_val_22469 === (2))){
var state_22468__$1 = state_22468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22468__$1,(4),ch);
} else {
if((state_val_22469 === (11))){
var inst_22448 = (state_22468[(8)]);
var inst_22457 = (state_22468[(2)]);
var inst_22445 = inst_22448;
var state_22468__$1 = (function (){var statearr_22478 = state_22468;
(statearr_22478[(7)] = inst_22445);

(statearr_22478[(10)] = inst_22457);

return statearr_22478;
})();
var statearr_22479_23289 = state_22468__$1;
(statearr_22479_23289[(2)] = null);

(statearr_22479_23289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (9))){
var inst_22448 = (state_22468[(8)]);
var state_22468__$1 = state_22468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22468__$1,(11),out,inst_22448);
} else {
if((state_val_22469 === (5))){
var inst_22448 = (state_22468[(8)]);
var inst_22445 = (state_22468[(7)]);
var inst_22452 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22448,inst_22445);
var state_22468__$1 = state_22468;
if(inst_22452){
var statearr_22481_23290 = state_22468__$1;
(statearr_22481_23290[(1)] = (8));

} else {
var statearr_22482_23291 = state_22468__$1;
(statearr_22482_23291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (10))){
var inst_22460 = (state_22468[(2)]);
var state_22468__$1 = state_22468;
var statearr_22483_23292 = state_22468__$1;
(statearr_22483_23292[(2)] = inst_22460);

(statearr_22483_23292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (8))){
var inst_22445 = (state_22468[(7)]);
var tmp22480 = inst_22445;
var inst_22445__$1 = tmp22480;
var state_22468__$1 = (function (){var statearr_22484 = state_22468;
(statearr_22484[(7)] = inst_22445__$1);

return statearr_22484;
})();
var statearr_22485_23293 = state_22468__$1;
(statearr_22485_23293[(2)] = null);

(statearr_22485_23293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_22486 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22486[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_22486[(1)] = (1));

return statearr_22486;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_22468){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_22468);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e22487){var ex__21022__auto__ = e22487;
var statearr_22488_23294 = state_22468;
(statearr_22488_23294[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_22468[(4)]))){
var statearr_22489_23295 = state_22468;
(statearr_22489_23295[(1)] = cljs.core.first((state_22468[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23302 = state_22468;
state_22468 = G__23302;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_22468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_22468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_22490 = f__21075__auto__();
(statearr_22490[(6)] = c__21074__auto___23277);

return statearr_22490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22492 = arguments.length;
switch (G__22492) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21074__auto___23304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_22530){
var state_val_22531 = (state_22530[(1)]);
if((state_val_22531 === (7))){
var inst_22526 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
var statearr_22532_23305 = state_22530__$1;
(statearr_22532_23305[(2)] = inst_22526);

(statearr_22532_23305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (1))){
var inst_22493 = (new Array(n));
var inst_22494 = inst_22493;
var inst_22495 = (0);
var state_22530__$1 = (function (){var statearr_22533 = state_22530;
(statearr_22533[(7)] = inst_22495);

(statearr_22533[(8)] = inst_22494);

return statearr_22533;
})();
var statearr_22534_23306 = state_22530__$1;
(statearr_22534_23306[(2)] = null);

(statearr_22534_23306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (4))){
var inst_22498 = (state_22530[(9)]);
var inst_22498__$1 = (state_22530[(2)]);
var inst_22499 = (inst_22498__$1 == null);
var inst_22500 = cljs.core.not(inst_22499);
var state_22530__$1 = (function (){var statearr_22535 = state_22530;
(statearr_22535[(9)] = inst_22498__$1);

return statearr_22535;
})();
if(inst_22500){
var statearr_22536_23307 = state_22530__$1;
(statearr_22536_23307[(1)] = (5));

} else {
var statearr_22537_23308 = state_22530__$1;
(statearr_22537_23308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (15))){
var inst_22520 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
var statearr_22538_23309 = state_22530__$1;
(statearr_22538_23309[(2)] = inst_22520);

(statearr_22538_23309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (13))){
var state_22530__$1 = state_22530;
var statearr_22539_23310 = state_22530__$1;
(statearr_22539_23310[(2)] = null);

(statearr_22539_23310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (6))){
var inst_22495 = (state_22530[(7)]);
var inst_22516 = (inst_22495 > (0));
var state_22530__$1 = state_22530;
if(cljs.core.truth_(inst_22516)){
var statearr_22540_23311 = state_22530__$1;
(statearr_22540_23311[(1)] = (12));

} else {
var statearr_22541_23312 = state_22530__$1;
(statearr_22541_23312[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (3))){
var inst_22528 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22530__$1,inst_22528);
} else {
if((state_val_22531 === (12))){
var inst_22494 = (state_22530[(8)]);
var inst_22518 = cljs.core.vec(inst_22494);
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22530__$1,(15),out,inst_22518);
} else {
if((state_val_22531 === (2))){
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22530__$1,(4),ch);
} else {
if((state_val_22531 === (11))){
var inst_22510 = (state_22530[(2)]);
var inst_22511 = (new Array(n));
var inst_22494 = inst_22511;
var inst_22495 = (0);
var state_22530__$1 = (function (){var statearr_22542 = state_22530;
(statearr_22542[(10)] = inst_22510);

(statearr_22542[(7)] = inst_22495);

(statearr_22542[(8)] = inst_22494);

return statearr_22542;
})();
var statearr_22543_23313 = state_22530__$1;
(statearr_22543_23313[(2)] = null);

(statearr_22543_23313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (9))){
var inst_22494 = (state_22530[(8)]);
var inst_22508 = cljs.core.vec(inst_22494);
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22530__$1,(11),out,inst_22508);
} else {
if((state_val_22531 === (5))){
var inst_22498 = (state_22530[(9)]);
var inst_22495 = (state_22530[(7)]);
var inst_22494 = (state_22530[(8)]);
var inst_22503 = (state_22530[(11)]);
var inst_22502 = (inst_22494[inst_22495] = inst_22498);
var inst_22503__$1 = (inst_22495 + (1));
var inst_22504 = (inst_22503__$1 < n);
var state_22530__$1 = (function (){var statearr_22544 = state_22530;
(statearr_22544[(12)] = inst_22502);

(statearr_22544[(11)] = inst_22503__$1);

return statearr_22544;
})();
if(cljs.core.truth_(inst_22504)){
var statearr_22545_23316 = state_22530__$1;
(statearr_22545_23316[(1)] = (8));

} else {
var statearr_22546_23317 = state_22530__$1;
(statearr_22546_23317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (14))){
var inst_22523 = (state_22530[(2)]);
var inst_22524 = cljs.core.async.close_BANG_(out);
var state_22530__$1 = (function (){var statearr_22548 = state_22530;
(statearr_22548[(13)] = inst_22523);

return statearr_22548;
})();
var statearr_22549_23318 = state_22530__$1;
(statearr_22549_23318[(2)] = inst_22524);

(statearr_22549_23318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (10))){
var inst_22514 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
var statearr_22550_23319 = state_22530__$1;
(statearr_22550_23319[(2)] = inst_22514);

(statearr_22550_23319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (8))){
var inst_22494 = (state_22530[(8)]);
var inst_22503 = (state_22530[(11)]);
var tmp22547 = inst_22494;
var inst_22494__$1 = tmp22547;
var inst_22495 = inst_22503;
var state_22530__$1 = (function (){var statearr_22551 = state_22530;
(statearr_22551[(7)] = inst_22495);

(statearr_22551[(8)] = inst_22494__$1);

return statearr_22551;
})();
var statearr_22552_23320 = state_22530__$1;
(statearr_22552_23320[(2)] = null);

(statearr_22552_23320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_22553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22553[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_22553[(1)] = (1));

return statearr_22553;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_22530){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_22530);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e22554){var ex__21022__auto__ = e22554;
var statearr_22555_23322 = state_22530;
(statearr_22555_23322[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_22530[(4)]))){
var statearr_22556_23324 = state_22530;
(statearr_22556_23324[(1)] = cljs.core.first((state_22530[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23325 = state_22530;
state_22530 = G__23325;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_22530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_22530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_22557 = f__21075__auto__();
(statearr_22557[(6)] = c__21074__auto___23304);

return statearr_22557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22559 = arguments.length;
switch (G__22559) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21074__auto___23327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21075__auto__ = (function (){var switch__21018__auto__ = (function (state_22604){
var state_val_22605 = (state_22604[(1)]);
if((state_val_22605 === (7))){
var inst_22600 = (state_22604[(2)]);
var state_22604__$1 = state_22604;
var statearr_22606_23328 = state_22604__$1;
(statearr_22606_23328[(2)] = inst_22600);

(statearr_22606_23328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (1))){
var inst_22560 = [];
var inst_22561 = inst_22560;
var inst_22562 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22604__$1 = (function (){var statearr_22607 = state_22604;
(statearr_22607[(7)] = inst_22561);

(statearr_22607[(8)] = inst_22562);

return statearr_22607;
})();
var statearr_22608_23329 = state_22604__$1;
(statearr_22608_23329[(2)] = null);

(statearr_22608_23329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (4))){
var inst_22565 = (state_22604[(9)]);
var inst_22565__$1 = (state_22604[(2)]);
var inst_22566 = (inst_22565__$1 == null);
var inst_22567 = cljs.core.not(inst_22566);
var state_22604__$1 = (function (){var statearr_22609 = state_22604;
(statearr_22609[(9)] = inst_22565__$1);

return statearr_22609;
})();
if(inst_22567){
var statearr_22610_23330 = state_22604__$1;
(statearr_22610_23330[(1)] = (5));

} else {
var statearr_22611_23331 = state_22604__$1;
(statearr_22611_23331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (15))){
var inst_22561 = (state_22604[(7)]);
var inst_22592 = cljs.core.vec(inst_22561);
var state_22604__$1 = state_22604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22604__$1,(18),out,inst_22592);
} else {
if((state_val_22605 === (13))){
var inst_22587 = (state_22604[(2)]);
var state_22604__$1 = state_22604;
var statearr_22612_23334 = state_22604__$1;
(statearr_22612_23334[(2)] = inst_22587);

(statearr_22612_23334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (6))){
var inst_22561 = (state_22604[(7)]);
var inst_22589 = inst_22561.length;
var inst_22590 = (inst_22589 > (0));
var state_22604__$1 = state_22604;
if(cljs.core.truth_(inst_22590)){
var statearr_22613_23339 = state_22604__$1;
(statearr_22613_23339[(1)] = (15));

} else {
var statearr_22614_23340 = state_22604__$1;
(statearr_22614_23340[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (17))){
var inst_22597 = (state_22604[(2)]);
var inst_22598 = cljs.core.async.close_BANG_(out);
var state_22604__$1 = (function (){var statearr_22615 = state_22604;
(statearr_22615[(10)] = inst_22597);

return statearr_22615;
})();
var statearr_22616_23342 = state_22604__$1;
(statearr_22616_23342[(2)] = inst_22598);

(statearr_22616_23342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (3))){
var inst_22602 = (state_22604[(2)]);
var state_22604__$1 = state_22604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22604__$1,inst_22602);
} else {
if((state_val_22605 === (12))){
var inst_22561 = (state_22604[(7)]);
var inst_22580 = cljs.core.vec(inst_22561);
var state_22604__$1 = state_22604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22604__$1,(14),out,inst_22580);
} else {
if((state_val_22605 === (2))){
var state_22604__$1 = state_22604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22604__$1,(4),ch);
} else {
if((state_val_22605 === (11))){
var inst_22565 = (state_22604[(9)]);
var inst_22561 = (state_22604[(7)]);
var inst_22569 = (state_22604[(11)]);
var inst_22577 = inst_22561.push(inst_22565);
var tmp22617 = inst_22561;
var inst_22561__$1 = tmp22617;
var inst_22562 = inst_22569;
var state_22604__$1 = (function (){var statearr_22618 = state_22604;
(statearr_22618[(12)] = inst_22577);

(statearr_22618[(7)] = inst_22561__$1);

(statearr_22618[(8)] = inst_22562);

return statearr_22618;
})();
var statearr_22619_23347 = state_22604__$1;
(statearr_22619_23347[(2)] = null);

(statearr_22619_23347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (9))){
var inst_22562 = (state_22604[(8)]);
var inst_22573 = cljs.core.keyword_identical_QMARK_(inst_22562,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_22604__$1 = state_22604;
var statearr_22620_23348 = state_22604__$1;
(statearr_22620_23348[(2)] = inst_22573);

(statearr_22620_23348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (5))){
var inst_22565 = (state_22604[(9)]);
var inst_22569 = (state_22604[(11)]);
var inst_22562 = (state_22604[(8)]);
var inst_22570 = (state_22604[(13)]);
var inst_22569__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22565) : f.call(null,inst_22565));
var inst_22570__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22569__$1,inst_22562);
var state_22604__$1 = (function (){var statearr_22621 = state_22604;
(statearr_22621[(11)] = inst_22569__$1);

(statearr_22621[(13)] = inst_22570__$1);

return statearr_22621;
})();
if(inst_22570__$1){
var statearr_22622_23350 = state_22604__$1;
(statearr_22622_23350[(1)] = (8));

} else {
var statearr_22623_23351 = state_22604__$1;
(statearr_22623_23351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (14))){
var inst_22565 = (state_22604[(9)]);
var inst_22569 = (state_22604[(11)]);
var inst_22582 = (state_22604[(2)]);
var inst_22583 = [];
var inst_22584 = inst_22583.push(inst_22565);
var inst_22561 = inst_22583;
var inst_22562 = inst_22569;
var state_22604__$1 = (function (){var statearr_22624 = state_22604;
(statearr_22624[(7)] = inst_22561);

(statearr_22624[(14)] = inst_22582);

(statearr_22624[(15)] = inst_22584);

(statearr_22624[(8)] = inst_22562);

return statearr_22624;
})();
var statearr_22625_23352 = state_22604__$1;
(statearr_22625_23352[(2)] = null);

(statearr_22625_23352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (16))){
var state_22604__$1 = state_22604;
var statearr_22626_23353 = state_22604__$1;
(statearr_22626_23353[(2)] = null);

(statearr_22626_23353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (10))){
var inst_22575 = (state_22604[(2)]);
var state_22604__$1 = state_22604;
if(cljs.core.truth_(inst_22575)){
var statearr_22627_23354 = state_22604__$1;
(statearr_22627_23354[(1)] = (11));

} else {
var statearr_22628_23355 = state_22604__$1;
(statearr_22628_23355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (18))){
var inst_22594 = (state_22604[(2)]);
var state_22604__$1 = state_22604;
var statearr_22629_23356 = state_22604__$1;
(statearr_22629_23356[(2)] = inst_22594);

(statearr_22629_23356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (8))){
var inst_22570 = (state_22604[(13)]);
var state_22604__$1 = state_22604;
var statearr_22630_23357 = state_22604__$1;
(statearr_22630_23357[(2)] = inst_22570);

(statearr_22630_23357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__21019__auto__ = null;
var cljs$core$async$state_machine__21019__auto____0 = (function (){
var statearr_22631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22631[(0)] = cljs$core$async$state_machine__21019__auto__);

(statearr_22631[(1)] = (1));

return statearr_22631;
});
var cljs$core$async$state_machine__21019__auto____1 = (function (state_22604){
while(true){
var ret_value__21020__auto__ = (function (){try{while(true){
var result__21021__auto__ = switch__21018__auto__(state_22604);
if(cljs.core.keyword_identical_QMARK_(result__21021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21021__auto__;
}
break;
}
}catch (e22632){var ex__21022__auto__ = e22632;
var statearr_22633_23358 = state_22604;
(statearr_22633_23358[(2)] = ex__21022__auto__);


if(cljs.core.seq((state_22604[(4)]))){
var statearr_22634_23359 = state_22604;
(statearr_22634_23359[(1)] = cljs.core.first((state_22604[(4)])));

} else {
throw ex__21022__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23361 = state_22604;
state_22604 = G__23361;
continue;
} else {
return ret_value__21020__auto__;
}
break;
}
});
cljs$core$async$state_machine__21019__auto__ = function(state_22604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21019__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21019__auto____1.call(this,state_22604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21019__auto____0;
cljs$core$async$state_machine__21019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21019__auto____1;
return cljs$core$async$state_machine__21019__auto__;
})()
})();
var state__21076__auto__ = (function (){var statearr_22635 = f__21075__auto__();
(statearr_22635[(6)] = c__21074__auto___23327);

return statearr_22635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21076__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
