(this["webpackJsonpphase-4-calculator-app"]=this["webpackJsonpphase-4-calculator-app"]||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_lenovo_Desktop_mern_projects_phase_4_calculator_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_lenovo_Desktop_mern_projects_phase_4_calculator_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_lenovo_Desktop_mern_projects_phase_4_calculator_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_lenovo_Desktop_mern_projects_phase_4_calculator_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_components_KeyPadComponents__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),App=function(_Component){Object(C_Users_lenovo_Desktop_mern_projects_phase_4_calculator_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(C_Users_lenovo_Desktop_mern_projects_phase_4_calculator_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;return Object(C_Users_lenovo_Desktop_mern_projects_phase_4_calculator_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){var checkResult="";checkResult=_this.state.result.includes("--")?_this.state.result.replace("--","+"):_this.state.result;try{_this.setState({result:(eval(checkResult)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(C_Users_lenovo_Desktop_mern_projects_phase_4_calculator_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"calculator-body",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1",{children:"Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_KeyPadComponents__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick})]})})}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(e,_,t){"use strict";var n=t(2),r=t(3),o=t(5),c=t(4),s=t(1),a=t(0),i=function(e){Object(o.a)(t,e);var _=Object(c.a)(t);function t(){return Object(n.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.result;return Object(a.jsx)("div",{className:"result",children:Object(a.jsx)("p",{children:e})})}}]),t}(s.Component);_.a=i},function(e,_,t){"use strict";var n=t(2),r=t(3),o=t(5),c=t(4),s=t(1),a=t(0),i=function(e){Object(o.a)(t,e);var _=Object(c.a)(t);function t(){return Object(n.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"button",children:[Object(a.jsx)("button",{name:"(",onClick:function(_){return e.props.onClick(_.target.name)},children:"("}),Object(a.jsx)("button",{name:"CE",onClick:function(_){return e.props.onClick(_.target.name)},children:"CE"}),Object(a.jsx)("button",{name:")",onClick:function(_){return e.props.onClick(_.target.name)},children:")"}),Object(a.jsx)("button",{name:"C",onClick:function(_){return e.props.onClick(_.target.name)},children:"C"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{name:"1",onClick:function(_){return e.props.onClick(_.target.name)},children:"1"}),Object(a.jsx)("button",{name:"2",onClick:function(_){return e.props.onClick(_.target.name)},children:"2"}),Object(a.jsx)("button",{name:"3",onClick:function(_){return e.props.onClick(_.target.name)},children:"3"}),Object(a.jsx)("button",{name:"+",onClick:function(_){return e.props.onClick(_.target.name)},children:"+"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{name:"4",onClick:function(_){return e.props.onClick(_.target.name)},children:"4"}),Object(a.jsx)("button",{name:"5",onClick:function(_){return e.props.onClick(_.target.name)},children:"5"}),Object(a.jsx)("button",{name:"6",onClick:function(_){return e.props.onClick(_.target.name)},children:"6"}),Object(a.jsx)("button",{name:"-",onClick:function(_){return e.props.onClick(_.target.name)},children:"-"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{name:"7",onClick:function(_){return e.props.onClick(_.target.name)},children:"7"}),Object(a.jsx)("button",{name:"8",onClick:function(_){return e.props.onClick(_.target.name)},children:"8"}),Object(a.jsx)("button",{name:"9",onClick:function(_){return e.props.onClick(_.target.name)},children:"9"}),Object(a.jsx)("button",{name:"*",onClick:function(_){return e.props.onClick(_.target.name)},children:"x"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{name:".",onClick:function(_){return e.props.onClick(_.target.name)},children:"."}),Object(a.jsx)("button",{name:"0",onClick:function(_){return e.props.onClick(_.target.name)},children:"0"}),Object(a.jsx)("button",{name:"=",onClick:function(_){return e.props.onClick(_.target.name)},children:"="}),Object(a.jsx)("button",{name:"/",onClick:function(_){return e.props.onClick(_.target.name)},children:"\xf7"}),Object(a.jsx)("br",{})]})}}]),t}(s.Component);_.a=i},,,,,function(e,_,t){},function(e,_,t){},,function(e,_,t){"use strict";t.r(_);t(1);var n=t(7),r=t.n(n),o=(t(15),t(8)),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var _=e.installing;_.onstatechange=function(){"installed"===_.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var a=t(0);r.a.render(Object(a.jsx)(o.a,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");c?(!function(e){fetch(e).then((function(_){404===_.status||-1===_.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):s(e)}))}}()}],[[18,1,2]]]);
//# sourceMappingURL=main.08379b04.chunk.js.map