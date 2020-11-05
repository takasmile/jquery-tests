// 添加h1作为小节标题
function addTitle(container, title) {
    let titleElem = $("<h1></h1>");
    if (title) {
        titleElem.text(title);
    }
    container.append(titleElem);
}

// 添加横线
function addHr(container) {
    // 两头渐变透明
    let seperator = $(
        `<HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="100%" color=#987cb9 SIZE=3>`
    );
    container.append(seperator);
}

/***************************** 对外暴露的函数 *****************************/
/** **/

// 整合横线和标题
function addSeperator(container, title = "", cb) {
    return function () {
        addTitle(container, title);
        cb();
        addHr(container);
    };
}

/** **/
/***************************** 对外暴露的函数 *****************************/
