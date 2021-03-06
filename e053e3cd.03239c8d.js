(window.webpackJsonp=window.webpackJsonp||[]).push([[868],{1068:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,u=m["".concat(i,".").concat(b)]||m[b]||d[b]||o;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},942:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(1068)),i={id:"fragment-container",title:"Fragment Container",original_id:"fragment-container"},c={unversionedId:"fragment-container",id:"version-v10.0.0/fragment-container",isDocsHomePage:!1,title:"Fragment Container",description:"A Fragment Container is a higher-order component that allows components to specify their data requirements. A container does not directly fetch data, but instead declares a specification of the data needed for rendering, and then Relay will guarantee that this data is available before rendering occurs.",source:"@site/versioned_docs/version-v10.0.0/Modern-FragmentContainer.md",slug:"/fragment-container",permalink:"/docs/v10.0.0/fragment-container",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-v10.0.0/Modern-FragmentContainer.md",version:"v10.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1614993676,sidebar:"version-v10.0.0/docs",previous:{title:"QueryRenderer",permalink:"/docs/v10.0.0/query-renderer"},next:{title:"Refetch Container",permalink:"/docs/v10.0.0/refetch-container"}},l=[{value:"<code>createFragmentContainer</code>",id:"createfragmentcontainer",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Available Props",id:"available-props",children:[]}]},{value:"Example",id:"example",children:[{value:"React Component",id:"react-component",children:[]},{value:"Data Dependencies With GraphQL",id:"data-dependencies-with-graphql",children:[]},{value:"Defining Containers",id:"defining-containers",children:[]}]},{value:"Container Composition",id:"container-composition",children:[{value:"Composing Views",id:"composing-views",children:[]},{value:"Composing Fragments",id:"composing-fragments",children:[]},{value:"Passing Arguments to a Fragment",id:"passing-arguments-to-a-fragment",children:[]}]},{value:"Rendering Containers",id:"rendering-containers",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A Fragment Container is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/higher-order-components.html"}),"higher-order component")," that allows components to specify their data requirements. A container does not directly fetch data, but instead declares a ",Object(o.b)("em",{parentName:"p"},"specification")," of the data needed for rendering, and then Relay will guarantee that this data is available ",Object(o.b)("em",{parentName:"p"},"before")," rendering occurs."),Object(o.b)("p",null,"Table of Contents:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#createfragmentcontainer"}),Object(o.b)("inlineCode",{parentName:"a"},"createFragmentContainer"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#example"}),"Example")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#container-composition"}),"Container Composition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#rendering-containers"}),"Rendering Containers"))),Object(o.b)("h2",{id:"createfragmentcontainer"},Object(o.b)("inlineCode",{parentName:"h2"},"createFragmentContainer")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createFragmentContainer")," has the following signature:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\ncreateFragmentContainer(\n  component: ReactComponentClass,\n  fragmentSpec: {[string]: GraphQLTaggedNode},\n): ReactComponentClass;\n\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"component"),": The React Component ",Object(o.b)("em",{parentName:"li"},"class")," of the component requiring the fragment data."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fragmentSpec"),": Specifies the data requirements for the Component via a GraphQL fragment. The required data will be available on the component as props that match the shape of the provided fragment. ",Object(o.b)("inlineCode",{parentName:"li"},"fragmentSpec")," should be an object whose keys are prop names and values are ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," tagged fragments. Each key specified in this object will correspond to a prop available to the resulting Component.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Note:")," ",Object(o.b)("inlineCode",{parentName:"li"},"relay-compiler")," enforces fragments to be named as ",Object(o.b)("inlineCode",{parentName:"li"},"<FileName>_<propName>"),".")))),Object(o.b)("h3",{id:"available-props"},"Available Props"),Object(o.b)("p",null,"The Component resulting from ",Object(o.b)("inlineCode",{parentName:"p"},"createFragmentContainer")," will receive the following ",Object(o.b)("inlineCode",{parentName:"p"},"props"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\ntype Props = {\n  relay: {\n    environment: Environment,\n  },\n  // Additional props as specified by the fragmentSpec\n}\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"relay"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"environment"),": The current ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./relay-environment"}),"Relay Environment"))))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"To start, let's build the plain React version of a hypothetical ",Object(o.b)("inlineCode",{parentName:"p"},"<TodoItem />")," component that displays the text and completion status of a ",Object(o.b)("inlineCode",{parentName:"p"},"Todo"),"."),Object(o.b)("h3",{id:"react-component"},"React Component"),Object(o.b)("p",null,"Here's a basic implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"<TodoItem />")," that ignores styling in order to highlight the functionality:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// TodoItem.js\nclass TodoItem extends React.Component {\n  render() {\n    // Expects the `item` prop to have the following shape:\n    // {\n    //   item: {\n    //     text,\n    //     isComplete\n    //   }\n    // }\n    const item = this.props.item;\n    return (\n      <View>\n        <Checkbox checked={item.isComplete} />\n        <Text>{item.text}</Text>\n      </View>\n    );\n  }\n}\n\n")),Object(o.b)("h3",{id:"data-dependencies-with-graphql"},"Data Dependencies With GraphQL"),Object(o.b)("p",null,"In Relay, data dependencies are described using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/graphql"}),"GraphQL"),". For ",Object(o.b)("inlineCode",{parentName:"p"},"<TodoItem />"),", the dependency can be expressed as follows. Note that this exactly matches the shape that the component expected for the ",Object(o.b)("inlineCode",{parentName:"p"},"item")," prop."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\ngraphql`\n  # This fragment only applies to objects of type 'Todo'.\n  fragment TodoItem_item on Todo {\n    text\n    isComplete\n  }\n`\n\n")),Object(o.b)("h3",{id:"defining-containers"},"Defining Containers"),Object(o.b)("p",null,"Given the plain React component and a GraphQL fragment, we can now define a Fragment Container to specify this component's data requirements. Let's look at the code first and then see what's happening:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\n// TodoItem.js\nimport {createFragmentContainer, graphql} from 'react-relay';\n\nclass TodoItem extends React.Component // as above\n\n// Export a *new* React component that wraps the original `<TodoItem>`.\nexport default createFragmentContainer(TodoItem, {\n  // For each of the props that depend on server data, we define a corresponding\n  // key in this object. Here, the component expects server data to populate the\n  // `item` prop, so we'll specify the fragment from above at the `item` key.\n  item: graphql`\n    fragment TodoItem_item on Todo {\n      text\n      isComplete\n    }\n  `,\n});\n\n")),Object(o.b)("h2",{id:"container-composition"},"Container Composition"),Object(o.b)("p",null,"React and Relay support creating arbitrarily complex applications through ",Object(o.b)("em",{parentName:"p"},"composition"),". Larger components can be created by composing smaller components, helping us to create modular, robust applications."),Object(o.b)("p",null,"Let's explore how this works via a ",Object(o.b)("inlineCode",{parentName:"p"},"<TodoList />")," component that composes the ",Object(o.b)("inlineCode",{parentName:"p"},"<TodoItem />")," we defined above."),Object(o.b)("h3",{id:"composing-views"},"Composing Views"),Object(o.b)("p",null,"View composition is ",Object(o.b)("em",{parentName:"p"},"exactly")," what you're used to \u2014 Relay containers are just standard React components. Here's the ",Object(o.b)("inlineCode",{parentName:"p"},"<TodoList />")," component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nclass TodoList extends React.Component {\n  render() {\n    // Expects a `list` with a string `title`, as well as the information\n    // for the `<TodoItem>`s (we'll get that next).\n    const list = this.props.list;\n    return (\n      <View>\n        <Text>{list.title}</Text>\n        {list.todoItems.map(item => <TodoItem\n          // It works just like a React component, because it is one!\n          item={item}\n        />)}\n      </View>\n    );\n  }\n}\n\n")),Object(o.b)("h3",{id:"composing-fragments"},"Composing Fragments"),Object(o.b)("p",null,"Fragment composition works similarly \u2014 a parent container's fragment composes the fragment for each of its children. In this case, ",Object(o.b)("inlineCode",{parentName:"p"},"<TodoList />")," needs to fetch information about the ",Object(o.b)("inlineCode",{parentName:"p"},"Todo"),"s that are required by ",Object(o.b)("inlineCode",{parentName:"p"},"<TodoItem />"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nclass TodoList extends React.Component // as above\n\nexport default createFragmentContainer(TodoList, {\n  // This `list` fragment corresponds to the prop named `list` that is\n  // expected to be populated with server data by the `<TodoList>` component.\n  list: graphql`\n    fragment TodoList_list on TodoList {\n      # Specify any fields required by '<TodoList>' itself.\n      title\n      # Include a reference to the fragment from the child component.\n      todoItems {\n        ...TodoItem_item\n      }\n    }\n  `,\n});\n\n")),Object(o.b)("p",null,"Note that when composing fragments, the type of the composed fragment must match the field on the parent in which it is embedded. For example, it wouldn't make sense to embed a fragment of type ",Object(o.b)("inlineCode",{parentName:"p"},"Story")," into a parent's field of type ",Object(o.b)("inlineCode",{parentName:"p"},"User"),". Relay and GraphQL will provide helpful error messages if you get this wrong (and if they aren't helpful, let us know!)."),Object(o.b)("h3",{id:"passing-arguments-to-a-fragment"},"Passing Arguments to a Fragment"),Object(o.b)("h4",{id:"argumentdefinitions"},Object(o.b)("inlineCode",{parentName:"h4"},"@argumentDefinitions")),Object(o.b)("p",null,"When defining a fragment, you can use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./graphql-in-relay#argumentdefinitions"}),Object(o.b)("inlineCode",{parentName:"a"},"@argumentDefinitions"))," directive to specify any arguments, with potentially default values, that the fragment expects."),Object(o.b)("p",null,"For example, let's redefine our ",Object(o.b)("inlineCode",{parentName:"p"},"TodoList_list")," fragment to take some arguments using ",Object(o.b)("inlineCode",{parentName:"p"},"@argumentDefinitions"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'\nfragment TodoList_list on TodoList @argumentDefinitions(\n  count: {type: "Int", defaultValue: 10},  # Optional argument\n  userID: {type: "ID"},                    # Required argument\n) {\n  title\n  todoItems(userID: $userID, first: $count) {  # Use fragment arguments here as variables\n    ...TodoItem_item\n  }\n}\n\n')),Object(o.b)("p",null,"Any arguments defined inside ",Object(o.b)("inlineCode",{parentName:"p"},"@argumentDefinitions")," will be local variables available inside the fragment's scope. However, a fragment can also reference global variables that were defined in the root query."),Object(o.b)("h4",{id:"arguments-1"},Object(o.b)("inlineCode",{parentName:"h4"},"@arguments")),Object(o.b)("p",null,"In order to pass arguments to a fragment that has ",Object(o.b)("inlineCode",{parentName:"p"},"@argumentDefinitions"),", you need to use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./graphql-in-relay#arguments"}),Object(o.b)("inlineCode",{parentName:"a"},"@arguments"))," directive."),Object(o.b)("p",null,"Following our ",Object(o.b)("inlineCode",{parentName:"p"},"TodoList_list")," example, we would pass arguments to the fragment like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"\nquery TodoListQuery($count: Int, $userID: ID) {\n  ...TodoList_list @arguments(count: $count, userID: $userID) # Pass arguments here\n}\n\n")),Object(o.b)("h2",{id:"rendering-containers"},"Rendering Containers"),Object(o.b)("p",null,"As we've learned, Relay fragment containers only declare data requirements as GraphQL fragments. In order to actually fetch and render the specified data, we need to use a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer")," component to render a root query and any fragment containers included within. Please refer to our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./query-renderer"}),Object(o.b)("inlineCode",{parentName:"a"},"QueryRenderer"))," docs for more details."))}p.isMDXComponent=!0}}]);