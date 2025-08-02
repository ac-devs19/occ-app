import { Ionicons } from "@expo/vector-icons";
import { useTheme, Card, Text } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ScrollView, View } from "react-native";
import axios from "../../../../../api/axios";
import { useAuthContext } from "../../../../../contexts/auth-context";

export default function Classes() {
  const theme = useTheme();
  const { user } = useAuthContext();

  const { data, isLoading, isError } = useQuery({
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

  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function getFirstLetter(word) {
    if (!word) return "";
    return word.charAt(0);
  }

  function formatFullName(userInfo) {
    const { last_name, first_name, middle_name } = userInfo;
    return `${capitalizeFirstLetter(last_name)}, ${capitalizeFirstLetter(first_name)}${
      middle_name
        ? " " + getFirstLetter(capitalizeFirstLetter(middle_name)) + "."
        : ""
    }`;
  }

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Error loading classes</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
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
          Your class list for the current semester
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 16, padding: 16 }}>
        {data?.classes.map((classInfo, index) => (
          <React.Fragment key={index}>
            <Card
              style={{
                shadowColor: "transparent",
              }}
            >
              <View className="gap-1 p-4">
                <Text
                  style={{
                    fontFamily: "Figtree-SemiBold",
                    fontSize: 16,
                  }}
                >
                  {classInfo.descriptive_title}
                </Text>
                <Text
                  style={{
                    fontFamily: "Figtree-Medium",
                    fontSize: 14,
                  }}
                >
                  {classInfo.day}
                </Text>
              </View>
              <View className="p-4 gap-2">
                <View className="flex-row gap-2 items-center">
                  <Ionicons
                    size={24}
                    color={theme.colors.primary}
                    name="time-outline"
                  />
                  <Text
                    style={{
                      fontFamily: "Figtree-Medium",
                      fontSize: 14,
                    }}
                  >
                    {classInfo.start_time === "TBA"
                      ? "TBA"
                      : `${convertToAMPM(classInfo.start_time)} - ${convertToAMPM(classInfo.end_time)}`}
                  </Text>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Ionicons
                    size={24}
                    color={theme.colors.primary}
                    name="location-outline"
                  />
                  <Text
                    style={{
                      fontFamily: "Figtree-Medium",
                      fontSize: 14,
                    }}
                  >
                    {classInfo.room_name ?? "TBA"}
                  </Text>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Ionicons
                    size={24}
                    color={theme.colors.primary}
                    name="person-outline"
                  />
                  <Text
                    style={{
                      fontFamily: "Figtree-Medium",
                      fontSize: 14,
                    }}
                  >
                    {classInfo.first_name ? formatFullName(classInfo) : "TBA"}
                  </Text>
                </View>
              </View>
            </Card>
            {classInfo.secondary_schedule && (
              <Card
                style={{
                  shadowColor: "transparent",
                }}
              >
                <View className="gap-1 p-4">
                  <Text
                    style={{
                      fontFamily: "Figtree-SemiBold",
                      fontSize: 16,
                    }}
                  >
                    {classInfo.descriptive_title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Figtree-Medium",
                      fontSize: 14,
                    }}
                  >
                    {classInfo.secondary_schedule.day} (2nd Schedule)
                  </Text>
                </View>
                <View className="p-4 gap-2">
                  <View className="flex-row gap-2 items-center">
                    <Ionicons
                      size={24}
                      color={theme.colors.primary}
                      name="time-outline"
                    />
                    <Text
                      style={{
                        fontFamily: "Figtree-Medium",
                        fontSize: 14,
                      }}
                    >
                      {classInfo.secondary_schedule.start_time === "TBA"
                        ? "TBA"
                        : `${convertToAMPM(classInfo.secondary_schedule.start_time)} - ${convertToAMPM(classInfo.secondary_schedule.end_time)}`}
                    </Text>
                  </View>
                  <View className="flex-row gap-2 items-center">
                    <Ionicons
                      size={24}
                      color={theme.colors.primary}
                      name="location-outline"
                    />
                    <Text
                      style={{
                        fontFamily: "Figtree-Medium",
                        fontSize: 14,
                      }}
                    >
                      {classInfo.secondary_schedule.room_name ?? "TBA"}
                    </Text>
                  </View>
                  <View className="flex-row gap-2 items-center">
                    <Ionicons
                      size={24}
                      color={theme.colors.primary}
                      name="person-outline"
                    />
                    <Text
                      style={{
                        fontFamily: "Figtree-Medium",
                        fontSize: 14,
                      }}
                    >
                      {classInfo.first_name ? formatFullName(classInfo) : "TBA"}
                    </Text>
                  </View>
                </View>
              </Card>
            )}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}
