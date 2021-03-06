# 一些关于数组的问题

分为暴力解法, 预处理数组解法, 以及最优解法, 通常是从题意出发, 利用题本身的信息, 抽象出来的一个非常好的解法  
最优解通常由两种情况得来: 一种是根据数据样本本身进行特征分析; 再者是题目本身的标准很特殊, 总能找到相关的漏洞去钻.  

## maxABS问题

一个arr, size > 2, 则有size - 1种划分为左右两部分的方案, 要求求出这么多种左右方案下, |max_left - max_right|的最大值.

### 暴力解法

暴力解法十分直观, 在for循环的作用下, `for(let i = 0; i < arr.length; i++) {}`, 
每次都遍历0 ~ i, i + 1 ~ arr.length - 1, 并且每次都与上次的最大值进行比较. 

### 预处理数组法

准备两个辅助数组, 一个从i = 0, 开始遍历, 记录下每个位置比较得到的最大值, 形成辅助数组1, 另一个从arr.length - 1开始遍历, 同样记录比较得到的最大值, 
形成辅助数组2, 则在进行结果的输出时, 仅需再同时遍历辅助数组1, 2即可得到结果

### 最优解解法

十分取巧, 既然是要求两个最大值的绝对值大小, 则可以转化为数组内的最大值arr_max, 减去另一边的较最大值max_aside.
则由于分边均要从arr[0]及arr[arr.length - 1]开始, 则其中的max_left或max_right必然要大于或等于它.
因此, 在求出数组最大值时, 仅需将arr_max - arr[0] 与arr_max - arr[arr.length - 1]的值进行比较即可.(考虑到两边的值可能为负数的情况)