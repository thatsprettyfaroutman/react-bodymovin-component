# react-bodymovin-component

React [bodymovin](https://github.com/bodymovin/bodymovin) wrapper thingy.
![WD DOGGY](https://media.giphy.com/media/3ohhwvr6CZopVx2pz2/giphy.gif)

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
| `loop` | false | Loop animation |
| `autoplay` | false | Autoplay animation |
| `className` | null | Css classname |
