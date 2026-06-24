import { useEffect, useState } from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

const SITE_START_DATE = "2026-06-23T18:00:00+08:00";

function formatRuntime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return `${days}天 ${String(hours).padStart(2, "0")}时 ${String(minutes).padStart(2, "0")}分 ${String(seconds).padStart(2, "0")}秒`;
}

export default function Footer() {
  const [runtime, setRuntime] = useState("0天 00时 00分 00秒");
  const bg = useColorModeValue("rgba(237, 246, 251, .78)", "rgba(9, 16, 24, .74)");
  const color = useColorModeValue("#17232c", "whiteAlpha.900");
  const mutedColor = useColorModeValue("rgba(23, 35, 44, .62)", "whiteAlpha.600");

  useEffect(() => {
    const startTime = new Date(SITE_START_DATE).getTime();
    const updateRuntime = () => setRuntime(formatRuntime(Date.now() - startTime));

    updateRuntime();
    const intervalId = window.setInterval(updateRuntime, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <Flex
      as="footer"
      py={6}
      px={4}
      w="100%"
      bg={bg}
      color={color}
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      borderTop="1px solid rgba(255,255,255,0.15)"
      backdropFilter="blur(18px) saturate(145%)"
    >
      <Text color={mutedColor} fontWeight="700">
        本站已运行
      </Text>
      <Text
        fontWeight="900"
        fontSize={{ base: "md", md: "lg" }}
        letterSpacing=".04em"
        sx={{ fontVariantNumeric: "tabular-nums" }}
      >
        {runtime}
      </Text>
    </Flex>
  );
}
