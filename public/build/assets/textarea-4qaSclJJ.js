import{U as Q,r as u}from"./app-BsGrDTxw.js";import{a as K,U as X}from"./description-DWaOyf4s.js";import{K as O,y as Z,n as ee,b as te,L as V,_ as ne}from"./transition-CFTqxYHk.js";const U=typeof document<"u"?Q.useLayoutEffect:()=>{};function re(t){const n=u.useRef(null);return U(()=>{n.current=t},[t]),u.useCallback((...e)=>{const r=n.current;return r==null?void 0:r(...e)},[])}const L=t=>{var n;return(n=t==null?void 0:t.ownerDocument)!==null&&n!==void 0?n:document},E=t=>t&&"window"in t&&t.window===t?t:L(t).defaultView||window;function oe(t){var n;return typeof window>"u"||window.navigator==null?!1:((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands.some(e=>t.test(e.brand)))||t.test(window.navigator.userAgent)}function ie(t){var n;return typeof window<"u"&&window.navigator!=null?t.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function _(t){let n=null;return()=>(n==null&&(n=t()),n)}const ae=_(function(){return ie(/^Mac/i)}),ue=_(function(){return oe(/Android/i)});function se(t){return t.mozInputSource===0&&t.isTrusted?!0:ue()&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}class de{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(n,e){this.nativeEvent=e,this.target=e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget,this.bubbles=e.bubbles,this.cancelable=e.cancelable,this.defaultPrevented=e.defaultPrevented,this.eventPhase=e.eventPhase,this.isTrusted=e.isTrusted,this.timeStamp=e.timeStamp,this.type=n}}function j(t){let n=u.useRef({isFocused:!1,observer:null});U(()=>{const r=n.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let e=re(r=>{t==null||t(r)});return u.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){n.current.isFocused=!0;let o=r.target,d=s=>{n.current.isFocused=!1,o.disabled&&e(new de("blur",s)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};o.addEventListener("focusout",d,{once:!0}),n.current.observer=new MutationObserver(()=>{if(n.current.isFocused&&o.disabled){var s;(s=n.current.observer)===null||s===void 0||s.disconnect();let i=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:i})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:i}))}}),n.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[e])}function le(t){let{isDisabled:n,onFocus:e,onBlur:r,onFocusChange:o}=t;const d=u.useCallback(l=>{if(l.target===l.currentTarget)return r&&r(l),o&&o(!1),!0},[r,o]),s=j(d),i=u.useCallback(l=>{const c=L(l.target);l.target===l.currentTarget&&c.activeElement===l.target&&(e&&e(l),o&&o(!0),s(l))},[o,e,s]);return{focusProps:{onFocus:!n&&(e||o||r)?i:void 0,onBlur:!n&&(r||o)?d:void 0}}}let F=null,C=new Set,T=new Map,h=!1,k=!1;const ce={Tab:!0,Escape:!0};function D(t,n){for(let e of C)e(t,n)}function fe(t){return!(t.metaKey||!ae()&&t.altKey||t.ctrlKey||t.key==="Control"||t.key==="Shift"||t.key==="Meta")}function P(t){h=!0,fe(t)&&(F="keyboard",D("keyboard",t))}function v(t){F="pointer",(t.type==="mousedown"||t.type==="pointerdown")&&(h=!0,D("pointer",t))}function G(t){se(t)&&(h=!0,F="virtual")}function R(t){t.target===window||t.target===document||(!h&&!k&&(F="virtual",D("virtual",t)),h=!1,k=!1)}function N(){h=!1,k=!0}function M(t){if(typeof window>"u"||T.get(E(t)))return;const n=E(t),e=L(t);let r=n.HTMLElement.prototype.focus;n.HTMLElement.prototype.focus=function(){h=!0,r.apply(this,arguments)},e.addEventListener("keydown",P,!0),e.addEventListener("keyup",P,!0),e.addEventListener("click",G,!0),n.addEventListener("focus",R,!0),n.addEventListener("blur",N,!1),typeof PointerEvent<"u"?(e.addEventListener("pointerdown",v,!0),e.addEventListener("pointermove",v,!0),e.addEventListener("pointerup",v,!0)):(e.addEventListener("mousedown",v,!0),e.addEventListener("mousemove",v,!0),e.addEventListener("mouseup",v,!0)),n.addEventListener("beforeunload",()=>{Y(t)},{once:!0}),T.set(n,{focus:r})}const Y=(t,n)=>{const e=E(t),r=L(t);n&&r.removeEventListener("DOMContentLoaded",n),T.has(e)&&(e.HTMLElement.prototype.focus=T.get(e).focus,r.removeEventListener("keydown",P,!0),r.removeEventListener("keyup",P,!0),r.removeEventListener("click",G,!0),e.removeEventListener("focus",R,!0),e.removeEventListener("blur",N,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",v,!0),r.removeEventListener("pointermove",v,!0),r.removeEventListener("pointerup",v,!0)):(r.removeEventListener("mousedown",v,!0),r.removeEventListener("mousemove",v,!0),r.removeEventListener("mouseup",v,!0)),T.delete(e))};function ve(t){const n=L(t);let e;return n.readyState!=="loading"?M(t):(e=()=>{M(t)},n.addEventListener("DOMContentLoaded",e)),()=>Y(t,e)}typeof document<"u"&&ve();function z(){return F!=="pointer"}const be=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function pe(t,n,e){var r;const o=typeof window<"u"?E(e==null?void 0:e.target).HTMLInputElement:HTMLInputElement,d=typeof window<"u"?E(e==null?void 0:e.target).HTMLTextAreaElement:HTMLTextAreaElement,s=typeof window<"u"?E(e==null?void 0:e.target).HTMLElement:HTMLElement,i=typeof window<"u"?E(e==null?void 0:e.target).KeyboardEvent:KeyboardEvent;return t=t||(e==null?void 0:e.target)instanceof o&&!be.has(e==null||(r=e.target)===null||r===void 0?void 0:r.type)||(e==null?void 0:e.target)instanceof d||(e==null?void 0:e.target)instanceof s&&(e==null?void 0:e.target.isContentEditable),!(t&&n==="keyboard"&&e instanceof i&&!ce[e.key])}function $e(t,n,e){M(),u.useEffect(()=>{let r=(o,d)=>{pe(!!(e!=null&&e.isTextInput),o,d)&&t(z())};return C.add(r),()=>{C.delete(r)}},n)}function ge(t){let{isDisabled:n,onBlurWithin:e,onFocusWithin:r,onFocusWithinChange:o}=t,d=u.useRef({isFocusWithin:!1}),s=u.useCallback(c=>{d.current.isFocusWithin&&!c.currentTarget.contains(c.relatedTarget)&&(d.current.isFocusWithin=!1,e&&e(c),o&&o(!1))},[e,o,d]),i=j(s),l=u.useCallback(c=>{!d.current.isFocusWithin&&document.activeElement===c.target&&(r&&r(c),o&&o(!0),d.current.isFocusWithin=!0,i(c))},[r,o,i]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:l,onBlur:s}}}let H=!1,x=0;function S(){H=!0,setTimeout(()=>{H=!1},50)}function A(t){t.pointerType==="touch"&&S()}function me(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",A):document.addEventListener("touchend",S),x++,()=>{x--,!(x>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",A):document.removeEventListener("touchend",S))}}function Ee(t){let{onHoverStart:n,onHoverChange:e,onHoverEnd:r,isDisabled:o}=t,[d,s]=u.useState(!1),i=u.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;u.useEffect(me,[]);let{hoverProps:l,triggerHoverEnd:c}=u.useMemo(()=>{let b=(a,p)=>{if(i.pointerType=p,o||p==="touch"||i.isHovered||!a.currentTarget.contains(a.target))return;i.isHovered=!0;let $=a.currentTarget;i.target=$,n&&n({type:"hoverstart",target:$,pointerType:p}),e&&e(!0),s(!0)},m=(a,p)=>{if(i.pointerType="",i.target=null,p==="touch"||!i.isHovered)return;i.isHovered=!1;let $=a.currentTarget;r&&r({type:"hoverend",target:$,pointerType:p}),e&&e(!1),s(!1)},f={};return typeof PointerEvent<"u"?(f.onPointerEnter=a=>{H&&a.pointerType==="mouse"||b(a,a.pointerType)},f.onPointerLeave=a=>{!o&&a.currentTarget.contains(a.target)&&m(a,a.pointerType)}):(f.onTouchStart=()=>{i.ignoreEmulatedMouseEvents=!0},f.onMouseEnter=a=>{!i.ignoreEmulatedMouseEvents&&!H&&b(a,"mouse"),i.ignoreEmulatedMouseEvents=!1},f.onMouseLeave=a=>{!o&&a.currentTarget.contains(a.target)&&m(a,"mouse")}),{hoverProps:f,triggerHoverEnd:m}},[n,e,r,o,i]);return u.useEffect(()=>{o&&c({currentTarget:i.target},i.pointerType)},[o]),{hoverProps:l,isHovered:d}}function he(t={}){let{autoFocus:n=!1,isTextInput:e,within:r}=t,o=u.useRef({isFocused:!1,isFocusVisible:n||z()}),[d,s]=u.useState(!1),[i,l]=u.useState(()=>o.current.isFocused&&o.current.isFocusVisible),c=u.useCallback(()=>l(o.current.isFocused&&o.current.isFocusVisible),[]),b=u.useCallback(a=>{o.current.isFocused=a,s(a),c()},[c]);$e(a=>{o.current.isFocusVisible=a,c()},[],{isTextInput:e});let{focusProps:m}=le({isDisabled:r,onFocusChange:b}),{focusWithinProps:f}=ge({isDisabled:!r,onFocusWithinChange:b});return{isFocused:d,isFocusVisible:i,focusProps:r?f:m}}let ye=u.createContext(void 0);function J(){return u.useContext(ye)}let I=u.createContext(null);I.displayName="LabelContext";function q(){let t=u.useContext(I);if(t===null){let n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,q),n}return t}function we(t){var n,e,r;let o=(e=(n=u.useContext(I))==null?void 0:n.value)!=null?e:void 0;return((r=void 0)!=null?r:0)>0?[o,...t].filter(Boolean).join(" "):o}let Te="label";function Le(t,n){var e;let r=u.useId(),o=q(),d=J(),s=K(),{id:i=`headlessui-label-${r}`,htmlFor:l=d??((e=o.props)==null?void 0:e.htmlFor),passive:c=!1,...b}=t,m=Z(n);ee(()=>o.register(i),[i,o.register]);let f=te(y=>{let w=y.currentTarget;if(w instanceof HTMLLabelElement&&y.preventDefault(),o.props&&"onClick"in o.props&&typeof o.props.onClick=="function"&&o.props.onClick(y),w instanceof HTMLLabelElement){let g=document.getElementById(w.htmlFor);if(g){let W=g.getAttribute("disabled");if(W==="true"||W==="")return;let B=g.getAttribute("aria-disabled");if(B==="true"||B==="")return;(g instanceof HTMLInputElement&&(g.type==="radio"||g.type==="checkbox")||g.role==="radio"||g.role==="checkbox"||g.role==="switch")&&g.click(),g.focus({preventScroll:!0})}}}),a=s||!1,p=u.useMemo(()=>({...o.slot,disabled:a}),[o.slot,a]),$={ref:m,...o.props,id:i,htmlFor:l,onClick:f};return c&&("onClick"in $&&(delete $.htmlFor,delete $.onClick),"onClick"in b&&delete b.onClick),V()({ourProps:$,theirProps:b,slot:p,defaultTag:l?Te:"div",name:o.name||"Label"})}let Fe=O(Le);Object.assign(Fe,{});let Pe="textarea";function He(t,n){let e=u.useId(),r=J(),o=K(),{id:d=r||`headlessui-textarea-${e}`,disabled:s=o||!1,autoFocus:i=!1,invalid:l=!1,...c}=t,b=we(),m=X(),{isFocused:f,focusProps:a}=he({autoFocus:i}),{isHovered:p,hoverProps:$}=Ee({isDisabled:s}),y=ne({ref:n,id:d,"aria-labelledby":b,"aria-describedby":m,"aria-invalid":l?"":void 0,disabled:s||void 0,autoFocus:i},a,$),w=u.useMemo(()=>({disabled:s,invalid:l,hover:p,focus:f,autofocus:i}),[s,l,p,f,i]);return V()({ourProps:y,theirProps:c,slot:w,defaultTag:Pe,name:"Textarea"})}let Me=O(He);export{Me as J};
