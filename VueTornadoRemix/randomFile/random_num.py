#coding:utf-8
import random
class ranFileName(object):
    def __init__(self):
        self.file = self.randoms()
    def randoms(self):
        temp = ""
        for i in range(6):
            ran = random.randrange(0, 4)
            if ran == 1:
                ran1 = random.randrange(0, 10)
                temp += str(ran1)
            else:
                ran2 = chr(random.randrange(65, 91))
                temp += ran2
        return temp