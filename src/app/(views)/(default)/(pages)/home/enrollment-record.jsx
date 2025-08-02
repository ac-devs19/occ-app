import { ScrollView, View } from "react-native";
import { DataTable, Text, useTheme } from "react-native-paper";
import axios from "../../../../../api/axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthContext } from "../../../../../contexts/auth-context";

export default function EnrollmentRecord() {
  const theme = useTheme();
  const { user } = useAuthContext();

  const {
    data: records = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["enrollment_record", user.id],
    queryFn: async () => {
      const { data } = await axios.get("/enrollment-record");
      return data;
    },
  });

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
        <Text>Error loading enrollment record</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1">
        {records.map((record, recordIndex) => (
          <React.Fragment key={recordIndex}>
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
                {record.start_year} - {record.end_year} | {record.semester_name}{" "}
                Semester
              </Text>
              <Text
                style={{
                  fontFamily: "Figtree-Regular",
                  fontSize: 14,
                  color: theme.colors.onPrimary,
                }}
              >
                {record.year_level_name}
              </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title className="w-48">
                    <Text
                      style={{
                        fontFamily: "Figtree-SemiBold",
                        fontSize: 14,
                      }}
                    >
                      Instructor
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title className="w-32">
                    <Text
                      style={{
                        fontFamily: "Figtree-SemiBold",
                        fontSize: 14,
                      }}
                    >
                      Subject Code
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title className="w-60">
                    <Text
                      style={{
                        fontFamily: "Figtree-SemiBold",
                        fontSize: 14,
                      }}
                    >
                      Descriptive Title
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title numeric className="w-32">
                    <Text
                      style={{
                        fontFamily: "Figtree-SemiBold",
                        fontSize: 14,
                      }}
                    >
                      Final Grade
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title numeric className="w-32">
                    <Text
                      style={{
                        fontFamily: "Figtree-SemiBold",
                        fontSize: 14,
                      }}
                    >
                      Remarks
                    </Text>
                  </DataTable.Title>
                </DataTable.Header>
                {record.subjects.map((subject, subjectIndex) => (
                  <DataTable.Row key={subjectIndex}>
                    <DataTable.Cell className="w-48">
                      <Text
                        style={{
                          fontFamily: "Figtree-Medium",
                          fontSize: 13,
                        }}
                      >
                        {subject.first_name ? formatFullName(subject) : "-"}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell className="w-32">
                      <Text
                        style={{
                          fontFamily: "Figtree-Medium",
                          fontSize: 13,
                        }}
                      >
                        {subject.subject_code}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell className="w-60">
                      <Text
                        style={{
                          fontFamily: "Figtree-Medium",
                          fontSize: 13,
                        }}
                      >
                        {subject.descriptive_title}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell numeric className="w-32">
                      <Text
                        style={{
                          fontFamily: "Figtree-Medium",
                          fontSize: 13,
                          color:
                            subject.midterm_grade == 0.0 ||
                            subject.final_grade == 0.0
                              ? "red"
                              : theme.colors.onSurface,
                        }}
                      >
                        {subject.midterm_grade == 0.0 ||
                        subject.final_grade == 0.0
                          ? "DROPPED"
                          : subject.midterm_grade && subject.final_grade
                            ? (
                                (+subject.midterm_grade +
                                  +subject.final_grade) /
                                2
                              ).toFixed(1)
                            : "-"}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell numeric className="w-32">
                      <Text
                        style={{
                          fontFamily: "Figtree-Medium",
                          fontSize: 13,
                          color:
                            subject.midterm_grade === 0.0 ||
                            subject.final_grade === 0.0
                              ? "red"
                              : subject.midterm_grade && subject.final_grade
                                ? (
                                    (+subject.midterm_grade +
                                      +subject.final_grade) /
                                    2
                                  ).toFixed(1) >= 3.05
                                  ? "red"
                                  : "green"
                                : theme.colors.onSurface,
                        }}
                      >
                        {subject.midterm_grade === 0.0 ||
                        subject.final_grade === 0.0
                          ? "DROPPED"
                          : subject.midterm_grade && subject.final_grade
                            ? (
                                (+subject.midterm_grade +
                                  +subject.final_grade) /
                                2
                              ).toFixed(1) >= 3.05
                              ? "FAILED"
                              : "PASSED"
                            : "-"}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </ScrollView>
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
}
