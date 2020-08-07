var chess = document.getElementsByClassName("chess")[0];
// 得到棋盘的2d上下文，通过上下文来绘制棋盘内容
var context = chess.getContext("2d");
// 绘制线的颜色
context.strokeStyle = "#b9b9b9";


// 调用下面的方法，这个画出了横线
window.onload = function() {
    drawChessBoard();
}

// 设置一个方法来画线
function drawChessBoard() {
    // 利用for循环来绘制线的条数
    for (var i = 0; i < 15; i++) {
        // moveTo设置起始点的坐标   lineTo设置结束点的坐标
        // 通过起始点和结束点来确定一条线
        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + 30 * i);
        // 连接两点 stroke
        context.strokeStyle();
    }
}