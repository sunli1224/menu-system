#coding:utf-8
import redis
# 60秒
# 86400秒 == 一天
'''
redis连接的应用库
'''
class reids(object):
    def __init__(self):
        self.redis_link = redis.ConnectionPool(host='127.0.0.1', port=6379)#连接redis的参数

    def redis_cun(self,key,value,time):#存入键值
        r = redis.Redis(connection_pool=self.redis_link)
        pipe = r.pipeline(transaction=True)
        r.set(key,value)
        r.expire(key, time)
        pipe.execute()

    def redis_get(self,key):#获取键中的值
        r = redis.Redis(connection_pool=self.redis_link)
        result = r.get(key)
        return result

    def redis_del(self,key):#删除键值
        r = redis.Redis(connection_pool=self.redis_link)
        r.delete(key)

