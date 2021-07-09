
function getMA() {
    var records = exchange.GetRecords()
    var ma1 = TA.MA(records, MA1)
    var ma2 = TA.MA(records, MA2)  
    return {
        time: new Date().getTime(),
        ma1: ma1[ma1.length-1],
        ma2: ma2[ma2.length-1]
    }
}


let amount = 0.002;

let isBuyed = false;

function main() {
    let preMA;
    let currMA;
    var ticker = _C(exchange.GetTicker)
    while(true) {
        ticker = _C(exchange.GetTicker)
        currMA = getMA();

        if (!!currMA && !!preMA) {
            if (preMA.ma2 > preMA.ma1 && currMA.ma2 < currMA.ma1) { // ma1向上击穿ma2,买入
                Log('buy', currMA, preMA)
                exchange.Buy(-1, amount * ticker.Last, ticker)
                isBuyed = true;
            } else if(preMA.ma2 < preMA.ma1 && currMA.ma2 > currMA.ma1 && isBuyed) { // ma1向下击穿ma2,卖出
                Log('sell', currMA, preMA)
                exchange.Sell(-1, amount, ticker)
            }
        }
        preMA = currMA;

        Sleep(1000*60*Minute)
        LogStatus(exchange.GetAccount());
        
    }
}