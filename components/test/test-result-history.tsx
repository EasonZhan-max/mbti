import Link from "next/link";
import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import dayjs from "dayjs";
import { FiChevronRight } from "react-icons/fi";

import { TestResult } from "../../lib/personality-test";

interface TestResultHistoryProps {
  testResults: TestResult[];
}

export default function TestResultHistory(props: TestResultHistoryProps) {
  const cardBg = useColorModeValue("rgba(255, 255, 255, .72)", "rgba(18, 25, 31, .62)");
  const cardColor = useColorModeValue("#17232c", "#f4f9fb");
  const borderColor = useColorModeValue("rgba(86, 119, 137, .18)", "rgba(255, 255, 255, .18)");
  const itemBg = useColorModeValue("rgba(255, 255, 255, .62)", "rgba(255, 255, 255, .1)");
  const itemHoverBg = useColorModeValue("rgba(255, 255, 255, .9)", "rgba(255, 255, 255, .18)");

  return (
    <Flex
      my={4}
      w={{
        base: "full",
        lg: "50%",
      }}
      h="full"
      px={{ base: 5, md: 8 }}
      py={8}
      gap={8}
      alignSelf="flex-start"
      alignItems="center"
      direction="column"
      border="1px solid"
      borderColor={borderColor}
      rounded="28px"
      bg={cardBg}
      color={cardColor}
      backdropFilter="blur(22px) saturate(150%)"
      boxShadow="0 24px 80px rgba(0, 0, 0, .2)"
    >
      <Heading
        as="h1"
        textAlign="center"
      >
        测试历史
      </Heading>
      <Flex
        w="full"
        gap={4}
        direction="column"
      >
        {props.testResults.map((testResult) => (
          <Flex
            key={testResult.timestamp}
            as={Link}
            href={`/test/result/?testResultId=${testResult.timestamp}`}
            py={3}
            px={4}
            w="full"
            rounded="18px"
            cursor="pointer"
            alignItems="center"
            justifyContent="space-between"
            borderWidth={1}
            borderColor={borderColor}
            bg={itemBg}
            color={cardColor}
            _hover={{
              bg: itemHoverBg,
              transform: "translateY(-1px)",
            }}
          >
            <Text>
              {dayjs(testResult.timestamp).format("YYYY年MM月DD日 HH:mm ")}
            </Text>
            <FiChevronRight />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
