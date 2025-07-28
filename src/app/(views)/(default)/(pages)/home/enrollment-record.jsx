import { ScrollView, View } from "react-native";
import { DataTable, Text, useTheme } from "react-native-paper";

export default function EnrollmentRecord() {
  const theme = useTheme();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 16 }}>
      <View className="flex-1">
        <View
          style={{
            backgroundColor: theme.colors.primary,
          }}
          className="p-4"
        >
          <Text style={{ color: theme.colors.onPrimary }} variant="titleMedium">
            First Year | 2025 - 2026 First Semester
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title className="w-48">
                <Text variant="titleMedium">Instructor</Text>
              </DataTable.Title>
              <DataTable.Title className="w-32">
                <Text variant="titleMedium">Subject Code</Text>
              </DataTable.Title>
              <DataTable.Title className="w-96">
                <Text variant="titleMedium">Descriptive Title</Text>
              </DataTable.Title>
              <DataTable.Title numeric className="w-32">
                <Text variant="titleMedium">Final Grade</Text>
              </DataTable.Title>
              <DataTable.Title numeric className="w-32">
                <Text variant="titleMedium">Remarks</Text>
              </DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell className="w-48">
                <Text variant="titleSmall">Name</Text>
              </DataTable.Cell>
              <DataTable.Cell className="w-32">
                <Text variant="titleSmall">123</Text>
              </DataTable.Cell>
              <DataTable.Cell className="w-96">
                <Text variant="titleSmall">Introduction to Computing</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric className="w-32">
                <Text variant="titleSmall">0.1</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric className="w-32">
                <Text style={{ color: "green" }} variant="titleSmall">
                  Passed
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
