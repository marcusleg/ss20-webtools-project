(this["webpackJsonpss20-webtools-project"]=this["webpackJsonpss20-webtools-project"]||[]).push([[0],{12:function(t,e,a){t.exports=a(19)},17:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(17),a(8)),o=(a(18),a(3)),s=a.n(o),u=a(2),m=a(1),d=function(t){switch(t){case 0:return"#ff9e1b";case 1:return"#c4d52a";case 2:return"#7c8034";default:return"#cccccc"}},p=function(t){var e=t.data,a=t.principalComponents,c=t.n,l=Object(n.useRef)();return Object(n.useEffect)((function(){var t,n=Object(m.g)(l.current);try{t=s.a.computeAdjustedData(e,a[Number(c)-1]).adjustedData[0]}catch(f){return void console.error("Handled exception in 3rd party library")}var r=Math.min.apply(Math,Object(u.a)(s.a.computeAdjustedData(e,a[0]).adjustedData[0]).concat(Object(u.a)(s.a.computeAdjustedData(e,a[1]).adjustedData[0]))),i=Math.max.apply(Math,Object(u.a)(s.a.computeAdjustedData(e,a[0]).adjustedData[0]).concat(Object(u.a)(s.a.computeAdjustedData(e,a[1]).adjustedData[0]))),o=Object(m.f)().domain([r,i]).range([0,300]).nice().clamp(!0),p=Object(m.a)(o);n.select(".x-axis").style("transform","translateY(25px)").transition().call(p),n.selectAll(".dataPoint").data(t).join("circle").attr("class","dataPoint").attr("r",3).style("fill",(function(){return d(Number(c-1))})).style("stroke","black").attr("cy",25).transition().attr("cx",(function(t){return o(t)}))}),[e,a,c]),r.a.createElement("div",null,r.a.createElement("h3",null,"Component ",c),r.a.createElement("svg",{ref:l,height:"60"},r.a.createElement("g",{className:"x-axis"})))},f=function(t){var e=t.data;return r.a.createElement("div",{id:"dataTable"},r.a.createElement("h3",null,"Data"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"X"),r.a.createElement("th",null,"Y")),e.sort().map((function(t,e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,Number.parseFloat(t[0]).toFixed(2)),r.a.createElement("td",null,Number.parseFloat(t[1]).toFixed(2)))})))))},b=function(t){var e=t.data,a=t.setData,c=t.principalComponents,l=Object(n.useRef)();return Object(n.useEffect)((function(){var t=Object(m.g)(l.current),n=5,r=5,i=-5,o=-5;e.length>0&&(n=Math.max.apply(Math,Object(u.a)(e.map((function(t){return t[0]}))))+5,r=Math.max.apply(Math,Object(u.a)(e.map((function(t){return t[1]}))))+5,i=Math.min.apply(Math,Object(u.a)(e.map((function(t){return t[0]}))))-5,o=Math.min.apply(Math,Object(u.a)(e.map((function(t){return t[1]}))))-5);var p=Object(m.f)().domain([i,n]).range([0,600]).nice(),f=Object(m.f)().domain([o,r]).range([0,600]).nice(),b=Object(m.a)(p);t.select(".x-axis").style("transform","translateY(600px)").transition().call(b);var j=Object(m.b)(f);t.select(".y-axis").style("transform","translateX(600px)").transition().call(j),t.select(".data-points").selectAll(".dataPoint").data(e).join("circle").attr("class","dataPoint").attr("r",3).transition().attr("cx",(function(t){return p(t[0])})).attr("cy",(function(t){return f(t[1])})),t.select(".data-points").selectAll(".dataPoint").on("click",(function(t,n){m.c.stopPropagation();var r=e.slice();r.splice(n,1),a(r)})),t.on("click",(function(){var t=Object(m.d)(l.current),n=[p.invert(t[0]),f.invert(t[1])],r=e.concat([n]),c=s.a.computeDeviationMatrix(r);a(c)})),t.select(".principal-components").selectAll(".component").data(c).join("line").attr("class","component").attr("stroke-width",2).attr("stroke",(function(t,e){return d(e)})).transition().attr("x1",(function(t){return p(p.domain()[0]*t.vector[0])})).attr("x2",(function(t){return p(p.domain()[1]*t.vector[0])})).attr("y1",(function(t){return f(f.domain()[0]*t.vector[1])})).attr("y2",(function(t){return f(f.domain()[1]*t.vector[1])}))}),[e,a,c]),r.a.createElement("div",{id:"scatterPlot"},r.a.createElement("h3",null,"Scatter Plot"),r.a.createElement("svg",{ref:l,width:"600",height:"600",viewBox:"0 0 600 600"},r.a.createElement("g",{className:"x-axis"}),r.a.createElement("g",{className:"y-axis"}),r.a.createElement("g",{className:"principal-components"}),r.a.createElement("g",{className:"data-points"})))},j=function(t){var e=t.principalComponents,a=Object(n.useRef)(),c=e.map((function(t){return t.eigenvalue}));return Object(n.useEffect)((function(){var t=Object(m.g)(a.current),e=Math.max.apply(Math,Object(u.a)(c)),n=Object(m.e)().domain(c.map((function(t,e){return e}))).range([0,300]).padding(.5),r=Object(m.f)().domain([0,e]).range([150,0]),l=Object(m.a)(n).ticks(c.length);t.select(".x-axis").style("transform","translateY(150px)").call(l);var i=Object(m.b)(r);t.select(".y-axis").style("transform","translateX(300px)").transition().call(i),t.selectAll(".bar").data(c).join("rect").attr("class","bar").style("transform","scale(1, -1)").attr("x",(function(t,e){return n(e)})).attr("y",-150).attr("width",n.bandwidth()).transition().attr("height",(function(t){return 150-r(t)})).style("fill",(function(t,e){return d(e)}))}),[e,c]),r.a.createElement("div",{id:"principalComponents"},r.a.createElement("h3",null,"Principal Components"),r.a.createElement("svg",{ref:a},r.a.createElement("g",{className:"x-axis"}),r.a.createElement("g",{className:"y-axis"})))};var E=function(){var t=Object(n.useState)([[0,0]]),e=Object(i.a)(t,2),a=e[0],c=e[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){if(0!==a.length){var t=s.a.getEigenVectors(a);m(t)}else m([])}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"header"},r.a.createElement("h1",null,"Webtools f\xfcr die Lehre"),r.a.createElement("h2",null,"Principal Component Analysis (PCA)")),r.a.createElement("div",{id:"buttons"},r.a.createElement("h3",null,"Menu"),r.a.createElement("button",{onClick:function(){for(var t=[],e=0;e<20;e++)t=t.concat([[200*Math.random()-100,200*Math.random()-100]]);var a=s.a.computeDeviationMatrix(t);c(a)}},"Generate random data"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return c([])}},"Clear data")),r.a.createElement(b,{data:a,setData:c,principalComponents:u}),r.a.createElement(j,{principalComponents:u}),r.a.createElement("div",{id:"singleComponents"},r.a.createElement(p,{data:a,principalComponents:u,n:"1"}),r.a.createElement(p,{data:a,principalComponents:u,n:"2"})),r.a.createElement(f,{data:a}))};l.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.91a3fbc5.chunk.js.map