import { StyleSheet, Text, View, Image } from "react-native";

function NavBar(props) {
  return (
    <View style={styles.topBar}>
      {/* 左边块 */}
      <View style={styles.title}>
        <Image
          source={require("./images/kirby.gif")}
          style={{ height: 50, width: 50, marginRight: 20, marginTop: -10 }}
        />
        <Text
          style={{
            flexDirection: "row",
            fontSize: 30,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          <Text style={{ fontSize: 40, color: "#FF97C1" }}>K</Text>
          <Text>irby</Text>
        </Text>
      </View>
      {/* 右边块 */}
      <View style={styles.coins}>
        <Image
          source={require("./images/starcoin.png")}
          style={{ height: 30, width: 30, marginRight: 20 }}
        />
        <Text style={{ fontSize: 30, fontWeight: 700, color: "#000" }}>
          {props.coins}
        </Text>
      </View>
    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    width: "100%",
    height: 60,
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
