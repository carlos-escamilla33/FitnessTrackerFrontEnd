(this.webpackJsonpfitnesstrackerfrontend=this.webpackJsonpfitnesstrackerfrontend||[]).push([[0],{72:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(11),r=n.n(c),a=n(19),s=n(9),o=n.n(s),i=n(14),u=n(10),j=n(0),l=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,c,r,a,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,c=t.method,r=t.token,a=t.body,e.prev=1,s={method:c?c.toUpperCase():"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},r&&(s.headers.Authorization="Bearer ".concat(r)),e.next=6,fetch("".concat("https://fitnesstrac-kr.herokuapp.com/api/").concat(n),s);case 6:return i=e.sent,e.next=9,i.json();case 9:if(!(u=e.sent).error){e.next=12;break}throw u.error;case 12:return e.abrupt("return",u);case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),b=n(2),d=Object(j.createContext)(),O=function(e){var t=e.children,n=Object(j.useState)(""),c=Object(u.a)(n,2),r=c[0],a=c[1],s=Object(j.useState)(""),O=Object(u.a)(s,2),h=O[0],x=O[1],p=Object(j.useState)([]),f=Object(u.a)(p,2),v=f[0],m=f[1],g=(Object(j.useRef)(!0),function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({url:"/routines"});case 3:t=e.sent,console.log(t),t&&m(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}());return Object(j.useEffect)((function(){g()}),[]),Object(b.jsx)(d.Provider,{value:{user:r,setUser:a,token:h,setToken:x,routines:v,setRoutines:m,publicRoutines:g},children:t})},h=n(13),x=n(125),p=n(116),f=(n(72),function(){var e=Object(j.useContext)(d),t=e.setToken,n=e.setUser,c=Object(j.useState)(""),r=Object(u.a)(c,2),s=r[0],O=r[1],f=Object(j.useState)(""),v=Object(u.a)(f,2),m=v[0],g=v[1],k=Object(h.f)(),y=function(){var e=Object(i.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({url:"/users/login",method:"POST",body:{username:s,password:m}});case 3:c=e.sent,console.log(c),c&&(n(s),t(c.token),c.token&&k.push("/users/me")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(),O(""),g("")},children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)("div",{children:Object(b.jsx)(x.a,{label:"username",id:"outlined-basic",variant:"outlined",value:s,onChange:function(e){O(e.target.value)},type:"text"})}),Object(b.jsx)("div",{children:Object(b.jsx)(x.a,{label:"password",id:"outlined-basic",variant:"outlined",value:m,onChange:function(e){g(e.target.value)},type:"password"})}),Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{color:"primary",variant:"contained",type:"submit",children:"Submit"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Dont have an account? Register down below"}),Object(b.jsx)(p.a,{component:a.b,to:"/users/register",color:"primary",variant:"contained",type:"submit",children:"Register"})]})]})})}),v=(n(82),function(){var e=Object(j.useContext)(d).setToken,t=Object(j.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],a=Object(j.useState)(""),s=Object(u.a)(a,2),O=s[0],h=s[1],f=function(){var t=Object(i.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l({url:"/users/register",method:"POST",body:{username:c,password:O}});case 3:n=t.sent,console.log(n),n&&(e(n.data.token),n.data.token&&e("")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(),r(""),h("")},children:[Object(b.jsx)("h3",{children:"Register Page"}),Object(b.jsx)("div",{children:Object(b.jsx)(x.a,{label:"username",id:"outlined-basic",variant:"outlined",value:c,onChange:function(e){r(e.target.value)},type:"text"})}),Object(b.jsx)("div",{children:Object(b.jsx)(x.a,{label:"password",id:"outlined-basic",variant:"outlined",value:O,onChange:function(e){h(e.target.value)},type:"password"})}),Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{color:"primary",variant:"contained",type:"submit",children:"Submit"})})]})})}),m=function(){var e=Object(j.useContext)(d),t=e.token,n=e.user,c=function(){var e=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({url:"/users/me",token:t});case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){c()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Welcome"}),Object(b.jsx)("h3",{children:n})]})},g=(n(83),n(127)),k=n(117),y=n(118),w=n(119),S=n(38),C=function(){var e=Object(j.useContext)(d),t=e.token,n=e.setToken,c=e.setUser;return Object(b.jsx)(g.a,{sx:{flexGrow:1},children:Object(b.jsx)(k.a,{style:{background:"black"},position:"static",children:Object(b.jsx)(y.a,{maxWidth:"lg",children:Object(b.jsxs)(w.a,{className:"menuItems",children:[Object(b.jsx)(S.a,{style:{color:"#FFBF00"},variant:"h4",component:"div",sx:{flexGrow:1},children:"FitnessTracker"}),Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{component:a.b,to:"/",color:"inherit",children:"Home"})}),Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{component:a.b,to:"/routines",color:"inherit",children:"Routines"})}),Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{component:a.b,to:"/activities",color:"inherit",children:"Activities"})}),Object(b.jsx)("div",{children:t.length>1?Object(b.jsx)(p.a,{onClick:function(){n(""),c("")},component:a.b,to:"/",color:"inherit",children:"Logout"}):Object(b.jsx)(p.a,{component:a.b,to:"/users/login",color:"inherit",children:"Login/Register"})})]})})})})},F=n.p+"static/media/workoutCouple.4868c113.jpeg",R=(n(84),function(){var e=Object(j.useContext)(d),t=e.token,n=e.user;Object(h.f)();return console.log("------\x3eTOKEN",t),console.log("------\x3eUSER",n),Object(b.jsx)("div",{className:"imgbox",children:Object(b.jsx)("img",{src:F,className:"center-fit"})})}),E=n(120),T=n(128),P=function(){var e=Object(j.useContext)(d),t=e.token,n=e.publicRoutines,c=Object(j.useState)(""),r=Object(u.a)(c,2),a=r[0],s=r[1],O=Object(j.useState)(""),h=Object(u.a)(O,2),f=h[0],v=h[1],m=Object(j.useState)(!0),g=Object(u.a)(m,2),k=g[0],w=g[1],C=function(){var e=Object(i.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({url:"/routines",method:"POST",token:t,body:{name:a,goal:f,isPublic:k}});case 3:(n=e.sent)&&console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){F&&n()}),[]);var F=function(e){e.preventDefault(),C(),s(""),v(""),w(""),n()};return Object(b.jsx)(b.Fragment,{children:t?Object(b.jsxs)(y.a,{container:"true",justify:"center",align:"center",bottomgutter:"true",children:[Object(b.jsx)(S.a,{variant:"h3",children:" Workout Routines"}),Object(b.jsx)("br",{}),Object(b.jsx)(S.a,{variant:"h5",children:"Add your workout routine below"}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:F,children:[Object(b.jsx)(x.a,{label:"workout name",id:"margin-normal",margin:"normal",onChange:function(e){s(e.target.value)},value:a}),Object(b.jsx)("br",{}),Object(b.jsx)(x.a,{label:"describe your goal",id:"margin-normal",margin:"normal",onChange:function(e){v(e.target.value)},value:f}),Object(b.jsx)("br",{}),Object(b.jsx)(E.a,{label:"Make Routine Public",control:Object(b.jsx)(T.a,{checked:k,onChange:function(e){w(e.target.checked)},name:"public",inputProps:{"aria-label":"secondary checkbox"}})}),Object(b.jsx)("div",{children:Object(b.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",children:"Submit"})})]})]}):null})},N=n(121),D=n(122),U=n(123),A=n(124),L=function(){var e=Object(j.useContext)(d),t=(e.name,e.goal,e.isPublic,e.token),n=(e.setRoutines,e.routines),c=e.user,r=e.publicRoutines,a=function(){var e=Object(i.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({url:"/routines/".concat(n),method:"DELETE",token:t});case 3:return c=e.sent,e.next=6,r();case 6:c&&console.log(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:n.reverse().map((function(e){return Object(b.jsx)(N.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsx)("div",{children:Object(b.jsxs)(D.a,{children:[Object(b.jsx)(U.a,{title:e.name,variant:"h1",align:"center",gutterbottom:"true"}),Object(b.jsxs)(A.a,{align:"center",children:[Object(b.jsx)(S.a,{variant:"overline",children:e.creatorName}),Object(b.jsx)(S.a,{variant:"body2",color:"textSecondary",gutterbottom:"true",children:e.goal})]}),Object(b.jsxs)(y.a,{container:"true",justify:"center",align:"center",children:[e.creatorName===c&&t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p.a,{color:"inherit",size:"small",children:"Edit"}),Object(b.jsx)(p.a,{color:"secondary",size:"small",onClick:function(){return a(e.id)},children:"Delete"})]}):null,Object(b.jsx)(p.a,{color:"primary",children:"View Activities"})]})]})})},e.id)}))})},z=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(y.a,{children:[Object(b.jsx)(P,{}),Object(b.jsx)(N.a,{container:!0,spacing:3,children:Object(b.jsx)(L,{})})]})})},B=(n(85),function(){var e=Object(j.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({url:"/activities"});case 3:t=e.sent,console.log(t),t&&c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){r()}),[]),Object(b.jsx)(y.a,{children:Object(b.jsx)(N.a,{container:!0,spacing:3,children:n.map((function(e){return Object(b.jsx)(N.a,{item:!0,xs:12,md:6,lg:4,children:Object(b.jsx)("div",{children:Object(b.jsxs)(D.a,{children:[Object(b.jsx)(U.a,{title:e.name}),Object(b.jsx)(A.a,{children:Object(b.jsx)(S.a,{variant:"body2",color:"textSecondary",children:e.description})})]})})},e.id)}))})})}),G=(n(86),function(){var e=Object(j.useContext)(d).token,t=Object(h.g)().username,n=Object(j.useState)([]),c=Object(u.a)(n,2),r=c[0],a=c[1],s=function(){var n=Object(i.a)(o.a.mark((function n(){var c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l({url:"/users/".concat(t,"/routines"),token:e});case 3:(c=n.sent)&&a(c),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return Object(j.useEffect)((function(){s()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"My personal routines"}),r.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.creatorName}),Object(b.jsx)("p",{children:e.name}),Object(b.jsx)("p",{children:e.goal}),Object(b.jsx)("p",{children:e.activity})]})}))]})}),J=(n(87),function(){return Object(b.jsx)("div",{children:Object(b.jsx)("footer",{children:"Footer"})})}),W=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{}),Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{exact:!0,path:"/",children:Object(b.jsx)(R,{})}),Object(b.jsx)(h.a,{path:"/users/login",children:Object(b.jsx)(f,{})}),Object(b.jsx)(h.a,{path:"/users/register",children:Object(b.jsx)(v,{})}),Object(b.jsx)(h.a,{path:"/users/me",children:Object(b.jsx)(m,{})}),Object(b.jsx)(h.a,{path:"/users/:username/routines",children:Object(b.jsx)(G,{})}),Object(b.jsx)(h.a,{path:"/routines",children:Object(b.jsx)(z,{})}),Object(b.jsx)(h.a,{path:"/activities",children:Object(b.jsx)(B,{})})]}),Object(b.jsx)(J,{})]})};r.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(O,{children:Object(b.jsx)(W,{})})}),document.getElementById("app"))}},[[88,1,2]]]);
//# sourceMappingURL=main.88f07bdd.chunk.js.map