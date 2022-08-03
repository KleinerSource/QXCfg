var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
obj.data['splash_ad']['ad']['md5'] = "";
obj.data['splash_ad']['ad']['link_url'] = "";
obj.data['splash_ad']['ad']['sleep_time'] = 1;
obj.data['splash_ad']['ad']['media_url'] = "";
obj.data['splash_ad']['overtime'] = 1;
obj.data['settings']['NOTICE'] = "去广告 By KS";  // 提示
obj.data['settings']['UPDATE_DESCRIPTION'] = "CrackByKS";  // 更新摘要
obj.data['settings']['TESTFLIGHT_URL'] = "CrackByKS";
obj.data['settings']['INSTALLATION_URL'] = "CrackByKS";
body = JSON.stringify(obj);
$done({ body });