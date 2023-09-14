"use client";

import React, { useState, useEffect } from "react";
import CardScrollAnimate from "@/components/card-scroll-animate";
import { Toast, Card, Typography } from "@douyinfe/semi-ui";
import { ResponseRoot } from "@/types/Response";
import { IconGithubLogo } from "@douyinfe/semi-icons";

const fetchCopyWriting = async () => {
  try {
    const response = await fetch("/api");
    if (!response.ok) {
      Toast.error("与后端通信遇到问题");
      throw new Error("Network response was not ok");
    }

    const jsonData: ResponseRoot<string> = await response.json();
    if (jsonData.code != 200) {
      const err = `${jsonData.code}: ${jsonData.msg}`;
      Toast.error(err);
      throw new Error(err);
    }

    return jsonData.data;
  } catch (error) {
    Toast.error("与后端通信遇到未知问题");
    console.error("Error fetching data:", error);
  }
};

export default function Page() {
  const { Text } = Typography;

  const [cw1, setCw1] = useState(
    "此处含有部分不适宜于公共场合观看的文本，请确认是否查看，确认请滑动至下一页"
  );
  const [cw2, setCw2] = useState(
    "如果您需要 投稿 或是 API 可以点击顶部仓库链接"
  );
  const [count, setCount] = useState(0);

  const createCard = (content: string) => {
    return <Card shadows="always">{content}</Card>;
  };

  const initialPairs = [createCard(cw1), createCard(cw2)];

  const updateData = async () => {
    if (count == 0) {
      console.log("init");
      setCw1((await fetchCopyWriting())!);
      setCw2((await fetchCopyWriting())!);
    } else {
      const cw = (await fetchCopyWriting())!;
      count % 2 === 0 ? setCw1(cw) : setCw2(cw);
    }
  };

  useEffect(() => {
    updateData();
  }, [count]);

  const getNext = () => {
    setCount(count + 1);
    return count % 2 === 0 ? createCard(cw1) : createCard(cw2);
  };

  return (
    <div className="flex flex-col items-center">
      <Text
        link={{ href: "https://github.com/colour93/saob-work" }}
        icon={<IconGithubLogo />}
        underline
        className="my-5"
      >
        colour93/saob-work
      </Text>
      <div className="mx-0 my-2 w-72">
        <CardScrollAnimate initialPairs={initialPairs} getNext={getNext} />
      </div>
    </div>
  );
}
