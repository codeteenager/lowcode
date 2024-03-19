import{_ as a,c as s,o as i,a6 as l}from"./chunks/framework.8kXQXmdI.js";const E=JSON.parse('{"title":"页面编排逻辑流节点","description":"","frontmatter":{},"headers":[],"relativePath":"guide/process-engine/logic-nodes.md","filePath":"guide/process-engine/logic-nodes.md","lastUpdated":1710857363000}'),e={name:"guide/process-engine/logic-nodes.md"},t=l(`<h1 id="页面编排逻辑流节点" tabindex="-1">页面编排逻辑流节点 <a class="header-anchor" href="#页面编排逻辑流节点" aria-label="Permalink to &quot;页面编排逻辑流节点&quot;">​</a></h1><h2 id="变量赋值" tabindex="-1">变量赋值 <a class="header-anchor" href="#变量赋值" aria-label="Permalink to &quot;变量赋值&quot;">​</a></h2><p>对变量进行赋值。既可以以另一个变量为该变量赋值，也可以以表达式的形式为变量赋值。</p><p>在同一个节点内，您可以为多个变量进行赋值。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在逻辑编排节点的参数配置面板，系统将节点名称自动生成为相应逻辑编排节点的名称，且支持修改。</p></div><h2 id="js方法调用" tabindex="-1">JS方法调用 <a class="header-anchor" href="#js方法调用" aria-label="Permalink to &quot;JS方法调用&quot;">​</a></h2><p>调用页面JS方法和全局JS方法。</p><p>逻辑流执行至该节点时，即执行对应调用的JS方法。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>调用JS方法包括helloPage（页面JS）和helloGlobal（全局JS）。</p></div><h2 id="调用后端服务" tabindex="-1">调用后端服务 <a class="header-anchor" href="#调用后端服务" aria-label="Permalink to &quot;调用后端服务&quot;">​</a></h2><p>调用轻应用内自定义服务方法和系统内置服务方法。</p><ul><li>在选择服务方法后，需为入参赋值并通过变量承接服务方法调用输出结果。</li><li>对入参赋值时，您可以选择直接写入值、变量、表达式三种方式。 <ul><li>赋值方式为值时，输入框的内容将被自动转为String类型。</li><li>赋值方式为表达式时，表达式的最终值类型需和入参类型相同。</li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果入参的类型为：</p><ol><li>基本类型：支持通过值、变量、表达式赋值。</li><li>集合类型：支持通过变量、表达式赋值。</li><li>对象类型：支持通过变量、表达式赋值。</li></ol></div><h2 id="打印控制台日志" tabindex="-1">打印控制台日志 <a class="header-anchor" href="#打印控制台日志" aria-label="Permalink to &quot;打印控制台日志&quot;">​</a></h2><p>在前端Web应用控制台（console）中打印内容。日志内容由表达式定义，表达式的最终值类型必须为String。</p><h2 id="打开页面" tabindex="-1">打开页面 <a class="header-anchor" href="#打开页面" aria-label="Permalink to &quot;打开页面&quot;">​</a></h2><p>在逻辑流中打开其他页面。</p><p>支持以下打开方式：</p><ul><li>打开应用内页面（适用场景：应用内页面的跳转）。</li><li>返回上一级页面（适用场景：由列表页打开其中某项的详情，再跳转回列表页等）。</li><li>打开外链。</li></ul><p>在以上打开方式中，如果您选择在当前页打开，新页面内容会直接覆盖当前浏览器Tab页的内容；如选择在新窗口打开，浏览器会新开页签，并在页签中显示外链内容。</p><h2 id="显示页面消息" tabindex="-1">显示页面消息 <a class="header-anchor" href="#显示页面消息" aria-label="Permalink to &quot;显示页面消息&quot;">​</a></h2><p>在当前页面出现消息提示框（toast）。支持显示成功、警告、错误、通知、帮助、加载共6种类型的页面消息。您可以设置提示显示时长及提示的具体内容。表达式框中最终的数据类型需为String。</p><h2 id="分支" tabindex="-1">分支 <a class="header-anchor" href="#分支" aria-label="Permalink to &quot;分支&quot;">​</a></h2><p>为流程创建多个分支流程。在节点中，您可以自定义分支名称，并通过表达式来定义分支条件，表达式的最终值类型必须为Boolean。当不满足任何分支条件时，将会执行默认分支。</p><h2 id="遍历循环" tabindex="-1">遍历循环 <a class="header-anchor" href="#遍历循环" aria-label="Permalink to &quot;遍历循环&quot;">​</a></h2><p>配置某些循环的流程。例如，对于以下对某个list变量内元素遍历并操作的场景：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Structure_A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aList;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aList.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Structure_A a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aList[i];</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在遍历节点内时，集合变量为aList，条目变量则为a，条目下标为i。循环中对a变量的操作，则在遍历循环节点内以通过节点编排的形式实现。</p><p>集合变量需要从页面现存变量中选取，条目变量由于只存在于循环内部，只需要设定一个与循环内变量编码不重复的编码，即可创建以该编码为标识的循环内变量。以aList和a为例，条目变量a及下标i在设定后，不会体现在整体页面的变量管理列表中，但在循环内，可从变量列表中获取。</p><h2 id="执行表单验证" tabindex="-1">执行表单验证 <a class="header-anchor" href="#执行表单验证" aria-label="Permalink to &quot;执行表单验证&quot;">​</a></h2><p>支持选择页面中的表单容器，根据表单容器内部各个组件设定的校验条件，分别对内部组件进行是否满足校验条件的验证操作。 您可以通过组件的唯一标识对页面内的表单容器进行选择，并选择一个Boolean类型的变量作为验证结果的输出赋值变量。</p>`,31),n=[t];function h(p,r,o,d,k,c){return i(),s("div",null,n)}const g=a(e,[["render",h]]);export{E as __pageData,g as default};
