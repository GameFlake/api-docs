(self.webpackChunkgameflake_docs=self.webpackChunkgameflake_docs||[]).push([[671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={sidebar_position:1},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introducci\xf3n",description:"\xa1Bienvenido a la API de GameFlake! Puedes usar nuestra API para acceder a la informaci\xf3n de los intercambios de una cuenta de usuario y el cat\xe1logo de t\xedtulos.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/api-docs/build/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Iniciar sesi\xf3n",permalink:"/api-docs/build/docs/api_iniciar_sesion"}},c=[{value:"Autenticaci\xf3n",id:"autenticaci\xf3n",children:[]},{value:"Estructura de las respuestas",id:"estructura-de-las-respuestas",children:[]},{value:"C\xf3digos de error",id:"c\xf3digos-de-error",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\xa1Bienvenido a la API de GameFlake! Puedes usar nuestra API para acceder a la informaci\xf3n de los intercambios de una cuenta de usuario y el cat\xe1logo de t\xedtulos."),(0,i.kt)("p",null,"La API est\xe1 dise\xf1ada con una estructura REST, con URLs consistentes y orientadas a recursos.\nSoportamos esta estructura con caracter\xedsticas est\xe1ndar de HTTP: verbos de HTTP para todos nuestros puntos de acceso para indicar distintas acciones, encabezados de autenticaci\xf3n HTTP, y c\xf3digos de respuesta HTTP para indicar respuestas exitosas y con distintos errores. "),(0,i.kt)("p",null,"Si\xe9ntete libre de ponerte en contacto por medio de email o la comunidad si tienes preguntas, comentarios, o peticiones acerca de la API."),(0,i.kt)("h2",{id:"autenticaci\xf3n"},"Autenticaci\xf3n"),(0,i.kt)("p",null,"GameFlake usa un sistema de tokens para autenticar peticiones a la API. Salvo por crear cuenta de usuario e iniciar sesi\xf3n, todas las peticiones deben incluir este un token, y este debe de estar contenido en un\nencabezado HTTP que se ve como el siguiente:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <api_token_aqui>")),(0,i.kt)("p",null,"Cualquier petici\xf3n enviada sin un token fallar\xe1."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Debes reemplazar ",(0,i.kt)("inlineCode",{parentName:"p"},"<api_token_aqui>")," con un token de la API."))),(0,i.kt)("h2",{id:"estructura-de-las-respuestas"},"Estructura de las respuestas"),(0,i.kt)("p",null,"Respondemos a todas las peticiones con JSON, volviendo sencilla la conversi\xf3n de estas respuestas a objetos nativos en varios lenguajes. Esto deber\xeda abrir la API a cualquier cliente que soporte estas caracter\xedsticas y estructuras de datos."),(0,i.kt)("h2",{id:"c\xf3digos-de-error"},"C\xf3digos de error"),(0,i.kt)("p",null,"Usamos c\xf3digos de respuesta HTTP est\xe1ndar para indicar el estatus de la respuesta. Los c\xf3digos en los 200 indican \xe9xito, los 400 usualmente indican un problema de configuraci\xf3n del cliente, y los 500 indican que algo malo est\xe1 ocurriendo en el servidor."))}d.isMDXComponent=!0}}]);