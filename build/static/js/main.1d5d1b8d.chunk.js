(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(26),s=n.n(i),r=n(3),o=n(0),l=function(){return Object(o.jsx)("div",{className:"login",children:Object(o.jsx)("div",{className:"button-login",children:Object(o.jsxs)("button",{className:"signin",type:"button",children:["Sign in"," "]})})})},j=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:e.userdp,style:{borderRadius:"40%",margin:"5px"},width:"50px",height:"50px",alt:"profile_dp"})})},d=n(15),b=a.a.createContext(),h=a.a.createContext({}),u=function(e){var t=e.children,n=Object(c.useState)({}),a=Object(r.a)(n,2),i=a[0],s=a[1];return Object(o.jsx)(h.Provider,{value:{DbData:i,updateDb:function(e){s(e)}},children:t})},f=(h.Consumer,function(e){var t=e.children,n=Object(c.useState)([{}]),a=Object(r.a)(n,2),i=a[0],s=a[1];return Object(o.jsx)(b.Provider,{value:{Data:i,setData:s},children:t})});var m=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)({}),h=Object(r.a)(s,2),u=h[0],f=h[1],m=Object(c.useContext)(b).setData,p="211013249492-dl12rs1jkqqmu1hhpn007li216dkcidm.apps.googleusercontent.com";return Object(o.jsxs)("div",{className:"Header-parent",children:[Object(o.jsxs)("div",{className:"social-handle",children:[Object(o.jsx)("a",{href:"/not-available",children:Object(o.jsx)("i",{class:"fa fa-facebook fa-lg"})}),Object(o.jsx)("a",{href:"https://www.instagram.com/ritikchn/",children:Object(o.jsx)("i",{class:"fa fa-instagram fa-lg"})}),Object(o.jsx)("a",{href:"https://twitter.com/RitikMisspellT",children:Object(o.jsx)("i",{class:"fa fa-twitter fa-lg"})})]}),Object(o.jsx)("div",{className:"heads",children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("h1",{style:{fontFamily:"font-family: 'Nanum Myeongjo', serif"},children:"Chn"})})}),Object(o.jsx)("div",{className:"login-status",children:a?Object(o.jsx)(d.GoogleLogout,{clientId:p,buttonText:"Log out",onLogoutSuccess:function(){console.log("Sucessfully Log Out"),i(!1),m({}),f({})},render:function(e){return Object(o.jsx)("div",{onClick:e.onClick,children:Object(o.jsx)(j,{userwho:u.name,userdp:u.img})})}}):Object(o.jsx)(d.GoogleLogin,{clientId:p,buttonText:"Log in with Google",onSuccess:function(e){f({name:e.profileObj.name,img:e.profileObj.imageUrl}),m({name:e.profileObj.name,img:e.profileObj.imageUrl}),i(!0)},onFailure:function(e){console.log("[Login failed] res:",e)},cookiePolicy:"single_host_origin",isSignedIn:!0,render:function(e){return Object(o.jsx)("div",{onClick:e.onClick,children:Object(o.jsx)(l,{})})}})})]})},p=n(10);var x=function(e){var t=e.heading,n=e.p;return Object(o.jsx)(p.b,{to:"/"+e.id,children:Object(o.jsxs)("div",{className:"posts-container",children:[Object(o.jsx)("div",{className:"posts-img",children:Object(o.jsx)("img",{src:e.src,alt:"some img"})}),Object(o.jsx)("div",{className:"posts-heading",children:Object(o.jsx)("h3",{children:t})}),Object(o.jsx)("div",{className:"posts-summary",children:Object(o.jsx)("p",{children:n.substring(1,250)})})]})})};var O=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!0),s=Object(r.a)(i,2),l=s[0],j=s[1],d=Object(c.useContext)(h),b=d.DbData,u=d.updateDb;return Object(c.useEffect)((function(){var e=new AbortController,t=e.signal;return fetch("https://blog-appserver.herokuapp.com/getData",{signal:t}).then((function(e){return e.json()})).then((function(e){return u(e.test)})).finally((function(){return j(!1)})),n&&b&&j(!0),function(){e.abort(),a(!1)}}),[]),l?"Loading...":Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{class:"post-area-title",children:[Object(o.jsx)("div",{className:"new-posts-title",children:Object(o.jsx)("h2",{children:"New Posts"})}),Object(o.jsx)("span",{})]}),Object(o.jsx)("div",{className:"various-posts",children:b.map((function(e,t){return Object(o.jsx)(x,{id:e.id,src:e.img,heading:e.heading,p:e.paragraph},t)}))})]})},g=[{img:"https://images.unsplash.com/photo-1615225294594-bf34114b84ef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",heading:"Editing"},{img:"https://images.unsplash.com/photo-1516004497017-fc037674c3aa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",heading:"Anime"},{img:"https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",heading:"Development"}],v=function(){var e=Object(c.useState)(1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){a((function(e){return 2===e?0:e+1}))}),2900);return function(){return clearInterval(e)}})),Object(o.jsx)("div",{className:"showCase",children:Object(o.jsx)("div",{className:"showCase-cont",children:g.map((function(e,t){return Object(o.jsx)("div",{children:t===n&&Object(o.jsx)("div",{className:"trial-cont-heading",children:Object(o.jsxs)("div",{className:"trial-cont-heading-2",children:[Object(o.jsx)("img",{className:"image",src:e.img,alt:"some-pic"}),Object(o.jsx)("p",{children:e.heading})]})})},t)}))})})};var y=function(){return Object(o.jsxs)("div",{className:"main-area-div",children:[Object(o.jsx)(v,{}),Object(o.jsx)(O,{})]})};var w=function(){return Object(o.jsx)("div",{className:"footerTop-div",children:Object(o.jsxs)("div",{className:"footer-main",children:[Object(o.jsxs)("div",{className:"footer-left",children:[Object(o.jsx)("h1",{children:"Chn"}),Object(o.jsx)("p",{children:"This is a blog site made using React.js .Since currently i learning React.js so more horrible  projects will appeared in front of you and i decided to log my journey of my projects and will be coming in form of blogs (Maybe)"})]}),Object(o.jsxs)("div",{className:"footer-right",children:[Object(o.jsx)("h2",{children:"About me"}),Object(o.jsx)("p",{children:"Hi !! My name is Ritik Chauhan and currently i am pursuing B.Tech in Information Technology (any typical guy) . I am currently in 2nd year of college and just realized that i don't know what i am gonna do , I don't code so often ,I suck at CC (Competitve Coding) so decide to give development a try and this blog is a terrible example of that so if you have a alot of free time which you have as you are reading this so don't forget to check this blog regularly fo interesting posts (FYI : I am not saying that i am gonna upload often )"}),Object(o.jsx)("h2",{children:"Social"}),Object(o.jsxs)("div",{className:"social-icons",children:[Object(o.jsx)("a",{href:"https://open.spotify.com/playlist/5fJyK1ggXD8VX1tMbe1Ucl",children:Object(o.jsx)("i",{class:"fa fa-spotify fa-2x"})}),Object(o.jsx)("a",{href:"/not-available",children:Object(o.jsx)("i",{class:"fa fa-twitch fa-2x"})}),Object(o.jsx)("a",{href:"/not-available",children:Object(o.jsx)("i",{class:"fa fa-facebook fa-2x"})}),Object(o.jsx)("a",{href:"https://www.youtube.com/channel/UCsWVLO4KqqDvPJie45XRxFA",children:Object(o.jsx)("i",{class:"fa fa-youtube fa-2x"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/ritik-chauhan-7a5a60195/",children:Object(o.jsx)("i",{class:"fa fa-linkedin fa-2x"})})]})]})]})})},N=(n(41),n(2)),D=(n(42),function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],i=n[1],s=Object(c.useContext)(b).Data;return Object(o.jsxs)("div",{className:"commentform-container",children:[Object(o.jsx)("input",{onChange:function(e){return i(e.target.value)},type:"text",name:"comment",placeholder:"Type your Comment",autoComplete:"off",value:a}),Object(o.jsx)("div",{onClick:function(t){t.preventDefault(),"undefined"==typeof s.name?alert("please log in"):(e.function({writer:s.name,content:a,img:s.img}),i(""))},children:Object(o.jsx)("i",{className:"fa fa-telegram-plane fa-2x"})})]})}),C=function(e){return Object(o.jsxs)("div",{className:"singlecomment-container",children:[Object(o.jsx)("div",{className:"singlecomment-img",children:Object(o.jsx)("img",{alt:"dp",width:"50px",height:"50px",src:e.dp})}),Object(o.jsxs)("div",{className:"singlecomment-text",children:[Object(o.jsx)("h3",{children:e.writer}),Object(o.jsx)("p",{children:e.content})]})]})},k=n(12),M=n.n(k),S=function(e){var t=Object(c.useState)(!0),n=Object(r.a)(t,2),a=n[0],i=n[1],s=Object(c.useContext)(h),l=(s.DbData,s.updateDb);return Object(c.useEffect)((function(){M.a.get("https://blog-appserver.herokuapp.com/getData").then((function(e){return e.data.test})).then((function(e){l(e)})).finally(i(!1))}),[]),a?"Loading":Object(o.jsx)("div",{className:"commentlist-container",children:e.Data.map((function(e,t){return Object(o.jsx)(C,{writer:e.writer,content:e.content,dp:e.img},t)}))})},I=(n(61),function(e){var t=Object(c.useState)(!0),n=Object(r.a)(t,2),a=(n[0],n[1]),i=Object(c.useContext)(h),s=i.DbData,l=i.updateDb,j=e.postNo,d=s.find((function(e){return e.id===parseInt(j)})),b=Object(c.useState)(d),u=Object(r.a)(b,2),f=u[0],m=u[1];return Object(o.jsxs)("div",{className:"commentbox-container",children:[Object(o.jsx)(D,{function:function(e){M.a.post("https://blog-appserver.herokuapp.com/addComment",{post:j,data:e}),d.comments.unshift(e),M.a.get("https://blog-appserver.herokuapp.com/getData").then((function(e){return e.data.test})).then((function(e){l(e)})).then(m(s.find((function(e){return e.id===parseInt(j)})))).finally(a(!1))}}),Object(o.jsx)(S,{postNo:e.postNo,Data:f.comments,render:f})]})});var G=function(){Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]);var e=Object(c.useContext)(h).DbData,t=Object(N.f)().post,n=e.find((function(e){return e.id===parseInt(t)}));return Object(o.jsxs)("div",{className:"singlepost-container",children:[Object(o.jsx)("div",{className:"singlepost-img",children:Object(o.jsx)("img",{src:n.img,alt:"some-pic"})}),Object(o.jsx)("div",{className:"singlepost-heading",children:Object(o.jsx)("h1",{children:n.heading})}),Object(o.jsx)("div",{className:"singlepost-paragraph",children:Object(o.jsxs)("p",{children:[" ",n.paragraph]})}),Object(o.jsx)(I,{postNo:t})]})},H=(n(62),function(){return Object(o.jsxs)("div",{className:"not-available-cont",children:[Object(o.jsx)("img",{alt:"some-harmful-stuff",width:"300px",height:"400px",src:"../images/joke.png"}),Object(o.jsx)("h1",{children:"Not Available"}),Object(o.jsx)("p",{children:"I am not on this platform because i am cool"})]})});var T=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!0),s=Object(r.a)(i,2),l=s[0],j=s[1],d=Object(c.useContext)(h),b=d.DbData,u=d.updateDb;return Object(c.useEffect)((function(){var e=new AbortController,t=e.signal;return fetch("https://blog-appserver.herokuapp.com/getData",{signal:t}).then((function(e){return e.json()})).then((function(e){return u(e.test)})).finally((function(){return j(!1)})),n&&b&&j(!0),function(){e.abort(),a(!1)}}),[]),l?"Loading...":Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"extra-margin",children:[Object(o.jsx)(m,{}),Object(o.jsx)(p.a,{children:Object(o.jsxs)(N.c,{children:[Object(o.jsx)(N.a,{path:"https://chnblog.netlify.app/not-available",children:Object(o.jsx)(H,{})}),Object(o.jsx)(N.a,{path:"https://chnblog.netlify.app/:post",children:Object(o.jsx)(G,{})}),Object(o.jsx)(N.a,{exact:!0,path:"/",children:Object(o.jsx)(y,{})})]})})]}),Object(o.jsx)(w,{})]})};s.a.render(Object(o.jsx)(f,{children:Object(o.jsx)(u,{children:Object(o.jsx)(T,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.1d5d1b8d.chunk.js.map