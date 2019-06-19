#!/usr/bin/python
# -*- coding: UTF-8 -*-

# author Acha 2019/6/17
import sys
from bs4 import BeautifulSoup
import time
from datetime import datetime
import requests
import random
import MySQLdb

menpai_dict = {"少林": 0, "明教": 1, "丐帮": 2, "武当": 3, "峨眉": 4, "星宿": 5 ,"天龙": 6, "天山": 7, "逍遥": 8, "慕容": 9, "唐门":10, "鬼谷": 11}

# get the page information of all the goods in sale
def getData(url, userAgent):
    header = {
     'User-Agent': userAgent
    }
    while(True):
        html = requests.get(url, headers=header)
        if html.status_code == 200:
            break
        sleep(1)
    soup = BeautifulSoup(html.content, "html.parser", from_encoding='utf-8')
    goods = soup.find_all('li', class_='role-item')
    for item in goods:
        name = item.find('span', class_='name')
        name_pure = name[1: len(name)-1]
        score_equipment = item.find('b')
        price = item.find('p', class_='price')
        id = item.find('a', class_='r-img').get('href').split("=")[1]
        split_str = name_pure.get_text().split(" ")
        menpai = split_str[0]
        rank = split_str[2]
        # chonglou = False
        # if item.find('i', class_='icon-cl'):
        #     chonglou = True
        print(id, menpai_dict[menpai], rank, price.get_text())
        write_data(id, menpai_dict[menpai], rank, price.get_text())
        # print(name.get_text(), score_equipment.get_text(), price.get_text(), id, chonglou)

def write_data(id, menpai, rank, price):
    sql = "insert into goods(id, menpai, rank, price) \
           values (%s, %s, %s, %s)" %(id, menpai, rank, price)
    try:
        cursor.execute(sql)
        db.commit()
    except:
        db.rollback()

# load the user-agent file into a list
def LoadUserAgents(uafile):
    uas = []
    with open(uafile, 'rb') as uaf:
        for ua in uaf.readlines():
            if ua:
                uas.append(ua.strip()[:-1])
    random.shuffle(uas)
    return uas



db = MySQLdb.connect('localhost', 'root', 'hc7783au', 'tl')
cursor = db.cursor()
agentHeaders = LoadUserAgents("user_agents.txt")
t1 = datetime.now()
raw_url = "http://tl.cyg.changyou.com/goods/selling?&page_num="
for i in range(1, 10):
    getData(raw_url+str(i), random.choice(agentHeaders))
t2 = datetime.now()
print("time=", (t2-t1).seconds)
db.close()