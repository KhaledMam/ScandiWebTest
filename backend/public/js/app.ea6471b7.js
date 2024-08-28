(function(){"use strict";var t={8092:function(t,e,r){var o=r(5130),i=r(6768);function u(t,e,r,o,u,n){const s=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(s)}var n={name:"App"},s=r(1241);const d=(0,s.A)(n,[["render",u]]);var l=d,c=r(1387),a=r(4232);const p=t=>((0,i.Qi)("data-v-72c9aa70"),t=t(),(0,i.jt)(),t),h={class:"product-list"},k={class:"product-header"},v=p((()=>(0,i.Lk)("h1",null,"Product List",-1))),b=p((()=>(0,i.Lk)("button",{class:"add-button"},"ADD",-1))),f={class:"products"},g=["value"],m={class:"product-details"},y={key:0},L={key:1},w={key:2},E=p((()=>(0,i.Lk)("div",{class:"footer"}," Scandiweb Test Assignment ",-1)));function S(t,e,r,u,n,s){const d=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",h,[(0,i.Lk)("div",k,[v,(0,i.Lk)("div",null,[(0,i.bF)(d,{to:"/addproduct"},{default:(0,i.k6)((()=>[b])),_:1}),(0,i.Lk)("button",{id:"delete-product-btn",class:"mass-delete-button",onClick:e[0]||(e[0]=(...t)=>s.deleteSelected&&s.deleteSelected(...t))},"MASS DELETE")])]),(0,i.Lk)("div",f,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.products,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.sku,class:"product-item"},[(0,i.bo)((0,i.Lk)("input",{type:"checkbox",value:t.sku,"onUpdate:modelValue":e[1]||(e[1]=t=>n.selectedProducts=t),class:"delete-checkbox"},null,8,g),[[o.lH,n.selectedProducts]]),(0,i.Lk)("div",m,[(0,i.Lk)("div",null,(0,a.v_)(t.sku),1),(0,i.Lk)("div",null,(0,a.v_)(t.name),1),(0,i.Lk)("div",null,(0,a.v_)(t.price)+" $",1),"DVD"===t.type?((0,i.uX)(),(0,i.CE)("div",y,"Size: "+(0,a.v_)(JSON.parse(t.attribute).size)+" MB",1)):(0,i.Q3)("",!0),"Book"===t.type?((0,i.uX)(),(0,i.CE)("div",L,"Weight: "+(0,a.v_)(JSON.parse(t.attribute).Weight)+" KG",1)):(0,i.Q3)("",!0),"Furniture"===t.type?((0,i.uX)(),(0,i.CE)("div",w,"Dimension: "+(0,a.v_)(JSON.parse(t.attribute).height)+"x"+(0,a.v_)(JSON.parse(t.attribute).width)+"x"+(0,a.v_)(JSON.parse(t.attribute).length),1)):(0,i.Q3)("",!0)])])))),128))]),E])}var P={data(){return{products:[],selectedProducts:[]}},created(){this.fetchProducts()},methods:{fetchProducts(){fetch("http://156.67.29.251:80/api.php").then((t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((t=>{this.products=t})).catch((t=>{console.error("Error fetching products:",t)}))},deleteSelected(){fetch("http://156.67.29.251:80/api.php",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({skus:this.selectedProducts})}).then((t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((()=>{this.fetchProducts()})).catch((t=>{console.error("Error deleting products:",t)}))}}};const M=(0,s.A)(P,[["render",S],["__scopeId","data-v-72c9aa70"]]);var C=M;const D=t=>((0,i.Qi)("data-v-6bbc40f6"),t=t(),(0,i.jt)(),t),F={class:"add-product-page"},O={class:"product-header"},_=D((()=>(0,i.Lk)("h1",null,"Add New Product",-1))),A=D((()=>(0,i.Lk)("label",{for:"sku"},"SKU:",-1))),V=D((()=>(0,i.Lk)("label",{for:"name"},"Name:",-1))),x=D((()=>(0,i.Lk)("label",{for:"price"},"Price ($):",-1))),z=D((()=>(0,i.Lk)("label",{for:"productType"},"Type:",-1))),J=D((()=>(0,i.Lk)("option",{value:"DVD"},"DVD",-1))),U=D((()=>(0,i.Lk)("option",{value:"Book"},"Book",-1))),j=D((()=>(0,i.Lk)("option",{value:"Furniture"},"Furniture",-1))),T=[J,U,j],X={key:0},B=D((()=>(0,i.Lk)("label",{for:"size"},"Size (MB):",-1))),N=D((()=>(0,i.Lk)("small",null,"Please, provide size in MB",-1))),K={key:1},Q=D((()=>(0,i.Lk)("label",{for:"weight"},"Weight (KG):",-1))),W=D((()=>(0,i.Lk)("small",null,"Please, provide weight in KG",-1))),$={key:2},H=D((()=>(0,i.Lk)("label",{for:"height"},"Height (CM):",-1))),G=D((()=>(0,i.Lk)("label",{for:"width"},"Width (CM):",-1))),I=D((()=>(0,i.Lk)("label",{for:"length"},"Length (CM):",-1))),q=D((()=>(0,i.Lk)("small",null,"Please, provide dimensions (HxWxL)",-1))),R={key:3,class:"error-message"},Y=D((()=>(0,i.Lk)("div",{class:"footer"}," Scandiweb Test Assignment ",-1)));function Z(t,e,r,u,n,s){return(0,i.uX)(),(0,i.CE)("div",F,[(0,i.Lk)("div",O,[_,(0,i.Lk)("div",null,[(0,i.Lk)("button",{type:"submit",onClick:e[0]||(e[0]=(...t)=>s.submitForm&&s.submitForm(...t))},"Save"),(0,i.Lk)("button",{type:"button",onClick:e[1]||(e[1]=(...t)=>s.cancel&&s.cancel(...t))},"Cancel")])]),(0,i.Lk)("form",{id:"product_form",onSubmit:e[12]||(e[12]=(0,o.D$)(((...t)=>s.submitForm&&s.submitForm(...t)),["prevent"]))},[(0,i.Lk)("div",null,[A,(0,i.bo)((0,i.Lk)("input",{type:"text",id:"sku","onUpdate:modelValue":e[2]||(e[2]=t=>n.product.sku=t)},null,512),[[o.Jo,n.product.sku]])]),(0,i.Lk)("div",null,[V,(0,i.bo)((0,i.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":e[3]||(e[3]=t=>n.product.name=t)},null,512),[[o.Jo,n.product.name]])]),(0,i.Lk)("div",null,[x,(0,i.bo)((0,i.Lk)("input",{type:"number",id:"price","onUpdate:modelValue":e[4]||(e[4]=t=>n.product.price=t)},null,512),[[o.Jo,n.product.price]])]),(0,i.Lk)("div",null,[z,(0,i.bo)((0,i.Lk)("select",{id:"productType","onUpdate:modelValue":e[5]||(e[5]=t=>n.product.type=t),onChange:e[6]||(e[6]=(...t)=>s.updateAttributeFields&&s.updateAttributeFields(...t))},T,544),[[o.u1,n.product.type]])]),"DVD"===n.product.type?((0,i.uX)(),(0,i.CE)("div",X,[B,(0,i.bo)((0,i.Lk)("input",{type:"number",id:"size","onUpdate:modelValue":e[7]||(e[7]=t=>n.product.size=t)},null,512),[[o.Jo,n.product.size]]),N])):(0,i.Q3)("",!0),"Book"===n.product.type?((0,i.uX)(),(0,i.CE)("div",K,[Q,(0,i.bo)((0,i.Lk)("input",{type:"number",id:"weight","onUpdate:modelValue":e[8]||(e[8]=t=>n.product.weight=t)},null,512),[[o.Jo,n.product.weight]]),W])):(0,i.Q3)("",!0),"Furniture"===n.product.type?((0,i.uX)(),(0,i.CE)("div",$,[H,(0,i.bo)((0,i.Lk)("input",{type:"number",id:"height","onUpdate:modelValue":e[9]||(e[9]=t=>n.product.height=t)},null,512),[[o.Jo,n.product.height]]),G,(0,i.bo)((0,i.Lk)("input",{type:"number",id:"width","onUpdate:modelValue":e[10]||(e[10]=t=>n.product.width=t)},null,512),[[o.Jo,n.product.width]]),I,(0,i.bo)((0,i.Lk)("input",{type:"number",id:"length","onUpdate:modelValue":e[11]||(e[11]=t=>n.product.length=t)},null,512),[[o.Jo,n.product.length]]),q])):(0,i.Q3)("",!0),n.errorMessage?((0,i.uX)(),(0,i.CE)("div",R,(0,a.v_)(n.errorMessage),1)):(0,i.Q3)("",!0)],32),Y])}r(4114);var tt=r(4373),et={name:"AddProduct",data(){return{product:{sku:"",name:"",price:null,type:"DVD",size:null,weight:null,height:null,width:null,length:null},errorMessage:""}},methods:{updateAttributeFields(){this.product.size=null,this.product.weight=null,this.product.height=null,this.product.width=null,this.product.length=null},validateFields(){return!this.product.price>0?(this.errorMessage="Please, provide a positive price",!1):this.product.sku&&this.product.name&&this.product.price?"DVD"!==this.product.type||this.product.size?"Book"!==this.product.type||this.product.weight?"Furniture"!==this.product.type||this.product.height&&this.product.width&&this.product.length?(this.errorMessage="",!0):(this.errorMessage="Please, provide dimensions (HxWxL)",!1):(this.errorMessage="Please, provide the weight in KG",!1):(this.errorMessage="Please, provide the size in MB",!1):(this.errorMessage="Please, submit required data",!1)},submitForm(){this.validateFields()&&tt.A.get(`http://156.67.29.251:80/api.php?sku=${this.product.sku}`).then((t=>{if("Product not found"===t.data.error){let t={...this.product};"DVD"===this.product.type?t.attribute={size:this.product.size}:"Book"===this.product.type?t.attribute={weight:this.product.weight}:"Furniture"===this.product.type&&(t.attribute={height:this.product.height,width:this.product.width,length:this.product.length}),tt.A.post("http://156.67.29.251:80/api.php",t).then((()=>{this.$router.push("/")})).catch((t=>{this.errorMessage="Error saving product: "+t.message}))}else this.errorMessage="SKU must be unique. This SKU already exists."})).catch((t=>{this.errorMessage="Error checking SKU: "+t.message}))},cancel(){this.$router.push("/")}}};const rt=(0,s.A)(et,[["render",Z],["__scopeId","data-v-6bbc40f6"]]);var ot=rt;const it=[{path:"/",name:"Home",component:C},{path:"/addproduct",name:"AddProduct",component:ot}],ut=(0,c.aE)({history:(0,c.LA)("/"),routes:it});var nt=ut;(0,o.Ef)(l).use(nt).mount("#app")}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var u=e[o]={exports:{}};return t[o].call(u.exports,u,u.exports,r),u.exports}r.m=t,function(){var t=[];r.O=function(e,o,i,u){if(!o){var n=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],u=t[c][2];for(var s=!0,d=0;d<o.length;d++)(!1&u||n>=u)&&Object.keys(r.O).every((function(t){return r.O[t](o[d])}))?o.splice(d--,1):(s=!1,u<n&&(n=u));if(s){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}u=u||0;for(var c=t.length;c>0&&t[c-1][2]>u;c--)t[c]=t[c-1];t[c]=[o,i,u]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,u,n=o[0],s=o[1],d=o[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(d)var c=d(r)}for(e&&e(o);l<n.length;l++)u=n[l],r.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return r.O(c)},o=self["webpackChunkscanditask"]=self["webpackChunkscanditask"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(8092)}));o=r.O(o)})();
//# sourceMappingURL=app.ea6471b7.js.map