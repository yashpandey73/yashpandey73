(this.webpackJsonpyashpandey73=this.webpackJsonpyashpandey73||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},32:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(23),r=a.n(c),s=(a(32),a(33),a(34),a(35),a(15)),o=a(3),i=a(14),u=a.n(i),m=a(16),d=a(8),h=a(9),f=a(12),v=a(11),p=a(10),b=a(26),E=(a(39),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={currentPageSize:10,countrydetails:[],filteredData:[],searchInput:"",flag:!1},n.MakeHttpReq=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL").then((function(e){return e.json()})).then((function(e){var t=[];Object.keys(e.countryitems[0]).forEach((function(a,n){void 0!==e.countryitems[0][n]&&t.push(e.countryitems[0][n])})),n.setState({countrydetails:t}),n.setState({flag:!0})})).catch(console.log);case 1:case"end":return e.stop()}}),e)}))),n.handleChange=function(e){n.setState({searchInput:e.target.value},(function(){n.globalSearch()}))},n.globalSearch=function(){var e=n.state,t=e.searchInput,a=e.countrydetails.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));n.setState({filteredData:a})},n.val="newval",n.Countrydata=n.Countrydata.bind(Object(f.a)(n)),n}return Object(h.a)(a,[{key:"Countrydata",value:function(){this.MakeHttpReq()}},{key:"componentDidMount",value:function(){this.MakeHttpReq()}},{key:"render",value:function(){var e=null;return this.state.flag&&(e=l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"searchInput",value:this.state.searchInput||"",onChange:this.handleChange,label:"Search"}),this.state.flag?l.a.createElement(b.a,{data:this.state.filteredData&&this.state.filteredData.length?this.state.filteredData:this.state.countrydetails,columns:[{Header:"Country",accessor:"title"},{Header:"Total Cases",accessor:"total_cases"},{Header:"Total Recovered",accessor:"total_recovered"},{Header:"Total Deaths",accessor:"total_deaths"},{Header:"New Cases",accessor:"total_new_cases_today"},{Header:"New Deaths",accessor:"total_new_deaths_today"},{Header:"Total Active Cases",accessor:"total_active_cases"},{Header:"Total Serious Cases",accessor:"total_serious_cases"}],defaultPageSize:this.state.currentPageSize,pagination:!0}):null)),l.a.createElement("div",{className:"text-left"},"Click here==>",l.a.createElement("button",{onClick:this.Countrydata},"Stats"),e)}}]),a}(n.Component)),y=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("p",{class:"lead text-left"},"tutorial Component")}}]),a}(n.Component),C=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={details:Object,flag:!1},n.info=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.thevirustracker.com/free-api?global=stats").then((function(e){return e.json()})).then((function(e){n.setState({details:e.results[0],flag:!0})})).catch(console.log);case 1:case"end":return e.stop()}}),e)}))),n.info=n.info.bind(Object(f.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.info()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"Click below For Corona Virus World Stats"),l.a.createElement("button",{onClick:this.info},"Stats"),this.state.flag?l.a.createElement(g,{details:this.state.details}):null)}}]),a}(n.Component),g=function(e){var t=e.details;return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",null,"Corona Virus Updated List")),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",{className:"card-title"},"Total Cases: ",t.total_cases),l.a.createElement("h5",{className:"card-title"},"Total Affected Countries"),l.a.createElement("p",null,t.total_affected_countries),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Recovery Cases:"),l.a.createElement("p",null,t.total_recovered),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"UnRecovered Cases:"),l.a.createElement("p",null,t.total_unresolved),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Total Deaths:"),l.a.createElement("p",{className:"card-text"},t.total_deaths),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Total Active Cases:"),l.a.createElement("p",{className:"card-text"},t.total_active_cases),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Total New Cases Today:"),l.a.createElement("p",{className:"card-text"},t.total_new_cases_today),l.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Total New Deaths Today:"),l.a.createElement("p",{className:"card-text"},t.total_new_deaths_today))))},k=a(18),N=a.n(k),j=a(24),w=a.n(j),O=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(h.a)(a,[{key:"render",value:function(){var e={chart:{type:"spline"},title:{text:"My chart"},series:[{name:"Data",data:[[Date.UTC(2013,5,2),.7695],[Date.UTC(2013,6,12),2.7695],[Date.UTC(2013,7,21),1.7695],[Date.UTC(2013,8,18),4]]}]};return l.a.createElement("div",null,l.a.createElement(w.a,{highcharts:N.a,options:e}))}}]),a}(n.Component),_=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={flag:!1},n.display=n.display.bind(Object(f.a)(n)),n.value=90,n}return Object(h.a)(a,[{key:"display",value:function(){console.log(this.value),console.log("button clicked!"),this.setState((function(e){return{flag:!e.flag}}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"text-left"},"World Stats Component",l.a.createElement("button",{onClick:this.display},"click"),this.state.flag?l.a.createElement("p",null,this.value):null),l.a.createElement("div",{className:"text-left"},l.a.createElement(C,null)),l.a.createElement("div",null,l.a.createElement(O,null)))}}]),a}(n.Component);l.a.Component;var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("p",null,"hello"),l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},l.a.createElement("a",{href:"/worldStats",className:"navbar-brand"},"Home"),l.a.createElement("div",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/worldStats",className:"nav-link"},"World Stats")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/countryStats",className:"nav-link"},"Country Wise Stats")))),l.a.createElement("div",{className:"container mt-3"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:["/","/worldStats"],component:_}),l.a.createElement(o.a,{exact:!0,path:"/countryStats",component:E}),l.a.createElement(o.a,{path:"/tutorials/:id",component:y}))))),l.a.createElement("div",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(s.a,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.ea8ed857.chunk.js.map