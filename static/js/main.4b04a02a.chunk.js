(this.webpackJsonpreact_calendar=this.webpackJsonpreact_calendar||[]).push([[0],{54:function(e,n,t){e.exports=t(66)},59:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),o=t.n(c),u=(t(59),t(9)),i=t(6),l=t(7),s=t(8),m=t.n(s),d=t(12),f=t(72),p=t(73),v=(t(30),t(40)),E=t.n(v),b=t(74),h=t(76),g=t(71),y=t(75),w=t(50),j=t(77),x=t(78),O=t(53),S="https://evening-springs-90377.herokuapp.com";function k(e){return C.apply(this,arguments)}function C(){return(C=Object(d.a)(m.a.mark((function e(n){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(O.a)({},n))},e.next=3,fetch("".concat(S,"/addEvent"),t);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return N.apply(this,arguments)}function N(){return(N=Object(d.a)(m.a.mark((function e(){var n,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S,"/getEvents"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(m.a.mark((function e(n){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"DELETE"},e.next=3,fetch("".concat(S,"/deleteEvent/").concat(n),t);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return F.apply(this,arguments)}function F(){return(F=Object(d.a)(m.a.mark((function e(n){var t,a,r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n._id,a=n.attendee,r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.next=4,fetch("".concat(S,"/addAttendee/").concat(t),r);case 4:return c=e.sent,e.next=7,c.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(d.a)(m.a.mark((function e(n){var t,a,r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n._id,a=n.attendee,r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.next=4,fetch("".concat(S,"/updateResponseStatus/").concat(t),r);case 4:return c=e.sent,e.next=7,c.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return M.apply(this,arguments)}function M(){return(M=Object(d.a)(m.a.mark((function e(n){var t,a,r,c,o,u,i,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n._id,a=n.newDescription,r=n.newSummary,c=n.newStartDate,o=n.newEndDate,u={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({newDescription:a,newSummary:r,newStartDate:c,newEndDate:o})},e.next=4,fetch("".concat(S,"/modifyEvent/").concat(t),u);case 4:return i=e.sent,e.next=7,i.json();case 7:return l=e.sent,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){var e=Object(i.a)([""]);return _=function(){return e},e}function z(){var e=Object(i.a)(["\n    margin-bottom: 2px;\n"]);return z=function(){return e},e}function L(){var e=Object(i.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n"]);return L=function(){return e},e}function R(){var e=Object(i.a)(["\n    background: #6c757d;\n    padding: 5px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n"]);return R=function(){return e},e}function P(){var e=Object(i.a)(["\n    width: 70%;\n"]);return P=function(){return e},e}function H(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n"]);return H=function(){return e},e}function q(){var e=Object(i.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n"]);return q=function(){return e},e}function B(){var e=Object(i.a)([""]);return B=function(){return e},e}function U(){var e=Object(i.a)(["\n    width: 100%;\n    border-top: 2px solid #ffffff;\n    margin-top: 8px;\n    margin-bottom: 8px;\n"]);return U=function(){return e},e}function V(){var e=Object(i.a)(["\n    color: white;\n    max-width: 400px;\n    background: #23232b;\n    padding: 20px;\n    border-radius = 10px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n"]);return V=function(){return e},e}function W(){var e=Object(i.a)(["\n    color: white;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 20px;\n"]);return W=function(){return e},e}var $=l.a.div(W()),K=l.a.div(V()),Q=l.a.hr(U()),X=l.a.div(B()),Z=l.a.div(q()),ee=l.a.div(H()),ne=l.a.div(P()),te=l.a.div(R()),ae=l.a.div(L()),re=l.a.p(z()),ce=l.a.div(_()),oe=function(e){var n=e.user,t=n.name,c=n.email,o=e.event,i=o.summary,l=o.created,s=o.updated,f=o.start,p=o.end,v=o.description,E=(o.color,o._id),b=e.event,h=b.creator,O=b.attendees,S=Object(a.useState)(!1),k=Object(u.a)(S,2),C=k[0],D=k[1],N=Object(a.useState)(i),T=Object(u.a)(N,2),F=T[0],Y=T[1],M=Object(a.useState)(v),_=Object(u.a)(M,2),z=_[0],L=_[1],R=Object(a.useState)("".concat(f.slice(0,10))),P=Object(u.a)(R,2),H=P[0],q=P[1],B=Object(a.useState)("".concat(p.slice(0,10))),U=Object(u.a)(B,2),V=U[0],W=U[1],oe=function(){var n=Object(d.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,G({_id:E,newSummary:F,newDescription:z,newStartDate:H,newEndDate:V});case 2:e.getEvents();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ue=function(){var n=Object(d.a)(m.a.mark((function n(a,r){var o;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={id:1,email:c,displayName:t,organizer:!1,self:!0,responseStatus:a},n.next=3,J({_id:r,attendee:o});case 3:if(n.sent){n.next=7;break}return n.next=7,I({_id:r,attendee:o});case 7:e.getEvents();case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return r.a.createElement($,null,r.a.createElement(K,{background:!1},r.a.createElement(X,null,!0===C?r.a.createElement(y.a.Group,{as:w.a,controlId:"newSumarry"},r.a.createElement(y.a.Label,null,"Summary"),r.a.createElement(y.a.Control,{required:!0,placeholder:"Summary",value:F,onChange:function(e){return Y(e.target.value)}})):r.a.createElement("h2",null,i),c===h.email&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{trigger:"click",placement:"bottom",rootClose:!0,overlay:r.a.createElement(x.a,{id:"popover-positioned-bottom"},r.a.createElement(x.a.Title,{as:"h3"},"Are you sure?"),r.a.createElement(x.a.Content,null,r.a.createElement(g.a,{variant:"danger",onClick:Object(d.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A(E);case 2:e.getEvents();case 3:case"end":return n.stop()}}),n)})))},"YES")))},r.a.createElement(g.a,{variant:"danger"},"DELETE"))," "),c===h.email&&r.a.createElement(g.a,{variant:"secondary",onClick:function(){D(!0)}},"MODIFY"),!0===C&&r.a.createElement(g.a,{variant:"success",onClick:function(){D(!1),oe()}},"SAVE")),r.a.createElement(Q,null),r.a.createElement(Z,null,r.a.createElement("h3",null,"Creator"),r.a.createElement(te,null,r.a.createElement(re,null,h.displayName),r.a.createElement(re,null,h.email))),r.a.createElement(Q,null),r.a.createElement(ee,null,!0===C?r.a.createElement("div",null,r.a.createElement("label",null,"New Start Date"),r.a.createElement("br",null),r.a.createElement("input",{type:"date",onChange:function(e){return q(e.target.value)},value:H})):r.a.createElement(re,null,"Start: ",f.slice(0,10)),!0===C?r.a.createElement("div",null,r.a.createElement("label",null,"New End Date"),r.a.createElement("br",null),r.a.createElement("input",{type:"date",min:H,onChange:function(e){return W(e.target.value)},value:V})):r.a.createElement(re,null,"End: ",p.slice(0,10)),r.a.createElement(re,null,"created: ",l.slice(0,10)),r.a.createElement(re,null,"Updated: ",s.slice(0,10))),r.a.createElement(Q,null),r.a.createElement(ne,null,r.a.createElement("h3",null,"Description"),!0===C?r.a.createElement(y.a.Group,{as:w.a,controlId:"newDescription"},r.a.createElement(y.a.Control,{required:!0,placeholder:"Description",value:z,onChange:function(e){return L(e.target.value)}})):r.a.createElement(re,null,v)),r.a.createElement(Q,null),r.a.createElement("h3",null,"Attendees"),r.a.createElement(ae,null,O.map((function(e){return r.a.createElement(te,{key:"".concat(e.displayName,"-").concat(e.email)},r.a.createElement(re,null,e.displayName),r.a.createElement(re,null,e.email),r.a.createElement(re,null,"Response:"," ",e.responseStatus?"Positive":null===e.responseStatus?"N/a":"Negative"))}))),r.a.createElement(Q,null),r.a.createElement(ce,null,r.a.createElement("h3",null,"Attendance"),r.a.createElement(g.a,{variant:"success",onClick:function(){ue(!0,E)}},"Yes")," ",r.a.createElement(g.a,{variant:"secondary",onClick:function(){ue(null,E)}},"N/a")," ",r.a.createElement(g.a,{variant:"danger",onClick:function(){ue(!1,E)}},"No")," ")))};function ue(){var e=Object(i.a)(["\n    color: white;\n    max-width: 400px;\n    background: #23232b;\n    padding: 20px;\n    border-radius = 10px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n"]);return ue=function(){return e},e}function ie(){var e=Object(i.a)(["\n    color: white;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 20px;\n"]);return ie=function(){return e},e}var le=l.a.div(ie()),se=l.a.div(ue()),me=function(e){var n=e.year,t=e.month,c=e.day;t=t<10?"0"+t:t,c=c<10?"0"+c:c;var o="".concat(n,"-").concat(t,"-").concat(c),i=Object(a.useState)(""),l=Object(u.a)(i,2),s=l[0],f=l[1],p=Object(a.useState)(""),v=Object(u.a)(p,2),E=v[0],b=v[1],h=Object(a.useState)(""),j=Object(u.a)(h,2),x=j[0],O=j[1],S=Object(a.useState)(new Date(o)),C=Object(u.a)(S,2),D=C[0],N=C[1],A=e.user,T=A.name,I={id:10,email:A.email,displayName:T,self:!0},F=function(){var n=Object(d.a)(m.a.mark((function n(t){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,k({summary:s,creator:I,color:E,description:x,end:D,start:new Date(o)});case 3:e.getEvents();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(le,null,r.a.createElement(se,null,r.a.createElement("h1",null,"Create New Event"),r.a.createElement(y.a,{onSubmit:F},r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Group,{as:w.a,controlId:"formGridEmail"},r.a.createElement(y.a.Label,null,"Summary"),r.a.createElement(y.a.Control,{required:!0,placeholder:"Evento 2",onChange:function(e){return f(e.target.value)}})),r.a.createElement(y.a.Group,{as:w.a,controlId:"formGridPassword"},r.a.createElement(y.a.Label,null,"Color"),r.a.createElement(y.a.Control,{placeholder:"#FF00FF",onChange:function(e){return b(e.target.value)}}))),r.a.createElement(y.a.Group,{controlId:"formGridAddress1"},r.a.createElement(y.a.Label,null,"Description"),r.a.createElement(y.a.Control,{required:!0,placeholder:"Viernes de la jungla",onChange:function(e){return O(e.target.value)}})),r.a.createElement(y.a.Group,{controlId:"formGridAddress2"},r.a.createElement(y.a.Label,null,"End Date"),r.a.createElement("br",null),r.a.createElement("input",{type:"date",min:o,value:o,onChange:function(e){return N(e.target.value)}})),r.a.createElement(g.a,{variant:"primary",type:"submit"},"Submit"))))};function de(){var e=Object(i.a)(["\n    width: 15%;\n    height: 50%;\n    background: ",";\n"]);return de=function(){return e},e}function fe(){var e=Object(i.a)(["\n    width: 100%;\n    height: 30%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return fe=function(){return e},e}function pe(){var e=Object(i.a)(["\n    width: 100%;\n    height: 70%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return pe=function(){return e},e}function ve(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-sizing: border-box;\n    border: 1px solid transparent;\n    &:hover {\n        border: 1px solid white;\n        cursor: pointer;\n        backdrop-filter: brightness(1.6);\n    }\n"]);return ve=function(){return e},e}var Ee=l.a.div(ve()),be=l.a.div(pe()),he=l.a.div(fe()),ge=l.a.div(de(),(function(e){return e.color||"red"})),ye=["January","February","March","April","May","June","July","August","September","October","November","December"];function we(e){var n=e.split("-"),t=n[2].slice(0,2);return n[2]=t,e=n.map((function(e){return parseInt(e)}))}var je=function(e){var n=e.year,t=e.month,c=e.day,o=e.TODAY,i=Object(a.useState)(!1),l=Object(u.a)(i,2),s=l[0],m=l[1],d=e.allEvents,f=function(){return m(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,{today:"".concat(n,"-").concat(t,"-").concat(c)===o,onClick:function(){return m(!0)}},r.a.createElement(be,null,r.a.createElement("span",null,c||"")),c&&r.a.createElement(he,null,d.map((function(e){var a=we(e.start),o=we(e.end);return n>=a[0]&&n<=o[0]&&t>=a[1]&&t<=o[1]&&c+40*t>=a[2]+40*a[1]&&c+40*t<=o[2]+40*o[1]?r.a.createElement(ge,{key:e._id,color:e.color}):""})))),c&&r.a.createElement(b.a,{show:s,onHide:f,size:"lg",dialogClassName:" public-profile-modal-class",className:"special_modal"},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,c,"-",ye[t-1])),r.a.createElement(b.a.Body,null,r.a.createElement(h.a,null,d.map((function(a){var o=we(a.start),u=we(a.end);return n>=o[0]&&n<=u[0]&&t>=o[1]&&t<=u[1]&&c+40*t>=o[2]+40*o[1]&&c+40*t<=u[2]+40*u[1]?r.a.createElement(h.a.Item,{key:a._id},r.a.createElement(oe,{user:e.user,event:a,getEvents:e.getEvents})):""})),r.a.createElement(h.a.Item,null,r.a.createElement(me,{year:n,month:t,day:c,getEvents:e.getEvents,user:e.user})))),r.a.createElement(b.a.Footer,null,r.a.createElement(g.a,{variant:"secondary",onClick:f},"Cancel"))))};function xe(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-sizing: border-box;\n    border: 1px solid transparent;\n    background: ",";\n    &:hover {\n        border: 1px solid white;\n        cursor: pointer;\n    }\n"]);return xe=function(){return e},e}function Oe(){var e=Object(i.a)(["\n    height: 80%;\n    width: 80%;\n    background: #222331;\n    color: white;\n    display: grid;\n    grid-template-columns: auto auto auto auto auto auto auto;\n    grid-template-rows: auto auto auto auto auto auto;\n"]);return Oe=function(){return e},e}function Se(){var e=Object(i.a)(["\n    width: 8%;\n    cursor: pointer;\n    transition-property: -moz-filter, -ms-filter, -o-filter, -webkit-filter,\n        filter;\n    transition-duration: 0.4s;\n    ",";\n    &:hover {\n        filter: brightness(1.7);\n    }\n"]);return Se=function(){return e},e}function ke(){var e=Object(i.a)(["\n    width: 100%;\n    margin-bottom: 2vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n"]);return ke=function(){return e},e}function Ce(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"]);return Ce=function(){return e},e}function De(){var e=Object(i.a)(["\n    width: 80%;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n"]);return De=function(){return e},e}var Ne=l.a.div(De()),Ae=l.a.div(Ce()),Te=l.a.div(ke()),Ie=l.a.img(Se(),(function(e){return e.previous?"transform:rotate(180deg)":""})),Fe=l.a.div(Oe()),Je=l.a.div(xe(),(function(e){return!0===e.today?"#296d98":""})),Ye=new Date,Ge=["January","February","March","April","May","June","July","August","September","October","November","December"],Me=Ye.getFullYear(),_e=Ye.getMonth()+1,ze="".concat(Me,"-").concat(_e,"-").concat(Ye.getDate());function Le(e,n){var t=[];for(var a=function(){var t=E()("".concat(e,"-").concat(n),"YYYY-MM").startOf("month").format("d");return Number(t)}(),r=Number(E()("".concat(e,"-").concat(n),"YYYY-MM").daysInMonth()),c=0;c<35;c++)c<a||c-a+1>r?t.push(""):t.push(c-a+1);return t}var Re=function(e){var n=Object(a.useState)(Le()),t=Object(u.a)(n,2),c=t[0],o=t[1],i=Object(a.useState)([]),l=Object(u.a)(i,2),s=l[0],v=l[1],b=Object(a.useState)(!1),h=Object(u.a)(b,2),g=h[0],y=h[1],w=Object(a.useState)(!0),j=Object(u.a)(w,2),x=j[0],O=j[1];function S(){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:n=e.sent,v(n),y(!1),O(!1),console.log("GETTING DATA FROM CALENDAR"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),y(!0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}Object(a.useEffect)((function(){o(Le(Me,_e)),S()}),[]);var C=E.a.weekdaysShort();return r.a.createElement(Ne,null,x&&r.a.createElement(f.a,{key:"fetching",variant:"warning"},r.a.createElement(Ae,null,r.a.createElement("h2",null,"Fetching Data"),r.a.createElement(p.a,{animation:"grow",size:"sm"}),r.a.createElement(p.a,{animation:"grow",size:"sm"}),r.a.createElement(p.a,{animation:"grow",size:"sm"}))),g&&r.a.createElement(f.a,{variant:"danger",onClose:function(){return y(!1)},dismissible:!0},r.a.createElement(f.a.Heading,null,"API ERROR"),r.a.createElement("p",null,"Failed to connect to api")),r.a.createElement(Te,null,r.a.createElement(Ie,{onClick:function(){(_e-=1)<=0&&(Me--,_e=12),o(Le(Me,_e))},previous:!0,src:"https://image.flaticon.com/icons/svg/137/137517.svg"}),r.a.createElement("h1",null,Ge[_e-1],"-",Me),r.a.createElement(Ie,{onClick:function(){(_e+=1)>12&&(Me++,_e=1),o(Le(Me,_e))},src:"https://image.flaticon.com/icons/svg/137/137517.svg"})),r.a.createElement(Fe,null,C.map((function(e){return r.a.createElement(Je,{key:e},e)})),c.map((function(n,t){return r.a.createElement(je,{user:e.user,year:Me,month:_e,day:n,TODAY:ze,allEvents:s,getEvents:S,key:n||-1*t})}))))};function Pe(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return Pe=function(){return e},e}function He(){var e=Object(i.a)(["\n    height: 100vh;\n    width: 100vw;\n    color: white;\n    background: #222331;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return He=function(){return e},e}var qe=l.a.div(He()),Be=l.a.div(Pe()),Ue="",Ve="",We=function(e){return r.a.createElement(qe,null,r.a.createElement(Be,null,"Name:",r.a.createElement("input",{type:"text",name:"name",onChange:function(e){Ue=e.target.value}}),"Email:",r.a.createElement("input",{type:"text",name:"Email",onChange:function(e){Ve=e.target.value}}),r.a.createElement("button",{type:"submit",value:"Submit",onClick:function(){localStorage.setItem("user",JSON.stringify({name:Ue,email:Ve})),e.setUser({name:Ue,email:Ve})}},"Submit")))};function $e(){var e=Object(i.a)(["\n    min-height: 100vh;\n    background: #222331;\n    color: white;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]);return $e=function(){return e},e}var Ke=l.a.div($e());var Qe=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("user"))),n=Object(u.a)(e,2),t=n[0],c=n[1];return t?r.a.createElement(Ke,null,r.a.createElement(Re,{user:t})):r.a.createElement(We,{setUser:c})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Xe(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}o.a.render(r.a.createElement(Qe,null),document.getElementById("root")),Xe(),Xe()}},[[54,1,2]]]);
//# sourceMappingURL=main.4b04a02a.chunk.js.map