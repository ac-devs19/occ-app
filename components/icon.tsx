import { icons, LucideProps } from "lucide-react-native";
import { cssInterop } from "nativewind";
import { ComponentType, useMemo } from "react";

export type LucideIconName = keyof typeof icons;

interface CustomLucideProps extends LucideProps {
  name: LucideIconName;
}

const interopCache = new Map<string, ComponentType<LucideProps>>();

function getInteropIcon(name: LucideIconName): ComponentType<LucideProps> {
  if (interopCache.has(name)) {
    return interopCache.get(name)!;
  }

  const IconComponent = icons[name];
  cssInterop(IconComponent, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });

  interopCache.set(name, IconComponent);
  return IconComponent;
}

const Icon = ({ name, ...props }: CustomLucideProps) => {
  const LucideIcon = useMemo(() => getInteropIcon(name), [name]);

  return <LucideIcon strokeWidth={1.5} {...props} />;
};

export default Icon;
