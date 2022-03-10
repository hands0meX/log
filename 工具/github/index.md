在线编辑器
 - 如https://github.com/hands0meX/log 中的 .com 转换成.dev即可启动在线编辑器



 快捷键：
 查看单文件的历史提交： git log -p [相对路径]

 查看区别： 
  - 工作 - 暂存： git diff
  - 暂存 - 版本： git diff --cached
  - 工作 - 版本： git diff HEAD

 删除：
  - 删除分支：
    - 远程： git push origin --delete [branch name]
    - 本地： git branch -D [branch name]
  
 复制：
  - 复制分支a文件到b分支上： git checkout [branch a] -- [分支a的目标文件夹相对路径]