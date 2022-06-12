#### 数据类型

##### 原始数据类型
- number
- boolean
- string
- undefined
- null
- symbol(ES6)
- bigInt(ES10)

> void类型和undefined & null的区别
```typescript
    let a: number = undefined // 编译不会报错

    let u: void;
    let b: number = u   // 这样会报错
```

##### 任意值类型
当不声明时会默认设置为任意值类型，任意值类型可以访问其内的任意属性

##### 类型推论
```typescript
    let str = 'aaa' //此时默认设置str为string类型，再设置为其他类型不行
```

##### 联合类型
``` typescript
    let a: number | string

    function(params: number | string): number {
        return params.length    // 编译错误，此时可能是数字 ｜ string，需要Number(params.length)
    } 
```


##### 接口
> 用于类型检测 ｜ 类的抽象描述（implements）

> 写法： **通常在接口前用I命名前缀**

- 可选属性
```ts
interface foo {
    name: string;
    age?: number
}
```

- 