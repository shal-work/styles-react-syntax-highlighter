(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(t,e,a){t.exports={appWrapper:"ProtoVsc_appWrapper__3ClUT",offsetWind:"ProtoVsc_offsetWind__35D-F",offsetExpl:"ProtoVsc_offsetExpl__2FkPN",indent3per:"ProtoVsc_indent3per__12TKr",indent6per:"ProtoVsc_indent6per__1HQIl",indent9per:"ProtoVsc_indent9per__kB7KN",header:"ProtoVsc_header__1l5kI",main:"ProtoVsc_main__2vsY7",explorer:"ProtoVsc_explorer__1W22a",explorer__header:"ProtoVsc_explorer__header__LHP-D",explorer__row:"ProtoVsc_explorer__row__prQVz",explorer__column:"ProtoVsc_explorer__column__1Xa_q",row__sub:"ProtoVsc_row__sub__1bytZ",row__files:"ProtoVsc_row__files__2KsQp",row__subFile:"ProtoVsc_row__subFile__3k1t6",row__10sub:"ProtoVsc_row__10sub__1oaj6",header__window:"ProtoVsc_header__window__3ObVu",window:"ProtoVsc_window__1rwaM",windowContent:"ProtoVsc_windowContent__XW1DM",marker:"ProtoVsc_marker__5EsnV",cursorPointer:"ProtoVsc_cursorPointer__3iDii",folder:"ProtoVsc_folder__1eEvo",folderBracket:"ProtoVsc_folderBracket__2norE",rotate0:"ProtoVsc_rotate0__3PG3H",rotate90:"ProtoVsc_rotate90__2Nppl",fileJs:"ProtoVsc_fileJs__NYbZN",fileTS:"ProtoVsc_fileTS__HEUqL",fileTSEvnD:"ProtoVsc_fileTSEvnD__25PZi",fileNPM:"ProtoVsc_fileNPM__2Amgh",fileCss:"ProtoVsc_fileCss__qoFeB",container:"ProtoVsc_container__2PxxD",container__sub:"ProtoVsc_container__sub__24vWw",navbarToggle:"ProtoVsc_navbarToggle__33jnu",vabar:"ProtoVsc_vabar__1X-he",rsMenuForm__burger:"ProtoVsc_rsMenuForm__burger__2OX-X",iconBar:"ProtoVsc_iconBar__33DIl",active:"ProtoVsc_active__3OdW2",active1:"ProtoVsc_active1__2fzEY",active2:"ProtoVsc_active2__2APX-",active3:"ProtoVsc_active3__3gZGA",notActive:"ProtoVsc_notActive__2BZai",notActive1:"ProtoVsc_notActive1__29ScQ",notActive2:"ProtoVsc_notActive2__2HNb_",notActive3:"ProtoVsc_notActive3__2VdcJ",fadeInLeft:"ProtoVsc_fadeInLeft__2NCx6",fadeOutLeft:"ProtoVsc_fadeOutLeft__21R6z",font14:"ProtoVsc_font14__1KJ6A",containerHiaderButton:"ProtoVsc_containerHiaderButton__3ku5F",iconClipbord:"ProtoVsc_iconClipbord__3n-ql",iconCheck:"ProtoVsc_iconCheck__1cCn0",containerPositionAbsolute:"ProtoVsc_containerPositionAbsolute__3A1lt",containerSyntaxhigHlighter:"ProtoVsc_containerSyntaxhigHlighter__1VdsV",backlight:"ProtoVsc_backlight__2fasx",explorerShow:"ProtoVsc_explorerShow__1Tn9C",explorerHide:"ProtoVsc_explorerHide__2fRZ-"}},3:function(t,e,a){t.exports={background:"ColorCode_background__3nIzt",blockCode:"ColorCode_blockCode__TB_pD",blockCodeColumn:"ColorCode_blockCodeColumn__1wAfT",decor:"ColorCode_decor__3KVpO",colorBlue:"ColorCode_colorBlue__1ghj-","color\u0412arkBlue":"ColorCode_color\u0412arkBlue__2lDvZ",fs14px:"ColorCode_fs14px__1Ghmt",fs18px:"ColorCode_fs18px__3sunG",colorPurple:"ColorCode_colorPurple__NbKfr",colorString:"ColorCode_colorString__IToLO",colorLightBlue:"ColorCode_colorLightBlue__rG7NB",colorYellow:"ColorCode_colorYellow__1rMCf",colorGray:"ColorCode_colorGray__3S5rv",colorGreen:"ColorCode_colorGreen__375ae",colorWhite:"ColorCode_colorWhite__aKNCp",colorAzuree:"ColorCode_colorAzuree__2MeEP",colorBlocked:"ColorCode_colorBlocked__3NFxA",colorRed:"ColorCode_colorRed__2-XWx"}},70:function(t,e,a){},71:function(t,e,a){},72:function(t,e,a){},83:function(t,e,a){"use strict";a.r(e);var s=a(2),c=a.n(s),o=a(58),r=a.n(o),n=(a(70),a(71),a(72),a(3)),i=a.n(n),l=a(1),d=a.n(l),p=a(84),h=a(12),_=a(13),j=a(14),b=a(15),m=a(16),u=a(17),x=a(18),f=a(19),y=a(20),g=a(21),O=a(22),P=a(23),N=a(24),S=a(25),v=a(26),C=a(27),k=a(28),w=a(29),V=a(30),A=a(31),E=a(32),B=a(33),L=a(34),F=a(35),T=a(36),D=a(37),H=a(38),W=a(39),J=a(40),M=a(41),I=a(42),z=a(43),R=a(44),G=a(45),X=a(46),K=a(47),Z=a(48),q=a(49),U=a(50),Y=a(51),Q=a(52),$=a(53),tt=a(54);const et="UPDATE_FILE_APP",at="UPDATE_FILE_APP_CSS",st="UPDATE_PACKAGE_JSON",ct="SHOW_EXPLORER__STAPE",ot="INITIALIZATION",rt=t=>({type:et,flag:t}),nt=()=>({type:ot}),it=t=>({type:ct,flag:t});var lt=(t,e)=>{switch(e.type){case et:return t.statusApp=e.flag,t;case at:return t.statusAppCss=e.flag,t;case st:return t.statusPackageJson=e.flag,t;case ot:return t.statusApp=!1,t.statusAppCss=!1,t.statusPackageJson=!1,t;case ct:return t.showExplorer=e.flag,t;default:return t}},dt=a(0);var pt=t=>{let[e,a]=Object(s.useState)(t.state.showExplorer),[c,o]=Object(s.useState)(!0);const r=()=>{e?(a(!1),n(!1)):(a(!0),n(!0),o(!1))},n=e=>{t.dispatch(it(e))};return Object(s.useEffect)((()=>{a(t.state.showExplorer)}),[t.state.showExplorer]),Object(dt.jsxs)(dt.Fragment,{children:[!e&&c&&Object(dt.jsx)("div",{className:d.a.vabar,onClick:r,children:Object(dt.jsxs)("button",{type:"button",className:"".concat(d.a.navbarToggle," ").concat(d.a.rsMenuForm__burger),children:[Object(dt.jsx)("span",{className:d.a.iconBar}),Object(dt.jsx)("span",{className:d.a.iconBar}),Object(dt.jsx)("span",{className:d.a.iconBar})]})}),e&&!c&&Object(dt.jsx)("div",{className:d.a.vabar,onClick:r,children:Object(dt.jsxs)("button",{type:"button",className:"".concat(d.a.navbarToggle," ").concat(d.a.rsMenuForm__burger," ").concat(d.a.active),children:[Object(dt.jsx)("span",{className:d.a.iconBar}),Object(dt.jsx)("span",{className:d.a.iconBar}),Object(dt.jsx)("span",{className:d.a.iconBar})]})}),!e&&!c&&Object(dt.jsx)("div",{className:d.a.header,onClick:r,children:Object(dt.jsxs)("button",{type:"button",className:"".concat(d.a.navbarToggle," ").concat(d.a.rsMenuForm__burger," ").concat(d.a.notActive),children:[Object(dt.jsx)("span",{className:d.a.iconBar}),Object(dt.jsx)("span",{className:d.a.iconBar}),Object(dt.jsx)("span",{className:d.a.iconBar})]})})]})};const ht="App.jsx",_t="App.css",jt="package.json";var bt=t=>{let[e,a]=Object(s.useState)(!1),[c,o]=Object(s.useState)(t.isFirstDownload);const r=()=>{o(!1),e&&a(!1)};return Object(dt.jsxs)(dt.Fragment,{children:[c&&Object(dt.jsx)("div",{className:d.a.explorer__column,onClick:r,children:Object(dt.jsxs)("div",{className:"".concat(d.a.explorer__row," ").concat(i.a.cursorPointer),children:[Object(dt.jsx)("code",{className:"".concat(d.a.folderBracket," ").concat(d.a.offsetExpl," ").concat(d.a.font14," ").concat(d.a.cursorPointer)}),Object(dt.jsx)("code",{className:"".concat(d.a.folder," ").concat(d.a.offsetExpl," ").concat(d.a.font14)}),Object(dt.jsxs)("code",{className:"".concat(d.a.folderName," ").concat(d.a.offsetExpl," ").concat(i.a.colorLightBlue," ").concat(d.a.font14," ").concat(d.a.cursorPointer),children:[" ",t.folderName," "]})]})}),e&&t.enabled&&!c&&Object(dt.jsx)("div",{className:d.a.explorer__column,onClick:r,children:Object(dt.jsxs)("div",{className:"".concat(d.a.explorer__row," ").concat(i.a.cursorPointer),children:[Object(dt.jsx)("code",{className:"".concat(d.a.folderBracket," ").concat(d.a.offsetExpl," ").concat(d.a.font14," ").concat(d.a.cursorPointer," ").concat(d.a.rotate0)}),Object(dt.jsx)("code",{className:"".concat(d.a.folder," ").concat(d.a.offsetExpl," ").concat(d.a.font14)}),Object(dt.jsxs)("code",{className:"".concat(d.a.folderName," ").concat(d.a.offsetExpl," ").concat(i.a.colorLightBlue," ").concat(d.a.font14," ").concat(d.a.cursorPointer),children:[" ",t.folderName," "]})]})}),!e&&t.enabled&&!c&&Object(dt.jsxs)("div",{className:d.a.explorer__column,children:[Object(dt.jsxs)("div",{className:"".concat(d.a.explorer__row," ").concat(i.a.cursorPointer),onClick:()=>{a(!0),t.dispatch(nt())},children:[Object(dt.jsx)("code",{className:"".concat(d.a.folderBracket," ").concat(d.a.offsetExpl," ").concat(d.a.font14," ").concat(d.a.cursorPointer," ").concat(d.a.rotate90," ")}),Object(dt.jsx)("code",{className:"".concat(d.a.folder," ").concat(d.a.offsetExpl," ").concat(d.a.font14," ").concat(d.a.cursorPointer)}),Object(dt.jsxs)("code",{className:"".concat(d.a.folderName," ").concat(d.a.offsetExpl," ").concat(i.a.colorLightBlue," ").concat(d.a.font14," ").concat(d.a.cursorPointer),children:[" ",t.folderName," "]})]}),Object(dt.jsx)("div",{className:"".concat(d.a.row__subFile," ").concat(d.a.font14," ").concat(d.a.cursorPointer),children:t.children})]}),!t.enabled&&c&&Object(dt.jsxs)("div",{className:"".concat(d.a.explorer__row," ").concat(i.a.colorBlocked),children:[Object(dt.jsx)("div",{className:"".concat(d.a.folderBracket," ").concat(d.a.offsetExpl," ").concat(d.a.font14)}),Object(dt.jsx)("div",{className:"".concat(d.a.folder," ").concat(d.a.offsetExpl," ").concat(d.a.font14)}),Object(dt.jsxs)("div",{className:"".concat(d.a.folderName," ").concat(d.a.offsetExpl," ").concat(i.a.colorLightBlue," ").concat(d.a.font14),children:[" ",t.folderName," "]})]})]})};const mt=t=>Object(dt.jsx)("div",{className:"".concat(d.a.row__files," ").concat(t.status&&"".concat(d.a.backlight)," ").concat(!t.enabled&&"".concat(i.a.colorBlocked)),onClick:()=>{switch(t.dispatch(it(!1)),t.fileName){case ht:t.status||(t.dispatch(nt()),t.dispatch(rt(!0)));break;case _t:t.status||(t.dispatch(nt()),t.dispatch({type:at,flag:!0}));break;case jt:t.status||(t.dispatch(nt()),t.dispatch((t=>({type:st,flag:t}))(!0)));break;default:console.log("\u043d\u0435\u0442 props.fileName")}},children:Object(dt.jsx)("div",{className:"".concat(t.ico," ").concat(d.a.offsetExpl," ").concat(i.a.colorLightBlue," ").concat(d.a.font14," ").concat(d.a.cursorPointer),children:Object(dt.jsx)("code",{children:t.fileName})})});var ut=t=>Object(dt.jsxs)(dt.Fragment,{children:[t.fileName===ht&&Object(dt.jsx)(mt,{fileName:t.fileName,ico:t.ico,status:t.state.statusApp,enabled:t.enabled,dispatch:t.dispatch}),t.fileName===_t&&Object(dt.jsx)(mt,{fileName:t.fileName,ico:t.ico,status:t.state.statusAppCss,enabled:t.enabled,dispatch:t.dispatch}),t.fileName===jt&&Object(dt.jsx)(mt,{fileName:t.fileName,ico:t.ico,status:t.state.statusPackageJson,enabled:t.enabled,dispatch:t.dispatch})]});var xt=t=>{let[e,a]=Object(s.useState)(t.state),c=d.a.explorerHide;return c=e.showExplorer?d.a.explorerShow:d.a.explorerHide,Object(s.useEffect)((()=>{a(t.state)}),[t.state]),Object(dt.jsxs)("div",{className:"".concat(d.a.explorer," ").concat(i.a.colorWhite," ").concat(c),children:[Object(dt.jsx)("div",{className:"".concat(d.a.explorer__header," ").concat(d.a.colorFileName," ").concat(d.a.font14),children:Object(dt.jsx)("code",{children:"explorer"})}),Object(dt.jsx)("div",{className:d.a.container,children:Object(dt.jsx)("div",{className:d.a.explorer__column,children:Object(dt.jsxs)("div",{className:d.a.row__sub,children:[Object(dt.jsxs)(bt,{folderName:"src",dispatch:t.dispatch,enabled:!0,id:t.id,isFirstDownload:!1,children:[Object(dt.jsx)(ut,{fileName:_t,ico:d.a.fileCss,dispatch:t.dispatch,state:t.state,enabled:!0,id:t.id}),Object(dt.jsx)(ut,{fileName:ht,ico:d.a.fileTS,dispatch:t.dispatch,state:t.state,enabled:!0,id:t.id})]}),Object(dt.jsx)(ut,{fileName:jt,ico:d.a.fileNPM,dispatch:t.dispatch,state:t.state,enabled:!0,id:t.id})]})})})]})};var ft=t=>{const[e,a]=Object(s.useState)(!0),[c,o]=Object(s.useState)("");let r=t.status;return Object(s.useEffect)((()=>{!async function(){o(r?await async function(t){let e;try{e=await t}catch(a){return console.error("There was an error in your code generator: ",a),"Nothing to see here, move along!"}return e}(t.str):"")}()})),Object(dt.jsx)(dt.Fragment,{children:r&&Object(dt.jsxs)("div",{className:"".concat(i.a.colorPurple,"  ").concat(d.a.windowContent," ").concat(d.a.offsetWind," ").concat(d.a.font14),children:[Object(dt.jsx)("div",{className:"".concat(i.a.colorPurple,"  ").concat(d.a.font14," ").concat(d.a.containerSyntaxhigHlighter," ").concat(d.a.containerPositionAbsolute),children:Object(dt.jsx)(p.a,{language:"jsx",style:t.style,wrapLongLines:!0,children:c})}),Object(dt.jsx)("div",{className:d.a.containerHiaderButton,children:e?Object(dt.jsx)("button",{className:d.a.iconClipbord,onClick:()=>{navigator.clipboard.writeText(t.str),a(!1),setTimeout((()=>{a(!0)}),1e3)},children:"Copy code"}):Object(dt.jsx)("button",{className:d.a.iconCheck,children:"Copyed"})})]})})};const yt=t=>Object(dt.jsxs)(dt.Fragment,{children:[t.state.statusApp&&Object(dt.jsx)(ft,{status:t.state.statusApp,str:t.strFial.strApp,style:t.style,nameStyle:t.nameStyle}),t.state.statusAppCss&&Object(dt.jsx)(ft,{status:t.state.statusAppCss,str:t.strFial.strAppCss,style:t.style,nameStyle:t.nameStyle}),t.state.statusPackageJson&&Object(dt.jsx)(ft,{status:t.state.statusPackageJson,str:t.strFial.strPackageJson,style:t.style,nameStyle:t.nameStyle})]}),gt=t=>{let e=1;do{if(e===t.id)return Object(dt.jsx)(yt,{state:t.state,strFial:t.strFial,style:t.style,nameStyle:t.nameStyle});e++}while(e<=t.dataLength)};var Ot=t=>{const[e,a]=Object(s.useState)(!0);return Object(s.useEffect)((()=>{e&&(t.dispatch(rt(!0)),a(!1))})),Object(dt.jsx)(dt.Fragment,{children:Object(dt.jsxs)("div",{className:"".concat(d.a.window," ").concat(i.a.colorWhite," "),children:[Object(dt.jsx)("div",{className:"".concat(d.a.header__window," ").concat(i.a.colorAzuree," ").concat(i.a.colorWhite," ").concat(d.a.font14),children:Object(dt.jsx)("code",{children:"window"})}),gt(t)]})})};let Pt={strApp:"\nimport './App.css';\nimport React from 'react';\nimport { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';\nimport strApp from './strApp'\n\n\nfunction App(props) {\n  debugger\n   return (\n    <div className=\"App\">\n          <SyntaxHighlighter language=\"jsx\" style={oneDark}>\n            {strApp}\n          </SyntaxHighlighter>\n    </div>\n    );\n}\n\nexport default App;\n",strAppCss:'\n.App {\n    text-align: center;\n}\n\n.container-syntaxhighlighter pre {\n    line-height: 0 !important;\n    padding: 0 !important ;\n    margin: 0  !important ;\n}\n\n.container-syntaxhighlighter pre code {\n    line-height: 0 !important;\n    padding: 0 10px !important ;\n    margin: 0  !important ;\n}\n.container-syntaxhighlighter code span {\n    font-size: 13px;\n    line-height: 1.4 !important;\n    font-family: "Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace;\n}',strPackageJson:'\n{\n    "name": "my-app",\n    "version": "0.1.0",\n    "private": true,\n    "homepage": "./",\n    "dependencies": {\n      "@testing-library/jest-dom": "^5.14.1",\n      "@testing-library/react": "^11.2.7",\n      "@testing-library/user-event": "^12.8.3",\n      "react": "^17.0.2",\n      "react-dom": "^17.0.2",\n      "react-scripts": "4.0.1",\n      "react-syntax-highlighter": "^15.5.0",\n      "web-vitals": "^2.1.4"\n    },\n    "scripts": {\n      "start": "react-scripts start",\n      "build": "react-scripts build",\n      "test": "react-scripts test",\n      "eject": "react-scripts eject"\n    },\n    "eslintConfig": {\n      "extends": [\n        "react-app",\n        "react-app/jest"\n      ]\n    },\n    "browserslist": {\n      "production": [\n        ">0.2%",\n        "not dead",\n        "not op_mini all"\n      ],\n      "development": [\n        "last 1 chrome version",\n        "last 1 firefox version",\n        "last 1 safari version"\n      ]\n    }\n  }\n'};var Nt=t=>Object(dt.jsxs)(dt.Fragment,{children:[Object(dt.jsxs)("p",{children:["\u0418\u043c\u044f \u0441\u0442\u0438\u043b\u044f: \u2002 ",t.id,")"," \u2002 ",Object(dt.jsx)("b",{children:t.nameStyle})]}),Object(dt.jsxs)("div",{className:"".concat(i.a.background," ").concat(i.a.decor," ").concat(d.a.appWrapper),children:[Object(dt.jsx)(pt,{state:t.state,dispatch:t.dispatch,id:t.id}),Object(dt.jsxs)("div",{className:d.a.main,children:[Object(dt.jsx)(xt,{dispatch:t.dispatch,state:t.state,id:t.id}),Object(dt.jsx)(Ot,{dispatch:t.dispatch,state:t.state,strFial:Pt,id:t.id,style:t.style,nameStyle:t.nameStyle,dataLength:t.dataLength})]})]})]}),St=a(57);const vt=t=>Object(dt.jsx)("div",{className:"article-body",children:Object(dt.jsx)(Nt,{dispatch:t.dispatch,state:t.state,id:t.id,style:t.style,nameStyle:t.nameStyle,dataLength:t.dataLength},t.id)});var Ct=t=>{let e=[{id:1,style:h.a,nameStyle:"coy",dispatch:t.dispatch[0],state:t.state.state[0]},{id:2,style:_.a,nameStyle:"dark",dispatch:t.dispatch[1],state:t.state.state[1]},{id:3,style:j.a,nameStyle:"funky",dispatch:t.dispatch[2],state:t.state.state[2]},{id:4,style:b.a,nameStyle:"okaidia",dispatch:t.dispatch[3],state:t.state.state[3]},{id:5,style:m.a,nameStyle:"solarizedlight",dispatch:t.dispatch[4],state:t.state.state[4]},{id:6,style:u.a,nameStyle:"tomorrow",dispatch:t.dispatch[5],state:t.state.state[5]},{id:7,style:x.a,nameStyle:"twilight",dispatch:t.dispatch[6],state:t.state.state[6]},{id:8,style:f.a,nameStyle:"prism",dispatch:t.dispatch[7],state:t.state.state[7]},{id:9,style:y.a,nameStyle:"a11yDark",dispatch:t.dispatch[8],state:t.state.state[8]},{id:10,style:g.a,nameStyle:"atomDark",dispatch:t.dispatch[9],state:t.state.state[9]},{id:11,style:O.a,nameStyle:"base16AteliersulphurpoolLight",dispatch:t.dispatch[10],state:t.state.state[10]},{id:12,style:P.a,nameStyle:"cb",dispatch:t.dispatch[11],state:t.state.state[11]},{id:13,style:N.a,nameStyle:"coldarkCold",dispatch:t.dispatch[12],state:t.state.state[12]},{id:14,style:S.a,nameStyle:"coldarkDark",dispatch:t.dispatch[13],state:t.state.state[13]},{id:15,style:v.a,nameStyle:"coyWithoutShadows",dispatch:t.dispatch[14],state:t.state.state[14]},{id:16,style:C.a,nameStyle:"darcula",dispatch:t.dispatch[15],state:t.state.state[15]},{id:17,style:k.a,nameStyle:"dracula",dispatch:t.dispatch[16],state:t.state.state[16]},{id:18,style:w.a,nameStyle:"duotoneDark",dispatch:t.dispatch[17],state:t.state.state[17]},{id:19,style:V.a,nameStyle:"duotoneEarth",dispatch:t.dispatch[18],state:t.state.state[18]},{id:20,style:A.a,nameStyle:"duotoneForest",dispatch:t.dispatch[19],state:t.state.state[19]},{id:21,style:E.a,nameStyle:"duotoneLight",dispatch:t.dispatch[20],state:t.state.state[20]},{id:22,style:B.a,nameStyle:"duotoneSea",dispatch:t.dispatch[21],state:t.state.state[21]},{id:23,style:L.a,nameStyle:"duotoneSpace",dispatch:t.dispatch[22],state:t.state.state[22]},{id:24,style:F.a,nameStyle:"ghcolors",dispatch:t.dispatch[23],state:t.state.state[23]},{id:25,style:T.a,nameStyle:"gruvboxDark",dispatch:t.dispatch[24],state:t.state.state[24]},{id:26,style:D.a,nameStyle:"gruvboxLight",dispatch:t.dispatch[25],state:t.state.state[25]},{id:27,style:H.a,nameStyle:"holiTheme",dispatch:t.dispatch[26],state:t.state.state[26]},{id:28,style:W.a,nameStyle:"hopscotch",dispatch:t.dispatch[27],state:t.state.state[27]},{id:29,style:J.a,nameStyle:"lucario",dispatch:t.dispatch[28],state:t.state.state[28]},{id:30,style:M.a,nameStyle:"materialDark",dispatch:t.dispatch[29],state:t.state.state[29]},{id:31,style:I.a,nameStyle:"materialLight",dispatch:t.dispatch[30],state:t.state.state[30]},{id:32,style:St.a,nameStyle:"materialOceanic",dispatch:t.dispatch[31],state:t.state.state[31]},{id:33,style:z.a,nameStyle:"nightOwl",dispatch:t.dispatch[32],state:t.state.state[32]},{id:34,style:R.a,nameStyle:"nord",dispatch:t.dispatch[33],state:t.state.state[33]},{id:35,style:G.a,nameStyle:"oneDark",dispatch:t.dispatch[34],state:t.state.state[34]},{id:36,style:X.a,nameStyle:"oneLight",dispatch:t.dispatch[35],state:t.state.state[35]},{id:37,style:K.a,nameStyle:"pojoaque",dispatch:t.dispatch[36],state:t.state.state[36]},{id:38,style:Z.a,nameStyle:"shadesOfPurple",dispatch:t.dispatch[37],state:t.state.state[37]},{id:39,style:q.a,nameStyle:"solarizedDarkAtom",dispatch:t.dispatch[38],state:t.state.state[38]},{id:40,style:U.a,nameStyle:"synthwave84",dispatch:t.dispatch[39],state:t.state.state[39]},{id:41,style:Y.a,nameStyle:"vs",dispatch:t.dispatch[40],state:t.state.state[40]},{id:42,style:Q.a,nameStyle:"vscDarkPlus",dispatch:t.dispatch[41],state:t.state.state[41]},{id:43,style:$.a,nameStyle:"xonokai",dispatch:t.dispatch[42],state:t.state.state[42]},{id:44,style:tt.a,nameStyle:"zTouch",dispatch:t.dispatch[43],state:t.state.state[43]}].filter((e=>e.id<=t.dataLength)).map((e=>Object(dt.jsx)(vt,{dispatch:e.dispatch,state:e.state,id:e.id,style:e.style,nameStyle:e.nameStyle,dataLength:t.dataLength},e.id)));return Object(dt.jsx)("main",{className:"container-fluid",children:Object(dt.jsxs)("div",{className:"container",children:[Object(dt.jsxs)("h1",{className:"title",children:["\u041f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 React ",Object(dt.jsx)("br",{}),"\u0441 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439 react-syntax-highlighter"]}),Object(dt.jsx)("hr",{}),Object(dt.jsxs)("div",{className:"article-body",children:[Object(dt.jsxs)("p",{children:["\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u0434\u043b\u044f React \u0441 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439 ",Object(dt.jsx)("b",{children:"react-syntax-highlighter"}),"."]}),Object(dt.jsxs)("p",{children:["\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c ",Object(dt.jsx)("a",{className:i.a.color\u0412arkBlue,href:"https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/",target:"_blank",rel:"noreferrer",children:"\u0437\u0434\u0435\u0441\u044c"}),", \u043d\u043e \u043d\u0435 \u0443\u0434\u043e\u0431\u043d\u043e \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u044b\u0439 \u0441\u0442\u0438\u043b\u044c. \u0415\u0441\u043b\u0438 \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0441\u0440\u0430\u0437\u0443 \u0432\u0441\u0435 \u0441\u0442\u0438\u043b\u0438, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441 \u043d\u0443\u0436\u043d\u044b\u043c. \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0434\u0435\u043b\u0430\u044e \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f JSX \u044f\u0437\u044b\u043a\u0430 JavaScript."]}),Object(dt.jsxs)("p",{children:["\u0427\u0442\u043e\u0431\u044b \u043d\u0435 \u0431\u044b\u043b\u043e \u043e\u0448\u0438\u0431\u043e\u043a \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0442\u0438\u043f\u0430: \u2002",Object(dt.jsx)("span",{className:i.a.colorRed,children:"[Violation] 'message' handler took 651ms"}),",\u2002 \u043d\u0430\u0434\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0443\u044e \u0441\u0431\u043e\u0440\u043a\u0443:"]}),Object(dt.jsx)("div",{className:"".concat(i.a.colorPurple,"  ").concat(d.a.font14," ").concat(d.a.containerSyntaxhigHlighter," ").concat(i.a.background," ").concat(i.a.decor),children:Object(dt.jsx)(p.a,{language:"jsx",style:G.a,wrapLongLines:!0,children:"import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';"})}),Object(dt.jsxs)("p",{children:["\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0431\u043e\u0440\u043a\u0430 \u043f\u043e\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 ",Object(dt.jsx)("b",{children:"React"})," \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 ",Object(dt.jsx)("b",{children:"17"}),". \u041d\u0430 ",Object(dt.jsx)("b",{children:"React"})," \u0432\u0435\u0440\u0441\u0438\u0438 ",Object(dt.jsx)("b",{children:"18"})," \u0438\u0434\u0443\u0442 \u043e\u0448\u0438\u0431\u043a\u0438."]})]}),e,Object(dt.jsx)("hr",{})]})})},kt=a(7);let wt=[],Vt=[],At=[];let Et=function(t){var e=0;for(var a in t)t.hasOwnProperty(a)&&e++;return e}(kt);for(let Dt=0;Dt<=Et;Dt++)wt.push(lt);for(let Dt=0;Dt<=Et;Dt++)Vt.push({showExplorer:!1,statusApp:!1,statusAppCss:!1,statusPackageJson:!1,id:Dt});for(let Dt=0;Dt<=Et;Dt++)At.push((function(t){this._state.state[Dt]=wt[Dt](this._state.state[Dt],t),this._renderEntireTree(this._state)}));let Bt={_state:{state:Vt},getState(){return this._state},_renderEntireTree(){console.log("\u0412\u044b\u0437\u043e\u0432 state")},subscribe(t){this._renderEntireTree=t},dispatch:At,getObjectLength:()=>Et};window.store=Bt;var Lt=Bt;console.log("%c  \u0420\u041e\u0421\u0421\u0418\u042f  ","background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");const Ft=[];for(let Dt=0;Dt<Lt.getObjectLength();Dt++)Ft.push(Lt.dispatch[Dt].bind(Lt));let Tt=t=>{r.a.render(Object(dt.jsx)(c.a.StrictMode,{children:Object(dt.jsx)(Ct,{state:t,dispatch:Ft,dataLength:Lt.getObjectLength()})}),document.getElementById("root"))};Tt(Lt.getState()),Lt.subscribe(Tt)}},[[83,277,278]]]);
//# sourceMappingURL=main.53f2dccd.chunk.js.map