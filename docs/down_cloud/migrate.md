### 虚拟机迁移下云

将公有云中的虚拟机迁移至私有云或虚拟化环境（如VMware，Hyper-V，Xen等），Clouvm支持两种方式来实现虚拟机迁移：

1. 使用快照技术实现虚拟机迁移：快照技术保证了**数据的一致性**，包括文件系统的一致性和应用程序一致性，如各种数据库的一致性。
2. 使用IO复制技术实现虚拟机迁移：IO复制技术只能保证最基本的崩溃数据一致性，无法保证文件系统一致性和应用一致性，但IO复制技术可以大幅降低迁移导致的服务中断时间，**RPO可降低为0，RTO可达到秒级**（RTO时间依赖迁移源端和目标端的网络带宽）。

用户可根据需求选择上述两种方式实现虚拟机迁移下云。

#### 一、部署

虚拟机迁移下云需使用Clouvm企业版，由用户部署Clouvm服务器和Clouvm代理。

 1. 用户需在公有云上申请一台虚拟机作为Clouvm服务器并安装Clouvm企业版服务端程序，选择本地环境的对象存储作为数据仓库。
 2. 用户在公有云中新建一台可连接私有云或虚拟化环境的虚拟机作为Clouvm代理，安装Clouvm企业版代理程序，并连接至公有云上Clouvm服务器。

#### 二、配置

 1. 使用Web浏览器连接至公有云的Clouvm服务器，登录后新建一个迁移策略。
 2. 输入待迁移虚拟机的IP地址和登录信息，并为它分配迁移策略，然后等待迁移任务完成。

#### 三、验证并完成迁移

 1. 在私有云或虚拟化环境中申请一台虚拟机，在Web界面选择该迁移任务生成的会话，生成即时恢复任务。
 2. 待该虚拟机重新启动后，登录系统，验证迁移数据是否完整。
 3. 如数据正常，输入完全恢复命令，系统边运行边在后台执行恢复任务，完成迁移。

![Image text](/cloud.jpg)
