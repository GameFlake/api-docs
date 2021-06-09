(self.webpackChunkgameflake_docs=self.webpackChunkgameflake_docs||[]).push([[147],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),u=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},563:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l={id:2,title:"Consultar ofertas realizadas",description:"Documentaci\xf3n del endpoint para consultar ofertas realizadas",slug:"/consultar_ofertas_realizadas",sidebar_position:2},o={unversionedId:"intercambio-juegos/2",id:"intercambio-juegos/2",isDocsHomePage:!1,title:"Consultar ofertas realizadas",description:"Documentaci\xf3n del endpoint para consultar ofertas realizadas",source:"@site/docs/intercambio-juegos/consultar-ofertas-realizadas.md",sourceDirName:"intercambio-juegos",slug:"/consultar_ofertas_realizadas",permalink:"/api-docs/build/docs/consultar_ofertas_realizadas",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intercambio-juegos/consultar-ofertas-realizadas.md",version:"current",sidebarPosition:2,frontMatter:{id:"2",title:"Consultar ofertas realizadas",description:"Documentaci\xf3n del endpoint para consultar ofertas realizadas",slug:"/consultar_ofertas_realizadas",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Consultar ofertas recibidas",permalink:"/api-docs/build/docs/consultar_ofertas_recibidas"},next:{title:"Modificar estatus de oferta",permalink:"/api-docs/build/docs/modificar_estatus_ofertas"}},d=[{value:"Petici\xf3n HTTP",id:"petici\xf3n-http",children:[]},{value:"Par\xe1metros de la petici\xf3n.",id:"par\xe1metros-de-la-petici\xf3n",children:[]},{value:"Estructura de la respuesta",id:"estructura-de-la-respuesta",children:[]},{value:"Ejemplo de petici\xf3n y respuesta",id:"ejemplo-de-petici\xf3n-y-respuesta",children:[]}],u={toc:d};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Consulta la informaci\xf3n de todas las ofertas de intercambio de juegos que\nha realizado el usuario del token enviado junto con la solicitud."),(0,i.kt)("h3",{id:"petici\xf3n-http"},"Petici\xf3n HTTP"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET https://gameflake.game/api/ofertas/realizadas")),(0,i.kt)("h3",{id:"par\xe1metros-de-la-petici\xf3n"},"Par\xe1metros de la petici\xf3n."),(0,i.kt)("p",null,"No lleva ning\xfan par\xe1metro en el cuerpo de la petici\xf3n."),(0,i.kt)("h3",{id:"estructura-de-la-respuesta"},"Estructura de la respuesta"),(0,i.kt)("p",null,"La informaci\xf3n viene como una arreglo de objetos json, donde cada objeto contiene\nlos datos de una de las ofertas realizadas."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo de dato"),(0,i.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"Entero"),(0,i.kt)("td",{parentName:"tr",align:null},"Identificador \xfanico de la oferta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"RecipienteID")),(0,i.kt)("td",{parentName:"tr",align:null},"Entero"),(0,i.kt)("td",{parentName:"tr",align:null},"Identificador \xfanico del usuario que recibe la oferta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Ofertante")),(0,i.kt)("td",{parentName:"tr",align:null},"Entero"),(0,i.kt)("td",{parentName:"tr",align:null},"Identificador \xfanico del usuario que realiza la oferta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TR")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"T\xedtulo del juego que pide el usuario que realiza la oferta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TO")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"T\xedtulo del juego que ofrece el usuario que realiza la oferta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nombre")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Nombre del usuario que realiza la oferta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"estado")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Una cadena indicando el estatus de la oferta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Apellido")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Apellido del usuario que realiza la oferta")))),(0,i.kt)("h3",{id:"ejemplo-de-petici\xf3n-y-respuesta"},"Ejemplo de petici\xf3n y respuesta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Ejemplo de petici\xf3n"',title:'"Ejemplo',de:!0,'petici\xf3n"':!0},'curl "https://gameflake.game/api/ofertas/realizadas" \\\n  -X "POST" \\\n  -H "Content-Type: multipart/form-data" \\\n  -H "Authorization: Bearer <api_token_aqui>" \\\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Ejemplo de respuesta"',title:'"Ejemplo',de:!0,'respuesta"':!0},'[\n    {\n        "id": 4,\n        "RecipienteID": 4,\n        "Ofertante": 4,\n        "TR": "Overcooked 2",\n        "TO": "Little Nightmares II",\n        "nombre": "Julian",\n        "estado": "Pendiente",\n        "Apellido": "Pedrin"\n    }\n]\n')))}s.isMDXComponent=!0}}]);