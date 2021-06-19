(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{440:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h4",{attrs:{id:"json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[t._v("#")]),t._v(" JSON")]),t._v(" "),s("p",[t._v("json是一种轻量型的数据交换格式，完全独立于编程语言的文本格式来存储和表现数据。")]),t._v(" "),s("h4",{attrs:{id:"json的对象结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json的对象结构"}},[t._v("#")]),t._v(" JSON的对象结构")]),t._v(" "),s("blockquote",[s("p",[t._v("{")]),t._v(" "),s("p",[t._v("​      key1 : value1,                                    //键值对")]),t._v(" "),s("p",[t._v("​      key2 : value2,                                    // key为字符串 ，value可以为字符串，整型，浮点型，数组")]),t._v(" "),s("p",[t._v("​      ...                                                         // key代表对象的属性， value 代表对象属性的值")]),t._v(" "),s("p",[t._v("​      keyn: valuen")]),t._v(" "),s("p",[t._v("}")])]),t._v(" "),s("h4",{attrs:{id:"json的生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json的生成"}},[t._v("#")]),t._v(" JSON的生成")]),t._v(" "),s("h6",{attrs:{id:"_1-需要json的jar包的支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-需要json的jar包的支持"}},[t._v("#")]),t._v(" 1.需要json的jar包的支持")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("包名")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("jackson-core-2.8.8.jar")])]),t._v(" "),s("tr",[s("td",[t._v("jackson-annotations-2.8.8.jar")])]),t._v(" "),s("tr",[s("td",[t._v("jackson-databind-2.8.8.jar")])])])]),t._v(" "),s("h6",{attrs:{id:"_2-json的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-json的方法"}},[t._v("#")]),t._v(" 2.JSON的方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("JSON.方法名")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("JSON.stringify(json对象)")]),t._v(" "),s("td",[t._v("将json对象转换成json字符串，返回json字符串对象")])]),t._v(" "),s("tr",[s("td",[t._v("JSON.parse(json字符串)")]),t._v(" "),s("td",[t._v("将json字符串转换成json对象，返回json对象")])])])]),t._v(" "),s("h4",{attrs:{id:"ajax的格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax的格式"}},[t._v("#")]),t._v(" Ajax的格式")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n    url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//向后台服务器请求的路径")]),t._v("\n    contentType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json;charset=UTF-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//请求的数据格式")]),t._v("\n    dataType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务器响应的数据格式，可以省略不写，浏览器自动识别")]),t._v("\n    data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发送的数据   json字符串或者json对象")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeSend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//发送数据到服务器之前等待中的操作")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//请求成功，获得返回的json对象")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//请求服务器数据失败")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h4",{attrs:{id:"content-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[t._v("#")]),t._v(" Content-Type")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Content-Type(编码类型)")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("application/x-www-form-urlencoded(默认)")]),t._v(" "),s("td",[t._v("表单数据被编码为名称/值对")])]),t._v(" "),s("tr",[s("td",[t._v("text/plain")]),t._v(" "),s("td",[t._v("窗体数据以纯文本形式进行编码,不含任何控件或格式字符")])]),t._v(" "),s("tr",[s("td",[t._v("multipart/form-data")]),t._v(" "),s("td",[t._v("二进制数据")])]),t._v(" "),s("tr",[s("td",[t._v("application/json")]),t._v(" "),s("td",[t._v("json数据")])])])]),t._v(" "),s("p",[t._v("表单中当action为get时候，浏览器用x-www-form-urlencoded的编码方式把form数据转换成一个字串（name1=value1&name2=value2...），然后把这个字串append到url后面，用?分割，加载这个新的url。当action为post时候，浏览器把form数据封装到http body中，然后发送到server。如果没有 type=file 的控件，用默认的 application/x-www-form-urlencoded 即可。")]),t._v(" "),s("h4",{attrs:{id:"requestbody"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requestbody"}},[t._v("#")]),t._v(" @RequestBody")]),t._v(" "),s("p",[t._v("将请求体中的数据绑定到方法的形参中")]),t._v(" "),s("p",[t._v('application/json格式的数据需要@RequestBody注解来绑定，在SpringMVC环境中,@RequestBody接收的是一个json对象的字符串，而不是一个json对象，因此，@RequestBody需要接的参数是一个String化的json，前台js代码可以直接使用JSON.stringify(json)这个方法来转化。从@RequestBody名称上来看，也就是说要读取的数据在请求体（body）里，所以要发post请求。@RequestBody接收的是一个String的Json，那么要设置请求contentType:"application/json，明确的告诉服务器发送的内容是json。')]),t._v(" "),s("h4",{attrs:{id:"responsebody"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#responsebody"}},[t._v("#")]),t._v(" @ResponseBody")]),t._v(" "),s("p",[t._v("方法的返回结果直接写入 HTTP response body 中，异步获取 json 数据，加上 @ResponseBody 后，会直接返回 json 数据。")]),t._v(" "),s("h4",{attrs:{id:"媒体类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#媒体类型"}},[t._v("#")]),t._v(" 媒体类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("媒体类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("text/html")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("HTML格式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("text/plain")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("纯文本格式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("text/xml, application/xml")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("XML数据格式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("application/json")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("JSON数据格式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("image/gif")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("gif图片格式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("image/png")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("png图片格式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("application/octet-stream")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("二进制流数据")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("application/ x-www-form-urlencoded")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("form表单数据")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("multipart/form-data")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("含文件的form表单")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);