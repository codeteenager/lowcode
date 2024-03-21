import{_ as a,c as t,o as e,a6 as r,aL as p,aM as i,aN as o,aO as l,aP as d,aQ as s,aR as h,aS as n,aT as c,aU as _,aV as m,aW as u,aX as b,aY as f,aZ as q,a_ as E,a$ as g,b0 as x,b1 as P,b2 as k,b3 as B}from"./chunks/framework.QaOTJ2ON.js";const V=JSON.parse('{"title":"流程引擎","description":"","frontmatter":{},"headers":[],"relativePath":"guide/process-engine/index.md","filePath":"guide/process-engine/index.md","lastUpdated":1709797526000}'),A={name:"guide/process-engine/index.md"},w=r('<h1 id="流程引擎" tabindex="-1">流程引擎 <a class="header-anchor" href="#流程引擎" aria-label="Permalink to &quot;流程引擎&quot;">​</a></h1><p>低代码平台发展到现阶段，已经从传统的 “前端组件拖拽平台” 演变为前后端一体的完整业务搭建平台。其中以审批流和业务流为代表的 “流程” 类场景，在演进过程中逐步成为诉求最高的一类场景。</p><h2 id="传统模式和低代码模式下的流程开发" tabindex="-1">传统模式和低代码模式下的流程开发 <a class="header-anchor" href="#传统模式和低代码模式下的流程开发" aria-label="Permalink to &quot;传统模式和低代码模式下的流程开发&quot;">​</a></h2><p>首先我们以一个简单的 “物资借用” 例子来演示通常认知范畴内的 “流程”，该流程描述如图 1</p><p><img src="'+p+'" alt=""></p><p>上述流程由以下功能点构成：</p><ol><li>一个用于填写物资借用申请的表单页面，申请人可以打开这个页面并填写物资借用需求；</li><li>向负责审批的人员发起待办通知；</li><li>一个处理页面，负责审批的人员可以点进这个页面，选择批准或不批准；</li><li>批准后触发库存扣减，修改数据库记录；</li><li>流程结束标记逻辑。</li></ol><h3 id="传统开发模式下流程应用的-纯手工-开发上线" tabindex="-1">传统开发模式下流程应用的 “纯手工” 开发上线 <a class="header-anchor" href="#传统开发模式下流程应用的-纯手工-开发上线" aria-label="Permalink to &quot;传统开发模式下流程应用的 “纯手工” 开发上线&quot;">​</a></h3><p>在需求已明确的前提下，“纯手工” 开发上线这样一个流程功能包含「前后端研发任务细化拆分 - 前后端研发人员分别进行开发 - 上沙盒环境联调 - 正式上线到生产环境」等四个步骤。</p><p><img src="'+i+'" alt=""></p><p>下面我们来概览每个环节大致需要进行的工作：</p><h4 id="前后端研发任务细化拆分" tabindex="-1">前后端研发任务细化拆分 <a class="header-anchor" href="#前后端研发任务细化拆分" aria-label="Permalink to &quot;前后端研发任务细化拆分&quot;">​</a></h4><p>前后端研发人员和产品经理进行一至多轮关于 “物资借用” 项目的会谈，讨论后明确：</p><ol><li>前端研发需要产出三个主要页面：申请表单页面、待办通知页面、审批页面。</li><li>后端研发需要产出四个主要接口以及相关计算逻辑：申请表单提交接口、待办通知内容获取接口、待办列表获取接口、审批动作接口。</li></ol><h4 id="前后端研发人员分别进行开发" tabindex="-1">前后端研发人员分别进行开发 <a class="header-anchor" href="#前后端研发人员分别进行开发" aria-label="Permalink to &quot;前后端研发人员分别进行开发&quot;">​</a></h4><p>前后端研发人员分别进入开发阶段。</p><ol><li>前端研发可能需要：一个前端框架，如 React/Vue; 一个成熟的 UI 组件库，通过调用组件库中的组件 API 来“拼装” 出页面；一个 mock 服务，用于提供模拟的 API 请求环境并按约定好的格式返回数据。</li><li>后端研发可能需要：一个用于调试的本地数据库或内存数据库；根据需求编写相关逻辑代码；通过单元测试或模拟请求来确保功能正确。</li></ol><h4 id="上沙盒环境联调" tabindex="-1">上沙盒环境联调 <a class="header-anchor" href="#上沙盒环境联调" aria-label="Permalink to &quot;上沙盒环境联调&quot;">​</a></h4><p>双方将开发好的代码部署到沙盒环境上进行正式联调，修改代码以解决联调中发现的问题。</p><h4 id="正式上线到生产环境" tabindex="-1">正式上线到生产环境 <a class="header-anchor" href="#正式上线到生产环境" aria-label="Permalink to &quot;正式上线到生产环境&quot;">​</a></h4><p>准备线上机器，数据库上线，代码打包上线等。</p><p>至此，我们粗略讲述了传统模式下开发流程功能的步骤，可以看到需要多方配合才能够完成这样一个“流程” 功能并上线使用。</p><p>那么在 “低代码” 模式的流程引擎中，我们如何去制作一个包含上述这些主要功能点的应用呢？</p><h3 id="低代码模式下流程应用的开发上线" tabindex="-1">低代码模式下流程应用的开发上线 <a class="header-anchor" href="#低代码模式下流程应用的开发上线" aria-label="Permalink to &quot;低代码模式下流程应用的开发上线&quot;">​</a></h3><p>针对某个领域的低代码方案，其产生的初衷必然是为了节省生产过程中的人力成本和沟通成本，降低功能研发的复杂度。低代码流程引擎也不例外。下面我们使用百度智能云低代码平台爱速搭（<a href="https://aisuda.baidu.com/%EF%BC%89%E6%9D%A5%E5%88%B6%E4%BD%9C%E6%9C%AC%E6%96%87%E5%BC%80%E5%A4%B4%E6%8F%8F%E8%BF%B0%E7%9A%84%E6%B5%81%E7%A8%8B%EF%BC%8C%E9%80%90%E4%B8%80%E5%B1%95%E7%A4%BA%E4%BD%8E%E4%BB%A3%E7%A0%81%E6%B5%81%E7%A8%8B%E5%BC%95%E6%93%8E%E5%85%B7%E4%BD%93%E6%98%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0" target="_blank" rel="noreferrer">https://aisuda.baidu.com/）来制作本文开头描述的流程，逐一展示低代码流程引擎具体是如何实现</a> “降低研发复杂度” 这一目标的。</p><p>在百度智能云低代码平台爱速搭，使用低代码流程引擎开发流程功能大致可以分为「创建流程需要使用的数据模型 - 使用流程编辑器制作流程并绑定触发方式 - 制作用于提交申请的表单页面」三个主要步骤，下面我们同样分步进行说明。</p><p><img src="'+o+'" alt=""></p><h4 id="创建流程需要使用的数据模型" tabindex="-1">创建流程需要使用的数据模型 <a class="header-anchor" href="#创建流程需要使用的数据模型" aria-label="Permalink to &quot;创建流程需要使用的数据模型&quot;">​</a></h4><p>一个完整的流程必然需要相应的数据表来进行流程流转相关信息的承载，而爱速搭提供了一个可视化的建模界面，对于本文开头描述的流程，我们需要建立如图 4 所示的两张数据表，其中 “物资借用记录” 表用于记录用户发起的物资借用请求，“物资在库信息表” 用于记录当前在库的物资名称、库存数量等信息。</p><p><img src="'+l+'" alt=""></p><p>这两张数据表可以用爱速搭的可视化建模功能完成。在这一步中，即便没有相关的后端开发人员，对数据库有基本概念的前端开发人员或其他角色也可以利用可视化界面完成数据库、数据表数据表的设计和创建，并通过简单的配置实现开发、测试、线上环境的数据分离。这节省了传统模式开发中搭建 / 修改不同环境数据库的人力消耗。</p><p><img src="'+d+'" alt=""></p><h4 id="使用流程编辑器制作流程" tabindex="-1">使用流程编辑器制作流程 <a class="header-anchor" href="#使用流程编辑器制作流程" aria-label="Permalink to &quot;使用流程编辑器制作流程&quot;">​</a></h4><p>我们预想的效果是，当用户提交物资借用申请时触发流程，这个行为实际上是往 “物资借用记录” 中新增一条数据，那么我们应当在流程设计器中指定往该表中 “新增记录” 时触发流程，具体配置如图 6 所示。</p><p>这个设置的含义是，当数据表 “物资借用记录” 新增一条数据时，会发起一个新的流程，然后将新增数据的内容在审批页面展示出来，审批通过后走到下一步。</p><p><img src="'+s+'" alt=""></p><p>然后在下一步的 “查询记录” 和 “更新记录” 中，我们可以以流程发起时填写的 “物资编号” 字段作为条件，查出相应物资的库存，并在此基础上减 1 重新入库，如图 7 所示。</p><p><img src="'+h+'" alt=""></p><p>将前置数据作为查询条件的操作界面如图 8，爱速搭实现了“公式编辑器”，用于声明基于上下文变量的计算公式，“物资借用记录” 和 “物资在库信息” 这两个表，通过公式声明实现了数据的联动。</p><p><img src="'+n+'" alt=""></p><p>在流程制作的环节中，低代码平台同样用可视化拖拽的方式来代替了传统需要后端开发的步骤，以节省后端开发的成本。</p><h4 id="制作用于提交申请的表单页面" tabindex="-1">制作用于提交申请的表单页面 <a class="header-anchor" href="#制作用于提交申请的表单页面" aria-label="Permalink to &quot;制作用于提交申请的表单页面&quot;">​</a></h4><p>在设计完流程之后，我们还需要一个让终端用户提交申请的入口，这个入口可以借助爱速搭的 “模型组件” 能力来实现。创建一个页面，并在页面中拖入一个 “模型表单” 组件，该组件会根据数据模型字段来自动生成对应各字段的填写表单组件，如图 9、图 10。这一步同样以可视化的方式节省了页面搭建及表单提交接口开发的人力。</p><p><img src="'+c+'" alt=""></p><p><img src="'+_+'" alt=""></p><h4 id="应用上线" tabindex="-1">应用上线 <a class="header-anchor" href="#应用上线" aria-label="Permalink to &quot;应用上线&quot;">​</a></h4><p>在流程制作完成之后，点击 “发布” 按钮就可以将整个应用发布到线上环境并提供给终端用户使用，如图 11 所示：</p><p><img src="'+m+'" alt=""></p><p>在这一步中，通过平台 SaaS 架构集中管理线上环境的机制，简化了传统开发模式下准备线上机器 - 分模块上线的工作。</p><h2 id="低代码流程引擎背后的原理和相关设计" tabindex="-1">低代码流程引擎背后的原理和相关设计 <a class="header-anchor" href="#低代码流程引擎背后的原理和相关设计" aria-label="Permalink to &quot;低代码流程引擎背后的原理和相关设计&quot;">​</a></h2><p>上述我们对比了传统模式和低代码模式下流程开发的步骤，也阐述了低代码模式在每个环节是如何实现 “人力节省” 的目的。</p><p>那么在低代码流程引擎的背后，是以怎样的设计来支撑这种通用的开发模式的呢？一方面是支持用户快速编辑流程，对应流程可视化编辑器；另一方面是流程触发后，让引擎知道如何执行该流程，对应流程运行引擎。</p><p>下面我们分别从这两方面来聊一聊低代码平台流程引擎背后的原理。</p><h3 id="流程可视化编辑器" tabindex="-1">流程可视化编辑器 <a class="header-anchor" href="#流程可视化编辑器" aria-label="Permalink to &quot;流程可视化编辑器&quot;">​</a></h3><p>流程可视化编辑器，顾名思义，可根据用户编辑生成相应的流程。由于在流程节点中和数据源建立了逻辑关系，因而可以在页面可视化编辑器中直接制作页面。流程可视化编辑器目前在各家厂商的产品中有着类似的基础形态，基本上是节点 + 连线的模式。</p><p><img src="'+u+'" alt=""></p><p>在爱速搭中，流程编辑器的完整界面如图 18 所示，可以看到目前支持的节点有人工节点、网关节点、自动节点、开始事件四大类，这些节点涵盖了一个能够称之为 “通用”的流程引擎的原子能力。</p><p><img src="'+b+'" alt=""></p><p>下面我们摘取一些比较重要的功能点来进行进一步说明，以便各位读者对流程编辑器的能力有更加清晰的印象。</p><h4 id="拖拽编排、保存的基础能力" tabindex="-1">拖拽编排、保存的基础能力 <a class="header-anchor" href="#拖拽编排、保存的基础能力" aria-label="Permalink to &quot;拖拽编排、保存的基础能力&quot;">​</a></h4><p>“低代码” 领域的各类编辑器，按现今通用的做法，都是通过用户不断操作界面来更改编辑中的 JSON 配置（即应用描述），当点击保存时将编辑好的应用描述保存到后端。而流程引擎编辑器也不例外。</p><p>以爱速搭为例，当点击右上角的 “保存” 按钮时，观察网络请求，可以看到保存的数据格式如下图。其中最重要的信息是“nodes” 和 “lines”，分别表示流程的节点和连线，其他字段是流程运行过程中所需的一些信息，如流程动作的具体描述、绑定的数据模型字段信息等，如图 19 所示：</p><p><img src="'+f+'" alt=""></p><p>当用户在界面上拖拽操作时，这份流程描述会随着用户的编辑不断变更并最终被保存到后端数据库中。</p><p>目前流程描述文件并没有所谓的行业标准来进行格式约束，所以各厂商的描述文件细节会各有差异，但基本上都是围绕 “节点” 和 “连线” 来组织。</p><p>在流程的运行态，运行引擎会从数据库里取出这份描述，然后根据描述中的 “说明” 来确定下一步的执行动作，关于这一点，在后文的 2.2.3 节的“流程流转” 中会有进一步说明。</p><h4 id="为人工节点指定处理人" tabindex="-1">为人工节点指定处理人 <a class="header-anchor" href="#为人工节点指定处理人" aria-label="Permalink to &quot;为人工节点指定处理人&quot;">​</a></h4><p>在流程运行中，每个节点都会有不同的处理人，这涉及到流程编辑器和低代码平台组织架构、角色等信息的打通。如何灵活完善地描述“处理人”，是流程引擎设计中的一个重要考量点。其设计的关键点在于尽可能保证在组织架构和人员变动的时候，仅需要对组织架构通讯录和角色成员进行调整，而不需要再次在编辑器中修改处理人配置并重新上线。</p><p>爱速搭目前采用的是业界比较通用的“处理人”划分维度，主要包括：</p><ol><li>基于组织找人：即可以根据组织通讯录中的部门、特定人员、特定岗位、特定角色；</li><li>基于表达式找人：即可以根据表单或流程变量来找人，如 “流程发起人” 或数据模型中的 “人员信息” 类型字段；</li><li>基于上下级找人：即可以根据人员的回报关系和部门的层级来确定对应的流程关系。</li></ol><p>如图 20 中的审批节点所示：</p><p><img src="'+q+'" alt=""></p><p>基于这三个维度，基本可以灵活满足日常在流程中指定处理人范围的诉求。在流程运行时，运行引擎会根据当前节点的处理人信息为相关人员生成待办记录。</p><h4 id="节点对数据的访问权限限制" tabindex="-1">节点对数据的访问权限限制 <a class="header-anchor" href="#节点对数据的访问权限限制" aria-label="Permalink to &quot;节点对数据的访问权限限制&quot;">​</a></h4><p>节点对数据访问的权限控制是整个流程设计中非常重要的一环，因为 “流程” 这件事情从根本意义上来说是“某人提出一些诉求并经相关负责人确认后固化留档” 的过程。所以规定每个环节（即节点）的处理人是否有权限对数据进行改动，是整个 “流程” 运行的重要保障。</p><p>例如在本文开头描述的流程中，负责审批的人理应不能够随意更改申请物的编号，而在一些诸如预算申请、报销的场景中，审批人也不应当能够随意修改提申的金额等等。这就要求流程在执行的过程中不能完全信任前端提交上来的数据，而是需要根据当前节点的权限对提交的数据进行鉴权过滤。</p><p>在爱速搭的流程编辑器中可以指定每个节点可操作的字段，如审批节点对申请单的内容只有查看权限，如图 21、图 22 所示：</p><p><img src="'+E+'" alt=""></p><p><img src="'+g+'" alt=""></p><h3 id="流程运行引擎" tabindex="-1">流程运行引擎 <a class="header-anchor" href="#流程运行引擎" aria-label="Permalink to &quot;流程运行引擎&quot;">​</a></h3><p>前面我们说到，流程可视化编辑器主要做的事情是根据用户的编辑操作生成相应的流程描述并入库，而流程运行引擎的主要作用，是在流程被触发时从数据库中取出流程描述，并根据流程描述来决定下一步的动作。</p><p>从宏观角度来说，流程的运行包括“流程触发 - 流程流转 - 流程完结”三个生命周期阶段。</p><p>我们仍以爱速搭中的实现为例，讲述 “流程” 是如何一步步运行下去的，首先我们通过一张图来概览流程运行引擎的全貌。</p><h4 id="爱速搭平台流程运行引擎工作原理一览" tabindex="-1">爱速搭平台流程运行引擎工作原理一览 <a class="header-anchor" href="#爱速搭平台流程运行引擎工作原理一览" aria-label="Permalink to &quot;爱速搭平台流程运行引擎工作原理一览&quot;">​</a></h4><p>如图 23，每次发起流程时，运行引擎都会先去数据库查找到编辑好的流程描述，将其副本拷贝到运行时的流程状态表中，并根据当前活跃节点为活跃节点指定的处理人生成待办记录，如果是自动节点，则自动往下执行，当流程处理人处理完流程时，流程处理接口会通知流程流转任务更新流程状态表中的流程状态。</p><p><img src="'+x+'" alt=""></p><p>我们来分步说明流程流转过程中的关键环节在爱速搭中具体是如何实现的。</p><h4 id="流程触发" tabindex="-1">流程触发 <a class="header-anchor" href="#流程触发" aria-label="Permalink to &quot;流程触发&quot;">​</a></h4><p>流程的触发，从用户视角来说是 “提交请求后向处理人发起待办”，“触发” 是流程生命周期的开始。</p><ol><li>流程触发的时机</li></ol><p>爱速搭支持多种方式的流程触发，包括表单事件触发，实体事件触发（数据库表增删改查）和常规触发（直接触发）。</p><p>表单依赖于表单引擎，本文暂不讨论，后续会有独立文章进行说明。常规触发即直接触发。本文重点讨论实体事件触发，即前半部分展示的 “通过往数据表新增一条数据触发流程” 的方式。</p><p>实体事件触发依赖于数据模型增删改查阶段的 hook，要实现流程的触发，需要首先在爱速搭中创建一个内置数据模型，或者将现有的数据模型接入到爱速搭平台。当对数据库进行增删改查操作的时候，相应的钩子函数会被调用并检查该数据库-事件有无绑定的流程。如果有，则触发流程。</p><ol start="2"><li>流程触发”的具体行为</li></ol><p>在爱速搭中，“流程触发” 依赖于流程数据（flow_data）表实现，该表结构如图 24 所示：</p><p><img src="'+P+'" alt=""></p><p>比较重要的字段如下所示：</p><table><thead><tr><th>字段名</th><th>作用</th></tr></thead><tbody><tr><td>defintion</td><td>流程定义</td></tr><tr><td>data</td><td>流程发起时传入的数据，如用户提交的申请表单内容</td></tr><tr><td>active_nodes</td><td>标识流程当前的运行位置，active_node 表中的 id 字段数组</td></tr><tr><td>status</td><td>流程状态</td></tr></tbody></table><p>当一个流程被触发时，流程运行引擎会在 flow_data 表中生成一条新记录，并将当前版本的流程描述以及用户提交的表单数据分别拷贝到 defintion 和 data 字段中，同时为当前活跃节点（通常是开始节点的下一个节点）生成相应的记录插入 flow_node (流程节点数据) 表中。</p><p>之所以要将流程描述拷贝一份，是为了保证即使流程流转过程中开发者修改了原始流程数据，已发起的流程也依然能够正常流转到最后一步。</p><h4 id="流程流转" tabindex="-1">流程流转 <a class="header-anchor" href="#流程流转" aria-label="Permalink to &quot;流程流转&quot;">​</a></h4><p>流程的流转指的是流程不断往下一步走的过程，在爱速搭中“流程流转” 状态依赖 flow_node 表和 flow_data 表中的 active_nodes 字段共同实现。</p><p>flow_node 表是运行中的流程节点数据，其结构如图 25 所示：</p><p><img src="'+k+'" alt=""></p><p>比较重要的字段如下所示：</p><table><thead><tr><th>字段名</th><th>作用</th></tr></thead><tbody><tr><td>type</td><td>记录节点类型，如审批节点，网关节点等，流程运行引擎会根据节点类型和配置执行该类节点对应的处理逻辑</td></tr><tr><td>flow_data_id</td><td>节点对应的 flow_data 表中的记录</td></tr><tr><td>transactor_id</td><td>处理人 id</td></tr><tr><td>status</td><td>节点状态</td></tr></tbody></table><p>一个流程节点可能会有多个处理人，当流程要往下一步运行时，运行引擎会通过 flow_data_id 在 flow_data 表中查找到流程描述的副本，为符合条件的全部处理人分别生成单独的待处理 flow_node 数据，例如某个审批节点指定了 10 个处理人，那么当运行引擎执行到该节点时，会在 flow_node 表中插入 10 条 transactor_id 分别为这十个人的记录。</p><p>生成 flow_node 数据后，运行引擎会前往更新 flow_data 表中的 active_nodes 字段，将新生成的记录 id 写入到该字段中。</p><p>用户在前端待办中心打开 “我的待办” 时，待办列表接口会筛选处理人为当前用户的活跃 flow_node 数据，并将这些数据展示在用户的待办列表中，如图 26 所示：</p><p><img src="'+B+'" alt=""></p><h4 id="流程结束" tabindex="-1">流程结束 <a class="header-anchor" href="#流程结束" aria-label="Permalink to &quot;流程结束&quot;">​</a></h4><p>流程结束是整个流程生命周期的终结，在爱速搭中通过更新 flow_data 的 status 字段来进行标识。</p><p>当一个流程流转到最终阶段时，流程运行引擎会更新 flow_data 表，将相应的流程状态置为 “结束”，此时用户在前端可以查阅到 “流程结束” 记录。</p>',113),C=[w];function S(D,T,v,F,y,I){return e(),t("div",null,C)}const $=a(A,[["render",S]]);export{V as __pageData,$ as default};