# 极客时间爬虫项目

### 启动方法

1. 进入项目根目录
2. npm install(如果出现下载失败或者时间过长使用备用方案)
3. npm run dev
4. 手动修改代码
```javascript
    // src/index.js
    const browser  = await Puppeteer.launch({
        executablePath:resolve(__dirname,'./../chrome-win/chrome.exe'),
        headless :false
    })
    // 修改为
    const browser  = await Puppeteer.launch({
        headless :false
    })
```

#### 备用方案
可能由于国内网络原因导致**puppeteer**下载失败,使用备用方案,代码也是使用备用方案

1. npm i --save puppeteer --ignore-scripts
2. 手动下载chromium，解压到项目的根目录下,[下载地址](https://download-chromium.appspot.com/)
3. 将`index.js`代码中的`launch[executablePath]`修改为本地地址

### 爬虫原理

首先使用Google的`Puppeteer`模拟用户登陆，获得当前登陆人的信息和Cookies，
获得Cookies后调用某客时间的接口，将用户当前所有的专栏导出，
递归性的从专栏列表中向外输出专栏内容。