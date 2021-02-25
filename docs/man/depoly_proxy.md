### 部署备份代理

在备份服务器上运行clouvm配置命令，选择Setting/Depoly Backup proxy：
![Image text](/depoly_proxy_1.jpg)
选择待部署的备份代理，并输入该备份代理的内网IP，如选择本地部署，Depoly Key将被生成，请在备份代理中本地执行proxy_installer.sh脚本，并输入该Depoly Key，完成部署：
![Image text](/depoly_proxy_2.jpg)
如选择远端部署，请输入备份代理的外网IP，管理员账号和密码，完成部署：
![Image text](/depoly_proxy_3.jpg)
#### 注：请尽量选择Centos7.5 - Centos7.9做为备份代理的操作系统，并确认LVM包已经部署在该系统中，如未安装请使用"yum install -y lvm2"命令先行安装
![Image text](/cloud.jpg)
