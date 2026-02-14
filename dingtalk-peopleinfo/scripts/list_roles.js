#!/usr/bin/env node
const cfg=require(path.join(os.homedir(), '.openclaw', 'openclaw.json'));

(async()=>{
  const appKey=cfg.channels.dingtalk.clientId;
  const appSecret=cfg.channels.dingtalk.clientSecret;
  const token=(await (await fetch(`https://oapi.dingtalk.com/gettoken?appkey=${appKey}&appsecret=${appSecret}`)).json()).access_token;
  const res=await (await fetch(`https://oapi.dingtalk.com/topapi/role/list?access_token=${token}`,{
    method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({size:200,offset:0})
  })).json();
  console.log(JSON.stringify(res,null,2));
})();
