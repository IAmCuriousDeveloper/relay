(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{1069:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return t?r.a.createElement(h,c(c({ref:n},s),{},{components:t})):r.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},729:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(1069)),o={id:"upgrading-setvariables",title:"Upgrading setVariables",original_id:"upgrading-setvariables"},c={unversionedId:"upgrading-setvariables",id:"version-v8.0.0/upgrading-setvariables",isDocsHomePage:!1,title:"Upgrading setVariables",description:"Examples on how to migrate this.props.setVariables calls from the old API.",source:"@site/versioned_docs/version-v8.0.0/Modern-UpgradingSetVariables.md",slug:"/upgrading-setvariables",permalink:"/docs/v8.0.0/upgrading-setvariables",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v8.0.0/Modern-UpgradingSetVariables.md",version:"v8.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1614364367},l=[{value:"<code>initialVariables</code>",id:"initialvariables",children:[]},{value:"Pagination",id:"pagination",children:[]},{value:"Changing Arguments",id:"changing-arguments",children:[]},{value:"Show More",id:"show-more",children:[]}],s={toc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,"Examples on how to migrate ",Object(i.b)("code",null,"this.props.setVariables")," calls from the old API."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"this.props.setVariables")," from the old API does not have a direct equivalent in the new API. A big reason for this change is that the new core no longer tracks how to refetch any specific sub-tree from the query. This makes the new core a lot faster, but requires explicit queries for how to fetch new data. Check out these four different scenarios:"),Object(i.b)("h2",{id:"initialvariables"},Object(i.b)("inlineCode",{parentName:"h2"},"initialVariables")),Object(i.b)("p",null,"If the component doesn't actually use ",Object(i.b)("inlineCode",{parentName:"p"},"setVariables()"),", and just uses ",Object(i.b)("inlineCode",{parentName:"p"},"initialVariables")," to share values between JS and GraphQL, there are two alternative approaches:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Inline the value in the GraphQL query, potentially annotating with a GraphQL comment (i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"# PAGE_SIZE"),")."),Object(i.b)("li",{parentName:"ul"},"Add the variable to the queries that use the fragment and pass it in when fetching the query. For this it can be useful to have a module with a collection of variables for your product.")),Object(i.b)("h2",{id:"pagination"},"Pagination"),Object(i.b)("p",null,"Typical Relay Classic code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\n// counterexample\nthis.props.relay.setVariables({\n  count: count + 10,\n});\n\ninitialVariables: {\n  count: 10,\n},\n\nfragment on User {\n  friends(first: $count) {\n    # ...\n  }\n}\n\n")),Object(i.b)("p",null,"This should be upgraded to use a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./pagination-container"}),Object(i.b)("inlineCode",{parentName:"a"},"PaginationContainer")),"."),Object(i.b)("h2",{id:"changing-arguments"},"Changing Arguments"),Object(i.b)("p",null,"Typical old code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\n// counterexample\nthis.props.relay.setVariables({\n  search: newSearchTerm,\n});\n\ninitialVariables: {\n  search: '',\n}\n\nfragment on User {\n  friends(named: $search, first: 10) {\n    # ...\n  }\n}\n\n")),Object(i.b)("p",null,"This can be upgraded by using a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./refetch-container"}),Object(i.b)("inlineCode",{parentName:"a"},"RefetchContainer"))," which allows you to specify the exact query to use to fetch the new data."),Object(i.b)("h2",{id:"show-more"},"Show More"),Object(i.b)("p",null,"Typical old code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\n// counterexample\nthis.props.relay.setVariables({\n  showComments: true,\n});\n\ninitialVariables: {\n  showComments: false,\n}\n\nfragment on FeedbackTarget {\n  comments(first: 10) @include(if: $showComments) {\n    # ...\n  }\n}\n\n")),Object(i.b)("p",null,"This can be upgraded by conditionally rendering a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./query-renderer"}),Object(i.b)("inlineCode",{parentName:"a"},"QueryRenderer"))," which will load the data once it is rendered. The code overhead of doing this is dramatically reduced with the new API."),Object(i.b)("p",null,"Alternatively a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./refetch-container"}),Object(i.b)("inlineCode",{parentName:"a"},"RefetchContainer"))," can also be used."))}b.isMDXComponent=!0}}]);