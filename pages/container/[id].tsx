import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CaseOpeningSec } from "../../Components/CaseOpeningSec/CaseOpeningSec.jsx";
import { Layout } from "../../Components/Layout/Layout.jsx";
import Showcase from "../../Components/Showcase/Showcase.jsx";
import { containerType } from "../../public/scripts/drop/container-type.js";
import { Cases } from "../../public/data/cases/cases.js";
import { Souvenir } from "../../public/data/souvenir.js";
import { CenteredWrapper } from "../../Components/CenteredWrapper/CenteredWrapper.jsx";
import { Capsules } from "../../public/data/capsules/capsules.js";

const Container = () => {
  const router = useRouter();
  const [containerInfo, setContainerInfo] = useState(null);
  const [items, setItems] = useState(null);
  const [specialItems, setSpecialItems] = useState(null);
  const [chosenContainerType, setChosenContainerType] = useState(null);

  useEffect(() => {
    const caseType = containerType[0];
    const souvenirType = containerType[1];
    const capsuleType = containerType[2];

    if (router && router.query && router.query.id) {
      const type = router.query.type;
      switch (type) {
        case caseType.title: {
          setChosenContainerType(caseType);
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
        case souvenirType.title: {
          setChosenContainerType(souvenirType);
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
        case capsuleType.title: {
          setChosenContainerType(capsuleType);
          console.log(Capsules)
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
              baseContainerType={chosenContainerType === containerType[0]}
              items={items}
            />
          )}
        </CenteredWrapper>
      }
    />
  );
};

export default Container;
