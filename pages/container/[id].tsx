import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CaseOpeningSec } from "../../Components/CaseOpeningSec/CaseOpeningSec";
import { Layout } from "../../Components/Layout/Layout.jsx";
import Showcase from "../../Components/Showcase/Showcase.jsx";
import { containerType } from "../../public/scripts/drop/container-type.js";
import { Cases } from "../../public/data/cases/cases.js";
import { Souvenir } from "../../public/data/souvenirs/souvenir.js";
import { CenteredWrapper } from "../../Components/CenteredWrapper/CenteredWrapper.jsx";
import { Capsules } from "../../public/data/capsules/capsules.js";

const Container = () => {
  const router = useRouter();
  const [containerInfo, setContainerInfo] = useState(null);
  const [items, setItems] = useState(null);
  const [specialItems, setSpecialItems] = useState(null);
  const [chosenContainerType, setChosenContainerType] = useState(null);

  useEffect(() => {
    try {
      if (router && router.query && router.query.id) {
        const type = +router.query.type;
        switch (type) {
          case containerType.CASE: {
            setChosenContainerType(containerType.CASE);
            const { title, image, imageUrl, items, specialItems } = Cases.find(
              (value) => value.id === +router.query.id
            );
            setContainerInfo({
              title,
              image,
              imageUrl,
            });
            setItems(items);
            setSpecialItems(specialItems);
            break;
          }
          case containerType.SOUVENIR: {
            setChosenContainerType(containerType.SOUVENIR);
            const { title, image, imageUrl, items } = Souvenir.find(
              (value) => value.id === +router.query.id
            );
            setContainerInfo({
              title,
              image,
              imageUrl,
            });
            setItems(items);
            break;
          }
          case containerType.CAPSULE: {
            setChosenContainerType(containerType.CAPSULE);
            const { title, image, imageUrl, items } = Capsules.find(
              (value) => value.id === +router.query.id
            );
            setContainerInfo({
              title,
              image,
              imageUrl
            });
            setItems(items);
            break;
          }
          default: {
            throw "undefined container type"
          }
        }
      }
    }
    catch {
      router.push("/")
    }
  }, [router]);

  return (
    <Layout
      content={
        <CenteredWrapper>
          {items && chosenContainerType && (
            <CaseOpeningSec
              items={items}
              containerType={chosenContainerType}
              caseTitle={containerInfo.title}
              caseImage={containerInfo.image}
              caseImageUrl={containerInfo.imageUrl}
              specialItems={specialItems}
            />
          )}
          {items && (
            <Showcase
              baseContainerType={chosenContainerType === containerType.CASE}
              items={items}
            />
          )}
        </CenteredWrapper>
      }
    />
  );
};

export default Container;
