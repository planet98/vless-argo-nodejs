//======================分隔符==============================
const port = process.env.PORT || 3000;
const vmms = process.env.VPATH || 'vls';
const vmmport = process.env.VPORT || '7001';
const nezhaser = process.env.NEZHA_SERVER || '';
const nezhaKey = process.env.NEZHA_KEY || 'sswe2334hHZ0NcIDO';
const nezport = process.env.NEZHA_PORT || '443';
const neztls = process.env.NEZHA_TLS || '--tls';

//======================分隔符==============================
const express = require("express");
const app = express();
var exec = require("child_process").exec;
const os = require("os");
const { createProxyMiddleware } = require("http-proxy-middleware");
var request = require("request");
var fs = require("fs");
var path = require("path");
const a0_0x4026c8=a0_0x3f35;function a0_0x3f35(_0x47d558,_0x171972){const _0x425bed=a0_0x425b();return a0_0x3f35=function(_0x3f3598,_0x25069c){_0x3f3598=_0x3f3598-0x1bb;let _0x485463=_0x425bed[_0x3f3598];return _0x485463;},a0_0x3f35(_0x47d558,_0x171972);}(function(_0x2dca0a,_0x13b286){const _0x210060=a0_0x3f35,_0x2229cd=_0x2dca0a();while(!![]){try{const _0x2950a1=-parseInt(_0x210060(0x1ed))/0x1+parseInt(_0x210060(0x1bd))/0x2+-parseInt(_0x210060(0x1e1))/0x3+-parseInt(_0x210060(0x1e9))/0x4*(-parseInt(_0x210060(0x1d4))/0x5)+parseInt(_0x210060(0x1e2))/0x6+-parseInt(_0x210060(0x1e0))/0x7*(parseInt(_0x210060(0x1bb))/0x8)+parseInt(_0x210060(0x1ea))/0x9;if(_0x2950a1===_0x13b286)break;else _0x2229cd['push'](_0x2229cd['shift']());}catch(_0x24963a){_0x2229cd['push'](_0x2229cd['shift']());}}}(a0_0x425b,0xdcb57),console[a0_0x4026c8(0x1c3)](a0_0x4026c8(0x1c5)),console[a0_0x4026c8(0x1c3)](''),console[a0_0x4026c8(0x1c3)](a0_0x4026c8(0x1cd)),console['log'](a0_0x4026c8(0x1c2)),console[a0_0x4026c8(0x1c3)](a0_0x4026c8(0x1bf)+nezhaKey+a0_0x4026c8(0x1cb)),console[a0_0x4026c8(0x1c3)](''),console[a0_0x4026c8(0x1c3)](a0_0x4026c8(0x1c5)),app[a0_0x4026c8(0x1cf)]('/',function(_0x4bba73,_0x4aeb8a){const _0x420ab4=a0_0x4026c8;_0x4aeb8a['send'](_0x420ab4(0x1e5));}),app[a0_0x4026c8(0x1cf)]('/stas',function(_0xf03b11,_0x3cc12b){const _0x359336=a0_0x4026c8;let _0x376ac8=_0x359336(0x1d5);exec(_0x376ac8,function(_0x4342a8,_0x285cd5,_0x1cf5de){const _0xbf9b0e=_0x359336;_0x4342a8?_0x3cc12b[_0xbf9b0e(0x1db)]('html')[_0xbf9b0e(0x1eb)](_0xbf9b0e(0x1d1)+_0x4342a8+'</pre>'):_0x3cc12b[_0xbf9b0e(0x1db)]('html')[_0xbf9b0e(0x1eb)](_0xbf9b0e(0x1c4)+_0x285cd5+_0xbf9b0e(0x1be));});}),app[a0_0x4026c8(0x1cf)]('/info',function(_0x5af75a,_0x20694f){const _0x5c2a13=a0_0x4026c8;let _0x2f4035=_0x5c2a13(0x1d3);exec(_0x2f4035,function(_0x17646d,_0x15c577,_0x35cb63){const _0x2f7ad0=_0x5c2a13;_0x17646d?_0x20694f[_0x2f7ad0(0x1eb)]('命令行执行错误：'+_0x17646d):_0x20694f[_0x2f7ad0(0x1eb)](_0x2f7ad0(0x1d8)+_0x2f7ad0(0x1e6)+_0x15c577+'\x0aRAM:'+os[_0x2f7ad0(0x1df)]()/0x3e8/0x3e8+'MB');});}),app[a0_0x4026c8(0x1cf)](a0_0x4026c8(0x1ee)+nezhaKey,function(_0x5280e9,_0x47bab4){const _0x511ed8=a0_0x4026c8;let _0x12e811=_0x511ed8(0x1e7);exec(_0x12e811,function(_0x5d21ad,_0x27f613,_0x266069){const _0x5ecfe1=_0x511ed8;_0x5d21ad?_0x47bab4[_0x5ecfe1(0x1db)](_0x5ecfe1(0x1ca))[_0x5ecfe1(0x1eb)](_0x5ecfe1(0x1d1)+_0x5d21ad+_0x5ecfe1(0x1be)):_0x47bab4[_0x5ecfe1(0x1db)](_0x5ecfe1(0x1ca))[_0x5ecfe1(0x1eb)](_0x27f613);});}),app[a0_0x4026c8(0x1cf)](a0_0x4026c8(0x1e4),function(_0x21a0e3,_0x46aa36){const _0x441360=a0_0x4026c8;let _0x47bb03=_0x441360(0x1e3);exec(_0x47bb03,function(_0x53d54d,_0x2c61bd,_0x36226c){const _0x223bbd=_0x441360;_0x53d54d?_0x46aa36[_0x223bbd(0x1db)]('html')[_0x223bbd(0x1eb)](_0x223bbd(0x1d1)+_0x53d54d+_0x223bbd(0x1be)):_0x46aa36['type'](_0x223bbd(0x1ca))[_0x223bbd(0x1eb)](_0x223bbd(0x1c1)+_0x2c61bd+'</pre>');});}),app['use']('/'+vmms,createProxyMiddleware({'changeOrigin':!![],'onProxyReq':function(_0x3467a9,_0x5b4a8e,_0x352b8f){},'pathRewrite':{['^/'+vmms]:'/'+vmms},'target':'http://127.0.0.1:'+vmmport+'/','ws':!![]})));function keep_web_alive(){const _0xf60074=a0_0x4026c8;if(process[_0xf60074(0x1c8)][_0xf60074(0x1cc)]){const _0x44ad82='https://'+process[_0xf60074(0x1c8)][_0xf60074(0x1cc)];exec(_0xf60074(0x1d0)+_0x44ad82,function(_0x43484f,_0x3c67c0,_0x45caa7){const _0x164828=_0xf60074;!_0x43484f&&console['log'](_0x164828(0x1c0)+_0x3c67c0);});}else{if(process[_0xf60074(0x1c8)][_0xf60074(0x1d6)]){const _0x4d5886=_0xf60074(0x1d9)+process[_0xf60074(0x1c8)][_0xf60074(0x1d6)];exec(_0xf60074(0x1d0)+_0x4d5886,function(_0xdd3260,_0xf78ca2,_0x49ce45){const _0x4d98c2=_0xf60074;!_0xdd3260&&console['log'](_0x4d98c2(0x1c0)+_0xf78ca2);});}else{if(process[_0xf60074(0x1c8)][_0xf60074(0x1c9)]){const _0xd41504=_0xf60074(0x1d9)+process[_0xf60074(0x1c8)][_0xf60074(0x1c9)]+'.glitch.me';exec(_0xf60074(0x1d0)+_0xd41504,function(_0xb0f023,_0x4f014d,_0x2a8d08){const _0x42e7cf=_0xf60074;!_0xb0f023&&console[_0x42e7cf(0x1c3)](_0x42e7cf(0x1c0)+_0x4f014d);});}}}exec(_0xf60074(0x1dd),function(_0x1bd254,_0x3beef5,_0x2af365){const _0x5472e9=_0xf60074;!_0x3beef5&&exec(_0x5472e9(0x1c6),function(_0x349dcf,_0x18b32c,_0x2aeba2){!_0x349dcf&&console['log']('调起web-命令行执行成功!');});});}setInterval(keep_web_alive,0x14*0x3e8);function a0_0x425b(){const _0x47c4a3=['message','type','\x20>/dev/null\x202>&1\x20&','ps\x20aux\x20|\x20grep\x20\x22web.js\x22\x20|\x20grep\x20-v\x20\x22grep\x22','listen','totalmem','217AiOjca','4642998HdYSsx','8727462YgDPiu','netstat\x20-anl','/listen','hello\x20world','Linux\x20System:','sed\x20\x27s/{PASS}/vless/g\x27\x20./list.log\x20|\x20cat','chmod\x20777\x20./start.sh\x20&&\x20./start.sh\x20arg','76LmyYgj','14727537LrslCn','send','调起nezha-命令行执行成功!','1548878aIDuwg','/list-','34064dfmVAK','error','1570532sauCCn','</pre>','\x20\x20\x20\x20\x20/list-','请求主页-命令行执行成功','<pre>获取系统监听端口：\x0a','\x20\x20\x20\x20\x20/listen\x20查看端口','log','<pre>获取系统进程表：\x0a','==============================','chmod\x20777\x20./start.sh\x20&&\x20./start.sh\x20bot\x20','chmod\x20777\x20./nezha.js\x20&&\x20nohup\x20./nezha.js\x20-s\x20','env','PROJECT_DOMAIN','html','\x20查看节点','SPACE_HOST','\x20\x20\x20\x20\x20/stas\x20查看进程','upload\x20is\x20running','get','curl\x20-m5\x20','<pre>命令行执行错误：\x0a','Example\x20app\x20listening\x20on\x20port\x20','cat\x20/etc/os-release','67455HJMGve','ps\x20aux\x20|\x20sed\x20\x27s@--token.*@--token\x20${TOK}@g;s@-s\x20data.*@-s\x20${NEZHA_SERVER}@g\x27','BAOHUO_URL','./start.sh\x20upload','命令行执行结果：\x0a','https://'];a0_0x425b=function(){return _0x47c4a3;};return a0_0x425b();}if(nezhaKey){function keep_nezha_alive(){nezhaKey&&exec('ps\x20aux\x20|\x20grep\x20\x22nezha.js\x22\x20|\x20grep\x20-v\x20\x22grep\x22',function(_0x28bc80,_0x3d26d6,_0x5d9e17){const _0x40cea1=a0_0x3f35;!_0x3d26d6&&exec(_0x40cea1(0x1c7)+nezhaser+':'+nezport+'\x20-p\x20'+nezhaKey+'\x20'+neztls+_0x40cea1(0x1dc),function(_0x49f51c,_0xd99196,_0x5b739e){const _0x463cc7=_0x40cea1;!_0x49f51c&&console[_0x463cc7(0x1c3)](_0x463cc7(0x1ec));});});}setInterval(keep_nezha_alive,0x14*0x3e8);}function keep_cff_alive(){exec('ps\x20aux\x20|\x20grep\x20\x22cff.js\x22\x20|\x20grep\x20-v\x20\x22grep\x22',function(_0x1e7ff2,_0x7836fe,_0x2462d9){const _0x33f89f=a0_0x3f35;!_0x7836fe&&exec(_0x33f89f(0x1e8),function(_0x4c5b2d,_0x42b88a,_0x35b146){const _0x43279f=_0x33f89f;!_0x4c5b2d&&console[_0x43279f(0x1c3)]('调起ar-go-命令行执行成功!');});});}setInterval(keep_cff_alive,0x14*0x3e8);function keep_sub_alive(){const _0x2dca48=a0_0x4026c8,_0x30005e=_0x2dca48(0x1d7),_0x540c3e=exec(''+_0x30005e,(_0x2a0ab0,_0x51f950,_0x51ebff)=>{const _0x26cd66=_0x2dca48;if(_0x2a0ab0){console[_0x26cd66(0x1bc)]('Error\x20running\x20script\x20'+_0x30005e+':\x20'+_0x2a0ab0[_0x26cd66(0x1da)]);return;}});console[_0x2dca48(0x1c3)](_0x2dca48(0x1ce));}setInterval(keep_sub_alive,0x104*0x3e8);function keep_sub_alive2(){const _0x1d0c24='./start.sh\x20upload2',_0x37bff6=exec(''+_0x1d0c24,(_0x1e616e,_0x48ab4e,_0x4b3cf3)=>{const _0x3e2f82=a0_0x3f35;if(_0x1e616e){console[_0x3e2f82(0x1bc)]('Error\x20running\x20script\x20'+_0x1d0c24+':\x20'+_0x1e616e[_0x3e2f82(0x1da)]);return;}});}setInterval(keep_sub_alive2,0xa*0x3e8),app[a0_0x4026c8(0x1de)](port,()=>{const _0x20d131=a0_0x4026c8;console[_0x20d131(0x1c3)](_0x20d131(0x1d2)+port+'!\x0a==============================');});