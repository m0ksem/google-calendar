(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/google-calendar/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0766":function(e,t,n){"use strict";n("d7e6")},"0a02":function(e,t,n){},1549:function(e,t,n){},"283b":function(e,t,n){"use strict";n("1549")},"469b":function(e,t,n){"use strict";n("9a59")},"492a":function(e,t,n){"use strict";n("631a")},4940:function(e,t,n){"use strict";n("dbb0")},"4dcc":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"631a":function(e,t,n){},6911:function(e,t,n){"use strict";n("fdfd")},"6a80":function(e,t,n){},"6f55":function(e,t,n){},"77af":function(e,t,n){},"7ef2":function(e,t,n){},"80d30":function(e,t,n){"use strict";n("4dcc")},"9a59":function(e,t,n){},"9c0c":function(e,t,n){},b31d:function(e,t,n){"use strict";n("77af")},c026:function(e,t,n){"use strict";n("0a02")},c0cc:function(e,t,n){"use strict";n("6f55")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("FluentBackground",[n("GApiGuard",{on:{loaded:e.onGApiLoaded},scopedSlots:e._u([{key:"loading",fn:function(){return[n("MyLoader")]},proxy:!0}])},[n("MyContainer",[e.isSignedIn?n("CreateEventView",{on:{signout:e.signOut}}):n("LoginView",{on:{login:e.login}})],1)],1)],1)},i=[],o=n("1da1"),u=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isGApiLoaded?n("div",{staticClass:"gapi-guard"},[e._t("default")],2):e.error?n("div",{staticClass:"gapi-guard gapi-guard--error"},[e._v(" "+e._s(e.error)+" ")]):n("div",{staticClass:"gapi-guard gapi-guard--loading"},[e._t("loading",(function(){return[e._v(" Loading GApi ")]}))],2)}),c=[],s={name:"GApiGuard",data:function(){return{isGApiLoaded:!1,error:null}},beforeCreate:function(){var e=this;this.$gapi.getGapiClient().then((function(){e.isGApiLoaded=!0,e.$emit("loaded")})).catch((function(t){e.error=t}))}},l=s,d=(n("f9cc"),n("2877")),f=Object(d["a"])(l,u,c,!1,null,null,null),p=f.exports,m=n("5530"),h=(n("d81d"),n("ac1f"),n("5319"),n("fb6a"),n("a15b"),n("38cf"),function(e){var t=e.timeZone||Intl.DateTimeFormat().resolvedOptions().timeZone,n="number"===typeof e.dateTime?e.dateTime:e.dateTime.toISOString();return{dateTime:n,timeZone:t}}),g=function(e){return Array.isArray(e)?e:[e]},v=function(e){return g(e).map((function(e){var t=["FREQ=".concat(e.frequency),"INTERVAL=".concat(e.interval||1)];return e.until&&t.push("UNTIL=".concat(e.until.toISOString().slice(0,10).replace(/-/g,""))),"RRULE:".concat(t.join(";"))}))},y=function(e){if(e)return{useDefault:!1,overrides:e}},b=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"primary",r=Object(m["a"])(Object(m["a"])({},t),{},{start:h(t.start),end:h(t.end),recurrence:v(t.repeat||[]),reminders:y(t.reminders)}),e.next=4,gapi.client.calendar.events.insert({calendarId:n,resource:r});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.calendar.events.list({calendarId:"primary",timeMin:(new Date).toISOString(),showDeleted:!1,singleEvents:!0,maxResults:10,orderBy:"startTime"});case 2:return t=e.sent,console.log(),e.abrupt("return",JSON.parse(t.body));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance().signIn();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance().isSignedIn.get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance().signOut();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=(n("a4d3"),n("e01a"),function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.calendar.calendarList.list();case 2:return e.abrupt("return",e.sent.result.items.map((function(e){return{summary:e.summary,id:e.id,description:e.description}})));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fluent-background"},[e._t("default"),n("canvas",{ref:"canvas"})],2)},L=[],O=(n("d3b7"),n("cfc3"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),"\nattribute vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n"),S="precision highp float;\nuniform float width;\nuniform float height;\nvec2 resolution = vec2(width, height);\n\nuniform float time;\n\nvoid main(){\n\tfloat strength = 0.4;\n\tfloat t = time/6.0;\n\n\tvec3 col = vec3(0);\n\tvec2 fC = gl_FragCoord.xy;\n\n  //Normalized pixel coordinates (from 0 to 1)\n  vec2 pos = fC/resolution.xy;\n\n  pos.y /= resolution.x/resolution.y;\n  pos = (pos) * 8.0;\n\n  for(float k = 1.0; k < 7.0; k+=1.0) {\n    pos.x += strength * sin(t + k * pos.y);\n    pos.y += strength * cos(t + k * pos.x);\n  }\n\n  //Time varying pixel colour\n  col = 0.5 + 0.5 * cos(vec3(pos.xy, 0.0));\n\n\t//Fragment colour\n\tgl_FragColor = vec4(col, 1.0) * vec4(0.9, 0.6, 0.9, 1.0);\n}\n",A={mounted:function(){var e=this,t=this.$refs.canvas;this.applyWindowSizes(t);var n=t.getContext("webgl");if(!n)throw new Error("Webgl is not supported");this.gl=n;var r=this.compileShader(O,this.gl.VERTEX_SHADER),a=this.compileShader(S,this.gl.FRAGMENT_SHADER),i=this.gl.createProgram();this.gl.attachShader(i,r),this.gl.attachShader(i,a),this.gl.linkProgram(i),this.gl.useProgram(i);var o=new Float32Array([-1,1,-1,-1,1,1,1,-1]),u=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,u),this.gl.bufferData(this.gl.ARRAY_BUFFER,o,this.gl.STATIC_DRAW);var c=this.getAttribLocation(i,"position");this.gl.enableVertexAttribArray(c),this.gl.vertexAttribPointer(c,2,this.gl.FLOAT,!1,8,0);var s=this.getUniformLocation(i,"time"),l=this.getUniformLocation(i,"width"),d=this.getUniformLocation(i,"height");this.gl.uniform1f(l,window.innerWidth),this.gl.uniform1f(d,window.innerHeight);var f,p=new Date,m=0,h=function t(){f=Date.now(),m+=(f-p)/1e3,p=f,e.gl.uniform1f(s,m),e.gl.drawArrays(e.gl.TRIANGLE_STRIP,0,4),requestAnimationFrame(t)};h()},methods:{applyWindowSizes:function(e){e.width=window.innerWidth,e.height=window.innerHeight},compileShader:function(e,t){var n=this.gl.createShader(t);if(this.gl.shaderSource(n,e),this.gl.compileShader(n),!this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS))throw"Shader compile failed with: "+this.gl.getShaderInfoLog(n);return n},getAttribLocation:function(e,t){var n=this.gl.getAttribLocation(e,t);if(-1===n)throw"Cannot find attribute "+t+".";return n},getUniformLocation:function(e,t){var n=this.gl.getUniformLocation(e,t);if(-1===n)throw"Cannot find uniform "+t+".";return n}}},R=A,T=(n("492a"),Object(d["a"])(R,k,L,!1,null,"7dcd70c8",null)),D=T.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._t("default")],2)},j=[],M=(n("e0ac"),{}),V=Object(d["a"])(M,I,j,!1,null,"7bee06e8",null),$=V.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"square square--animated"},[e._v(" Loading ")])},G=[],B=(n("469b"),{}),N=Object(d["a"])(B,F,G,!1,null,"178f345c",null),P=N.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MyCard",[n("div",{staticClass:"col"},[n("h1",[e._v("Welcome!")]),n("p",[e._v("This app allows you to create Google Calendar events using only keyboard.")]),n("div",{staticClass:"footer"},[n("MyButton",{attrs:{color:"#4285f4"},on:{click:e.login}},[e._v(" Login with Google ")])],1)])])},U=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"my-button",style:{background:e.color,"border-color":e.color},attrs:{disabled:e.disabled},on:{click:e.OnClick}},[e._t("default")],2)},q=[],W={props:{disabled:{type:Boolean,default:!1},color:{type:String,default:"#995dd1"}},methods:{OnClick:function(){this.$emit("click")}}},H=W,z=(n("b31d"),Object(d["a"])(H,Y,q,!1,null,"54ccae18",null)),J=z.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[e._t("default")],2)},X=[],Q=(n("fb81"),{}),ee=Object(d["a"])(Q,Z,X,!1,null,"10dc435a",null),te=ee.exports,ne={name:"LoginView",pageSubtitle:"Login",components:{MyButton:J,MyCard:te},methods:{login:function(){this.$emit("login")}}},re=ne,ae=Object(d["a"])(re,K,U,!1,null,null,null),ie=ae.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MyCard",[n("MyTabs",{attrs:{tabs:[{name:"old",text:"Legacy"},{name:"new",text:"New"}]},scopedSlots:e._u([{key:"old",fn:function(){return[n("LegacyCreateEvent")]},proxy:!0},{key:"new",fn:function(){return[n("NewCreateEvent")]},proxy:!0}]),model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}})],1)},ue=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-tabs"},[n("div",{staticClass:"my-tabs__tabs"},e._l(e.computedTabs,(function(t,r){return n("div",{key:t[e.textKey],staticClass:"my-tabs__tab",class:{"my-tabs__tab--active ":r===e.innerValue},on:{click:function(t){return e.onTabClick(r)}}},[e._v(" "+e._s(t[e.textKey])+" ")])})),0),n("div",{staticClass:"my-tabs__tab-content"},[e._t(e.activeTab[e.nameKey])],2)])},se=[],le=n("ade3"),de=(n("a9e3"),{props:{value:{type:Number,default:void 0},tabs:{type:Array,default:function(){return[]}},textKey:{type:String,default:"text"},nameKey:{type:String,default:"name"}},data:function(){return{innerValue:0}},computed:{computedTabs:function(){var e=this,t=function(t){var n;return n={},Object(le["a"])(n,e.textKey,t),Object(le["a"])(n,e.nameKey,t),n};return this.tabs.map((function(e){return"string"===typeof e?t(e):e}))},activeTab:function(){return this.tabs[this.innerValue]}},methods:{onTabClick:function(e){this.$emit("input",e),this.innerValue=e}},watch:{value:{handler:function(e){this.innerValue=e},immediate:!0}}}),fe=de,pe=(n("6911"),Object(d["a"])(fe,ce,se,!1,null,"09b5f8ac",null)),me=pe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col col--60"},[n("TextArea",{model:{value:e.textareaValue,callback:function(t){e.textareaValue=t},expression:"textareaValue"}})],1),n("div",{staticClass:"col col--40"},[n("div",[n("MyButton",{attrs:{disabled:e.IsDisabled},on:{click:e.ButtonClick}},[e._v(" Create events ")]),n("MyButton",{attrs:{color:"#543c6b"},on:{click:e.Logout}},[e._v("Log out")])],1),n("MyOptionsList",{attrs:{options:e.options,textKey:"summary",placeholder:"Select a calendar"},model:{value:e.currentCalendar,callback:function(t){e.currentCalendar=t},expression:"currentCalendar"}}),n("div",{staticClass:"instructions-wrapper"},[n("Instructions",[n("VueMarkdown",{attrs:{source:e.instruction}})],1)],1)],1)])},ge=[],ve=n("3835"),ye=(n("1276"),n("3ca3"),n("ddb0"),n("5d9b")),be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{domProps:{value:e.value},on:{input:e.OnInput}})},we=[],xe={name:"MyTextArea",props:{value:{type:String}},methods:{OnInput:function(e){this.$emit("input",e.target.value)}}},Ce=xe,Ee=(n("c026"),Object(d["a"])(Ce,be,we,!1,null,"27895e08",null)),_e=Ee.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select"},[n("select",{on:{change:e.onChange}},[e._l(e.options,(function(t,r){return n("option",{key:t[e.textKey]+r,domProps:{selected:t[e.valueKey]==e.value,value:t[e.valueKey]}},[e._v(" "+e._s(t[e.textKey])+" ")])})),n("option",{attrs:{selected:"",hidden:"",disabled:""}})],2),n("div",{staticClass:"select__arrow"},[n("svg",{staticClass:"svg-inline--fa fa-arrow-down fa-w-14",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-down",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"}})])]),e.value?e._e():n("div",{staticClass:"select__placeholder"},[e._v(" "+e._s(e.placeholder)+" ")])])},Le=[],Oe={props:{options:{type:Array,required:!0},placeholder:{type:String,default:"Select..."},value:{},textKey:{type:String,default:"text"},valueKey:{type:String,default:"id"}},methods:{onChange:function(e){this.$emit("input",e.target.value)}}},Se=Oe,Ae=(n("c0cc"),Object(d["a"])(Se,ke,Le,!1,null,"7b1c93cd",null)),Re=Ae.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"instructions"},[e._t("default")],2)},De=[],Ie=(n("283b"),{}),je=Object(d["a"])(Ie,Te,De,!1,null,null,null),Me=je.exports,Ve="# Instruction\n\nSelect calendar above\n\nWrite your calendar events in text area in following format and separate them using two line breaks:\n- TITLE\n- TIME[-TIME] DATE - second time is optional\n- DESCRIPTION\n- repeat: PERIOD INTERVAL UNTIL_DATE\n\n-----\n\n- TITLE - any string\n- TIME - time string in following format: hh:mm\n- [-TIME] - optional time string with \"-\" symbol before\n- DATE - date string in following format: dd.mm.yyyy\n- DESCRIPTION - any valid string, can be empty\n- PERIOD - one of 'SECONDLY', 'MINUTELY', 'HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'\n- INTERVAL - interval of PERIOD\n- UNTIL_DATE - date string until event will be repeated\n-----\n\n## Example\nLets prepare for your Grandma birthday\n\n```\nGrandma birthday\n00:00-23:59 29.10.1923\nDon't forget to make a present.\nrepeat: YEARLY 1\n\n\nGo to shop and buy some food\n19:00 28.10.2021\nBuy list: Milk, Cake and Meet\n\n\nCheck if favorite TV is available on market\n9:00-15:00 13.10.2021\nhttps://example.com/favorite-tv\nrepeat: Daily 1 25.10.2021\n\n\nBus to Grandma\n10:00 28.10.2021\nTicket for 221 bus on South Bus Station\n```",$e={name:"CreateEventView",pageSubtitle:"Create Event - Legacy",components:{TextArea:_e,MyButton:J,MyOptionsList:Re,Instructions:Me,VueMarkdown:ye["a"]},data:function(){return{textareaValue:"",currentCalendar:null,options:[]}},beforeCreate:function(){this.instruction=Ve},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:e.options=t.sent;case 3:case"end":return t.stop()}}),t)})))()},computed:{IsDisabled:function(){return""==this.textareaValue}},methods:{parseDate:function(e){var t=e.split("."),n=t[2],r=t[1],a=t[0];return new Date(n,r-1,a+1)},parseDateRow:function(e){var t=e.split(" "),n=Object(ve["a"])(t,2),r=n[0],a=n[1],i=r.split("-"),o=Object(ve["a"])(i,2),u=o[0],c=o[1];return{start:u,end:c||u,date:a||(new Date).toLocaleDateString("ru-RU")}},createDate:function(e,t){var n=e.split("."),r=n[2],a=n[1],i=n[0],o=t.split(":"),u=o[0],c=o[1];return new Date(r,a-1,i,u,c)},createRepeat:function(e){var t=e.replace("repeat: ",""),n=t.split(" "),r=Object(ve["a"])(n,3),a=r[0],i=r[1],o=r[2];return o?{frequency:a.toUpperCase(),interval:i||1,until:this.parseDate(o)}:{frequency:a.toUpperCase(),count:i||1}},createEvents:function(){var e=this,t=this.textareaValue.split("\n\n\n"),n=t.map((function(t){return e.createEvent(t)}));return n},createEvent:function(e){var t=e.split("\n");if(!t[0])throw new Error("Event name required");if(!t[1])throw new Error("Event date required");var n=this.parseDateRow(t[1]),r=n.start,a=n.end,i=n.date,o={summary:t[0],start:{dateTime:this.createDate(i,r)},end:{dateTime:this.createDate(i,a)},description:t[2]?t[2]:void 0,repeat:t[3]?this.createRepeat(t[3]):void 0};return o},ButtonClick:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.createEvents(),t.next=3,Promise.all(n.map(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",b(n,e.currentCalendar));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:r=t.sent,e.$toast.open("Events created!"),console.log(r);case 6:case"end":return t.stop()}}),t)})))()},Logout:function(){this.$emit("signout")}}},Fe=$e,Ge=(n("80d30"),Object(d["a"])(Fe,he,ge,!1,null,"16661d20",null)),Be=Ge.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col col--60"},[n("TextArea",{model:{value:e.textareaValue,callback:function(t){e.textareaValue=t},expression:"textareaValue"}})],1),n("div",{staticClass:"col col--40"},[n("div",[n("MyButton",{attrs:{disabled:e.IsDisabled},on:{click:e.ButtonClick}},[e._v(" Create events ")]),n("MyButton",{attrs:{color:"#543c6b"},on:{click:e.Logout}},[e._v("Log out")])],1),n("MyOptionsList",{attrs:{options:e.options,textKey:"summary",placeholder:"Select a calendar"},model:{value:e.currentCalendar,callback:function(t){e.currentCalendar=t},expression:"currentCalendar"}}),n("div",{staticClass:"instructions-wrapper"},[n("Instructions",[n("VueMarkdown",{attrs:{source:e.instruction}})],1)],1)],1)])},Pe=[],Ke='# Instruction\n\nSelect calendar above where event should be created.\n\n## Usage\n\nSimply write title in quotes, time and date. For example:\n```\n"Go to shop" 12:40 24.01.22\n```\n\n### Repeat\n- Repeat weekly.\n```\n"Go to shop" 12:40 24.1.22 repeat weekly\n```\n\n- Repeat until some date.\n```\n"Go to shop" 12:40 24.1.22 repeat weekly until 24.12.22\n```\n\n- Repeat each second week.\n```\n"Go to shop" 12:40 24.1.22 repeat weekly 2\n```\n\n\n### Description\n- Event description can be written with "note" or "description" keyword followed by string.\n```\n"Go to shop" 12:40 24.1.22 note "By milk"\n```\n\n```\n"Go to shop" 12:40 24.1.22 description "By milk"\n```\n\n### Formats\nAllowed time formats: `hh:mm`, `h:mm`, `hh:`.\n\nAllowed time period: `hh:mm - hh:mm`, `hh:mm-hh:mm`, `hh:mm hh:mm`.\n\nAllowed date formats: `dd.mm.yy`, `dd.mm.yyyy`, `dd.mm`.\n\n### Aliases\n\n- `tomorrow` - set tomorrow date.\n- `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday` - next week day.\n',Ue=(n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("5b81"),n("466d"),n("498a"),n("7db0"),n("caad"),n("00b4"),function(e){var t=new Date,n=t.getDay(),r=t.getDate(),a=e-n;return a<=0&&(a+=7),t.setDate(r+a),t}),Ye={tomorrow:function(){var e=new Date;return e.setDate(e.getDate()+1),e},today:function(){return new Date},sunday:function(){return Ue(0)},monday:function(){return Ue(1)},tuesday:function(){return Ue(2)},wednesday:function(){return Ue(3)},thursday:function(){return Ue(4)},friday:function(){return Ue(5)},saturday:function(){return Ue(6)}},qe=function(e){return new RegExp("(".concat(e,')(?=(?:[^"]|"[^"]*")*$)'),"g")},We=function(e){var t=e.replaceAll(qe("\\w*"),(function(e){return e.toLowerCase()}));return t=t.replaceAll(qe("today"),Ye.today().toLocaleDateString("ru")),t=t.replaceAll(qe("tomorrow"),Ye.tomorrow().toLocaleDateString("ru")),t=t.replaceAll(qe("monday"),Ye.monday().toLocaleDateString("ru")),t=t.replaceAll(qe("tuesday"),Ye.tuesday().toLocaleDateString("ru")),t=t.replaceAll(qe("wednesday"),Ye.wednesday().toLocaleDateString("ru")),t=t.replaceAll(qe("thursday"),Ye.thursday().toLocaleDateString("ru")),t=t.replaceAll(qe("friday"),Ye.friday().toLocaleDateString("ru")),t=t.replaceAll(qe("saturday"),Ye.saturday().toLocaleDateString("ru")),t=t.replaceAll(qe("sunday"),Ye.sunday().toLocaleDateString("ru")),t},He=function(e){var t=e.match(/"([\t-\r 0-9A-\[_a-z\|\xA0\u017F\u0430-\u044F\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u212A\u3000\uFEFF]|[,\.]|[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F])*"/i)||[],n=Object(ve["a"])(t,1),r=n[0];return r?r.replaceAll('"',""):null},ze=function(e){return e?2===e.length?2e3+Number(e):Number(e):(new Date).getFullYear()},Je=function(e,t){var n=e.split("."),r=ze(n[2]),a=n[1],i=n[0],o=t.split(":"),u=o[0],c=o[1]||0;return new Date(Number(r),Number(a)-1,Number(i),Number(u),Number(c))},Ze=function(e){var t=e.match(/(\w*\s)?((\d{1,2})\.(\d{1,2})(?:\.(\d{2,4})){0,1})/);if(t){var n=Object(ve["a"])(t,3),r=(n[0],n[1]),a=n[2];if("until"!==r.trim())return a}return Ye.today().toLocaleDateString("ru")},Xe=function(e){var t=e.match(/\d{1,2}:\d{0,2}/g),n=Ze(e);if(!t)return null;var r={dateTime:Je(n,t[0])},a=t[1]&&{dateTime:Je(n,t[1])};return{start:r,end:a||r}},Qe=["secondly","minutely","hourly","daily","weekly","monthly","yearly"],et=function(e){console.log(e);var t=e.toLowerCase().indexOf("repeat"),n=e.slice(t).toLowerCase().split(" "),r=n.find((function(e){return Qe.includes(e)}));if(!r)return null;var a=n.find((function(e){return/^\d+$/.test(e)})),i=n.find((function(e){return/(\d{1,2})\.(\d{1,2})(?:\.(\d{2,4})){0,1}/.test(e)}));return{frequency:r.toUpperCase(),interval:a,until:i&&Je(i,"00:00")}},tt=function(e){var t=e.match(/(note|description) ("(\w|\s)*")/)||[],n=t[2];return n?n.replaceAll('"',""):null},nt=function(e){var t=We(e);return console.log(t),Object(m["a"])(Object(m["a"])({summary:He(t)},Xe(t)),{},{repeat:et(t),description:tt(t)})},rt={name:"CreateEventView",pageSubtitle:"Create Event - Legacy",components:{TextArea:_e,MyButton:J,MyOptionsList:Re,Instructions:Me,VueMarkdown:ye["a"]},data:function(){return{textareaValue:"",currentCalendar:null,options:[]}},beforeCreate:function(){this.instruction=Ke},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:e.options=t.sent;case 3:case"end":return t.stop()}}),t)})))()},computed:{IsDisabled:function(){return""==this.textareaValue}},methods:{createEvents:function(){var e=this,t=this.textareaValue.split("\n"),n=t.map((function(t){return e.createEvent(t)}));return n},createEvent:function(e){return nt(e)},ButtonClick:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.createEvents(),console.log(n),t.next=4,Promise.all(n.map(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",b(n,e.currentCalendar));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:r=t.sent,e.$toast.open("Events created!"),console.log(r);case 7:case"end":return t.stop()}}),t)})))()},Logout:function(){this.$emit("signout")}}},at=rt,it=(n("4940"),Object(d["a"])(at,Ne,Pe,!1,null,"4e6a052e",null)),ot=it.exports,ut={name:"CreateEventView",pageSubtitle:"Create Event",components:{MyCard:te,MyTabs:me,LegacyCreateEvent:Be,NewCreateEvent:ot},data:function(){return{activeTab:1}}},ct=ut,st=(n("0766"),Object(d["a"])(ct,oe,ue,!1,null,"4e2e8ae6",null)),lt=st.exports,dt={name:"App",components:{GApiGuard:p,FluentBackground:D,MyContainer:$,MyLoader:P,LoginView:ie,CreateEventView:lt},data:function(){return{isSignedIn:!1}},mounted:function(){window.onerror=this.onError,window.onunhandledrejection=this.onError,r["a"].config.warnHandler=this.onError,r["a"].config.errorHandler=this.onError},methods:{onGApiLoaded:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:e.isSignedIn=t.sent;case 3:case"end":return t.stop()}}),t)})))()},login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,x();case 6:return t.next=8,C();case 8:e.isSignedIn=t.sent;case 9:case"end":return t.stop()}}),t)})))()},signOut:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,E();case 6:return t.next=8,C();case 8:e.isSignedIn=t.sent;case 9:case"end":return t.stop()}}),t)})))()},loadEvents:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,w();case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})))()},createSimpleEvent:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:b({summary:"Hello world!",start:{dateTime:new Date},end:{dateTime:new Date},repeat:{frequency:"WEEKLY",count:21}});case 1:case"end":return e.stop()}}),e)})))()},onError:function(e){this.$toast.open({message:"Something went wrong! Look into console to get more information.",type:"error"}),console.error(e)}}},ft=dt,pt=(n("5c0b"),Object(d["a"])(ft,a,i,!1,null,null,null)),mt=pt.exports,ht=n("15fd"),gt=n.n(ht),vt=n("b079"),yt=n.n(vt);n("4238");r["a"].config.productionTip=!1,r["a"].use(gt.a,{apiKey:"AIzaSyDPzLY6L36krINVPj-76dGFFKMX9w69au4",clientId:"804955345322-7vko1g67u1lmt317dqfchh24b2rn1d3d.apps.googleusercontent.com",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],scope:"https://www.googleapis.com/auth/calendar"}),r["a"].use(yt.a),new r["a"]({render:function(e){return e(mt)}}).$mount("#app"),r["a"].mixin({mounted:function(){document&&this.$options.pageTitle&&(document.title=this.$options.pageTitle),document&&this.$options.pageSubtitle&&(document.title="Calendar - ".concat(this.$options.pageSubtitle))}})},d7e6:function(e,t,n){},dbb0:function(e,t,n){},e0ac:function(e,t,n){"use strict";n("6a80")},ef92:function(e,t,n){},f9cc:function(e,t,n){"use strict";n("ef92")},fb81:function(e,t,n){"use strict";n("7ef2")},fdfd:function(e,t,n){}});
//# sourceMappingURL=app.87930bcd.js.map