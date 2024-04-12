"use client";

import { Rewards } from "components/Rewards";
import { useEffect } from "react";
import { initializeSubscriptions, unsubscribeAll } from "../subscriptions";
import { store } from "../state/store";
import { useTranslations } from "hooks";

export default function Markets() {
  useEffect(() => {
    initializeSubscriptions(store);
    return () => {
      unsubscribeAll();
    };
  }, []);
  return (
    <div className="bg-[#141414] h-full">
      <HeaderComponent />
      <div className="flex flex-1 flex-col items-center my-8">
        <Rewards />
      </div>
    </div>
  );
}

function HeaderComponent() {
  const t = useTranslations();
  return (
    <div className="max-w-[400px] sm:max-w-[650px] px-5 sm:p-0 m-auto">
      <div className="sm:flex sm:justify-center sm:items-center m-8">
        <div className="text-white sm:w-[55%]">
          <div className="flex flex-col justify-center h-full">
            <DexterHeading title={t("rewards")} />
            <DexterParagraph text={t("earn_rewards_by")} />
            <DexterParagraph text={t("rewards_distribution")} />
          </div>
        </div>
        <div className="sm:w-[40%] max-w-[200px] sm:ml-5">
          <img
            src="/rewards/chest.png"
            alt="treasury"
            className="w-full"
            width={218}
          />
        </div>
      </div>
    </div>
  );
}

function DexterParagraph({ text }: { text: string }) {
  return <p className="text-sm tracking-wide py-1">{text}</p>;
}

function DexterHeading({ title }: { title: string }) {
  return (
    <>
      <h2
        className="text-md bg-gradient-to-r from-dexter-gradient-blue to-dexter-gradient-green to-50% bg-clip-text text-transparent font-normal"
        style={{
          margin: 0,
          marginBottom: "24px",
          marginTop: "0px",
          fontSize: "45px",
        }}
      >
        {title}
      </h2>
    </>
  );
}
