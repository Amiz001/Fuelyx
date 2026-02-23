import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    alignItems: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 40,
    gap: 50,
  },
  subTitle: {
    fontSize: 16,
    borderBottomWidth: 2,
    paddingBottom: 8,
    width: 236.5,
    borderBottomColor: "#E5E7EB",
  },
  card: {
    width: 322,
    height: 72,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    borderColor: "#DBEAFE",
    elevation: 10,
    flexDirection: "row",
  },
  card2: {
    width: 279,
    height: 72,
    backgroundColor: "#6B7280",
    borderRadius: 10,
    borderColor: "#DBEAFE",
    elevation: 10,
    flexDirection: "row",
  },
  cardHalf: {
    width: 142,
    height: 72,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  card2Half: {
    width: 123.04,
    height: 72,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardHalfText: {
    fontSize: 16,
    fontWeight: "500",
    borderBottomColor: "#2563EB",
  },
  card2HalfText: {
    fontSize: 16,
    fontWeight: "500",
    borderBottomColor: "#6B7280",
  },
  cardText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#ffffff",
  },
  cardSubText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffffff",
    marginTop: 10,
  },
  textContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginLeft: 30,
  },
  graphDateText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#111827",
  },
  graphMainText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
  },
  graphCard: {
    position: "absolute",
    bottom: 80,
    left: "50%",
    transform: [{ translateX: -180.5 }],
    width: 361,
    height: 280,
    backgroundColor: "#fff",
    borderColor: "#E5E7EB",
    borderWidth: 1,
    elevation: 8,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  graphContainer: {
    height: 200,
    width: "100%",
  },
  bar: {
    width: 40,
    backgroundColor: "#D9D9D9",
  },
  avgLine: {
    position: "absolute",
    zIndex: 100,
    right: 0,
    width: "100%",
    height: 1,
    borderStyle: "dashed",
    borderWidth: 0.9,
    borderColor: "#2563EB",
  },
  barContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#6b7280",
  },
  xAxisData: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  xAxisText: {
    fontWeight: "500",
  },
});

const data = [
  { index: 0, date: "Jan 01", day: "Sunday", cost: 3600, liters: 12 },
  { index: 1, date: "Jan 02", day: "Monday", cost: 6000, liters: 2 },
  { index: 2, date: "Jan 03", day: "Tuesday", cost: 6000, liters: 24 },
  { index: 3, date: "Jan 04", day: "Wednesday", cost: 5000, liters: 17 },
  { index: 4, date: "Jan 05", day: "Thursday", cost: 3600, liters: 12 },
  { index: 5, date: "Jan 06", day: "Friday", cost: 3000, liters: 10 },
  { index: 6, date: "Jan 21", day: "Wednesday", cost: 300, liters: 1 },
];

function HomeScreen() {
  const [max, setMax] = useState(0);
  const [average, setAverage] = useState(0);
  const [focusBar, setFocusBar] = useState(0);

  const [graphDate, setGraphDate] = useState("");
  const [graphDay, setGraphDay] = useState("");
  const [graphCost, setGraphCost] = useState(0);
  const [graphAmount, setGraphAmount] = useState(0);

  const today = new Date();
  const todayMonth = today.toLocaleString("default", { month: "short" });
  const todayDate = today.getDate().toString().padStart(2, "0");

  const totalCost = data.reduce((sum, item) => sum + item.cost, 0);
  const totalLiters = data.reduce((sum, item) => sum + item.liters, 0);

  useEffect(() => {
    const maxValue = Math.max(...data.map((d) => d.cost));
    const avgValue =
      data.reduce((sum, item) => sum + item.cost, 0) / data.length;

    setMax(maxValue);
    setAverage(avgValue);
    handleBarPress(0);
  }, []);

  function getDateLabel(index) {
    const [month, day] = data[index].date.split(" ");
    if (month === todayMonth && day === todayDate) {
      return "Today";
    }
    return data[index].day;
  }

  function handleBarPress(index) {
    setFocusBar(index);
    setGraphDate(data[index].date);
    setGraphDay(getDateLabel(index));
    setGraphCost(data[index].cost);
    setGraphAmount(data[index].liters);
  }

  return (
    <View style={styles.container}>
      <View style={{ gap: 18 }}>
        <Text style={styles.subTitle}>This month summary</Text>

        <View style={{ alignItems: "center", gap: 10 }}>
          <View style={styles.card}>
            <View style={styles.cardHalf}>
              <Text style={styles.cardHalfText}>Total Cost</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.cardText}>{totalCost}</Text>
              <Text style={styles.cardSubText}>LKR</Text>
            </View>
          </View>

          <View style={styles.card2}>
            <View style={styles.card2Half}>
              <Text style={styles.card2HalfText}>Total Liters</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.cardText}>{totalLiters}</Text>
              <Text style={styles.cardSubText}>Liters</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ gap: 18, alignItems: "flex-start", flex: 1 }}>
        <Text style={styles.subTitle}>Summary chart</Text>

        <View style={{ gap: 5 }}>
          <Text style={styles.graphDateText}>
            {graphDay + " " + graphDate}
          </Text>
          <Text style={styles.graphMainText}>
            {graphCost + " LKR | " + graphAmount + " Liters"}
          </Text>
        </View>

        <View style={styles.graphCard}>
          <View style={styles.graphContainer}>
            {max > 0 && (
              <View
                style={[
                  styles.avgLine,
                  { bottom: (average / max) * 200 },
                ]}
              />
            )}

            <View style={styles.barContainer}>
              {data.map((d, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleBarPress(index)}
                  style={[
                    styles.bar,
                    {
                      height: max ? (d.cost / max) * 200 : 0,
                      backgroundColor:
                        focusBar === index ? "#2563EB" : "#D9D9D9",
                    },
                  ]}
                />
              ))}
            </View>
          </View>

          <View style={styles.xAxisData}>
            <Text style={styles.xAxisText}>M</Text>
            <Text style={styles.xAxisText}>T</Text>
            <Text style={styles.xAxisText}>W</Text>
            <Text style={styles.xAxisText}>T</Text>
            <Text style={styles.xAxisText}>F</Text>
            <Text style={styles.xAxisText}>S</Text>
            <Text style={styles.xAxisText}>S</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;