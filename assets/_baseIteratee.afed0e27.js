import{aO as M,aR as _,a2 as l,aS as p,aT as E,aU as y,aV as C,aW as L,aL as m}from"./index.f13df184.js";import{b as P}from"./_baseIsEqual.cda019a9.js";import{g as I}from"./get.3bd42a14.js";var d=1,D=2;function G(n,r,e,t){var i=e.length,a=i,o=!t;if(n==null)return!a;for(n=Object(n);i--;){var f=e[i];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<a;){f=e[i];var u=f[0],s=n[u],A=f[1];if(o&&f[2]){if(s===void 0&&!(u in n))return!1}else{var R=new M;if(t)var O=t(s,A,u,n,r,R);if(!(O===void 0?P(A,s,d|D,t,R):O))return!1}}return!0}function g(n){return n===n&&!_(n)}function w(n){for(var r=l(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,g(i)]}return r}function h(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function F(n){var r=w(n);return r.length==1&&r[0][2]?h(r[0][0],r[0][1]):function(e){return e===n||G(e,n,r)}}var S=1,c=2;function T(n,r){return p(n)&&g(r)?h(E(n),r):function(e){var t=I(e,n);return t===void 0&&t===r?y(e,n):P(r,t,S|c)}}function U(n){return function(r){return r==null?void 0:r[n]}}function b(n){return function(r){return C(r,n)}}function x(n){return p(n)?U(E(n)):b(n)}function q(n){return typeof n=="function"?n:n==null?L:typeof n=="object"?m(n)?T(n[0],n[1]):F(n):x(n)}export{q as b};
