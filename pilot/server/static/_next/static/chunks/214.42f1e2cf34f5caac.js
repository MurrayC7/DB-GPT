"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{41189:function(e,t,l){l.r(t),l.d(t,{default:function(){return ef}});var r=l(85893),a=l(67294),n=l(2093),s=l(1375),o=l(2453),i=l(58989),c=l(83454),d=e=>{let{queryAgentURL:t="/api/v1/chat/completions"}=e,l=(0,a.useMemo)(()=>new AbortController,[]),r=(0,a.useCallback)(async e=>{let{context:r,data:a,chatId:n,onMessage:d,onClose:u,onDone:x,onError:m}=e;if(!r){o.ZP.warning(i.Z.t("NoContextTip"));return}let h={...a,conv_uid:n,user_input:r};if(!h.conv_uid){o.ZP.error("conv_uid 不存在，请刷新后重试");return}try{var p;await (0,s.L)("".concat(null!==(p=c.env.API_BASE_URL)&&void 0!==p?p:"").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h),signal:l.signal,openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===s.a)return},onclose(){l.abort(),null==u||u()},onerror(e){throw Error(e)},onmessage:e=>{var t;let l=null===(t=e.data)||void 0===t?void 0:t.replaceAll("\\n","\n");"[DONE]"===l?null==x||x():(null==l?void 0:l.startsWith("[ERROR]"))?null==m||m(null==l?void 0:l.replace("[ERROR]","")):null==d||d(l)}})}catch(e){l.abort(),null==m||m("Sorry, We meet some error, please try agin later.",e)}},[t]);return(0,a.useEffect)(()=>()=>{l.abort()},[]),r},u=l(39332),x=l(99513),m=l(24019),h=l(50888),p=l(97937),g=l(63606),v=l(50228),f=l(87547),b=l(89035),j=l(33035),y=l(12767),w=l(94184),Z=l.n(w),_=l(66309),N=l(48567),k=l(41468),C=l(57132),S=l(29158),P=l(98165),R=l(79166),E=l(93179),O=l(71577),D=l(38426),M=l(20640),I=l.n(M);let L={code(e){var t;let{inline:l,node:a,className:n,children:s,style:i,...c}=e,d=/language-(\w+)/.exec(n||"");return!l&&d?(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(O.ZP,{className:"absolute right-3 top-2 text-gray-300 hover:!text-gray-200 bg-gray-700",type:"text",icon:(0,r.jsx)(C.Z,{}),onClick:()=>{let e=I()(s);o.ZP[e?"success":"error"](e?"Copy success":"Copy failed")}}),(0,r.jsx)(E.Z,{language:null!==(t=null==d?void 0:d[1])&&void 0!==t?t:"javascript",style:R.Z,children:s})]}):(0,r.jsx)("code",{...c,style:i,className:"px-[6px] py-[2px] rounded bg-gray-700 text-gray-100 dark:bg-gray-100 dark:text-gray-800 text-sm",children:s})},ul(e){let{children:t}=e;return(0,r.jsx)("ul",{className:"py-1",children:t})},ol(e){let{children:t}=e;return(0,r.jsx)("ol",{className:"py-1",children:t})},li(e){let{children:t,ordered:l}=e;return(0,r.jsx)("li",{className:"text-sm leading-7 ml-5 pl-2 text-gray-600 dark:text-gray-300 ".concat(l?"list-decimal":"list-disc"),children:t})},table(e){let{children:t}=e;return(0,r.jsx)("table",{className:"my-2 rounded-tl-md rounded-tr-md max-w-full bg-white dark:bg-gray-900 text-sm rounded-lg overflow-hidden",children:t})},thead(e){let{children:t}=e;return(0,r.jsx)("thead",{className:"bg-[#fafafa] dark:bg-black font-semibold",children:t})},th(e){let{children:t}=e;return(0,r.jsx)("th",{className:"!text-left p-4",children:t})},td(e){let{children:t}=e;return(0,r.jsx)("td",{className:"p-4 border-t border-[#f0f0f0] dark:border-gray-700",children:t})},h1(e){let{children:t}=e;return(0,r.jsx)("h3",{className:"text-2xl font-bold my-4 border-b border-slate-300 pb-4",children:t})},h2(e){let{children:t}=e;return(0,r.jsx)("h3",{className:"text-xl font-bold my-3",children:t})},h3(e){let{children:t}=e;return(0,r.jsx)("h3",{className:"text-lg font-semibold my-2",children:t})},h4(e){let{children:t}=e;return(0,r.jsx)("h3",{className:"text-base font-semibold my-1",children:t})},a(e){let{children:t,href:l}=e;return(0,r.jsxs)("div",{className:"inline-block text-blue-600 dark:text-blue-400",children:[(0,r.jsx)(S.Z,{className:"mr-1"}),(0,r.jsx)("a",{href:l,target:"_blank",children:t})]})},img(e){let{src:t,alt:l}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(D.Z,{className:"min-h-[1rem] max-w-full max-h-full border rounded",src:t,alt:l,placeholder:(0,r.jsx)(_.Z,{icon:(0,r.jsx)(P.Z,{spin:!0}),color:"processing",children:"Image Loading..."}),fallback:"/images/fallback.png"})})},blockquote(e){let{children:t}=e;return(0,r.jsx)("blockquote",{className:"py-4 px-6 border-l-4 border-blue-600 rounded bg-white my-2 text-gray-500 dark:bg-slate-800 dark:text-gray-200 dark:border-white shadow-sm",children:t})}},A={todo:{bgClass:"bg-gray-500",icon:(0,r.jsx)(m.Z,{className:"ml-2"})},runing:{bgClass:"bg-blue-500",icon:(0,r.jsx)(h.Z,{className:"ml-2"})},failed:{bgClass:"bg-red-500",icon:(0,r.jsx)(p.Z,{className:"ml-2"})},completed:{bgClass:"bg-green-500",icon:(0,r.jsx)(g.Z,{className:"ml-2"})}};function T(e){return e.replaceAll("\\n","\n").replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>")}var F=(0,a.memo)(function(e){let{children:t,content:l,isChartChat:n,onLinkClick:s}=e,{scene:o}=(0,a.useContext)(k.p),{context:i,model_name:c,role:d}=l,u="view"===d,{relations:x,value:m,cachePlguinContext:h}=(0,a.useMemo)(()=>{if("string"!=typeof i)return{relations:[],value:"",cachePlguinContext:[]};let[e,t]=i.split("	relations:"),l=t?t.split(","):[],r=[],a=0,n=e.replace(/<dbgpt-view[^>]*>[^<]*<\/dbgpt-view>/gi,e=>{try{var t;console.log(e);let l=e.replaceAll("\n","\\n").replace(/<[^>]*>|<\/[^>]*>/gm,""),n=JSON.parse(l),s="<custom-view>".concat(a,"</custom-view>");return r.push({...n,result:T(null!==(t=n.result)&&void 0!==t?t:"")}),a++,s}catch(t){return console.log(t.message,t),e}});return{relations:l,cachePlguinContext:r,value:n}},[i]),p=(0,a.useMemo)(()=>({"custom-view"(e){var t;let{children:l}=e,a=+l.toString();if(!h[a])return l;let{name:n,status:s,err_msg:o,result:i}=h[a],{bgClass:c,icon:d}=null!==(t=A[s])&&void 0!==t?t:{};return(0,r.jsxs)("div",{className:"bg-white dark:bg-[#212121] rounded-lg overflow-hidden my-2 flex flex-col lg:max-w-[80%]",children:[(0,r.jsxs)("div",{className:Z()("flex px-4 md:px-6 py-2 items-center text-white text-sm",c),children:[n,d]}),i?(0,r.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:(0,r.jsx)(j.D,{components:L,rehypePlugins:[y.Z],children:null!=i?i:""})}):(0,r.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:o})]})}}),[i,h]);return(0,r.jsxs)("div",{className:Z()("relative flex flex-wrap w-full px-2 sm:px-4 py-2 sm:py-6 rounded-xl break-words",{"bg-slate-100 dark:bg-[#353539]":u,"lg:w-full xl:w-full pl-0":["chat_with_db_execute","chat_dashboard"].includes(o)}),children:[(0,r.jsx)("div",{className:"mr-2 flex flex-shrink-0 items-center justify-center h-7 w-7 rounded-full text-lg sm:mr-4",children:u?(0,N.A)(c)||(0,r.jsx)(v.Z,{}):(0,r.jsx)(f.Z,{})}),(0,r.jsxs)("div",{className:"flex-1 overflow-hidden items-center text-md leading-8",children:[!u&&"string"==typeof i&&i,u&&n&&"object"==typeof i&&(0,r.jsxs)("div",{children:["[".concat(i.template_name,"]: "),(0,r.jsxs)("span",{className:"text-[#1677ff] cursor-pointer",onClick:s,children:[(0,r.jsx)(b.Z,{className:"mr-1"}),i.template_introduce||"More Details"]})]}),u&&"string"==typeof i&&(0,r.jsx)(j.D,{components:{...L,...p},rehypePlugins:[y.Z],children:T(m)}),!!(null==x?void 0:x.length)&&(0,r.jsx)("div",{className:"flex flex-wrap mt-2",children:null==x?void 0:x.map((e,t)=>(0,r.jsx)(_.Z,{color:"#108ee9",children:e},e+t))})]}),t]})}),H=l(59301),J=l(41132),V=l(74312),$=l(3414),q=l(72868),z=l(59562),W=l(14553),G=l(25359),B=l(7203),U=l(48665),K=l(26047),Q=l(99056),X=l(57814),Y=l(63955),ee=l(33028),et=l(40911),el=l(66478),er=l(83062),ea=l(50489),en=l(67421),es=e=>{var t;let{conv_index:l,question:n,knowledge_space:s}=e,{t:i}=(0,en.$G)(),{chatId:c}=(0,a.useContext)(k.p),[d,u]=(0,a.useState)(""),[x,m]=(0,a.useState)(4),[h,p]=(0,a.useState)(""),g=(0,a.useRef)(null),[v,f]=o.ZP.useMessage(),[b,j]=(0,a.useState)({});(0,a.useEffect)(()=>{(0,ea.Vx)((0,ea.Lu)()).then(e=>{var t;console.log(e),j(null!==(t=e[1])&&void 0!==t?t:{})}).catch(e=>{console.log(e)})},[]);let y=(0,a.useCallback)((e,t)=>{t?(0,ea.Vx)((0,ea.Eb)(c,l)).then(e=>{var t,l,r,a;let n=null!==(t=e[1])&&void 0!==t?t:{};u(null!==(l=n.ques_type)&&void 0!==l?l:""),m(parseInt(null!==(r=n.score)&&void 0!==r?r:"4")),p(null!==(a=n.messages)&&void 0!==a?a:"")}).catch(e=>{console.log(e)}):(u(""),m(4),p(""))},[c,l]),w=(0,V.Z)($.Z)(e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#FBFCFD":"#0E0E10",...t.typography["body-sm"],padding:t.spacing(1),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,width:"100%",height:"100%"}});return(0,r.jsxs)(q.L,{onOpenChange:y,children:[f,(0,r.jsx)(er.Z,{title:i("Rating"),children:(0,r.jsx)(z.Z,{slots:{root:W.ZP},slotProps:{root:{variant:"plain",color:"primary"}},sx:{borderRadius:40},children:(0,r.jsx)(H.Z,{})})}),(0,r.jsxs)(G.Z,{children:[(0,r.jsx)(B.Z,{disabled:!0,sx:{minHeight:0}}),(0,r.jsx)(U.Z,{sx:{width:"100%",maxWidth:350,display:"grid",gap:3,padding:1},children:(0,r.jsx)("form",{onSubmit:e=>{e.preventDefault();let t={conv_uid:c,conv_index:l,question:n,knowledge_space:s,score:x,ques_type:d,messages:h};console.log(t),(0,ea.Vx)((0,ea.VC)({data:t})).then(e=>{v.open({type:"success",content:"save success"})}).catch(e=>{v.open({type:"error",content:"save error"})})},children:(0,r.jsxs)(K.Z,{container:!0,spacing:.5,columns:13,sx:{flexGrow:1},children:[(0,r.jsx)(K.Z,{xs:3,children:(0,r.jsx)(w,{children:i("Q_A_Category")})}),(0,r.jsx)(K.Z,{xs:10,children:(0,r.jsx)(Q.Z,{action:g,value:d,placeholder:"Choose one…",onChange:(e,t)=>u(null!=t?t:""),...d&&{endDecorator:(0,r.jsx)(W.ZP,{size:"sm",variant:"plain",color:"neutral",onMouseDown:e=>{e.stopPropagation()},onClick:()=>{var e;u(""),null===(e=g.current)||void 0===e||e.focusVisible()},children:(0,r.jsx)(J.Z,{})}),indicator:null},sx:{width:"100%"},children:null===(t=Object.keys(b))||void 0===t?void 0:t.map(e=>(0,r.jsx)(X.Z,{value:e,children:b[e]},e))})}),(0,r.jsx)(K.Z,{xs:3,children:(0,r.jsx)(w,{children:(0,r.jsx)(er.Z,{title:(0,r.jsx)(U.Z,{children:(0,r.jsx)("div",{children:i("feed_back_desc")})}),variant:"solid",placement:"left",children:i("Q_A_Rating")})})}),(0,r.jsx)(K.Z,{xs:10,sx:{pl:0,ml:0},children:(0,r.jsx)(Y.Z,{"aria-label":"Custom",step:1,min:0,max:5,valueLabelFormat:function(e){return({0:i("Lowest"),1:i("Missed"),2:i("Lost"),3:i("Incorrect"),4:i("Verbose"),5:i("Best")})[e]},valueLabelDisplay:"on",marks:[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}],sx:{width:"90%",pt:3,m:2,ml:1},onChange:e=>{var t;return m(null===(t=e.target)||void 0===t?void 0:t.value)},value:x})}),(0,r.jsx)(K.Z,{xs:13,children:(0,r.jsx)(ee.Z,{placeholder:i("Please_input_the_text"),value:h,onChange:e=>p(e.target.value),minRows:2,maxRows:4,endDecorator:(0,r.jsx)(et.ZP,{level:"body-xs",sx:{ml:"auto"},children:i("input_count")+h.length+i("input_unit")}),sx:{width:"100%",fontSize:14}})}),(0,r.jsx)(K.Z,{xs:13,children:(0,r.jsx)(el.Z,{type:"submit",variant:"outlined",sx:{width:"100%",height:"100%"},children:i("submit")})})]})})})]})]})},eo=l(32983),ei=l(12069),ec=l(96486),ed=l.n(ec),eu=l(38954),ex=l(8937);function em(){var e;let t=null!==(e=localStorage.getItem(ex.rU))&&void 0!==e?e:"";try{let e=JSON.parse(t);return e}catch(e){return null}}var eh=e=>{var t;let{messages:l,onSubmit:s}=e,{dbParam:i,currentDialogue:c,scene:d,model:m,refreshDialogList:h,chatId:p,agentList:g}=(0,a.useContext)(k.p),{t:v}=(0,en.$G)(),f=(0,u.useSearchParams)(),b=null!==(t=f&&f.get("spaceNameOriginal"))&&void 0!==t?t:"",[j,y]=(0,a.useState)(!1),[w,_]=(0,a.useState)(!1),[S,P]=(0,a.useState)(l),[R,E]=(0,a.useState)(""),O=(0,a.useRef)(null),D=(0,a.useMemo)(()=>"chat_dashboard"===d,[d]),M=(0,a.useMemo)(()=>{switch(d){case"chat_agent":return g.join(",");case"chat_excel":return null==c?void 0:c.select_param;default:return b||i}},[d,g,c,i,b]),L=async e=>{if(!j&&e.trim())try{y(!0),await s(e,{select_param:null!=M?M:""})}finally{y(!1)}},A=e=>{try{return JSON.parse(e)}catch(t){return e}},[T,H]=o.ZP.useMessage(),J=async e=>{let t=null==e?void 0:e.replace(/\trelations:.*/g,""),l=I()(t);l?t?T.open({type:"success",content:v("Copy_success")}):T.open({type:"warning",content:v("Copy_nothing")}):T.open({type:"error",content:v("Copry_error")})};return(0,n.Z)(async()=>{let e=em();e&&e.id===p&&(await L(e.message),h(),localStorage.removeItem(ex.rU))},[p]),(0,a.useEffect)(()=>{let e=l;D&&(e=ed().cloneDeep(l).map(e=>((null==e?void 0:e.role)==="view"&&"string"==typeof(null==e?void 0:e.context)&&(e.context=A(null==e?void 0:e.context)),e))),P(e.filter(e=>["view","human"].includes(e.role)))},[D,l]),(0,a.useEffect)(()=>{setTimeout(()=>{var e;null===(e=O.current)||void 0===e||e.scrollTo(0,O.current.scrollHeight)},50)},[l]),(0,r.jsxs)(r.Fragment,{children:[H,(0,r.jsx)("div",{ref:O,className:"flex flex-1 overflow-y-auto pb-8 w-full flex-col",children:(0,r.jsx)("div",{className:"flex items-center flex-1 flex-col text-sm leading-6 text-slate-900 dark:text-slate-300 sm:text-base sm:leading-7",children:S.length?S.map((e,t)=>{var l;return(0,r.jsx)(F,{content:e,isChartChat:D,onLinkClick:()=>{_(!0),E(JSON.stringify(null==e?void 0:e.context,null,2))},children:"view"===e.role&&(0,r.jsxs)("div",{className:"flex w-full flex-row-reverse pt-2 md:pt-4 border-t border-gray-200 mt-2 md:mt-4",children:[(0,r.jsx)(es,{conv_index:Math.ceil((t+1)/2),question:null===(l=null==S?void 0:S.filter(t=>(null==t?void 0:t.role)==="human"&&(null==t?void 0:t.order)===e.order)[0])||void 0===l?void 0:l.context,knowledge_space:b||i||""}),(0,r.jsx)(er.Z,{title:v("Copy"),children:(0,r.jsx)(el.Z,{onClick:()=>J(null==e?void 0:e.context),slots:{root:W.ZP},slotProps:{root:{variant:"plain",color:"primary"}},sx:{borderRadius:40},children:(0,r.jsx)(C.Z,{})})})]})},t)}):(0,r.jsx)(eo.Z,{image:"/empty.png",imageStyle:{width:320,height:320,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:"flex items-center justify-center flex-col h-full w-full",description:"Start a conversation"})})}),(0,r.jsx)("div",{className:Z()("relative after:absolute after:-top-8 after:h-8 after:w-full after:bg-gradient-to-t after:from-white after:to-transparent dark:after:from-[#212121]",{"cursor-not-allowed":"chat_excel"===d&&!(null==c?void 0:c.select_param)}),children:(0,r.jsxs)("div",{className:"flex flex-wrap w-full py-2 sm:pt-6 sm:pb-10",children:[m&&(0,r.jsx)("div",{className:"mr-2 flex items-center h-10",children:(0,N.A)(m)}),(0,r.jsx)(eu.Z,{loading:j,onSubmit:L})]})}),(0,r.jsx)(ei.default,{title:"JSON Editor",open:w,width:"60%",cancelButtonProps:{hidden:!0},onOk:()=>{_(!1)},onCancel:()=>{_(!1)},children:(0,r.jsx)(x.Z,{className:"w-full h-[500px]",language:"json",value:R})})]})},ep=l(9837),eg=l(39156),ev=l(45247),ef=()=>{var e;let t=(0,u.useSearchParams)(),{scene:l,chatId:s,model:o,setModel:i}=(0,a.useContext)(k.p),c=d({}),x=null!==(e=t&&t.get("initMessage"))&&void 0!==e?e:"",[m,h]=(0,a.useState)(!1),[p,g]=(0,a.useState)(),[v,f]=(0,a.useState)([]),b=async()=>{h(!0);let[,e]=await (0,ea.Vx)((0,ea.$i)(s));f(null!=e?e:[]),h(!1)},j=e=>{var t;let l=null===(t=e[e.length-1])||void 0===t?void 0:t.context;if(l)try{let e=JSON.parse(l);g((null==e?void 0:e.template_name)==="report"?null==e?void 0:e.charts:void 0)}catch(e){g(void 0)}};(0,n.Z)(async()=>{let e=em();e&&e.id===s||await b()},[x,s]),(0,a.useEffect)(()=>{var e,t;if(!v.length)return;let l=null===(e=null===(t=v.filter(e=>"view"===e.role))||void 0===t?void 0:t.slice(-1))||void 0===e?void 0:e[0];(null==l?void 0:l.model_name)&&i(l.model_name),j(v)},[v.length]);let y=(0,a.useCallback)((e,t)=>new Promise(r=>{let a=[...v,{role:"human",context:e,model_name:o,order:0,time_stamp:0},{role:"view",context:"",model_name:o,order:0,time_stamp:0}],n=a.length-1;f([...a]),c({context:e,data:{...t,chat_mode:l||"chat_normal",model_name:o},chatId:s,onMessage:e=>{a[n].context=e,f([...a])},onDone:()=>{j(a),r()},onClose:()=>{j(a),r()},onError:e=>{a[n].context=e,f([...a]),r()}})}),[v,c]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ev.Z,{visible:m}),(0,r.jsx)(ep.Z,{refreshHistory:b,modelChange:e=>{i(e)}}),(0,r.jsxs)("div",{className:"px-4 flex flex-1 flex-wrap overflow-hidden relative",children:[!!(null==p?void 0:p.length)&&(0,r.jsx)("div",{className:"w-full xl:w-3/4 h-3/5 xl:pr-4 xl:h-full overflow-y-auto",children:(0,r.jsx)(eg.Z,{chartsData:p})}),!(null==p?void 0:p.length)&&"chat_dashboard"===l&&(0,r.jsx)(eo.Z,{image:"/empty.png",imageStyle:{width:320,height:320,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:"w-full xl:w-3/4 h-3/5 xl:h-full pt-0 md:pt-10"}),(0,r.jsx)("div",{className:Z()("flex flex-1 flex-col overflow-hidden",{"px-0 xl:pl-4 h-2/5 xl:h-full border-t xl:border-t-0 xl:border-l":"chat_dashboard"===l,"h-full lg:px-8":"chat_dashboard"!==l}),children:(0,r.jsx)(eh,{messages:v,onSubmit:y})})]})]})}},38954:function(e,t,l){l.d(t,{Z:function(){return j}});var r=l(85893),a=l(27496),n=l(59566),s=l(71577),o=l(67294),i=l(2487),c=l(83062),d=l(2453),u=l(74627),x=l(39479),m=l(51009),h=l(58299),p=l(577),g=l(30119),v=l(67421);let f=e=>{let{data:t,loading:l,submit:a,close:n}=e,{t:s}=(0,v.$G)(),o=e=>()=>{a(e),n()};return(0,r.jsx)("div",{style:{maxHeight:400,overflow:"auto"},children:(0,r.jsx)(i.Z,{dataSource:null==t?void 0:t.data,loading:l,rowKey:e=>e.prompt_name,renderItem:e=>(0,r.jsx)(i.Z.Item,{onClick:o(e.content),children:(0,r.jsx)(c.Z,{title:e.content,children:(0,r.jsx)(i.Z.Item.Meta,{style:{cursor:"copy"},title:e.prompt_name,description:s("Prompt_Info_Scene")+"：".concat(e.chat_scene,"，")+s("Prompt_Info_Sub_Scene")+"：".concat(e.sub_chat_scene)})})},e.prompt_name)})})};var b=e=>{let{submit:t}=e,{t:l}=(0,v.$G)(),[a,n]=(0,o.useState)(!1),[s,i]=(0,o.useState)("common"),{data:b,loading:j}=(0,p.Z)(()=>(0,g.PR)("/prompt/list",{prompt_type:s}),{refreshDeps:[s],onError:e=>{d.ZP.error(null==e?void 0:e.message)}});return(0,r.jsx)(u.Z,{title:(0,r.jsx)(x.Z.Item,{label:"Prompt "+l("Type"),children:(0,r.jsx)(m.default,{style:{width:130},value:s,onChange:e=>{i(e)},options:[{label:l("Public")+" Prompts",value:"common"},{label:l("Private")+" Prompts",value:"private"}]})}),content:(0,r.jsx)(f,{data:b,loading:j,submit:t,close:()=>{n(!1)}}),placement:"topRight",trigger:"click",open:a,onOpenChange:e=>{n(e)},children:(0,r.jsx)(c.Z,{title:l("Click_Select")+" Prompt",children:(0,r.jsx)(h.Z,{className:"bottom-32"})})})},j=function(e){let{children:t,loading:l,onSubmit:i,...c}=e,[d,u]=(0,o.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default.TextArea,{className:"flex-1",size:"large",value:d,autoSize:{minRows:1,maxRows:4},...c,onPressEnter:e=>{if(d.trim()&&13===e.keyCode){if(e.shiftKey){u(e=>e+"\n");return}i(d),setTimeout(()=>{u("")},0)}},onChange:e=>{if("number"==typeof c.maxLength){u(e.target.value.substring(0,c.maxLength));return}u(e.target.value)}}),(0,r.jsx)(s.ZP,{className:"ml-2 flex items-center justify-center",size:"large",type:"text",loading:l,icon:(0,r.jsx)(a.Z,{}),onClick:()=>{i(d)}}),(0,r.jsx)(b,{submit:e=>{u(d+e)}}),t]})}},45247:function(e,t,l){var r=l(85893),a=l(50888);t.Z=function(e){let{visible:t}=e;return t?(0,r.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm text-3xl animate-fade animate-duration-200",children:(0,r.jsx)(a.Z,{})}):null}}}]);