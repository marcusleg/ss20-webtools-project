(this["webpackJsonpss20-webtools-project"]=this["webpackJsonpss20-webtools-project"]||[]).push([[0],{12:function(t,e,a){t.exports=a(19)},17:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(17),a(8)),o=(a(18),a(3)),s=a.n(o),u=a(2),d=a(1),m=function(t){switch(t){case 0:return"#ff9e1b";case 1:return"#c4d52a";case 2:return"#7c8034";default:return"#cccccc"}},p=function(t){var e=t.data,a=t.principalComponents,c=t.highlightedIndex,l=t.setHighlightedIndex,i=t.n,o=Object(n.useRef)();Object(n.useEffect)((function(){var t,n=Object(d.g)(o.current);try{t=s.a.computeAdjustedData(e,a[Number(i)-1]).adjustedData[0]}catch(f){return void console.error("Handled exception in 3rd party library")}var r=Math.min.apply(Math,Object(u.a)(s.a.computeAdjustedData(e,a[0]).adjustedData[0]).concat(Object(u.a)(s.a.computeAdjustedData(e,a[1]).adjustedData[0]))),m=Math.max.apply(Math,Object(u.a)(s.a.computeAdjustedData(e,a[0]).adjustedData[0]).concat(Object(u.a)(s.a.computeAdjustedData(e,a[1]).adjustedData[0]))),p=Object(d.f)().domain([r,m]).range([0,300]).nice().clamp(!0),h=Object(d.a)(p);n.select(".x-axis").style("transform","translateY(25px)").transition().call(h),n.selectAll(".dataPoint").data(t).join("circle").attr("class","dataPoint").attr("r",3).attr("cy",25).style("fill",(function(t,e){return e===c?"red":"black"})).transition().attr("cx",(function(t){return p(t)})),n.selectAll(".dataPoint").on("mouseenter",(function(t,e){l(e)})).on("mouseleave",(function(){l(void 0)}))}),[e,a,i,c,l]);var p={textDecoration:"underline",textDecorationColor:m(Number(i-1)),textDecorationThickness:".15em"};return r.a.createElement("div",null,r.a.createElement("h3",{style:p},"Component ",i),r.a.createElement("svg",{ref:o,height:"60"},r.a.createElement("g",{className:"x-axis"})))},h=function(t){var e=t.data,a=t.setData,n=t.highlightedIndex,c=function(t){return function(n){n.preventDefault(),a(e.filter((function(e,a){return t!==a})))}},l={border:"none",color:"darkblue",cursor:"pointer",display:"inline",margin:0,padding:0},i=function(t){return t===n?{color:"red"}:{}};return r.a.createElement("div",{id:"dataTable"},r.a.createElement("h3",null,"Data"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"X"),r.a.createElement("th",null,"Y")),e.sort().map((function(t,e){return r.a.createElement("tr",{key:e,style:i(e)},r.a.createElement("td",null,Number.parseFloat(t[0]).toFixed(2)),r.a.createElement("td",null,Number.parseFloat(t[1]).toFixed(2)),r.a.createElement("td",null,r.a.createElement("button",{style:l,onClick:c(e)},"[X]")))})))),r.a.createElement("br",null),r.a.createElement("b",null,"Add data point"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=Number(t.target.x.value),r=Number(t.target.y.value);console.log(n,r),a(e.concat([[n,r]])),t.target.x.value="",t.target.y.value=""}},"X: ",r.a.createElement("input",{name:"x",style:{width:"25px"}}),r.a.createElement("br",null),"Y: ",r.a.createElement("input",{name:"y",style:{width:"25px"}}),r.a.createElement("br",null),r.a.createElement("button",{style:{width:"75px"}},"Add")))},f=function(t){var e=t.data,a=t.setData,c=t.principalComponents,l=t.highlightedIndex,i=t.setHighlightedIndex,o=Object(n.useRef)();return Object(n.useEffect)((function(){var t=Object(d.g)(o.current),n=5,r=5,p=-5,h=-5;e.length>0&&(n=Math.max.apply(Math,Object(u.a)(e.map((function(t){return t[0]}))))+5,r=Math.max.apply(Math,Object(u.a)(e.map((function(t){return t[1]}))))+5,p=Math.min.apply(Math,Object(u.a)(e.map((function(t){return t[0]}))))-5,h=Math.min.apply(Math,Object(u.a)(e.map((function(t){return t[1]}))))-5);var f=Object(d.f)().domain([p,n]).range([0,600]).nice(),b=Object(d.f)().domain([h,r]).range([0,600]).nice(),g=Object(d.a)(f);t.select(".x-axis").style("transform","translateY(600px)").transition().call(g);var E=Object(d.b)(b);t.select(".y-axis").style("transform","translateX(600px)").transition().call(E),t.select(".data-points").selectAll(".dataPoint").data(e).join("circle").attr("class","dataPoint").attr("r",3).style("fill",(function(t,e){return e===l?"red":"black"})).transition().attr("cx",(function(t){return f(t[0])})).attr("cy",(function(t){return b(t[1])})),t.select(".data-points").selectAll(".dataPoint").on("click",(function(t,n){d.c.stopPropagation();var r=e.slice();r.splice(n,1),a(r)})),t.on("click",(function(){var t=Object(d.d)(o.current),n=[f.invert(t[0]),b.invert(t[1])],r=e.concat([n]),c=s.a.computeDeviationMatrix(r);a(c)})),t.select(".data-points").selectAll(".dataPoint").on("mouseenter",(function(t,e){i(e)})).on("mouseleave",(function(){i(void 0)})),t.select(".principal-components").selectAll(".component").data(c).join("line").attr("class","component").attr("clip-path","url(#rect-clip)").attr("stroke-width",2).attr("stroke",(function(t,e){return m(e)})).transition().attr("x1",(function(t){return f(2*f.domain()[0]*t.vector[0])})).attr("x2",(function(t){return f(2*f.domain()[1]*t.vector[0])})).attr("y1",(function(t){return b(2*b.domain()[0]*t.vector[1])})).attr("y2",(function(t){return b(2*b.domain()[1]*t.vector[1])}))}),[e,a,c,i,l]),r.a.createElement("div",{id:"scatterPlot"},r.a.createElement("h3",null,"Scatter Plot"),r.a.createElement("svg",{ref:o,width:"600",height:"600",viewBox:"0 0 600 600"},r.a.createElement("clipPath",{id:"rect-clip"},r.a.createElement("rect",{x:"0",y:"0",width:"600",height:"600"})),r.a.createElement("g",{className:"x-axis"}),r.a.createElement("g",{className:"y-axis"}),r.a.createElement("g",{className:"principal-components"}),r.a.createElement("g",{className:"data-points"})))},b=function(t){var e=t.principalComponents,a=Object(n.useRef)(),c=e.map((function(t){return t.eigenvalue}));return Object(n.useEffect)((function(){var t=Object(d.g)(a.current),e=Math.max.apply(Math,Object(u.a)(c)),n=Object(d.e)().domain(c.map((function(t,e){return e}))).range([0,300]).padding(.5),r=Object(d.f)().domain([0,e]).range([150,0]),l=Object(d.a)(n).ticks(c.length);t.select(".x-axis").style("transform","translateY(150px)").call(l);var i=Object(d.b)(r);t.select(".y-axis").style("transform","translateX(300px)").transition().call(i),t.selectAll(".bar").data(c).join("rect").attr("class","bar").style("transform","scale(1, -1)").attr("x",(function(t,e){return n(e)})).attr("y",-150).attr("width",n.bandwidth()).transition().attr("height",(function(t){return 150-r(t)})).style("fill",(function(t,e){return m(e)}))}),[e,c]),r.a.createElement("div",{id:"principalComponents"},r.a.createElement("h3",null,"Principal Components"),r.a.createElement("svg",{ref:a},r.a.createElement("g",{className:"x-axis"}),r.a.createElement("g",{className:"y-axis"})))};var g=function(){var t=Object(n.useState)([[0,0]]),e=Object(i.a)(t,2),a=e[0],c=e[1],l=Object(n.useState)(void 0),o=Object(i.a)(l,2),u=o[0],d=o[1],m=Object(n.useState)([]),g=Object(i.a)(m,2),E=g[0],x=g[1];return Object(n.useEffect)((function(){if(0!==a.length){var t=s.a.getEigenVectors(a);x(t)}else x([])}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"header"},r.a.createElement("h1",null,"Webtools f\xfcr die Lehre"),r.a.createElement("h2",null,"Principal Component Analysis (PCA)")),r.a.createElement("div",{id:"buttons"},r.a.createElement("h3",null,"Menu"),r.a.createElement("button",{onClick:function(){for(var t=[],e=0;e<20;e++)t=t.concat([[200*Math.random()-100,200*Math.random()-100]]);var a=s.a.computeDeviationMatrix(t);c(a)}},"Generate random data"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return c([])}},"Clear data")),r.a.createElement(f,{data:a,setData:c,principalComponents:E,highlightedIndex:u,setHighlightedIndex:d}),r.a.createElement(b,{principalComponents:E}),r.a.createElement("div",{id:"singleComponents"},r.a.createElement(p,{data:a,principalComponents:E,highlightedIndex:u,setHighlightedIndex:d,n:"1"}),r.a.createElement(p,{data:a,principalComponents:E,highlightedIndex:u,setHighlightedIndex:d,n:"2"})),r.a.createElement(h,{data:a,setData:c,highlightedIndex:u}))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4e631ba5.chunk.js.map