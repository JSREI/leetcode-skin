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

        // 隐藏掉上面的几个导航栏
        // 最上面的导航
        removeIfExists("[class='relative flex h-[50px] w-full shrink-0 items-center px-5 z-nav-1 bg-layer-1 dark:bg-dark-layer-1']");
        // 然后是下边的编辑框的导航
        removeIfExists("[class='flex min-h-[44px] flex-shrink-0 flex-wrap items-center pr-5']");
        // 题目详情的导航
        removeIfExists("[class='flex h-11 w-full items-center pt-2']");

        // 把网页标题中的力扣字样隐藏掉
        const documentTitleSuffix = "- 力扣（Leetcode）";
        if (document.title.endsWith(documentTitleSuffix)) {
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

    /**
     * 如果选择器选中的元素存在的话，则将其删除
     *
     * @param querySelector {string}
     */
    function removeIfExists(querySelector) {
        const element = document.querySelector(querySelector);
        if (element) {
            element.setAttribute("hidden", true);
        }
    }

})();