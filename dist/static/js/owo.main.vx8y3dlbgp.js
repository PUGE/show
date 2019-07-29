// Sun Jul 28 2019 17:25:39 GMT+0800 (GMT+08:00)

"use strict";

// 存储页面基本信息
var owo = {
  // 页面默认入口 如果没有设置 则取第一个页面为默认页面
  entry: "home",
  // 全局方法变量
  tool: {},
  // 框架状态变量
  state: {}
};
/*
  存储每个页面的函数
  键名：页面名称
  键值：方法列表
*/

owo.script = {
  "home": {
    "template": {
      "line": {
        "prop": {
          "class": "button-item",
          ":click": "owo.go('font', 'rotateCubeLeftOut', 'rotateCubeLeftIn', 'rotateCubeRightOut', 'rotateCubeRightIn')",
          "text": "文字字体"
        }
      },
      "line1": {
        "prop": {
          "class": "button-item",
          ":click": "owo.go('enter', 'rotateFall', 'scaleUp', 'rotateFall', 'scaleUp')",
          "text": "入场效果"
        }
      },
      "line2": {
        "prop": {
          "class": "button-item",
          ":click": "owo.go('switch', 'rotateFall', 'scaleUp', 'rotateFall', 'scaleUp')",
          "text": "页面切换效果"
        }
      },
      "line3": {
        "prop": {
          "class": "button-item",
          ":click": "owo.go('button', 'flipOutRight', 'flipInLeft&&delay500', 'flipOutLeft', 'flipInRight&&delay500')",
          "text": "按钮"
        }
      },
      "line4": {
        "prop": {
          "class": "button-item",
          ":click": "owo.go('swiper', 'flipOutRight', 'flipInLeft&&delay500', 'flipOutLeft', 'flipInRight&&delay500')",
          "text": "轮播图"
        }
      },
      "line5": {
        "prop": {
          "class": "button-item",
          ":click": "owo.go('dimensional', 'rotateCarouselLeftOut&&ontop', 'rotateCarouselLeftIn', 'rotateCarouselRightOut&&ontop', 'rotateCarouselRightIn')",
          "text": "3D/VR"
        }
      }
    }
  },
  "button": {
    "created": function created() {
      new IScroll(this.$el, {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
      });
    },
    "template": {
      "line": {
        "prop": {
          "class": "button-item",
          "text": "单线按钮"
        }
      },
      "colorLine": {
        "prop": {
          "class": "button-item",
          "text": "边框按钮"
        }
      },
      "color": {
        "prop": {
          "class": "button-item",
          "text": "炫彩按钮"
        }
      },
      "3d": {
        "prop": {
          "class": "button-item",
          "text": "立体按钮"
        }
      },
      "waterRipple": {
        "created": function created() {
          function createRipple() {
            //Create Ripple
            var ripple = document.createElement("div");
            ripple.className = "ripple-effect"; //Add Ripple to document

            this.appendChild(ripple);
            console.log(event); //Position Ripple

            ripple.style.top = event.offsetY - ripple.offsetWidth / 2 + "px";
            ripple.style.left = event.offsetX - ripple.offsetHeight / 2 + "px";
            ripple.addEventListener("animationend", destroyRipple, false);
            ripple.addEventListener("webkitAnimationEnd", destroyRipple, false);
            ripple.addEventListener("oAnimationEnd", destroyRipple, false);
            ripple.addEventListener("MSAnimationEnd", destroyRipple, false);
          }

          function destroyRipple() {
            this.parentElement.removeChild(this);
          }

          this.$el.addEventListener('mousedown', createRipple, false); // this.$el.addEventListener('touchstart', createRipple, false)
        },
        "prop": {
          "class": "button-item",
          "text": "水波纹特效"
        }
      }
    }
  },
  "font": {
    "created": function created() {
      new IScroll(this.$el, {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
      });
    }
  },
  "switch": {
    "created": function created() {
      new IScroll(this.$el, {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
      });
    },
    "template": {
      "line": {
        "prop": {
          "text": "向右移出",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'moveToLeft', 'moveFromRight', 'moveToRight', 'moveFromLeft')"
        }
      },
      "line1": {
        "prop": {
          "text": "向下移出",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'moveToTop', 'moveFromBottom', 'moveToBottom', 'moveFromTop')"
        }
      },
      "line2": {
        "prop": {
          "text": "向右淡入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'fade', 'moveFromRight', 'fade', 'moveFromLeft')"
        }
      },
      "line3": {
        "prop": {
          "text": "向下淡入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'fade', 'moveFromBottom', 'fade', 'moveFromTop')"
        }
      },
      "line4": {
        "prop": {
          "text": "向右淡入2",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'moveToLeftFade', 'moveFromRightFade', 'moveToRightFade', 'moveFromLeftFade')"
        }
      },
      "line5": {
        "prop": {
          "text": "向下淡入2",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'moveToTopFade', 'moveFromBottomFade', 'moveToBottomFade', 'moveFromTopFade')"
        }
      },
      "line6": {
        "prop": {
          "text": "向后淡出/向左移入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'scaleDown', 'moveFromRight', 'scaleDown', 'moveFromLeft')"
        }
      },
      "line7": {
        "prop": {
          "text": "向后淡出/向上移入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'scaleDown', 'moveFromBottom', 'scaleDown', 'moveFromTop')"
        }
      },
      "line8": {
        "prop": {
          "text": "向后淡出/向前淡入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'scaleDown', 'scaleUpDown', 'scaleDown', 'scaleUp')"
        }
      },
      "line9": {
        "prop": {
          "text": "向左移出/向前淡入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'moveToLeft', 'scaleUp', 'moveToRight', 'scaleUp')"
        }
      },
      "line10": {
        "prop": {
          "text": "向上移出/向前淡入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'moveToTop', 'scaleUp', 'moveToBottom', 'scaleUp')"
        }
      },
      "line11": {
        "prop": {
          "text": "向后移出/向前移入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'scaleDownCenter', 'scaleUpCenter&&delay400', 'scaleDownCenter', 'scaleUpCenter&&delay400')"
        }
      },
      "line12": {
        "prop": {
          "text": "左侧吸附/向左移入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateRightSideFirst', 'moveFromRight&&delay200', 'rotateLeftSideFirst', 'moveFromLeft&&delay200')"
        }
      },
      "line13": {
        "prop": {
          "text": "下侧吸附/向下移入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateTopSideFirst', 'moveFromTop&&delay200', 'rotateBottomSideFirst', 'moveFromBottom&&delay200')"
        }
      },
      "line14": {
        "prop": {
          "text": "向右翻转/向左翻转",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'flipOutRight', 'flipInLeft&&delay500', 'flipOutLeft', 'flipInRight&&delay500')"
        }
      },
      "line15": {
        "prop": {
          "text": "向下翻转/向向翻转",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'flipOutTop', 'flipInBottom&&delay500', 'flipOutBottom', 'flipInTop&&delay500')"
        }
      },
      "line16": {
        "prop": {
          "text": "向后螺旋/向前螺旋",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateOutNewspaper', 'rotateInNewspaper&&delay500', 'rotateOutNewspaper', 'rotateInNewspaper&&delay500')"
        }
      },
      "line17": {
        "prop": {
          "text": "向下掉落/向前移入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateFall', 'scaleUp', 'rotateFall', 'scaleUp')"
        }
      },
      "line18": {
        "prop": {
          "text": "向左推出/向左移入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotatePushLeft', 'moveFromRight&&ontop', 'rotatePushRight', 'moveFromLeft&&ontop')"
        }
      },
      "line19": {
        "prop": {
          "text": "向上推出/向上移入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotatePushTop', 'moveFromBottom&&ontop', 'rotatePushBottom', 'moveFromTop&&ontop')"
        }
      },
      "line20": {
        "prop": {
          "text": "向左推出/向左推入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotatePushLeft', 'rotatePullRight&&ontop', 'rotatePushRight', 'rotatePullLeft&&ontop')"
        }
      },
      "line21": {
        "prop": {
          "text": "向上推出/向上推入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotatePushTop', 'rotatePullBottom&&ontop', 'rotatePushBottom', 'rotatePullTop&&ontop')"
        }
      },
      "line22": {
        "prop": {
          "text": "向左转动/向左转动",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateRoomLeftOut&&ontop', 'rotateRoomLeftIn', 'rotateRoomRightOut&&ontop', 'rotateRoomRightIn')"
        }
      },
      "line23": {
        "prop": {
          "text": "向上转动/向上转动",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateRoomTopOut&&ontop', 'rotateRoomTopIn', 'rotateRoomBottomOut&&ontop', 'rotateRoomBottomIn')"
        }
      },
      "line24": {
        "prop": {
          "text": "向右扭转/向右扭转",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateCubeLeftOut', 'rotateCubeLeftIn', 'rotateCubeRightOut', 'rotateCubeRightIn')"
        }
      },
      "line25": {
        "prop": {
          "text": "向上扭转/向上扭转",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateCubeTopOut', 'rotateCubeTopIn', 'rotateCubeBottomOut', 'rotateCubeBottomIn')"
        }
      },
      "line26": {
        "prop": {
          "text": "向左飞出/向左飞入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateCarouselLeftOut&&ontop', 'rotateCarouselLeftIn', 'rotateCarouselRightOut&&ontop', 'rotateCarouselRightIn')"
        }
      },
      "line27": {
        "prop": {
          "text": "向上飞出/向左飞入",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateCarouselTopOut&&ontop', 'rotateCarouselTopIn', 'rotateCarouselBottomOut&&ontop', 'rotateCarouselBottomIn')"
        }
      },
      "line28": {
        "prop": {
          "text": "向左翻转/向左翻转",
          "class": "button-item",
          ":click": "owo.go('exhibition', 'rotateSidesOut&&ontop', 'rotateSidesIn&&delay200', 'rotateSidesOut&&ontop', 'rotateSidesIn&&delay200')"
        }
      }
    }
  },
  "exhibition": {
    "template": {
      "swiper": {
        "created": function created() {
          new Swiper(this.$el, {
            autoplay: true,
            pagination: {
              el: '.swiper-pagination'
            }
          });
        },
        "prop": {
          "class": "swiper-item"
        }
      }
    }
  },
  "swiper": {
    "created": function created() {
      new IScroll(this.$el, {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
      });
    },
    "template": {
      "swiper": {
        "created": function created() {
          new Swiper(this.$el, {
            autoplay: true,
            pagination: {
              el: '.swiper-pagination'
            }
          });
        },
        "prop": {
          "class": "swiper-item",
          "name": "swiper",
          "src": "./src/module/swiper.owo"
        }
      },
      "flip": {
        "data": {
          "isfilp": false
        },
        "created": function created() {
          if (this.prop.direction == 'y') {
            this.query('.front')[0].style.transform = 'rotateX(180deg)';
            this.query('.back')[0].style.transform = 'rotateX(0deg)';
          } else {
            this.query('.front')[0].style.transform = 'rotateY(180deg)';
            this.query('.back')[0].style.transform = 'rotateY(0deg)';
          }
        },
        "filp": function filp() {
          // 判断横向还是竖向
          if (this.prop.direction == 'y') {
            if (this.data.isfilp) {
              this.query('.front')[0].style.transform = 'rotateX(180deg)';
              this.query('.back')[0].style.transform = 'rotateX(0deg)';
            } else {
              this.query('.front')[0].style.transform = 'rotateX(0deg)';
              this.query('.back')[0].style.transform = 'rotateX(180deg)';
            }
          } else {
            if (this.data.isfilp) {
              this.query('.front')[0].style.transform = 'rotateY(180deg)';
              this.query('.back')[0].style.transform = 'rotateY(0deg)';
            } else {
              this.query('.front')[0].style.transform = 'rotateY(0deg)';
              this.query('.back')[0].style.transform = 'rotateY(180deg)';
            }
          }

          this.data.isfilp = !this.data.isfilp;
        },
        "prop": {
          "direction": "x"
        }
      },
      "flip1": {
        "data": {
          "isfilp": false
        },
        "created": function created() {
          if (this.prop.direction == 'y') {
            this.query('.front')[0].style.transform = 'rotateX(180deg)';
            this.query('.back')[0].style.transform = 'rotateX(0deg)';
          } else {
            this.query('.front')[0].style.transform = 'rotateY(180deg)';
            this.query('.back')[0].style.transform = 'rotateY(0deg)';
          }
        },
        "filp": function filp() {
          // 判断横向还是竖向
          if (this.prop.direction == 'y') {
            if (this.data.isfilp) {
              this.query('.front')[0].style.transform = 'rotateX(180deg)';
              this.query('.back')[0].style.transform = 'rotateX(0deg)';
            } else {
              this.query('.front')[0].style.transform = 'rotateX(0deg)';
              this.query('.back')[0].style.transform = 'rotateX(180deg)';
            }
          } else {
            if (this.data.isfilp) {
              this.query('.front')[0].style.transform = 'rotateY(180deg)';
              this.query('.back')[0].style.transform = 'rotateY(0deg)';
            } else {
              this.query('.front')[0].style.transform = 'rotateY(0deg)';
              this.query('.back')[0].style.transform = 'rotateY(180deg)';
            }
          }

          this.data.isfilp = !this.data.isfilp;
        },
        "prop": {
          "direction": "y"
        }
      }
    }
  },
  "dimensional": {
    "created": function created() {},
    "turn": function turn(url) {
      window.location.href = url;
    },
    "template": {
      "line": {
        "prop": {
          "class": "button-item",
          ":click": "owo.script[owo.activePage].turn('https://owo.ink/public/9b82a8bb1b9f6f69f6d9a19f04c74b1a/')",
          "text": "模型"
        }
      },
      "line1": {
        "prop": {
          "class": "button-item",
          ":click": "owo.script[owo.activePage].turn('https://owo.ink/public/61327c295dc4ac1c181ba7a9b7cfb443/')",
          "text": "全景图片"
        }
      },
      "line2": {
        "prop": {
          "class": "button-item",
          ":click": "owo.script[owo.activePage].turn('https://puge-10017157.cos.ap-shanghai.myqcloud.com/show/vr/index.html')",
          "text": "VR"
        }
      },
      "line3": {
        "prop": {
          "class": "button-item",
          ":click": "owo.script[owo.activePage].turn('https://puge-10017157.cos.ap-shanghai.myqcloud.com/show/vr/360.html')",
          "text": "全景图片2"
        }
      },
      "line4": {
        "prop": {
          "class": "button-item",
          ":click": "owo.script[owo.activePage].turn('https://puge-10017157.cos.ap-shanghai.myqcloud.com/show/model/index.html')",
          "text": "3D模型"
        }
      },
      "line5": {
        "prop": {
          "class": "button-item",
          ":click": "owo.script[owo.activePage].turn('https://puge-10017157.cos.ap-shanghai.myqcloud.com/show/face/demos/threejs/headControls/index.html')",
          "text": "3D模型"
        }
      }
    }
  },
  "enter": {
    "created": function created() {
      new IScroll(this.query('.scroll-box')[0], {
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
      });
    },
    "animate": function animate(name) {
      owo.tool.animate(name, this.query('.show-logo')[0]);
    }
  }
};

