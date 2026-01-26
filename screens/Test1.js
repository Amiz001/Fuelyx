import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    alignItems: "start",
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
    borderColor: "#DBEAFE",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  card2Half: {
    width: 123.04,
    height: 72,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#DBEAFE",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  cardHalfText: {
    fontSize: 16,
    fontWeight: 500,
    borderBottomColor: "#2563EB",
  },
  card2HalfText: {
    fontSize: 16,
    fontWeight: 500,
    borderBottomColor: "#6B7280",
  },
  cardText: {
    fontSize: 32,
    fontWeight: 700,
    color: "#ffffff",
  },
  cardSubText: {
    fontSize: 16,
    fontWeight: 350,
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
    fontWeight: 400,
    color: "#111827",
  },
  graphMainText: {
    fontSize: 20,
    fontWeight: 600,
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
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  graphContainer: {
    height: 250,
  },
  bar: {
    width: 40,
    backgroundColor: "#D9D9D9",
  },
  avgLine: {
    position: "absolute",
    zIndex: 10,
    right: 20,
    width: "100%",
    height: 1,
    borderStyle: "dashed",
    borderWidth: 0.8,
    borderColor: "#2563EB",
  },
  barContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-end",
    borderTopWidth: 0,
    borderTopColor: "#6b7280",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#6b7280",
    paddingTop: 0,
  },
});

const data = [
  { index: 0, date: "01-01-2026", day: "Sunday", cost: 3600, liters: 12 },
  { index: 1, date: "02-01-2026", day: "monday", cost: 600, liters: 2 },
  { index: 2, date: "03-01-2026", day: "tuesday", cost: 6000, liters: 0 },
  { index: 3, date: "04-01-2026", day: "wednsday", cost: 5000, liters: 17 },
  { index: 4, date: "05-01-2026", day: "Thursday", cost: 3600, liters: 12 },
  { index: 5, date: "06-01-2026", day: "Friday", cost: 3000, liters: 10 },
  { index: 6, date: "07-01-2026", day: "Saturday", cost: 0, liters: 0 },
];

function HomeScreen() {
  const [max, setMax] = useState(0);
  const [Average, setAverage] = useState(0);
  const [focusBar, setFocusBar] = useState(1);

  useEffect(() => {
    const maxValue = Math.max(...data.map((d) => d.cost));
    const avgValue = data.reduce((a, b) => a + b.cost, 0) / data.length;
    setMax(maxValue);
    setAverage(avgValue);
  }, []);

  function handleBarPress(index) {
    setFocusBar(index);
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
              <Text style={styles.cardText}>12000</Text>
              <Text style={styles.cardSubText}>LKR</Text>
            </View>
          </View>

          <View style={styles.card2}>
            <View style={styles.card2Half}>
              <Text style={styles.card2HalfText}>Total Liters</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.cardText}>160</Text>
              <Text style={styles.cardSubText}>Liters</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ gap: 18, alignItems: "start", flex: 1 }}>
        <Text style={styles.subTitle}>Summary chart</Text>

        <View style={{ gap: 5 }}>
          <Text style={styles.graphDateText}>Today, January 12</Text>
          <Text style={styles.graphMainText}>3600 LKR | 12 Liters</Text>
        </View>

        <View style={styles.graphCard}>
          <View
            style={[styles.avgLine, { bottom: `${(Average / max) * 100}%` }]}
          ></View>
          <View style={styles.barContainer}>
            {data.map((d, index) => (
              <Pressable
                key={index}
                onPress={() => handleBarPress(index)}
                style={({ pressed }) => [
                  styles.bar,
                  {
                    height: `${(d.cost / max) * 100}%`,
                    backgroundColor:
                      focusBar == d.index ? "#2563EB" : "#D9D9D9",
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
