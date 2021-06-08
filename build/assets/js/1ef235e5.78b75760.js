(self.webpackChunkgameflake_docs=self.webpackChunkgameflake_docs||[]).push([[260],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3903:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:4,title:"Consultar datos de contacto",description:"Documentaci\xf3n del endpoint para consultar datos de contacto",slug:"/consultar_datos_contacto",sidebar_position:4},l={unversionedId:"intercambio-juegos/4",id:"intercambio-juegos/4",isDocsHomePage:!1,title:"Consultar datos de contacto",description:"Documentaci\xf3n del endpoint para consultar datos de contacto",source:"@site/docs/intercambio-juegos/consultar-contacto.md",sourceDirName:"intercambio-juegos",slug:"/consultar_datos_contacto",permalink:"/api-docs/build/docs/consultar_datos_contacto",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intercambio-juegos/consultar-contacto.md",version:"current",sidebarPosition:4,frontMatter:{id:"4",title:"Consultar datos de contacto",description:"Documentaci\xf3n del endpoint para consultar datos de contacto",slug:"/consultar_datos_contacto",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Modificar estatus de oferta",permalink:"/api-docs/build/docs/modificar_estatus_ofertas"}},c=[{value:"Petici\xf3n HTTP",id:"petici\xf3n-http",children:[]},{value:"Par\xe1metros de la petici\xf3n.",id:"par\xe1metros-de-la-petici\xf3n",children:[]},{value:"Ejemplo de petici\xf3n y respuesta",id:"ejemplo-de-petici\xf3n-y-respuesta",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Intercambia las credenciales del usuario por un token que debe acompa\xf1ar\na todas las peticiones posteriores. Este token representa al usuario en un\ndispositivo y persiste hasta que se hace una peticion para revocarlo."),(0,o.kt)("h3",{id:"petici\xf3n-http"},"Petici\xf3n HTTP"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST https://gameflake.game/api/tokens/create")),(0,o.kt)("h3",{id:"par\xe1metros-de-la-petici\xf3n"},"Par\xe1metros de la petici\xf3n."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo de dato"),(0,o.kt)("th",{parentName:"tr",align:null},"\xbfEs obligatorio?"),(0,o.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"email")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Si"),(0,o.kt)("td",{parentName:"tr",align:null},"Direcci\xf3n de correo electr\xf3nico del usuario.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"password")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Si"),(0,o.kt)("td",{parentName:"tr",align:null},"Contrase\xf1a de la cuenta del usuario.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"device_name")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Si"),(0,o.kt)("td",{parentName:"tr",align:null},"Nombre del dispositivo donde se inicia sesi\xf3n.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Este es uno de los pocos endpoints que no requiere un token en el encabezado ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <api_token_aqui>"),"."))),(0,o.kt)("h3",{id:"ejemplo-de-petici\xf3n-y-respuesta"},"Ejemplo de petici\xf3n y respuesta"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Ejemplo de petici\xf3n"',title:'"Ejemplo',de:!0,'petici\xf3n"':!0},'curl "https://gameflake.game/api/tokens/create" \\\n  -X "POST" \\\n  -H "Content-Type: multipart/form-data" \\\n  -H "Authorization: Bearer <api_token_aqui>" \\\n  -d $\'{\n         "email": "gmachia@gmail.com",\n         "password": "9yUQc%ewEf^(Tw4",\n         "device_name": "iPhone 4s"\n     }\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Ejemplo de respuesta"',title:'"Ejemplo',de:!0,'respuesta"':!0},'{\n    "token": "1|63eD2tUsY2Xdfoc5SZgFtWCobvjRYbeioT2XZZYU"\n}\n')))}p.isMDXComponent=!0}}]);