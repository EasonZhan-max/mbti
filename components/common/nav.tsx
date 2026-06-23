import Link from "next/link";
import { Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { BiHistory } from "react-icons/bi";

import ThemeToggle from "./theme-toggle";

export default function Nav() {
  const navBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(9, 16, 24, .58)");
  const navColor = useColorModeValue("#17232c", "white");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .18)", "whiteAlpha.200");
  const hoverColor = useColorModeValue("primary.700", "primary.100");
  const actionBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(255, 255, 255, .12)");
  const actionHoverBg = useColorModeValue("rgba(255, 255, 255, .94)", "rgba(255, 255, 255, .2)");

  return (
    <Flex
      as="nav"
      position="sticky"
      top={4}
      zIndex={10}
      mt={4}
      mx="auto"
      py={3}
      px={{ base: 4, md: 5 }}
      w="min(1180px, calc(100% - 28px))"
      minH={16}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
      overflowX="hidden"
      border="1px solid"
      borderColor={borderColor}
      rounded="24px"
      bg={navBg}
      color={navColor}
      backdropFilter="blur(18px) saturate(145%)"
      boxShadow="0 18px 50px rgba(0, 0, 0, .18)"
    >
      <Link href="/">
        <Button
          variant="link"
          color={navColor}
          fontWeight="900"
          textTransform="uppercase"
          _hover={{ color: hoverColor, textDecoration: "none" }}
        >
          MBTI 性格测试
        </Button>
      </Link>
      <Flex gap={3} alignItems="center">
        <ThemeToggle />
        <Link href="/test/result/history">
          <Button
            variant="solid"
            leftIcon={<BiHistory size={22} />}
            bg={actionBg}
            color={navColor}
            border="1px solid"
            borderColor={borderColor}
            rounded="16px"
            _hover={{ bg: actionHoverBg, transform: "translateY(-1px)" }}
            _active={{ transform: "translateY(0)" }}
          >
            测试历史
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
