(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-592a62ce"],{"0478":function(t,n,e){},"06cd":function(t,n,e){"use strict";var o=e("0478"),r=e.n(o);r.a},1098:function(t,n,e){"use strict";n.__esModule=!0;var o=e("17ed"),r=s(o),d=e("f893"),a=s(d),i="function"===typeof a.default&&"symbol"===typeof r.default?function(t){return typeof t}:function(t){return t&&"function"===typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};function s(t){return t&&t.__esModule?t:{default:t}}n.default="function"===typeof a.default&&"symbol"===i(r.default)?function(t){return"undefined"===typeof t?"undefined":i(t)}:function(t){return t&&"function"===typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":"undefined"===typeof t?"undefined":i(t)}},"17ed":function(t,n,e){t.exports={default:e("d8d6"),__esModule:!0}},"25be":function(t,n){t.exports='<h4 id="基本">基本</h4>\n'},2638:function(t,n,e){"use strict";function o(){return o=Object.assign||function(t){for(var n,e=1;e<arguments.length;e++)for(var o in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},o.apply(this,arguments)}var r=["attrs","props","domProps"],d=["class","style","directives"],a=["on","nativeOn"],i=function(t){return t.reduce(function(t,n){for(var e in n)if(t[e])if(-1!==r.indexOf(e))t[e]=o({},t[e],n[e]);else if(-1!==d.indexOf(e)){var i=t[e]instanceof Array?t[e]:[t[e]],c=n[e]instanceof Array?n[e]:[n[e]];t[e]=i.concat(c)}else if(-1!==a.indexOf(e))for(var l in n[e])if(t[e][l]){var u=t[e][l]instanceof Array?t[e][l]:[t[e][l]],p=n[e][l]instanceof Array?n[e][l]:[n[e][l]];t[e][l]=u.concat(p)}else t[e][l]=n[e][l];else if("hook"==e)for(var m in n[e])t[e][m]=t[e][m]?s(t[e][m],n[e][m]):n[e][m];else t[e]=n[e];else t[e]=n[e];return t},{})},s=function(t,n){return function(){t&&t.apply(this,arguments),n&&n.apply(this,arguments)}};t.exports=i},"28c7":function(t,n){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clearable</td>\n<td>是否支持清除内容</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>editable</td>\n<td>是否可编辑</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>error</td>\n<td>错误信息</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>extra</td>\n<td>右边注释</td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>labelNumber</td>\n<td></td>\n<td>number</td>\n<td>5</td>\n</tr>\n<tr>\n<td>labelPosition</td>\n<td></td>\n<td>&#39;left&#39; | &#39;top&#39;</td>\n<td>5</td>\n</tr>\n<tr>\n<td>locale</td>\n<td></td>\n<td>object</td>\n<td></td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td>最大长度</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>moneyKeyboardAlign</td>\n<td>可选为 <code>'left'</code>, <code>'right'</code></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>moneyKeyboardHeader</td>\n<td></td>\n<td>any</td>\n<td>null</td>\n</tr>\n<tr>\n<td>moneyKeyboardWrapProps</td>\n<td></td>\n<td>object</td>\n<td></td>\n</tr>\n<tr>\n<td>name</td>\n<td>input元素的name属性</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>占位文字</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td>class 前缀</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixListCls</td>\n<td>list class 前缀</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>required</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>textAlign</td>\n<td></td>\n<td>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</td>\n<td>5</td>\n</tr>\n<tr>\n<td>title</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td></td>\n<td>&#39;&#39; | &#39;text&#39; | &#39;bankCard&#39; | &#39;phone&#39; | &#39;password&#39; | &#39;number&#39; | &#39;digit&#39; | &#39;money&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>文本内容</td>\n<td>string | number</td>\n<td></td>\n</tr>\n</tbody></table>\n"},"3f6b":function(t,n,e){t.exports={default:e("51b6"),__esModule:!0}},"41b2":function(t,n,e){"use strict";n.__esModule=!0;var o=e("3f6b"),r=d(o);function d(t){return t&&t.__esModule?t:{default:t}}n.default=r.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},"48a1":function(t,n){t.exports='<h1 id="输入框--m-input">输入框  m-input</h1>\n'},"4ab2":function(t,n,e){},"4f8a":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"code-box code-box-target"},[e("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),e("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),e("pre",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),e("ae-layout",[t._v("\n      "),e("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")]),t._v("\n  ")],1)],1)},r=[],d=e("d225"),a=e("b0b4"),i=e("308d"),s=e("6bb5"),c=e("4e2b"),l=e("9ab4"),u=e("8bbf"),p=e.n(u),m=e("65d9"),f=e.n(m),b=e("60a3"),h=function(t){function n(){var t;return Object(d["a"])(this,n),t=Object(i["a"])(this,Object(s["a"])(n).apply(this,arguments)),t.showCode=!1,t}return Object(c["a"])(n,t),Object(a["a"])(n,[{key:"copied",value:function(){this.$message.success("已复制")}}]),n}(p.a);l["b"]([Object(b["d"])(String)],h.prototype,"code",void 0),l["b"]([Object(b["d"])(String)],h.prototype,"markdown",void 0),h=l["b"]([f()({name:"CodeBox"})],h);var y=h,I=y,v=(e("06cd"),e("2877")),g=Object(v["a"])(I,o,r,!1,null,null,null);n["a"]=g.exports},"675d":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{attrs:{id:"basic"}},[e("markdown",{attrs:{source:t.title}})],1),t._m(0),e("demo2",{attrs:{id:"demo2"}}),e("demo3",{attrs:{id:"demo3"}}),t._m(1),e("markdown",{attrs:{source:t.props}})],1)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[e("span"),e("h2",[t._v("示例代码")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"markdown-body",attrs:{id:"props"}},[e("span"),e("h2",[t._v("属性说明")])])}],d=e("d225"),a=e("b0b4"),i=e("308d"),s=e("6bb5"),c=e("4e2b"),l=e("9ab4"),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},p=[],m='import Vue from \'vue\';\nimport Component from \'vue-class-component\';\nimport List from \'../../list\';\nimport WhiteSpace from \'../../white-space\';\nimport InputItem from \'../index\';\n\n@Component({\n  name: \'BasicInputExample\'\n})\nexport default class BasicInputExample extends Vue {\n\n  public componentDidMount() {\n    // this.autoFocusInst.focus();\n  }\n\n  public handleClick() {\n    this.inputRef.focus();\n  }\n\n  get inputRef(): any {\n    return this.$refs.inputRef as any;\n  }\n\n  get labelFocusInst(): any {\n    return this.$refs.labelFocusInst;\n  }\n\n  public render() {\n    return (\n        <div>\n          <List renderHeader={() => \'Customize to focus\'}>\n            <InputItem\n                clear\n                placeholder="auto focus"\n                ref="autoFocusInst"\n            >标题</InputItem>\n            <InputItem\n                clear\n                placeholder="click the button below to focus"\n                ref="inputRef"\n            >标题</InputItem>\n            <List.Item>\n              <div\n                  style={{width: \'100%\', color: \'#108ee9\', textAlign: \'center\'}}\n                  onClick={this.handleClick.bind(this)}>\n                click to focus\n              </div>\n            </List.Item>\n          </List>\n          <List renderHeader={() => \'Whether is controlled\'}>\n            <InputItem\n                placeholder="controled input"\n            >受控组件</InputItem>\n            <InputItem\n                defaultValue="Title"\n                placeholder="please input content"\n                data-seed="logId"\n            >非受控组件</InputItem>\n          </List>\n          <WhiteSpace/>\n          <List renderHeader={() => \'Click label to focus input\'}>\n            <InputItem\n                placeholder="click label to focus input"\n                ref="labelFocusInst"\n            >\n              <div onClick={() => this.labelFocusInst.focus()}>标题</div>\n            </InputItem>\n          </List>\n          <List title={\'Show clear\'}>\n            <InputItem\n                clearable\n                placeholder="displayed clear while typing"\n            >标题</InputItem>\n          </List>\n          <WhiteSpace/>\n          <List title="错误提示">\n            <InputItem error errorMessage="出错啦" title="带校验的输入框"/>\n          </List>\n          <List renderHeader={() => \'Number of words for title\'}>\n            <InputItem\n                placeholder="limited title length"\n                labelNumber={5}\n            >标题过长超过默认的5个字</InputItem>\n          </List>\n          <WhiteSpace/>\n          <List renderHeader={() => \'Custom title（text / image / empty)\'}>\n            <InputItem\n                placeholder="no label"\n            />\n            <InputItem\n                placeholder="title can be icon，image or text"\n            >\n              <div style={{\n                backgroundImage: \'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)\',\n                backgroundSize: \'cover\',\n                height: \'22px\',\n                width: \'22px\'\n              }}/>\n            </InputItem>\n          </List>\n          <WhiteSpace/>\n          <List renderHeader={() => \'Customize the extra content in the right\'}>\n            <InputItem\n                placeholder="0.00"\n                extra="¥"\n            >价格</InputItem>\n          </List>\n          <WhiteSpace/>\n          <List renderHeader={() => \'Format\'}>\n            <InputItem\n                value="8888 8888 8888 8888"\n                type="bankCard"\n            >银行卡</InputItem>\n            <InputItem\n                type="phone"\n                placeholder="186 1234 1234"\n            >手机号码</InputItem>\n            <InputItem\n                type="password"\n                placeholder="****"\n            >密码</InputItem>\n            <InputItem\n                type="number"\n                placeholder="click to show number keyboard"\n            >数字键盘</InputItem>\n            <InputItem\n                type="digit"\n                placeholder="click to show native number keyboard"\n            >数字键盘</InputItem>\n          </List>\n          <WhiteSpace/>\n          <List renderHeader={() => \'Not editable / Disabled\'}>\n            <InputItem\n                value="not editable"\n                editable={false}\n            >姓名</InputItem>\n            <InputItem\n                value="style of disabled `InputItem`"\n                disabled\n            >姓名</InputItem>\n          </List>\n        </div>\n    );\n  }\n}\n',f=e("25be"),b=e.n(f),h=e("8bbf"),y=e.n(h),I=e("65d9"),v=e.n(I),g=e("4f8a"),x=function(t){function n(){var t;return Object(d["a"])(this,n),t=Object(i["a"])(this,Object(s["a"])(n).apply(this,arguments)),t.code=m,t.md=b.a,t}return Object(c["a"])(n,t),n}(y.a);x=l["b"]([v()({name:"Demo2",components:{CodeBox:g["a"]}})],x);var w=x,C=w,k=e("2877"),_=Object(k["a"])(C,u,p,!1,null,null,null),O=_.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},L=[],P="import Vue from 'vue';\nimport Component from 'vue-class-component';\nimport List from '../../list';\nimport InputItem from '../index';\n\n// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题\n// https://github.com/ant-design/ant-design-mobile/issues/307\n// https://github.com/ant-design/ant-design-mobile/issues/163\nconst isIPhone = new RegExp('\\\\biPhone\\\\b|\\\\biPod\\\\b', 'i').test(window.navigator.userAgent);\nlet moneyKeyboardWrapProps;\nif (isIPhone) {\n  moneyKeyboardWrapProps = {\n    onTouchStart: e => e.preventDefault()\n  };\n}\n\n@Component({\n  name: 'H5NumberInputExample'\n})\nexport default class H5NumberInputExample extends Vue {\n\n  public state = {\n    type: 'money'\n  };\n\n  public render() {\n    const {type} = this.state;\n    return (\n      <div>\n        <List>\n          <InputItem\n            type={type}\n            value={100}\n            placeholder=\"start from left\"\n            clear\n            moneyKeyboardAlign=\"left\"\n            moneyKeyboardWrapProps={moneyKeyboardWrapProps}\n          >光标在左</InputItem>\n          <InputItem\n            type={type}\n            placeholder=\"start from right\"\n            clear\n            onChange={(v) => {\n              console.log('onChange', v);\n            }}\n            onBlur={(v) => {\n              console.log('onBlur', v);\n            }}\n            moneyKeyboardWrapProps={moneyKeyboardWrapProps}\n          >光标在右</InputItem>\n          <InputItem\n            type={type}\n            placeholder=\"money format\"\n            ref=\"input\"\n            onConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}\n            clear\n            moneyKeyboardWrapProps={moneyKeyboardWrapProps}\n          >数字键盘</InputItem>\n          <List.Item>\n            <div\n              style={{width: '100%', color: '#108ee9', textAlign: 'center'}}\n              onClick={() => (this.$refs.input as any).focus()}\n            >\n              click to focus\n            </div>\n          </List.Item>\n        </List>\n      </div>\n    );\n  }\n}\n",W=e("cc9e"),K=e.n(W),E=function(t){function n(){var t;return Object(d["a"])(this,n),t=Object(i["a"])(this,Object(s["a"])(n).apply(this,arguments)),t.code=P,t.md=K.a,t}return Object(c["a"])(n,t),n}(y.a);E=l["b"]([v()({name:"Demo3",components:{CodeBox:g["a"]}})],E);var H=E,S=H,A=Object(k["a"])(S,j,L,!1,null,null,null),M=A.exports,N=e("cd6e"),$=e("48a1"),B=e.n($),F=e("28c7"),D=e.n(F);y.a.use(N["a"]);var V=function(t){function n(){var t;return Object(d["a"])(this,n),t=Object(i["a"])(this,Object(s["a"])(n).apply(this,arguments)),t.title=B.a,t.props=D.a,t}return Object(c["a"])(n,t),Object(a["a"])(n,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),n}(y.a);V=l["b"]([v()({name:"ComponentDemo",components:{demo2:O,demo3:M}})],V);var R=V,z=R,J=(e("cd8f"),Object(k["a"])(z,o,r,!1,null,"c2df8bf0",null));n["default"]=J.exports},cc9e:function(t,n){t.exports='<h4 id="金额键盘">金额键盘</h4>\n'},cd8f:function(t,n,e){"use strict";var o=e("4ab2"),r=e.n(o);r.a},f893:function(t,n,e){t.exports={default:e("f921"),__esModule:!0}}}]);
//# sourceMappingURL=chunk-592a62ce.52c64f66.js.map