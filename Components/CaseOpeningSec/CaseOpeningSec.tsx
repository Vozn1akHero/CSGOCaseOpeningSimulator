import { NextRouter, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";
import { containerType } from "../../public/scripts/drop/container-type";
import Storage from "../../public/scripts/utils/storage";
import CaseOpeningAudio from "../CaseOpeningAudio/CaseOpeningAudio";
import { CaseOpeningConfirmation } from "../CaseOpeningConfirmation/CaseOpeningConfirmation";
import ItemLine from "../ItemLine/ItemLine";
import ReceivedItemModal from "../ReceivedItemModal/ReceivedItemModal";
import { UnlockingContainerNotification } from "../UnlockingContainerNotification/UnlockingContainerNotification";
import RandomCaseItem from "../../public/scripts/drop/random-case-item";
import RandomCapsule from "../../public/scripts/drop/random-capsule";
import RandomItem from "../../public/scripts/drop/random-item";
import RandomSouvenir from "../../public/scripts/drop/random-souvenir";
import { itemType } from "../../public/scripts/drop/item-type";

export const CaseOpeningSec = (props) => {
  const context = useContext(SettingsContext);
  const [line, setLine] = useState(null);
  const [openingInProgress, setOpeningInProgress] = useState(false);
  const [receivedItemModalVisible, setReceivedItemModalVisible] = useState(
    false
  );
  const [receivedItem, setReceivedItem] = useState(null);
  const router: NextRouter = useRouter();
  const ActItemIndex = 25, ItemsInLine = 30;
  const [cancellationRequested, setCancellationRequested] = useState(false)
  const [autoOpenedCount, setAutoOpenedCount] = useState(0)

  useEffect(() => {
    document.addEventListener("keydown", handleQuickOpen)
    return () => {
      document.removeEventListener("keydown", handleQuickOpen)
    }
  }, [])

  // useEffect(() => {
  //   if (autoOpenedCount === 100) return;

  //   if (receivedItemModalVisible) {
  //     setTimeout(() => {
  //       setAutoOpenedCount(autoOpenedCount + 1);

  //       const tryAgainBtn = document.getElementById("tryAgainBtn")
  //       tryAgainBtn?.click();

  //       setTimeout(() => {
  //         const unlockBtn = document.getElementById("unlockBtn")
  //         unlockBtn?.click();
  //       }, 200);
  //     }, 200);
  //   }
  // }, [receivedItemModalVisible])

  const handleQuickOpen = e => {
    if (e.key === "Escape") {
      setCancellationRequested(true);
    }
  }

  const generateItem = (index) => {
    let item;
    switch (props.containerType) {
      case containerType.CASE:
        {
          item = selectRandomItem();
          if (item.type === itemType.GOLD && index !== ActItemIndex) {
            return generateItem(index);
          }
          break;
        }
      case containerType.SOUVENIR:
        item = selectRandomSouvenir();
        break;
      case containerType.CAPSULE:
        item = selectRandomSticker();
        break;
    }
    return item;
  };

  const generateItems = (actItem) => {
    let items = [];
    for (let index = 0; index < ItemsInLine; index++) {
      if (index === ActItemIndex) {
        items.push(actItem);
      } else {
        items.push(generateItem(index));
      }
    }
    return items;
  }

  const generateLine = (actItem) => {
    const items = generateItems(actItem);
    return <ItemLine items={items} />;
  };

  const selectRandomSouvenir = () => {
    const randomItem = new RandomItem();
    const randomSouvenir = new RandomSouvenir();
    const type = randomSouvenir.getRandomSouvenirTypeByItems(props.items);
    const item = randomItem.getSouvenirItemByType(props.items, type);
    return item;
  };

  const selectRandomItem = () => {
    const randomItem = new RandomItem();
    const randomCaseItem = new RandomCaseItem();
    const type = randomCaseItem.getRandomType();
    const item = randomItem.getItemFromCaseByType(
      props.items,
      props.specialItems,
      type
    );
    return item;
  };

  const selectRandomSticker = () => {
    const randomItem = new RandomItem();
    const randomCapsule = new RandomCapsule();
    const type = randomCapsule.getRandomWithoutRed(); // todo: remaining rarity
    const item = randomItem.getStickerByType(props.items, type);
    return item;
  }

  /*  const testKnife = () => {
     for (let i = 0; i < 200; i++) {
       let actItem = generateItem(ActItemIndex);
       let itemsLine = generateLine(actItem);
 
       if (actItem.type === 6) {
         console.log(actItem)
         console.log(i)
         break;
       }
     }
   } */

  const openCase = () => {
    const actItem = generateItem(ActItemIndex);
    const itemsLine = generateLine(actItem);
    setLine(itemsLine);
    setReceivedItem(actItem);
    Storage.saveReceivedItem(actItem);
    setOpeningInProgress(true);
    setTimeout(() => {
      setReceivedItemModalVisible(true);
    }, context.settings.caseOpeningTime);
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
            imageUrl={receivedItem.imageUrl}
            onTryAgainBtnClick={() => onTryAgainBtnClick()}
            onSubmit={() => onReceivedItemConfirmation()}
          />
        )}

        <div className='head-wrap'>
          {!openingInProgress && (
            <CaseOpeningConfirmation
              image={props.caseImage}
              imageUrl={props.caseImageUrl}
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
