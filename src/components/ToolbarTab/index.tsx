import { Component } from "solid-js"
import styles from "./styles.module.css"

interface ButtonsProps {
  onClickAdd: (
    numberInputs: number,
    numberOutputs: number,
    label: string,
    nodeType: string,
    imgUrl: string,
  ) => void
  onClickDelete: () => void
}

const ToolbarTab: Component<ButtonsProps> = (props: ButtonsProps) => {

  function handleOnClickAddNode(event: any, label: string, nodeType: string, input: number, output: number, imgUrl: string) {
    event.stopPropagation()
    props.onClickAdd(input, output, label, nodeType, imgUrl)
  }

  return (
    <div class={styles.wrapper}>
      <div class={styles.toolbar}>
        <label class={styles.label}>All Component</label>
        <button class={styles.buttonOval} onClick={(evt)=>handleOnClickAddNode(evt, 'Start', '1', 0, 1, '/images/start_icon.png')}>
          Start
        </button>
        <button class={styles.buttonRect} onClick={(evt)=>handleOnClickAddNode(evt, 'Actor', '1', 1, 2, '/images/actor_icon.png')}>
          Actor
        </button>
        <button class={styles.buttonRect} onClick={(evt)=>handleOnClickAddNode(evt, 'Page', '1', 1, 2, '/images/page_icon.png')}>
          Page
        </button>
        <button class={styles.buttonRect} onClick={(evt)=>handleOnClickAddNode(evt, 'Process', '1', 1, 2, '/images/process_icon.png')}>
          Process
        </button>
        <button class={styles.buttonRect} onClick={(evt)=>handleOnClickAddNode(evt, 'APIs', '1', 1, 2, '/images/services_icon.png')}>
          APIs
        </button>
        <button class={styles.buttonRect} onClick={(evt)=>handleOnClickAddNode(evt, 'Database', '1', 1, 1, '/images/database_icon.png')}>
          Database
        </button>
        <button class={styles.buttonOval} onClick={(evt)=>handleOnClickAddNode(evt, 'Stop', '1', 1, 0, '/images/stop_icon.png')}>
          Stop
        </button>
      </div>
    </div>
  )
}

export default ToolbarTab
