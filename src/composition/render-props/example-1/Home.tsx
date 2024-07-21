import Tooltip from './Tooltip'

export default function HomeRenderProps() {
  return (
    <div>
      <Tooltip render={() => <span>Click me for more info</span>}>
        <button>Hover Me</button>
      </Tooltip>
    </div>
  )
}
