(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[18],{717:function(e,t,a){"use strict";a.r(t);var n=a(72),r=a(73),o=a(76),l=a(74),c=a(77),i=a(0),s=a.n(i),h=a(648),u=a(130),p=a(397),d=a(725),m=a(681),y=a(680),f=a(355),b=a(694),g=a(718),E=a(18),w=a(233),S=a.n(w);function M(e){return Object(u.a)(new Date(1e3*e),"MMMM d, p yyyy")}function v(e,t,a){var n=Number.POSITIVE_INFINITY;return e.forEach((function(e){n>e[t]&&(n=e[t])})),Math.round(n-n*a)}var O=["1 Week","1 Month","6 Months"],k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={anchorEl:null,selectedOption:"1 Month"},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.formatter=function(e){return[e,a.props.title]},a.getSeconds=function(){switch(a.state.selectedOption){case"1 Week":return 604800;case"1 Month":return 18748800;case"6 Months":return 112492800;default:throw new Error("No branch selected in switch-statement")}},a.getSubtitle=function(){switch(a.state.selectedOption){case"1 Week":return"Last week";case"1 Month":return"Last month";case"6 Months":return"Last 6 months";default:throw new Error("No branch selected in switch-statement")}},a.processData=function(){for(var e=a.props.data,t=a.getSeconds(),n=new Date/1e3-t,r=[],o=0;o<e.length;o+=1)n<e[o].timestamp&&r.unshift(e[o]);return r},a.selectOption=function(e){a.setState({selectedOption:e,anchorEl:null})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.color,n=t.data,r=t.title,o=t.classes,l=t.theme,c=t.height,i=this.state,u=i.anchorEl,E=i.selectedOption,w=Boolean(u);return s.a.createElement(p.a,null,s.a.createElement(d.a,{pt:2,px:2,pb:4},s.a.createElement(d.a,{display:"flex",justifyContent:"space-between"},s.a.createElement("div",null,s.a.createElement(m.a,{variant:"subtitle1"},r),s.a.createElement(m.a,{variant:"body2",color:"textSecondary"},this.getSubtitle())),s.a.createElement("div",null,s.a.createElement(y.a,{"aria-label":"More","aria-owns":w?"long-menu":void 0,"aria-haspopup":"true",onClick:this.handleClick},s.a.createElement(S.a,null)),s.a.createElement(f.a,{id:"long-menu",anchorEl:u,open:w,onClose:this.handleClose,PaperProps:{style:{maxHeight:216,width:200}}},O.map((function(t){return s.a.createElement(b.a,{key:t,selected:t===E,onClick:function(){e.selectOption(t)},name:t},t)})))))),s.a.createElement(g.a,null,s.a.createElement(d.a,{className:o.cardContentInner,height:c},s.a.createElement(h.c,{width:"100%",height:"100%"},s.a.createElement(h.b,{data:this.processData(),type:"number"},s.a.createElement(h.e,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],hide:!0}),s.a.createElement(h.f,{domain:[v(n,"value",.05),"dataMax"],hide:!0}),s.a.createElement(h.a,{type:"monotone",dataKey:"value",stroke:a,fill:a}),s.a.createElement(h.d,{labelFormatter:M,formatter:this.formatter,cursor:!1,contentStyle:{border:"none",padding:l.spacing(1),borderRadius:l.shape.borderRadius,boxShadow:l.shadows[1]},labelStyle:l.typography.body1,itemStyle:{fontSize:l.typography.body1.fontSize,letterSpacing:l.typography.body1.letterSpacing,fontFamily:l.typography.body1.fontFamily,lineHeight:l.typography.body1.lineHeight,fontWeight:l.typography.body1.fontWeight}}))))))}}]),t}(i.PureComponent);t.default=Object(E.a)((function(e){return{cardContentInner:{marginTop:e.spacing(-4)}}}),{withTheme:!0})(k)}}]);
//# sourceMappingURL=18.a8451969.chunk.js.map