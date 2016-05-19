module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(16)},function(e,t){"use strict";function n(e){var t=e.context,n=e.env;return t&&n?t.toLowerCase()+"_"+n.toLowerCase():"index"}function r(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.entry,r=e.out,a=e.hot,i=e.context,s=e.env,l=void 0===s?u:s;return e[o]={signature:n({context:i,env:l}),entry:t,out:r,hot:a},e}Object.defineProperty(t,"__esModule",{value:!0}),t.sign=r;var o=Symbol("polypacker"),u=process.env.NODE_ENV&&process.env.NODE_ENV.toUpperCase()||"DEVELOPMENT";t["default"]=o},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="There can be multiple (each a seperate argument), and they will contribute to the cross product of compilers",r={entry:{help:"main entry point for your program, across all contexts"},out:{help:"destination for compiled bundle"},modules:{help:"where to look for modules"},watch:{help:"monitor source files for changes and recompile.",action:"storeTrue"},hot:{help:"enable hot module replacement",action:"storeTrue"},run:{help:"Which context to run on compilation, if any"},env:{aliases:["-e","--environment"],dest:"environments",help:"an application lifecycle environment {DEVELOPMENT, PRODUCTION, etc} this distribution will run in. "+n,action:"append"},context:{aliases:["-c"],dest:"contexts",help:"a context {NODE, BROWSER, etc} this distribution will run in. "+n,action:"append"},preset:{help:"	            reference to a preset build configuration. For instance, FULLSTACK_COMPONENT references {	            entry: ./src/entry.js	            contexts: [NODE, BROWSER]	            environments: [DEVELOPMENT, PRODUCTION]	            out: ./dist/for/$context_$env.js	        }. Presets are actually functions that take in the given user args, and thus can have fairly intricate logic."},babelPreset:{dest:"babelPresets",defaultValue:[],help:"add a preset to the babel loader, between es2015 and stage-0",action:"append"},logLevel:{defaultValue:"ERROR",help:"VERBOSE will output webpack stats and warnings"}};t["default"]=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(12),u=r(o);t["default"]=u["default"]},function(e,t){"use strict";function n(e){if(null==e||"object"!=("undefined"==typeof e?"undefined":s(e)))return e;var t=e.constructor()||{};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(e){var t=e.watch,n=e.run;return t&&n?"watch-and-run":t?"watch":n?"run":"dist"}function o(e,t,n){return{task:t||"dist",compilers:e,meta:n||{logLevel:e[0].logLevel||"ERROR"}}}function u(e){return[].concat.apply([],e)}function a(e){if(Array.isArray(e))return u(e.map(a));var t=e.contexts;return delete e.contexts,t?t.map(function(t){var r=n(e);return r.context=t,r}):[e]}function i(e){if(Array.isArray(e))return u(e.map(i));var t=e.environments;return delete e.environments,t?t.map(function(t){var r=n(e);return r.env=t,r}):[e]}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.clone=n,t.selectTask=r,t.taskWrapper=o,t.flatten=u,t.splitByContext=a,t.splitByEnv=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){console.log(e)}function u(e){return("0"+e).slice(-2)}function a(){var e=new Date;return u(e.getHours())+":"+u(e.getMinutes())+"."+u(e.getSeconds())}function i(e){return"undefined"!=typeof e?(e+="",e[0].toUpperCase()+e.substr(1)):""}function s(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.color,n=void 0===t?"magenta":t;return p["default"][n]("["+a()+"] ")+p["default"]["bg"+i(n)](" ")}function l(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=t.color,r=void 0===n?"magenta":n;o(s({color:r})+" "+p["default"].bold(e))}function c(e,t){var n=t[m["default"]],r=n.entry,o=n.out,u=arguments.length<=2||void 0===arguments[2]?"cyan":arguments[2];l(e+" from '"+p["default"][u](r)+"' to '"+p["default"][u](o)+"'")}function d(e,t,n){var r=n.logLevel,u=n.signature,a="success";return e?(l(p["default"].red("Errors while building "+u+"!"),{color:"red"}),o("Error",e),a="error"):t.hasErrors()?(l(p["default"].red("Errors while building "+u+"!"),{color:"red"}),o(t.toString({colors:!0,errorDetails:!0})),a="error"):l("successfully built "+p["default"].cyan(u)),"VERBOSE"==r&&o(t.toString({colors:!0})),{compiler:u,status:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.log=o,t.pad=u,t.shortTimestamp=a,t.prefix=s,t.importantLog=l,t.logImportantFromToAction=c,t.logCompilation=d;var f=n(11),p=r(f),v=n(1),m=r(v)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e){var t=e.name,n=o(e,["name"]);return d({test:new RegExp("."+t+"$","g")},n)}function a(e){return"string"==typeof e?{loader:e}:Array.isArray(e)?{loaders:e}:e}function i(e){return Object.keys(e).reduce(function(t,n){e[n];return t[n]=u(d({name:n},a(e[n]))),t},{})}function s(e){return function t(n,r){return e[r]?e[r].forEach(function(e){return n=t(n,e)}):n[r+(r.endsWith("-loader")?"":"-loader")]=!0,n}}function l(e,t){return e.reduce(s(t),{})}function c(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.jsonPath,n=void 0===t?"./package.json":t,r=e.loaderMap,o=void 0===r?m:r,u=e.loaderSetMap,a=void 0===u?g:u,i=(0,p["default"])(n),s=Object.assign({},i.dependencies,i.devDpendencies,l(i.polypacker?i.polypacker.loaders:[],a));return Object.keys(s).filter(function(e){return e.endsWith("-loader")}).map(function(e){return e.replace(/-loader$/,"")}).map(function(e){return o[e]}).filter(function(e){return e})}Object.defineProperty(t,"__esModule",{value:!0});var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.expandSimpleLoaderMap=i,t["default"]=c;var f=n(24),p=r(f),v=["style-loader","css-loader"],m=Object.assign(i({json:"json-loader",html:"html-loader",css:[].concat(v,["postcss-loader"]),less:[].concat(v,["less-loader"]),scss:[].concat(v,["sass-loader"]),sass:[].concat(v,["sass-loader"])}),{woff:{test:/\.woff(2)?(\?.+)?$/,loader:"url-loader",query:"?limit=10000&mimetype=application/font-woff"},tff:{test:/\.ttf(\?.+)?$/,loader:"url-loader",query:"?limit=10000&mimetype=application/octet-stream"},svg:{test:/\.svg(\?.+)?$/,loader:"url-loader",query:"?limit=10000&mimetype=image/svg+xml"},png:{test:/\.png$/,loader:"url-loader",query:"?limit=100000"},eot:{test:/\.eot(\?.+)?$/,loader:"file-loader"},jpg:{test:/\.jpg$/,loader:"file-loader"}}),g={"common-asset":["woff","tff","eot","svg","png","jpg","png","eot","jpg"],"web-asset":["common-asset","json","html","css"],"general-asset":["web-asset","scss","less","sass","scss"]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.autoLoader=t["default"]=void 0;var o=n(18),u=r(o),a=n(9),i=r(a);t["default"]=u["default"],t.autoLoader=i["default"]},function(e,t){e.exports=require("colors")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=f.parseKnownArgs(e&&e.trim().split(/ +/)),n=u(t,2),r=n[0],o=n[1];return{config:(0,d["default"])(r),unknown:o}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,u=s}finally{try{!r&&i["return"]&&i["return"]()}finally{if(o)throw u}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t["default"]=o;var a=n(13),i=r(a),s=n(5),l=r(s),c=n(15),d=r(c),f=(0,i["default"])(l["default"])},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n].aliases||[];r.unshift("--"+n),e.addArgument(r,t[n])}return e}function u(e){var t=new a.ArgumentParser({argumentDefault:void 0,version:"0.0.1",addHelp:!0,description:"context-driven js distribution tool for multiple environments"});return o(t,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.addArgumentMapToParser=o,t["default"]=u;var a=n(21),i=n(5);r(i)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return e.entry=e.entry||"./src/index.js",e.modules=e.modules||"./src",e}function u(e){return e=o(e),e.out=e.out||e.context&&"./dist/for/"+e.context.toLowerCase()+"_"+e.env.toLowerCase()+".js",e}function a(){try{v["default"].lstatSync("./dist/index.js")}catch(e){v["default"].mkdir("./dist"),v["default"].createReadStream(__dirname+"/templates/fullstackComponentIndex.js").pipe(v["default"].createWriteStream("./dist/index.js"))}}function s(e){return(0,m.taskWrapper)([u(e)])}function l(e){return(0,m.taskWrapper)([u(e)])}function c(e){a(),e.contexts=["NODE","BROWSER"],e.environments=["DEVELOPMENT","PRODUCTION"];var t=(0,m.splitByContext)(e),n=(0,m.splitByEnv)(t).map(u);return(0,m.taskWrapper)(n,e.watch?"watch":"dist")}function d(e){return e.context="NODE",delete e.contexts,e.out=e.out||"./dist/index.js",e.run=!0,e=u(e),e=(0,m.splitByEnv)(e),(0,m.taskWrapper)(e,e.watch?"watch-and-run":"run")}function f(e){e.contexts=["NODE","BROWSER"];var t=(0,m.splitByContext)(e);for(i=0;i<t.length;i++)t[i]=u(t[i]),t[i].run="NODE"==t[i].context;return(0,m.taskWrapper)(t,e.watch?"watch-and-run":"run")}Object.defineProperty(t,"__esModule",{value:!0}),t.NODE_COMPONENT=s,t.BROWSER_COMPONENT=l,t.FULLSTACK_COMPONENT=c,t.NODE_APPLICATION=d,t.FULLSTACK_APPLICATION=f;var p=n(3),v=r(p),m=n(7)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return{logLevel:e.logLevel}}function u(e){var t=e.preset;if(delete e.preset,t&&i[t])return i[t](e);var n=(0,s.splitByContext)(e),r=(0,s.splitByEnv)(n);return(0,s.taskWrapper)(r,(0,s.selectTask)(e),o(e))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var a=n(14),i=r(a),s=n(7)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.logCompilation=t.parser=t.run=t.taskManager=t.autoLoader=t.configBuilder=void 0;var o=n(10);Object.defineProperty(t,"autoLoader",{enumerable:!0,get:function(){return o.autoLoader}});var u=n(17);Object.defineProperty(t,"run",{enumerable:!0,get:function(){return u.run}});var a=n(8);Object.defineProperty(t,"logCompilation",{enumerable:!0,get:function(){return a.logCompilation}});var i=r(o),s=r(u),l=n(6),c=r(l);t.configBuilder=i["default"],t.taskManager=s["default"],t.parser=c["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,u){try{var a=t[o](u),i=a.value}catch(s){return void n(s)}return a.done?void e(i):Promise.resolve(i).then(function(e){return r("next",e)},function(e){return r("throw",e)})}return r("next")})}}function u(e){e.close(function(){(0,L.logImportantFromToAction)("stopped compiling",e,"magenta"),T.count-=1,T.count||((0,L.importantLog)("all watchers stopped. Polypacker exited cleanly"),process.exit(0))})}function a(e){var t=(0,h["default"])((0,E["default"])(e));return t[N["default"]]=e[N["default"]],t[D]=function(){var n=t.watch.apply(t,arguments);return T.count+=1,n[N["default"]]=e[N["default"]],T.compilers.push(n),n},t}function i(e,t,n){var r=n.logLevel,o=n[N["default"]].signature;return(0,L.logCompilation)(e,t,{logLevel:r,signature:o})}function s(e){var t=arguments.length<=1||void 0===arguments[1]?function(e){return e}:arguments[1];a(e).run(function(n,r){results[e[N["default"]].signature]=i(n,r,e),t({results:results})})}function l(e){var t=e.length,n={},r=null;return new Promise(function(o,u){e.map(function(e){(0,L.logImportantFromToAction)("distributing",e),a(e).run(function(r,u){n[e[N["default"]].signature]=i(r,u,e),t-=1,t||o(n)})}),r||(r=setTimeout(function(e){t&&u(new Error("compiler timed out with the results "+n))},1e5))})}function c(e){var t=e.length,n={};return new Promise(function(r,o){e.map(function(e){(0,L.logImportantFromToAction)("watching and distributing",e),a(e)[D](250,function(o,u){n[e[N["default"]].signature]=i(o,u,e),C[e.context]&&C[e.context](e),t-=1,t||r(n)})}),setTimeout(function(){t&&o(new Error("compiler timed out with the results "+n))},1e5)})}function d(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(){var e=o(regeneratorRuntime.mark(function n(){var e,r,o,u,a,i,s=arguments;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=!0,r=!1,o=void 0,n.prev=3,u=t[Symbol.iterator]();case 5:if(e=(a=u.next()).done){n.next=12;break}return i=a.value,n.next=9,i.apply(void 0,s);case 9:e=!0,n.next=5;break;case 12:n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](3),r=!0,o=n.t0;case 18:n.prev=18,n.prev=19,!e&&u["return"]&&u["return"]();case 21:if(n.prev=21,!r){n.next=24;break}throw o;case 24:return n.finish(21);case 25:return n.finish(18);case 26:case"end":return n.stop()}},n,this,[[3,14,18,26],[19,,21,25]])}));return function(t){return e.apply(this,arguments)}}()}function f(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.err;if(t)throw console.log(t),t;T.count?((0,L.log)("\n"),(0,L.importantLog)("stopping watchers."),T.compilers.map(u)):((0,L.importantLog)("Polypacker exited cleanly."),process.exit(0))}function p(e){var t=e.config,n=t.compilers,r=t.task,o=e.unknown,u=e.callback,a=void 0===u?function(e){return e}:u;return S[r](n.map(M.sign),{unknown:o}).then(a)["catch"](function(e){return f({err:e})})}Object.defineProperty(t,"__esModule",{value:!0});var v=function(){var e=o(regeneratorRuntime.mark(function t(e,n){var r=n.unknown;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.map(function(e){e.run&&((0,L.importantLog)("runnning "+g["default"].cyan(e.context)+" context from "+g["default"].cyan(e.out)),(0,_["default"])({execMap:{js:"node"},script:x["default"].join(process.env.PWD,e.out),args:r,ignore:["*"],watch:["nothing/"],ext:"noop"}).on("restart",function(){(0,L.importantLog)("Patched!")}).on("quit",function(){(0,L.importantLog)(g["default"].cyan(e.context)+" process quit")}))});case 1:case"end":return t.stop()}},t,this)}));return function(t,n){return e.apply(this,arguments)}}();t.run=s,t["default"]=p;var m=n(11),g=r(m),y=n(2),h=r(y),b=n(4),x=r(b),O=n(23),_=r(O),w=n(22),P=r(w),j=n(10),E=r(j),k=n(6),M=(r(k),n(1)),N=r(M),L=n(8),T={count:0,compilers:[]},D=Symbol(D),C={NODE:function(e){var t=e.watch,n=e.run;return t&&n&&_["default"].restart()}},S={dist:d(l,f),watch:c,run:d(l,v),"watch-and-run":d(c,v)};(0,P["default"])(function(e,t){return f({err:t})})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=e.entry,n=e.out,r=e.hot,u=e.modules,a=e.context,i=e.env,l=void 0===i?m:i,c=e.babelPresets,g=void 0===c?[]:c,y=e.plugins,h=void 0===y?[]:y,b=e[p["default"]],x=e.overrides,O=void 0===x?{}:x;process.chdir(process.env.PWD);var _=Object.assign(b?o({},p["default"],b):(0,f.sign)({entry:t,out:n,hot:r,context:a,env:l}),(0,v.io)({entry:t,out:n}),(0,v.target)({context:a}),(0,v.fixed)(),(0,v.plugin)({env:l,context:a,plugins:h}),(0,v.resolve)({pwd:"./",modules:u,dirname:s["default"].join(__dirname,"..")}),(0,v.module)({babelPresets:g}),O);return(0,d["default"])({config:_,env:l,hot:r})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var a=n(3),i=(r(a),n(4)),s=r(i),l=n(2),c=(r(l),n(19)),d=r(c),f=n(1),p=r(f),v=n(20),m=process.env.NODE_ENV&&process.env.NODE_ENV.toUpperCase()||"DEVELOPMENT"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.config,n=e.env,r=e.hot;return t=l.polypack(t),"production"==n.toLowerCase()&&(t=l.production(t)),r&&(t=l.hot(t)),t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(2),a=r(u),i=n(1),s=r(i),l={polypack:function(e){var t=e[s["default"]].signature;return"node"==e.target&&e.externals.push(function(e,n,r){return/^polypack!/.test(n)?r(null,n.substr(9)+"/dist/for/"+t):void r()}),e.callbackLoader={polypack:function(e){return e?'require("'+e+"/dist/for/"+t+'") //polypacked by dist':'require("./for/'+t+'") //polypacked by dist'}},e},hot:function(e){return e.debug=!0,e.plugins.unshift(new a["default"].HotModuleReplacementPlugin),e.entry.unshift("webpack-hot-middleware/client"),e},production:function(e){return e.plugins.push(new a["default"].optimize.UglifyJsPlugin),e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e){var t=e.babelPresets;return t.unshift("es2015"),t.push("stage-0"),{test:/\.js|\.jsx$/,loader:"babel",query:{presets:t.map(function(e){return"babel-preset-"+e})},exclude:/node_modules/,noParse:/\.min\.js/}}function a(e){var t=e.env,n=e.context,r=e.plugins;return{plugins:[new h["default"].DefinePlugin({$ES:{CONTEXT:JSON.stringify(n||"NODE"),ENV:JSON.stringify(t)}})].concat(o(r),[new h["default"].optimize.OccurenceOrderPlugin,new h["default"].NoErrorsPlugin])}}function i(e){var t=e.context;return{target:{NODE:"node",BROWSER:"web"}[t]}}function s(e){return{libraryTarget:"commonjs2",path:g["default"].dirname(e),filename:g["default"].basename(e)}}function l(){return{devtool:"source-map",cache:!1,node:{__dirname:!1,__filename:!1},externals:[(0,x["default"])()]}}function c(e){var t=e.pwd,n=e.modules,r=e.dirname,o=[g["default"].join(r,"node_modules"),g["default"].join(g["default"].resolve(t),"node_modules"),g["default"].join(g["default"].resolve(t),"node_modules/polypacker/node_modules")];return{context:g["default"].resolve(t),resolve:{moduleDirectories:[n,"node_modules","node_modules/polypacker/node_modules"],extensions:["",".json",".js",".jsx"],fallback:o},resolveLoader:{moduleDirectories:["node_modules","node_modules/polypacker/node_modules"],fallback:o,alias:{polypack:"callback?polypack"}}}}function s(e){var t=e.out;return{output:{libraryTarget:"commonjs2",path:g["default"].dirname(t),filename:g["default"].basename(t)}}}function d(e){var t=e.entry,n=e.out;return p({entry:[t]},s({out:n}))}function f(e){var t=e.babelPresets,n=e.packagePath,r=void 0===n?"./package.json":n;return{module:{loaders:[u({babelPresets:t})].concat(o((0,_["default"])({jsonPath:g["default"].resolve(r)})))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.module=void 0;var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.plugin=a,t.target=i,t.output=s,t.fixed=l,t.resolve=c,t.output=s,t.io=d;var v=n(3),m=(r(v),n(4)),g=r(m),y=n(2),h=r(y),b=n(25),x=r(b),O=n(9),_=r(O);t.module=f},function(e,t){e.exports=require("argparse")},function(e,t){e.exports=require("death")},function(e,t){e.exports=require("nodemon")},function(e,t){e.exports=require("read-json-sync")},function(e,t){e.exports=require("webpack-node-externals")}]);
//# sourceMappingURL=index.js.map