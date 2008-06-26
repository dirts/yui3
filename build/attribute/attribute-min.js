YUI.add("attribute",function(B){var K=B.Object,L=".",F="Change",M="get",E="set",J="value",D="clone",P="readOnly",G="writeOnce",C="validator",I;function A(){B.Event.Target.call(this,{emitFacade:true});this._conf=this._conf||new B.State();}A.CLONE={NONE:0,DEEP:1,SHALLOW:2,IMMUTABLE:3};I=A.CLONE;function H(S,U,O,Q,V,W,T){S=S+F;this.publish(S,{queuable:false,defaultFn:this._defAttSet});var R={type:S,prevVal:U,newVal:O,attrName:Q,subAttrName:V};if(T){B.mix(R,T);}this.fire(R);}function N(Q,O){switch(O){case I.SHALLOW:Q=B.merge(Q);break;case I.DEEP:case I.IMMUTABLE:Q=B.clone(Q);break;}return Q;}A.prototype={addAtt:function(Q,O){var S,R=(J in O);if(R){S=O.value;delete O.value;}this._conf.add(Q,O);if(R){this.set(Q,S);}},remove:function(O){this._conf.remove(O);},get:function(R){var Q=this._conf,S,O,U,T;if(R.indexOf(L)!==-1){S=R.split(L);R=S.shift();}T=Q.get(R,J);O=Q.get(R,M);U=Q.get(R,D);T=(U)?N(T,U):T;T=(O)?O.call(this,T):T;T=(S)?this._getSubAttVal(S,T):T;return T;},set:function(Q,R,O){var W=this._conf,U=W.data,V,X,S,T=(!U.value||!(Q in U.value));if(Q.indexOf(L)!==-1){V=Q;X=Q.split(L);Q=X.shift();}if(X&&W.get(Q,D)===I.IMMUTABLE){return this;}if(!T){if(W.get(Q,G)){return this;}if(W.get(Q,P)){return this;}}if(!W.get(Q)){}S=this.get(Q);if(X){R=this._setSubAttVal(X,B.clone(S),R);if(R===undefined){return this;}}H.call(this,Q,S,R,Q,V,O);return this;},_defAttSet:function(U){var R=this._conf,Q=U.attrName,V=U.newVal,T,O=R.get(Q,C),S=R.get(Q,E);if(S){T=S.call(this,V);if(T!==undefined){V=T;}}if(!O||O.call(this,V)){R.add(Q,{value:V});}U.newVal=V;},_getSubAttVal:function(R,S){var Q=R.length,O;if(Q>0){for(O=0;S!==undefined&&O<Q;++O){S=S[R[O]];}}return S;},_setSubAttVal:function(S,U,R){var Q=S.length-1,O,T;if(Q>=0){T=U;for(O=0;T!==undefined&&O<Q;++O){T=T[S[O]];}if(T!==undefined){T[S[O]]=R;}else{U=undefined;}}return U;},setAtts:function(Q){for(var O in Q){if(K.owns(Q,O)){this.set(O,Q[O]);}}},getAtts:function(Q){var O={};if(Q){O=B.clone(Q);}else{B.each(this._conf.get(J),function(S,R){O[R]=S;});}return O;},_initAtts:function(O,S){if(O){var R,U,Q,T,V=O;Q=this._splitAttVals(S);for(R in V){if(K.owns(V,R)){U=B.merge(V[R]);T=this._initAttVal(R,U,Q);if(T!==undefined){U.value=T;}this.addAtt(R,U);}}}},_splitAttVals:function(S){var U={},T={},V,O,R;for(var Q in S){if(K.owns(S,Q)){if(Q.indexOf(L)!==-1){V=Q.split(L);O=V.shift();R=T[O]=T[O]||[];R[R.length]={path:V,value:S[Q]};}else{U[Q]=S[Q];}}}return{simple:U,complex:T};},_initAttVal:function(W,U,Z){var Y=(J in U),Q=U.value,O,R,T,S,a,X,V;if(!U[P]&&Z){O=Z.simple;if(O&&K.owns(O,W)){Y=true;Q=O[W];}R=Z.complex;if(R&&K.owns(R,W)){Y=true;V=R[W];for(T=0,S=V.length;T<S;++T){a=V[T].path;X=V[T].value;Q=this._setSubAttVal(a,Q,X);}}}return Q;}};B.mix(A,B.Event.Target,false,null,1);B.Attribute=A;},"@VERSION@",{requires:["event-target","state"]});YUI.add("state",function(B){var A=B.Lang;B.State=function(){this.data={};};B.State.prototype={add:function(C,D){B.each(D,function(F,E){if(!this.data[E]){this.data[E]={};}this.data[E][C]=F;},this);},remove:function(D,F){var E=this.data,C=function(G){if(E[G]&&(D in E[G])){delete E[G][D];}};if(A.isString(F)){C(F);}else{B.each(F||E,function(H,G){if(A.isString(G)){C(G);}else{C(H);}},this);}},get:function(C,D){var F=this.data;if(D){return F[D]&&F[D][C];}else{var E={};B.each(F,function(H,G){if(C in F[G]){E[G]=H[C];}},this);return E;}},list:function(C,F){var E={},D=this.data,G=!A.isUndefined(F);B.each(this,function(I,H){if(C&&H!==C){return ;}else{if(G&&I!==F){return ;}}E[H]=I;},this);return E;}};},"3.0.0");