import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(255, 255, 255, .12)");
  const color = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .18)", "rgba(255, 255, 255, .18)");
  const hoverBg = useColorModeValue("rgba(255, 255, 255, .92)", "rgba(255, 255, 255, .2)");

  return (
    <IconButton
      aria-label={colorMode === "dark" ? "切换到浅色模式" : "切换到深色模式"}
      icon={colorMode === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
      onClick={toggleColorMode}
      rounded="16px"
      bg={bg}
      color={color}
      border="1px solid"
      borderColor={borderColor}
      _hover={{ bg: hoverBg, transform: "translateY(-1px)" }}
      _active={{ transform: "translateY(0)" }}
    />
  );
}
