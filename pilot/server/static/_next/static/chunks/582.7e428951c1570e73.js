"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[582],{92795:function(l,e,n){n.r(e);var a=n(85893),t=n(67294),i=n(577),d=n(61685),o=n(2549),s=n(40911),r=n(47556),u=n(14986),v=n(30322),c=n(48665),h=n(27015),m=n(59566),f=n(32983),x=n(33944),p=n(41625),b=n(99513),y=n(30119),j=n(39332),g=n(79716),_=n(39156);let{Search:w}=m.default;function k(l){var e,n,i;let{editorValue:o,chartData:s,tableData:r,handleChange:u}=l,v=t.useMemo(()=>s?(0,a.jsx)("div",{className:"flex-1 overflow-auto p-3",style:{flexShrink:0,overflow:"hidden"},children:(0,a.jsx)(_.Z,{chartsData:[s]})}):(0,a.jsx)("div",{}),[s]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex-1 flex overflow-hidden",children:[(0,a.jsx)("div",{className:"flex-1",style:{flexShrink:0,overflow:"auto"},children:(0,a.jsx)(b.Z,{value:(null==o?void 0:o.sql)||"",language:"mysql",onChange:u,thoughts:(null==o?void 0:o.thoughts)||""})}),v]}),(0,a.jsx)("div",{className:"h-96 border-[var(--joy-palette-divider)] border-t border-solid overflow-auto",children:(null==r?void 0:null===(e=r.values)||void 0===e?void 0:e.length)>0?(0,a.jsxs)(d.Z,{"aria-label":"basic table",stickyHeader:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:null==r?void 0:null===(n=r.columns)||void 0===n?void 0:n.map((l,e)=>(0,a.jsx)("th",{children:l},l+e))})}),(0,a.jsx)("tbody",{children:null==r?void 0:null===(i=r.values)||void 0===i?void 0:i.map((l,e)=>{var n;return(0,a.jsx)("tr",{children:null===(n=Object.keys(l))||void 0===n?void 0:n.map(e=>(0,a.jsx)("td",{children:l[e]},e))},e)})})]}):(0,a.jsx)("div",{className:"h-full flex justify-center items-center",children:(0,a.jsx)(f.Z,{})})})]})}e.default=function(){var l,e,n,d,m;let[f,b]=t.useState([]),[_,N]=t.useState(""),[Z,S]=t.useState(),[q,P]=t.useState(!0),[E,C]=t.useState(),[R,A]=t.useState(),[D,O]=t.useState(),[T,z]=t.useState(),[B,M]=t.useState(),F=(0,j.useSearchParams)(),K=null==F?void 0:F.get("id"),L=null==F?void 0:F.get("scene"),{data:U,loading:V}=(0,i.Z)(async()=>await (0,y.Tk)("/v1/editor/sql/rounds",{con_uid:K}),{onSuccess:l=>{var e,n;let a=null==l?void 0:null===(e=l.data)||void 0===e?void 0:e[(null==l?void 0:null===(n=l.data)||void 0===n?void 0:n.length)-1];a&&S(null==a?void 0:a.round)}}),{run:Y,loading:$}=(0,i.Z)(async()=>{var l,e;let n=null===(l=null==U?void 0:null===(e=U.data)||void 0===e?void 0:e.find(l=>l.round===Z))||void 0===l?void 0:l.db_name;return await (0,y.PR)("/api/v1/editor/sql/run",{db_name:n,sql:null==D?void 0:D.sql})},{manual:!0,onSuccess:l=>{var e,n;z({columns:null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.colunms,values:null==l?void 0:null===(n=l.data)||void 0===n?void 0:n.values})}}),{run:H,loading:I}=(0,i.Z)(async()=>{var l,e;let n=null===(l=null==U?void 0:null===(e=U.data)||void 0===e?void 0:e.find(l=>l.round===Z))||void 0===l?void 0:l.db_name,a={db_name:n,sql:null==D?void 0:D.sql};return"chat_dashboard"===L&&(a.chart_type=null==D?void 0:D.showcase),await (0,y.PR)("/api/v1/editor/chart/run",a)},{manual:!0,ready:!!(null==D?void 0:D.sql),onSuccess:l=>{if(null==l?void 0:l.success){var e,n,a,t,i,d,o;z({columns:(null==l?void 0:null===(e=l.data)||void 0===e?void 0:null===(n=e.sql_data)||void 0===n?void 0:n.colunms)||[],values:(null==l?void 0:null===(a=l.data)||void 0===a?void 0:null===(t=a.sql_data)||void 0===t?void 0:t.values)||[]}),(null==l?void 0:null===(i=l.data)||void 0===i?void 0:i.chart_values)?C({chart_type:null==l?void 0:null===(d=l.data)||void 0===d?void 0:d.chart_type,values:null==l?void 0:null===(o=l.data)||void 0===o?void 0:o.chart_values,title:null==D?void 0:D.title,description:null==D?void 0:D.thoughts}):C(void 0)}}}),{run:J,loading:G}=(0,i.Z)(async()=>{var l,e,n,a,t;let i=null===(l=null==U?void 0:null===(e=U.data)||void 0===e?void 0:e.find(l=>l.round===Z))||void 0===l?void 0:l.db_name;return await (0,y.PR)("/api/v1/sql/editor/submit",{conv_uid:K,db_name:i,conv_round:Z,old_sql:null==R?void 0:R.sql,old_speak:null==R?void 0:R.thoughts,new_sql:null==D?void 0:D.sql,new_speak:(null===(n=null==D?void 0:null===(a=D.thoughts)||void 0===a?void 0:a.match(/^\n--(.*)\n\n$/))||void 0===n?void 0:null===(t=n[1])||void 0===t?void 0:t.trim())||(null==D?void 0:D.thoughts)})},{manual:!0,onSuccess:l=>{(null==l?void 0:l.success)&&Y()}}),{run:Q,loading:W}=(0,i.Z)(async()=>{var l,e,n,a,t,i;let d=null===(l=null==U?void 0:null===(e=U.data)||void 0===e?void 0:e.find(l=>l.round===Z))||void 0===l?void 0:l.db_name;return await (0,y.PR)("/api/v1/chart/editor/submit",{conv_uid:K,chart_title:null==D?void 0:D.title,db_name:d,old_sql:null==R?void 0:null===(n=R[B])||void 0===n?void 0:n.sql,new_chart_type:null==D?void 0:D.showcase,new_sql:null==D?void 0:D.sql,new_comment:(null===(a=null==D?void 0:null===(t=D.thoughts)||void 0===t?void 0:t.match(/^\n--(.*)\n\n$/))||void 0===a?void 0:null===(i=a[1])||void 0===i?void 0:i.trim())||(null==D?void 0:D.thoughts),gmt_create:new Date().getTime()})},{manual:!0,onSuccess:l=>{(null==l?void 0:l.success)&&H()}}),{data:X}=(0,i.Z)(async()=>{var l,e;let n=null===(l=null==U?void 0:null===(e=U.data)||void 0===e?void 0:e.find(l=>l.round===Z))||void 0===l?void 0:l.db_name;return await (0,y.Tk)("/v1/editor/db/tables",{db_name:n,page_index:1,page_size:200})},{ready:!!(null===(l=null==U?void 0:null===(e=U.data)||void 0===e?void 0:e.find(l=>l.round===Z))||void 0===l?void 0:l.db_name),refreshDeps:[null===(n=null==U?void 0:null===(d=U.data)||void 0===d?void 0:d.find(l=>l.round===Z))||void 0===n?void 0:n.db_name]}),{run:ll}=(0,i.Z)(async l=>await (0,y.Tk)("/v1/editor/sql",{con_uid:K,round:l}),{manual:!0,onSuccess:l=>{let e;try{if(Array.isArray(null==l?void 0:l.data))e=null==l?void 0:l.data,M("0");else if("string"==typeof(null==l?void 0:l.data)){let n=JSON.parse(null==l?void 0:l.data);e=n}else e=null==l?void 0:l.data}catch(l){console.log(l)}finally{A(e),Array.isArray(e)?O(null==e?void 0:e[Number(B||0)]):O(e)}}}),le=t.useMemo(()=>{let l=(e,n)=>e.map(e=>{let t=e.title,i=t.indexOf(_),d=t.substring(0,i),r=t.slice(i+_.length),u=i>-1?(0,a.jsx)(o.Z,{title:((null==e?void 0:e.comment)||(null==e?void 0:e.title))+((null==e?void 0:e.can_null)==="YES"?"(can null)":"(can't null)"),children:(0,a.jsxs)("span",{children:[d,(0,a.jsx)("span",{className:"text-[#1677ff]",children:_}),r,(null==e?void 0:e.type)&&(0,a.jsx)(s.ZP,{gutterBottom:!0,level:"body3",className:"pl-0.5",style:{display:"inline"},children:"[".concat(null==e?void 0:e.type,"]")})]})}):(0,a.jsx)(o.Z,{title:((null==e?void 0:e.comment)||(null==e?void 0:e.title))+((null==e?void 0:e.can_null)==="YES"?"(can null)":"(can't null)"),children:(0,a.jsxs)("span",{children:[t,(null==e?void 0:e.type)&&(0,a.jsx)(s.ZP,{gutterBottom:!0,level:"body3",className:"pl-0.5",style:{display:"inline"},children:"[".concat(null==e?void 0:e.type,"]")})]})});if(e.children){let a=n?String(n)+"_"+e.key:e.key;return{title:t,showTitle:u,key:a,children:l(e.children,a)}}return{title:t,showTitle:u,key:e.key}});return(null==X?void 0:X.data)?(b([null==X?void 0:X.data.key]),l([null==X?void 0:X.data])):[]},[_,X]),ln=t.useMemo(()=>{let l=[],e=(n,a)=>{if(n&&!((null==n?void 0:n.length)<=0))for(let t=0;t<n.length;t++){let i=n[t],{key:d,title:o}=i;l.push({key:d,title:o,parentKey:a}),i.children&&e(i.children,d)}};return le&&e(le),l},[le]),la=(l,e)=>{let n;for(let a=0;a<e.length;a++){let t=e[a];t.children&&(t.children.some(e=>e.key===l)?n=t.key:la(l,t.children)&&(n=la(l,t.children)))}return n};function lt(l){let e;if(!l)return{sql:"",thoughts:""};let n=l&&l.match(/(--.*)\n([\s\S]*)/),a="";return n&&n.length>=3&&(a=n[1],e=n[2]),{sql:e,thoughts:a}}return t.useEffect(()=>{Z&&ll(Z)},[ll,Z]),t.useEffect(()=>{R&&"chat_dashboard"===L&&B&&H()},[B,L,R,H]),t.useEffect(()=>{R&&"chat_dashboard"!==L&&Y()},[L,R,Y]),(0,a.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,a.jsx)(g.Z,{}),(0,a.jsx)("div",{className:"bg-[#f8f8f8] border-[var(--joy-palette-divider)] border-b border-solid flex items-center px-3 justify-between",children:(0,a.jsxs)("div",{className:"absolute right-4 top-6",children:[(0,a.jsx)(r.Z,{className:"bg-[#1677ff] text-[#fff] hover:bg-[#1c558e] px-4 cursor-pointer",loading:$||I,size:"sm",onClick:async()=>{"chat_dashboard"===L?H():Y()},children:"Run"}),(0,a.jsx)(r.Z,{variant:"outlined",size:"sm",className:"ml-3 px-4 cursor-pointer",loading:G||W,onClick:async()=>{"chat_dashboard"===L?await Q():await J()},children:"Save"})]})}),(0,a.jsxs)("div",{className:"flex flex-1 overflow-auto",children:[(0,a.jsxs)("div",{className:"text h-full border-[var(--joy-palette-divider)] border-r border-solid p-3 max-h-full overflow-auto",style:{width:"300px"},children:[(0,a.jsxs)("div",{className:"flex items-center py-3",children:[(0,a.jsx)(u.Z,{className:"h-4 min-w-[240px]",size:"sm",value:Z,onChange:(l,e)=>{S(e)},children:null==U?void 0:null===(m=U.data)||void 0===m?void 0:m.map(l=>(0,a.jsx)(v.Z,{value:null==l?void 0:l.round,children:null==l?void 0:l.round_name},null==l?void 0:l.round))}),(0,a.jsx)(h.Z,{className:"ml-2"})]}),(0,a.jsx)(w,{style:{marginBottom:8},placeholder:"Search",onChange:l=>{let{value:e}=l.target;if(null==X?void 0:X.data){if(e){let l=ln.map(l=>l.title.indexOf(e)>-1?la(l.key,le):null).filter((l,e,n)=>l&&n.indexOf(l)===e);b(l)}else b([]);N(e),P(!0)}}}),le&&le.length>0&&(0,a.jsx)(x.Z,{onExpand:l=>{b(l),P(!1)},expandedKeys:f,autoExpandParent:q,treeData:le,fieldNames:{title:"showTitle"}})]}),(0,a.jsx)("div",{className:"flex flex-col flex-1 max-w-full overflow-hidden",children:Array.isArray(R)?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.Z,{className:"h-full",sx:{".ant-tabs-content, .ant-tabs-tabpane-active":{height:"100%"},"& .ant-tabs-card.ant-tabs-top >.ant-tabs-nav .ant-tabs-tab, & .ant-tabs-card.ant-tabs-top >div>.ant-tabs-nav .ant-tabs-tab":{borderRadius:"0"}},children:(0,a.jsx)(p.Z,{className:"h-full dark:text-white px-2",activeKey:B,onChange:l=>{M(l),O(null==R?void 0:R[Number(l)])},items:null==R?void 0:R.map((l,e)=>({key:e+"",label:null==l?void 0:l.title,children:(0,a.jsx)("div",{className:"flex flex-col h-full",children:(0,a.jsx)(k,{editorValue:l,handleChange:l=>{let{sql:e,thoughts:n}=lt(l);O(l=>Object.assign({},l,{sql:e,thoughts:n}))},tableData:T,chartData:E})})}))})})}):(0,a.jsx)(k,{editorValue:R,handleChange:l=>{let{sql:e,thoughts:n}=lt(l);O(l=>Object.assign({},l,{sql:e,thoughts:n}))},tableData:T,chartData:void 0})})]})]})}},30119:function(l,e,n){n.d(e,{Tk:function(){return s},PR:function(){return r},Ej:function(){return u}});var a=n(2453),t=n(6154),i=n(83454);let d=t.Z.create({baseURL:i.env.API_BASE_URL});d.defaults.timeout=1e4,d.interceptors.response.use(l=>l.data,l=>Promise.reject(l)),n(96486);let o={"content-type":"application/json"},s=(l,e)=>{if(e){let n=Object.keys(e).filter(l=>void 0!==e[l]&&""!==e[l]).map(l=>"".concat(l,"=").concat(e[l])).join("&");n&&(l+="?".concat(n))}return d.get("/api"+l,{headers:o}).then(l=>l).catch(l=>{a.ZP.error(l),Promise.reject(l)})},r=(l,e)=>d.post(l,e,{headers:o}).then(l=>l).catch(l=>{a.ZP.error(l),Promise.reject(l)}),u=(l,e)=>d.post(l,e).then(l=>l).catch(l=>{a.ZP.error(l),Promise.reject(l)})}}]);