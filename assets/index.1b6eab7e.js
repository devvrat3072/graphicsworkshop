import{s as e,l as t,a as o,b as n,r,t as s,c}from"./vendor.69abf69f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const c=new URL(e,n);if(self[t].moduleMap[c])return o(self[t].moduleMap[c]);const a=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){s(new Error(`Failed to import: ${e}`)),r(i)},onload(){o(self[t].moduleMap[c]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/graphics-workshop/assets/");var a="precision mediump float;\n\nuniform vec2 resolution;\nuniform float time;\nuniform float seed;\n\nvoid main() {\n    vec2 coord = gl_FragCoord.xy / resolution;\n\n    // Output RGB color in range from 0.0 to 1.0\n    vec3 color = vec3(coord.x, coord.y, 0.0);\n    color.z += abs(sin(time));\n\n    // 1. Uncomment these lines to draw triangles\n    // vec2 squareCoord = 20.0 * gl_FragCoord.xy / resolution.y + vec2(time);\n    // vec2 loc = fract(squareCoord);\n    // color = vec3(smoothstep(-0.05, 0.05, loc.y - loc.x));\n\n    // 2. Uncomment these lines to invert some of the triangles\n    // vec2 cell = squareCoord - loc;\n    // if (mod(2.0 * cell.x + cell.y, 5.0) == 1.0) {\n    //     color = 1.0 - color;\n    // }\n\n    // 3. Uncomment these lines to produce interesting colors\n    // float c = mod(3.0 * cell.x + 2.0 * cell.y, 7.0) / 7.0;\n    // color = 1.0 - (1.0 - color) * vec3(c, c, c);\n\n    // 4. Uncomment to lighten the colors\n    // color = sqrt(color);\n\n    gl_FragColor = vec4(color, 1.0);\n}\n",i="attribute vec2 position;\n\nvoid main() {\n    gl_Position = vec4(position, 0.0, 1.0);\n}\n";const l=r(),d=function(r,{eye:s,center:c}){let a=!1,i=null;const l={eye:s,center:c},d=e=>{a=!0,i=[e.screenX/r.height,e.screenY/r.height]},m=s=>{if(!a)return;const[c,d]=[s.screenX/r.height,s.screenY/r.height],[m,u]=i;i=[c,d];const h=e([],l.eye,l.center),p=t(h);let g=Math.acos(h[1]/p),f=Math.atan2(h[2],h[0]);g=Math.min(Math.max(g-5*(d-u),1e-8),Math.PI-1e-8),f+=5*(c-m),o(l.eye,p*Math.cos(f)*Math.sin(g),p*Math.cos(g),p*Math.sin(f)*Math.sin(g)),n(l.eye,l.eye,l.center)},u=()=>{a=!1};return r.addEventListener("mousedown",d),r.addEventListener("mousemove",m),r.addEventListener("mouseup",u),r.addEventListener("touchstart",(e=>d(e.touches[0]))),r.addEventListener("touchmove",(e=>m(e.touches[0]))),r.addEventListener("touchend",u),l}(document.getElementsByTagName("canvas")[0],{eye:[1.7,1.5,2.9],center:[0,0,0]}),m=function(){const e=new s({title:"Parameters"}),t={project:"quilt",seed:0,mesh:1};e.addInput(t,"project",{options:{"Quilt patterns":"quilt","Procedural landscapes":"landscape","Rasterization and shading":"shading","Contour sketching":"contours","Ray tracing":"raytracing"}});const o=[[e.addInput(t,"seed",{min:0,max:1}),["quilt","landscape"]]];e.addSeparator(),e.addButton({title:"Instructions"}).on("click",(()=>{const e=document.createElement("a");e.href="https://github.com/ekzhang/graphics-workshop",e.target="_blank",e.click()}));const n=localStorage.getItem("graphics-workshop");if(n)try{e.importPreset(JSON.parse(n))}catch(c){console.warn(`Error loading saved preset: ${c}`)}const r=()=>{const n=e.exportPreset();localStorage.setItem("graphics-workshop",JSON.stringify(n));for(const[e,r]of o)e.hidden=!r.includes(t.project)};return r(),e.on("change",r),t}();const u=l({attributes:{position:[[-1,1],[-1,-1],[1,1],[1,-1]]},elements:[[0,1,2],[2,1,3]],uniforms:{view:()=>c([],d.eye,d.center,[0,1,0]),resolution:({drawingBufferWidth:e,drawingBufferHeight:t})=>[e,t],time:l.context("time")}}),h={quilt:l({frag:a,vert:i,uniforms:{seed:()=>m.seed}}),landscape:l({frag:a,vert:i,uniforms:{seed:()=>m.seed}}),shading:l({frag:a,vert:i}),contours:l({frag:a,vert:i}),raytracing:l({frag:a,vert:i})};l.frame((()=>{u((()=>{l.clear({color:[0,0,0,1]}),h[m.project]()}))}));
