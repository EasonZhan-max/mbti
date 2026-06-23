import Link from "next/link";
import { Heading, Text, Highlight, Flex, Button, Box, useColorModeValue } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import MainLayout from "../components/layouts/main-layout";
import { withBasePath } from "../lib/asset-path";

export default function HomePage() {
  const cardBg = useColorModeValue("rgba(255, 255, 255, .76)", "rgba(18, 25, 31, .62)");
  const cardImage = withBasePath("/images/home-bottom.png");
  const cardBackground = useColorModeValue(
    `linear-gradient(180deg, rgba(255,255,255,.88), rgba(239,247,252,.78)), url(${cardImage})`,
    `linear-gradient(180deg, rgba(9,16,24,.82), rgba(9,16,24,.66)), url(${cardImage})`
  );
  const borderColor = useColorModeValue("rgba(86, 119, 137, .18)", "whiteAlpha.200");
  const textColor = useColorModeValue("#314a59", "whiteAlpha.800");
  const highlightBg = useColorModeValue("rgba(159, 185, 201, .2)", "rgba(159, 185, 201, .22)");
  const highlightColor = useColorModeValue("#17232c", "white");

  return (
    <MainLayout>
      <Flex
        w="full"
        minH="calc(100vh - 112px)"
        alignItems="center"
        justifyContent="center"
        px={{ base: 2, md: 4 }}
        py={{ base: 12, md: 16 }}
      >
        <Box
          w="min(760px, 100%)"
          px={{ base: 6, md: 12 }}
          py={{ base: 10, md: 14 }}
          border="1px solid"
          borderColor={borderColor}
          rounded="32px"
          bg={cardBg}
          bgImage={cardBackground}
          bgRepeat="no-repeat"
          bgSize="min(760px, 96%) auto"
          bgPosition="center bottom -42px"
          backdropFilter="blur(22px) saturate(150%)"
          boxShadow="0 24px 80px rgba(0, 0, 0, .2)"
          textAlign="center"
        >
          <Heading
            as="h1"
            lineHeight="tall"
            textAlign="center"
            fontSize={{ base: "3xl", md: "5xl" }}
          >
            <Highlight
              query="MBTI"
              styles={{
                py: 1,
                px: 4,
                rounded: "full",
                bg: highlightBg,
                color: highlightColor,
              }}
            >
              参加 MBTI 性格测试
            </Highlight>
          </Heading>
          <Text
            mt={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={textColor}
            align="center"
          >
            快速了解自己的性格倾向。
          </Text>
          <Link href="/test">
            <Button
              mt={10}
              w="max-content"
              colorScheme="primary"
              variant="solid"
              size="lg"
              rounded="18px"
              rightIcon={<FiArrowRight size={20} />}
            >
              开始测试
            </Button>
          </Link>
        </Box>
      </Flex>
    </MainLayout>
  );
}
