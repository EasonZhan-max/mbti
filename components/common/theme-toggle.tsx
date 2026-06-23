import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("rgba(255,255,255,.58)", "rgba(255,255,255,0.08)");
  const color = useColorModeValue("#17232c", "#f4f9fb");
  const hoverBg = useColorModeValue("#D8E6F8", "rgba(216,230,248,.18)");

  return (
    <IconButton
      aria-label={colorMode === "dark" ? "切换到浅色模式" : "切换到深色模式"}
      icon={colorMode === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
      onClick={toggleColorMode}
      rounded="16px"
      bg={bg}
      color={color}
      border="1px solid rgba(255,255,255,0.15)"
      boxShadow="0 10px 24px rgba(143,175,214,.18)"
      _hover={{ bg: hoverBg, transform: "translateY(-1px)" }}
      _active={{ transform: "translateY(0)", bg: hoverBg }}
    />
  );
}
