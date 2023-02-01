// ==UserScript==
// @name         力扣隐藏
// @namespace    https://github.com/JSREI/leetcode-skin/tree/main/hidden
// @version      0.1
// @description  隐藏LeetCode的页面
// @author       CC11001100
// @match        https://leetcode.cn/problems/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 页面的icon要替换为哪个
    const iconUrl = "https://github.githubassets.com/favicons/favicon.png";

    setInterval(() => {

        // 隐藏掉上面的导航栏
        const nav = document.querySelector("[class='relative flex h-[50px] w-full shrink-0 items-center px-5 z-nav-1 bg-layer-1 dark:bg-dark-layer-1']");
        if (nav) {
            nav.remove();
        }

        // 把网页标题中的力扣字样隐藏掉
        const documentTitleSuffix = "- 力扣（Leetcode）";
        if (document.title.endsWith(documentTitleSuffix)) {
            debugger;
            document.title = document.title.replaceAll(documentTitleSuffix, "");
        }

        // 把页面的icon替换为GitHub的
        let iconLink = document.querySelector("link[rel*='icon']");
        if (!iconLink) {
            iconLink = document.createElement("link");
            iconLink.type = "image/x-icon";
            iconLink.rel = "shortcut icon";
            iconLink.href = iconUrl;
            document.getElementsByTagName("head")[0].appendChild(iconLink);
        }

    }, 1000);

})();