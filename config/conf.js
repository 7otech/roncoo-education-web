if (process.env.NODE_ENV == 'development') { //开发环境
  module.exports =  {
    title: '七橙-打造全行业都适用的在线教育系统',
    baseUrl: 'https://edu-api.7otech.com'   //java项目接口地址
  }
}else if (process.env.NODE_ENV == 'testing') {  //测试环境
  module.exports = {
    title: '七橙-打造全行业都适用的在线教育系统',
    baseUrl: 'https://edu-api.7otech.com'  //java项目接口地址
  }
}else { //默认生产环境
  module.exports = {
    title: '七橙-打造全行业都适用的在线教育系统',
    baseUrl: 'https://edu-api.7otech.com'   //java项目接口地址
  }
}
