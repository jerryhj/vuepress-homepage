### 多云备份

公有云中的虚拟机可设置从15分钟到数年一次的备份策略，并将备份数据保存至公有云对象存储，如测试需要或恢复演练，可马上即时恢复启动，也可设置备份验证特性，在备份任务完成后自动恢复验证数据完整性。虚拟机备份使用快照技术实现，以保证**数据的一致性**，可设置为崩溃一致性或应用一致性。

#### 一、部署

多云备份可使用Clouvm SAAS版，也可使用Clouvm企业版，使用Clouvm企业版需由用户部署Clouvm服务器和Clouvm代理。

 1. 使用Clouvm企业版需由用户在公有云上申请一台虚拟机作为Clouvm服务器并安装Clouvm企业版服务端程序，选择作为备份目标的公有云的对象存储作为数据仓库。
 2. 使用Clouvm企业版需由用户在私有云或虚拟化环境中新建一台或数台虚拟机作为Clouvm代理，安装Clouvm企业版代理程序，并连接至公有云上Clouvm服务器。

#### 二、配置

 1. 使用Web浏览器连接至公有云的Clouvm服务器，登录后新建一个或多个备份策略。
 2. 输入待备份虚拟机的IP地址和登录信息，并为它分配适合的备份策略，备份任务会根据备份策略自动推送至备份代理上执行。

#### 三、恢复

 1. 在公有云上申请一台虚拟机，在Web界面选择一个备份任务生成的会话，生成即时恢复任务。
 2. 待该虚拟机重新启动后，登录系统，并复制出需要的文件，或者选择恢复整机，系统边运行边在后台执行恢复任务。
 3. 也可将此虚拟机绑定在待备份虚拟机上，以便备份任务完成后自动进行备份数据有效性验证。

![Image text](/cloud.jpg)
