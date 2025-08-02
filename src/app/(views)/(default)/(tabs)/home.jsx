import { Dimensions, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLogo from "../../../../components/app-logo";
import {
  IconButton,
  Text,
  useTheme,
  Button,
  DataTable,
} from "react-native-paper";
import User from "../../../../components/user";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import axios from "../../../../api/axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../../../../contexts/auth-context";

const padding = 16;
const screenWidth = Dimensions.get("window").width;
const availableWidth = screenWidth - padding * 2;
const itemWidth = availableWidth / 4;

export default function Home() {
  const theme = useTheme();
  const { user } = useAuthContext();

  const items = [
    {
      title: "Classes",
      icon: "easel-outline",
      href: `/home/classes`,
    },
    {
      title: "Enrollment Record",
      icon: "library-outline",
      href: "/home/enrollment-record",
    },
  ];

  const { data } = useQuery({
    queryKey: ["current_classes", user.id],
    queryFn: async () => {
      const { data } = await axios.post("/current-student-classes");
      return data;
    },
  });

  function convertToAMPM(time) {
    if (!time || typeof time !== "string" || !time.includes(":")) return "";
    const [hour, minute] = time.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const convertedHour = hour % 12 || 12;
    return `${convertedHour}:${minute.toString().padStart(2, "0")} ${ampm}`;
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = daysOfWeek[new Date().getDay()];

  const todayClasses =
    data?.classes?.filter((subject) => subject.day === today) ?? [];

  return (
    <SafeAreaView className="flex-1 pb-[54px]">
      <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 16 }}>
        <View className="p-4 gap-8">
          <View className="flex-row items-center justify-between">
            <View>
              <AppLogo />
            </View>
            <IconButton
              onPress={() => router.push("/home/notification")}
              icon={(props) => (
                <Ionicons
                  {...props}
                  name="notifications-outline"
                  color={theme.colors.primary}
                />
              )}
            />
          </View>
          <User />
        </View>
        <View>
          <View
            style={{
              backgroundColor: theme.colors.primary,
            }}
            className="gap-2 p-4"
          >
            <Text
              style={{
                fontFamily: "Figtree-SemiBold",
                fontSize: 18,
                color: theme.colors.onPrimary,
              }}
            >
              {data?.schoolYear.start_year} - {data?.schoolYear.end_year} |{" "}
              {data?.schoolYear.semester_name} Semester
            </Text>
            <Text
              style={{
                fontFamily: "Figtree-Regular",
                fontSize: 14,
                color: theme.colors.onPrimary,
              }}
            >
              {todayClasses.length > 0
                ? "Classes scheduled for "
                : "No class schedule for "}
              <Text
                style={{
                  fontFamily: "Figtree-Medium",
                  fontSize: 14,
                  color: theme.colors.onPrimary,
                }}
              >
                {today}
              </Text>
            </Text>
          </View>
          <DataTable>
            {todayClasses.map((subject, index) => (
              <React.Fragment key={index}>
                <DataTable.Row>
                  <DataTable.Cell>
                    <Text
                      style={{
                        fontFamily: "Figtree-Medium",
                        fontSize: 13,
                      }}
                    >
                      {subject.descriptive_title}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    <Text
                      style={{
                        fontFamily: "Figtree-Medium",
                        fontSize: 13,
                      }}
                    >
                      {subject.start_time === "TBA"
                        ? "TBA"
                        : `${convertToAMPM(subject.start_time)} - ${convertToAMPM(subject.end_time)}`}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    <Text
                      style={{
                        fontFamily: "Figtree-Medium",
                        fontSize: 13,
                      }}
                    >
                      {subject.room_name ?? "TBA"}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                {subject.secondary_schedule && (
                  <DataTable.Row>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontFamily: "Figtree-Medium",
                          fontSize: 13,
                        }}
                      >
                        {subject.descriptive_title} (2nd Schedule)
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                      <Text
                        style={{
                          fontFamily: "Figtree-Medium",
                          fontSize: 13,
                        }}
                      >
                        {subject.secondary_schedule.start_time === "TBA"
                          ? "TBA"
                          : `${convertToAMPM(subject.secondary_schedule.start_time)} - ${convertToAMPM(subject.secondary_schedule.end_time)}`}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                      <Text
                        style={{
                          fontFamily: "Figtree-Medium",
                          fontSize: 13,
                        }}
                      >
                        {subject.secondary_schedule.room_name ?? "TBA"}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                )}
              </React.Fragment>
            ))}
          </DataTable>
          <View className="items-end px-1 pt-1">
            <Button onPress={() => router.push("/home/classes")}>
              See All Classes
            </Button>
          </View>
        </View>
        <View
          style={{
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            backgroundColor: theme.colors.primary,
          }}
          className="flex-1 p-4"
        >
          <View className="flex-row flex-wrap">
            {items.map((item, index) => (
              <View
                className="items-center"
                key={index}
                style={{
                  width: itemWidth,
                  marginBottom: 8,
                }}
              >
                <IconButton
                  onPress={() => router.push(item.href)}
                  size={50}
                  mode="contained"
                  icon={() => (
                    <Ionicons
                      name={item.icon}
                      size={35}
                      color={theme.colors.primary}
                    />
                  )}
                />
                <Text
                  style={{
                    fontFamily: "Figtree-Medium",
                    fontSize: 14,
                    color: theme.colors.onPrimary,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
