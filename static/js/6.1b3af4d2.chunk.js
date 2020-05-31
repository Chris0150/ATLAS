(this["webpackJsonpmy-typescript-app"]=this["webpackJsonpmy-typescript-app"]||[]).push([[6],{143:function(e,t,a){"use strict";var r=a(141),o=a.n(r),i=a(142),n=a(147),s=a.n(n);function l(){return(l=Object(i.a)(o.a.mark((function e(t){var a,r,i,n,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,r=a.body.getReader(),e.next=6,r.read();case 6:return i=e.sent,n=new TextDecoder("utf-8"),l=n.decode(i.value),d=s.a.parse(l,{header:!0}),e.abrupt("return",d.data);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=function(e){return l.apply(this,arguments)}},144:function(e){e.exports=JSON.parse('{"config":{"responsive":false,"displaylogo":false,"mapboxAccessToken":"my-access-token","modeBarButtonsToRemove":["plottly","zoom2d","zoom3d","pan2d","select2d","lasso2d","resetScale2d","toggleSpikelines","hoverClosestCartesian","hoverCompareCartesian"]}}')},145:function(e){e.exports=JSON.parse('{"layout":{"bars":{"width":640,"height":520,"title":"Projection SiO2 tephra measurements:","paper_bgcolor":"transparent","plot_bgcolor":"transparent","xaxis":{"title":"Molarity (M)"},"yaxis":{"title":"Concentration SiO2 (Parts per million)"}},"boxes":{"showlegend":true,"paper_bgcolor":"transparent","plot_bgcolor":"transparent","width":640,"height":520,"title":"Tephra chemical composition","xaxis":{"autorange":true,"showgrid":true,"zeroline":true,"dtick":5,"gridcolor":"rgb(255, 255, 255)","gridwidth":1,"zerolinecolor":"rgb(255, 255, 255)","zerolinewidth":2},"yaxis":{"title":"(M)","autorange":true,"showgrid":true,"zeroline":true,"dtick":5,"gridcolor":"rgb(255, 255, 255)","gridwidth":1,"zerolinecolor":"rgb(255, 255, 255)","zerolinewidth":2},"margin":{"l":30,"r":30,"b":80,"t":100}},"bubbles":{"paper_bgcolor":"transparent","plot_bgcolor":"transparent","width":640,"height":520,"title":"Evolution of tephra concentration per country:","xaxis":{"title":"year","range":[30,85]},"yaxis":{"title":"Total volume (kg)","type":"log"},"hovermode":"closest","updatemenus":[{"bgcolor":"#d39697","x":0,"y":0,"yanchor":"top","xanchor":"left","showactive":false,"direction":"left","type":"buttons","pad":{"t":87,"r":10},"buttons":[{"method":"animate","args":[],"label":"Play"},{"method":"animate","args":[[null],{"mode":"immediate","transition":{"duration":0},"frame":{"duration":0,"redraw":false}}],"label":"Pause"}]}],"sliders":[{"pad":{"l":130,"t":55},"currentvalue":{"visible":true,"prefix":"Year:","xanchor":"right","font":{"size":20,"color":"#666"}},"steps":[{"method":"animate","label":"1952","args":[["1952"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"1957","args":[["1957"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"1962","args":[["1962"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"1967","args":[["1967"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"1972","args":[["1972"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"1977","args":[["1977"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"1982","args":[["1982"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"1987","args":[["1987"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"1992","args":[["1992"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"1997","args":[["1997"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"2002","args":[["2002"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]},{"method":"animate","label":"2007","args":[["2007"],{"mode":"immediate","transition":{"duration":300},"frame":{"duration":300,"redraw":false}}]}]}]},"histogram":{"bgcolor":"transparent","gridcolor":"transparent","paper_bgcolor":"transparent","plot_bgcolor":"transparent","showlegend":false,"autosize":false,"width":640,"height":520,"title":"Projected tephra thickness (cm)","margin":{},"hovermode":"closest","bargap":0,"xaxis":{"domain":[0,0.85],"showgrid":false,"zeroline":false},"yaxis":{"domain":[0,0.85],"showgrid":false,"zeroline":false},"xaxis2":{"domain":[0.85,1],"showgrid":false,"zeroline":false},"yaxis2":{"domain":[0.85,1],"showgrid":false,"zeroline":false}},"map":{"paper_bgcolor":"transparent","plot_bgcolor":"transparent","width":1515,"height":560,"title":"Map Plot","dragmode":"zoom","mapbox":{"style":"white-bg","layers":[{"below":"traces","sourcetype":"raster","source":["https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"]},{"sourcetype":"raster","source":["https://geo.weather.gc.ca/geomet/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX={bbox-epsg-3857}&CRS=EPSG:3857&WIDTH=1000&HEIGHT=1000&LAYERS=RADAR_1KM_RDBR&TILED=true&FORMAT=image/png"]}],"below":"traces","center":{"lat":43,"lon":-98},"zoom":4},"margin":{"r":0,"t":0,"b":0,"l":0},"showlegend":false},"mapBubbles":{"paper_bgcolor":"transparent","bgcolor":"transparent","color":"transparent","plot_bgcolor":"transparent","width":640,"height":520,"title":"Source distribution:","showlegend":false,"geo":{"scope":"usa","projection":{"type":"albers usa"},"showgrid":true,"showland":true,"landcolor":"darkgrey","subunitwidth":1,"countrywidth":1,"subunitcolor":"rgb(255,255,255)","countrycolor":"rgb(255,255,255)"}},"regression":{"paper_bgcolor":"transparent","plot_bgcolor":"transparent","responsive":true,"showlegend":true,"width":640,"height":520,"title":"Projection of concentration (%) of sedimented tephra"},"splom":{"paper_bgcolor":"transparent","title":"Scatter-Plot Matrix: 50 tephra samples projected after sedimentation:","height":1220,"width":1280,"autosize":false,"hovermode":"closest","dragmode":"select","plot_bgcolor":"rgba(240,240,240, 0.95)","xaxis":{"showline":false,"zeroline":false,"gridcolor":"#ffff","ticklen":4},"yaxis":{"showline":false,"zeroline":false,"gridcolor":"#ffff","ticklen":4},"xaxis2":{"showline":false,"zeroline":false,"gridcolor":"#ffff","ticklen":4},"xaxis3":{"showline":false,"zeroline":false,"gridcolor":"#ffff","ticklen":4},"xaxis4":{"showline":false,"zeroline":false,"gridcolor":"#ffff","ticklen":4},"yaxis2":{"showline":false,"zeroline":false,"gridcolor":"#ffff","ticklen":4},"yaxis3":{"showline":false,"zeroline":false,"gridcolor":"#ffff","ticklen":4},"yaxis4":{"showline":false,"zeroline":false,"gridcolor":"#ffff","ticklen":4}},"surface3D":{"paper_bgcolor":"transparent","plot_bgcolor":"transparent","width":640,"height":480,"title":"3d-surface tephra profile:","annotations":[{"text":"","font":{"size":14,"color":"#444444"},"showarrow":false,"align":"center","x":0.5,"y":1.1,"xref":"paper","yref":"paper"}],"scene":{"xaxis":{"title":"x","titlefont":{"family":"Courier New, monospace","size":12,"color":"#444444"}},"yaxis":{"title":"y","titlefont":{"family":"Courier New, monospace","size":12,"color":"#444444"}},"zaxis":{"title":"z","titlefont":{"family":"Courier New, monospace","size":12,"color":"#444444"}}}},"timeline":{"paper_bgcolor":"transparent","plot_bgcolor":"transparent","title":"Projection of tephra aerosol concentration:","width":640,"height":520,"xaxis":{"range":["2015-02-17","2015-07-09"],"showgrid":false},"yaxis":{"range":[120,140],"showgrid":false},"legend":{"orientation":"v","x":1.5,"y":1,"xanchor":"center"},"updatemenus":[{"x":0.5,"y":0,"bgcolor":"#d39697","yanchor":"top","xanchor":"center","showactive":false,"direction":"left","type":"buttons","pad":{"t":87,"r":10},"buttons":[{"method":"animate","args":[null,{"fromcurrent":true,"transition":{"duration":0},"frame":{"duration":40,"redraw":false}}],"label":"Play"},{"method":"animate","args":[[null],{"mode":"immediate","transition":{"duration":0},"frame":{"duration":0,"redraw":false}}],"label":"Pause"}]}]}}}')},155:function(e,t,a){"use strict";a.r(t);var r=a(141),o=a.n(r),i=a(142),n=a(10),s=a(0),l=a.n(s),d=a(146),c=a.n(d),p=a(144),f=a(145),m=a(143);t.default=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),a=t[0],r=t[1],d=Object(s.useState)([]),u=Object(n.a)(d,2),h=u[0],g=u[1],b=Object(s.useState)({}),w=Object(n.a)(b,2),x=w[0],y=w[1],z=Object(s.useState)({}),v=Object(n.a)(z,2),k=v[0],_=v[1];return Object(s.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t,a,i,n,s,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e){var t=[],a=[],r={};function o(e,t){var a,o;return(a=r[e])||(a=r[e]={}),(o=a[t])||(o=a[t]={x:[],y:[],id:[],text:[],marker:{size:[]}}),o}for(var i=0;i<e.length;i++){var n=e[i],s=o(n.year,n.continent);s.text.push(n.country),s.id.push(n.country),s.x.push(n.lifeExp),s.y.push(n.gdpPercap),s.marker.size.push(n.pop)}var l=Object.keys(r),d=r[l[0]],c=Object.keys(d),p=["#b71522","#ff9800","#f4c336","#5c77ec","#1924bb"];for(i=0;i<c.length;i++){var f=d[c[i]],m={name:c[i],x:f.x.slice(),y:f.y.slice(),id:f.id.slice(),text:f.text.slice(),mode:"markers",marker:{size:f.marker.size.slice(),sizemode:"area",sizeref:2e5,color:p[i]}};t.push(m)}for(i=0;i<l.length;i++)a.push({name:l[i],data:c.map((function(e){return o(l[i],e)}))});return[t,a]},e.next=3,Object(m.a)("./csv/_bubbles.csv");case 3:t=e.sent,i=p.config,n=f.layout.bubbles,s=a(t),l=s[0],d=s[1],r(l),g(d),_(i),y(n);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),l.a.createElement(c.a,{data:a,layout:x,config:k,frames:h})}}}]);
//# sourceMappingURL=6.1b3af4d2.chunk.js.map