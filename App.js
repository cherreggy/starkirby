import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import NavBar from "./Nav";
import NiuDanList from "./NiuDan";
import Cart from "./carts";
// 路由容器
import { NavigationContainer } from "@react-navigation/native";
// 栈式导航
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Home(props) {
  console.log(props.route.params.setData);
  return (
    <View style={styles.container}>
      {/* 上面导航栏 */}
      <NavBar coins={props.route.params.coins}></NavBar>
      {/* 中间主体部分 */}

      <NiuDanList
        data={props.route.params.data}
        setData={props.route.params.setData}
      ></NiuDanList>
      {/* 按钮 */}
      <TouchableHighlight
        onPress={() => props.navigation.navigate("Star Cart")}
      >
        <View
          style={{
            height: 60,
            // borderTopLeftRadius: 50,
            // borderTopRightRadius: 50,
            backgroundColor: "purple",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./images/sun.png")}
            style={{
              height: 40,
              width: 40,
              marginRight: 20,
            }}
          />
          <Text style={{ fontSize: 30, color: "white" }}>Go To Cart</Text>
        </View>
      </TouchableHighlight>
      {/* 购物车 */}
    </View>
  );
}
export default function App() {
  // 虚拟数据
  const [DATA, setData] = useState([
    {
      id: 0, // 扭蛋编号
      link: "https://img9.doubanio.com/view/group_topic/l/public/p428758786.webp", // 扭蛋图片链接
      nums: 1, // 购买扭蛋数目
      price: 500,
    },
    {
      id: 1, // 扭蛋编号
      link: "https://img2.doubanio.com/view/group_topic/l/public/p428758771.webp", // 扭蛋图片链接
      nums: 2, // 购买扭蛋数目
      price: 500,
    },
    {
      id: 2, // 扭蛋编号
      link: "https://img9.doubanio.com/view/group_topic/l/public/p428758775.webp", // 扭蛋图片链接
      nums: 0, // 购买扭蛋数目
      price: 100,
    },
    {
      id: 3, // 扭蛋编号
      link: "https://img9.doubanio.com/view/group_topic/l/public/p428758794.webp", // 扭蛋图片链接
      nums: 1, // 购买扭蛋数目
      price: 900,
    },
    {
      id: 4, // 扭蛋编号
      link: "https://img1.doubanio.com/view/group_topic/l/public/p428758760.webp", // 扭蛋图片链接
      nums: 0, // 购买扭蛋数目
      price: 200,
    },
    {
      id: 5, // 扭蛋编号
      link: "https://img1.doubanio.com/view/group_topic/l/public/p428758808.webp", // 扭蛋图片链接
      nums: 1, // 购买扭蛋数目
      price: 800,
    },
    {
      id: 6, // 扭蛋编号
      link: "https://img9.doubanio.com/view/group_topic/l/public/p428758745.webp", // 扭蛋图片链接
      nums: 0, // 购买扭蛋数目
      price: 600,
    },
    {
      id: 7, // 扭蛋编号
      link: "https://img9.doubanio.com/view/group_topic/l/public/p428758805.webp", // 扭蛋图片链接
      nums: 0, // 购买扭蛋数目
      price: 100,
    },
    {
      id: 8, // 扭蛋编号
      link: "https://img2.doubanio.com/view/group_topic/l/public/p428758753.webp", // 扭蛋图片链接
      nums: 0, // 购买扭蛋数目
      price: 200,
    },
  ]);
  const [coins, setCoins] = useState(5000);
  return (
    <NavigationContainer>
      <Stack.Navigator
        useLegacyImplementation
        initialRouteName="Chose A Kirby!"
      >
        <Stack.Screen
          name="Chose A Kirby!"
          component={Home}
          initialParams={{ data: DATA, coins: coins, setData: setData }}
        />
        <Stack.Screen
          name="Star Cart"
          component={Cart}
          initialParams={{ data: DATA, coins: coins, setData: setData }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return <Home data={DATA} coins={coins}></Home>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  topBar: {
    flexDirection: "row",
    width: "100%",
    height: 80,
  },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0097DF",
    borderBottomLeftRadius: 30,
  },
  coins: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FE3A7F",
    borderBottomRightRadius: 30,
  },
});