"use strict";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/* 方法合集 */var _owo={/* 对象合并方法 */assign:function assign(a,b){var newObj={};for(var key in a){newObj[key]=a[key];}for(var key in b){newObj[key]=b[key];}return newObj;},/* 运行页面初始化方法 */runCreated:function runCreated(pageFunction){// 确保created事件只被执行一次
if(pageFunction["_isCreated"]){if(!pageFunction.show)return;pageFunction.show.apply(_owo.assign(pageFunction,{data:pageFunction.data,activePage:window.owo.activePage}));}else{pageFunction["_isCreated"]=true;if(!pageFunction.created)return;pageFunction.created.apply(_owo.assign(pageFunction,{data:pageFunction.data,activePage:window.owo.activePage}));}}/* owo事件处理 */ // 参数1: 当前正在处理的dom节点
// 参数2: 当前正在处理的模块名称
// 参数3: 当前正在处理的模块根dom
};_owo.handleEvent=function(tempDom,templateName){var activePage=window.owo.script[owo.activePage];if(tempDom.attributes){for(var ind=0;ind<tempDom.attributes.length;ind++){var attribute=tempDom.attributes[ind];// 判断是否为owo的事件
// ie不支持startsWith
if(attribute.name[0]==':'){var eventName=attribute.name.slice(1);var eventFor=attribute.textContent;switch(eventName){case'show':{// 初步先简单处理吧
var temp=eventFor.replace(/ /g,'');// 取出条件
var condition=temp.split("==");if(activePage.data[condition[0]]!=condition[1]){tempDom.style.display='none';}break;}default:{// 处理事件 使用bind防止闭包
tempDom["on"+eventName]=function(event){// 复制eventFor防止污染
var eventForCopy=eventFor;// 判断页面是否有自己的方法
var newPageFunction=window.owo.script[window.owo.activePage];// console.log(this.attributes)
if(templateName&&templateName!==owo.activePage){// 如果模板注册到newPageFunction中，那么证明模板没有script那么直接使用eval执行
if(newPageFunction.template)newPageFunction=newPageFunction.template[templateName];}// 待优化可以单独提出来
// 取出参数
var parameterArr=[];var parameterList=eventForCopy.match(/[^\(\)]+(?=\))/g);if(parameterList&&parameterList.length>0){// 参数列表
parameterArr=parameterList[0].split(',');// 进一步处理参数
for(var i=0;i<parameterArr.length;i++){var parameterValue=parameterArr[i].replace(/(^\s*)|(\s*$)/g,"");// console.log(parameterValue)
// 判断参数是否为一个字符串
if(parameterValue.charAt(0)==='"'&&parameterValue.charAt(parameterValue.length-1)==='"'){parameterArr[i]=parameterValue.substring(1,parameterValue.length-1);}if(parameterValue.charAt(0)==="'"&&parameterValue.charAt(parameterValue.length-1)==="'"){parameterArr[i]=parameterValue.substring(1,parameterValue.length-1);}// console.log(parameterArr[i])
}}eventForCopy=eventFor.replace(/\(.*\)/,'');// console.log(newPageFunction, eventForCopy)
// 如果有方法,则运行它
if(newPageFunction&&newPageFunction[eventForCopy]){// 绑定window.owo对象
newPageFunction.$event=event;newPageFunction[eventForCopy].apply(newPageFunction,parameterArr);}else{// 如果没有此方法则交给浏览器引擎尝试运行
eval(eventFor);}};}}}}}// 判断是否有子节点需要处理
if(tempDom.children){// 递归处理所有子Dom结点
for(var i=0;i<tempDom.children.length;i++){// 获取子节点实例
var childrenDom=tempDom.children[i];// 每个子节点均要判断是否为模块
if(childrenDom.attributes['template']&&childrenDom.attributes['template'].textContent){// 如果即将遍历进入模块 设置即将进入的模块为当前模块
// 获取模块的模块名
_owo.handleEvent(childrenDom,childrenDom.attributes['template'].textContent);}else{_owo.handleEvent(childrenDom,templateName);}}}else{console.info('元素不存在子节点!');console.info(tempDom);}};_owo.getarg=function(url){// 获取URL #后面内容
if(!url)return null;var arg=url.split("#");return arg[1]?arg[1].split('?')[0]:null;};// 页面资源加载完毕事件
_owo.showPage=function(){// 取出URL地址判断当前所在页面
var pageArg=_owo.getarg(window.location.hash);// 从配置项中取出程序入口
var page=pageArg?pageArg:owo.entry;if(page){var entryDom=document.querySelector('.ox[template="'+page+'"]');if(entryDom){// 显示主页面
entryDom.style.display='block';window.owo.activePage=page;_owo.handlePage(window.owo.script[page],entryDom);_owo.handleEvent(entryDom,null);}else{console.error('入口文件设置错误,错误值为: ',entryDom);}}else{console.error('未设置程序入口!');}// 设置当前页面为活跃页面
owo.state.newUrlParam=_owo.getarg(document.URL);};/*
  页面跳转方法
  参数1: 需要跳转到页面名字
  参数2: 离开页面动画
  参数3: 进入页面动画
*/owo.go=function(pageName,inAnimation,outAnimation,backInAnimation,backOutAnimation,param){// console.log(owo.script[pageName])
owo.script[pageName]._animation={"in":inAnimation,"out":outAnimation,"forward":true};var paramString='';if(param&&_typeof(param)=='object'){paramString+='?';// 生成URL参数
for(var paramKey in param){paramString+=paramKey+'='+param[paramKey]+'&';}// 去掉尾端的&
paramString=paramString.slice(0,-1);}// 如果有返回动画那么设置返回动画
if(backInAnimation&&backOutAnimation){owo.script[owo.activePage]._animation={"in":backInAnimation,"out":backOutAnimation,"forward":false};}window.location.href=paramString+"#"+pageName;};// url发生改变事件
_owo.hashchange=function(e){// 这样处理而不是直接用event中的URL，是因为需要兼容IE
owo.state.oldUrlParam=owo.state.newUrlParam;owo.state.newUrlParam=_owo.getarg(document.URL);// console.log(owo.state.oldUrlParam, owo.state.newUrlParam)
// 如果旧页面不存在则为默认页面
if(!owo.state.oldUrlParam)owo.state.oldUrlParam=owo.entry;var newUrlParam=owo.state.newUrlParam;// 如果没有跳转到任何页面则跳转到主页
if(newUrlParam===undefined){newUrlParam=owo.entry;}// 如果没有发生页面跳转则不需要进行操作
// 进行页面切换
switchPage(owo.state.oldUrlParam,newUrlParam);};// ios的QQ有BUG 无法触发onhashchange事件
if(/iPhone\sOS.*QQ[^B]/.test(navigator.userAgent)){window.onpopstate=_owo.hashchange;}else{window.onhashchange=_owo.hashchange;}// 隐藏旧页面，显示新页面
function dispalyEffect(oldDom,newDom){if(oldDom){// 隐藏掉旧的节点
oldDom.style.display='none';}// 查找页面跳转后的page
newDom.style.display='block';}// 切换页面动画
function animation(oldDom,newDom,animationIn,animationOut,forward){// 动画延迟
var delay=0;// 获取父元素
var parentDom=newDom.parentElement;if(!oldDom){console.error('旧页面不存在!');}oldDom.addEventListener("animationend",oldDomFun);newDom.addEventListener("animationend",newDomFun);oldDom.style.position='absolute';newDom.style.display='block';newDom.style.position='absolute';// 给即将生效的页面加上“未来”标识
if(forward){newDom.classList.add('owo-animation-forward');}else{oldDom.classList.add('owo-animation-forward');}// document.body.style.overflow = 'hidden'
parentDom.style.perspective='1200px';oldDom.classList.add('owo-animation');animationIn.forEach(function(value){//判断是否为延迟属性
if(value.startsWith('delay')){var tempDelay=parseInt(value.slice(5));if(delay<tempDelay)delay=tempDelay;}oldDom.classList.add('o-page-'+value);});newDom.classList.add('owo-animation');animationOut.forEach(function(value){if(value.startsWith('delay')){var tempDelay=parseInt(value.slice(5));if(delay<tempDelay)delay=tempDelay;}newDom.classList.add('o-page-'+value);});// 旧DOM执行函数
function oldDomFun(e){// 排除非框架引起的结束事件
if(e.target.getAttribute('template')){// 移除监听
oldDom.removeEventListener('animationend',oldDomFun,false);// 延迟后再清除，防止动画还没完成
setTimeout(function(){oldDom.style.display='none';// console.log(oldDom)
oldDom.style.position='';oldDom.classList.remove('owo-animation');oldDom.classList.remove('owo-animation-forward');parentDom.style.perspective='';// 清除临时设置的class
animationIn.forEach(function(value){oldDom.classList.remove('o-page-'+value);});},delay);}}// 新DOM执行函数
function newDomFun(){// 移除监听
newDom.removeEventListener('animationend',newDomFun,false);// 延迟后再清除，防止动画还没完成
setTimeout(function(){// 清除临时设置的style
newDom.style.position='';newDom.classList.remove('owo-animation');newDom.classList.remove('owo-animation-forward');animationOut.forEach(function(value){newDom.classList.remove('o-page-'+value);});},delay);}}// 切换页面前的准备工作
function switchPage(oldUrlParam,newUrlParam){var oldPage=oldUrlParam?oldUrlParam.split('&')[0]:owo.entry;var newPage=newUrlParam?newUrlParam.split('&')[0]:owo.entry;// console.log(oldPage, newPage)
var oldDom=document.querySelector('.ox[template="'+oldPage+'"]');var newDom=document.querySelector('.ox[template="'+newPage+'"]');if(!newDom){console.error('页面不存在!');return;}// console.log(owo.state.animation)
// 判断是否有动画效果
if(!owo.script[newPage]._animation)owo.script[newPage]._animation={};// 直接.in会在ie下报错
var animationIn=owo.script[newPage]._animation['in'];var animationOut=owo.script[newPage]._animation['out'];if(animationIn||animationOut){// 如果没用动画参数则使用默认效果
if(!animationIn||!animationOut){dispalyEffect(oldDom,newDom);return;}owo.state.animation={};animation(oldDom,newDom,animationIn.split('&&'),animationOut.split('&&'),owo.state.animation['forward']);}else{dispalyEffect(oldDom,newDom);}window.owo.activePage=newPage;_owo.handleEvent(newDom,null);_owo.handlePage(window.owo.script[newPage],newDom);}/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */_owo.ready=function(){//这个函数返回whenReady()函数
var funcs=[];//当获得事件时，要运行的函数
//当文档就绪时,调用事件处理程序
function handler(e){// 确保事件处理程序只运行一次
if(window.owo.state.isRrady)return;window.owo.state.isRrady=true;//如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
if(e.type==='onreadystatechange'&&document.readyState!=='complete'){return;}// 运行所有注册函数
for(var i=0;i<funcs.length;i++){funcs[i].call(document);}funcs=null;}//为接收到的任何事件注册处理程序
if(document.addEventListener){document.addEventListener('DOMContentLoaded',handler,false);document.addEventListener('readystatechange',handler,false);//IE9+
window.addEventListener('load',handler,false);}else if(document.attachEvent){document.attachEvent('onreadystatechange',handler);window.attachEvent('onload',handler);}//返回whenReady()函数
return function whenReady(fn){if(window.owo.state.isRrady){fn.call(document);}else{funcs.push(fn);}};}();// 执行页面加载完毕方法
_owo.ready(_owo.showPage);/**
 * 赋予节点动画效果
 * @param  {string} name 动画效果名称
 * @param  {dom} dom 节点
 */owo.tool.animate=function(name,dom){dom.classList.add(name);dom.classList.add('owo-animated');// 待优化可以单独提出绑定方法
dom.addEventListener('animationend',animateEnd);function animateEnd(){// 待优化 感觉不需要这样
dom.classList.remove(name);dom.classList.remove('owo-animated');}};/* 运行页面所属的方法 */_owo.handlePage=function(newPageFunction,entryDom){// console.log(entryDom)
newPageFunction['$el']=entryDom;// 快速选择器
newPageFunction['query']=function(str){return this.$el.querySelectorAll(str);};/* 判断页面是否有自己的方法 */if(!newPageFunction)return;// console.log(newPageFunction)
// 如果有created方法则执行
if(newPageFunction.created){_owo.runCreated(newPageFunction);}// debugger
// 判断页面是否有下属模板,如果有运行所有模板的初始化方法
for(var key in newPageFunction.template){var templateScript=newPageFunction.template[key];// 待修复,临时获取方式,这种方式获取到的dom不准确
var childDom=entryDom.querySelectorAll('[template="'+key+'"]')[0];if(!childDom){console.error('组件丢失！');continue;}// 递归处理
_owo.handlePage(templateScript,childDom);}};