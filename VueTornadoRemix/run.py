#coding:utf-8
import tornado.httpserver
import tornado.web
import tornado.ioloop
import settings
import tornado.options
from tornado.options import define, options
# from email_code import Email_code
from redisLink.redisConn import reids
from mysql_cun import mysql_link
import re
import json
import os
from randomFile.random_num import ranFileName
import time

tornado.options.define("port", default=9000, help="run on the given port", type=int)

class login(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', '*')
        self.set_header('Access-Control-Max-Age', 1000)
        # self.set_header('Content-type', 'application/json')
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header('Access-Control-Allow-Headers', #'*')
        'authorization, Authorization, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-By, Access-Control-Allow-Methods')

    def options(self,data):
        pass
    def get(self, *args, **kwargs):
        pass
    def post(self, *args, **kwargs):
        datas = json.loads(self.request.body)
        mode = datas["mode"]
        if mode == 1:
            username = datas["username"]
            password = datas["password"]
            passtwice = datas["passtwice"]
            if username == " ":
                self.finish(json.dumps({"content": "用户名字段不为空"}))
            else:
                pattern1 = "^([\u4e00-\u9fa5]{2,4})|([A-Za-z0-9_]{4,16})|([a-zA-Z0-9_\u4e00-\u9fa5]{3,16})$"
                if re.match(pattern1, username) == None:
                    self.finish(json.dumps({"content": "用户名字段必须是四位以上的数字、字母、中文"}))
                else:
                    if password == " ":
                        self.finish(json.dumps({"content": "密码字段不为空"}))
                    else:
                        pattern2 = "^[a-zA-Z]\w{5,}$"
                        if re.match(pattern2,password) == None:
                            self.finish(json.dumps({"content": "密码必须开头必须是以字母开头,且五位以上!"}))
                        else:
                            if passtwice == " ":
                                self.finish(json.dumps({"content": "重写密码字段不为空"}))
                            else:
                                if password != passtwice:
                                    self.finish(json.dumps({"content": "前后密码不一致"}))
                                else:
                                    sql = "insert into users(username, passwords) VALUES('%s','%s')"%(username,password)
                                    mysql_link.mysqlConnect().find_data(sql)
                                    self.finish({"content": "注册成功"})
        if mode == 2:
            username = datas[u"username"]
            password = datas[u"password"]
            if username == " ":
                self.finish(json.dumps({"content":"用户名不能为空"}))
            else:
                sql = 'SELECT  username from users WHERE username="%s"'%(username)
                num = len(mysql_link.mysqlConnect().search_data(sql))
                if num != 1:
                    self.finish(json.dumps({"content":"用户名不存在"}))
                else:
                    if password == " ":
                        self.finish(json.dumps({"content":"密码字段不能为空"}))
                    else:
                        sql = 'SELECT  username,passwords from users WHERE username="%s" AND passwords="%s"'%(username,password)
                        num = len(mysql_link.mysqlConnect().search_data(sql))
                        if num != 1:
                            self.finish(json.dumps({"content":"密码错误"}))
                        else:
                            reids().redis_cun(username,username,86400)
                            # self.set_cookie(u"user",username,expires_days=1)
                            # reids().redis_cun(username, username, 86400)
                            self.finish(json.dumps({"content":"登录成功"}))








class demo(tornado.web.RequestHandler):
    def get(self, *args, **kwargs):
        self.render("demo.html")
    def post(self, *args, **kwargs):
        self.get_argument("name")
        self.finish(unicode(1))


class admin(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', '*')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Content-type', 'application/json')
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header('Access-Control-Allow-Headers', #'*')
        'authorization, Authorization, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-By, Access-Control-Allow-Methods')

    def options(self,data):
        pass
    def post(self, *args, **kwargs):
        data = json.loads(self.request.body)
        mode = data['mode']
        if mode == 1:
            dishname = data["dishname"]
            dishclass = data["dishclass"]
            dishmoney = float(data["dishmoney"])
            dishimg = data["dishimg"]
            try:
                sql = u'INSERT INTO dishadd(dishname,dishclass,dishmoney,dishimg) VALUES("%s","%s",%s,"%s")'%(dishname,dishclass,dishmoney,dishimg)
                mysql_link.mysqlConnect().find_data(sql)
                self.finish(json.dumps({"content": 1}))
            except:
                self.finish(json.dumps({"content": 0}))
        if mode == 2:
            try:
                sql = u"SELECT dishname from dishadd"
                datas = mysql_link.mysqlConnect().search_data(sql)
                self.finish(json.dumps({"content":datas}))
            except:
                self.finish(json.dumps({"content":0}))
        if mode == 3:
            try:
                delcontent = data["delContent"]
                sql = u'DELETE FROM dishadd WHERE dishname="%s"'%(delcontent)
                mysql_link.mysqlConnect().find_data(sql)
                self.finish(json.dumps({"content": 1}))
            except:
                self.finish(json.dumps({"content": 0}))

        # try:
        #     file = self.request.files["file"][0]
        #     filepath_name = u"downloadfile"
        #     ranFileNames = ranFileName().randoms()
        #     projectpath = os.path.dirname(__file__)
        #     downloadpath = projectpath + u"/" + filepath_name + u'/' + ranFileNames +u".png"
        #     print downloadpath
        #     with open(downloadpath, 'wb') as upload:
        #         upload.write(file['body'])
        # except:
        #     self.finish(json.dumps({"content": 0}))


class dishes(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', '*')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Content-type', 'application/json')
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header('Access-Control-Allow-Headers', #'*')
        'authorization, Authorization, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-By, Access-Control-Allow-Methods')

    # def get(self, *args, **kwargs):
    #     pass
    def options(self,data):
        pass
    def post(self, *args, **kwargs):
        data = json.loads(self.request.body)
        mode = data["mode"]
        if mode == 1:
            sql = u'SELECT dishname,dishmoney,dishclass FROM dishadd WHERE dishclass=" 热菜"'
            datas = mysql_link.mysqlConnect().search_data(sql)
            self.finish(json.dumps({"content": datas}))
        if mode == 2:
            sql = u'SELECT dishname,dishmoney,dishclass FROM dishadd WHERE dishclass=" 凉菜"'
            datas = mysql_link.mysqlConnect().search_data(sql)
            self.finish(json.dumps({"content": datas}))
        if mode == 3:
            sql = u'SELECT dishname,dishmoney,dishclass FROM dishadd WHERE dishclass=" 汤类"'
            datas = mysql_link.mysqlConnect().search_data(sql)
            self.finish(json.dumps({"content": datas}))
        if mode == 4:
            sql = u'SELECT dishname,dishmoney,dishclass FROM dishadd WHERE dishclass=" 饮料"'
            datas = mysql_link.mysqlConnect().search_data(sql)
            self.finish(json.dumps({"content": datas}))
        if mode == 5:
            sql = u'SELECT dishname,dishmoney,dishclass FROM dishadd WHERE dishclass=" 其他"'
            datas = mysql_link.mysqlConnect().search_data(sql)
            self.finish(json.dumps({"content": datas}))

class home(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', '*')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Content-type', 'application/json')
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header('Access-Control-Allow-Headers', #'*')
        'authorization, Authorization, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-By, Access-Control-Allow-Methods')

    def options(self,data):
        pass
    def get(self, *args, **kwargs):
        pass
        # datas = json.loads(self.request.body)
        # mode = datas["mode"]
        # if mode == 1:
        #     self.finish(
        #         json.dumps({"is_login": self.get_secure_cookie("is_login"), "user": self.get_secure_cookie("user")}))
    def post(self, *args, **kwargs):
        datas = json.loads(self.request.body)
        mode = datas["mode"]
        if mode == 1:
            try:
                users = datas["user"]
                # is_login = reids().redis_get("is_login")
                # users = self.get_cookie(u"user")
                user = reids().redis_get(users)
                self.finish(json.dumps({"user": user}))
            except:
                self.finish(json.dumps({"user": " "}))
        if mode == 2:
            # reids().redis_del("is_login")
            users = datas["user"]
            # user = self.get_cookie(u"user")
            reids().redis_del(users)
            self.finish(json.dumps({"content":"注销成功"}))

class order(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Headers', '*')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Content-type', 'application/json')
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header('Access-Control-Allow-Headers', #'*')
        'authorization, Authorization, Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Headers, X-Requested-By, Access-Control-Allow-Methods')

    def options(self,data):
        pass
    def get(self, *args, **kwargs):
        pass
    def post(self, *args, **kwargs):
        # key = self.get_cookie(u"user")
        # login_user = reids().redis_get(key)
        # if login_user == None:
        #     self.finish(json.dumps({"content":"请登录后再点单"}))
        # else:
        datas = json.loads(self.request.body)
        mode = datas["mode"]
        if mode == 1:
            users = datas["users"]
            dishname = datas["orderDishName"]
            dish_num = datas["num"]
            dish_money = datas["money"]
            dish_type = datas["dishype"]
            sql = "SELECT id FROM users WHERE username='%s'"%(users)
            user_id = mysql_link.mysqlConnect().search_data(sql)[0][0]
            sql = "SELECT dishname from orders WHERE dishname='%s'"%(dishname)
            dishname_same = len(mysql_link.mysqlConnect().search_data(sql))
            if dishname_same == 0:
                sql = "INSERT INTO orders(dishname, num, money, dishtype, ids) VALUES('%s',%s,%s,'%s',%s)"%(dishname,dish_num,dish_money,dish_type,user_id)
                mysql_link.mysqlConnect().search_data(sql)
                self.finish(json.dumps({"content":"点单成功"}))
            else:
                sql = "UPDATE orders set num=num+1,money=money+%s WHERE dishname = '%s';"%(dish_money,dishname)
                mysql_link.mysqlConnect().search_data(sql)
                self.finish(json.dumps({"content": "点单成功"}))
        if mode == 2:
            sql = "SELECT dishname,num,money,dishtype from orders where orderids=0"
            data = mysql_link.mysqlConnect().search_data(sql)
            self.finish(json.dumps({"content":data}))
        if mode == 3:
            delname = datas["delName"]
            sql = "DELETE FROM orders WHERE dishname='%s'"%(delname)
            mysql_link.mysqlConnect().find_data(sql)
            self.finish(json.dumps({"content":"删除成功"}))
        if mode == 4:
            nums = datas["nums"]
            eachmoney = datas["eachmoney"]
            dealname = datas["dealname"]
            if nums <= 0:
                sql = "DELETE FROM orders WHERE dishname='%s'"%(dealname)
                mysql_link.mysqlConnect().find_data(sql)
            else:
                sql = "UPDATE orders SET money=money-%s,num=%s WHERE dishname='%s'"%(eachmoney,nums,dealname)
                mysql_link.mysqlConnect().find_data(sql)
                self.finish(json.dumps({"content":"操作成功"}))
        if mode == 5:
            nums = datas["nums"]
            eachmoney = datas["eachmoney"]
            dealname = datas["dealname"]
            sql = "UPDATE orders SET money=money+%s,num=%s WHERE dishname='%s'"%(eachmoney,nums,dealname)
            mysql_link.mysqlConnect().find_data(sql)
            self.finish(json.dumps({"content":"操作成功"}))
        if mode == 6:
            localtime =  time.strftime("%Y-%m-%d %H:%M", time.localtime())
            ordernum = datas["ordernum"]
            sql = "SELECT orderids FROM orders where orderids=0"
            length_num = len(mysql_link.mysqlConnect().search_data(sql))
            if length_num == 0:
                self.finish(json.dumps({"content": "未点单无法提交订单"}))
            else:
                sql = "UPDATE orders SET orderids=%s  WHERE orderids=0" % (ordernum)
                mysql_link.mysqlConnect().find_data(sql)
                sql = "INSERT INTO orderadd(randomid,timeadd) VALUES(%s,'%s') " % (ordernum, localtime)
                mysql_link.mysqlConnect().find_data(sql)
                self.finish(json.dumps({"content": "创建订单成功"}))


if __name__ == '__main__': #路由
    app = tornado.web.Application([
        (r"/login/(.*)",login),
        (r"/demo/(.*)", demo),
        (r"/admin/(.*)", admin),
        (r"/dishes/(.*)", dishes),
        (r"/home/(.*)", home),
        (r"/order/(.*)", order)
    ],**settings.web)#有些必要的参数
    # app.listen(9000)#启动服务器
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.current().start()