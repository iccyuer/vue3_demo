
// var nlist = []

var preN = 0;

var table = {type: 'table', title: '交易记录', cols: ['时间','价格', '类型'], rows: []};

var amount = 0.02;

function main() {

    while (true) {
        var records = _C(exchange.GetRecords, PERIOD_H1);

        var ticker = _C(exchange.GetTicker);
        var FastRecords = TA.MA(records, FastPeriod);
        var SlowRecords = TA.MA(records, SlowPeriod);
        var n = _Cross(FastRecords, SlowRecords);

        // if (nlist.length >= 5) {
        //     nlist.pop()
        //     nlist.unshift(n)
        // } else {
        //     nlist.unshift(n)
        // }
        // Log('nlist', nlist)
        // if (nlist.every(e => e > 0)) {
        //     Log('nlist', nlist)
        //     nlist = []
        // }


        if (Math.abs(preN) >= 5 && preN > 0 && n < 0) { // 卖出
            table.rows.push([_D(),ticker['Sell'],'Sell'])
            exchange.Sell(-1, amount, ticker)
        } else if (Math.abs(preN) >= 5 && preN < 0 && n > 0) { // 买入
            table.rows.push([_D(),ticker['Buy'],'Buy'])
            exchange.Buy(-1, amount * ticker.Last, ticker)
        }
        LogStatus('`' + JSON.stringify(table) + '`')
        
        preN = n;


        Sleep(1000*60)

    }

}