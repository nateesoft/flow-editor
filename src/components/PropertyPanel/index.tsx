import { Component, createSignal, onCleanup } from "solid-js"
import styles from "./styles.module.css"

interface ButtonsProps {
  showDelete: boolean
  onClickAdd: (
    numberInputs: number,
    numberOutputs: number,
    label: string,
    nodeType: string
  ) => void
  onClickDelete: () => void
}

const PropertyPanel: Component<ButtonsProps> = (props: ButtonsProps) => {

  function handleOnClickAddNode(event: any, label: string, nodeType: string) {
    event.stopPropagation()
    props.onClickAdd(1, 1, label, nodeType)
  }

  return (
    <div class={styles.wrapper}>
      <div class={styles.toolbar}>
        <label class={styles.label}>Property</label>
        <div class={styles.propertyPanel}>
          <div class={styles.row}>
            <div class={styles.column}>
              <span>Name: </span>
            </div>
            <div class={styles.column}>
              <input class={styles.input} type="string"></input>
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              <span>Label: </span>
            </div>
            <div class={styles.column}>
              <input class={styles.input} type="string"></input>
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              <span>Input: </span>
            </div>
            <div class={styles.column}>
              <input class={styles.input} type="string"></input>
            </div>
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              <span>Output: </span>
            </div>
            <div class={styles.column}>
              <input class={styles.input} type="string"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyPanel
