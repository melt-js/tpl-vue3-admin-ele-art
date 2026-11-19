import{m as I,q as s,t as U,L as B,y as t,x as o,V as r,A as d,M as e,W as f,r as p,E as g}from"./index-1zN-xvOy.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N={class:"page-content mb-5"},q={class:"card-header"},D={class:"header-buttons"},G={class:"card-header"},P={class:"header-buttons"},j=["innerHTML"],K=["innerHTML"],O={class:"toolbar-explanation"},J=I({name:"WidgetsWangEditor",__name:"index",setup(Q){const b=p(),v=p(),k=p("preview"),C=p("preview"),w=p(["basic"]),H=["bold","italic","underline","|","bulletedList","numberedList","|","insertLink","insertImage","|","undo","redo"],i=p(`<h1>🎨 完整工具栏编辑器示例</h1>
<p>这个编辑器包含所有功能，您可以体验丰富的格式编辑功能。</p>

<h2>✨ 文本样式</h2>
<p><strong>这是加粗的文字</strong></p>
<p><em>这是斜体文字</em></p>
<p><u>这是下划线文字</u></p>
<p><span style="color: rgb(194, 79, 74);">这是彩色文字</span></p>

<h2>📝 列表和待办</h2>
<ul>
  <li>无序列表项 1</li>
  <li>无序列表项 2</li>
</ul>

<ol>
  <li>有序列表项 1</li>
  <li>有序列表项 2</li>
</ol>

<ul class="w-e-todo">
  <li class="w-e-todo-item"><input type="checkbox" checked="true" readonly="true" disabled="disabled"><span>已完成的任务</span></li>
  <li class="w-e-todo-item"><input type="checkbox" readonly="true" disabled="disabled"><span>待完成的任务</span></li>
</ul>

<h2>💬 引用和表格</h2>
<blockquote>
  这是一段引用文字，展示引用格式的效果。
</blockquote>

<table style="border-collapse: collapse; width: 100%;" border="1">
  <thead>
    <tr><th>功能</th><th>描述</th></tr>
  </thead>
  <tbody>
    <tr><td>完整工具栏</td><td>包含所有编辑功能</td></tr>
    <tr><td>自定义配置</td><td>支持灵活的工具栏配置</td></tr>
  </tbody>
</table>

<h2>💻 代码块</h2>
<pre><code class="language-javascript">// 完整编辑器支持代码高亮
function createEditor() {
  return new WangEditor({
    container: '#editor',
    toolbar: 'full' // 完整工具栏
  });
}</code></pre>

<p>🔗 <a href="https://www.wangeditor.com/" target="_blank">访问官网了解更多</a></p>`),u=p(`<h1>✨ 简化工具栏编辑器示例</h1>
<p>这个编辑器只包含基础的编辑功能，界面更加简洁。</p>

<h2>基础文本格式</h2>
<p><strong>加粗文字</strong></p>
<p><em>斜体文字</em></p>
<p><u>下划线文字</u></p>

<h2>列表功能</h2>
<ul>
  <li>无序列表项 1</li>
  <li>无序列表项 2</li>
</ul>

<ol>
  <li>有序列表项 1</li>
  <li>有序列表项 2</li>
</ol>

<h2>链接和图片</h2>
<p>支持插入 <a href="https://www.wangeditor.com/" target="_blank">链接</a> 和图片。</p>

<p>简化版编辑器专注于基础功能，适合简单的内容编辑需求。</p>`),L=()=>{var a;(a=b.value)==null||a.clear(),g.success("完整编辑器已清空")},R=()=>{var l;const a=(l=b.value)==null?void 0:l.getHtml();console.log("完整编辑器内容:",a),g.success("完整编辑器内容已输出到控制台")},W=()=>{var l;(l=b.value)==null||l.setHtml(`<h2>🎉 完整编辑器演示内容</h2>
<p>这是通过方法设置的演示内容，展示完整编辑器的强大功能。</p>
<ul>
  <li>支持丰富的文本格式</li>
  <li>包含表格、代码块等高级功能</li>
  <li>提供完整的编辑体验</li>
</ul>
<table style="border-collapse: collapse; width: 100%;" border="1">
  <tr><th>特性</th><th>状态</th></tr>
  <tr><td>完整工具栏</td><td>✅ 已启用</td></tr>
  <tr><td>高级功能</td><td>✅ 已启用</td></tr>
