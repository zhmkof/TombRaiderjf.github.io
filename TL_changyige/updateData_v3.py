#!/usr/bin/python
# -*- coding: UTF-8 -*-

# Version 3 加入坐骑时装数据

import sys
from bs4 import BeautifulSoup
import time
from datetime import datetime
import requests
import random
import MySQLdb
import json
import re


# clothes_dict = {"龙凤呈祥": "a", "龙凤遥相倚": "b", "仙侣情缘": "c", "墨羽潜幽": "d", "锦衣醉画": "e", "枭龙霸铠": "f", "虎啸雄装": "g",
# "炎狼尊袍": "h", "鲤戏澜芳": "i", "银霏染月": "j"}

clothes_dict = {10124637: "a", 10125199: "b", 10125028: "c", 10124724: "c", 10124607: "d", 10125133: "d", 10125055: "e", 10124405: "f", 10124404: "g", \
10124403: "h", 10124542: "i", 10125108: "j", 10125165: "k", 10124647: "l", 10125187: "m"}

ride_dict = {"沧澜羽翼": "a", "金羽": "b", "梦灵仙驹": "c", "青翼战龙": "d", "添福锦鳞": "e", "水碧飞鸢": "f", "绒雪神牛": "g", "黑天马": "h", "紫电": "i", \
    "月白龙马": "j", "四喜送鲤台": "k", "绝云焱龙": "l", "熔岩魔犀": "m", "绛紫飞鸢": "n", "梦幻仙驹": "o", "霸世羽龙": "p", "鹊暝墨羽": "q", "鹊歌锦羽": "r", "绮梦蝶": "s"}


menpai_dict = {"少林": 0, "明教": 1, "丐帮": 2, "武当": 3, "峨嵋": 4, "星宿": 5 ,"天龙": 6, "天山": 7, "逍遥": 8, "慕容": 10, "唐门":11, "鬼谷": 12}

sex_dict = {"女": 0, "男": 1}


def updateId(sale):
    ids = {}
    cl = {}
    for j in range(1, 1000):
        flag = updateUrl(raw_url[sale] + str(j), ids)
        if flag == False:
            break
    print("total data ", len(ids))
    return ids


def updateUrl(url, dic):
    header = {
     'User-Agent': random.choice(agentHeaders)
    }
    while(True):
        html = requests.get(url, headers=header)
        if html.status_code == 200:
            break
        time.sleep(1)
    soup = BeautifulSoup(html.content, "html.parser")
    goods = soup.find_all('li', class_='role-item')
    if goods is None:
        return False
    for item in goods:
        url_this = item.find('a', class_='r-img').get('href')
        id = url_this.split("=")[1] 
        price = item.find('p', class_='price').get_text()[1:]
        if int(price) >= 500:
            dic[id] = price
    time.sleep(1)
    return True


# load the user-agent file into a list
def LoadUserAgents(uafile):
    uas = []
    with open(uafile, 'rb') as uaf:
        for ua in uaf.readlines():
            if ua:
                uas.append(ua.strip()[:-1])
    random.shuffle(uas)
    return uas


def deleteData(id):
    sql = "delete from goods where id=" + id
    try:
        cursor.execute(sql)
        db.commit()
    except:
        db.rollback()


def addData(id, sale):
    url = baseUrl + id
    # print(url)
    header = {
     'User-Agent': random.choice(agentHeaders)
    }
    html = requests.get(url, headers=header)
    if html.status_code == 200:
        index_data = html.text.find('charObj')
        to_data = html.text.find(';', index_data)
        data = html.text[index_data+10: to_data]
        dict_data = json.loads(data)  # str转为dict
        sex = str(dict_data['sex'])
        menpai = str(dict_data['menpai'])
        rank = str(dict_data['level'])
        score_equipment = str(dict_data['equipScore'])
        chonglou = "0"
        if dict_data['CLNum'] != 0:
            chonglou = "1"
        wuyi_level = str(dict_data['martialDB']['martialLevel'])
        score_diamond = str(dict_data['gemJinJieScore'])
        blood = str(dict_data['maxHp'])
        price = newIds[id]
        attack_arr = [dict_data["coldAtt"], dict_data["fireAtt"], dict_data["lightAtt"], dict_data["postionAtt"] ]     
        max_attack = max(attack_arr)
        max_attribute = str(attack_arr.index(max_attack))
        ride = ""
        clothes = ""
        for item in dict_data['items']['equip']:
            if dict_data['items']['equip'][item]['typeDesc'] == "时装":
                for key in clothes_dict:
                    if clothes.find(clothes_dict[key])==-1 and key == dict_data['items']['equip'][item]['dataId']:
                        clothes += clothes_dict[key]
            if dict_data['items']['equip'][item]['typeDesc'] == "坐骑":
                for key in ride_dict:
                    if ride.find(ride_dict[key])==-1 and dict_data['items']['equip'][item]['name'].find(key) != -1:
                        ride += ride_dict[key]
        if ride == "":
            ride = "0"
        if clothes == "":
            clothes = "0"
        print(id, sale, sex, chonglou, price, menpai, rank, score_equipment, score_diamond, blood, max_attack, max_attribute, wuyi_level, clothes, ride)
        write_data(id, sale, sex, chonglou, price, menpai, rank, score_equipment, score_diamond, blood, max_attack, max_attribute, wuyi_level, clothes, ride)
        time.sleep(1)


