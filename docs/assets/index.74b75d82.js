import{r as e,o as t,m as n,d as s,a as i,C as l,b as a,c as o,e as r,f as d,g as c,w as u,F as h,h as p,u as v,W as m,i as g,K as f,j as k,k as y,P as _,T as b,l as O,s as N,n as x,p as T,q as w,t as A,v as S,x as E,y as R,z as C,A as L,B}from"./vendor.1e6b8ff2.js";var z,$;function I(n,s){const i=e(null);return t((()=>{i.value=ace.edit(n),i.value.setTheme("ace/theme/tomorrow"),s&&i.value.session.setMode(s)})),{editor:i}}ace.config.set("basePath","https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-noconflict/"),($=z||(z={})).hjson="ace/mode/hjson",$.go="ace/mode/golang";var M,j,G=n();(j=M||(M={})).OPEN_OBJECT="open_object",j.CLOSE_OBJECT="close_object",j.OPEN_ARRAY="open_array",j.CLOSE_ARRAY="close_array",j.SEP_COLON="sep_colon",j.SEP_COMMA="sep_comma",j.COMMENT="comment",j.NULL="null",j.BOOLEAN="boolean",j.STRING="string",j.INTEGER="integer",j.FLOAT="float";const V=[M.NULL,M.BOOLEAN,M.STRING,M.INTEGER,M.FLOAT];class Y{constructor(e,t,n){this.tokenType=e,this.value=t,this.start=n,this.end=n+t.length}isBasicType(){return V.indexOf(this.tokenType)>-1}}const J=[".","0","1","2","3","4","5","6","7","8","9"],F=['"',""];class P{constructor(e){this.raw=e,this.size=e.length,this.index=0,this.tokens=new Array,this.tokenize()}tokenize(){for(;;){const e=this.getToken();if(!e)break;this.tokens.push(e)}}getToken(){if(this.index>=this.size)return null;const e=this.index;switch(this.raw[this.index]){case"{":return this.next(),new Y(M.OPEN_OBJECT,"{",e);case"}":return this.next(),new Y(M.CLOSE_OBJECT,"}",e);case"[":return this.next(),new Y(M.OPEN_ARRAY,"[",e);case"]":return this.next(),new Y(M.CLOSE_ARRAY,"]",e);case":":return this.next(),new Y(M.SEP_COLON,":",e);case",":return this.next(),new Y(M.SEP_COMMA,",",e);case"n":if(this.next("null"))return new Y(M.NULL,"null",e);break;case"t":if(this.next("true"))return new Y(M.BOOLEAN,"true",e);break;case"f":if(this.next("false"))return new Y(M.BOOLEAN,"false",e);break;case'"':return this.parseString('"');case"'":return this.parseString("'");case"-":case"+":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":const t=this.parseNumber();if(t)return t;break;case"/":return this.parseComment();case" ":case"\n":case"\r":case"\t":return this.next(),this.getToken()}return this.parseString()}next(e){return e&&""!==e?this.raw.substr(this.index,e.length)===e&&(this.index+=e.length,!0):(this.index++,!0)}finish(e=-1){return-1===e&&(e=this.index),e>=this.size}parseString(e=""){let t=this.index,n=[":"," ","]","}",",","\n","\r"];for(e.length&&(n=[e],t++);!this.finish(t)&&(this.isEscape(t)&&(t+=2),-1===n.indexOf(this.raw[t]));)t++;const s=this.index+e.length,i=this.raw.slice(s,t);return this.index=t+e.length,new Y(M.STRING,i,s)}parseNumber(){let e=!1,t=this.index;if(["-","+"].indexOf(this.raw[this.index])>-1&&t++,"0"===this.raw[t]&&J.indexOf(this.raw[t+1])>0)return null;for(;J.indexOf(this.raw[t])>-1&&!this.finish(t);){if(0===J.indexOf(this.raw[t])){if(e)return null;e=!0}t++}const n=this.raw.slice(this.index,t);return this.index=t,new Y(e?M.FLOAT:M.INTEGER,n,this.index)}parseComment(){const e=this.index+1;let t="";switch(this.raw[e]){case"/":t="\n";break;case"*":t="*/";break;default:return null}const n=this.raw.indexOf(t,e);if(-1==n)return null;this.index=n+t.length;const s=this.raw.slice(e+1,n);return new Y(M.COMMENT,s,e+1)}isEscape(e){return"\\"===this.raw[e]&&F.indexOf(this.raw[e+1])>-1}}var U,K,D,W;(K=U||(U={}))[K.OBJECT=0]="OBJECT",K[K.ARRAY=1]="ARRAY",K[K.BASE=2]="BASE";class q{constructor(){this.level=0,this.size=0,this.nodeType=2}addNode(e){var t,n;if(!(this.value instanceof Y)){if(this.value||(this.value=new Array),null==(t=null==e?void 0:e.key)?void 0:t.value)for(let t=0;t<this.size;t++)if((null==(n=this.value[t].key)?void 0:n.value)===e.key.value)return void(this.value[t]=e);this.value.push(e),this.size++}}getNodes(){return this.value}setValue(e){this.value=e}getToken(){return this.value}}class Z{constructor(e){this.tokens=e,this.size=e.length,this.index=0,this.root=new q,this.size&&this.parse(this.root)}parse(e,t=1){if(this.tokens[this.index].tokenType===M.OPEN_ARRAY)return e.nodeType=1,this.index++,void this.parseArray(e,t);e.nodeType=0,this.index++,this.parseObject(e,t)}parseObject(e,t=0){for(;this.index<this.size;this.index++){if(this.skip(),this.tokens[this.index].tokenType===M.CLOSE_OBJECT)return;if(this.tokens[this.index].tokenType===M.SEP_COLON){const n=new q;n.level=t,n.key=this.prev();const s=this.next();s.isBasicType()?n.setValue(s):(this.index++,this.parse(n,t+1)),e.addNode(n)}}}parseArray(e,t=0){for(;this.index<this.size;this.index++){if(this.skip(),this.tokens[this.index].tokenType===M.CLOSE_ARRAY)return;const n=this.tokens[this.index],s=new q;s.level=t,n.isBasicType()?s.setValue(n):this.parse(s,t+1),e.addNode(s)}}skip(){for(;this.index<this.size;){switch(this.tokens[this.index].tokenType){case M.SEP_COMMA:case M.COMMENT:this.index++;continue}return}}prev(){return this.tokens[this.index-1]}next(){return this.tokens[this.index+1]}}class H{constructor(e,t){this.layer=0,this.json="",this.opt=t,this.traverseTree(e)}getIndent(){var e;return(null==(e=this.opt)?void 0:e.format)?"    ".repeat(this.layer):""}getSpace(){var e;return(null==(e=this.opt)?void 0:e.format)?" ":""}getWrapRow(){var e;return(null==(e=this.opt)?void 0:e.format)?"\n":""}traverseTree(e){const t=e.size-1;if(e.key&&(this.json+=`${this.getIndent()}"${e.key.value}":${this.getSpace()}`),this.handlerElement(e),e.nodeType===U.OBJECT){this.json+=`{${this.getWrapRow()}`,this.layer++;for(let n=0;n<e.size;n++)this.traverseTree(e.getNodes()[n]),this.json+=n==t?`${this.getWrapRow()}`:`,${this.getWrapRow()}`;this.layer--,this.json+=`${this.getIndent()}}`}if(e.nodeType===U.ARRAY){this.json+="[";for(let n=0;n<e.size;n++)this.traverseTree(e.getNodes()[n]),this.json+=n==t?"":`${this.getSpace()},`;this.json+="]"}}handlerElement(e){if(null==e?void 0:e.value){let t=e.getToken().value;switch(e.getToken().tokenType){case M.INTEGER:t=Number.parseInt(t).toString();case M.FLOAT:t=Number.parseFloat(t).toString();case M.NULL:case M.BOOLEAN:this.json+=t;break;case M.STRING:this.json+=`"${t}"`}}}}(W=D||(D={})).BOOL="bool",W.STRING="string",W.INT="int",W.FLOAT="float64",W.INTERFACE="interface{}",W.STRUCT="struct",D.BOOL.toString(),D.STRING.toString(),D.INT.toString(),D.FLOAT.toString();class Q{constructor(e){this.name=e,this.allowEmpty=!1,this.repeatTimes=0,this.childNameMaxLength=0,this.childKindMaxLength=0}addNode(e){var t,n,s,i,l;this.childs||(this.childs=new Array),e.name.length>this.childNameMaxLength&&(this.childNameMaxLength=e.name.length),(null!=(n=null==(t=e.kind)?void 0:t.length)?n:0)>this.childKindMaxLength&&(this.childKindMaxLength=null!=(i=null==(s=e.kind)?void 0:s.length)?i:0);for(let a=this.childs.length-1;a>=0;a--)if(e.name===(null==(l=this.childs[a])?void 0:l.name))return this.childs[a]=e,this.allowEmpty=!0,void(e.repeatTimes+=1);this.childs.push(e)}}const X={rootName:"RootObject"};class ee{constructor(e,t){this.result="",this.opt=Object.assign({},X,this.opt);const n=this.gen(e);n&&(console.log(JSON.stringify(n,null,"  ")),this.codegen(n),console.log(this.result))}gen(e,t,n){var s,i,l,a,o,r,d,c;let u=null;switch(e.nodeType){case U.BASE:return t===U.ARRAY?null:(u=new Q(null!=(i=null==(s=null==e?void 0:e.key)?void 0:s.value)?i:"field"),u.kind=this.getKind(e),u);case U.ARRAY:t!==U.ARRAY&&(u=new Q(null!=(o=null==(l=null==e?void 0:e.key)?void 0:l.value)?o:null==(a=this.opt)?void 0:a.rootName),u.kind=this.getKind(e));for(let t=0;t<e.size;t++){const s=this.gen(e.getNodes()[t],U.ARRAY,null!=u?u:n);s&&(u?null==u||u.addNode(s):n&&n.addNode(s))}return u;case U.OBJECT:if(t===U.ARRAY&&0===e.size)return null;u=new Q(null!=(c=null==(r=null==e?void 0:e.key)?void 0:r.value)?c:null==(d=this.opt)?void 0:d.rootName),u.kind=this.getKind(e);for(let t=0;t<e.size;t++){const n=this.gen(e.getNodes()[t],U.OBJECT);n&&u.addNode(n)}if(t===U.ARRAY&&n){for(let e=0;e<u.childs.length;e++)n.addNode(u.childs[e]);return null}return u}return null}codegen(e,t=""){var n,s,i,l,a,o,r;if(e.kind===D.BOOL&&(this.result+=`${t}${e.name} ${e.kind}\n`),e.kind===D.INT&&(this.result+=`${t}${e.name} ${e.kind}\n`),e.kind===D.FLOAT&&(this.result+=`${t}${e.name} ${e.kind}\n`),e.kind===D.STRING&&(this.result+=`${t}${e.name} ${e.kind}\n`),e.kind===D.INTERFACE&&(this.result+=`${t}${e.name} ${e.kind}\n`),e.kind===D.STRUCT){if(this.result+=`${t.length?t:"type "}${e.name} struct {\n`,e.childs){const i=null!=(s=null==(n=e.childs)?void 0:n.length)?s:0;for(let n=0;n<i;n++)this.codegen(e.childs[n],"    "+t)}this.result+=`${t}}\n`}if(-1!==(null==(i=e.kind)?void 0:i.indexOf("[]"))){const n=(null!=(a=null==(l=e.kind)?void 0:l.indexOf("struct"))?a:-1)>-1;if(this.result+=n?`${t.length?t:"type "}${e.name} ${e.kind} {\n`:`${t.length?t:"type "}${e.name} ${e.kind}\n`,n&&e.childs){const n=null!=(r=null==(o=e.childs)?void 0:o.length)?r:0;for(let s=0;s<n;s++)this.codegen(e.childs[s],"    "+t)}n&&(this.result+=`${t}}\n`)}}getKind(e){switch(e.nodeType){case U.OBJECT:return D.STRUCT;case U.ARRAY:if(0==e.size)return"[]"+D.INTERFACE;let t=this.getKind(e.getNodes()[0]);for(let n=1;n<e.size;n++){if(this.getKind(e.getNodes()[n])!==t)return"[]"+D.INTERFACE}switch(t){case D.BOOL:case D.STRING:case D.INT:case D.FLOAT:return"[]"+t;default:return"[]"+this.getKind(e.getNodes()[0])}}switch(e.getToken().tokenType){case M.BOOLEAN:return D.BOOL;case M.STRING:return D.STRING;case M.INTEGER:return D.INT;case M.FLOAT:return D.FLOAT}return D.INTERFACE}}var te,ne;(ne=te||(te={}))[ne.JSON=0]="JSON",ne[ne.GOLANG=1]="GOLANG",ne[ne.YAML=2]="YAML";class se{codegen(e,t){return new H(e,t).json}}const ie=new se;const le=new class{codegen(e,t){return new ee(e).result}},ae=new se;class oe{switchStrategy(e){switch(e){case 0:this.strategy=ie;break;case 1:this.strategy=le;break;case 2:this.strategy=ae}}do(e,t,n){this.switchStrategy(e);const s=new P(t),i=new Z(s.tokens);return this.strategy.codegen(i.root,n)}}const re={codegenStrategy:te.GOLANG},de=e=>{e&&(re.opt=Object.assign({},re.opt,e),ue())},ce=e=>{G.emit("left.editor.set",e)},ue=()=>{G.emit("left.editor.transform")};const he=e=>{G.emit("right.editor.set",e)};function pe(){const t=e([{label:"例子",items:[{label:"第一个🌰",command:()=>{ce('{\n        a:-1231.323\n        b:     {\n            z:31\n            // 测试\n            p:       true\n            123:"key是字符串"\n        }\n    }')}},{label:"第二个🌰",command:()=>{ce('{\n        "a": 123, // 数字\n        "b": "xxx",\n        "c": [  /* 数组 */\n            true,\n            /* 注释1 */\n            23123,\n            0\n            // 注释2\n        ]\n    }')}},{label:"第三个🌰",command:()=>{ce('[{"input_index":0,"candidate_index":0,"delivery_line_1":"1 N Rosedale St","last_line":"Baltimore MD 21229-3737","delivery_point_barcode":"212293737013","components":{"primary_number":"1","street_predirection":"N","street_name":"Rosedale","street_suffix":"St","city_name":"Baltimore","state_abbreviation":"MD","zipcode":"21229","plus4_code":"3737","delivery_point":"01","delivery_point_check_digit":"3"},"metadata":{"record_type":"S","zip_type":"Standard","county_fips":"24510","county_name":"Baltimore City","carrier_route":"C047","congressional_district":"07","rdi":"Residential","elot_sequence":"0059","elot_sort":"A","latitude":39.28602,"longitude":-76.6689,"precision":"Zip9","time_zone":"Eastern","utc_offset":-5,"dst":true},"analysis":{"dpv_match_code":"Y","dpv_footnotes":"AABB","dpv_cmra":"N","dpv_vacant":"N","active":"Y"}},{"input_index":0,"candidate_index":1,"delivery_line_1":"1 S Rosedale St","last_line":"Baltimore MD 21229-3739","delivery_point_barcode":"212293739011","components":{"primary_number":"1","street_predirection":"S","street_name":"Rosedale","street_suffix":"St","city_name":"Baltimore","state_abbreviation":"MD","zipcode":"21229","plus4_code":"3739","delivery_point":"01","delivery_point_check_digit":"1"},"metadata":{"record_type":"S","zip_type":"Standard","county_fips":"24510","county_name":"Baltimore City","carrier_route":"C047","congressional_district":"07","rdi":"Residential","elot_sequence":"0064","elot_sort":"A","latitude":39.2858,"longitude":-76.66889,"precision":"Zip9","time_zone":"Eastern","utc_offset":-5,"dst":true},"analysis":{"dpv_match_code":"Y","dpv_footnotes":"AABB","dpv_cmra":"N","dpv_vacant":"N","active":"Y"}}]')}}]},{label:"操作",items:[{label:"JSON纠正",command:()=>{G.emit("left.editor.check")}},{label:"JSON格式化",command:()=>{G.emit("left.editor.fmt")}},{label:"JSON压缩",command:()=>{G.emit("left.editor.compress")}}]}]),n=e({});return{items:t,menu:n,toggleFn:e=>{n.value.toggle(e)}}}const ve=c("span",{class:"pi pi-question"},null,-1),me=c("span",{class:"pi pi-trash"},null,-1),ge={class:"left-copy p-panel-header-icon p-link p-mr-4"},fe=c("span",{class:"pi pi-copy"},null,-1),ke=c("span",{class:"pi pi-forward"},null,-1),ye=c("span",{class:"pi pi-bars"},null,-1),_e=c("pre",{id:"leftEditor",class:"editor"},null,-1);var be=s({expose:[],setup(n){const{editor:s}=I("leftEditor",z.hjson),{items:m,menu:g,toggleFn:f}=pe();!function(e){const t=new oe;G.on("left.editor.set",(t=>{e.value.setValue(t),e.value.execCommand("gotolineend")})),G.on("left.editor.check",(()=>{const n=t.do(te.JSON,e.value.getValue(),{format:!0});ce(n)})),G.on("left.editor.fmt",(()=>{const n=t.do(te.JSON,e.value.getValue(),{format:!0});ce(n)})),G.on("left.editor.compress",(()=>{const n=t.do(te.JSON,e.value.getValue());ce(n)})),G.on("left.editor.transform",(()=>{const n=t.do(re.codegenStrategy,e.value.getValue(),re.opt);he(n)}))}(s),t((()=>{s.value.setOption("wrap","free"),s.value.on("blur",(function(){b()})),s.value.on("change",i((function(){b()}),500))}));const k=e(!1),y=()=>{k.value=!0},_=()=>{ce(""),ue()};t((()=>{new l(".left-copy",{text:function(e){return s.value.getValue()}})}));const b=()=>{de({format:!0}),ue()};return(e,t)=>{const n=a("Menu"),s=a("Panel"),i=a("Dialog"),l=o("tooltip");return r(),d(h,null,[c(s,{header:"JSON"},{icons:u((()=>[p(c("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:y},[ve],512),[[l,"关于",void 0,{bottom:!0}]]),p(c("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:_},[me],512),[[l,"清空",void 0,{bottom:!0}]]),p(c("button",ge,[fe],512),[[l,"复制",void 0,{bottom:!0}]]),p(c("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:b},[ke],512),[[l,"转换",void 0,{bottom:!0}]]),p(c("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:t[1]||(t[1]=(...e)=>v(f)&&v(f)(...e))},[ye],512),[[l,"更多",void 0,{bottom:!0}]]),c(n,{id:"config_menu",ref:g,model:v(m),popup:!0},null,8,["model"])])),default:u((()=>[_e])),_:1}),c(i,{header:"关于",visible:k.value,"onUpdate:visible":t[2]||(t[2]=e=>k.value=e),breakpoints:{"960px":"75vw"},style:{width:"50vw"},modal:!0},null,8,["visible"])],64)}}});const Oe=new m({storage:"sessionStorage"}),Ne={class:"p-field-checkbox"},xe=c("label",{for:"binary"}," 是否内联类型",-1),Te=c("h5",null,"根对象名",-1),we=c("h5",null,"自定义Tag(回车确认)",-1),Ae=c("p",null,"tag后面接序号可以指定命名方式",-1),Se=c("p",null,"eg: json|3, form|2",-1),Ee=c("div",null,[c("h6",null,"命名方式"),c("p",null,"0. abcDef - 默认"),c("p",null,"1. AbcDef"),c("p",null,"2. abc_def"),c("p",null,"3. Abcdef"),c("p",null,"4. abcdef")],-1);var Re=s({expose:[],setup(n){const s=e(!1),i=e(["json"]),l=e("Root"),o=()=>{const e={inline:s.value,tags:i.value,rootName:l.value};Oe.set("opt.golang",e),de(e)};return g([s,i,l],(()=>{o()})),t((()=>{const e=Oe.get("opt.golang");e&&(s.value=e.inline,i.value=e.tags,l.value=e.rootName),o()})),(e,t)=>{const n=a("Checkbox"),o=a("InputText"),u=a("Chips");return r(),d(h,null,[c("div",Ne,[c(n,{id:"binary",modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),binary:!0},null,8,["modelValue"]),xe]),Te,c(o,{type:"text",modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e)},null,8,["modelValue"]),we,Ae,Se,c(u,{modelValue:i.value,"onUpdate:modelValue":t[3]||(t[3]=e=>i.value=e)},null,8,["modelValue"]),Ee],64)}}});const Ce=c("span",{class:"pi pi-question"},null,-1),Le=c("span",{class:"pi pi-refresh"},null,-1),Be={class:"right-copy p-panel-header-icon p-link p-mr-2"},ze=c("span",{class:"pi pi-copy"},null,-1),$e=c("span",{class:"pi pi-cog"},null,-1),Ie=c("pre",{id:"rightEditor",class:"editor"},null,-1),Me=c("p",null,null,-1),je=c("br",null,null,-1),Ge=c("br",null,null,-1);var Ve=s({expose:[],setup(n){const{editor:s}=I("rightEditor",z.go);!function(e){G.on("right.editor.set",(t=>{e.value.setValue(t),e.value.execCommand("gotolineend")}))}(s);const i=e(!1),v=()=>{i.value=!0},m=e(!1),g=e("编辑"),y=e("pi-eye-slash"),_=()=>{m.value=!m.value,g.value=m.value?"只读":"编辑",y.value=m.value?"pi-eye":"pi-eye-slash",s.value.setReadOnly(m.value)},b=()=>{ue()};t((()=>{new l(".right-copy",{text:function(e){return s.value.getValue()}})}));const O=e(!1),N=()=>{O.value=!0},x=e({name:"Golang",code:1}),T=e([{name:"Json",code:0},{name:"Golang",code:1},{name:"Yaml",code:2}]),w=()=>{var e;e=x.value.code,re.codegenStrategy=e,ue()};return(e,t)=>{const n=a("Panel"),s=a("Dialog"),l=a("CascadeSelect"),m=a("Sidebar"),A=o("tooltip");return r(),d(h,null,[c(n,{header:"GO"},{icons:u((()=>[p(c("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:v},[Ce],512),[[A,"关于",void 0,{bottom:!0}]]),p(c("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:_},[c("span",{class:["pi",y.value]},null,2)],512),[[A,g.value,void 0,{bottom:!0}]]),p(c("button",{class:"p-panel-header-icon p-link p-mr-2",onClick:b},[Le],512),[[A,"刷新",void 0,{bottom:!0}]]),p(c("button",Be,[ze],512),[[A,"复制",void 0,{bottom:!0}]]),p(c("button",{class:"p-panel-header-icon p-link p-mr-2",onClick:N},[$e],512),[[A,"设置",void 0,{bottom:!0}]])])),default:u((()=>[Ie])),_:1}),c(s,{header:"关于",visible:i.value,"onUpdate:visible":t[1]||(t[1]=e=>i.value=e),breakpoints:{"960px":"75vw"},style:{width:"50vw"},modal:!0},{default:u((()=>[Me])),_:1},8,["visible"]),c(m,{visible:O.value,"onUpdate:visible":t[3]||(t[3]=e=>O.value=e),baseZIndex:1e3,position:"right",class:"p-sidebar-lg",showCloseIcon:!1},{default:u((()=>[c(n,{header:"设置"},{default:u((()=>[c(l,{onChange:w,modelValue:x.value,"onUpdate:modelValue":t[2]||(t[2]=e=>x.value=e),options:T.value,optionGroupChildren:[],optionLabel:"name",placeholder:"选择一门开发语言"},null,8,["modelValue","options"]),je,Ge,(r(),d(f,null,[(r(),d(k(Re)))],1024))])),_:1})])),_:1},8,["visible"])],64)}}});const Ye=y(s({expose:[],setup(n){const s=e("horizontal"),l=()=>{window.innerWidth<=800?s.value="vertical":s.value="horizontal"};return t((()=>{l(),window.addEventListener("resize",i(l,200))})),(e,t)=>{const n=a("SplitterPanel"),i=a("Splitter");return r(),d("main",null,[c(i,{style:{height:"100vh"},layout:s.value},{default:u((()=>[c(n,{minSize:25},{default:u((()=>[c(be)])),_:1}),c(n,{minSize:20},{default:u((()=>[c(Ve)])),_:1})])),_:1},8,["layout"])])}}}));Ye.use(_),Ye.use(b),Ye.directive("tooltip",O),Ye.component("Panel",N),Ye.component("Menu",x),Ye.component("Splitter",T),Ye.component("SplitterPanel",w),Ye.component("Dialog",A),Ye.component("Sidebar",S),Ye.component("Checkbox",E),Ye.component("CascadeSelect",R),Ye.component("SelectButton",C),Ye.component("InputText",L),Ye.component("Chips",B),Ye.component("router-link",{}),Ye.mount("#app");