var re=Object.defineProperty,ae=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var E=Math.pow,_=(r,e,t)=>e in r?re(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,m=(r,e)=>{for(var t in e||(e={}))oe.call(e,t)&&_(r,t,e[t]);if(P)for(var t of P(e))ce.call(e,t)&&_(r,t,e[t]);return r},b=(r,e)=>ae(r,ie(e));import{a as le,I as ue,au as v,v as he,b as fe,f as de,j as T,aj as ge,a8 as pe,av as me,aw as be,o as N,i as ye,k as Me,ax as ke,ay as Ee,B as Se,az as ve,aA as Te,aB as De,aC as Ie,l as we,n as O,r as D,aD as Ae}from"./index.f13df184.js";const xe=r=>Object.keys(r).length===0,A=(r,e)=>r.push.apply(r,e),Ce=(r,e)=>r.split("").map(s=>e[s]||s).join(""),k=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),$=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var je={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const G=2050,Y=1e3,Re=je,Le=10,Pe=1e4,V=10,F=50,q=20,H=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,_e=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,Ne=/^[A-Z\xbf-\xdf]+$/,z=/^[^a-z\xdf-\xff]+$/,Oe=/^[a-z\xdf-\xff]+$/,$e=/^[^A-Z\xbf-\xdf]+$/,Ge=/[a-z\xdf-\xff]/,Ye=/[A-Z\xbf-\xdf]/,We=/[^A-Za-z\xbf-\xdf]/gi,Ue=/^\d+$/,C=new Date().getFullYear(),Be={recentYear:/19\d\d|200\d|201\d|202\d/g};class Ve{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return k(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=e.length);a+=1){const i=e.slice(n,+a+1||9e9),o=s.exec(i);if(o!=null){const c=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);c!=null&&t.push({pattern:"date",token:i,i:n,j:a,separator:o[2],year:c.year,month:c.month,day:c.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-C);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=e.length);i+=1){const o=e.slice(a,+i+1||9e9);if(s.exec(o)){const c=[],u=o.length;if(Re[u].forEach(([f,d])=>{const p=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,f),10),parseInt(o.slice(f,d),10),parseInt(o.slice(d),10)]);p!=null&&c.push(p)}),c.length>0){let f=c[0],d=n(c[0]);c.slice(1).forEach(p=>{const M=n(p);M<d&&(f=p,d=M)}),t.push({pattern:"date",token:o,i:a,j:i,separator:"",year:f.year,month:f.month,day:f.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let a=0;a<n;a+=1){const i=e[a];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let a=0,i=e.length;a<i;a+=1){const o=e[a];if(o>99&&o<Y||o>G)return null;o>31&&(s+=1),o>12&&(t+=1),o<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[a,i]=t[n];if(Y<=a&&a<=G){const o=this.mapIntegersToDayMonth(i);return o!=null?{year:a,month:o.month,day:o.day}:null}}for(let n=0;n<s;n+=1){const[a,i]=t[n],o=this.mapIntegersToDayMonth(i);if(o!=null)return{year:this.twoToFourDigitYear(a),month:o.month,day:o.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],a=n[0],i=n[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}var Fe={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},I={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class qe{constructor(){this.matchers={},this.l33tTable=Fe,this.dictionary={userInputs:[]},this.rankedDictionaries={},this.translations=I,this.graphs={},this.availableGraphs=[],this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(I).forEach(s=>{if(s in e){const n=s;Object.keys(I[n]).forEach(a=>{a in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={};Object.keys(this.dictionary).forEach(t=>{e[t]=this.getRankedDictionary(t)}),this.rankedDictionaries=e}getRankedDictionary(e){const t=this.dictionary[e];if(e==="userInputs"){const s=[];return t.forEach(n=>{const a=typeof n;(a==="string"||a==="number"||a==="boolean")&&s.push(n.toString().toLowerCase())}),$(s)}return $(t)}extendUserInputsDictionary(e){this.dictionary.userInputs?this.dictionary.userInputs=[...this.dictionary.userInputs,...e]:this.dictionary.userInputs=e,this.rankedDictionaries.userInputs=this.getRankedDictionary("userInputs")}addMatcher(e,t){this.matchers[e]?console.info("Matcher already exists"):this.matchers[e]=t}}var l=new qe;class He{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>b(m({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class ze{constructor(e){this.defaultMatch=e}match({password:e}){const t=[],s=this.enumerateL33tSubs(this.relevantL33tSubtable(e,l.l33tTable));for(let n=0;n<s.length;n+=1){const a=s[n];if(xe(a))break;const i=Ce(e,a);this.defaultMatch({password:i}).forEach(c=>{const u=e.slice(c.i,+c.j+1||9e9);if(u.toLowerCase()!==c.matchedWord){const h={};Object.keys(a).forEach(d=>{const p=a[d];u.indexOf(d)!==-1&&(h[d]=p)});const f=Object.keys(h).map(d=>`${d} -> ${h[d]}`).join(", ");t.push(b(m({},c),{l33t:!0,token:u,sub:h,subDisplay:f}))}})}return t.filter(n=>n.token.length>1)}relevantL33tSubtable(e,t){const s={},n={};return e.split("").forEach(a=>{s[a]=!0}),Object.keys(t).forEach(a=>{const o=t[a].filter(c=>c in s);o.length>0&&(n[a]=o)}),n}enumerateL33tSubs(e){const t=Object.keys(e);return this.getSubs(t,[[]],e).map(n=>{const a={};return n.forEach(([i,o])=>{a[i]=o}),a})}getSubs(e,t,s){if(!e.length)return t;const n=e[0],a=e.slice(1),i=[];s[n].forEach(c=>{t.forEach(u=>{let h=-1;for(let f=0;f<u.length;f+=1)if(u[f][0]===c){h=f;break}if(h===-1){const f=u.concat([[c,n]]);i.push(f)}else{const f=u.slice(0);f.splice(h,1),f.push([c,n]),i.push(u),i.push(f)}})});const o=this.dedup(i);return a.length?this.getSubs(a,o,s):o}dedup(e){const t=[],s={};return e.forEach(n=>{const a=n.map((o,c)=>[o,c]);a.sort();const i=a.map(([o,c])=>`${o},${c}`).join("-");i in s||(s[i]=!0,t.push(n))}),t}}class Ze{constructor(){this.l33t=new ze(this.defaultMatch),this.reverse=new He(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return k(t)}defaultMatch({password:e}){const t=[],s=e.length,n=e.toLowerCase();return Object.keys(l.rankedDictionaries).forEach(a=>{const i=l.rankedDictionaries[a];for(let o=0;o<s;o+=1)for(let c=o;c<s;c+=1)if(n.slice(o,+c+1||9e9)in i){const u=n.slice(o,+c+1||9e9),h=i[u];t.push({pattern:"dictionary",i:o,j:c,token:e.slice(o,+c+1||9e9),matchedWord:u,rank:h,dictionaryName:a,reversed:!1,l33t:!1})}}),t}}class Ke{match({password:e,regexes:t=Be}){const s=[];return Object.keys(t).forEach(n=>{const a=t[n];a.lastIndex=0;const i=a.exec(e);if(i){const o=i[0];s.push({pattern:"regex",token:o,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),k(s)}}var y={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},Xe=({token:r})=>{let e=E(Le,r.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=V+1:t=F+1,Math.max(e,t)},Je=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-C),q)*365;return e&&(s*=4),s};const Qe=r=>{const e=r.split(""),t=e.filter(i=>i.match(Ge)).length,s=e.filter(i=>i.match(Ye)).length;let n=0;const a=Math.min(t,s);for(let i=1;i<=a;i+=1)n+=y.nCk(t+s,i);return n};var et=r=>{const e=r.replace(We,"");if(e.match($e)||e.toLowerCase()===e)return 1;const t=[H,_e,z],s=t.length;for(let n=0;n<s;n+=1){const a=t[n];if(e.match(a))return 2}return Qe(e)};const tt=({subs:r,subbed:e,token:t})=>{const s=r[e],n=t.toLowerCase().split(""),a=n.filter(o=>o===e).length,i=n.filter(o=>o===s).length;return{subbedCount:a,unsubbedCount:i}};var st=({l33t:r,sub:e,token:t})=>{if(!r)return 1;let s=1;const n=e;return Object.keys(n).forEach(a=>{const{subbedCount:i,unsubbedCount:o}=tt({subs:n,subbed:a,token:t});if(i===0||o===0)s*=2;else{const c=Math.min(o,i);let u=0;for(let h=1;h<=c;h+=1)u+=y.nCk(o+i,h);s*=u}}),s},nt=({rank:r,reversed:e,l33t:t,sub:s,token:n})=>{const a=r,i=et(n),o=st({l33t:t,sub:s,token:n}),c=e&&2||1,u=a*i*o*c;return{baseGuesses:a,uppercaseVariations:i,l33tVariations:o,calculation:u}},rt=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return E(s[r],t.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-C),q)}return 0},at=({baseGuesses:r,repeatCount:e})=>r*e,it=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const ot=r=>{let e=0;return Object.keys(r).forEach(t=>{e+=r[t].filter(n=>!!n).length}),e/=Object.entries(r).length,e},ct=({token:r,graph:e,turns:t})=>{const s=Object.keys(l.graphs[e]).length,n=ot(l.graphs[e]);let a=0;const i=r.length;for(let o=2;o<=i;o+=1){const c=Math.min(t,o-1);for(let u=1;u<=c;u+=1)a+=y.nCk(o-1,u-1)*s*E(n,u)}return a};var lt=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=ct({token:e,graph:r,turns:s});if(t){const a=e.length-t;if(t===0||a===0)n*=2;else{let i=0;for(let o=1;o<=Math.min(t,a);o+=1)i+=y.nCk(t+a,o);n*=i}}return Math.round(n)};const ut=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=V:t=F),t},W={bruteforce:Xe,date:Je,dictionary:nt,regex:rt,repeat:at,sequence:it,spatial:lt},ht=(r,e)=>W[r]?W[r](e):l.matchers[r]&&"scoring"in l.matchers[r]?l.matchers[r].scoring(e):0;var ft=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=ut(r,e),n=ht(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const i=Math.max(a,s);return b(m(m({},r),t),{guesses:i,guessesLog10:y.log10(i)})};const g={password:"",optimal:{},excludeAdditive:!1,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=ft(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let a=y.factorial(e)*n;this.excludeAdditive||(a+=E(Pe,e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(o=>{const c=this.optimal.g[t][o];parseInt(o,10)<=e&&c<=a&&(i=!0)}),i||(this.optimal.g[t][e]=a,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const a=this.optimal.g[t];for(a&&Object.keys(a).forEach(i=>{const o=a[i];o<n&&(s=parseInt(i,10),n=o)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var x={mostGuessableMatchSequence(r,e,t=!1){g.password=r,g.excludeAdditive=t;const s=r.length;let n=g.fillArray(s,"array");e.forEach(c=>{n[c.j].push(c)}),n=n.map(c=>c.sort((u,h)=>u.i-h.i)),g.optimal={m:g.fillArray(s,"object"),pi:g.fillArray(s,"object"),g:g.fillArray(s,"object")};for(let c=0;c<s;c+=1)n[c].forEach(u=>{u.i>0?Object.keys(g.optimal.m[u.i-1]).forEach(h=>{g.update(u,parseInt(h,10)+1)}):g.update(u,1)}),g.bruteforceUpdate(c);const a=g.unwind(s),i=a.length,o=this.getGuesses(r,i);return{password:r,guesses:o,guessesLog10:y.log10(o),sequence:a}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=g.optimal.g[t-1][e],s}};class dt{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const i=this.getGreedyMatch(e,n),o=this.getLazyMatch(e,n);if(i==null)break;const{match:c,baseToken:u}=this.setMatchToken(i,o);if(c){const h=c.index+c[0].length-1,f=this.getBaseGuesses(u,t);s.push(this.normalizeMatch(u,h,c,f)),n=h+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const a={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(i=>b(m({},a),{baseGuesses:i})):b(m({},a),{baseGuesses:n})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let n,a="";if(t&&e[0].length>t[0].length){n=e;const i=s.exec(n[0]);i&&(a=i[1])}else n=t,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(a=>x.mostGuessableMatchSequence(e,a).guesses):x.mostGuessableMatchSequence(e,s).guesses}}class gt{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const a=e.length;for(let i=1;i<a;i+=1){const o=e.charCodeAt(i)-e.charCodeAt(i-1);if(n==null&&(n=o),o!==n){const c=i-1;this.update({i:s,j:c,delta:n,password:e,result:t}),s=c,n=o}}return this.update({i:s,j:a-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:a}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const o=n.slice(e,+t+1||9e9),{sequenceName:c,sequenceSpace:u}=this.getSequence(o);return a.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:c,sequenceSpace:u,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return Oe.test(e)?(t="lower",s=26):Ne.test(e)?(t="upper",s=26):Ue.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class pt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(l.graphs).forEach(s=>{const n=l.graphs[s];A(t,this.helper(e,n,s))}),k(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const a=[];let i=0;const o=e.length;for(;i<o-1;){let c=i+1,u=0,h=0;for(n=this.checkIfShifted(s,e,i);;){const f=e.charAt(c-1),d=t[f]||[];let p=!1,M=-1,j=-1;if(c<o){const se=e.charAt(c),ne=d.length;for(let S=0;S<ne;S+=1){const R=d[S];if(j+=1,R){const L=R.indexOf(se);if(L!==-1){p=!0,M=j,L===1&&(n+=1),u!==M&&(h+=1,u=M);break}}}}if(p)c+=1;else{c-i>2&&a.push({pattern:"spatial",i,j:c-1,token:e.slice(i,c),graph:s,turns:h,shiftedCount:n}),i=c;break}}}return a}}class mt{constructor(){this.matchers={date:Ve,dictionary:Ze,regex:Ke,repeat:dt,sequence:gt,spatial:pt}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(l.matchers)].forEach(a=>{if(!this.matchers[a]&&!l.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:l.matchers[a].Matching,c=new i().match({password:e,omniMatch:this});c instanceof Promise?(c.then(u=>{A(t,u)}),s.push(c)):A(t,c)}),s.length>0?new Promise(a=>{Promise.all(s).then(()=>{a(k(t))})}):k(t)}}const Z=1,K=Z*60,X=K*60,J=X*24,Q=J*31,ee=Q*12,bt=ee*100,w={second:Z,minute:K,hour:X,day:J,month:Q,year:ee,century:bt};class yt{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=l.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const a=t[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1e3+5?0:e<1e6+5?1:e<1e8+5?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(w),a=n.findIndex(i=>e<w[i]);return a>-1&&(t=n[a-1],a!==0?s=Math.round(e/w[t]):t="ltSecond"),this.translate(t,s)}}var Mt=()=>null,kt=()=>({warning:l.translations.warnings.dates,suggestions:[l.translations.suggestions.dates]});const Et=(r,e)=>{let t="";return e&&!r.l33t&&!r.reversed?r.rank<=10?t=l.translations.warnings.topTen:r.rank<=100?t=l.translations.warnings.topHundred:t=l.translations.warnings.common:r.guessesLog10<=4&&(t=l.translations.warnings.similarToCommon),t},St=(r,e)=>{let t="";return e&&(t=l.translations.warnings.wordByItself),t},vt=(r,e)=>e?l.translations.warnings.namesByThemselves:l.translations.warnings.commonNames,Tt=(r,e)=>{let t="";const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=Et(r,e):s.includes("wikipedia")?t=St(r,e):n?t=vt(r,e):s==="userInputs"&&(t=l.translations.warnings.userInputs),t};var Dt=(r,e)=>{const t=Tt(r,e),s=[],n=r.token;return n.match(H)?s.push(l.translations.suggestions.capitalization):n.match(z)&&n.toLowerCase()!==n&&s.push(l.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(l.translations.suggestions.reverseWords),r.l33t&&s.push(l.translations.suggestions.l33t),{warning:t,suggestions:s}},It=r=>r.regexName==="recentYear"?{warning:l.translations.warnings.recentYears,suggestions:[l.translations.suggestions.recentYears,l.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},wt=r=>{let e=l.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=l.translations.warnings.simpleRepeat),{warning:e,suggestions:[l.translations.suggestions.repeated]}},At=()=>({warning:l.translations.warnings.sequences,suggestions:[l.translations.suggestions.sequences]}),xt=r=>{let e=l.translations.warnings.keyPattern;return r.turns===1&&(e=l.translations.warnings.straightRow),{warning:e,suggestions:[l.translations.suggestions.longerKeyboardPattern]}};const U={warning:"",suggestions:[]};class Ct{constructor(){this.matchers={bruteforce:Mt,date:kt,dictionary:Dt,regex:It,repeat:wt,sequence:At,spatial:xt},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(l.translations.suggestions.useWords,l.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return U;const s=l.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let a=this.getMatchFeedback(n,t.length===1);return a!=null?(a.suggestions.unshift(s),a.warning==null&&(a.warning="")):a={warning:"",suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):l.matchers[e.pattern]&&"feedback"in l.matchers[e.pattern]?l.matchers[e.pattern].feedback(e,t):U}}const te=()=>new Date().getTime(),B=(r,e,t)=>{const s=new Ct,n=new yt,a=x.mostGuessableMatchSequence(e,r),i=te()-t,o=n.estimateAttackTimes(a.guesses);return b(m(m({calcTime:i},a),o),{feedback:s.getFeedback(o.score,a.sequence)})},jt=(r,e)=>{e&&l.extendUserInputsDictionary(e);const t=new mt,s=te(),n=t.match(r);return n instanceof Promise?n.then(a=>B(a,r,s)):B(n,r,s)};const Rt=le({name:"StrengthMeter",components:{InputPassword:ue.Password},props:{value:v.string,showInput:v.bool.def(!0),disabled:v.bool},emits:["score-change","change"],setup(r,{emit:e}){const t=he(""),{prefixCls:s}=fe("strength-meter"),n=de(()=>{const{disabled:i}=r;if(i)return-1;const c=T(t)?jt(T(t)).score:-1;return e("score-change",c),c});function a(i){t.value=i.target.value}return ge(()=>{t.value=r.value||""}),pe(()=>T(t),i=>{e("change",i)}),{getPasswordStrength:n,handleChange:a,prefixCls:s,innerValueRef:t}}}),Lt=["data-score"];function Pt(r,e,t,s,n,a){const i=be("InputPassword");return N(),ye("div",{class:D([r.prefixCls,"relative"])},[r.showInput?(N(),Me(i,Ie({key:0},r.$attrs,{allowClear:"",value:r.innerValueRef,onChange:r.handleChange,disabled:r.disabled}),ke({_:2},[Ee(Object.keys(r.$slots),o=>({name:o,fn:Se(c=>[ve(r.$slots,o,Te(De(c||{})),void 0,!0)])}))]),1040,["value","onChange","disabled"])):we("",!0),O("div",{class:D(`${r.prefixCls}-bar`)},[O("div",{class:D(`${r.prefixCls}-bar--fill`),"data-score":r.getPasswordStrength},null,10,Lt)],2)],2)}var _t=me(Rt,[["render",Pt],["__scopeId","data-v-3bfd49a1"]]);const $t=Ae(_t);export{$t as S};
