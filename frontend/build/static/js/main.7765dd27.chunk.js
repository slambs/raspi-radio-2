(this["webpackJsonpraspi-radio-2"]=this["webpackJsonpraspi-radio-2"]||[]).push([[0],{41:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);n(18),n(19),n(40),n(41);var a=n(4),r=n(5),s=n(7),i=n(6),c=n(17),o=n(2),l=n(0),u=n.n(l),j=n(1),m=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={time:new Date},e}return Object(r.a)(n,[{key:"currentTime",value:function(){this.setState({time:new Date})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.currentTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"clockStyle",children:Object(j.jsx)("div",{id:"time",children:this.state.time.toLocaleTimeString()})})}}]),n}(l.Component),d=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{children:[Object(j.jsx)("a",{className:"navbarItem1",href:"/",children:"Clock"}),Object(j.jsx)("a",{className:"navbarItem2",href:"/Radio",children:"Radio"}),Object(j.jsx)("a",{className:"navbarItem3",href:"/Play",children:"?"})]})})}}]),n}(l.Component),h=d,p=n(12),b=[{name:"Galaxy 92 FM",src:"http://galaxy.live24.gr:80/galaxy9292"},{name:"Velvet 96.8",src:"https://metromedia.live24.gr/velvet968thess?ver=60799"},{name:"Classic Trito",src:"https://radiostreaming.ert.gr/ert-trito"},{name:"Radio Neptune",src:"http://icecast.infini.fr:8000/neptune"},{name:"Kids Radio",src:"https://stream.radiojar.com/64p6ktzntg0uv"},{name:"Swing FM",src:"http://swingfm.ice.infomaniak.ch/swingfm-128.mp3"},{name:"Jazz & Funk",src:"https://vip2.fastcast4u.com/proxy/sjtbhd?mp=/1"},{name:"Skai.gr",src:"https://skai.live24.gr/skai1003"},{name:"Alpha 98.9",src:"https://stream.radiojar.com/xcdg6yggzfeuv"},{name:"A100FM",src:"http://bestgreek.info:8104/1?1645384937128"},{name:"Art FM 90.6",src:"https://stream.webmonster.gr/artfm906"},{name:"Transistor 100.3",src:"http://netradio.live24.gr/tranzistor1003thess"}],O=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={sound:new p.Howl({src:["fake.mp3"]})},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"radioComponent",children:[Object(j.jsx)("ul",{className:"list-group radioStyle",children:b.map((function(t,n){return Object(j.jsx)("li",{id:t.name,className:"list-group-item radioButtonStyle list-group-item-secondary",onClick:e.handleRadio.bind(e,t),children:t.name},n)}))}),Object(j.jsx)(m,{})]})}},{key:"handleRadio",value:function(e){this.state.sound.stop(),this.state.sound=new p.Howl({src:[e.src],html5:!0}),this.state.sound.play()}},{key:"setToActive",value:function(){}}]),n}(l.Component),v=Object(j.jsx)("span",{children:"\u2103"}),f=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"tempStyle",children:[Object(j.jsxs)("h5",{children:["Inside: ",this.getInsideTemp()," ",v]}),Object(j.jsxs)("h5",{children:[" (Location) : ",this.getOutsideTemp()," ",v," "]})]})}},{key:"getInsideTemp",value:function(){return"-99"}},{key:"getOutsideTemp",value:function(){return"-99"}}]),n}(l.PureComponent),x=f,g=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)(c.a,{children:Object(j.jsxs)("div",{className:"radioWrapper",children:[Object(j.jsx)(h,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/radio",element:Object(j.jsx)(O,{})}),Object(j.jsx)(o.a,{path:"/*",element:Object(j.jsx)("div",{className:"largeClock",children:Object(j.jsx)(m,{})})})]}),Object(j.jsx)(x,{})]})})}}]),n}(l.Component),y=n(16);n.n(y).a.render(Object(j.jsx)(u.a.Fragment,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7765dd27.chunk.js.map