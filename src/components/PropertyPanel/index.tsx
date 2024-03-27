import { Component } from "solid-js"
import styles from "./styles.module.css"

interface ButtonsProps {
  id: string|null;
  label: string|null;
  input: number|null;
  output: number|null;
}

const PropertyPanel: Component<ButtonsProps> = (props: ButtonsProps) => {
  console.log(props);
  return (
    <div class={styles.wrapper}>
      <div class={styles.toolbar}>
        <label class={styles.label}>Property</label>
        <div class={styles.propertyPanel}>
          <div class={styles.row}>
            <div class={styles.column}>
              <span class={styles.titleBold}>Id</span>
            </div>
            <div class={styles.column}>
              <span>{props.id}</span>
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              <span class={styles.titleBold}>Label</span>
            </div>
            <div class={styles.column}>
            <input class={styles.input} type="text" value={`${props.label}`} readOnly />
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              <span class={styles.titleBold}>Input</span>
            </div>
            <div class={styles.column}>
            <input class={styles.input} type="text" value={`${props.input}`} readOnly />
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              <span class={styles.titleBold}>Output</span>
            </div>
            <div class={styles.column}>
            <input class={styles.input} type="text" value={`${props.output}`} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyPanel
