(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(e,t,n){e.exports={general:"Section_general__3Rjgu"}},12:function(e,t,n){e.exports={notification:"Notification_notification__KpN-3"}},19:function(e,t,n){},2:function(e,t,n){e.exports={p:"Statistics_p__KhuVH"}},23:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),i=(n(19),n(3)),r=n(5),l=n(7),u=n(8),b=n(14),d=n(13),j=n(9),p=n.n(j),h=n(0),f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{type:"button",name:e,onClick:n,className:p.a.button,children:e},e)}))})},O=n(10),g=n.n(O),x=n(11),k=n.n(x),v=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:k.a.general,children:[Object(h.jsx)("h2",{children:t}),n]})};v.propType={title:g.a.string.isRequired};var m=v,F=n(2),N=n.n(F),_=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{className:N.a.p,children:["Good: ",t]}),Object(h.jsxs)("p",{className:N.a.p,children:["Neutral: ",n]}),Object(h.jsxs)("p",{className:N.a.p,children:["Bad: ",a]}),Object(h.jsxs)("p",{className:N.a.p,children:["Total: ",c]}),Object(h.jsxs)("p",{className:N.a.p,children:["Positive feedback: ",o," %"]})]})},P=n(12),y=n.n(P),T=function(e){var t=e.message;return Object(h.jsx)("p",{className:y.a.notification,children:t})},w=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){var n=t.target.name;e.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(i.a)({},n,e.state[n]+1))}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return e.state.good?Math.round(e.state.good/e.countTotalFeedback()*100):0},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:Object.keys(this.state),onLeaveFeedback:this.handleClick})}),this.countTotalFeedback()?Object(h.jsx)(m,{title:"Statistics",children:Object(h.jsx)(_,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(h.jsx)(T,{message:"No feedback given"})]})}}]),n}(a.Component);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={button:"FeedbackOptions_button__2T-uY"}}},[[23,1,2]]]);
//# sourceMappingURL=main.7515001a.chunk.js.map