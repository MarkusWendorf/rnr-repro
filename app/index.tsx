import { Link } from "expo-router";
import * as React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Progress } from "~/components/ui/progress";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "~/components/ui/select";

export default function Screen() {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      <Link href="/components/select">Select</Link>
      <Select defaultValue={{ value: "asdsa", label: "Apasdsadple" }}>
        <SelectTrigger className="w-[250px]">
          <SelectValue
            className="text-foreground text-sm native:text-lg"
            placeholder="Select a fruit"
          />
        </SelectTrigger>
        <SelectContent insets={contentInsets} className="w-[250px]">
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem label="Apple" value="apple">
              Apple
            </SelectItem>
            <SelectItem label="Banana" value="banana">
              Banana
            </SelectItem>
            <SelectItem label="Blueberry" value="blueberry">
              Blueberry
            </SelectItem>
            <SelectItem label="Grapes" value="grapes">
              Grapes
            </SelectItem>
            <SelectItem label="Pineapple" value="pineapple">
              Pineapple
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Progress value={30} max={100}></Progress>
    </View>
  );
}
