(this.webpackJsonpyashpandey73=this.webpackJsonpyashpandey73||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},33:function(e,t,a){},35:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(23),r=a.n(c),s=(a(32),a(33),a(34),a(35),a(14)),o=a(3),i=a(13),u=a.n(i),m=a(16),d=a(5),h=a(6),p=a(12),f=a(8),v=a(7),E=a(26),b=(a(39),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={currentPageSize:10,countrydetails:[],filteredData:[],searchInput:"",flag:!1},n.MakeHttpReq=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL").then((function(e){return e.json()})).then((function(e){var t=[];Object.keys(e.countryitems[0]).forEach((function(a,n){void 0!==e.countryitems[0][n]&&t.push(e.countryitems[0][n])})),n.setState({countrydetails:t}),n.setState({flag:!0})})).catch(console.log);case 1:case"end":return e.stop()}}),e)}))),n.handleChange=function(e){n.setState({searchInput:e.target.value},(function(){n.globalSearch()}))},n.globalSearch=function(){var e=n.state,t=e.searchInput,a=e.countrydetails.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));n.setState({filteredData:a})},n.val="newval",n.Countrydata=n.Countrydata.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"Countrydata",value:function(){this.MakeHttpReq()}},{key:"componentDidMount",value:function(){this.MakeHttpReq()}},{key:"render",value:function(){var e=null;return this.state.flag&&(e=l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"searchInput",value:this.state.searchInput||"",onChange:this.handleChange,label:"Search"}),this.state.flag?l.a.createElement(E.a,{data:this.state.filteredData&&this.state.filteredData.length?this.state.filteredData:this.state.countrydetails,columns:[{Header:"Country",accessor:"title"},{Header:"Total Cases",accessor:"total_cases"},{Header:"Total Recovered",accessor:"total_recovered"},{Header:"Total Deaths",accessor:"total_deaths"},{Header:"New Cases",accessor:"total_new_cases_today"},{Header:"New Deaths",accessor:"total_new_deaths_today"},{Header:"Total Active Cases",accessor:"total_active_cases"},{Header:"Total Serious Cases",accessor:"total_serious_cases"}],defaultPageSize:this.state.currentPageSize,pagination:!0}):null)),l.a.createElement("div",{className:"text-left"},l.a.createElement("span",null,"Click here"),l.a.createElement("button",{onClick:this.Countrydata},"Stats"),e)}}]),a}(n.Component)),g=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("p",{class:"lead text-left"},"tutorial Component")}}]),a}(n.Component),y=a(18),w=a.n(y),C=a(24),j=a.n(C),k=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={xAxisData:[],tcTimeline:[{}],tdTimeline:[],newCases:[]},n.countryInfo=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.thevirustracker.com/free-api?countryTimeline=IN").then((function(e){return e.json()})).then((function(e){var t=[],a=[],l=[],c=[];Object.keys(e.timelineitems[0]).forEach((function(n,r){t.push(n),a.push(e.timelineitems[0][n].total_cases),l.push(e.timelineitems[0][n].total_deaths),c.push(e.timelineitems[0][n].new_daily_cases)})),n.setState({xAxisData:t}),n.setState({tcTimeline:a}),n.setState({tdTimeline:l}),n.setState({newCases:c})})).catch(console.log);case 1:case"end":return e.stop()}}),e)}))),n.countryInfo=n.countryInfo.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.countryInfo()}},{key:"render",value:function(){var e={chart:{type:"areaspline",scrollablePlotArea:{minWidth:100}},credits:{enabled:!1},title:{text:"Covid-19 India Data Chart"},plotOptions:{series:{label:{connectorAllowed:!1}}},xAxis:{categories:this.state.xAxisData},series:[{name:"Total Cases",data:this.state.tcTimeline},{name:"Total deaths",data:this.state.tdTimeline},{name:"New Cases",data:this.state.newCases}]};return l.a.createElement("div",null,l.a.createElement(j.a,{highcharts:w.a,options:e}))}}]),a}(n.Component),O=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).info=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.thevirustracker.com/free-api?global=stats").then((function(e){return e.json()})).then((function(e){n.setState({details:e.results[0],flag:!0})})).catch(console.log);case 1:case"end":return e.stop()}}),e)}))),n.state={details:Object,flag:!1},n.info=n.info.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.info()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(N,{details:this.state.details})),l.a.createElement("div",null,l.a.createElement(k,{data:this.state.details})))}}]),a}(n.Component),N=function(e){var t=e.details;return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("h1",{className:"alert alert-primary"},"Corona Virus Global Data")),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{class:"row form-group mb-2"},l.a.createElement("label",{class:"col-md-4"},"Total Cases:"),l.a.createElement("div",{class:"input-group col-md-8"},l.a.createElement("span",null,t.total_cases))),l.a.createElement("div",{class:"row form-group mb-2"},l.a.createElement("label",{class:"col-md-4"},"Total Affected Countries:"),l.a.createElement("div",{class:"input-group col-md-8"},l.a.createElement("span",null,t.total_affected_countries))),l.a.createElement("div",{class:"row form-group mb-2"},l.a.createElement("label",{class:"col-md-4"},"Recovery Cases:"),l.a.createElement("div",{class:"input-group col-md-8"},l.a.createElement("span",null,t.total_recovered))),l.a.createElement("div",{class:"row form-group mb-2"},l.a.createElement("label",{class:"col-md-4"},"UnRecovered Cases:"),l.a.createElement("div",{class:"input-group col-md-8"},l.a.createElement("span",null,t.total_unresolved))),l.a.createElement("div",{class:"row form-group mb-2"},l.a.createElement("label",{class:"col-md-4"},"Total Deaths:"),l.a.createElement("div",{class:"input-group col-md-8"},l.a.createElement("span",null,t.total_deaths))),l.a.createElement("div",{class:"row form-group mb-2"},l.a.createElement("label",{class:"col-md-4"},"Total Active Cases:"),l.a.createElement("div",{class:"input-group col-md-8"},l.a.createElement("span",null,t.total_active_cases))),l.a.createElement("div",{class:"row form-group mb-2"},l.a.createElement("label",{class:"col-md-4"},"Total New Cases Today:"),l.a.createElement("div",{class:"input-group col-md-8"},l.a.createElement("span",null,t.total_new_cases_today))),l.a.createElement("div",{class:"row form-group mb-2"},l.a.createElement("label",{class:"col-md-4"},"Total New Deaths Today:"),l.a.createElement("div",{class:"input-group col-md-8"},l.a.createElement("span",null,t.total_new_deaths_today))))))},_=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={flag:!1},n.display=n.display.bind(Object(p.a)(n)),n.value=215,n}return Object(h.a)(a,[{key:"display",value:function(){this.setState((function(e){return{flag:!e.flag}}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"text-left"},"Total Affected Countries",l.a.createElement("button",{onClick:this.display},"click"),this.state.flag?l.a.createElement("p",null,this.value):null),l.a.createElement("div",{className:"text-left"},l.a.createElement(O,null)))}}]),a}(n.Component),x=(l.a.Component,function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={flag:!1,textarea:"this is text area"},n.flag=!0,n}return Object(h.a)(a,[{key:"sendQuery",value:function(e){console.log(e.target.value),console.log(this.state.textarea)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"MainDiv",className:"container"},l.a.createElement("h1",null,"Hi there, This is Yash"),l.a.createElement("div",{className:"form-group row"},l.a.createElement("p",{class:"col-sm-4"},"This is a personal project for React Js Hands On.")),l.a.createElement("div",{className:"form-group row"},l.a.createElement("p",{class:"col-sm"},"Will be Adding different React Concept as example to this website Over the Time.")),l.a.createElement("div",{className:"form-group row"},l.a.createElement("h5",null,"Send in your Suggestions, We'll get back to You.")),l.a.createElement("div",{className:"form-group row"},l.a.createElement("form",{onSubmit:function(t){return e.sendQuery(t)},className:"col s10"},l.a.createElement("div",{className:"row"},l.a.createElement("textarea",{id:"textarea",className:"col-sm-6",defaultValue:this.state.textarea})),l.a.createElement("div",{className:"row"},l.a.createElement("input",{type:"submit"})))))}}]),a}(n.Component));var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},l.a.createElement("div",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/home",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/worldStats",className:"nav-link"},"World Stats")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/countryStats",className:"nav-link"},"Country Wise Stats")))),l.a.createElement("div",{className:"container mt-3"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:["/","/home"],component:x}),l.a.createElement(o.a,{exact:!0,path:["/worldStats"],component:_}),l.a.createElement(o.a,{exact:!0,path:"/countryStats",component:b}),l.a.createElement(o.a,{path:"/tutorials/:id",component:g}))))),l.a.createElement("div",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(s.a,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.9eefdb7b.chunk.js.map