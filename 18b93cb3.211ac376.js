(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{196:function(e,t,a){"use strict";a.r(t);var n=a(1155),l=a(22),r=a(1157),c=a(1158),o=a(0),m=a.n(o);t.default=function(){var e=Object(l.default)().siteConfig,t=Object(c.useVersions)(),a=Object(c.useLatestVersion)(),o=t.find((function(e){return"current"===e.name})),i=t.filter((function(e){return e!==a.name&&e!==o.name})),s="https://github.com/"+e.organizationName+"/"+e.projectName;return m.a.createElement(r.a,{title:"Versions",description:"Relay Versions page listing all documented site versions"},m.a.createElement("main",{className:"container margin-vert--lg"},m.a.createElement("h1",null,"Relay documentation versions"),a&&m.a.createElement("div",{className:"margin-bottom--lg"},m.a.createElement("h3",{id:"next"},"Current version (Stable)"),m.a.createElement("p",null,"Here you can find the documentation for current released version."),m.a.createElement("table",null,m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",null,a.label),m.a.createElement("td",null,m.a.createElement(n.a,{to:a.path},"Documentation")),m.a.createElement("td",null,m.a.createElement("a",{href:s+"/releases/tag/v"+a.name},"Release Notes")))))),o!==a&&m.a.createElement("div",{className:"margin-bottom--lg"},m.a.createElement("h3",{id:"latest"},"Next version (Unreleased)"),m.a.createElement("p",null,"Here you can find the documentation for work-in-process unreleased version."),m.a.createElement("table",null,m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",null,o.label),m.a.createElement("td",null,m.a.createElement(n.a,{to:o.path},"Documentation")))))),i.length>0&&m.a.createElement("div",{className:"margin-bottom--lg"},m.a.createElement("h3",{id:"archive"},"Past versions"),m.a.createElement("p",null,"Here you can find documentation for previous versions of Relay."),m.a.createElement("table",null,m.a.createElement("tbody",null,i.map((function(e){return m.a.createElement("tr",{key:e.name},m.a.createElement("th",null,e.label),m.a.createElement("td",null,m.a.createElement(n.a,{to:e.path},"Documentation")),m.a.createElement("td",null,e.name.startsWith("v")?m.a.createElement("a",{href:s+"/releases/tag/"+e.name},"Release Notes"):null))})))))))}}}]);