# svg
svg

- gulp-svg2png 使用cnpm 安装

# 简单介绍一下

- 为何使用svg代替icon-font

	自行百度O.O
	
- 制作方法

	1.在线制作
	
	eg:icomoon
	
	2.gulp编译工具
	
	[gulp文件示例](https://github.com/huochezaodian/svg/blob/master/gulpfile.js)
	
-
### gulp编译流程

- 目录结构

	```
	├── README.md
	├── dist	//生成文件
	├── gulpfile.js //gulp编译配置
	├── node_modules
	├── package-lock.json
	├── package.json
	├── sprites.css //生成的样式模板
	└── svg-icon //svg文件
	```
	
- 使用方法

	在svg-icon 文件内编写自己需要的icon，运行 gulp进行编译，如果想要改变生成的样式，可以再sprites.css修改原模板，也可以自己编写进行样式覆盖，生成的dist文件目录：
	
	```
		dist
		├── css
		│   └── sprite.css
		├── png
		│   └── sprite.png
		├── sprite.html
		└── svg
		    └── sprite.svg
	```
	
	在sprite.html页面中展示了使用的方法。

	