### 虚拟机云下容灾

公有云上的虚拟机可配置一台私有云或虚拟化环境（如VMware，Hyper-V，Xen等）中的虚拟机作为容灾的目标端，当源端虚拟机无法连接，私有云或虚拟化环境中的目标端虚拟机可手动或自动拉起至最近的崩溃一致性点，替代源端提供服务。混合云容灾使用IO复制技术实现，以保证**RPO为0，RTO达到秒级**。

#### 一、部署

虚拟机云下容灾需使用Clouvm企业版，由用户部署Clouvm服务器和Clouvm代理。

 1. 用户需在公有云上申请一台虚拟机作为Clouvm服务器并安装Clouvm企业版服务端程序，选择本地对象存储作为数据仓库。
 2. 用户在公有云或虚拟化环境中新建一台或数台可连接公有云的虚拟机作为clouvm代理，安装Clouvm企业版代理程序，并连接至公有云上Clouvm服务器。

#### 二、配置

 1. 使用Web浏览器连接至公有云的Clouvm服务器，登录后新建一个容灾策略。
 2. 输入待备份虚拟机的IP地址和登录信息，并为它分配容灾策略，容灾任务会在clouvm代理上自动执行。

#### 三、恢复

 1. 在私有云或虚拟化环境中申请一台虚拟机，在Web界面选择一个容灾任务生成的会话，生成即时恢复任务。
 2. 待该虚拟机重新启动后，登录系统，选择恢复整机，系统边运行边在后台执行恢复任务。
 3. 也可将此虚拟机绑定在容灾源虚拟机上，以便在源虚拟机连接失败时自动拉起云下目标端虚拟机。

![Image text](/cloud.jpg)