(this["webpackJsonpmy-restaurant-app"]=this["webpackJsonpmy-restaurant-app"]||[]).push([[0],{111:function(e,t,a){},113:function(e,t,a){},117:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),s=a.n(i),o=(a(111),a(30)),c=a(59),l=a(35),d=a(11),u=a(26),g=a(3),p=a(197),m=a(17),j=a(209),b=a(205),h=a(206),O=a(207),v=a(91),f=a(204),x=a(202),_=a(86),w=a.n(_),R=a(87),S=a.n(R),C=a(88),F=a.n(C),y=a(196),k=a(211),A=a(212),G=a(19),B=a.n(G),D=a(184),N=a(185),Q=a(4);function M(e){var t=G.Icon.extend({options:{}}),a=new t({iconUrl:"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",shadowUrl:"https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"}),n=new t({iconUrl:"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FF0000&chf=a,s,ee00FFFF"});return Object(Q.jsx)(D.a,{position:e.position,icon:"red"===e.color?n:a,children:Object(Q.jsxs)(N.a,{children:[Object(Q.jsx)("h3",{children:e.restaurant_name}),Object(Q.jsx)("p",{children:e.address}),Object(Q.jsx)("img",{src:e.restaurant_image,alt:""})]})})}a(113);var V=a(195),P=a(186),I=a(194),L=a(191),U=a(192),T=a(190),z=a(208);B.a.icon({iconSize:[25,41],iconAnchor:[10,41],popupAnchor:[2,-40],iconUrl:"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"});function E(e){var t,a=e.restaurants,r=e.setRestaurants,i=Object(n.useState)([4.05382,9.73432]),s=Object(d.a)(i,2),o=s[0],c=(s[1],Object(n.useState)(!1)),u=Object(d.a)(c,2),g=u[0],p=u[1],m=Object(n.useState)(""),j=Object(d.a)(m,2),b=j[0],h=j[1],O=Object(n.useState)(""),v=Object(d.a)(O,2),f=v[0],x=v[1],_=Object(n.useState)(""),w=Object(d.a)(_,2),R=w[0],S=w[1],C=Object(n.useState)(""),F=Object(d.a)(C,2),G=F[0],B=F[1],D=Object(n.useState)([4.05382,9.73432]),N=Object(d.a)(D,2),E=N[0],q=N[1],H=Object(n.useState)(),W=Object(d.a)(H,2),Z=W[0],J=W[1],K=Object(n.useRef)(),Y=function(){p(!1)};return Object(Q.jsxs)("div",{children:[Object(Q.jsxs)(P.a,{open:g,onClose:Y,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(Q.jsx)(T.a,{id:"alert-dialog-title",children:"Use Google's location service?"}),Object(Q.jsxs)(L.a,{children:[Object(Q.jsx)(U.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),Object(Q.jsx)("div",{children:Object(Q.jsx)(z.a,{ref:K,value:b,onChange:function(e){return h(e.target.value)},label:"Name"})}),Object(Q.jsx)("div",{children:Object(Q.jsx)(z.a,{ref:K,value:G,onChange:function(e){return B(e.target.value)},label:"image link"})}),Object(Q.jsx)("div",{children:Object(Q.jsx)(z.a,{ref:K,value:f,onChange:function(e){return x(e.target.value)},label:"Address",multiline:!0,rows:4,defaultValue:"Default Value",variant:"filled"})}),Object(Q.jsx)("div",{children:Object(Q.jsx)(z.a,{ref:K,value:R,onChange:function(e){return S(e.target.value)},label:"Description",multiline:!0,rows:2,defaultValue:"Default Value",variant:"filled"})}),Object(Q.jsx)("div",{children:Object(Q.jsx)(z.a,{ref:K,value:Z,onChange:function(e){return J(e.target.value)},label:"NewRating",multiline:!0,rows:4,defaultValue:Z,variant:"filled"})})]}),Object(Q.jsxs)(I.a,{children:[Object(Q.jsx)(V.a,{onClick:function(e){if(e.preventDefault(),b&&f){var t=Object(l.a)(a),n={id:"",position:E,restaurant_name:b,restaurant_description:R,restaurant_image:G,address:f,avg_rating:Z,reviews:[],isReviewsOpen:!1};t.push(n),r(t),K.current.focus()}p(!1)},color:"primary",autoFocus:!0,children:"Save and close"}),Object(Q.jsx)(V.a,{onClick:Y,color:"primary",children:"close"})]})]}),Object(Q.jsxs)(y.a,{className:"map-container",center:o,zoom:15,scrollWheelZoom:!1,children:[Object(Q.jsx)(k.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(Q.jsx)(M,{position:o,restaurant_name:"Center",address:"",image:"",color:"red"},Date.now()),(t=a,Object(Q.jsx)("div",{children:t.map((function(e){return Object(Q.jsx)(M,{position:e.position,restaurant_name:e.restaurant_name,address:e.address,image:e.restaurant_image},Date.now()+e.restaurant_name)}))})),Object(Q.jsx)(A.a,{children:function(e){return e.on("click",(function(e){var t=e.latlng,a=t.lat,n=t.lng;q([a,n]),p(!0)})),null}})]})]})}var q=a(5),H=a(198),W=a(199),Z=a(200),J=a(201),K=a(203),Y=a(65),X=a(84),$=a.n(X),ee=a(68),te=(a(117),a(210)),ae=a(193),ne=a(83),re=a(142),ie=Object(p.a)((function(e){return{root:{maxWidth:345},media:{height:150,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Y.a[500]},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),se=Object(q.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(re.a);function oe(e){var t=e.restaurants,a=e.setRestaurants,r=ie(),i=Object(n.useState)(""),s=Object(d.a)(i,2),u=s[0],p=s[1],m=Object(n.useState)(""),j=Object(d.a)(m,2),b=j[0],h=j[1],O=Object(n.useState)(""),v=Object(d.a)(O,2),f=v[0],_=v[1],w=Object(n.useRef)(),R=Object(n.useRef)();return Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{style:{textAlign:"center",paddingBottom:"10px"},children:Object(Q.jsxs)(ae.a,{className:r.margin,children:[Object(Q.jsx)(te.a,{htmlFor:"demo-customized-select-native",children:"By Rating"}),Object(Q.jsxs)(ne.a,{id:"demo-customized-select-native",onChange:function(e){var n=t.filter((function(t){return""===e.target.value||("1"===e.target.value?t.avg_rating>=1&&t.avg_rating<2:"2"===e.target.value?t.avg_rating>=2&&t.avg_rating<3:"3"===e.target.value?t.avg_rating>=3&&t.avg_rating<4:"4"===e.target.value?t.avg_rating>=4&&t.avg_rating<5:"5"===e.target.value?5===t.avg_rating:void 0)}));console.log(e.target.value),a(n)},input:Object(Q.jsx)(se,{}),children:[Object(Q.jsx)("option",{"aria-label":"None",value:""}),Object(Q.jsx)("option",{value:1,children:"One "}),Object(Q.jsx)("option",{value:2,children:"Two"}),Object(Q.jsx)("option",{value:3,children:"Three"}),Object(Q.jsx)("option",{value:4,children:"Four"}),Object(Q.jsx)("option",{value:5,children:"Five"})]})]})}),t.map((function(e,n){return Object(Q.jsxs)(H.a,{className:r.root,children:[Object(Q.jsx)(W.a,{style:{width:"200px",display:"flex",textAlign:"center",paddingBottom:"5px",paddingTop:"5px",paddingRight:"20px",paddingLeft:"20px"},className:r.media,image:e.restaurant_image}),Object(Q.jsxs)(Z.a,{children:[Object(Q.jsx)("h4",{children:e.restaurant_name}),Object(Q.jsx)("p",{children:e.restaurant_description})]}),Object(Q.jsxs)(J.a,{disableSpacing:!0,children:[Object(Q.jsxs)("h4",{style:{border:"2px",borderRadius:"1px"},children:["Rating: ",e.avg_rating]}),Object(Q.jsx)(x.a,{className:Object(g.a)(r.expand,Object(o.a)({},r.expandOpen,e.isReviewsOpen)),onClick:function(){return function(e){var n=Object(l.a)(t);n[e].isReviewsOpen=!n[e].isReviewsOpen,a(n)}(n)},"aria-expanded":e.isReviewsOpen,"aria-label":"show more",children:Object(Q.jsx)($.a,{})})]}),Object(Q.jsx)(K.a,{in:e.isReviewsOpen,timeout:"auto",unmountOnExit:!0,children:Object(Q.jsxs)(Z.a,{children:[Object(Q.jsxs)("form",{onSubmit:function(e){return function(e,n){e.preventDefault();var r=0,i=Object(l.a)(t),s={user_name:u,comment:f,rating:b};i[n].reviews.push(s);var o,d=Object(c.a)(i[n].reviews);try{for(d.s();!(o=d.n()).done;){var g=o.value;r+=parseInt(g.rating)}}catch(m){d.e(m)}finally{d.f()}r/=i[n].reviews.length,i[n].avg_rating=r,a(i),p(""),_(""),h(""),w.current.focus(),R.current.focus()}(e,n)},children:[Object(Q.jsx)("label",{children:"Customer name:"}),Object(Q.jsx)("input",{ref:w,type:"text",required:!0,value:u,onChange:function(e){return p(e.target.value)}}),Object(Q.jsx)("label",{children:"Comment body:"}),Object(Q.jsx)("textarea",{ref:R,required:!0,value:f,onChange:function(e){return _(e.target.value)}}),Object(Q.jsx)("label",{children:"Customer rating:"}),Object(Q.jsx)("input",{ref:w,type:"text",required:!0,value:b,onChange:function(e){return h(e.target.value)}}),Object(Q.jsx)("button",{children:"Add Comment"})]}),Object(Q.jsx)("div",{className:"posts",children:e.reviews.map((function(e,t){return Object(Q.jsxs)("div",{className:"post",children:[Object(Q.jsx)("h4",{children:e.user_name}),Object(Q.jsx)("p",{children:e.comment}),Object(Q.jsxs)("h5",{children:["Rating: ",e.rating]})]},t)}))})]})})]},n)}))]})}f.a;var ce=a(85),le=a.n(ce),de=260,ue=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(de,"px)"),marginLeft:de,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:de,flexShrink:0},drawerPaper:{width:de},drawerHeader:Object(u.a)(Object(u.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-260},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function ge(){var e=ue(),t=Object(m.a)(),a=r.a.useState(!1),i=Object(d.a)(a,2),s=i[0],u=i[1],p=r.a.useState(ee),_=Object(d.a)(p,2),R=_[0],C=_[1],y=r.a.useState([]),k=Object(d.a)(y,2),A=(k[0],k[1]),G=r.a.useState([4.05382,9.73432]),B=Object(d.a)(G,2),D=B[0],N=B[1];function M(e){N([e.coords.latitude,e.coords.longitude])}Object(n.useEffect)((function(){V(D)}),[D]),Object(n.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(M):console.log("Geolocation is not supported by this browser.")}),[]);var V=function(){le.a.get("https://api.foursquare.com/v2/venues/search?"+new URLSearchParams({client_id:"IQJPRMFP1NKKXV4ITTPN50K2RCGLUL5DZ1HDNIPBTRGUBLYL",client_secret:"WQCQISY2FCGMXDJF1QOHFC2ADUZIGCWZMVSB45CFQVDWIGFA",query:"food",near:"Douala",v:"20210301",radius:"2000",ll:"4.05382,9.73432",categoryId:"4d4b7105d754a06374d81259"})).then((function(e){A(e.data.response.venues);var t,a=Object(l.a)(R),n=Object(c.a)(e.data.response.venues);try{for(n.s();!(t=n.n()).done;){var r=t.value;console.log("Shazam***",r);var i={id:"",position:[r.location.lat,r.location.lng],restaurant_name:r.name,restaurant_description:r.categories[0].pluralName,restaurant_image:"http://localhost:3000/placeholder-restaurant.png",address:r.location.address,avg_rating:5,reviews:[],isReviewsOpen:!1};a.push(i)}}catch(s){n.e(s)}finally{n.f()}C(a)})).catch((function(e){console.log("ERROR|| "+e)}))};return Object(Q.jsxs)("div",{className:e.root,children:[Object(Q.jsx)(b.a,{}),Object(Q.jsx)(h.a,{position:"fixed",className:Object(g.a)(e.appBar,Object(o.a)({},e.appBarShift,s)),children:Object(Q.jsxs)(O.a,{children:[Object(Q.jsx)(x.a,{color:"inherit","aria-label":"open drawer",onClick:function(){u(!0)},edge:"start",className:Object(g.a)(e.menuButton,s&&e.hide),children:Object(Q.jsx)(w.a,{})}),Object(Q.jsx)(v.a,{variant:"h6",noWrap:!0,children:"Restaurants Of Ange Raphael In Douala."})]})}),Object(Q.jsxs)(j.a,{className:e.drawer,variant:"persistent",anchor:"left",open:s,classes:{paper:e.drawerPaper},children:[Object(Q.jsx)("div",{className:e.drawerHeader,children:Object(Q.jsx)(x.a,{onClick:function(){u(!1)},children:"ltr"===t.direction?Object(Q.jsx)(S.a,{}):Object(Q.jsx)(F.a,{})})}),Object(Q.jsx)(f.a,{}),Object(Q.jsx)(oe,{restaurants:R,setRestaurants:C}),Object(Q.jsx)(f.a,{})]}),Object(Q.jsxs)("main",{className:Object(g.a)(e.content,Object(o.a)({},e.contentShift,s)),children:[Object(Q.jsx)("div",{className:e.drawerHeader}),Object(Q.jsx)(E,{restaurants:R,setRestaurants:C})]})]})}var pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,213)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(Q.jsx)(r.a.StrictMode,{children:Object(Q.jsx)(ge,{})}),document.getElementById("root")),pe()},68:function(e){e.exports=JSON.parse('[{"id":"1","position":[4.05498,9.73323],"restaurant_name":"Restaurant le Campus 3","address":"Face entr\xe9e principale du Campus 1.","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipMEWiQSk_ogIkmlxrGgb3twoQAzfOOgl1Dls8Fr=w262-h104-p-k-no","restaurant_description":"Restaurant de sp\xe9cialit\xe9s d\'Afrique de l\'Ouest.","avg_rating":4.5,"reviews":[{"user_name":"sarah","comment":"Very good.","rating":5},{"user_name":"john","comment":"Good.","rating":4}],"isReviewsOpen":false},{"id":2,"position":[4.05282,9.73747],"restaurant_name":"Canovas Prestige","address":"Situ\xe9 vers le Stade Cicam","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipPcX_2FmqMiAoKrlHiMkNQvlDrqKJgqX3zd7_RS=w408-h408-k-no","restaurant_description":"Snack-Bar-Grillades","avg_rating":1,"reviews":[{"user_name":"michael","comment":"Good.","rating":1},{"user_name":"jim","comment":"Good.","rating":1},{"user_name":"lex","comment":"Bad.","rating":1}],"isReviewsOpen":false},{"id":3,"position":[4.05601,9.73154],"restaurant_name":"Restaurant de l\'Amiti\xe9","address":"Sis \xe0 Fin Barri\xe8re ESSEC Campus 1","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipM-phEQS5K5b3oixLeL-l9alRTVoqIa-BdlCAMG=w408-h306-k-no","restaurant_description":"Restaurant de sp\xe9cialit\xe9s s\xe9n\xe9galaises.","avg_rating":4,"reviews":[{"user_name":"daniel","comment":"Very Good.","rating":5},{"user_name":"max","comment":"Good.","rating":3},{"user_name":"kate","comment":"Good.","rating":4}],"isReviewsOpen":false},{"id":"56bdf65a498ebf522c03fa87","position":[4.055577,9.730292],"restaurant_name":"Zaira (Restaurant S\xe9n\xe9galais)","address":"Pr\xe8s la Pharmacie De L\'ESSEC","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipPlQIyOZf_jjDnHAuWjQUGjFPB3Xs2UhsdpIxMN=w156-h96-p-k-no","restaurant_description":"Fast-food","avg_rating":4,"reviews":[{"user_name":"daniel","comment":"Very Good.","rating":5},{"user_name":"max","comment":"Good.","rating":3},{"user_name":"kate","comment":"Good.","rating":4}],"isReviewsOpen":false},{"id":"50fa95e8e4b05d9123d32adc","position":[4.054399894366197,9.737052042253522],"restaurant_name":"Restaurant le Campus","address":"Cit\xe9 CICAM","restaurant_image":"https://images.unsplash.com/photo-1580220277977-c5f99f90e0ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHJlc3RhdXJhbnQlMjBzZW5lZ2FsYWlzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60","restaurant_description":"Restaurant africain.","avg_rating":4,"reviews":[{"user_name":"sam","comment":"Very Good.","rating":5},{"user_name":"xander","comment":"Good.","rating":3},{"user_name":"dean","comment":"Good.","rating":4}],"isReviewsOpen":false},{"id":"50125854e4b0c8f1eced4cfe","position":[4.055216177822392,9.730313614647788],"restaurant_name":"Boulangerie Royale","address":"Face Paroisse Christ-Roi BP cit\xe9-sic","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipOeHsFcT0NAKkvG-uMt1cRmwCkzeQyXTjUvDb1Y=w408-h725-k-no","restaurant_description":"Boulangeries","avg_rating":2.5,"reviews":[{"user_name":"bill","comment":"Very good.","rating":3},{"user_name":"donald","comment":"Good.","rating":2}],"isReviewsOpen":false},{"id":5,"position":[4.05587,9.73715],"restaurant_name":"HALAL Tchop","address":"Situ\xe9 vers le Stade Cicam","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipOn1Vg2soAzioubUkUvikotvK0MJEe6q2z7x83E=w408-h839-k-no","restaurant_description":"Restaurant S\xe9n\xe9galais.","avg_rating":4,"reviews":[{"user_name":"daniel","comment":"Very Good. Cool place to visit.","rating":5},{"user_name":"max","comment":"Good.","rating":3},{"user_name":"kate","comment":"Good.","rating":4}],"isReviewsOpen":false},{"id":"4fb94260e4b046114b62e9cf","position":[4.055229338734701,9.730370431531208],"restaurant_name":"Boulangerie Du Campus","address":"Face entr\xe9e principale du Campus 1.","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipPgAVAHIcPa48doMo2BrR3l05WXAK33Yi54tTMf=w408-h544-k-no","restaurant_description":"Boulangeries.","avg_rating":2,"reviews":[{"user_name":"yves","comment":"Very good.","rating":1},{"user_name":"damian","comment":"Good.","rating":3}],"isReviewsOpen":false},{"id":"50a92609e4b0740a18b15108","position":[4.066541968247261,9.726269170353332],"restaurant_name":"Boulangerie De La Paix","address":"Bepanda.","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipMBgzPlqUGQU03RuTgQPObK6fzeiJQtH0-8ulzM=w408-h544-k-no","restaurant_description":"Boulangeries","avg_rating":2,"reviews":[{"user_name":"donell","comment":"Very good.","rating":1},{"user_name":"damian","comment":"Good.","rating":3}],"isReviewsOpen":false},{"id":"52f40f0e498ede6e9ad3ab57","position":[4.049283136689607,9.73073821085351],"restaurant_name":"Le Grand Saphir","address":"Cit\xe9-sic, Belle Hollandaise","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipOxNADWnlM_2Uq5DVokme2Ss7V4FRuZOpxqcVQf=w408-h544-k-no","restaurant_description":"Snack","avg_rating":3,"reviews":[{"user_name":"donell","comment":"Very good.","rating":3},{"user_name":"damian","comment":"Good.","rating":3}],"isReviewsOpen":false},{"id":"510ea14de4b0ec5ccebd6957","position":[4.050904730377669,9.739546340378741],"restaurant_name":"Rotisserie Dorsi","address":"Cit\xe9-sic, Belle Hollandaise","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipMZ01DCTwddPnbbvYeMHD8YfMxoaqC6aj6jM4kq=w408-h306-k-no","restaurant_description":"Restaurant sp\xe9cialis\xe9 dans le poulet frit.","avg_rating":5,"reviews":[{"user_name":"donell","comment":"Very good.","rating":5},{"user_name":"damian","comment":"Good.","rating":5}],"isReviewsOpen":false},{"id":"56aba048498e98f30b6589ec","position":[4.0568438,9.747236],"restaurant_name":"Target Point","address":"Ndogbong","restaurant_image":"https://lh5.googleusercontent.com/p/AF1QipOEjzodyjDdOOQmcaC4Uctt79h35xbdvdIYBpar=w408-h306-k-no","restaurant_description":"Restaurants africains.","avg_rating":5,"reviews":[{"user_name":"donell","comment":"Very good.","rating":5},{"user_name":"damian","comment":"Good.","rating":5}],"isReviewsOpen":false}]')}},[[137,1,2]]]);
//# sourceMappingURL=main.da24b9b9.chunk.js.map