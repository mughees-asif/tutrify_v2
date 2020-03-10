(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[13],{157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(699),o=a(703),l=a(725),c=a(18),s=a(702),m=a(681),u=a(680),p=a(743),d=a(104),E=a.n(d);var b=Object(p.a)((function(e){var t=e.theme,a=e.paddingBottom,n=e.onClose,i=e.disabled,o=e.title,c=e.disablePadding;return r.a.createElement(s.a,{style:{paddingBottom:a?a&&c?0:a:t.spacing(3),paddingLeft:c?0:null,paddingRight:c?0:null,paddingTop:c?0:t.spacing(2),width:"100%"},disableTypography:!0},r.a.createElement(l.a,{display:"flex",justifyContent:"space-between"},r.a.createElement(m.a,{variant:"h5"},o),r.a.createElement(u.a,{onClick:n,style:{marginRight:-12,marginTop:-10},disabled:i},r.a.createElement(E.a,null))))}));t.a=Object(c.a)((function(e){return{dialogPaper:{display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:e.spacing(3),maxWidth:420},actions:{marginTop:e.spacing(2)},dialogPaperScrollPaper:{maxHeight:"none"},dialogContent:{paddingTop:0,paddingBottom:0}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.open,n=e.onClose,c=e.loading,s=e.headline,m=e.onFormSubmit,u=e.content,p=e.actions,d=e.hideBackdrop;return r.a.createElement(i.a,{open:a,onClose:n,disableBackdropClick:c,disableEscapeKeyDown:c,classes:{paper:t.dialogPaper,paperScrollPaper:t.dialogPaperScrollPaper},hideBackdrop:d||!1},r.a.createElement(b,{title:s,onClose:n,disabled:c}),r.a.createElement(o.a,{className:t.dialogContent},r.a.createElement("form",{onSubmit:m},r.a.createElement("div",null,u),r.a.createElement(l.a,{width:"100%",className:t.actions},p))))}))},730:function(e,t,a){"use strict";a.r(t);var n=a(644),r=a.n(n),i=a(646),o=a(653),l=a(0),c=a.n(l),s=a(647),m=a(205),u=a(743),p=a(725),d=a(711),E=a(695),b=a(311),h=a(721),g=a(103),f=a(94);function v(e){var t=e.component,a=e.inputRef,n=Object(f.a)(e,["component","inputRef"]);return c.a.useImperativeHandle(a,(function(){return{focus:function(){}}})),c.a.createElement(t,n)}var C=Object(u.a)((function(e){var t=e.stripeOptions,a=e.StripeElement,n=(e.select,e.theme),r=Object(f.a)(e,["stripeOptions","StripeElement","select","theme"]),i=Object(g.a)({style:{base:Object(g.a)({},n.typography.body1,{color:n.palette.text.primary,fontSize:"16px",fontSmoothing:"antialiased","::placeholder":{color:n.palette.text.secondary}}),invalid:{iconColor:n.palette.error.main,color:n.palette.error.main}}},t);return c.a.createElement(b.a,Object.assign({InputLabelProps:{shrink:!0},InputProps:{inputComponent:v,inputProps:{component:a,options:i}}},r))}));var O=function(e){var t=e.stripeError,a=e.setStripeError,n=e.amount,r=e.amountError,i=e.onAmountChange,o=e.name,l=e.setName;return c.a.createElement(d.a,{container:!0,spacing:2,justify:"space-between"},c.a.createElement(d.a,{item:!0,xs:8},c.a.createElement(b.a,{variant:"outlined",margin:"none",required:!0,label:"Your Name",value:o,onChange:function(e){l(e.target.value)},fullWidth:!0,autoFocus:!0,autoComplete:"off",type:"text"})),c.a.createElement(d.a,{item:!0,xs:4},c.a.createElement(b.a,{required:!0,value:n,onChange:function(e){i(parseInt(e.target.value))},error:!!r,helperText:r,variant:"outlined",fullWidth:!0,type:"number",margin:"none",label:"Amount",InputProps:{startAdornment:c.a.createElement(h.a,{position:"start"},"$")}})),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(C,{margin:"none",fullWidth:!0,label:"Credit Card",error:!!t,helperText:t,variant:"outlined",required:!0,StripeElement:m.CardElement,onChange:function(){t&&a("")}})))};var j=function(e){var t=e.stripeError,a=e.setStripeError,n=e.amount,r=e.amountError,i=e.onAmountChange,o=e.name,l=e.setName,s=e.email,u=e.setEmail;return c.a.createElement(d.a,{container:!0,spacing:2,justify:"space-between"},c.a.createElement(d.a,{item:!0,xs:8},c.a.createElement(b.a,{variant:"outlined",margin:"none",required:!0,label:"Your Name",value:o,onChange:function(e){l(e.target.value)},fullWidth:!0,autoFocus:!0,autoComplete:"off",type:"text"})),c.a.createElement(d.a,{item:!0,xs:4},c.a.createElement(b.a,{required:!0,value:n,onChange:function(e){i(parseInt(e.target.value))},error:!!r,helperText:r,variant:"outlined",fullWidth:!0,type:"number",margin:"none",label:"Amount",InputProps:{startAdornment:c.a.createElement(h.a,{position:"start"},"$")}})),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(b.a,{required:!0,variant:"outlined",fullWidth:!0,value:s,onChange:function(e){u(e.target.value)},type:"email",margin:"none",label:"Email"})),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(C,{margin:"none",variant:"outlined",fullWidth:!0,label:"IBAN",error:!!t,helperText:t,required:!0,StripeElement:m.IbanElement,stripeOptions:{supportedCountries:["SEPA"]},onChange:function(){t&&a("")}})))},S=a(157),y=a(98),x=a(113),w=a(90),P=Object(s.a)("pk_test_6pRNASCoBOKtIshFeQd4XMUh"),k=["Credit Card","SEPA Direct Debit"],A=Object(u.a)((function(e){var t=Object(l.useState)(!1),a=Object(o.a)(t,2),n=a[0],s=a[1],u=Object(l.useState)("Credit Card"),b=Object(o.a)(u,2),h=b[0],g=b[1],f=Object(l.useState)(""),v=Object(o.a)(f,2),C=v[0],P=v[1],A=Object(l.useState)(""),I=Object(o.a)(A,2),N=I[0],B=I[1],D=Object(l.useState)(""),T=Object(o.a)(D,2),W=T[0],F=T[1],q=Object(l.useState)(0),_=Object(o.a)(q,2),R=_[0],Y=_[1],z=Object(l.useState)(""),H=Object(o.a)(z,2),J=H[0],K=H[1],L=Object(m.useElements)(),M=Object(m.useStripe)(),$=function(e){e<0||(J&&K(""),Y(e))},Q=function(){switch(h){case"Credit Card":return{type:"card",card:L.getElement(m.CardElement),billing_details:{name:N}};case"SEPA Direct Debit":return{type:"sepa_debit",sepa_debit:L.getElement(m.IbanElement),billing_details:{email:W,name:N}};default:throw new Error("No case selected in switch statement")}},U=e.open,X=e.theme,G=e.onClose,V=e.onSuccess;return c.a.createElement(S.a,{open:U,onClose:G,headline:"Add Balance",hideBackdrop:!1,loading:n,onFormSubmit:function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(R<=0)){e.next=4;break}return K("Can't be zero"),e.abrupt("return");case 4:return C&&P(""),s(!0),e.next=8,M.createPaymentMethod(Q());case 8:if(a=e.sent,!(n=a.error)){e.next=14;break}return P(n.message),s(!1),e.abrupt("return");case 14:V();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),content:c.a.createElement(p.a,{pb:2},c.a.createElement(p.a,{mb:2},c.a.createElement(d.a,{container:!0,spacing:1},k.map((function(e){return c.a.createElement(d.a,{item:!0,key:e},c.a.createElement(y.a,{variant:e===h?"contained":"outlined",disableElevation:!0,onClick:function(){P(""),g(e)},color:X.palette.common.black},e))})))),function(){switch(h){case"Credit Card":return c.a.createElement(l.Fragment,null,c.a.createElement(p.a,{mb:2},c.a.createElement(O,{stripeError:C,setStripeError:P,setName:B,name:N,amount:R,amountError:J,onAmountChange:$})),c.a.createElement(x.a,null,"You can check this integration using the credit card number"," ",c.a.createElement("b",null,"4242 4242 4242 4242 04 / 24 24 242 42424")));case"SEPA Direct Debit":return c.a.createElement(l.Fragment,null,c.a.createElement(p.a,{mb:2},c.a.createElement(j,{stripeError:C,setStripeError:P,setName:B,setEmail:F,name:N,email:W,amount:R,amountError:J,onAmountChange:$})),c.a.createElement(x.a,null,"You can check this integration using the IBAN",c.a.createElement("br",null),c.a.createElement("b",null,"DE89370400440532013000")));default:throw new Error("No case selected in switch statement")}}()),actions:c.a.createElement(l.Fragment,null,c.a.createElement(E.a,{fullWidth:!0,variant:"contained",color:"secondary",type:"submit",size:"large",disabled:n},"Pay with Stripe ",n&&c.a.createElement(w.a,null)))})}));t.default=function(e){var t=e.open,a=e.onClose,n=e.onSuccess;return c.a.createElement(m.Elements,{stripe:P},t&&c.a.createElement(A,{open:t,onClose:a,onSuccess:n}))}},98:function(e,t,a){"use strict";var n=a(94),r=a(103),i=a(0),o=a.n(i),l=a(37),c=a(63),s=a(695);t.a=function(e){var t=e.color,a=e.children,i=e.theme,m=Object(l.a)(Object(r.a)({},i,{palette:{primary:{main:t}}})),u=function(e){e.color,e.theme,e.children;return Object(n.a)(e,["color","theme","children"])}(e);return o.a.createElement(c.a,{theme:m},o.a.createElement(s.a,Object.assign({},u,{color:"primary"}),a))}}}]);
//# sourceMappingURL=13.dcf6cf65.chunk.js.map