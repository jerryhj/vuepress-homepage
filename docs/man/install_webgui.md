### 配置WEB服务器

打开/etc/httpd/conf/httpd.conf文件，在该文件末尾添加：
![Image text](/setting_webgui.jpg)
解压缩manage.zip，生成manage目录，将该manage目录移动至/var/www/html/目录下，将/var/www/html/manage/index.html文件移动至/var/www/html/目录下，并使用"systemctl restart httpd" 重新启动Web服务，使用Web浏览器访问WEB服务器：
![Image text](/login.jpg)
登录完成后，主界面如下：
![Image text](/dashboard.jpg)
#### 注：请尽量选择Centos7.5 - Centos7.9做为WEB服务器的操作系统，并确认httpd已经部署在该系统中，如未安装请使用"yum install -y httpd"命令先行安装
![Image text](/cloud.jpg)
