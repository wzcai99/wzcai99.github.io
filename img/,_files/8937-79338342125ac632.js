"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8937],{93683:function(e,n,a){a.d(n,{Z:function(){return j}});var r=a(21722),s=a(22830),t=a(75883),l=a(35250),i=a(9181),o=a.n(i),c=a(60554),u=a(70079),d=a(1454),p=a(50795),m=a(82081),x=a(99486),f=a(78931),h=a(88798),b=a(56817),g=a(96175),v=a(19350),y=a(51061);function j(e){var n=e.isOpen,a=e.onClose,i=(0,f.hz)(),j=(0,s._)((0,u.useState)(!1),2),w=j[0],k=j[1],N=(0,c.useRouter)(),C=(0,u.useCallback)(function(){p.o.logEvent(m.a.closeAccountPaymentModal),a()},[a]),P=(0,u.useCallback)((0,r._)(function(){var e;return(0,t.Jh)(this,function(n){switch(n.label){case 0:k(!0),p.o.logEvent(m.a.clickAccountPaymentCheckout),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,x.ZP.getCheckoutLink()];case 2:return e=n.sent(),N.push(e.url),[3,5];case 3:return n.sent(),h.m.warning("The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return k(!1),[7];case 5:return[2]}})}),[N,k]),S=(0,u.useCallback)((0,r._)(function(){var e;return(0,t.Jh)(this,function(n){switch(n.label){case 0:k(!0),p.o.logEvent(m.a.clickAccountCustomerPortal),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,x.ZP.fetchCustomerPortalUrl()];case 2:return e=n.sent(),N.push(e.url),[3,5];case 3:return n.sent(),h.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return k(!1),[7];case 5:return[2]}})}),[N,k]),A=(0,u.useCallback)(function(){p.o.logEvent(m.a.clickAccountPaymentGetHelp)},[]),T=(0,f.YD)(),_=i.has("disable_upgrade_ui");return(0,l.jsxs)(g.x,{isOpen:n,onClose:a,children:[(0,l.jsxs)("div",{className:"flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",children:[(0,l.jsx)("span",{className:"text-base font-semibold sm:text-base",children:"Your plan"}),(0,l.jsx)("button",{className:"text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",onClick:C,children:(0,l.jsx)(d.q5L,{className:"h-6 w-6"})})]}),(0,l.jsxs)("div",{className:"grid sm:grid-cols-2",children:[(0,l.jsx)("div",{className:"relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",children:(0,l.jsx)(v.Oi,{rowElements:[(0,l.jsx)(v.Cu,{text:"Free plan"},"row-free-plan-name"),(0,l.jsx)(v.hi,{variant:"disabled",disabled:!0,text:y.S.free.callToAction.active},"row-free-plan-button"),(0,l.jsx)(v.G,{variant:"secondary",text:y.S.free.demandAccess},"row-free-plan-demand"),(0,l.jsx)(v.G,{variant:"secondary",text:y.S.free.responseSpeed},"row-free-plan-speed"),(0,l.jsx)(v.G,{className:"sm:pb-2",variant:"secondary",text:y.S.free.modelFeatures},"row-free-plan-updates")]})}),(0,l.jsx)("div",{className:"relative order-1 col-span-1 sm:order-2",children:(0,l.jsx)(v.Oi,{rowElements:[(0,l.jsx)(v.Cu,{text:y.S.plus.name,children:(0,l.jsx)("span",{className:"font-semibold text-gray-500",children:y.S.plus.costInDollars})},"row-plus-plan-title"),(0,l.jsx)(v.hi,{variant:"primary",disabledText:_?"Due to high demand, we've temporarily paused upgrades.":"",disabled:w,isLoading:w,onClick:P,text:y.S.plus.callToAction.inactivePayment},"row-plus-plan-button"),(0,l.jsx)(v.G,{variant:"primary",text:y.S.plus.demandAccess},"row-plus-plan-demand"),(0,l.jsx)(v.G,{variant:"primary",text:y.S.plus.responseSpeed},"row-plus-plan-speed"),(0,l.jsx)(v.G,{className:"sm:pb-2",variant:"primary",text:y.S.plus.modelFeatures},"row-plus-plan-updates"),T&&(0,l.jsx)(v.nR,{className:"sm:pb-1",isLoading:w,text:y.S.manageSubscriptionWeb.callToAction,onClick:S},"row-plus-plan-manage"),(0,l.jsx)(o(),{target:"_blank",href:b.ti,onClick:A,passHref:!0,children:(0,l.jsx)(v.nR,{className:"sm:pb-1",isLoading:!1,isTextOnly:!0,text:y.S.getHelp.callToAction},"row-plus-plan-help")},"row-plus-plan-help-link")]})})]})]})}},96175:function(e,n,a){a.d(n,{x:function(){return o}});var r=a(4337),s=a(35250),t=a(21389),l=a(89368);function i(){var e=(0,r._)(["flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);return i=function(){return e},e}var o=function(e){var n=e.children,a=e.isOpen,r=e.onClose;return(0,s.jsx)(l.Z,{size:"fullscreen",isOpen:a,onClose:r,type:"success",className:"!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",children:(0,s.jsx)("div",{className:"focus-none flex h-full flex-col items-center justify-start outline-none",children:(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)(c,{children:n})})})})},c=t.Z.div(i())},19350:function(e,n,a){a.d(n,{Cu:function(){return b},G:function(){return y},Oi:function(){return h},hi:function(){return v},nR:function(){return j}});var r=a(4337),s=a(35250),t=a(19841),l=a(61888),i=a(70079),o=a(1454),c=a(21389),u=a(67273),d=a(45635),p=a(88327);function m(){var e=(0,r._)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);return m=function(){return e},e}function x(){var e=(0,r._)(["gap-2 flex flex-row justify-start text-sm items-start"]);return x=function(){return e},e}function f(){var e=(0,r._)(["text-xl font-semibold justify-between items-center flex"]);return f=function(){return e},e}var h=function(e){var n=e.rowElements;return(0,s.jsx)(w,{children:n.map(function(e){return e})})},b=function(e){var n=e.className,a=e.text,r=e.children;return(0,s.jsxs)(N,{className:n,children:[(0,s.jsx)("span",{children:a}),r]})},g={"primary-disabled":"border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",primary:"border-none py-3 font-semibold",disabled:"dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"},v=(0,i.forwardRef)(function(e,n){var a=e.isLoading,r=void 0!==a&&a,l=e.disabled,i=e.onClick,c=e.variant,m=void 0===c?"primary":c,x=e.text,f=e.disabledText;return f?(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)(d.u,{side:"bottom",sideOffset:20,label:f,usePortal:!1,children:(0,s.jsxs)(u.z,{ref:n,as:"button",color:"disabled",className:(0,t.default)("w-full",g[m]),children:[x,r&&(0,s.jsx)(p.ZP,{className:"animate-spin",icon:o.dAq})]})})}):(0,s.jsxs)(u.z,{disabled:void 0!==l&&l,onClick:i,ref:n,as:"button",className:(0,t.default)(g[m]),children:[(0,s.jsx)("span",{className:(0,t.default)("inline-block",{"text-gray-700":"primary-disabled"===m,"text-white":"primary"===m}),children:x}),r&&(0,s.jsx)(p.ZP,{className:"animate-spin",icon:o.dAq})]})});v.displayName="PricingPlanButton";var y=function(e){var n=e.variant,a=void 0===n?"primary":n,r=e.className,l=e.text;return(0,s.jsxs)(k,{className:r,children:[(0,s.jsx)(p.ZP,{icon:o._rq,className:(0,t.default)("h-5 w-5",{"text-green-700":"primary"==a,"text-gray-400":"secondary"==a})}),(0,s.jsx)("span",{className:"max-w-[250px]",children:l})]})},j=function(e){var n=e.className,a=e.text,r=e.isLoading,t=e.isTextOnly,c=e.onClick,u=void 0===c?l.noop:c,d="flex flex-row items-center space-x-1 underline",m=(0,i.useMemo)(function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:a}),r&&(0,s.jsx)(p.ZP,{className:"animate-spin",icon:o.dAq})]})},[r,a]);return(0,s.jsx)(k,{className:n,children:void 0!==t&&t?(0,s.jsx)("div",{className:d,children:m}):(0,s.jsx)("button",{onClick:u,className:d,children:m})})},w=c.Z.div(m()),k=c.Z.div(x()),N=c.Z.div(f())},51061:function(e,n,a){a.d(n,{S:function(){return r}});var r={free:{name:"Free plan",callToAction:{active:"Your current plan",inactive:"Your current plan"},costInDollars:"",demandAccess:"Access to our GPT-3.5 model",responseSpeed:"Standard response speed",modelFeatures:"Regular model updates"},plus:{name:"ChatGPT Plus",callToAction:{active:"Your current plan",inactive:"I'm interested",inactivePayment:"Upgrade to Plus"},costInDollars:"USD $20/mo",demandAccess:"Access to GPT-4, our most capable model",responseSpeed:"Faster response speed",modelFeatures:"Exclusive access to beta features like Browsing, Plugins, and Code Interpreter"},manageSubscriptionWeb:{callToAction:"Manage my subscription"},manageSubscriptionIos:{callToAction:"Manage my subscription in the ChatGPT iOS app"},getHelp:{callToAction:"I need help with a billing issue"},business:{callToAction:"Buy for my team"}}},21739:function(e,n,a){a.d(n,{g:function(){return o}});var r=a(96237),s=a(39324),t=a(71209),l=a(78103),i={flags:{isUserInCanPayGroup:!1,failwhaleBypassEnabled:!1,sharingEnabled:!1,messageRedesign:!1}},o=(0,l.ZP)()(function(e,n){return(0,t._)((0,s._)({},i),{updateFlagValue:function(a,l){var i=n().flags;e({flags:(0,t._)((0,s._)({},i),(0,r._)({},a,l))})}})})}}]);