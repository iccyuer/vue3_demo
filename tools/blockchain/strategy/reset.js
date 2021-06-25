

function cancelPending() {
    var ret = false;
    while (true) {
        if (ret) {
            Sleep(Interval);
        }
        var orders = _C(exchange.GetOrders);
        if (orders.length == 0) {
            break;
        }

        for (var j = 0; j < orders.length; j++) {
            exchange.CancelOrder(orders[j].Id, orders[j]);
            ret = true;
        }
    }
    return ret;
}

function main() {
    while(true) {
        cancelPending();
    }
}