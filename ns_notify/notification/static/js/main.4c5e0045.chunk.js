(this.webpackJsonpnotify=this.webpackJsonpnotify||[]).push([[0],{46:function(t,i,n){},52:function(t,i,n){"use strict";n.r(i);var a=n(0),e=n.n(a),o=n(8),s=n.n(o),c=(n(46),n(34)),r=n(27),h=n(28),d=n(36),f=n(35),u=n(75),l=n(74),v=n(15),j=function(t){Object(d.a)(n,t);var i=Object(f.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=i.call(this,t)).handleClose=function(t,i){var n=a.state.notifications;n[0].show=!1,a.setState({notifications:n}),setTimeout((function(){n.shift(),a.setState({notifications:n})}),300)},a.state={notifications:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.addEventListener("message",(function(i){switch(i.data.action){case"display":var n={show:!0,type:i.data.type,vertical:i.data.vertical,horizontal:i.data.horizontal,duration:i.data.duration,variant:i.data.variant,message:i.data.message};t.setState({notifications:[].concat(Object(c.a)(t.state.notifications),[n])})}}))}},{key:"render",value:function(){return Object(v.jsx)("div",{children:this.state.notifications[0]&&Object(v.jsx)(u.a,{anchorOrigin:{vertical:this.state.notifications[0].vertical,horizontal:this.state.notifications[0].horizontal},open:this.state.notifications[0].show,autoHideDuration:this.state.notifications[0].duration,onClose:this.handleClose,children:Object(v.jsx)(l.a,{severity:this.state.notifications[0].type,variant:this.state.notifications[0].variant,children:this.state.notifications[0].message})})})}}]),n}(a.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(i){var n=i.getCLS,a=i.getFID,e=i.getFCP,o=i.getLCP,s=i.getTTFB;n(t),a(t),e(t),o(t),s(t)}))};s.a.render(Object(v.jsx)(e.a.StrictMode,{children:Object(v.jsx)(j,{})}),document.getElementById("root")),b()}},[[52,1,2]]]);
//# sourceMappingURL=main.4c5e0045.chunk.js.map