#!/usr/bin/env node
const cfg=require(path.join(os.homedir(), '.openclaw', 'openclaw.json'));

(async()=>{
  const roleId=process.argv[2];
  if(!roleId){
    console.error('Usage: node scripts/list_role_members.js <role_id>');
    process.exit(1);
  }
  const appKey=cfg.channels.dingtalk.clientId;
  const appSecret=cfg.channels.dingtalk.clientSecret;
  const token=(await (await fetch(`https://oapi.dingtalk.com/gettoken?appkey=${appKey}&appsecret=${appSecret}`)).json()).access_token;
  const res=await (await fetch(`https://oapi.dingtalk.com/topapi/role/simplelist?access_token=${token}`,{
    method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({role_id: Number(roleId), offset:0, size:200})
  })).json();
  console.log(JSON.stringify(res,null,2));
})();
