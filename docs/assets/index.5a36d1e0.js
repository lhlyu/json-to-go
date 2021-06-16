import{r as e,o as t,m as n,h as i,d as s,a as l,C as a,b as o,c as r,e as u,f as c,g as d,w as h,F as p,i as m,u as v,W as g,j as f,K as _,k as y,l as k,P as x,T as b,n as O,s as N,p as T,q as w,t as A,v as E,x as S,y as R,z as C,A as L,B as z,D as B}from"./vendor.54ea3e0a.js";var $,I;function M(n,i){const s=e(null);return t((()=>{s.value=ace.edit(n),s.value.setTheme("ace/theme/tomorrow"),i&&s.value.session.setMode(i)})),{editor:s}}ace.config.set("basePath","https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-noconflict/"),(I=$||($={})).hjson="ace/mode/hjson",I.go="ace/mode/golang";var G,V,Y=n();(V=G||(G={})).OPEN_OBJECT="open_object",V.CLOSE_OBJECT="close_object",V.OPEN_ARRAY="open_array",V.CLOSE_ARRAY="close_array",V.SEP_COLON="sep_colon",V.SEP_COMMA="sep_comma",V.COMMENT="comment",V.NULL="null",V.BOOLEAN="boolean",V.STRING="string",V.INTEGER="integer",V.FLOAT="float";const J=[G.NULL,G.BOOLEAN,G.STRING,G.INTEGER,G.FLOAT];class F{constructor(e,t,n){this.tokenType=e,this.value=t,this.start=n,this.end=n+t.length}isBasicType(){return J.indexOf(this.tokenType)>-1}}const P=[".","0","1","2","3","4","5","6","7","8","9"],j=['"',""];class U{constructor(e){this.raw=e,this.size=e.length,this.index=0,this.tokens=new Array,this.tokenize()}tokenize(){for(;;){const e=this.getToken();if(!e)break;this.tokens.push(e)}}getToken(){if(this.index>=this.size)return null;const e=this.index;switch(this.raw[this.index]){case"{":return this.next(),new F(G.OPEN_OBJECT,"{",e);case"}":return this.next(),new F(G.CLOSE_OBJECT,"}",e);case"[":return this.next(),new F(G.OPEN_ARRAY,"[",e);case"]":return this.next(),new F(G.CLOSE_ARRAY,"]",e);case":":return this.next(),new F(G.SEP_COLON,":",e);case",":return this.next(),new F(G.SEP_COMMA,",",e);case"n":if(this.next("null"))return new F(G.NULL,"null",e);break;case"t":if(this.next("true"))return new F(G.BOOLEAN,"true",e);break;case"f":if(this.next("false"))return new F(G.BOOLEAN,"false",e);break;case'"':return this.parseString('"');case"'":return this.parseString("'");case"-":case"+":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":const t=this.parseNumber();if(t)return t;break;case"/":return this.parseComment();case" ":case"\n":case"\r":case"\t":return this.next(),this.getToken()}return this.parseString()}next(e){return e&&""!==e?this.raw.substr(this.index,e.length)===e&&(this.index+=e.length,!0):(this.index++,!0)}finish(e=-1){return-1===e&&(e=this.index),e>=this.size}parseString(e=""){let t=this.index,n=[":"," ","]","}",",","\n","\r"];for(e.length&&(n=[e],t++);!this.finish(t)&&(this.isEscape(t)&&(t+=2),-1===n.indexOf(this.raw[t]));)t++;const i=this.index+e.length,s=this.raw.slice(i,t);return this.index=t+e.length,new F(G.STRING,s,i)}parseNumber(){let e=!1,t=this.index;if(["-","+"].indexOf(this.raw[this.index])>-1&&t++,"0"===this.raw[t]&&P.indexOf(this.raw[t+1])>0)return null;for(;P.indexOf(this.raw[t])>-1&&!this.finish(t);){if(0===P.indexOf(this.raw[t])){if(e)return null;e=!0}t++}const n=this.raw.slice(this.index,t);return this.index=t,new F(e?G.FLOAT:G.INTEGER,n,this.index)}parseComment(){const e=this.index+1;let t="";switch(this.raw[e]){case"/":t="\n";break;case"*":t="*/";break;default:return null}const n=this.raw.indexOf(t,e);if(-1==n)return null;this.index=n+t.length;const i=this.raw.slice(e+1,n);return new F(G.COMMENT,i,e+1)}isEscape(e){return"\\"===this.raw[e]&&j.indexOf(this.raw[e+1])>-1}}var K,D;(D=K||(K={}))[D.OBJECT=0]="OBJECT",D[D.ARRAY=1]="ARRAY",D[D.BASE=2]="BASE";class W{constructor(){this.level=0,this.size=0,this.nodeType=2}addNode(e){var t,n;if(!(this.value instanceof F)){if(this.value||(this.value=new Array),null==(t=null==e?void 0:e.key)?void 0:t.value)for(let t=0;t<this.size;t++)if((null==(n=this.value[t].key)?void 0:n.value)===e.key.value)return void(this.value[t]=e);this.value.push(e),this.size++}}getNodes(){return this.value}setValue(e){this.value=e}getToken(){return this.value}}class q{constructor(e){this.tokens=e,this.size=e.length,this.index=0,this.root=new W,this.size&&this.parse(this.root)}parse(e,t=1){if(this.tokens[this.index].tokenType===G.OPEN_ARRAY)return e.nodeType=1,this.index++,void this.parseArray(e,t);e.nodeType=0,this.index++,this.parseObject(e,t)}parseObject(e,t=0){for(;this.index<this.size;this.index++){if(this.skip(),this.tokens[this.index].tokenType===G.CLOSE_OBJECT)return;if(this.tokens[this.index].tokenType===G.SEP_COLON){const n=new W;n.level=t,n.key=this.prev();const i=this.next();i.isBasicType()?n.setValue(i):(this.index++,this.parse(n,t+1)),e.addNode(n)}}}parseArray(e,t=0){for(;this.index<this.size;this.index++){if(this.skip(),this.tokens[this.index].tokenType===G.CLOSE_ARRAY)return;const n=this.tokens[this.index],i=new W;i.level=t,n.isBasicType()?i.setValue(n):this.parse(i,t+1),e.addNode(i)}}skip(){for(;this.index<this.size;){switch(this.tokens[this.index].tokenType){case G.SEP_COMMA:case G.COMMENT:this.index++;continue}return}}prev(){return this.tokens[this.index-1]}next(){return this.tokens[this.index+1]}}class Z{constructor(e,t){this.layer=0,this.result="",this.opt=t,this.traverseTree(e),this.result=this.result.trim()}getIndent(){var e;return(null==(e=this.opt)?void 0:e.format)?"    ".repeat(this.layer):""}getSpace(){var e;return(null==(e=this.opt)?void 0:e.format)?" ":""}getWrapRow(){var e;return(null==(e=this.opt)?void 0:e.format)?"\n":""}traverseTree(e){const t=e.size-1;if(e.key&&(this.result+=`${this.getIndent()}"${e.key.value}":${this.getSpace()}`),this.handlerElement(e),e.nodeType===K.OBJECT){this.result+=`{${this.getWrapRow()}`,this.layer++;for(let n=0;n<e.size;n++)this.traverseTree(e.getNodes()[n]),this.result+=n==t?`${this.getWrapRow()}`:`,${this.getWrapRow()}`;this.layer--,this.result+=`${this.getIndent()}}`}if(e.nodeType===K.ARRAY){this.result+="[";for(let n=0;n<e.size;n++)this.traverseTree(e.getNodes()[n]),this.result+=n==t?"":`${this.getSpace()},`;this.result+="]"}}handlerElement(e){if(null==e?void 0:e.value){let t=e.getToken().value;switch(e.getToken().tokenType){case G.INTEGER:t=Number.parseInt(t).toString();case G.FLOAT:t=Number.parseFloat(t).toString();case G.NULL:case G.BOOLEAN:this.result+=t;break;case G.STRING:this.result+=`"${t}"`}}}}const H=function(e){return i.camelize(e)},Q=function(e){return i.pascalize(e)},X=function(e){return i.decamelize(e,{separator:"_"})},ee=function(e){return(e=i.decamelize(e,{separator:""})).replace(e[0],e[0].toUpperCase())},te=function(e){return i.decamelize(e,{separator:""})};function ne(e,t){switch(e){case 0:return H(t);case 1:return Q(t);case 2:return X(t);case 3:return ee(t);case 4:return te(t)}return t}var ie,se;(se=ie||(ie={})).BOOL="bool",se.STRING="string",se.INT="int",se.FLOAT="float64",se.INTERFACE="interface{}",se.STRUCT="struct";class le{constructor(e){this.name=e,this.allowEmpty=!1,this.repeatTimes=0,this.childNameMaxLength=0,this.childKindMaxLength=0}addNode(e){var t,n,i,s,l;this.childs||(this.childs=new Array),e.name.length>this.childNameMaxLength&&(this.childNameMaxLength=e.name.length),(null!=(n=null==(t=e.kind)?void 0:t.length)?n:0)>this.childKindMaxLength&&(this.childKindMaxLength=null!=(s=null==(i=e.kind)?void 0:i.length)?s:0);for(let a=this.childs.length-1;a>=0;a--)if(e.name===(null==(l=this.childs[a])?void 0:l.name))return this.childs[a]=e,this.allowEmpty=!0,void(e.repeatTimes+=1);this.childs.push(e)}}const ae=[ie.BOOL.toString(),ie.INT.toString(),ie.FLOAT.toString(),ie.STRING.toString(),ie.INTERFACE.toString()],oe={rootName:"RootObject",inline:!1,tags:[{name:"json",named:0,omitempty:!1}]};class re{constructor(e,t){var n;this.result="",this.structs=new Array,this.opt=Object.assign({},oe,this.opt);const i=this.gen(e);i&&(this.result=this.codegen(i),!(null==(n=this.opt)?void 0:n.inline)&&this.structs.length&&(this.result=this.structs.join("\n"))),this.result=this.result.trim()}gen(e,t,n){var i,s,l,a,o,r,u,c;let d=null;switch(e.nodeType){case K.BASE:return t===K.ARRAY?null:(d=new le(null!=(s=null==(i=null==e?void 0:e.key)?void 0:i.value)?s:"field"),d.kind=this.getKind(e),d);case K.ARRAY:t!==K.ARRAY&&(d=new le(null!=(o=null==(l=null==e?void 0:e.key)?void 0:l.value)?o:null==(a=this.opt)?void 0:a.rootName),d.kind=this.getKind(e));for(let t=0;t<e.size;t++){const i=this.gen(e.getNodes()[t],K.ARRAY,null!=d?d:n);i&&(d?null==d||d.addNode(i):n&&n.addNode(i))}return d;case K.OBJECT:if(t===K.ARRAY&&0===e.size)return null;d=new le(null!=(c=null==(r=null==e?void 0:e.key)?void 0:r.value)?c:null==(u=this.opt)?void 0:u.rootName),d.kind=this.getKind(e);for(let t=0;t<e.size;t++){const n=this.gen(e.getNodes()[t],K.OBJECT);n&&d.addNode(n)}if(t===K.ARRAY&&n){for(let e=0;e<d.childs.length;e++)n.addNode(d.childs[e]);return null}return d}return null}getKind(e){switch(e.nodeType){case K.OBJECT:return ie.STRUCT;case K.ARRAY:if(0==e.size)return"[]"+ie.INTERFACE;let t=this.getKind(e.getNodes()[0]);for(let n=1;n<e.size;n++){if(this.getKind(e.getNodes()[n])!==t)return"[]"+ie.INTERFACE}switch(t){case ie.BOOL:case ie.STRING:case ie.INT:case ie.FLOAT:return"[]"+t;default:return"[]"+this.getKind(e.getNodes()[0])}}switch(e.getToken().tokenType){case G.BOOLEAN:return ie.BOOL;case G.STRING:return ie.STRING;case G.INTEGER:return ie.INT;case G.FLOAT:return ie.FLOAT}return ie.INTERFACE}codegen(e,t=null,n=""){var i;let s=0,l=0;t&&(s=t.childNameMaxLength,l=t.childKindMaxLength);let a="";return e.kind&&-1!==ae.indexOf(e.kind)&&(a+=`${n}${ne(1,e.name).padEnd(s)} ${e.kind.padEnd(l)}\n`),(null==(i=this.opt)?void 0:i.inline)?a+=this.codegen_inline(e,t,n):a+=this.codegen_noinline(e,t,n),a}codegen_inline(e,t=null,n=""){var i,s,l,a,o,r,u;let c="";if(e.kind===ie.STRUCT){if(c+=`${n.length?n:"type "}${e.name} struct {\n`,e.childs){const t=null!=(s=null==(i=e.childs)?void 0:i.length)?s:0;for(let n=0;n<t;n++)c+=this.codegen(e.childs[n],e,"    ")}c+=`${n}}\n`}if(-1!==(null==(l=e.kind)?void 0:l.indexOf("[]"))){const t=(null!=(o=null==(a=e.kind)?void 0:a.indexOf("struct"))?o:-1)>-1;if(c+=`${n.length?n:"type "}${e.name} ${e.kind}`,c+=t?" {\n":"\n",t&&e.childs){const t=null!=(u=null==(r=e.childs)?void 0:r.length)?u:0;for(let i=0;i<t;i++)c+=this.codegen(e.childs[i],e,"    "+n)}t&&(c+=`${n}}\n`)}return c}codegen_noinline(e,t=null,n=""){var i,s,l,a,o,r,u,c;let d=0,h=0;t&&(d=t.childNameMaxLength,h=t.childKindMaxLength);let p="";if(e.kind===ie.STRUCT){let l="";if(t&&(p+=`${n.length?n:"type "}${ne(1,e.name).padEnd(d)} ${ne(1,e.name).padEnd(h)}\n`),l+=`type ${ne(1,e.name)} struct {\n`,e.childs){const t=null!=(s=null==(i=e.childs)?void 0:i.length)?s:0;for(let n=0;n<t;n++)l+=this.codegen(e.childs[n],e,"    ")}l+="}\n",this.structs.unshift(l)}if(-1!==(null==(l=e.kind)?void 0:l.indexOf("[]"))){const t=(null!=(o=null==(a=e.kind)?void 0:a.indexOf("struct"))?o:-1)>-1;let i="";if(t?(i+=`type ${ne(1,e.name)} ${n.length?"struct":e.kind} {\n`,p+=`${n}${ne(1,e.name).padEnd(d)} ${null==(r=e.kind)?void 0:r.replaceAll("struct","")}${ne(1,e.name)}\n`):p+=`${n.length?n:"type "}${ne(1,e.name)} ${e.kind}\n`,t&&e.childs){const t=null!=(c=null==(u=e.childs)?void 0:u.length)?c:0;for(let n=0;n<t;n++)i+=this.codegen(e.childs[n],e,"    ")}t&&(i+="}\n",this.structs.unshift(i))}return p}}var ue,ce;(ce=ue||(ue={}))[ce.JSON=0]="JSON",ce[ce.GOLANG=1]="GOLANG",ce[ce.YAML=2]="YAML";class de{codegen(e,t){return new Z(e,t).result}}const he=new de;const pe=new class{codegen(e,t){return new re(e).result}},me=new de;class ve{switchStrategy(e){switch(e){case 0:this.strategy=he;break;case 1:this.strategy=pe;break;case 2:this.strategy=me}}do(e,t,n){this.switchStrategy(e);const i=new U(t),s=new q(i.tokens);return this.strategy.codegen(s.root,n)}}const ge={codegenStrategy:ue.GOLANG},fe=e=>{e&&(ge.opt=Object.assign({},ge.opt,e),ye())},_e=e=>{Y.emit("left.editor.set",e)},ye=()=>{Y.emit("left.editor.transform")};const ke=e=>{Y.emit("right.editor.set",e)};function xe(){const t=e([{label:"例子",items:[{label:"第一个🌰",command:()=>{_e('{\n        a:-1231.323\n        b:     {\n            z:31\n            // 测试\n            p:       true\n            123:"key是字符串"\n        }\n    }')}},{label:"第二个🌰",command:()=>{_e('{\n        "a": 123, // 数字\n        "b": "xxx",\n        "c": [  /* 数组 */\n            true,\n            /* 注释1 */\n            23123,\n            0\n            // 注释2\n        ]\n    }')}},{label:"第三个🌰",command:()=>{_e('[{"input_index":0,"candidate_index":0,"delivery_line_1":"1 N Rosedale St","last_line":"Baltimore MD 21229-3737","delivery_point_barcode":"212293737013","components":{"primary_number":"1","street_predirection":"N","street_name":"Rosedale","street_suffix":"St","city_name":"Baltimore","state_abbreviation":"MD","zipcode":"21229","plus4_code":"3737","delivery_point":"01","delivery_point_check_digit":"3"},"metadata":{"record_type":"S","zip_type":"Standard","county_fips":"24510","county_name":"Baltimore City","carrier_route":"C047","congressional_district":"07","rdi":"Residential","elot_sequence":"0059","elot_sort":"A","latitude":39.28602,"longitude":-76.6689,"precision":"Zip9","time_zone":"Eastern","utc_offset":-5,"dst":true},"analysis":{"dpv_match_code":"Y","dpv_footnotes":"AABB","dpv_cmra":"N","dpv_vacant":"N","active":"Y"}},{"input_index":0,"candidate_index":1,"delivery_line_1":"1 S Rosedale St","last_line":"Baltimore MD 21229-3739","delivery_point_barcode":"212293739011","components":{"primary_number":"1","street_predirection":"S","street_name":"Rosedale","street_suffix":"St","city_name":"Baltimore","state_abbreviation":"MD","zipcode":"21229","plus4_code":"3739","delivery_point":"01","delivery_point_check_digit":"1"},"metadata":{"record_type":"S","zip_type":"Standard","county_fips":"24510","county_name":"Baltimore City","carrier_route":"C047","congressional_district":"07","rdi":"Residential","elot_sequence":"0064","elot_sort":"A","latitude":39.2858,"longitude":-76.66889,"precision":"Zip9","time_zone":"Eastern","utc_offset":-5,"dst":true},"analysis":{"dpv_match_code":"Y","dpv_footnotes":"AABB","dpv_cmra":"N","dpv_vacant":"N","active":"Y"}}]')}}]},{label:"操作",items:[{label:"JSON纠正",command:()=>{Y.emit("left.editor.check")}},{label:"JSON格式化",command:()=>{Y.emit("left.editor.fmt")}},{label:"JSON压缩",command:()=>{Y.emit("left.editor.compress")}}]}]),n=e({});return{items:t,menu:n,toggleFn:e=>{n.value.toggle(e)}}}const be=d("span",{class:"pi pi-question"},null,-1),Oe=d("span",{class:"pi pi-trash"},null,-1),Ne={class:"left-copy p-panel-header-icon p-link p-mr-4"},Te=d("span",{class:"pi pi-copy"},null,-1),we=d("span",{class:"pi pi-forward"},null,-1),Ae=d("span",{class:"pi pi-bars"},null,-1),Ee=d("pre",{id:"leftEditor",class:"editor"},null,-1);var Se=s({expose:[],setup(n){const{editor:i}=M("leftEditor",$.hjson),{items:s,menu:g,toggleFn:f}=xe();!function(e){const t=new ve;Y.on("left.editor.set",(t=>{e.value.setValue(t),e.value.execCommand("gotolineend")})),Y.on("left.editor.check",(()=>{const n=t.do(ue.JSON,e.value.getValue(),{format:!0});_e(n)})),Y.on("left.editor.fmt",(()=>{const n=t.do(ue.JSON,e.value.getValue(),{format:!0});_e(n)})),Y.on("left.editor.compress",(()=>{const n=t.do(ue.JSON,e.value.getValue());_e(n)})),Y.on("left.editor.transform",(()=>{const n=t.do(ge.codegenStrategy,e.value.getValue(),ge.opt);ke(n)}))}(i),t((()=>{i.value.setOption("wrap","free"),i.value.on("blur",(function(){x()})),i.value.on("change",l((function(){x()}),500))}));const _=e(!1),y=()=>{_.value=!0},k=()=>{_e(""),ye()};t((()=>{new a(".left-copy",{text:function(e){return i.value.getValue()}})}));const x=()=>{fe({format:!0}),ye()};return(e,t)=>{const n=o("Menu"),i=o("Panel"),l=o("Dialog"),a=r("tooltip");return u(),c(p,null,[d(i,{header:"JSON"},{icons:h((()=>[m(d("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:y},[be],512),[[a,"关于",void 0,{bottom:!0}]]),m(d("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:k},[Oe],512),[[a,"清空",void 0,{bottom:!0}]]),m(d("button",Ne,[Te],512),[[a,"复制",void 0,{bottom:!0}]]),m(d("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:x},[we],512),[[a,"转换",void 0,{bottom:!0}]]),m(d("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:t[1]||(t[1]=(...e)=>v(f)&&v(f)(...e))},[Ae],512),[[a,"更多",void 0,{bottom:!0}]]),d(n,{id:"config_menu",ref:g,model:v(s),popup:!0},null,8,["model"])])),default:h((()=>[Ee])),_:1}),d(l,{header:"关于",visible:_.value,"onUpdate:visible":t[2]||(t[2]=e=>_.value=e),breakpoints:{"960px":"75vw"},style:{width:"50vw"},modal:!0},null,8,["visible"])],64)}}});const Re=new g({storage:"sessionStorage"}),Ce={class:"p-field-checkbox"},Le=d("label",{for:"binary"}," 是否内联类型",-1),ze=d("h5",null,"根对象名",-1),Be=d("h5",null,"自定义Tag(回车确认)",-1),$e=d("p",null,"tag后面接序号可以指定命名方式",-1),Ie=d("p",null,"eg: json|3, form|2",-1),Me=d("div",null,[d("h6",null,"命名方式"),d("p",null,"0. abcDef - 默认"),d("p",null,"1. AbcDef"),d("p",null,"2. abc_def"),d("p",null,"3. Abcdef"),d("p",null,"4. abcdef")],-1);var Ge=s({expose:[],setup(n){const i=e(!1),s=e(["json"]),l=e("Root"),a=()=>{const e={inline:i.value,tags:s.value,rootName:l.value};Re.set("opt.golang",e),fe(e)};return f([i,s,l],(()=>{a()})),t((()=>{const e=Re.get("opt.golang");e&&(i.value=e.inline,s.value=e.tags,l.value=e.rootName),a()})),(e,t)=>{const n=o("Checkbox"),a=o("InputText"),r=o("Chips");return u(),c(p,null,[d("div",Ce,[d(n,{id:"binary",modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),binary:!0},null,8,["modelValue"]),Le]),ze,d(a,{type:"text",modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e)},null,8,["modelValue"]),Be,$e,Ie,d(r,{modelValue:s.value,"onUpdate:modelValue":t[3]||(t[3]=e=>s.value=e)},null,8,["modelValue"]),Me],64)}}});const Ve=d("span",{class:"pi pi-question"},null,-1),Ye=d("span",{class:"pi pi-refresh"},null,-1),Je={class:"right-copy p-panel-header-icon p-link p-mr-2"},Fe=d("span",{class:"pi pi-copy"},null,-1),Pe=d("span",{class:"pi pi-cog"},null,-1),je=d("pre",{id:"rightEditor",class:"editor"},null,-1),Ue=d("p",null,null,-1),Ke=d("br",null,null,-1),De=d("br",null,null,-1);var We=s({expose:[],setup(n){const{editor:i}=M("rightEditor",$.go);!function(e){Y.on("right.editor.set",(t=>{e.value.setValue(t),e.value.execCommand("gotolineend")}))}(i);const s=e(!1),l=()=>{s.value=!0},v=e(!1),g=e("编辑"),f=e("pi-eye-slash"),k=()=>{v.value=!v.value,g.value=v.value?"只读":"编辑",f.value=v.value?"pi-eye":"pi-eye-slash",i.value.setReadOnly(v.value)},x=()=>{ye()};t((()=>{new a(".right-copy",{text:function(e){return i.value.getValue()}})}));const b=e(!1),O=()=>{b.value=!0},N=e({name:"Golang",code:1}),T=e([{name:"Json",code:0},{name:"Golang",code:1},{name:"Yaml",code:2}]),w=()=>{var e;e=N.value.code,ge.codegenStrategy=e,ye()};return(e,t)=>{const n=o("Panel"),i=o("Dialog"),a=o("CascadeSelect"),v=o("Sidebar"),A=r("tooltip");return u(),c(p,null,[d(n,{header:"GO"},{icons:h((()=>[m(d("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:l},[Ve],512),[[A,"关于",void 0,{bottom:!0}]]),m(d("button",{class:"p-panel-header-icon p-link p-mr-4",onClick:k},[d("span",{class:["pi",f.value]},null,2)],512),[[A,g.value,void 0,{bottom:!0}]]),m(d("button",{class:"p-panel-header-icon p-link p-mr-2",onClick:x},[Ye],512),[[A,"刷新",void 0,{bottom:!0}]]),m(d("button",Je,[Fe],512),[[A,"复制",void 0,{bottom:!0}]]),m(d("button",{class:"p-panel-header-icon p-link p-mr-2",onClick:O},[Pe],512),[[A,"设置",void 0,{bottom:!0}]])])),default:h((()=>[je])),_:1}),d(i,{header:"关于",visible:s.value,"onUpdate:visible":t[1]||(t[1]=e=>s.value=e),breakpoints:{"960px":"75vw"},style:{width:"50vw"},modal:!0},{default:h((()=>[Ue])),_:1},8,["visible"]),d(v,{visible:b.value,"onUpdate:visible":t[3]||(t[3]=e=>b.value=e),baseZIndex:1e3,position:"right",class:"p-sidebar-lg",showCloseIcon:!1},{default:h((()=>[d(n,{header:"设置"},{default:h((()=>[d(a,{onChange:w,modelValue:N.value,"onUpdate:modelValue":t[2]||(t[2]=e=>N.value=e),options:T.value,optionGroupChildren:[],optionLabel:"name",placeholder:"选择一门开发语言"},null,8,["modelValue","options"]),Ke,De,(u(),c(_,null,[(u(),c(y(Ge)))],1024))])),_:1})])),_:1},8,["visible"])],64)}}});const qe=k(s({expose:[],setup(n){const i=e("horizontal"),s=()=>{window.innerWidth<=800?i.value="vertical":i.value="horizontal"};return t((()=>{s(),window.addEventListener("resize",l(s,200))})),(e,t)=>{const n=o("SplitterPanel"),s=o("Splitter");return u(),c("main",null,[d(s,{style:{height:"100vh"},layout:i.value},{default:h((()=>[d(n,{minSize:25},{default:h((()=>[d(Se)])),_:1}),d(n,{minSize:20},{default:h((()=>[d(We)])),_:1})])),_:1},8,["layout"])])}}}));qe.use(x),qe.use(b),qe.directive("tooltip",O),qe.component("Panel",N),qe.component("Menu",T),qe.component("Splitter",w),qe.component("SplitterPanel",A),qe.component("Dialog",E),qe.component("Sidebar",S),qe.component("Checkbox",R),qe.component("CascadeSelect",C),qe.component("SelectButton",L),qe.component("InputText",z),qe.component("Chips",B),qe.component("router-link",{}),qe.mount("#app");