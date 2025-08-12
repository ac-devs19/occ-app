import { useQuery } from "@tanstack/react-query";
import { Alert, ScrollView, View } from "react-native";
import axios from "~/api/axios";
import { Text } from "~/components/ui/text";
import { useAuthContext } from "~/contexts/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import React from "react";
import Icon from "~/components/icon";
import LoadingScreen from "~/components/loading-screen";
import { router } from "expo-router";

interface SchoolYear {
  id: number;
  start_year: number;
  end_year: number;
  semester_name: string;
}

interface SecondarySchedule {
  id: number;
  faculty_id: number;
  room_id: number;
  room_name: string;
  year_section_subjects_id: string;
  day: string;
  start_time: string;
  end_time: string;
}

interface ClassInfo {
  id: number;
  enrolled_students_id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  room_name: string;
  descriptive_title: string;
  start_time: string;
  end_time: string;
  day: string;
  secondary_schedule: SecondarySchedule;
}

interface ClassesResponse {
  schoolYear: SchoolYear;
  classes: ClassInfo[];
}

export default function Classes() {
  const { user } = useAuthContext();

  const { data, isLoading, error, isError } = useQuery<ClassesResponse>({
    queryKey: ["current_classes", user?.id],
    queryFn: async () => {
      try {
        const { data } = await axios.get("/mobile/current-student-classes");
        return data;
      } catch (error: any) {
        const message = error.response?.data?.message;
        throw new Error(message);
      }
    },
  });

  function convertToAMPM(time: string) {
    if (!time || typeof time !== "string" || !time.includes(":")) return "";
    const [hour, minute] = time.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const convertedHour = hour % 12 || 12;
    return `${convertedHour}:${minute.toString().padStart(2, "0")} ${ampm}`;
  }

  function capitalizeFirstLetter(str: string) {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function getFirstLetter(word: string) {
    if (!word) return "";
    return word.charAt(0);
  }

  function formatFullName(userInfo: any) {
    const { last_name, first_name, middle_name } = userInfo;
    return `${capitalizeFirstLetter(last_name)}, ${capitalizeFirstLetter(
      first_name
    )}${
      middle_name
        ? " " + getFirstLetter(capitalizeFirstLetter(middle_name)) + "."
        : ""
    }`;
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

  const sortedClasses = React.useMemo(() => {
    if (!data?.classes) return [];

    return [...data.classes].sort((a, b) => {
      const isTodayA =
        a.day === today || a.secondary_schedule?.day === today ? 1 : 0;
      const isTodayB =
        b.day === today || b.secondary_schedule?.day === today ? 1 : 0;

      if (isTodayA !== isTodayB) {
        return isTodayB - isTodayA;
      }

      if (isTodayA && isTodayB) {
        const aStart =
          a.start_time === "TBA"
            ? Infinity
            : Number(a.start_time.replace(":", ""));
        const bStart =
          b.start_time === "TBA"
            ? Infinity
            : Number(b.start_time.replace(":", ""));
        return aStart - bStart;
      }

      return 0;
    });
  }, [data?.classes, today]);

  return isLoading ? (
    <LoadingScreen open={isLoading} />
  ) : isError ? (
    Alert.alert("Message", error.message, [
      {
        text: "Okay",
        onPress: () => router.back(),
      },
    ])
  ) : (
    <View className="flex-1">
      <View className="p-4 bg-primary">
        <Text className="font-figtree-semibold text-white">
          {data?.schoolYear.start_year} - {data?.schoolYear.end_year} |{" "}
          {data?.schoolYear.semester_name} Semester
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 16, padding: 16 }}>
        {sortedClasses.map((classInfo, index) => (
          <React.Fragment key={index}>
            <Card
              className={`rounded-xl ${
                today === classInfo.day ? "border-green-600" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="font-figtree-semibold text-base">
                  {classInfo.descriptive_title}
                </CardTitle>
                <CardDescription
                  className={`font-figtree-medium ${
                    today === classInfo.day ? "text-green-600" : ""
                  }`}
                >
                  {classInfo.day}
                </CardDescription>
              </CardHeader>
              <CardContent className="gap-2">
                <View className="flex-row items-center gap-2">
                  <Icon name="Clock" className="text-primary" />
                  <Text className="font-figtree-medium">
                    {classInfo.start_time === "TBA"
                      ? "TBA"
                      : `${convertToAMPM(
                          classInfo.start_time
                        )} - ${convertToAMPM(classInfo.end_time)}`}
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Icon name="MapPin" className="text-primary" />
                  <Text className="font-figtree-medium">
                    {classInfo.room_name ?? "TBA"}
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Icon name="User" className="text-primary" />
                  <Text className="font-figtree-medium">
                    {classInfo.first_name ? formatFullName(classInfo) : "TBA"}
                  </Text>
                </View>
              </CardContent>
            </Card>
            {classInfo.secondary_schedule && (
              <Card
                className={`rounded-xl ${
                  today === classInfo.secondary_schedule.day
                    ? "border-green-600"
                    : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="font-figtree-semibold text-base">
                    {classInfo.descriptive_title}
                  </CardTitle>
                  <CardDescription
                    className={`font-figtree-medium ${
                      today === classInfo.day ? "text-green-600" : ""
                    }`}
                  >
                    {classInfo.secondary_schedule.day}{" "}
                    <Text className="text-sm text-primary">
                      (Second Schedule)
                    </Text>
                  </CardDescription>
                </CardHeader>
                <CardContent className="gap-2">
                  <View className="flex-row items-center gap-2">
                    <Icon name="Clock" className="text-primary" />
                    <Text className="font-figtree-medium">
                      {classInfo.secondary_schedule.start_time === "TBA"
                        ? "TBA"
                        : `${convertToAMPM(
                            classInfo.secondary_schedule.start_time
                          )} - ${convertToAMPM(
                            classInfo.secondary_schedule.end_time
                          )}`}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    <Text className="font-figtree-medium">
                      {classInfo.secondary_schedule.room_name ?? "TBA"}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Icon name="User" className="text-primary" />
                    <Text className="font-figtree-medium">
                      {classInfo.first_name ? formatFullName(classInfo) : "TBA"}
                    </Text>
                  </View>
                </CardContent>
              </Card>
            )}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}
