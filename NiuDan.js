import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";

function NiuDanList(props) {
  // console.log(props);
  const Item = (p) => {
    const handelNums = () => {
      console.log(p.item.item.id);
      const newData = [];
      props.data.forEach((item) => {
        if (item.id == p.item.item.id) {
          item.nums += 1;
        }
        newData.push(item);
      });
      props.setData(newData);
    };
    return (
      <TouchableOpacity
        style={{
          borderRadius: 20,
          overflow: "hidden",
          height: 200,
          width: 160,
          margin: 20,
          backgroundColor: "#F89FBD",
        }}
        onPress={handelNums}
      >
        <View
          style={{
            borderRadius: 20,
            height: 160,
            width: 160,
            borderColor: "pink",
            borderWidth: 2,
          }}
        >
          <Image
            source={{
              uri: p.item.item.link,
            }}
            style={{
              height: "100%",
              width: "100%",
              marginRight: 20,
              borderRadius: 18,
            }}
          />
          <View
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              alignItems: "center",
              // backgroundColor: "black",
            }}
          >
            <Image
              source={require("./images/starcoin.png")}
              style={{
                height: 25,
                width: 25,
                marginRight: 20,
              }}
            />
            <Text style={{ fontSize: 24, color: "#C12855", fontWeight: 700 }}>
              {p.item.item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = (item) => {
    return <Item item={item} />;
  };
  // console.log(props);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default NiuDanList;
