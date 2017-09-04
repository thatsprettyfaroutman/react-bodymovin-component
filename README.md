# react-bodymovin-component

### Usage
```
  import Bodymovin from 'react-bodymovin-component'

  import bodymovinJson from 'some.json'

  class {
    ...
    render() {
      return (
        <div className="SomeComponent">
          <Bodymovin src={bodymovinJson} />
        </div>
      )
    }
    ...
  }
```


### Options / props

| Prop | Default | Description      |
|-----------|:----------:|:---------|
| `src` | *required | Source json |
| `speed` | 1 | Speed multiplier, or something like that |
| `played` | false | Boolean to toggle whether animation should be played or not. Good for toggling animations |
| `hasSafeArea` | false | Safe area to support particles outside of the block. Used in one of my own projects... |
| `loop` | false | Loop animation |
| `autoplay` | false | Autoplay animation |
| `className` | null | Css classname |
