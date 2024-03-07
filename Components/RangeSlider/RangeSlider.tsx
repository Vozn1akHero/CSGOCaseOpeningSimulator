import { ChangeEvent, ChangeEventHandler, useCallback, useState, memo, createRef } from "react";
import styled, { css } from "styled-components";
import styles from "./RangeSlider.module.scss";

type RangeSliderProps = {
    label: string;
}

const RangeSliderDec = (props: RangeSliderProps) => {
    const [value, setValue] = useState(0);
    const MAX = 10;
    const inputRef = createRef<HTMLInputElement>();

    const changeSliderValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const nextValue: number = +e.target.value;
        inputRef.current.style.backgroundSize = `${(nextValue * 100) / MAX}% 100%`;
        setValue(nextValue)
    }, [value]);

    return (
        <div className={styles.rangeSlider}>
            <label className={styles.sliderLabel}>{props.label}</label>
            <div className={styles.sliderWrap}>
                <input type="range" ref={inputRef} className={styles.sliderInput}
                    min="0"
                    max={MAX}
                    onChange={changeSliderValue}
                    value={value}
                />
                <span className={styles.sliderValue}>{value}</span>
            </div>
        </div>
    )
}

export const RangeSlider = memo(RangeSliderDec)