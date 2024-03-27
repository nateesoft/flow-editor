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
  // Signals
  const [isOpen, setIsOpen] = createSignal<boolean>(true)
  const [numberInputs, setNumberInputs] = createSignal<number>(0)
  const [numberOutputs, setNumberOutputs] = createSignal<number>(0)
  const [label, setLabel] = createSignal<string>("process")
  const [nodeType, setNodeType] = createSignal<string>("1")

  // Handlers
  function handleOnClickAdd(event: any) {
    event.stopPropagation()
    setIsOpen(true)
  }

  function handleOnClickAddNode(event: any) {
    event.stopPropagation()

    // Validate number of inputs and outputs
    if (
      numberInputs() > 4 ||
      numberInputs() < 0 ||
      numberOutputs() > 4 ||
      numberOutputs() < 0
    )
      return

    setIsOpen(false)
    props.onClickAdd(numberInputs(), numberOutputs(), label(), nodeType())
    setNumberInputs(0)
    setNumberOutputs(0)
    setLabel("process")
    setNodeType("1")
  }

  return (
    <div class={styles.wrapper}>
      <div class={styles.toolbar}>
        <label class={styles.label}>All Component</label>
        <button class={styles.buttonOval} onClick={handleOnClickAddNode}>
          Start
        </button>
        <button class={styles.buttonRect} onClick={handleOnClickAddNode}>
          Process
        </button>
        <button class={styles.buttonRect2} onClick={handleOnClickAddNode}>
          Process
        </button>
        <button class={styles.parallelogram} onClick={handleOnClickAddNode}>
          Business
        </button>
        <button class={styles.triangle} onClick={handleOnClickAddNode}>
          Decision
        </button>
      </div>
    </div>
  )
}

export default ToolbarTab
