(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),s=n(7),a=n.n(s),j=(n(14),n(8)),i=n(4),b=n(3),u=Object(o.createContext)(),l=function(e){var t=Object(o.useState)({books:[]}),n=Object(b.a)(t,2),r=n[0],s=n[1];return Object(c.jsx)(u.Provider,{value:{books:r.books,removeBook:function(e){s(Object(i.a)(Object(i.a)({},r),{},{books:r.books.filter((function(t){return t.id!==e}))}))},addBook:function(e,t){var n=1e5*Math.random();s(Object(i.a)(Object(i.a)({},r),{},{books:[].concat(Object(j.a)(r.books),[{title:e,author:t,id:n}])}))}},children:e.children})};function d(e){var t=e.book,n=Object(o.useContext)(u).removeBook;return Object(c.jsxs)("li",{onClick:function(){n(t.id)},children:[Object(c.jsxs)("h4",{className:"title",children:[" ",t.title]}),Object(c.jsxs)("p",{className:"author",children:[" By: ",t.author]})]})}function O(){var e=Object(o.useContext)(u).books;return Object(c.jsx)("div",{className:"book-list",children:0===e.length?Object(c.jsx)("p",{className:"empty",children:" Currently Not reading any Books"}):e.map((function(e){return Object(c.jsx)("ul",{children:Object(c.jsx)(d,{book:e})},e.id)}))})}function h(){var e=Object(o.useContext)(u).addBook,t=Object(o.useState)(""),n=Object(b.a)(t,2),r=n[0],s=n[1],a=Object(o.useState)(""),j=Object(b.a)(a,2),i=j[0],l=j[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,i),s(""),l("")},children:[Object(c.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Title",value:r,onChange:function(e){s(e.target.value)}}),Object(c.jsx)("input",{type:"text",placeholder:"Author",value:i,onChange:function(e){l(e.target.value)}}),Object(c.jsx)("button",{children:" Add"})]})}function x(){var e=Object(o.useContext)(u).books;return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)("h1",{children:" Reading List "}),Object(c.jsxs)("p",{children:["Currently you have ",e.length," left to read!"]})]})}function p(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{}),Object(c.jsx)(h,{}),Object(c.jsx)(O,{})]})}var v=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(l,{children:Object(c.jsx)(p,{})})})};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e47940be.chunk.js.map