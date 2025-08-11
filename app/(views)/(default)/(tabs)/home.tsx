import { useQuery } from "@tanstack/react-query";
import { Route, router } from "expo-router";
import { View, ScrollView, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "~/api/axios";
import AppLogo from "~/components/app-logo";
import Icon from "~/components/icon";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { Text } from "~/components/ui/text";
import User from "~/components/user";
import { useAuthContext } from "~/contexts/auth-context";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { AlertTriangle } from "lucide-react-native";

const padding = 16;
const screenWidth = Dimensions.get("window").width;
const availableWidth = screenWidth - padding * 2;
const itemWidth = availableWidth / 4;

const bannerAspectRatio = 1500 / 500;

const items: { title: string; icon: any; href: Route }[] = [
  {
    title: "Classes",
    icon: require("../../../../assets/images/items/classes.png"),
    href: "/home/classes",
  },
  {
    title: "Enrollment Record",
    icon: require("../../../../assets/images/items/enrollment-record.png"),
    href: "/home/enrollment-record",
  },
];

interface SchoolYear {
  id: number;
  start_year: number;
  end_year: number;
  semester_name: string;
}

interface StudentDepartment {
  department_name: string;
  department_name_abbreviation: string;
}

interface CurrentStudentSchoolYearDepartment {
  schoolYear: SchoolYear;
  department: StudentDepartment;
}

export default function Home() {
  const { user } = useAuthContext();

  const { data, isLoading, error, isError } =
    useQuery<CurrentStudentSchoolYearDepartment>({
      queryKey: ["current_student_school_year_department", user?.id],
      queryFn: async () => {
        try {
          const { data } = await axios.get("/mobile/current-school-year");
          return data;
        } catch (error: any) {
          const message = error.response?.data?.message;
          throw new Error(message);
        }
      },
    });

  const departmentLogo = (() => {
    const abbreviation = data?.department?.department_name_abbreviation;
    switch (abbreviation) {
      case "CIT":
        return require("~/assets/images/departments/CIT.png");
      case "CBA":
        return require("~/assets/images/departments/CBA.png");
      case "TED":
        return require("~/assets/images/departments/TED.png");
      default:
        return null;
    }
  })();

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View className="gap-6">
          <View className="p-4 flex-row items-center justify-between">
            <AppLogo />
            <Button
              onPress={() => router.push("/home/notification")}
              size="icon"
              variant="ghost"
              className="rounded-full"
            >
              <Icon name="Bell" color="orange" fill="orange" />
            </Button>
          </View>
          <View className="p-4 flex-row items-center justify-between h-20">
            <User />
            {isLoading ? (
              <Skeleton className="w-20 h-20 rounded-full" />
            ) : (
              departmentLogo && (
                <Image
                  resizeMode="contain"
                  source={departmentLogo}
                  className="w-20 h-20"
                />
              )
            )}
          </View>
          {/* <Image
            source={require("../../../../assets/images/logo-banner.png")}
            style={{
              width: screenWidth,
              height: screenWidth / bannerAspectRatio,
              resizeMode: "contain",
            }}
          /> */}
          <View className="p-4 gap-4">
            {isLoading ? (
              <Skeleton className="h-24 rounded-xl" />
            ) : isError ? (
              <View className="p-4 rounded-xl border border-destructive bg-red-100/50 h-24 items-center justify-center">
                <Text className="text-2xl font-figtree-bold text-center text-destructive">
                  {error.message}
                </Text>
              </View>
            ) : (
              // <Alert
              //   icon={AlertTriangle}
              //   className="max-w-xl border-orange-500 bg-orange-100/50 rounded-xl"
              // >
              //   <AlertTitle className="font-figtree-medium">Notice!</AlertTitle>
              //   <AlertDescription className="font-figtree-regular text-base">
              //     {error.message}
              //   </AlertDescription>
              // </Alert>
              <View className="p-4 rounded-xl border border-primary bg-blue-100/50 h-24 items-center justify-center">
                <Text className="text-2xl font-figtree-bold text-center text-primary">
                  {data?.schoolYear.start_year} - {data?.schoolYear.end_year} |{" "}
                  {data?.schoolYear.semester_name} Semester
                </Text>
              </View>
            )}
            <View className="flex-row flex-wrap">
              {items.map((item, index) => (
                <View
                  className="items-center gap-1"
                  key={index}
                  style={{
                    width: itemWidth,
                    marginBottom: 8,
                  }}
                >
                  <Button
                    onPress={() => router.push(item.href)}
                    size="icon"
                    variant="secondary"
                    className="native:h-20 native:w-20 rounded-full"
                  >
                    <Image
                      resizeMode="contain"
                      source={item.icon}
                      className="w-11 h-11"
                    />
                  </Button>
                  <Text className="font-figtree-medium text-center text-sm leading-none">
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
