var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
obj.data['user']['is_vip'] = true;
obj.data['user']['promotion_days'] = 999;
obj.data['user']['promote_users_count'] = 520;
obj.data['user']['vip_expired_at'] = "2020-12-31T20:06:58.000+08:00";

body = JSON.stringify(obj);
$done({ body });