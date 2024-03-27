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

const ToolbarTab: Component<ButtonsProps> = (props: ButtonsProps) => {

  function handleOnClickAddNode(event: any, label: string, nodeType: string) {
    event.stopPropagation()
    props.onClickAdd(1, 1, label, nodeType)
  }

  return (
    <div class={styles.wrapper}>
      <div class={styles.toolbar}>
        <label class={styles.label}>All Component</label>
        <button class={styles.buttonOval} onClick={(evt)=>handleOnClickAddNode(evt, 'Start', '1')}>
          Start
        </button>
        <button class={styles.buttonRect} onClick={(evt)=>handleOnClickAddNode(evt, 'Process', '1')}>
          Process
        </button>
        <button class={styles.buttonRect2} onClick={(evt)=>handleOnClickAddNode(evt, 'Process', '1')}>
          Process
        </button>
        <button class={styles.buttonOval} onClick={(evt)=>handleOnClickAddNode(evt, 'Stop', '1')}>
          Stop
        </button>
      </div>
    </div>
  )
}

export default ToolbarTab
