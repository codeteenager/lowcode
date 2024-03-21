import{_ as e,c as a,o as i,a6 as l,aK as t}from"./chunks/framework.QaOTJ2ON.js";const m=JSON.parse('{"title":"流程图","description":"","frontmatter":{},"headers":[],"relativePath":"guide/process-engine/flow.md","filePath":"guide/process-engine/flow.md","lastUpdated":1711035979000}'),o={name:"guide/process-engine/flow.md"},r=l('<h1 id="流程图" tabindex="-1">流程图 <a class="header-anchor" href="#流程图" aria-label="Permalink to &quot;流程图&quot;">​</a></h1><p>目前市面上有很多流程图框架：BPMN.js、X6、Jsplumb、G6-editor、LogicFlow。均存在不满足的场景，技术栈统一的成本很高。具体表现在：</p><ul><li>BMPN.js、Jsplumb 的拓展能力不足，自定义节点支持成本很高；只能全量引入，各系统无法按需引入</li><li>与后端配套的流程引擎适配，成本较高。均不支持数据转换、不支持流程的校验等业务定制需求。</li></ul><h2 id="基本能力" tabindex="-1">基本能力 <a class="header-anchor" href="#基本能力" aria-label="Permalink to &quot;基本能力&quot;">​</a></h2><p>流程图编辑所必需的各项能力主要有：</p><ul><li>图的绘制能力。基于 SVG 来绘制形状各异的节点和线，并提供了基础的节点（矩形、圆形、多边形等）和线（直线、折线、曲线）</li><li>各类交互能力，让图动起来。根据节点、线、图的各类鼠标事件（hover、点击、拖拽等）做出反应。比如节点拖拽、拖拽创建边、线的调整、双击节点编辑文本等</li><li>提升编辑效率的能力。提供网格、对齐线，上一步、下一步，键盘快捷键，图放大缩小等配套能力，帮助用户提升编辑效率</li><li>提供了丰富的 API ，宿主研发通过 API 传参调用和监听事件的方式，与 编辑器 完成交互</li></ul><p>当基础能力无法满足业务需求的时候，便需要基于业务场景拓展。</p><ul><li>设置图上所有元素的样式，比如各种节点、线、锚点、箭头、对齐线的大小颜色等，满足对前端样式调整的需求</li><li>API 拓展。支持在 流程图引擎 上注册自定义的方法，比如通过 API 拓展提供图片下载的方法</li><li>自定义节点、线。内置的矩形、圆形等图形类节点往往无法满足实际的业务需求，需要定义具有业务意义的节点。</li><li>拓展组件。在 SVG 图层上提供了 HTML 层和一系列坐标转换逻辑，并支持在 HTML 层注册组件。宿主研发可以通过 引擎 的 API，基于任何 View 框架开发组件，比如节点的右键菜单、控制面板等</li><li>数据转换 adapter。引擎默认导出的图数据不一定适合所有业务，此时可以通过 adapter API，在图数据从 引擎 输入、输出的时候做自定义转换，比如转换成 BPMN 规范的图数据</li><li>内置部分拓展能力。基于上述拓展能力，我们还单独提供了 extension 的包，用来存放客服业务下沉淀出的具有通用性的节点、组件等，比如面向 BPMN 规范的节点和数据 adapter，默认菜单。注意 extension 可以单独安装，并支持按需引入</li></ul><h2 id="图渲染方案" tabindex="-1">图渲染方案 <a class="header-anchor" href="#图渲染方案" aria-label="Permalink to &quot;图渲染方案&quot;">​</a></h2><p>前端绘制图形无非就是 HTML + CSS、Canvas、Svg 三种方式，我们综合做了一下对比，列出了相应的优劣势：</p><p><img src="'+t+'" alt=""></p><p>在流程图的场景下，不需要渲染大量的节点（最多几千个元素），对于动画的诉求也不高。Svg 基于 DOM 的特性会更适合我们，一个是学习成本和开发成本更低，另一个是基于 DOM 可以做的拓展也更多。不过 Svg 标签内部并不支持插入其他比如 div 这种标签，所以在实现某些功能的时候，都需要结合其他 HTML 标签。</p>',12),s=[r];function n(p,d,c,_,h,u){return i(),a("div",null,s)}const f=e(o,[["render",n]]);export{m as __pageData,f as default};