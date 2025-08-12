import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, ScrollView, Alert, RefreshControl } from "react-native";
import axios from "~/api/axios";
import LoadingScreen from "~/components/loading-screen";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Text } from "~/components/ui/text";
import { useAuthContext } from "~/contexts/auth-context";

export interface Subject {
  id: number;
  enrolled_students_id: number;
  first_name: string;
  last_name: string;
  middle_name: string | null;
  subject_code: string;
  descriptive_title: string;
  midterm_grade: number | null;
  final_grade: number | null;
  remarks: string | null;
  is_deployed: number | null;
  year_section_subjects_id: number;
}

export interface ClassGroup {
  evaluated: number;
  id: number;
  year_level_name: string;
  section: string;
  semester_name: string;
  start_year: number;
  end_year: number;
  subjects: Subject[];
}

export default function EnrollmentRecord() {
  const { user } = useAuthContext();
  const [refreshing, setRefreshing] = useState(false);

  const getEnrollmentRecord = async () => {
    try {
      const { data } = await axios.get("/mobile/enrollment-record");
      return data;
    } catch (error: any) {
      const message = error.response?.data?.message;
      throw new Error(message);
    }
  };

  const { data, isLoading, error, isError } = useQuery<ClassGroup[]>({
    queryKey: ["enrollment_record", user?.id],
    queryFn: getEnrollmentRecord,
  });

  const onRefresh = async () => {
    setRefreshing(true);
    await getEnrollmentRecord();
    setRefreshing(false);
  };

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
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#2563EB"]}
          tintColor={"#2563EB"}
        />
      }
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }}
    >
      <View className="flex-1">
        {data?.map((record, recordIndex) => (
          <React.Fragment key={recordIndex}>
            <View className="p-4 bg-primary">
              <Text className="font-figtree-semibold text-white">
                {record.start_year} - {record.end_year} | {record.semester_name}{" "}
                Semester
              </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <Table aria-labelledby="invoice-table">
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead className="w-48">
                      <Text className="font-figtree-medium">Instructor</Text>
                    </TableHead>
                    <TableHead className="w-32">
                      <Text className="font-figtree-medium">Subject Code</Text>
                    </TableHead>
                    <TableHead className="w-60">
                      <Text className="font-figtree-medium">
                        Descriptive Title
                      </Text>
                    </TableHead>
                    <TableHead className="w-32 items-end">
                      <Text className="font-figtree-medium">Final Grade</Text>
                    </TableHead>
                    <TableHead className="w-32 mr-4 items-end">
                      <Text className="font-figtree-medium">Remarks</Text>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {record.subjects.map((subject, subjectIndex) => (
                    <TableRow key={subjectIndex}>
                      <TableCell className="w-48 justify-center">
                        <Text className="font-figtree-regular">
                          {subject.first_name ? formatFullName(subject) : "-"}
                        </Text>
                      </TableCell>
                      <TableCell className="w-32 justify-center">
                        <Text className="font-figtree-regular">
                          {subject.subject_code}
                        </Text>
                      </TableCell>
                      <TableCell className="w-60 justify-center">
                        <Text className="font-figtree-regular">
                          {subject.descriptive_title}
                        </Text>
                      </TableCell>
                      <TableCell className="w-32 items-end justify-center">
                        <Text
                          className={`font-figtree-regular ${
                            subject.midterm_grade == 0.0 ||
                            subject.final_grade == 0.0
                              ? "text-destructive"
                              : ""
                          }`}
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
                      </TableCell>
                      <TableCell className="w-32 mr-4 items-end justify-center">
                        <Text
                          className={`font-figtree-regular ${
                            subject.midterm_grade === 0.0 ||
                            subject.final_grade === 0.0
                              ? "red"
                              : subject.midterm_grade && subject.final_grade
                              ? parseFloat(
                                  (
                                    (+subject.midterm_grade +
                                      +subject.final_grade) /
                                    2
                                  ).toFixed(1)
                                ) >= 3.05
                                ? "text-destructive"
                                : "text-green-600"
                              : ""
                          }`}
                        >
                          {subject.midterm_grade === 0.0 ||
                          subject.final_grade === 0.0
                            ? "DROPPED"
                            : subject.midterm_grade != null &&
                              subject.final_grade != null
                            ? parseFloat(
                                (
                                  (+subject.midterm_grade +
                                    +subject.final_grade) /
                                  2
                                ).toFixed(1)
                              ) >= 3.05
                              ? "FAILED"
                              : "PASSED"
                            : "-"}
                        </Text>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollView>
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
}
