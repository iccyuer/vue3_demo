/*backtest
start: 2021-04-01 22:00:00
end: 2021-05-22 00:00:00
period: 1d
basePeriod: 1m
exchanges: [{"eid":"OKEX","currency":"ETH_USDT","balance":100000}]
*/

var diff = 500
var amount = 0.0004
function createNet(begin, diff) {
    var oneSideNums = 10
    var up = []
    var down = []
    for (var i = 0; i < oneSideNums; i++) {
        var upObj = {
            buy: false,
            sell: false,
            price: parseFloat((begin + diff / 2 + i * diff).toFixed(4)),
        }
        up.push(upObj)

        var j = (oneSideNums - 1) - i
        var downObj = {
            buy: false,
            sell: false,
            price: parseFloat((begin - diff / 2 - j * diff).toFixed(4)),
        }
        if (downObj.price <= 0) {  // 价格不能小于等于0 
            continue
        }
        down.push(downObj)
        if (i == 0) {
            Log(`init sell ${upObj.price} ${amount}`)
            exchange.Sell(upObj.price, amount)
        } else if (i == oneSideNums - 1) {
            Log(`init buy ${downObj.price} ${amount}`)
            exchange.Buy(downObj.price, amount)
        }
    }

    return down.concat(up)
}

function showTbl(arr) {
    var tbl = {
        type: "table",
        title: "网格",
        cols: ["网格信息"],
        rows: []
    }
    var arrReverse = arr.slice(0).reverse()
    _.each(arrReverse, function (ele) {
        var color = ""
        if (ele.buy) {
            color = "#FF0000"
        } else if (ele.sell) {
            color = "#00FF00"
        }
        tbl.rows.push([JSON.stringify(ele) + color])
    })
    LogStatus(_D(), "\n`" + JSON.stringify(tbl) + "`", "\n 账户信息：", exchange.GetAccount())
}

function main() {
    var ticker = _C(exchange.GetTicker)
    var net = createNet(ticker.Last, diff)
    var preTicker = ticker
    while (true) {
        ticker = _C(exchange.GetTicker)
        // 检查网格范围
        while (ticker.Last >= net[net.length - 1].price) {
            net.push({
                buy: false,
                sell: false,
                price: net[net.length - 1].price + diff,
            })
        }
        while (ticker.Last <= net[0].price) {
            var price = net[0].price - diff
            if (price <= 0) {
                break
            }
            net.unshift({
                buy: false,
                sell: false,
                price: price,
            })
        }


        // 检索网格
        for (var i = 0; i < net.length; i++) {
            var p = net[i]
            if (preTicker.Last < p.price && ticker.Last > p.price) {         // 上穿，卖出，当前节点已经交易过不论SELL BUY ，都不再交易
                if (i != 0) {
                    var downP = net[i - 1]
                    if (downP.buy) {
                        Log(`sell ${p.price+diff} ${amount}`, ticker)
                        exchange.Sell(p.price+diff, amount, ticker)
                        downP.buy = false
                        p.sell = false
                        continue
                    }
                }
                if (!p.sell && !p.buy) {
                    Log(`sell ${p.price+diff} ${amount}`, ticker)
                    exchange.Sell(p.price+diff, amount, ticker)
                    p.sell = true
                }
            } else if (preTicker.Last > p.price && ticker.Last < p.price) {  // 下穿，买入
                if (i != net.length - 1) {
                    var upP = net[i + 1]
                    if (upP.sell) {
                        Log(`buy ${p.price-diff} ${amount}`,ticker)
                        exchange.Buy(p.price-diff, amount, ticker)
                        upP.sell = false
                        p.buy = false
                        continue
                    }
                }
                if (!p.buy && !p.sell) {
                    Log(`buy ${p.price-diff} ${amount}`,ticker)
                    exchange.Buy(p.price-diff, amount, ticker)
                    p.buy = true
                }
            }
        }

        showTbl(net)
        preTicker = ticker
        Sleep(500)
    }
}