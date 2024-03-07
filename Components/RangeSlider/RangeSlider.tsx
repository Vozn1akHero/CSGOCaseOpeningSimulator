import { ChangeEvent, ChangeEventHandler, useCallback, useState, memo, createRef, useEffect } from "react";
import styled, { css } from "styled-components";
import styles from "./RangeSlider.module.scss";

type RangeSliderProps = {
    label: string;
    min: number; max: number; step: number;
    initValue: number;
    onValueChange(value: number): void;
}

const RangeSliderDec = (props: RangeSliderProps) => {
    const [value, setValue] = useState(props.initValue);
    const inputRef = createRef<HTMLInputElement>();

    useEffect(() => {
        inputRef.current.style.backgroundSize = `${(props.initValue * 100) / props.max}% 100%`;
    }, [])

    const changeSliderValue = (e: ChangeEvent<HTMLInputElement>) => {
        const nextValue: number = +e.target.value;
        inputRef.current.style.backgroundSize = `${(nextValue * 100) / props.max}% 100%`;
        setValue(nextValue)
        props.onValueChange(nextValue)
    };

    return (
        <div className={styles.rangeSlider}>
            <label className={styles.sliderLabel}>{props.label}</label>
            <div className={styles.sliderWrap}>
                <input type="range" ref={inputRef} className={styles.sliderInput}
                    min={props.min}
                    step={props.step}
                    max={props.max}
                    onChange={changeSliderValue}
                    value={value}
                />
                <span className={styles.sliderValue}>{value}</span>
            </div>
        </div>
    )
}

export const RangeSlider = memo(RangeSliderDec)