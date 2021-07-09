
import time
import math

def getRecords():
    Log(2)
    records = _C(exchange.GetRecords, PERIOD_H1)
    for i in range(100) : 
        records = _C(exchange.GetRecords, PERIOD_H1)

def interval(fn):
    nextTick=0
    interval_time=60*30
    while True:
        ticks = time.time()
        if nextTick==0:
            if math.floor(ticks%(interval_time)) == 0:
                nextTick = math.floor(ticks)+interval_time
                fn()
            else:
                nextTick = math.floor(ticks)-math.floor(ticks%(interval_time))+interval_time
                fn()
        else:
            if abs(ticks - nextTick)<2:
                nextTick = nextTick+interval_time
                fn()
        Sleep(1000)

def main():
    Log(1)
    #interval(getRecords)
    Log(1)
    while True:
        ticks = time.time()
        Log(_D(),ticks)
        getRecords()
        Sleep(1000*60*30)
        # if ticks%3600<5:
        #     Log(_D(),ticks)
        #     getRecords()
        # Sleep(1000*3)