def deleteUnexist(dic, sale):
    sql = "select id from goods where sale=" + str(sale)
    number = cursor.execute(sql)
    data = cursor.fetchmany(number)
    total = 0
    for item in data:
        if dic.get(str(item[0])) is None:
            deleteData(str(item[0]))
            total += 1
    print("delete unexist ", total)


def updateData(dic, sale):
    deleteUnexist(dic, sale)
    for key in dic:
        search = "select id price from goods where id=" + key
        try:       
            cursor.execute(search)  
            data = cursor.fetchone() 
            if data is None:
                addData(key, sale)               
            elif dic[key] != data['price']:
                change = "update goods set price=" + dic[key] + " where id=" + key
                cursor.execute(change)
                db.commit()
                print("change price ", key)
        except:
            db.rollback()


def write_data(id, sale, sex,chonglou, price, menpai, rank_pure, score_equipment, score_diamond, blood, max_attack, max_attribute, wuyi_level, clothes, ride):
    # sql = "insert into goods_v2 value(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)" %(id, sex, chonglou, price, menpai, rank_pure, score_equipment, score_diamond, blood, max_attack, max_attribute, wuyi_level, 'a', "NULL")
    try:       
        cursor.execute("insert into goods value(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", (id, sale, sex, chonglou, price, menpai, rank_pure, score_equipment, score_diamond, blood, max_attack, max_attribute, wuyi_level, clothes, ride))       
        db.commit()
        print("add new ", id)
    except:
        db.rollback()
        print("fail to add new ", id)


baseUrl = "http://tl.cyg.changyou.com/goods/char_detail?serial_num="
raw_url = ["http://tl.cyg.changyou.com/goods/selling?world_id=0&have_chosen=&page_num=", "http://tl.cyg.changyou.com/goods/public?world_id=0&order_by=equip_point-desc&have_chosen=&page_num="]
db = MySQLdb.connect('localhost', 'root', 'hc7783au', 'tl')
cursor = db.cursor()
agentHeaders = LoadUserAgents("user_agents.txt")
while(True):
    forsale = 0
    t1 = datetime.now()
    print("------------------------")
    print("start update selling url")
    newIds = updateId(forsale)
    updateData(newIds, forsale)
    print("start update public url")
    forsale = 1
    newIds = updateId(forsale)
    updateData(newIds, forsale)
    t2 = datetime.now()
    print("one loop time=", (t2-t1).seconds)
cursor.close()
db.close()

# create table goods(id bigint primary key,
# sale tinyint not null,
# sex tinyint not null,
# chonglou tinyint not null,
# price int not null,
# menpai tinyint not null,
# rank tinyint not null,
# score_equipment int not null,
# score_diamond int not null,
# blood int not null,
# max_attack int not null,
# max_attribute int not null,
# wuyi_level int not null,
# clothes varchar(10),
# ride varchar(10));

# create table information (id bigint primary key,
# method tinyint not null,
# server int not null,
# sex tinyint not null,
# chonglou tinyint not null,
# price int not null,
# menpai tinyint not null,
# rank tinyint not null,
# score_equipment int not null,
# score_diamond int not null,
# blood int not null,
# max_attack int not null,
# max_attribute int not null,
# shending tinyint not null,
# wuyi_level int not null,
# clothes varchar(10),
# ride varchar(10),
# contact varchar(30)
# );

# insert into information values (2142353646,0,1,12455,1,119,155645,874,40000,3,18999,67,76,'a','c','qq:1103042');

