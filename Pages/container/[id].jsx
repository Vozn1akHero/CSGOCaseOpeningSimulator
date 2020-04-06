import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CaseOpeningSec } from "../../Components/CaseOpeningSec/CaseOpeningSec";
import { Layout } from "../../Components/Layout/Layout";
import Showcase from "../../Components/Showcase/Showcase";
import { containerType } from "../../helpers/container-type";
import { Cases } from "../../public/cases.js";
// import cases from "../../public/cases.json";
import { Souvenir } from "../../public/souvenir.js";

const Container = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [containerInfo, setContainerInfo] = useState(null);
  const [items, setItems] = useState(null);
  const [specialItems, setSpecialItems] = useState(null);
  const [chosenContainerType, setChosenContainerType] = useState(null);

  useEffect(() => {
    if (router && router.query && router.query.id) {
      const type = router.query.type;
      switch (type) {
        case "case": {
          setChosenContainerType(containerType[0]);

          const { title, image, items, specialItems } = Cases.find(
            (value) => value.id === +router.query.id
          );
          setContainerInfo({
            title,
            image,
          });
          setItems(items);
          setSpecialItems(specialItems);
          break;
        }
        case "souvenir": {
          setChosenContainerType(containerType[1]);
          const { title, image, items } = Souvenir.find(
            (value) => value.id === +router.query.id
          );
          setContainerInfo({
            title,
            image,
          });
          setItems(items);
          break;
        }
        default: {
          setChosenContainerType(containerType[0]);
          const { title, image, items, specialItems } = Cases.find(
            (value) => value.id === +router.query.id
          );
          setContainerInfo({
            title,
            image,
          });
          setItems(items);
          setSpecialItems(specialItems);
          break;
        }
      }
    }
  }, [router]);

  return (
    <Layout
      content={
        <div className='container-page'>
          <div className='m-sec'>
            <div className='head-wrap'></div>
            {chosenContainerType === containerType[0] &&
              items &&
              specialItems && (
                <CaseOpeningSec
                  items={items}
                  containerType={containerType[0]}
                  caseTitle={containerInfo.title}
                  caseImage={containerInfo.image}
                  specialItems={specialItems}
                />
              )}
            {chosenContainerType === containerType[1] && items && (
              <CaseOpeningSec
                items={items}
                containerType={containerType[1]}
                caseTitle={containerInfo.title}
                caseImage={containerInfo.image}
              />
            )}
            {items && (
              <Showcase
                baseContainerType={chosenContainerType === containerType[0]}
                items={items}
              />
            )}
          </div>
          )}
          <style jsx>
            {`
              .container-page {
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .head-wrap {
                background: #121b24;
              }

              .container-page .m-sec {
                height: 85vh;
                width: 70vw;
              }
            `}
          </style>
        </div>
      }
    />
  );
};

export default Container;
