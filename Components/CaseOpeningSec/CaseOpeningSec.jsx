import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";
import { containerType } from "../../helpers/container-type";
import Storage from "../../helpers/storage";
import CaseOpeningAudio from "../CaseOpeningAudio/CaseOpeningAudio";
import { CaseOpeningConfirmation } from "../CaseOpeningConfirmation/CaseOpeningConfirmation";
import ItemLine from "../ItemLine/ItemLine";
import ReceivedItemModal from "../ReceivedItemModal/ReceivedItemModal";
import { UnlockingContainerNotification } from "../UnlockingContainerNotification/UnlockingContainerNotification";
import RandomCaseItem from "./RandomCaseItem";
import RandomItem from "./RandomItem";
import RandomSouvenir from "./RandomSouvenir";

export const CaseOpeningSec = (props) => {
  const context = useContext(SettingsContext);
  const [line, setLine] = useState(null);
  const [openingInProgress, setOpeningInProgress] = useState(false);
  const [receivedItemModalVisible, setReceivedItemModalVisible] = useState(
    false
  );
  const [receivedItem, setReceivedItem] = useState(null);
  const router = useRouter();

  const generateItem = () => {
    let item;
    switch (props.containerType) {
      case containerType[0]:
        item = selectRandomItem();
        break;
      case containerType[1]:
        item = selectRandomSouvenir();
        break;
      default:
        item = selectRandomItem();
        break;
    }
    return item;
  };

  const generateLine = () => {
    let elements = [];
    let actItem = generateItem();
    setReceivedItem(actItem);
    Storage.saveReceivedItem(actItem);
    for (let index = 0; index < 30; index++) {
      if (index === 25) {
        elements.push(actItem);
      } else {
        elements.push(generateItem());
      }
    }
    return <ItemLine items={elements} />;
  };

  const selectRandomSouvenir = () => {
    let randomItem = new RandomItem();
    let randomSouvenir = new RandomSouvenir();
    const type = randomSouvenir.getRandomSouvenirTypeByItems(props.items);
    const item = randomItem.getSouvenirItemByType(props.items, type);
    return item;
  };
  const selectRandomItem = () => {
    let randomItem = new RandomItem();
    let randomCaseItem = new RandomCaseItem();
    const type = randomCaseItem.getRandomType();
    const item = randomItem.getItemFromCaseByType(
      props.items,
      props.specialItems,
      type
    );
    return item;
  };
  const openCase = () => {
    setLine(generateLine());
    setOpeningInProgress(true);
    setTimeout(() => {
      setReceivedItemModalVisible(true);
    }, context.caseOpeningTime + 100);
  };
  const onReceivedItemConfirmation = () => {
    router.push("/");
  };
  const onTryAgainBtnClick = () => {
    setReceivedItemModalVisible(false);
    setOpeningInProgress(false);
  };
  return (
    <>
      <div className='case-opening-sec'>
        {openingInProgress && <CaseOpeningAudio />}
        {receivedItemModalVisible && (
          <ReceivedItemModal
            title={receivedItem.title}
            isStatrak={receivedItem.isStatrak}
            quality={receivedItem.quality}
            type={receivedItem.type}
            image={receivedItem.image}
            onTryAgainBtnClick={() => onTryAgainBtnClick()}
            onSubmit={() => onReceivedItemConfirmation()}
          />
        )}

        <div className='head-wrap'>
          {!openingInProgress && (
            <CaseOpeningConfirmation
              image={props.caseImage}
              title={props.caseTitle}
              onSubmit={() => openCase()}
            />
          )}
          {openingInProgress && (
            <>
              <div className='case-opener-bg'>
                <hr className='middle-line' />
                <div className='case-opener'>{line}</div>
              </div>
            </>
          )}
        </div>
        {openingInProgress && <UnlockingContainerNotification />}
      </div>

      <style jsx>
        {`
          .case-opening-sec {
            width: 100%;
            height: 50%;
            padding-top: 2rem;
            background: #121b24;
            box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
          }

          .case-opening-sec .head-wrap {
            width: 101%;
            transform: translateX(-0.5%);
            background: #10161b;
            box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
            height: 54%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .case-opening-sec .head-wrap .case-opener-bg {
            width: 400px;
            background: black;
            position: relative;
            padding: 16px 2px;
          }

          .case-opening-sec .head-wrap .case-opener-bg .case-opener {
            width: 100%;
            height: 102px;
            overflow: hidden;
            position: relative;
          }

          .middle-line {
            background: #605337;
            height: 100%;
            position: absolute;
            left: 50%;
            width: 3px;
            transform: translateX(-50%);
            top: 0;
            margin: 0;
            z-index: 1;
            border: none;
          }
        `}
      </style>
    </>
  );
};
