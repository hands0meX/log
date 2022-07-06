在线编辑器
 - 如https://github.com/hands0meX/log 中的 .com 转换成.dev即可启动在线编辑器

#### 工作中常用操作：
    当远程分支超越本地分支：git rebase origin/远程分支名
    去除想要的提交： git rebase -i head~[往回退几个head]
    查看只记得关键词的分支： git log --grep [关键词]
    查看单文件的历史提交： git log -p [相对路径]
    修改当前commit的提交信息 git commit --amend

#### stash
 git stash pop stash@{[index]} 将某个stash条特征获取 

#### 查看区别： 
  - 工作 - 暂存： git diff
  - 暂存 - 版本： git diff --cached
  - 工作 - 版本： git diff HEAD

#### 删除：
  - 删除分支：
    - 远程： git push origin --delete [branch name]
    - 本地： git branch -D [branch name]
      - 删除本地的所有分支 git branch | grep -v [不删除的分支名] | xargs git branch -D
  
#### 复制：
  - 复制分支a文件到b分支上： git checkout [branch a] -- [分支a的目标文件夹相对路径]


### 合并
#### cherry-pick
pick多个





#### 分支与标签：
  - 标签
    轻量标签
      add     git tag vx.x.x -m[标注信息]        git push origin [tag name]
      delete  git tag -d vx.x.x   git push origin --delete vx.x.x 
      git tag -l 查看tag列表
  - 当分支和标签命名相同时候
     使用 refs/tags/xx 与 ref/heads/xx来区分 删除的是分支还是标签名


##### 子模块
添加子模块：  git submodule add [项目路径]
克隆一个含有子模块的项目的操作： git submodule init & git submodule update


#### 查看某作者的提交
git log --author='authorName'

#### 查看单文件的提交记录
git log [filename]