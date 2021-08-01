(this["webpackJsonpnarrative-viz"]=this["webpackJsonpnarrative-viz"]||[]).push([[0],{60:function(t,e,n){},62:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),i=n(21),c=n.n(i),s=(n(60),n(4)),l=n.n(s),o=n(22),u=n(3),f=(n(62),n(0)),d=n(1);var p=function(){var t=Object(r.useState)([]),e=Object(u.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)([]),c=Object(u.a)(i,2),s=c[0],p=c[1],g=Object(r.useState)(null),v=Object(u.a)(g,2),y=v[0],b=v[1],h=Object(r.useState)(!1),m=Object(u.a)(h,2),j=m[0],x=m[1];Object(r.useEffect)((function(){return O(),document.addEventListener("click",(function(){return j&&b(null)}),!0),function(){document.removeEventListener("click",(function(){return j&&b(null)}),!0)}}),[]),Object(r.useEffect)((function(){E()}),[n,s]),Object(r.useEffect)((function(){f.f("svg").selectAll("*").remove(),j?C():(E(),b(null))}),[j]),Object(r.useEffect)((function(){f.f("svg").selectAll("*").remove(),j?C():E()}),[y]);var O=function(){var t=Object(o.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.c("https://flunky.github.io/cars2017.csv");case 2:e=t.sent,n=[],e.forEach((function(t){n.includes(t.EngineCylinders)||n.push(t.EngineCylinders)})),n.sort((function(t,e){return t-e})),a(e),p(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(t){return(Number(t.AverageHighwayMPG)+Number(t.AverageCityMPG))/2},C=function(){var t=[];n.forEach((function(e){t.includes(e.Make)||t.push(e.Make)}));var e=f.e().domain([0,150]).range([500,0]),r=f.d().domain(t).range([0,500]).padding(.2);f.f("svg").append("g").attr("transform","translate(50,50)").call(f.b(e)).append("text").attr("font-size",15).attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").attr("fill","#999").style("text-anchor","end").text("Average MPG"),f.f("svg").append("g").attr("transform","translate(50,550)").call(f.a(r)).selectAll("text").attr("y",0).attr("x",9).attr("dy",".35em").attr("transform","rotate(90)").style("text-anchor","start");f.f("body").append("div").style("position","absolute").style("z-index","10").style("visibility","hidden").style("background","#000").text("a simple tooltip");f.f("svg").append("g").selectAll("rect").data(n.filter((function(t){return t.EngineCylinders===y}))).enter().append("rect").attr("x",(function(e){return r(t.find((function(t){return t===e.Make})))})).attr("y",(function(t){var r=n.filter((function(e){return e.Make===t.Make})).map((function(t){return k(t)})),a=r.reduce((function(t,e){return t+e}),0);return 550-e(a/r.length)})).attr("height",(function(t){var r=n.filter((function(e){return e.Make===t.Make})).map((function(t){return k(t)})),a=r.reduce((function(t,e){return t+e}),0);return e(a/r.length)})).attr("width",r.bandwidth()).attr("fill","#fe9922").attr("transform","translate(50,0)")},E=function(){var t=f.e().domain([0,150]).range([500,0]),e=f.e().domain([0,12]).range([0,500]);f.f("body").append("div").style("position","absolute").style("z-index","10").style("visibility","hidden").style("background","#000").text("a simple tooltip");f.f("svg").append("g").selectAll("dot").data(n).enter().append("circle").attr("transform","translate(50,0)").attr("cx",(function(t){return e(Number(t.EngineCylinders))})).attr("cy",(function(e){var r=n.filter((function(t){return t.EngineCylinders===e.EngineCylinders})).map((function(t){return k(t)})),a=r.reduce((function(t,e){return t+e}),0);return t(a/r.length)})).attr("r",8).style("z-index","10").style("fill",(function(t){return y?y===t.EngineCylinders?"red":"lightgray":"#69b3a2"})).on("click",(function(t,e){b(e.EngineCylinders),x(!0)})),f.f("svg").append("g").attr("transform","translate(50,50)").call(f.b(t)).append("text").attr("font-size",15).attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").attr("fill","#999").style("text-anchor","end").text("Average MPG"),f.f("svg").append("g").attr("transform","translate(50,550)").call(f.a(e).ticks(5)).append("text").attr("font-size",15).attr("x",500).attr("y",-6).attr("dx",".5em").attr("fill","#999").style("text-anchor","end").text("Cylinders")};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Fuel Efficiency per Cylinder 2007"}),Object(d.jsxs)("div",{className:"SlideSelector",children:["Choose a number of Cylinders to highlight",Object(d.jsx)("div",{className:"ButtonContainer",children:s.map((function(t){return Object(d.jsx)("button",{onClick:function(){b(t)},className:"CategoryButton",children:t},t)}))}),j&&Object(d.jsx)("button",{onClick:function(){x(!1),b(null)},className:"BackButton",children:"Back to Overview"}),!j&&Object(d.jsx)("div",{children:"Select a data point to see Vehicle Make Specific info"})]}),Object(d.jsxs)("div",{className:"PlotContainer",children:[Object(d.jsx)("svg",{className:"SVG",width:600,height:600}),y?"".concat(y," cylinders"):"Overall"]})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),i(t),c(t)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}},[[64,1,2]]]);
//# sourceMappingURL=main.6dff56e2.chunk.js.map