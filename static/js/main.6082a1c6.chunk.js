(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),s=n.n(c),i=(n(54),n(55),n(56),n(75)),u=n(77),o=(n(57),n(22)),l=n(1);var d=function(e){return Object(l.jsxs)(i.a,{bg:"light",expand:"lg",children:[Object(l.jsx)(i.a.Brand,{href:"/",children:"Resume Builder"}),Object(l.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(u.a,{className:"mr-auto",children:["home"===e.id&&Object(l.jsx)(o.b,{to:"/create-resume",children:"Create New Resume"}),"view-resume"===e.id&&Object(l.jsx)(o.b,{to:"/create-resume",children:"Edit"}),"resume-form"===e.id&&Object(l.jsx)(o.b,{to:"/view-resume",children:"View"})]})})]})},j=n.p+"static/media/coverimage.8030e1f7.jpg";var b=function(e){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(d,{id:"home"}),Object(l.jsx)("div",{className:"cover-image-container",style:{backgroundImage:"url(".concat(j,")")},children:Object(l.jsxs)("div",{className:"caption-container",children:[Object(l.jsx)("h1",{children:"inscribe"}),Object(l.jsx)("h3",{children:"KEEP IT SIMPLE AND ELEGANT"})]})})]})},m=n(9),p=n(21),O=n(32),h=n(14),x=n(8),E="UPDATE_USER_NAME",f="UPDATE_USER_EMAIL",v="UPDATE_USER_ADDRESS",N="UPDATE_USER_PHONE_NUMBER",y="UPDATE_USER_EDUCATION",g="UPDATE_USER_EXPERIENCE",U="ADD_USER_EDUCATION",C="ADD_USER_EXPERIENCE",P="ADD_USER_SKILLS",k="REMOVE_USER_EDUCATION",D="REMOVE_USER_EXPERINCE",S={userName:"",userEmail:"",userAddress:"",userPhoneNumber:"",userEducation:[{institueName:"",passOutYear:"",degree:""}],userExperience:[{companyName:"",numberOfYears:"",designation:""}],userSkills:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,n=t.name,a=t.key;switch(t.type){case E:return Object(x.a)(Object(x.a)({},e),{},{userName:t.payload});case f:return Object(x.a)(Object(x.a)({},e),{},{userEmail:t.payload});case v:return Object(x.a)(Object(x.a)({},e),{},{userAddress:t.payload});case N:return Object(x.a)(Object(x.a)({},e),{},{userPhoneNumber:t.payload});case y:var r=e.userEducation.map((function(e,r){return r===a&&(e[n]=t.payload),e}));return Object(x.a)(Object(x.a)({},e),{},{userEducation:r});case g:var c=e.userExperience.map((function(e,r){return r===a&&(e[n]=t.payload),e}));return Object(x.a)(Object(x.a)({},e),{},{userExperience:c});case U:var s=Object(h.a)(e.userEducation);return s.push({institueName:"",passOutYear:"",degree:""}),Object(x.a)(Object(x.a)({},e),{},{userEducation:s});case C:var i=Object(h.a)(e.userExperience);return i.push({companyName:"",numberOfYears:"",designation:""}),Object(x.a)(Object(x.a)({},e),{},{userExperience:i});case P:var u=t.payload;return Object(x.a)(Object(x.a)({},e),{},{userSkills:u});case k:var o=Object(h.a)(e.userEducation);return o.pop(),Object(x.a)(Object(x.a)({},e),{},{userEducation:o});case D:var l=Object(h.a)(e.userExperience);return l.pop(),Object(x.a)(Object(x.a)({},e),{},{userExperience:l});default:return e}},I=Object(O.b)(A),R=n(28),_=(n(65),n(76)),w=(n(66),n(30),n(46)),T=n(11),L=n(19),B=n(25),K=n(27),Y=n(47),G=n.n(Y),M=r.a.createRef();var F=Object(p.b)((function(e){return{state:e}}))((function(e){var t=Object(l.jsx)(B.a,{icon:K.d}),n=Object(l.jsx)(B.a,{icon:K.a}),a=Object(l.jsx)(B.a,{icon:K.c}),r=Object(l.jsx)(B.a,{icon:K.b});return Object(l.jsxs)("div",{className:"pdf-button-container",children:["view"===e.id&&Object(l.jsx)(G.a,{targetRef:M,filename:"resume.pdf",children:function(e){var t=e.toPdf;return Object(l.jsx)("i",{onClick:t,"aria-hidden":"true",children:r})}}),Object(l.jsxs)("div",{ref:M,className:"resume-template-main-container",children:[Object(l.jsxs)("div",{className:"details-container",children:[Object(l.jsx)("h1",{children:e.state.userName}),e.state.userAddress&&Object(l.jsxs)("h4",{children:[a," ",e.state.userAddress]}),e.state.userEmail&&Object(l.jsxs)("h4",{children:[n," ",e.state.userEmail]}),e.state.userPhoneNumber&&Object(l.jsxs)("h4",{children:[t," ",e.state.userPhoneNumber]})]}),Object(l.jsxs)(w.a,{id:"resume-container",children:[e.state.userEducation[0].institueName&&Object(l.jsxs)(L.a,{children:[Object(l.jsx)(T.a,{className:"col-4 resume-topic",children:"OBJECTIVE"}),Object(l.jsx)(T.a,{className:"resume-content",children:"Looking for a challenging career which demands the best of my professional ability in terms of technical and analytical skills and helps me broadening and enhancing my skills and knowledge."})]}),e.state.userEducation[0].institueName&&Object(l.jsxs)(L.a,{children:[Object(l.jsx)(T.a,{className:"col-4 resume-topic",children:"EDUCATION"}),Object(l.jsx)(T.a,{className:"resume-content"})]}),e.state.userEducation.map((function(e,t){return Object(l.jsxs)(L.a,{children:[e.institueName&&Object(l.jsxs)(T.a,{className:"col-4 resume-sub-topic",children:["Pass Out: ",e.passOutYear," "]}),Object(l.jsxs)(T.a,{children:[Object(l.jsx)(T.a,{className:"resume-content",children:e.institueName}),Object(l.jsx)(T.a,{className:"resume-content cursive",children:e.degree})]})]},t)})),e.state.userExperience[0].companyName&&Object(l.jsxs)(L.a,{children:[Object(l.jsx)(T.a,{className:"col-4 resume-topic",children:"EXPERIENCE"}),Object(l.jsx)(T.a,{className:"resume-content"})]}),e.state.userExperience.map((function(e,t){return Object(l.jsxs)(L.a,{children:[e.companyName&&Object(l.jsxs)(T.a,{className:"col-4 resume-sub-topic",children:["Number Of Years: ",e.numberOfYears]}),Object(l.jsxs)(T.a,{children:[Object(l.jsx)(T.a,{className:"resume-content",children:e.companyName}),Object(l.jsx)(T.a,{className:"resume-content cursive",children:e.designation})]})]},t)})),Object(l.jsxs)(L.a,{children:[e.state.userSkills[0]&&Object(l.jsx)(T.a,{className:"col-4 skill-caption resume-topic",children:"SKILLS"}),Object(l.jsx)(T.a,{className:"resume-content",children:Object(l.jsx)(L.a,{id:"display-skills",children:e.state.userSkills.map((function(e,t){return Object(l.jsxs)("p",{id:"skills",children:[t+1,". ",e]},t)}))})})]})]})]})]})})),V=n(48);var X=Object(p.b)((function(e){return{state:e}}),(function(e){return{updateUserName:function(t){return e({type:E,payload:t})},updateUserEmail:function(t){return e({type:f,payload:t})},updateUserAddress:function(t){return e({type:v,payload:t})},updateUserPhoneNumber:function(t){return e({type:N,payload:t})},updateUserEducation:function(t,n,a){return e(function(e,t,n){return{type:y,key:e,name:n,payload:t}}(t,n,a))},updateUserExperience:function(t,n,a){return e(function(e,t,n){return{type:g,key:e,name:n,payload:t}}(t,n,a))},addUserExperience:function(){return e({type:C})},addUserEducation:function(){return e({type:U})},addUserSkills:function(t){return e({type:P,payload:t})},removeUserEducation:function(){return e({type:k})},removeUserExperience:function(){return e({type:D})}}}))((function(e){var t=Object(a.useState)(["div1"]),n=Object(R.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(["div1"]),i=Object(R.a)(s,2),u=i[0],o=i[1],j=Object(a.useState)(!1),b=Object(R.a)(j,2),m=b[0],p=b[1],O=Object(a.useState)(!1),x=Object(R.a)(O,2),E=x[0],f=x[1];return Object(a.useEffect)((function(e){window.scrollTo(0,0)}),[]),Object(l.jsxs)("div",{className:"create-resume",children:[Object(l.jsx)(d,{id:"resume-form"}),Object(l.jsxs)("div",{className:"edit-resume-container",children:[Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)(_.a,{children:[Object(l.jsxs)(_.a.Group,{controlId:"formBasicName",children:[Object(l.jsx)(_.a.Label,{children:"Name"}),Object(l.jsx)(_.a.Control,{value:e.state.userName,type:"text",placeholder:"Enter Name",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onChange:function(t){return e.updateUserName(t.target.value)}})]}),Object(l.jsxs)(_.a.Group,{controlId:"formBasicEmail",children:[Object(l.jsx)(_.a.Label,{children:"Email address"}),Object(l.jsx)(_.a.Control,{value:e.state.userEmail,type:"email",placeholder:"Enter Email",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onChange:function(t){return e.updateUserEmail(t.target.value)}}),Object(l.jsx)(_.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(l.jsxs)(_.a.Group,{controlId:"formBasicAddress",children:[Object(l.jsx)(_.a.Label,{children:"Address"}),Object(l.jsx)(_.a.Control,{value:e.state.userAddress,type:"text",placeholder:"Enter your Address",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onChange:function(t){return e.updateUserAddress(t.target.value)}})]}),Object(l.jsxs)(_.a.Group,{controlId:"formBasicPhoneNumber",children:[Object(l.jsx)(_.a.Label,{children:"Phone Number"}),Object(l.jsx)(_.a.Control,{value:e.state.userPhoneNumber,type:"text",placeholder:"Enter your Phone Number",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onChange:function(t){return e.updateUserPhoneNumber(t.target.value)}})]}),Object(l.jsxs)(_.a.Group,{id:"multipleInputContainer",controlId:"formBasicEducation",children:[u.map((function(t,n){return Object(l.jsxs)("div",{children:[Object(l.jsxs)(_.a.Label,{children:["Educational Qualifications ",n+1]}),Object(l.jsx)(_.a.Control,{value:e.state.userEducation[n].institueName,type:"text",placeholder:"Enter Institute Name",name:"institueName",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onChange:function(t){e.updateUserEducation(n,t.target.value,t.target.name)}}),Object(l.jsx)(_.a.Control,{value:e.state.userEducation[n].passOutYear,type:"text",placeholder:"Enter Pass Out Year",name:"passOutYear",onChange:function(t){e.updateUserEducation(n,t.target.value,t.target.name)}}),Object(l.jsx)(_.a.Control,{value:e.state.userEducation[n].degree,type:"text",placeholder:"Enter Degree",name:"degree",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onChange:function(t){e.updateUserEducation(n,t.target.value,t.target.name)}})]},n)})),E&&Object(l.jsx)("button",{id:"remove-button",onClick:function(t){t.preventDefault(),function(){if(e.removeUserEducation(),1!==u.length){var t=Object(h.a)(u);t.pop(),o(t),2===u.length&&f(!1)}}()},children:"Remove"}),Object(l.jsx)("button",{id:"add-button",onClick:function(t){t.preventDefault(),function(){e.addUserEducation(),f(!0);var t=[].concat(Object(h.a)(u),["newDiv"]);o(t)}()},children:"Add another degree"})]}),Object(l.jsxs)(_.a.Group,{id:"multipleInputContainer",controlId:"formBasicExperience",children:[r.map((function(t,n){return Object(l.jsxs)("div",{children:[Object(l.jsxs)(_.a.Label,{children:[" Previous Experience ",n+1]}),Object(l.jsx)(_.a.Control,{value:e.state.userExperience[n].companyName,type:"text",placeholder:"Enter Company Name",name:"companyName",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onChange:function(t){e.updateUserExperience(n,t.target.value,t.target.name)}}),Object(l.jsx)(_.a.Control,{value:e.state.userExperience[n].numberOfYears,type:"text",placeholder:"Enter Number of Year",name:"numberOfYears",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onChange:function(t){e.updateUserExperience(n,t.target.value,t.target.name)}}),Object(l.jsx)(_.a.Control,{value:e.state.userExperience[n].designation,type:"text",placeholder:"Enter Designation",name:"designation",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onChange:function(t){e.updateUserExperience(n,t.target.value,t.target.name)}})]},n)})),m&&Object(l.jsx)("button",{id:"remove-button",onClick:function(t){t.preventDefault(),function(){if(e.removeUserExperience(),1!==r.length){var t=Object(h.a)(r);t.pop(),c(t),2===r.length&&p(!1)}}()},children:"Remove"}),Object(l.jsx)("button",{id:"add-button",onClick:function(t){t.preventDefault(),function(){e.addUserExperience(),p(!0);var t=[].concat(Object(h.a)(r),["newDiv"]);c(t)}()},children:"Add another company"})]}),Object(l.jsx)(_.a.Group,{id:"skills-input-group",controlId:"formBasicSkillSets",children:Object(l.jsx)(V.a,{placeholder:"Add Skills",values:e.state.userSkills,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},onTags:function(t){return function(t){e.addUserSkills(t.values)}(t)}})})]})}),Object(l.jsx)(F,{details:e})]})]})}));n(72);var J=function(e){return Object(l.jsxs)("div",{className:"view-resume-container",children:[Object(l.jsx)(d,{id:"view-resume"}),Object(l.jsx)("div",{className:"resume-template-container",children:Object(l.jsx)(F,{details:e,id:"view"})})]})};var H=function(){return Object(l.jsx)("div",{className:"main-container",children:Object(l.jsx)(p.a,{store:I,children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(m.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(m.a,{exact:!0,path:"/create-resume",component:X}),Object(l.jsx)(m.a,{exact:!0,path:"/view-resume",component:J})]})})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(H,{})}),document.getElementById("root")),Q()}},[[73,1,2]]]);
//# sourceMappingURL=main.6082a1c6.chunk.js.map