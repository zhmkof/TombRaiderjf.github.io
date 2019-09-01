$(document).ready(function(){

    createCard = function(data){
        var node=document.createElement('div');
        node.classList.add("col-lg-4");
        var panel = document.createElement("div");
        panel.classList.add("panel", "cards");
        if (data['menpai']== '0' || data['menpai']== '3' ||data['menpai']== '6'){
            panel.classList.add('panel-warning');
        }
        if (data['menpai']== '2' || data['menpai']== '5' ||data['menpai']== '11'){
            panel.classList.add('panel-success');
        }
        if (data['menpai']== '1' || data['menpai']== '8'){
            panel.classList.add('panel-danger');
        }
        if (data['menpai']== '3' || data['menpai']== '12' || data['menpai']== '10'){
            panel.classList.add('panel-info');
        }
        if (data['menpai']== '7' || data['menpai']== '4'){
            panel.classList.add('panel-default');
        }
        var heading = document.createElement("div");
        heading.classList.add("panel-heading");
        var headingH3 = document.createElement("h3");
        headingH3.classList.add("panel-title");
        headingH3.innerHTML = menpai_dict[data['menpai']] + " | " + data['rank'] + "级 | " + sex_dict[data['sex']];
        heading.appendChild(headingH3);
        heading.classList.add("panel-heading");
        body = document.createElement('div');
        body.classList.add("panel-body");
        var price = document.createElement('p');
        price.innerHTML = "价格：" + data['price'];
        body.appendChild(price);
        var blood = document.createElement('p');
        blood.innerHTML = "血量：" + data['blood'];
        body.appendChild(blood);
        var attribute = document.createElement('p');
        attribute .innerHTML = "属性：" + data['max_attribute'];
        body.appendChild(attribute);
        var equipment_score = document.createElement('p');
        equipment_score.innerHTML = "装备评分：" + data['score_equipment'];
        body.appendChild(equipment_score);
        var score_diamond = document.createElement('p');
        score_diamond.innerHTML = "宝石评分：" + data['score_diamond'];
        body.appendChild(score_diamond);
        var wuyi = document.createElement('p');
        wuyi.innerHTML = "武意等级：" + data['wuyi_level'];
        body.appendChild(wuyi);
        var shending= document.createElement('p');
        shending.innerHTML = "神鼎：" + parseInt(data['shending'] / 10) + "属性，" + data['shending'] % 10 + "体力";
        body.appendChild(shending);
        var ride = document.createElement('p');
        ride.innerHTML = "稀有坐骑：";
        if (data['ride'] == '0'){
            ride.innerHTML += "无";
        }
        else{
            for (var i=0;i<data['ride'].length;i++){
                ride.innerHTML += (ride_dict[data['ride'][i]] + " ");
            }
        }
        body.appendChild(ride);
        
        var clothes = document.createElement("p");
        clothes.innerHTML = "稀有时装：";
        if (data['clothes'] == '0'){
            clothes.innerHTML += "无";
        }
        else{
            for(var i=0;i<data['ride'].length;i++){
                clothes.innerHTML += (clothes_dict[data['clothes'][i]] + " ");
            }
        }
        body.appendChild(clothes);

        var wuyi = document.createElement('p');
        wuyi.innerHTML = "武意等级：" + data['wuyi_level'];
        body.appendChild(wuyi);
        
        var contact = document.createElement('p');
        contact.innerHTML = "联系方式：" + data['contact'];
        body.appendChild(contact);
        var buybtn = document.createElement('button');
        buybtn.classList.add('btn', 'btn-primary');
        buybtn.innerHTML = "立即购买";
        // buybtn.onclick(function(){

        // })
        body.appendChild(buybtn);
        

        panel.appendChild(heading);
        panel.appendChild(body);
        node.appendChild(panel);
        $("#goods").append(node);
    }

    ride_dict = {'a': "沧澜羽翼" , 'b': "金羽", 'c':"梦灵仙驹", 'd':"青翼战龙", 'e': "添福锦鳞", 'f':"水碧飞鸢", 'g':"绒雪神牛", 'h':"黑天马", 'i':"紫电", 'j':"月白龙马", 'k':"四喜送鲤台", 'l':"绝云焱龙", 'm':"熔岩魔犀", 'n':"绛紫飞鸢", 'o':"梦幻仙驹", 'p':"霸世羽龙"}
    clothes_dict = {"a": "龙凤呈祥" , "b": "龙凤遥相倚",  "c": "仙侣情缘", "d":"墨羽潜幽", "e": "锦衣醉画", "f": "枭龙霸铠", "g": "虎啸雄装", "h": "炎狼尊袍", "i": "鲤戏澜芳",  "j": "银霏染月"}
    attribute_dict = {"0": "image/冰.bmp", "1": "image/火.bmp", "2": "image/玄.bmp", "3": "image/毒.bmp"};
    menpai_dict = {"0": "少林","1":"明教", "2":"丐帮", "3": "武当", "4":"峨嵋", "5": "星宿", "6":"天龙", "7": "天山", "8": "逍遥", "10": "慕容", "11": "唐门", "12": "鬼谷"};
    sex_dict = {"0": "女", "1": "男"};
    SERVER_INFO = [
        {name:"西南电信一区",id:1,server:[{id:2021,name:"天蝎座"},{id:191,name:"蜀南竹海"},{id:209,name:"梅里雪山"},{id:209,name:"天池龙宫"},{id:68,name:"西双版纳"},{id:182,name:"香格里拉"},{id:182,name:"茶马古道"},{id:198,name:"剑门蜀道"},{id:198,name:"九寨沟"},{id:65,name:"黄果树"},{id:2020,name:"峨嵋山"},{id:191,name:"蝴蝶泉"},{id:209,name:"都江堰"},{id:1161,name:"千寻塔"},{id:198,name:"无量山"},{id:68,name:"阿紫"},{id:68,name:"甘露酒"},{id:1161,name:"普洱茶"},{id:1161,name:"功夫茶"},{id:1161,name:"平安扣"},{id:1161,name:"宝葫芦"},{id:1171,name:"相思河"},{id:1161,name:"忘忧谷"},{id:1171,name:"乐山大佛"},{id:1171,name:"束河古镇"},{id:1171,name:"朝天门"},{id:1171,name:"临江书院"},{id:1171,name:"鹤翼阵"},{id:2020,name:"第二食堂"},{id:1171,name:"棉花糖"},{id:1171,name:"铁莲子"},{id:2021,name:"巨蟹座"},{id:2021,name:"处女座"},{id:2020,name:"桃花阵"},{id:2021,name:"天蝎座"},{id:3048,name:"乾坤无极"},{id:2021,name:"雁南飞"},{id:3048,name:"玉楼春"},{id:3144,name:"金风玉露"}]},
        {name:"网通-无双网通",id:2,server:[{id:3192,name:"独孤求败"},{id:3192,name:"忘川花海"},{id:3161,name:"降龙伏虎"},{id:3192,name:"英雄本色"},{id:4036,name:"名扬天下"},{id:3161,name:"威震天下"},{id:4036,name:"龙战九州"},{id:4025,name:"紫电青霜"},{id:4025,name:"仗剑江湖"},{id:4036,name:"心心相印"},{id:4025,name:"壮志凌云"},{id:4025,name:"名震天下"},{id:4025,name:"呼风唤雨"},{id:4025,name:"一统江湖"},{id:4025,name:"群龙聚首"},{id:4036,name:"如日中天"},{id:3161,name:"霸者无双"},{id:4025,name:"倚天屠龙"},{id:3161,name:"九天揽月"},{id:4025,name:"阳关三叠"},{id:4036,name:"血战江湖"},{id:4025,name:"战无不胜"},{id:3161,name:"风雨同舟"},{id:4025,name:"龙争虎斗"},{id:4025,name:"厉兵秣马"},{id:4025,name:"武动乾坤"}]},
        {name:"南部电信二区",id:3,server:[{id:9140,name:"烟雨轩"},{id:188,name:"紫气东来"}]},
        {name:"网通-网通二区",id:4,server:[{id:1043,name:"太清宫"},{id:1042,name:"玄雷击杀"},{id:1042,name:"偃月阵"},{id:1043,name:"玫瑰花"},{id:1043,name:"爆米花"},{id:1042,name:"透骨钉"},{id:1042,name:"永恒"},{id:1043,name:"双子座"},{id:22,name:"许愿树"},{id:22,name:"段誉"},{id:2093,name:"锦绣中华"},{id:22,name:"长河落日"},{id:22,name:"将进酒"},{id:22,name:"灵魂战甲"},{id:22,name:"龙腾虎跃"}]},
        {name:"华东电信二区",id:5,server:[{id:1191,name:"五峰书院"},{id:3145,name:"天一阁"},{id:2202,name:"极冰凝杀"},{id:2202,name:"鱼鳞阵"},{id:2202,name:"女生宿舍"},{id:2202,name:"开心果"},{id:2202,name:"飞蝗石"},{id:2202,name:"盘龙"},{id:3145,name:"白羊座"},{id:3145,name:"瑶池仙境"},{id:2202,name:"彩云之南"},{id:2202,name:"王语嫣"},{id:3081,name:"回风舞雪"},{id:3081,name:"满江红"},{id:3081,name:"武魂传说"},{id:3081,name:"卧虎藏龙"}]},
        {name:"东部电信二区",id:6,server:[{id:1010,name:"金钱镖"},{id:1010,name:"金牛座"},{id:2020,name:"射手座"},{id:3081,name:"雪莲花"},{id:1010,name:"剑舞江南"},{id:3081,name:"沧浪亭"},{id:3081,name:"山河情"},{id:3081,name:"月光宝盒"}]},{name:"双线-超级双线",id:7,server:[{id:3200,name:"天龙"},{id:5024,name:"玄海"},{id:3202,name:"天下"},{id:5057,name:"江湖"},{id:3202,name:"红尘"},{id:3202,name:"盛世"},{id:5057,name:"战魂"},{id:5057,name:"雄霸"},{id:5057,name:"东方不败"},{id:5024,name:"笑傲"},{id:3202,name:"英雄"},{id:5057,name:"风云"},{id:3202,name:"无双"},{id:5057,name:"灭世"},{id:5016,name:"王权"}]},
        {name:"华东电信一区",id:8,server:[{id:1191,name:"天目山"},{id:137,name:"太湖仙岛"},{id:168,name:"三潭印月"},{id:1010,name:"东方明珠"},{id:1015,name:"断桥残雪"},{id:168,name:"外滩夜色"},{id:1015,name:"莲峰云海"},{id:154,name:"崇明春色"},{id:154,name:"枫桥夜泊"},{id:168,name:"虎丘剑池"},{id:1191,name:"风雨钟山"},{id:168,name:"黄浦江"},{id:1015,name:"钱塘江"},{id:149,name:"雨花台"},{id:168,name:"九华山"},{id:2202,name:"千岛湖"},{id:1191,name:"花果山"},{id:168,name:"雁荡山"},{id:188,name:"琅琊山"},{id:154,name:"双龙洞"},{id:155,name:"上海滩"},{id:155,name:"烟雨楼"},{id:65,name:"普陀山"},{id:1010,name:"城隍庙"},{id:154,name:"雷峰塔"},{id:65,name:"玄武岛"},{id:1010,name:"燕子坞"},{id:188,name:"阿朱"},{id:172,name:"冥界"},{id:1191,name:"游坦之"},{id:1191,name:"状元红"},{id:1191,name:"猴儿酒"},{id:168,name:"西湖龙井"},{id:2202,name:"行者无双"},{id:3145,name:"玉如意"},{id:3145,name:"龙凤镯"},{id:172,name:"连理枝"},{id:3145,name:"月牙泉"},{id:1191,name:"天目山"},{id:3145,name:"东林书院"},{id:3145,name:"浔阳楼"}]},
        {name:"网通-华北网通一区",id:9,server:[{id:2082,name:"不冻泉"},{id:101,name:"紫禁之巅"},{id:22,name:"白云古洞"},{id:1138,name:"蓬莱仙境"},{id:1053,name:"云冈石窟"},{id:118,name:"桃园仙谷"},{id:1138,name:"马踏飞燕"},{id:2093,name:"塞外蟠龙"},{id:1138,name:"水泊梁山"},{id:22,name:"少室晴雪"},{id:111,name:"八达岭"},{id:1053,name:"少林寺"},{id:118,name:"五台山"},{id:118,name:"山海关"},{id:118,name:"沂蒙山"},{id:118,name:"悬空寺"},{id:118,name:"北戴河"},{id:111,name:"颐和园"},{id:22,name:"光明顶"},{id:1015,name:"雁门关"},{id:118,name:"二锅头"},{id:118,name:"雄黄酒"},{id:1053,name:"香露茶"},{id:2093,name:"盖碗茶"},{id:1015,name:"玉扳指"},{id:1015,name:"吉祥锁"},{id:1015,name:"鸣沙山"},{id:1053,name:"什刹海"},{id:1015,name:"太行山"},{id:1015,name:"居庸关"},{id:2093,name:"清风楼"},{id:1053,name:"漳南书院"},{id:1138,name:"晋阳书院"},{id:1015,name:"秦皇古道"},{id:1015,name:"雁行阵"},{id:2082,name:"足球场"},{id:2093,name:"玉蜂针"},{id:4036,name:"摩羯座"},{id:4036,name:"天秤座"},{id:2082,name:"不冻泉"},{id:2082,name:"熊猫龙龙"}]},
        {name:"中西部电信",id:10,server:[{id:188,name:"六脉神剑"},{id:182,name:"五毒秘传"},{id:68,name:"一阳指"},{id:68,name:"齐眉棍"},{id:68,name:"罗汉拳"},{id:68,name:"龙爪手"},{id:188,name:"泥鳅功"},{id:182,name:"金钟罩"},{id:182,name:"弹指神通"},{id:182,name:"真武七截阵"},{id:1171,name:"李庄古镇"},{id:2020,name:"太阿剑"},{id:68,name:"苏星河"},{id:2020,name:"李秋水"},{id:68,name:"云中鹤"},{id:2020,name:"地界"},{id:2020,name:"竹叶青"},{id:1171,name:"关中书院"},{id:2021,name:"黑血神针"},{id:2021,name:"盛世长安"}]},
        {name:"双线-人气专区",id:11,server:[{id:5084,name:"金戌迎瑞"},{id:5087,name:"天下会武"}]},
        {name:"双线-老友专区",id:12,server:[{id:5024,name:"光辉岁月"},{id:5038,name:"一世长安"},{id:5060,name:"英雄战歌"},{id:5060,name:"天外之王"}]},
        {name:"网通-超级网通",id:13,server:[{id:4025,name:"独步江湖"},{id:3161,name:"王者至尊"},{id:4036,name:"号令天下"},{id:4025,name:"深海迷踪"},{id:3161,name:"刀剑如梦"},{id:4025,name:"怒海惊涛"},{id:4036,name:"皇图霸业"},{id:4025,name:"天下王城"},{id:3161,name:"盖世豪杰"},{id:4036,name:"行云流水"},{id:4025,name:"剑锁江山"}]},
        {name:"双线-纵横双线",id:14,server:[{id:5069,name:"天下为棋"},{id:5072,name:"只手遮天"},{id:5072,name:"倾覆江湖"},{id:5072,name:"无法无天"},{id:5076,name:"不见不散"},{id:5076,name:"修罗场"},{id:5076,name:"绣春刀"},{id:5076,name:"那年花开"},{id:5075,name:"醉梦江南"},{id:5069,name:"武意纵横"},{id:5083,name:"一梦十年"},{id:5088,name:"守望江湖"},{id:5089,name:"在水一方"},{id:5090,name:"铜锣湾"},{id:5091,name:"宁为我道"},{id:5092,name:"师门逆徒"},{id:5093,name:"逐梦江湖"},{id:5099,name:"以梦为马"},{id:5098,name:"愿君共白首"},{id:5120,name:"惜君青玉裳"}]},
        {name:"唯美电信",id:15,server:[{id:155,name:"乔峰归来"},{id:3144,name:"绝世唐门"},{id:3144,name:"暴雨梨花"},{id:3128,name:"烽火连城"},{id:3144,name:"仙人指路"},{id:3145,name:"狂战天下"},{id:3128,name:"乱世狂刀"},{id:3128,name:"盖世英雄"},{id:3128,name:"雷霆万钧"},{id:3128,name:"醉枕江山"},{id:3128,name:"乱世枭雄"},{id:5038,name:"莫失莫忘"}]},
        {name:"华中电信一区",id:16,server:[{id:1171,name:"巧克力"},{id:188,name:"赤壁怀古"},{id:182,name:"洞庭秋月"},{id:188,name:"白马禅寺"},{id:182,name:"湘江夜色"},{id:188,name:"庐山飞瀑"},{id:198,name:"秀峰梦境"},{id:65,name:"黄鹤楼"},{id:188,name:"滕王阁"},{id:162,name:"张家界"},{id:162,name:"聚贤庄"},{id:198,name:"檀香扇"},{id:198,name:"浏阳河"},{id:198,name:"芙蓉镇"},{id:198,name:"天心阁"},{id:198,name:"石鼓书院"},{id:198,name:"南湖书院"},{id:198,name:"劫火焚杀"},{id:1171,name:"八卦阵"},{id:1171,name:"巧克力"},{id:2021,name:"烤鱼片"},{id:2021,name:"花装弩"},{id:2021,name:"时空裂缝"},{id:2020,name:"天帝城"},{id:2020,name:"梦回连营"},{id:2021,name:"逐鹿中原"},{id:2020,name:"乔峰"},{id:2020,name:"铁血丹心"}]},
        {name:"双线-周年庆专区",id:17,server:[{id:5075,name:"三生三世"},{id:5074,name:"十里桃花"},{id:5074,name:"醉梦年华"},{id:5084,name:"流金岁月"},{id:5087,name:"韶梦年华"},{id:5096,name:"瑞鹤千秋"},{id:5097,name:"鹤舞九霄"}]},
        {name:"至尊电信",id:18,server:[{id:3081,name:"唯我独尊"},{id:3085,name:"万敌不侵"},{id:3085,name:"破武修心"},{id:3085,name:"天荒古境"},{id:9140,name:"破天一剑"},{id:2202,name:"披荆斩棘"},{id:3085,name:"天外江湖"},{id:2202,name:"剑舞春秋"},{id:3085,name:"叱咤风云"},{id:3085,name:"豪情壮志"},{id:2202,name:"傲视群雄"},{id:2202,name:"碧海苍穹"},{id:3079,name:"雪舞燃情"},{id:3081,name:"龙腾万里"},{id:9140,name:"春花秋月"},{id:3085,name:"凤鸣九天"},{id:154,name:"替天行道"},{id:154,name:"御龙在天"},{id:3085,name:"缘定三生"},{id:3079,name:"剑气如虹"},{id:154,name:"赤胆忠心"},{id:3085,name:"乱世群雄"},{id:3079,name:"铁血战歌"},{id:3085,name:"仁者无敌"},{id:3085,name:"龙啸九州"},{id:3125,name:"龙战九天"},{id:3128,name:"气壮山河"},{id:3145,name:"海纳百川"},{id:3128,name:"锦绣河山"},{id:3145,name:"江山如画"},{id:3128,name:"步步为营"},{id:3125,name:"游龙戏凤"},{id:3145,name:"一战倾城"},{id:3128,name:"秋水无痕"},{id:3125,name:"猎命江湖"},{id:3125,name:"烽火连天"},{id:3145,name:"横刀立马"},{id:3145,name:"盛世天下"},{id:3125,name:"普天同庆"},{id:3128,name:"问鼎天下"},{id:3128,name:"月满西楼"},{id:3125,name:"群雄逐鹿"},{id:3125,name:"精忠报国"},{id:3125,name:"天龙客栈"}]},
        {name:"网通-东北网通一区",id:19,server:[{id:22,name:"潜龙之渊"},{id:22,name:"林海雪原"},{id:2082,name:"长白天池"},{id:85,name:"官马溶洞"},{id:85,name:"白山黑水"},{id:85,name:"雾凇翠柏"},{id:2093,name:"松花江畔"},{id:134,name:"鸭绿江"},{id:22,name:"兴安岭"},{id:134,name:"凤凰山"},{id:85,name:"珍宝岛"},{id:2093,name:"奉天府"},{id:22,name:"水晶湖"},{id:2082,name:"老虎滩"},{id:2093,name:"中国结"},{id:2093,name:"金元宝"},{id:2093,name:"镜泊湖"},{id:1138,name:"玉佛苑"},{id:1138,name:"大乘寺"},{id:22,name:"银冈书院"},{id:1138,name:"会宁府"},{id:1138,name:"七星阵"},{id:1138,name:"恋曲2009"},{id:1138,name:"血滴子"},{id:1138,name:"水瓶座"},{id:1138,name:"玉虚幻境"},{id:22,name:"潜龙之渊"},{id:22,name:"秋叶红"},{id:22,name:"剑胆琴心"},{id:2093,name:"弹指神功"}]},
        {name:"东部电信",id:20,server:[{id:38,name:"九阴真经"},{id:154,name:"玉女心经"},{id:65,name:"北冥神功"},{id:65,name:"雁翎枪"},{id:9140,name:"七伤拳"},{id:9140,name:"大力金刚指"},{id:38,name:"蓝砂手"},{id:172,name:"亢龙有悔"},{id:1010,name:"葵花宝典"},{id:155,name:"飞龙在天"},{id:47,name:"神龙摆尾"},{id:47,name:"含沙射影"},{id:47,name:"斗转星移"},{id:47,name:"寒冰掌"},{id:9140,name:"蛤蟆功"},{id:9140,name:"莫邪剑"},{id:154,name:"贪狼剑"},{id:155,name:"慕容博"},{id:9140,name:"无崖子"},{id:9140,name:"叶二娘"},{id:172,name:"鸠摩智"},{id:149,name:"天界"},{id:149,name:"枯荣长老"},{id:1010,name:"烧刀子"},{id:149,name:"仙人醉"},{id:2020,name:"花雕"},{id:1010,name:"冻顶乌龙"},{id:1015,name:"云雾茶"},{id:149,name:"珊瑚珠"},{id:1010,name:"富贵竹"},{id:149,name:"自习室"},{id:3145,name:"高山流水"},{id:3145,name:"扬子江"},{id:1010,name:"天宁寺"},{id:149,name:"2008"},{id:149,name:"万松书院"},{id:1010,name:"寒山寺"},{id:1010,name:"长蛇阵"},{id:1161,name:"栖霞山"},{id:1161,name:"同桌的你"}]},
        {name:"网通-网通全国一区",id:21,server:[{id:3192,name:"楼兰夜雪"},{id:3192,name:"紫霞小筑"},{id:2082,name:"世外桃源"},{id:4036,name:"伊兰雪山"},{id:3192,name:"妙笔仙音"},{id:3192,name:"玉门叠翠"},{id:2093,name:"桃花扇"},{id:2082,name:"圣火宫"},{id:4036,name:"君临天下"},{id:3192,name:"踏雪无痕"},{id:1053,name:"天外飞仙"},{id:3161,name:"大风歌"},{id:1053,name:"丝绸之路"},{id:3161,name:"漫天花雨"},{id:1053,name:"平湖秋月"},{id:3161,name:"勿忘江湖"},{id:1053,name:"寻缘镜"},{id:3161,name:"天下桃李"},{id:3161,name:"心有灵犀"},{id:1053,name:"仗剑天涯"},{id:3161,name:"刀光剑影"},{id:1053,name:"嫦娥奔月"},{id:1053,name:"花开盛世"},{id:3161,name:"雁门烽火"},{id:3161,name:"气吞山河"},{id:1053,name:"兵临城下"},{id:4036,name:"河南"},{id:1053,name:"龙门石窟"},{id:4036,name:"河南江湖"},{id:3161,name:"踏雪寻梅"},{id:3161,name:"雪山飞狐"},{id:1053,name:"功成名就"},{id:3161,name:"风花雪月"},{id:1053,name:"古韵华筝"},{id:3161,name:"凤舞九天"},{id:3161,name:"秦时明月"},{id:1053,name:"风起云涌"},{id:3161,name:"龙腾盛世"},{id:3161,name:"义薄云天"},{id:3161,name:"谁与争锋"},{id:3192,name:"天下无双"},{id:3192,name:"荷塘月色"},{id:4036,name:"清风明月"},{id:4036,name:"梧桐细雨"},{id:3192,name:"黄沙百战"}]},
        {name:"超级电信",id:22,server:[{id:3125,name:"天下第一"},{id:3128,name:"倾国倾城"},{id:3128,name:"龙吟九霄"},{id:3128,name:"百战江湖"},{id:3128,name:"怒火连斩"},{id:3125,name:"定海神针"},{id:3125,name:"天涯明月"},{id:3125,name:"剑啸江湖"},{id:3128,name:"纵横沙场"},{id:3128,name:"长风破浪"},{id:3128,name:"风云天下"},{id:3128,name:"天地无极"},{id:3128,name:"大悲手印"},{id:3128,name:"再战江湖"},{id:3128,name:"侠影无踪"},{id:5024,name:"万剑归宗"}]},
        {name:"天下会武-天下会武专区",id:23,server:[{id:9066,name:"争霸赛一区"}]},
        {name:"双线-鸿运大区",id:24,server:[{id:5094,name:"鸿运连年"},{id:5095,name:"鸿运当头"}]},
        {name:"电信全国一区",id:25,server:[{id:2201,name:"听香水榭"},{id:2202,name:"琴音小筑"},{id:3048,name:"星移无痕"},{id:2021,name:"大燕韵章"},{id:3048,name:"轩缘殿"},{id:3081,name:"水调歌头"},{id:3081,name:"曲径通幽"},{id:3081,name:"无量玉璧"},{id:2202,name:"燕蝶梦溪"},{id:3048,name:"念奴娇"},{id:2202,name:"灵泉仙池"},{id:2202,name:"清影花海"},{id:2202,name:"苍山雪"},{id:2021,name:"洱海月"},{id:2021,name:"曼陀园"},{id:3081,name:"四绝庄"},{id:2202,name:"剑湖宫"},{id:2020,name:"半城烟沙"},{id:2020,name:"所向披靡"},{id:3048,name:"劈星斩月"},{id:154,name:"气贯长虹"},{id:3081,name:"梅花三弄"},{id:154,name:"洛神图"},{id:154,name:"天山雪莲"},{id:154,name:"清风怡江"},{id:3016,name:"仙侣情缘"},{id:3048,name:"寒玉谷"},{id:154,name:"夜西湖"},{id:3079,name:"傲剑凌云"},{id:3081,name:"仙羽凝月"},{id:3079,name:"九转天机"},{id:3081,name:"素缘辞"},{id:3081,name:"英雄志"},{id:3079,name:"极光流萤"},{id:154,name:"四海金兰"},{id:3079,name:"赤雪玄凤"},{id:3079,name:"情比金坚"},{id:3079,name:"龙游天下"},{id:3079,name:"天长地久"},{id:3048,name:"鹰击长空"},{id:3048,name:"横扫千军"},{id:3081,name:"侠骨柔情"},{id:3081,name:"虎啸龙吟"},{id:3079,name:"花好月圆"},{id:3048,name:"指点江山"},{id:3048,name:"华山论剑"},{id:3048,name:"肝胆相照"},{id:3048,name:"金戈铁马"},{id:3048,name:"对酒当歌"},{id:3048,name:"惊涛骇浪"},{id:3048,name:"南征北战"},{id:3048,name:"百步穿杨"},{id:3048,name:"戎马无疆"},{id:3081,name:"风云再起"},{id:2202,name:"剑指苍穹"},{id:3048,name:"金玉满堂"},{id:3048,name:"笑傲江湖"},{id:3048,name:"天若有情"},{id:3048,name:"开天辟地"},{id:3079,name:"金榜题名"},{id:3048,name:"雄霸天下"},{id:3079,name:"龙飞凤舞"},{id:2202,name:"群雄争霸"},{id:3079,name:"烟雨清荷"},{id:3085,name:"九州神龙"},{id:3079,name:"王者归来"},{id:3079,name:"龙凤呈祥"},{id:3085,name:"纵横四海"},{id:3081,name:"龙吟九天"},{id:3085,name:"醉卧沙场"},{id:154,name:"排山倒海"},{id:3085,name:"斗破苍穹"},{id:154,name:"鱼跃龙门"},{id:9140,name:"小桥流水"},{id:3085,name:"翠竹幽幽"},{id:9140,name:"浪迹天涯"},{id:2202,name:"独步天下"},{id:9140,name:"渔舟唱晚"},{id:9140,name:"曲院风荷"},{id:2202,name:"剑啸山河"},{id:3079,name:"九天惊雷"},{id:154,name:"千里共婵娟"}]},
        {name:"华南电信一区",id:26,server:[{id:149,name:"九宫阵"},{id:162,name:"天涯海角"},{id:162,name:"桂林山水"},{id:47,name:"漓江春水"},{id:65,name:"九曲溪径"},{id:65,name:"鼓浪闻涛"},{id:172,name:"双溪明月"},{id:65,name:"丹霞晨曦"},{id:168,name:"武夷山"},{id:1161,name:"七星岩"},{id:65,name:"五指山"},{id:188,name:"丹霞山"},{id:172,name:"罗浮山"},{id:172,name:"清源山"},{id:172,name:"黄龙洞"},{id:47,name:"百花洲"},{id:47,name:"阿碧"},{id:188,name:"聚宝盆"},{id:2202,name:"象鼻山"},{id:2202,name:"灵龟塔"},{id:1161,name:"南华禅寺"},{id:1191,name:"东坡书院"},{id:1191,name:"隐贤山庄"},{id:149,name:"九宫阵"},{id:149,name:"牛肉干"},{id:2202,name:"梅花镖"},{id:1191,name:"深渊战场"},{id:2202,name:"狮子座"},{id:1191,name:"琼华殿"},{id:9140,name:"熊猫天天"},{id:188,name:"秋水长天"},{id:9140,name:"观沧海"},{id:2021,name:"纵横天下"},{id:188,name:"金刚经"}]},
        {name:"网通-唯美网通",id:27,server:[{id:134,name:"月落西山"},{id:134,name:"水月洞天"},{id:4036,name:"武林至尊"},{id:134,name:"战魂不灭"},{id:134,name:"烽烟四起"},{id:5038,name:"血战八方"},{id:5038,name:"浮生若梦"}]},
        {name:"网通-华北网通二区",id:28,server:[{id:2082,name:"木婉清"},{id:2082,name:"碧云天"},{id:2082,name:"龙腾九天"},{id:2093,name:"山盟海誓"}]},
        {name:"网通-移动宽带",id:29,server:[{id:2202,name:"白鹭洲"}]},
        {name:"双线-唯美双线",id:30,server:[{id:5013,name:"天命"},{id:5057,name:"傲世"},{id:5016,name:"追命"},{id:5016,name:"乾坤"},{id:5016,name:"绝杀"},{id:3202,name:"龙吟"},{id:5024,name:"洛神"},{id:5057,name:"狂龙"},{id:5024,name:"纵横"},{id:5024,name:"豪杰"},{id:3202,name:"无极"},{id:5024,name:"至尊"},{id:5024,name:"辉煌"},{id:5057,name:"放纵"},{id:3202,name:"宿命"},{id:3202,name:"决战"},{id:5057,name:"巅峰"},{id:5016,name:"龙啸"},{id:5024,name:"皓月"},{id:5057,name:"苍穹"},{id:5038,name:"不忘初心"},{id:5024,name:"逐鹿"},{id:5024,name:"雷霆"},{id:3202,name:"无忧"},{id:5038,name:"烟雨"},{id:5038,name:"王者"},{id:5038,name:"天涯"},{id:5024,name:"星辰"},{id:5038,name:"踏雪"},{id:5024,name:"宠爱一生"},{id:3202,name:"天仙"},{id:3200,name:"倾心"},{id:5016,name:"幻影"},{id:3200,name:"释放"},{id:5016,name:"阡陌"},{id:3202,name:"纵情"},{id:3200,name:"千与千寻"},{id:5057,name:"勿忘心安"},{id:5060,name:"赤焰"},{id:5038,name:"烽火"},{id:5057,name:"千秋殿"},{id:5060,name:"无涯海"},{id:5060,name:"炎罗天"},{id:5060,name:"冰雪奇缘"},{id:5060,name:"长歌"},{id:5065,name:"一代宗师"},{id:5065,name:"英雄剑"},{id:5065,name:"醉沙场"},{id:5065,name:"战江山"},{id:5065,name:"似水流年"},{id:5072,name:"矢志不渝"},{id:5068,name:"三世情缘"},{id:5068,name:"相濡以沫"}]},
        {name:"西北电信一区",id:31,server:[{id:1161,name:"梨花针"},{id:198,name:"楼兰古城"},{id:209,name:"大漠孤烟"},{id:209,name:"敦煌飞天"},{id:209,name:"昆仑山"},{id:198,name:"火焰山"},{id:198,name:"星宿海"},{id:1161,name:"夜明珠"},{id:1171,name:"镇北堡"},{id:1171,name:"兰山书院"},{id:1161,name:"梨花针"},{id:2021,name:"虚竹"}]},
        {name:"南部电信",id:32,server:[{id:3145,name:"万山宗"},{id:172,name:"九阳真经"},{id:47,name:"凌波微步"},{id:162,name:"白虹剑"},{id:162,name:"辟邪剑谱"},{id:162,name:"玄冥神掌"},{id:162,name:"逍遥游"},{id:162,name:"生死符"},{id:47,name:"一指禅"},{id:155,name:"冰蚕掌"},{id:65,name:"乾坤大挪移"},{id:162,name:"无影脚"},{id:1010,name:"龙泉剑"},{id:65,name:"天机棒"},{id:47,name:"鱼肠剑"},{id:47,name:"丁春秋"},{id:47,name:"17173"},{id:155,name:"岳老三"},{id:155,name:"人界"},{id:47,name:"高粱白"},{id:155,name:"老白干"},{id:1010,name:"太白饮"},{id:1191,name:"铁观音"},{id:1191,name:"寂寞高手"},{id:1191,name:"摇钱树"},{id:1010,name:"鸳鸯佩"},{id:1191,name:"相逢桥"},{id:1010,name:"阳春白雪"},{id:2020,name:"越秀山"},{id:2020,name:"亚龙湾"},{id:9140,name:"明秀园"},{id:1010,name:"榕城书院"},{id:2020,name:"广济桥"},{id:1010,name:"锋矢阵"},{id:1010,name:"篮球馆"},{id:2020,name:"冰淇淋"},{id:1010,name:"金蛇锥"},{id:1010,name:"双鱼座"},{id:3145,name:"沙场点兵"},{id:188,name:"潇湘夜雨"}]},
        {name:"网通-网通专区",id:33,server:[{id:1138,name:"百泉书院"},{id:22,name:"杏花村"},{id:1043,name:"玄慈"},{id:1043,name:"君山银针"},{id:1042,name:"碧螺春"},{id:1043,name:"太祖长拳"},{id:1043,name:"紫霞秘籍"},{id:85,name:"打狗棒法"},{id:14,name:"易筋经"},{id:85,name:"独孤九剑"},{id:111,name:"落英剑法"},{id:14,name:"太极剑法"},{id:134,name:"小无相功"},{id:14,name:"八卦掌"},{id:1043,name:"达摩棍"},{id:111,name:"狮子吼"},{id:2093,name:"梯云纵"},{id:14,name:"铁砂掌"},{id:2093,name:"拈花指"},{id:111,name:"般若掌"},{id:22,name:"九阴白骨爪"},{id:134,name:"擒拿手"},{id:134,name:"穿云刀"},{id:2093,name:"孔雀翎"},{id:85,name:"碧血剑"},{id:85,name:"干将剑"},{id:14,name:"双截棍"},{id:2093,name:"萧远山"},{id:1043,name:"天山童姥"},{id:134,name:"段延庆"},{id:14,name:"薛慕华"},{id:111,name:"修罗"},{id:85,name:"妖界"},{id:85,name:"杜康"},{id:85,name:"女儿红"},{id:1042,name:"比翼鸟"},{id:1042,name:"三生石"},{id:1043,name:"问情崖"},{id:1043,name:"汉宫秋月"},{id:1042,name:"大明湖"},{id:1042,name:"金石滩"},{id:1042,name:"万佛园"},{id:1042,name:"避暑山庄"},{id:1138,name:"百泉书院"},{id:1042,name:"嵩阳书院"}]}];

    tl_link = "http://tl.cyg.changyou.com/goods/char_detail?serial_num=";
    $.ajax({
        url: 'http://47.102.140.114/TL_changyige/getInformation.php',
        dataType:'json',//数据传输的格式是json
        success:function(response){
            console.log(response);
            var number = Object.keys(response).length;
            var data = []
            for (var i=0;i<number;i++){
                temp = {}
                temp['menpai'] = response[i]['menpai'];
                temp["价格"] = response[i]['price'];
                temp["血量"] = response[i]['blood'];
                temp["属性攻击"] = response[i]['max_attribute'];
                temp["宝石评分"] = response[i]['score_diamond'];
                temp["装备评分"] = response[i]['score_equipment'];
                temp["id"] = response[i]['id'];
                temp['武意'] = response[i]['wuyi_level'];
            }
            createCard(response[0]);
        }
    });
    
});

