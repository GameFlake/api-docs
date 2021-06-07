(self.webpackChunkgameflake_docs=self.webpackChunkgameflake_docs||[]).push([[609],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9332:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={id:3,title:"Consultar juego",description:"Documentaci\xf3n del endpoint para consultar juego",slug:"/consultar_juego",sidebar_position:3},l={unversionedId:"titulos-juegos/3",id:"titulos-juegos/3",isDocsHomePage:!1,title:"Consultar juego",description:"Documentaci\xf3n del endpoint para consultar juego",source:"@site/docs/titulos-juegos/consultar-juego.md",sourceDirName:"titulos-juegos",slug:"/consultar_juego",permalink:"/api-docs/build/docs/consultar_juego",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/titulos-juegos/consultar-juego.md",version:"current",sidebarPosition:3,frontMatter:{id:"3",title:"Consultar juego",description:"Documentaci\xf3n del endpoint para consultar juego",slug:"/consultar_juego",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Consultar detalle de t\xedtulo",permalink:"/api-docs/build/docs/consultar_detalle_titulo"},next:{title:"Consultar ofertas recibidas",permalink:"/api-docs/build/docs/consultar_ofertas_recibidas"}},s=[{value:"Petici\xf3n HTTP",id:"petici\xf3n-http",children:[]},{value:"Par\xe1metros de la petici\xf3n.",id:"par\xe1metros-de-la-petici\xf3n",children:[]},{value:"Ejemplo de petici\xf3n y respuesta",id:"ejemplo-de-petici\xf3n-y-respuesta",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Intercambia las credenciales del usuario por un token que debe acompa\xf1ar\na todas las peticiones posteriores. Este token representa al usuario en un\ndispositivo y persiste hasta que se hace una peticion para revocarlo."),(0,i.kt)("h3",{id:"petici\xf3n-http"},"Petici\xf3n HTTP"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST https://gameflake.game/api/tokens/create")),(0,i.kt)("h3",{id:"par\xe1metros-de-la-petici\xf3n"},"Par\xe1metros de la petici\xf3n."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo de dato"),(0,i.kt)("th",{parentName:"tr",align:null},"\xbfEs obligatorio?"),(0,i.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Si"),(0,i.kt)("td",{parentName:"tr",align:null},"Direcci\xf3n de correo electr\xf3nico del usuario.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Si"),(0,i.kt)("td",{parentName:"tr",align:null},"Contrase\xf1a de la cuenta del usuario.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"device_name")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Si"),(0,i.kt)("td",{parentName:"tr",align:null},"Nombre del dispositivo donde se inicia sesi\xf3n.")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Este es uno de los pocos endpoints que no requiere un token en el encabezado ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <api_token_aqui>"),"."))),(0,i.kt)("h3",{id:"ejemplo-de-petici\xf3n-y-respuesta"},"Ejemplo de petici\xf3n y respuesta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Ejemplo de petici\xf3n"',title:'"Ejemplo',de:!0,'petici\xf3n"':!0},'curl "https://gameflake.game/api/tokens/create" \\\n  -X "POST" \\\n  -H "Content-Type: multipart/form-data" \\\n  -H "Authorization: Bearer <api_token_aqui>" \\\n  -d $\'{\n         "email": "gmachia@gmail.com",\n         "password": "9yUQc%ewEf^(Tw4",\n         "device_name": "iPhone 4s"\n     }\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Ejemplo de respuesta"',title:'"Ejemplo',de:!0,'respuesta"':!0},'{\n    "token": "1|63eD2tUsY2Xdfoc5SZgFtWCobvjRYbeioT2XZZYU"\n}\n')))}p.isMDXComponent=!0}}]);