</table>`),g.success("已设置完整编辑器演示内容")},A=()=>{var a;(a=v.value)==null||a.clear(),g.success("简化编辑器已清空")},M=()=>{var l;const a=(l=v.value)==null?void 0:l.getHtml();console.log("简化编辑器内容:",a),g.success("简化编辑器内容已输出到控制台")},z=()=>{var l;(l=v.value)==null||l.setHtml(`<h2>⚡ 简化编辑器演示内容</h2>
<p>这是通过方法设置的演示内容，展示简化编辑器的核心功能。</p>
<ul>
  <li><strong>基础格式</strong>：加粗、斜体、下划线</li>
  <li><em>列表支持</em>：有序和无序列表</li>
  <li><u>媒体插入</u>：链接和图片</li>
</ul>
<ol>
  <li>界面简洁清爽</li>
  <li>功能专注实用</li>
  <li>适合快速编辑</li>
</ol>
<p>🔗 <a href="https://example.com" target="_blank">这是一个链接示例</a></p>`),g.success("已设置简化编辑器演示内容")};return(a,l)=>{const m=s("ElButton"),V=s("ArtWangEditor"),E=s("ElCard"),h=s("ElTabPane"),y=s("ElInput"),x=s("ElTabs"),_=s("ElCol"),T=s("ElRow"),c=s("ElCollapseItem"),F=s("ElCollapse");return U(),B("div",N,[t(E,{class:"editor-card"},{header:o(()=>[e("div",q,[l[10]||(l[10]=e("span",null,"🛠️ 完整工具栏编辑器",-1)),e("div",D,[t(m,{size:"small",onClick:L},{default:o(()=>[...l[7]||(l[7]=[f("清空",-1)])]),_:1}),t(m,{size:"small",onClick:R},{default:o(()=>[...l[8]||(l[8]=[f("获取内容",-1)])]),_:1}),t(m,{size:"small",onClick:W},{default:o(()=>[...l[9]||(l[9]=[f("设置示例",-1)])]),_:1})])])]),default:o(()=>[t(V,{ref_key:"fullEditorRef",ref:b,modelValue:d(i),"onUpdate:modelValue":l[0]||(l[0]=n=>r(i)?i.value=n:null),height:"400px",placeholder:"请输入内容，体验完整的编辑功能...","exclude-keys":[]},null,8,["modelValue"])]),_:1}),t(E,{class:"editor-card"},{header:o(()=>[e("div",G,[l[14]||(l[14]=e("span",null,"✨ 简化工具栏编辑器",-1)),e("div",P,[t(m,{size:"small",onClick:A},{default:o(()=>[...l[11]||(l[11]=[f("清空",-1)])]),_:1}),t(m,{size:"small",onClick:M},{default:o(()=>[...l[12]||(l[12]=[f("获取内容",-1)])]),_:1}),t(m,{size:"small",onClick:z},{default:o(()=>[...l[13]||(l[13]=[f("设置示例",-1)])]),_:1})])])]),default:o(()=>[t(V,{ref_key:"simpleEditorRef",ref:v,modelValue:d(u),"onUpdate:modelValue":l[1]||(l[1]=n=>r(u)?u.value=n:null),height:"400px",placeholder:"请输入内容，体验简化的编辑功能...","toolbar-keys":H},null,8,["modelValue"])]),_:1}),t(E,{class:"preview-card"},{header:o(()=>[...l[15]||(l[15]=[e("span",null,"📖 内容预览对比",-1)])]),default:o(()=>[t(T,{gutter:20},{default:o(()=>[t(_,{span:12},{default:o(()=>[l[16]||(l[16]=e("h3",null,"完整编辑器内容",-1)),t(x,{modelValue:d(k),"onUpdate:modelValue":l[3]||(l[3]=n=>r(k)?k.value=n:null)},{default:o(()=>[t(h,{label:"渲染效果",name:"preview"},{default:o(()=>[e("div",{class:"content-preview",innerHTML:d(i)},null,8,j)]),_:1}),t(h,{label:"HTML源码",name:"html"},{default:o(()=>[t(y,{modelValue:d(i),"onUpdate:modelValue":l[2]||(l[2]=n=>r(i)?i.value=n:null),type:"textarea",rows:8,placeholder:"HTML源码",readonly:""},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(_,{span:12},{default:o(()=>[l[17]||(l[17]=e("h3",null,"简化编辑器内容",-1)),t(x,{modelValue:d(C),"onUpdate:modelValue":l[5]||(l[5]=n=>r(C)?C.value=n:null)},{default:o(()=>[t(h,{label:"渲染效果",name:"preview"},{default:o(()=>[e("div",{class:"content-preview",innerHTML:d(u)},null,8,K)]),_:1}),t(h,{label:"HTML源码",name:"html"},{default:o(()=>[t(y,{modelValue:d(u),"onUpdate:modelValue":l[4]||(l[4]=n=>r(u)?u.value=n:null),type:"textarea",rows:8,placeholder:"HTML源码",readonly:""},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(E,{class:"usage-card"},{header:o(()=>[...l[18]||(l[18]=[e("span",null,"📚 使用说明",-1)])]),default:o(()=>[t(F,{modelValue:d(w),"onUpdate:modelValue":l[6]||(l[6]=n=>r(w)?w.value=n:null)},{default:o(()=>[t(c,{title:"基础用法",name:"basic"},{default:o(()=>[...l[19]||(l[19]=[e("pre",null,[e("code",{class:"language-vue"},`<template>
          <ArtWangEditor v-model="content" />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue'

          const content = ref('<p>初始内容</p>')
          <\/script>`)],-1)])]),_:1}),t(c,{title:"完整工具栏配置",name:"full"},{default:o(()=>[...l[20]||(l[20]=[e("pre",null,[e("code",{class:"language-vue"},`<template>
          <!-- 显示所有工具，不排除任何功能 -->
          <ArtWangEditor
          v-model="content"
          :exclude-keys="[]"
          />
          </template>`)],-1)])]),_:1}),t(c,{title:"简化工具栏配置",name:"simple"},{default:o(()=>[...l[21]||(l[21]=[e("pre",null,[e("code",{class:"language-vue"},`<template>
          <!-- 只显示基础编辑工具 -->
          <ArtWangEditor
          v-model="content"
          :toolbar-keys="[
          'bold', 'italic', 'underline', '|',
          'bulletedList', 'numberedList', '|',
          'insertLink', 'insertImage', '|',
          'undo', 'redo'
          ]"
          />
          </template>`)],-1)])]),_:1}),t(c,{title:"自定义配置",name:"config"},{default:o(()=>[...l[22]||(l[22]=[e("pre",null,[e("code",{class:"language-vue"},`<template>
          <ArtWangEditor
          v-model="content"
          height="600px"
          placeholder="请输入您的内容..."
          :exclude-keys="['fontFamily', 'fontSize']"
          :upload-config="{
          maxFileSize: 5 * 1024 * 1024,
          maxNumberOfFiles: 5
          }"
          />
          </template>`)],-1)])]),_:1}),t(c,{title:"组件方法调用",name:"methods"},{default:o(()=>[...l[23]||(l[23]=[e("pre",null,[e("code",{class:"language-vue"},`<template>
          <ArtWangEditor ref="editorRef" v-model="content" />
          <el-button @click="handleClear">清空</el-button>
          <el-button @click="handleFocus">聚焦</el-button>
          <el-button @click="handleGetContent">获取内容</el-button>
          </template>

          <script setup lang="ts">
          import { ref } from 'vue'

          const editorRef = ref()
          const content = ref('')

          const handleClear = () => {
          editorRef.value?.clear()
          }

          const handleFocus = () => {
          editorRef.value?.focus()
          }

          const handleGetContent = () => {
          const html = editorRef.value?.getHtml()
          console.log('编辑器内容:', html)
          }
          <\/script>`)],-1)])]),_:1}),t(c,{title:"工具栏配置说明",name:"toolbar-config"},{default:o(()=>[e("div",O,[l[26]||(l[26]=e("h4",null,"完整工具栏 vs 简化工具栏",-1)),t(T,{gutter:16},{default:o(()=>[t(_,{span:12},{default:o(()=>[...l[24]||(l[24]=[e("h5",null,"✅ 完整工具栏包含：",-1),e("ul",null,[e("li",null,"文本格式：加粗、斜体、下划线、字体颜色、背景色"),e("li",null,"段落格式：标题、引用、对齐方式、缩进"),e("li",null,"列表：有序列表、无序列表、待办事项"),e("li",null,"插入：链接、图片、表格、分割线、表情"),e("li",null,"代码：代码块、行内代码"),e("li",null,"操作：撤销、重做、全屏、清除格式")],-1)])]),_:1}),t(_,{span:12},{default:o(()=>[...l[25]||(l[25]=[e("h5",null,"⚡ 简化工具栏包含：",-1),e("ul",null,[e("li",null,"基础格式：加粗、斜体、下划线"),e("li",null,"列表：有序列表、无序列表"),e("li",null,"插入：链接、图片"),e("li",null,"操作：撤销、重做")],-1),e("p",{class:"note"},"适用于简单的文本编辑场景，界面更清爽。",-1)])]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1})])}}}),Z=S(J,[["__scopeId","data-v-cfc3f425"]]);export{Z as default};
