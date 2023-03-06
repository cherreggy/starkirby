###

# React Native <font color=deeppink>星之卡比扭蛋</font>🎮 游戏购物车

##### <font color=grey>姓名：宣正吉</font>

---

### 应用需求

1. 展示扭蛋列表，设计外观
2. 可将扭蛋添加到购物车，并在主界面显示所选扭蛋数目
3. 购物车内可删除所选扭蛋
4. 计算所花费星星币总额并显示在购物车下方
5. 上部信息栏显示所剩余星星币的数目，不足将无法购买

### 依赖项

```json
{
  "name": "starkirby",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@react-navigation/drawer": "^6.6.2",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.3.16",
    "expo": "~48.0.5",
    "expo-status-bar": "~1.4.4",
    "react": "18.2.0",
    "react-native": "0.71.3",
    "react-native-safe-area-context": "4.5.0",
    "react-native-screens": "~3.20.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
  "private": true
}
```

### 界面设计

页面设计总共分为三个部分：主要游戏列表、上部显示信息栏目和右侧抽屉用于查看已添加到购物车的扭蛋，页面内所有的样式设计全部都利用 stylesheet 设计在同一个文件当中。

上部信息栏采用双色设计，模仿 switch 左右不同色，左侧显示图标和标题，右侧显示所剩余星星币数目（直接将星星币数目写在 state 中，便于查错和静态页面编辑），上部作为一个单独的模块导入，传入的变量是星星币数目（只读）：

<center>
<image src="1.png" width=300/>
</center>

扭蛋类型列表采用 FlatList 设计，列表项采用大圆角设计，下部伸展出一部分作为星星币的展示，为了展示静态页面，我捏造了下面的数据：

```js
const DATA = [
  {
    id: 0, // 扭蛋编号
    link: "./images/k1.jpg", // 扭蛋图片链接
    nums: 0, // 购买扭蛋数目
  },
  {
    id: 1, // 扭蛋编号
    link: "./images/k2.jpg", // 扭蛋图片链接
    nums: 0, // 购买扭蛋数目
  },
  {
    id: 2, // 扭蛋编号
    link: "./images/k3.jpg", // 扭蛋图片链接
    nums: 0, // 购买扭蛋数目
  },
  {
    id: 3, // 扭蛋编号
    link: "./images/k4.jpg", // 扭蛋图片链接
    nums: 0, // 购买扭蛋数目
  },
  {
    id: 4, // 扭蛋编号
    link: "./images/k5.jpg", // 扭蛋图片链接
    nums: 0, // 购买扭蛋数目
  },
  {
    id: 5, // 扭蛋编号
    link: "./images/k6.jpg", // 扭蛋图片链接
    nums: 0, // 购买扭蛋数目
  },
  {
    id: 6, // 扭蛋编号
    link: "./images/k7.jpg", // 扭蛋图片链接
    nums: 0, // 购买扭蛋数目
  },
  {
    id: 7, // 扭蛋编号
    link: "./images/k8.jpg", // 扭蛋图片链接
    nums: 0, // 购买扭蛋数目
  },
  {
    id: 8, // 扭蛋编号
    link: "./images/k9.jpg", // 扭蛋图片链接
    nums: 0, // 购买扭蛋数目
  },
];
```

主页面列表的设计如下：

<center>
<image src="2.png" width=300/>
</center>

购物车按钮设计在屏幕的下侧，设置为黑色，打开后显示已添加的扭蛋和删除按钮，下面是购物车主页面的样式：

<center>
<image src="3.png" width=300/>
</center>

点击 Go to cart 后能够跳转到购物车页面，页面上显示扭蛋的价格和总价，总价暂时用静态变量代替，后续会添加函数计算：

<center>
<image src="4.png" width=300/>
</center>

### 数据逻辑处理

首先是总价计算，总价直接在购物车组件加载时计算，采用 hook 函数进行处理，当数据变化时，消耗星星币的总数也随之改变：

```js
export default function Cart(props) {
  // 计算消耗星星币总数
  var sum = 0;

  props.route.params.data.forEach((item) => {
    if (item.nums > 0) {
      sum += item.nums * item.price;
    }
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavBar coins={props.route.params.coins}></NavBar>
      <FlatList
        data={props.route.params.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 100 }}
      />
      {/* 显示总价 */}
      <View
        style={{
          height: 60,
          backgroundColor: "black",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./images/starcoin.png")}
          style={{
            height: 30,
            width: 30,
            marginRight: 20,
          }}
        />
        <Text
          style={{
            color: "white",
            textAlign: "center",
            lineHeight: 60,
            fontSize: 20,
            fontWeight: 200,
          }}
        >
          Full Price: <Text style={{ fontWeight: 500 }}>{sum}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
```

主页面中点击喜欢的扭蛋，可以将其添加到购物车，点击一次数据中对应扭蛋数目加一，转到购物车时，如果所拥有星星币数目不足提醒：

<center>
<image src="5.png" width=300/>
</center>

<font color=red>不能解决的问题！！！！</font>
在使用 react navigator 时，警告不能传入非序列型数据，这里我在全局设置一个 state 之后，传入的是 setstate 函数但是点击加减号的时候不能同步数据变化，只能在重新打开购物车时才能显示操作结果
