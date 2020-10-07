var body = $response.body;
var url = $request.url;

if (url.indexOf('/ad/getAll') != -1) {
	var obj = JSON.parse(body);
	obj.data.adList = [];
	body = JSON.stringify(obj);
} else if (url.indexOf('/user/profile') != -1) {
	var obj = JSON.parse(body);
  obj.data['user']['nickName'] = "Crack by KS";
  obj.data['user']['level'] = "30";
  obj.data['user']['achievementCount'] = "666";
	obj.data['user']['privilegeList'] = [{
    "id": null,
    "createTimeStr": "",
    "createTime": null,
    "updateTime": null,
    "effectObject": "video",
    "action": "play",
    "function": "originalPainting",
    "func": "originalPainting",
    "description": "解锁原画",
    "icon": "jiesuoyuanhua",
    "endTime": "2022-12-01T11:25:27.893+0000"
	}];
	obj.data['user']['vipMedal'] = [{
    "name": "大魔王",
    "endTime": "2022-12-01 09:02:28",
    "imgUrl": "http://img.rr.tv/cover/20200424/o_1587720799676.png",
    "id": 1,
    "isExpired": false
	}];
} else if (url.indexOf('/user/privilege/list') != -1) {
	var obj = JSON.parse(body);
	obj.data = [{
    "id": 1,
    "effectObject": "video",
    "action": "play",
    "function": "originalPainting",
    "func": "originalPainting",
    "description": "解锁原画",
    "icon": "jiesuoyuanhua",
    "endTime": 1667341767582
	}, {
		"id": 4,
		"effectObject": "video",
		"action": "play",
		"function": "noLimit",
		"func": "noLimit",
		"description": "看剧无限制",
		"icon": "kanjuwuxianzhi",
		"endTime": 1667341767582
	}, {
		"action": "play",
		"effectObject": "growth",
		"id": 37,
		"function": "0.4",
		"func": "0.4",
		"endTime": 1667341767582,
		"description": "看剧经验+40%",
		"icon": "jingyanzhijiacheng"
	}, {
		"action": "send",
		"effectObject": "danmu",
		"id": 43,
		"function": "superBarrageBlue",
		"func": "superBarrageBlue",
		"endTime": 1667341767582,
		"description": "超级弹幕",
		"icon": "chaojidanmu"
	}, {
		"action": "play",
		"effectObject": "video",
		"id": 23,
		"function": "noAd",
		"func": "noAd",
		"endTime": 1667341767582,
		"description": "看剧无广告",
		"icon": "kanjuwuguanggao"
	}];
}else if(url.indexOf('/rrtv-video/v4plus/season/detail') != -1){
	var obj = JSON.parse(body);

	obj.data['season']['feeMode'] = 'restriction';
}else if(url.indexOf('/priority_video_quality/get_priority_video_quality_config') != -1){
	var obj = JSON.parse(body);

	obj.data['sortedItems'] = [{
    "qualityDescription": "高清",
    "qualityCode": "SD",
    "canPlay": true,
    "initialQuality": true,
    "canShowVip": false
	},
  {
    "qualityDescription": "超清",
    "qualityCode": "HD",
    "canPlay": true,
    "initialQuality": true,
    "canShowVip": false
	},
 {
    "qualityDescription": "原画",
    "qualityCode": "OD",
    "canPlay": true,
    "initialQuality": true,
    "canShowVip": false
	},
 {
    "qualityDescription": "AI原画",
    "qualityCode": "AI_OD",
    "canPlay": true,
    "initialQuality": true,
    "canShowVip": true
	}];
}

body = JSON.stringify(obj);
$done({ body });