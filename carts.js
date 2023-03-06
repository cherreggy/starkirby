import { useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import NavBar from "./Nav";

export default function Cart(props) {
  //   console.log(props.route.params.data);
  const Item = (p) => {
    const handelNumsPlus = () => {
      const newData = [];
      props.route.params.data.forEach((item) => {
        var obj2 = JSON.parse(JSON.stringify(item));
        if (obj2.id == p.item.item.id) {
          obj2.nums += 1;
        }
        newData.push(obj2);
      });
      props.route.params.setData(newData);
    };

    const handelNumsMinus = () => {
      console.log(p.item.item.id);
      const newData = [];
      props.route.params.data.forEach((item) => {
        if (item.id == p.item.item.id) {
          item.nums -= 1;
        }
        newData.push(item);
      });
      props.route.params.setData(newData);
    };
    if (p.item.item.nums > 0)
      return (
        <View
          style={{
            borderRadius: 20,
            height: 160,
            width: 370,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: 10,
            marginLeft: 20,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#eee",
          }}
        >
          <Image
            source={{
              uri: p.item.item.link,
            }}
            style={{
              height: 130,
              width: 130,
              marginRight: 20,
              borderRadius: 18,
            }}
          />
          {/* 显示价格和数量区域 */}
          <View style={{ flexDirection: "column" }}>
            {/* 上部显示所需星星币总数 */}
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                //   backgroundColor: "black",
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
              <Text style={{ fontSize: 25, fontWeight: 400 }}>
                {p.item.item.price * p.item.item.nums}
              </Text>
            </View>
            {/* 下部显示加减数目和总数 */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                //   backgroundColor: "black",
              }}
            >
              <TouchableOpacity onPress={handelNumsMinus}>
                <Image
                  source={require("./images/minus.png")}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              </TouchableOpacity>

              <Text style={{ textAlign: "center", padding: 10, fontSize: 20 }}>
                {p.item.item.nums}
              </Text>

              <TouchableOpacity onPress={handelNumsPlus}>
                <Image
                  source={require("./images/plus.png")}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
  };

  const renderItem = (item) => {
    return <Item item={item} />;
  };
  // 计算消耗星星币总数
  var sum = 0;

  props.route.params.data.forEach((item) => {
    if (item.nums > 0) {
      sum += item.nums * item.price;
    }
  });

  if (sum > props.route.params.coins) {
    Alert.alert("No enough star coins!");
  }
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
