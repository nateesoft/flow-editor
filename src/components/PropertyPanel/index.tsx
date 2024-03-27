import { Component } from "solid-js"
import styles from "./styles.module.css"

interface ButtonsProps {
  id: string|null;
  label: string|null;
  input: number|null;
  output: number|null;
}

const PropertyPanel: Component<ButtonsProps> = (props: ButtonsProps) => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.toolbar}>
        <label class={styles.label}>Property</label>
        <div class={styles.propertyPanel}>
          <div class={styles.row}>
            <div class={styles.column}>
              <span>Id: </span>
            </div>
            <div class={styles.column}>
              <input class={styles.input} type="text" value={`${props.id}`} readOnly />
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              <span>Label: </span>
            </div>
            <div class={styles.column}>
            <input class={styles.input} type="text" value={`${props.label}`} readOnly />
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              <span>Input: </span>
            </div>
            <div class={styles.column}>
            <input class={styles.input} type="text" value={`${props.input}`} readOnly />
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              <span>Output: </span>
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
