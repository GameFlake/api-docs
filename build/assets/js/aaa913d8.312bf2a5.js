(self.webpackChunkgameflake_docs=self.webpackChunkgameflake_docs||[]).push([[465],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7928:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:2,title:"Cerrar sesi\xf3n",description:"Documentaci\xf3n del endpoint para cerrar sesi\xf3n",slug:"/api_cerrar_sesion",sidebar_position:2},c={unversionedId:"autenticacion-cuentas/2",id:"autenticacion-cuentas/2",isDocsHomePage:!1,title:"Cerrar sesi\xf3n",description:"Documentaci\xf3n del endpoint para cerrar sesi\xf3n",source:"@site/docs/autenticacion-cuentas/cerrar-sesion.md",sourceDirName:"autenticacion-cuentas",slug:"/api_cerrar_sesion",permalink:"/api-docs/build/docs/api_cerrar_sesion",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/autenticacion-cuentas/cerrar-sesion.md",version:"current",sidebarPosition:2,frontMatter:{id:"2",title:"Cerrar sesi\xf3n",description:"Documentaci\xf3n del endpoint para cerrar sesi\xf3n",slug:"/api_cerrar_sesion",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Iniciar sesi\xf3n",permalink:"/api-docs/build/docs/api_iniciar_sesion"},next:{title:"Registrar usuario nuevo",permalink:"/api-docs/build/docs/registrar_usuario"}},s=[{value:"Petici\xf3n HTTP",id:"petici\xf3n-http",children:[]},{value:"Par\xe1metros de la petici\xf3n.",id:"par\xe1metros-de-la-petici\xf3n",children:[]},{value:"Ejemplo de petici\xf3n y respuesta",id:"ejemplo-de-petici\xf3n-y-respuesta",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Elimina un token de autenticaci\xf3n emitido previamente."),(0,a.kt)("h3",{id:"petici\xf3n-http"},"Petici\xf3n HTTP"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST https://gameflake.game/api/tokens/revoke")),(0,a.kt)("h3",{id:"par\xe1metros-de-la-petici\xf3n"},"Par\xe1metros de la petici\xf3n."),(0,a.kt)("p",null,"No lleva ning\xfan par\xe1metro en el cuerpo de la petici\xf3n."),(0,a.kt)("h3",{id:"ejemplo-de-petici\xf3n-y-respuesta"},"Ejemplo de petici\xf3n y respuesta"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Ejemplo de petici\xf3n"',title:'"Ejemplo',de:!0,'petici\xf3n"':!0},'curl "https://gameflake.game/api/tokens/revoke" \\\n  -X "POST" \\\n  -H "Content-Type: multipart/form-data" \\\n  -H "Authorization: Bearer <api_token_aqui>"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Ejemplo de respuesta"',title:'"Ejemplo',de:!0,'respuesta"':!0},'{\n    "mensaje": "El token fue eliminado"\n}   \n')))}u.isMDXComponent=!0}}]);